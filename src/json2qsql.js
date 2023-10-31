import {singular} from './naming.js';
import  ddl from "../src/ddl.js";


var json2qsql = (function () {
    function JSON2QSQL() {
        this.aggrCounts = {};   // key -> #of insert starements

        this.calculateCounts = function ( key, value ) {
            let tmp = this.aggrSizes[key];
            if( tmp == null )
                tmp = 0;
            let incr = 1;
            if( value.length != null )
                incr = value.length;
            this.aggrSizes[key] = tmp + incr;      

            for( let property in value ) {
                const type = typeof value[property];
                if( type == "object" )    
                    this.calculateCounts( property, value[property] )
            }
            
        }

        this.introspect = function( key, value, level, isM2O ) {
            if( level == 0 ) {
                this.aggrSizes = {};
                if( key == null ) {
                    for( let property in value ) {
                        //const field = value[property];
                        let suffixes = ["_address", "_id", "_name", "Id"];
                        let found = false;
                        let tmp = "";
                        for( let i = 0; i < suffixes.length; i++ ) {
                            const suffix = suffixes[i];
                            if( property.endsWith(suffix) ) {
                                tmp += property.substring(0,property.length-suffix.length)/*+'s'*/;
                                found = true;
                                break;
                            }
                        }
                        if( !found  )
                            tmp += "unnamed_entity";  
                        key = tmp; //.toLowerCase(); 
                        break;
                    }
                }
                this.calculateCounts(key, value);
            }
            let m2o = '';
            if( isM2O != null && isM2O ) {
                m2o = '>'
            }

            let output = '\n'+indent(level)+m2o+key;

            if( typeof value == 'number' ) {
                output += ' num';
                if( key.endsWith('_id') || key.endsWith('Id') ) {
                    output += ' /pk'
                    return output;
                }
            }

            if( typeof value == "object" ) {
                if( Array.isArray(value) ) {
                    for( let property in value ) {
                        if( 1 <= property )
                            console.log('1 <= property !');
                        const field = value[property];
                        return this.introspect(key, field, level, false);
                    }
                } else {
                    if( key != "" ) {
                        let arraySize = this.aggrSizes[key];
                        output += '  /insert '+arraySize;
                    }
                }
                let promotedField = "";
                for( let property in value ) {
                    const field = value[property];
                    if( property != null  ) {
                        const fld = singular(key);
                        const cmp = property.toLowerCase();
                        if( key != null && fld + "_id" == cmp /*&& arraySize == */ && 0 < level )
                            promotedField = property;
                        if( fld + "_id" == cmp )
                            continue;
                    }
                    let isM2O = typeof field == 'object';
                    const subtree = this.introspect(property, field, level + 1, isM2O);
                    output += subtree;
                }
                if( promotedField != "" )
                    output += '\n'+indent(level)+ promotedField;
            } else {
                //output += '=' + value;
            }

            if( level == 0 ) {
                output += "\n\ndv "+key+"_dv "+key +"";
                output += '\n\n#settings = { genpk: false, drop: true }';

                output += '\n\n-- Generated by json2qsql.js ' + `${ ddl.version } ` + new Date().toLocaleString() +'\n\n';

                output += '#document = \n';
                output += JSON.stringify(value, null, 3);    
                output += '\n';    
            }

            return output;
        };
    }

    function indent( depth ) {
        var s = "";
        for (var i = 0; i < depth; i++)
            s = s + "   ";
        return s;
    }

    function isPrimitive( value ) {
         return typeof value == 'number' || typeof value == 'string' || typeof value == 'boolean' ;
    }


    return new JSON2QSQL();
}());

export default json2qsql;