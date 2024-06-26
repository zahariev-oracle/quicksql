import split_str from './split_str.js';

const findErrors = (function () {

    function SyntaxError( message, from, to, severity ) {
        this.from = from;
        this.to = to;
        if( to == null )
            this.to = new Offset(from.line, from.depth+1);
        this.message = message;
        this.severity = severity;   // warning or error
        if( severity == null )
            this.severity = 'error';
    }

    function Offset( line, depth ) {
        this.line = line;     // 0-based
        this.depth = depth;   // 0-based
    }
    
    function checkSyntax( parsed ) {
        const ddl = parsed;
        const input = parsed.input;

        let ret = [];

        const lines = input.split("\n");
    
        let branches = []
        for( var i = 0; i < parsed.forest.length; i++ ) {
            if( parsed.forest[i].parseType() == 'table' )
                branches = branches.concat(parsed.forest[i].descendants());
        }
        ret = ret.concat(line_mismatch(branches));
        const descendants = ddl.descendants();
 
        for( let i = 0; i < descendants.length; i++ ) {
            const node = descendants[i];
            if( ddl.optionEQvalue('genpk', true) && descendants[i].parseName() == 'id' ) {
                const depth = node.content.toLowerCase().indexOf('id');
                ret.push(new SyntaxError( messages.duplicateId, new Offset(node.line, depth), new Offset(node.line, depth+2) ));
                continue;
            }
            const src2 = node.src[2];
            if( 2 < node.src.length && src2.value == '-' ) {
                const depth = src2.begin;
                ret.push(new SyntaxError(  messages.invalidDatatype, new Offset(node.line,depth), new Offset(node.line, depth+2) ));
                continue;
            }
            const src1 = node.src[1];
            if( 1 < node.src.length && src1.value == 'vc0' ) { 
                const depth = src1.begin;
                ret.push(new SyntaxError( messages.invalidDatatype, new Offset(node.line,depth) ));
                continue;
            }

            ret = ret.concat(ref_error_in_view(ddl,node));
            ret = ret.concat(fk_ref_error(ddl,node));
            ret = ret.concat(directive_typo(ddl,node));
        }

        return ret;
    }

    function directive_typo( ddl, node ) {
        const isTable = node.parseType() == 'table';
        var ret  = [];
            
        var chunks = node.src;
        var sawSlash = false;
        for( var j = 1; j < chunks.length; j++ ) { 
            if( chunks[j].value == '/' ) {
                sawSlash = true;
                continue;
            }
            if( sawSlash ) {
                sawSlash = false;
                if(  isTable && tableDirectives.indexOf(chunks[j].value.toLowerCase()) < 0 )
                    ret.push( new SyntaxError(
                        messages.tableDirectiveTypo,
                        new Offset(node.line, chunks[j].begin),
                        new Offset(node.line, chunks[j].begin+chunks[j].value.length)
                    ));
                if( !isTable && columnDirectives.indexOf(chunks[j].value.toLowerCase()) < 0 )        
                    ret.push( new SyntaxError(
                        messages.columnDirectiveTypo,
                        new Offset(node.line, chunks[j].begin),
                        new Offset(node.line, chunks[j].begin+chunks[j].value.length)
                    ));

                continue;
            }
        }
        return ret;
    }


    function ref_error_in_view( ddl, node ) {
        var ret  = [];
        
        if( node.parseType() == 'view' ) {
            var chunks = node.src;
            for( var j = 2; j < chunks.length; j++ ) { 
                var tbl = ddl.find(chunks[j].value);
                if( tbl == null ) {
                    ret.push( new SyntaxError(
                        messages.undefinedObject+chunks[j].value,
                        new Offset(node.line, chunks[j].begin),
                        new Offset(node.line, chunks[j].begin+chunks[j].value.length)
                    ));
                }
            }
        }
        return ret;
    }
    
    function fk_ref_error( ddl, node ) {
        var ret  = [];
        if( node.isOption("fk") || 0 < node.indexOf('reference', true) ) {
            let fk = null;
            let pos = node.indexOf('fk');
            if( pos < 0 )
                pos = node.indexOf('reference');
            pos++;
            if( node.src.length-1 < pos )
                return ret;
            if( node.src[pos].value == '/' )
                return ret;
            var tbl = ddl.find(node.src[pos].value);
            if(  tbl == null ) {
                ret.push( new SyntaxError(
                    messages.undefinedObject+node.src[pos].value,
                    new Offset(node.line, node.src[pos].begin),
                    new Offset(node.line, node.src[pos].begin+node.src[pos].value.length)
                ));                   
            }
        }
        return ret;
    }
    
    function line_mismatch( lines ) {
        var ret  = [];
        
        var indent = guessIndent( lines )
        
        for( var i = 1; i < lines.length; i++ ) {
            var line = lines[i];
            
            var lineIndent = depth(line);
                       
            if( lineIndent%indent != 0 )
                ret.push(new SyntaxError(
                    messages.misalignedAttribute+indent,
                    new Offset(line.line, lineIndent)
                )
            );
        }
    
        return ret;
    }
    return checkSyntax;
}());

const tableDirectives = [
       'api'
      ,'audit','auditcols',//'audit cols','audit columns'
      ,'check'
      ,'colprefix'
      ,'compress','compressed'
      ,'insert'
      ,'rest'
      ,'unique' , 'uk'
      ,'pk'
      ,'cascade','setnull' //'set null'
];

const columnDirectives = [
       'idx','index','indexed'
      ,'unique','uk'
      ,'check'
      ,'constant'
      ,'default'
      ,'values'
      ,'upper'
      ,'lower'
      ,'nn','not'//,'not null'
      ,'between'
      ,'references','reference'
      ,'cascade','setnull' //'set null'
      ,'fk'
      ,'pk' 
];

function guessIndent( lines ) {    	
    let depths = [];

    for( var i = 0; i < lines.length; i++ ) {
        var line = lines[i];
        depths[i] = depth(line);
    }

    let frequencies = [];
    for( let i = 0; i < depths.length; i++ ) {
        let j = parentIndex(depths, i);
        if( j != null ) {
            let f = frequencies[depths[i]-depths[j]];
            if( f == null )
                f = 0;
            frequencies[depths[i]-depths[j]] = f+1;
        }
    }

    let indent = null;
    for( let i in frequencies ) {
        if( indent == null || frequencies[indent] <= frequencies[i] )
            indent = parseInt(i); 
    }
    return indent;

}

function depth( line ) {
    return line.src[0].begin;
}

function parentIndex( depths, lineNo ) {
    for( let i = lineNo; 0 <= i; i-- ) 
        if( depths[i] < depths[lineNo] )
            return i;
    return null;
}


const messages = {
    duplicateId: 'Explicit ID column conflicts with genpk',
    invalidDatatype: 'Invalid Datatype',
    undefinedObject: 'Undefined Object: ',
    misalignedAttribute: 'Misaligned Table or Column; apparent indent = ',
    tableDirectiveTypo: 'Unknown Table directive',
    columnDirectiveTypo: 'Unknown Column directive',
}

export default {findErrors, messages};