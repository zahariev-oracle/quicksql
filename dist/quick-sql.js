function z(m) {
  return m == null ? m : m.toUpperCase().endsWith("IES") ? m.substring(0, m.length - 3) + "y" : m.toUpperCase().endsWith("ES") || m.toUpperCase().endsWith("S") ? m.substring(0, m.length - 1) : m;
}
function de(m, b) {
  let E = '"';
  if (m == null)
    return null;
  let k = !1;
  const M = "$#_ ";
  if (!m.startsWith(E) && !k) {
    const x = m;
    if (x.length > 0 && "0" <= x[0] && x[0] <= "9")
      k = !0;
    else
      for (let p in x) {
        const h = x[p];
        if (M.indexOf(h) < 0 && (h < "0" || "9" < h && h < "A" || "Z" < h && h < "a" || "z" < h)) {
          k = !0;
          break;
        }
      }
  }
  return (m.startsWith("_") || m.startsWith("$") || m.startsWith("#")) && (k = !0), k || (E = ""), E + m + E;
}
function me(m) {
  if (m == null)
    return null;
  if (m.indexOf('"') == 0)
    return m;
  let b = de(m);
  return b.indexOf('"') == 0 || (b = b.replace(/ /g, "_")), b;
}
function J(m, b, E) {
  let k = !1;
  E == null && (E = ""), m.indexOf('"') == 0 && (k = !0, m = m.substring(1, m.length - 1)), b.indexOf('"') == 0 && (k = !0, b = b.substring(1, b.length - 1)), E.indexOf('"') == 0 && (k = !0, E = E.substring(1, E.length - 1));
  let M = m + b + E;
  return k ? M = '"' + M + '"' : M = M.toLowerCase(), M;
}
var oe = function() {
  var m = [
    "Sales",
    "Finance",
    "Delivery",
    "Manufacturing",
    "Engineer",
    "Consultant",
    "Architect",
    "Manager",
    "Analyst",
    "Specialist",
    "Evangelist",
    "Salesman"
  ], b = [
    "\u300C\u8CA9\u58F2\u300D",
    "\u300C\u8CA1\u52D9\u300D",
    "\u300C\u914D\u9001\u300D",
    "\u300C\u88FD\u9020\u300D",
    "\u300C\u30A8\u30F3\u30B8\u30CB\u30A2\u300D",
    "\u300C\u30B3\u30F3\u30B5\u30EB\u30BF\u30F3\u30C8\u300D",
    "\u300C\u30A2\u30FC\u30AD\u30C6\u30AF\u30C8\u300D",
    "\u300C\u30DE\u30CD\u30FC\u30B8\u30E3\u30FC\u300D",
    "\u300C\u30A2\u30CA\u30EA\u30B9\u30C8\u300D",
    "\u300C\u30B9\u30DA\u30B7\u30E3\u30EA\u30B9\u30C8\u300D",
    "\u300C\u30A8\u30D0\u30F3\u30B8\u30A7\u30EA\u30B9\u30C8\u300D"
  ], E = [
    "\uC601\uC5C5",
    "\uAE08\uC735",
    "\uBC30\uC1A1",
    "\uC81C\uC870",
    "\uC5D4\uC9C0\uB2C8\uC5B4",
    "\uCEE8\uC124\uD134\uD2B8",
    "\uAC74\uCD95\uAC00",
    "\uAD00\uB9AC\uC790",
    "\uBD84\uC11D\uAC00",
    "\uC804\uBB38\uAC00",
    "\uC804\uB3C4\uC790",
    "\uD310\uB9E4\uC6D0"
  ];
  function k(M, x) {
    if (typeof x != "string" || M.substring(0, 2).toLowerCase() == "en")
      return x;
    x.indexOf("'") == 0 && (x = x.substring(1, x.length - 1));
    for (var p = -1, h = 0; h < m.length; h++)
      if (m[h] == x) {
        p = h;
        break;
      }
    return 0 <= p && M.substring(0, 2).toLowerCase() == "jp" && p < b.length ? "'" + b[p] + "'" : 0 <= p && M.substring(0, 2).toLowerCase() == "kr" && p < E.length ? "'" + E[p] + "'" : x;
  }
  return k;
}();
function he(m) {
  return m && m.__esModule && Object.prototype.hasOwnProperty.call(m, "default") ? m.default : m;
}
var re = { exports: {} };
(function(m, b) {
  (function() {
    var E = 9007199254740992, k = -E, M = "0123456789", x = "abcdefghijklmnopqrstuvwxyz", p = x.toUpperCase(), h = M + "abcdef";
    function y(e) {
      this.name = "UnsupportedError", this.message = e || "This feature is not supported on this platform";
    }
    y.prototype = new Error(), y.prototype.constructor = y;
    var S = Array.prototype.slice;
    function i(e) {
      if (!(this instanceof i))
        return e || (e = null), e === null ? new i() : new i(e);
      if (typeof e == "function")
        return this.random = e, this;
      arguments.length && (this.seed = 0);
      for (var a = 0; a < arguments.length; a++) {
        var n = 0;
        if (Object.prototype.toString.call(arguments[a]) === "[object String]")
          for (var s = 0; s < arguments[a].length; s++) {
            for (var c = 0, g = 0; g < arguments[a].length; g++)
              c = arguments[a].charCodeAt(g) + (c << 6) + (c << 16) - c;
            n += c;
          }
        else
          n = arguments[a];
        this.seed += (arguments.length - a) * n;
      }
      return this.mt = this.mersenne_twister(this.seed), this.bimd5 = this.blueimp_md5(), this.random = function() {
        return this.mt.random(this.seed);
      }, this;
    }
    i.prototype.VERSION = "1.1.11";
    function u(e, a) {
      if (e = e || {}, a)
        for (var n in a)
          typeof e[n] > "u" && (e[n] = a[n]);
      return e;
    }
    function r(e) {
      return Array.apply(null, Array(e)).map(function(a, n) {
        return n;
      });
    }
    function t(e, a) {
      if (e)
        throw new RangeError(a);
    }
    var l = function() {
      throw new Error("No Base64 encoder available.");
    };
    (function() {
      typeof btoa == "function" ? l = btoa : typeof Buffer == "function" && (l = function(a) {
        return new Buffer(a).toString("base64");
      });
    })(), i.prototype.bool = function(e) {
      return e = u(e, { likelihood: 50 }), t(
        e.likelihood < 0 || e.likelihood > 100,
        "Chance: Likelihood accepts values from 0 to 100."
      ), this.random() * 100 < e.likelihood;
    }, i.prototype.falsy = function(e) {
      e = u(e, { pool: [!1, null, 0, NaN, "", void 0] });
      var a = e.pool, n = this.integer({ min: 0, max: a.length - 1 }), s = a[n];
      return s;
    }, i.prototype.animal = function(e) {
      if (e = u(e), typeof e.type < "u")
        return t(
          !this.get("animals")[e.type.toLowerCase()],
          "Please pick from desert, ocean, grassland, forest, zoo, pets, farm."
        ), this.pick(this.get("animals")[e.type.toLowerCase()]);
      var a = ["desert", "forest", "ocean", "zoo", "farm", "pet", "grassland"];
      return this.pick(this.get("animals")[this.pick(a)]);
    }, i.prototype.character = function(e) {
      e = u(e);
      var a = "!@#$%^&*()[]", n, s;
      return e.casing === "lower" ? n = x : e.casing === "upper" ? n = p : n = x + p, e.pool ? s = e.pool : (s = "", e.alpha && (s += n), e.numeric && (s += M), e.symbols && (s += a), s || (s = n + M + a)), s.charAt(this.natural({ max: s.length - 1 }));
    }, i.prototype.floating = function(e) {
      e = u(e, { fixed: 4 }), t(
        e.fixed && e.precision,
        "Chance: Cannot specify both fixed and precision."
      );
      var a, n = Math.pow(10, e.fixed), s = E / n, c = -s;
      t(
        e.min && e.fixed && e.min < c,
        "Chance: Min specified is out of range with fixed. Min should be, at least, " + c
      ), t(
        e.max && e.fixed && e.max > s,
        "Chance: Max specified is out of range with fixed. Max should be, at most, " + s
      ), e = u(e, { min: c, max: s }), a = this.integer({ min: e.min * n, max: e.max * n });
      var g = (a / n).toFixed(e.fixed);
      return parseFloat(g);
    }, i.prototype.integer = function(e) {
      return e = u(e, { min: k, max: E }), t(e.min > e.max, "Chance: Min cannot be greater than Max."), Math.floor(this.random() * (e.max - e.min + 1) + e.min);
    }, i.prototype.natural = function(e) {
      if (e = u(e, { min: 0, max: E }), typeof e.numerals == "number" && (t(e.numerals < 1, "Chance: Numerals cannot be less than one."), e.min = Math.pow(10, e.numerals - 1), e.max = Math.pow(10, e.numerals) - 1), t(e.min < 0, "Chance: Min cannot be less than zero."), e.exclude) {
        t(!Array.isArray(e.exclude), "Chance: exclude must be an array.");
        for (var a in e.exclude)
          t(!Number.isInteger(e.exclude[a]), "Chance: exclude must be numbers.");
        var n = e.min + this.natural({ max: e.max - e.min - e.exclude.length }), s = e.exclude.sort();
        for (var c in s) {
          if (n < s[c])
            break;
          n++;
        }
        return n;
      }
      return this.integer(e);
    }, i.prototype.prime = function(e) {
      e = u(e, { min: 0, max: 1e4 }), t(e.min < 0, "Chance: Min cannot be less than zero."), t(e.min > e.max, "Chance: Min cannot be greater than Max.");
      var a = T.primes[T.primes.length - 1];
      if (e.max > a)
        for (var n = a + 2; n <= e.max; ++n)
          this.is_prime(n) && T.primes.push(n);
      var s = T.primes.filter(function(c) {
        return c >= e.min && c <= e.max;
      });
      return this.pick(s);
    }, i.prototype.is_prime = function(e) {
      if (e % 1 || e < 2)
        return !1;
      if (e % 2 === 0)
        return e === 2;
      if (e % 3 === 0)
        return e === 3;
      for (var a = Math.sqrt(e), n = 5; n <= a; n += 6)
        if (e % n === 0 || e % (n + 2) === 0)
          return !1;
      return !0;
    }, i.prototype.hex = function(e) {
      e = u(e, { min: 0, max: E, casing: "lower" }), t(e.min < 0, "Chance: Min cannot be less than zero.");
      var a = this.natural({ min: e.min, max: e.max });
      return e.casing === "upper" ? a.toString(16).toUpperCase() : a.toString(16);
    }, i.prototype.letter = function(e) {
      e = u(e, { casing: "lower" });
      var a = "abcdefghijklmnopqrstuvwxyz", n = this.character({ pool: a });
      return e.casing === "upper" && (n = n.toUpperCase()), n;
    }, i.prototype.string = function(e) {
      e = u(e, { min: 5, max: 20 }), e.length !== 0 && !e.length && (e.length = this.natural({ min: e.min, max: e.max })), t(e.length < 0, "Chance: Length cannot be less than zero.");
      var a = e.length, n = this.n(this.character, a, e);
      return n.join("");
    };
    function o(e) {
      this.c = e;
    }
    o.prototype = {
      substitute: function() {
        return this.c;
      }
    };
    function d(e) {
      this.c = e;
    }
    d.prototype = {
      substitute: function() {
        if (!/[{}\\]/.test(this.c))
          throw new Error('Invalid escape sequence: "\\' + this.c + '".');
        return this.c;
      }
    };
    function L(e) {
      this.c = e;
    }
    L.prototype = {
      replacers: {
        "#": function(e) {
          return e.character({ pool: M });
        },
        A: function(e) {
          return e.character({ pool: p });
        },
        a: function(e) {
          return e.character({ pool: x });
        }
      },
      substitute: function(e) {
        var a = this.replacers[this.c];
        if (!a)
          throw new Error('Invalid replacement character: "' + this.c + '".');
        return a(e);
      }
    };
    function B(e) {
      for (var a = [], n = "identity", s = 0; s < e.length; s++) {
        var c = e[s];
        switch (n) {
          case "escape":
            a.push(new d(c)), n = "identity";
            break;
          case "identity":
            c === "{" ? n = "replace" : c === "\\" ? n = "escape" : a.push(new o(c));
            break;
          case "replace":
            c === "}" ? n = "identity" : a.push(new L(c));
            break;
        }
      }
      return a;
    }
    i.prototype.template = function(e) {
      if (!e)
        throw new Error("Template string is required");
      var a = this;
      return B(e).map(function(n) {
        return n.substitute(a);
      }).join("");
    }, i.prototype.buffer = function(e) {
      if (typeof Buffer > "u")
        throw new y("Sorry, the buffer() function is not supported on your platform");
      e = u(e, { length: this.natural({ min: 5, max: 20 }) }), t(e.length < 0, "Chance: Length cannot be less than zero.");
      var a = e.length, n = this.n(this.character, a, e);
      return Buffer.from(n);
    }, i.prototype.capitalize = function(e) {
      return e.charAt(0).toUpperCase() + e.substr(1);
    }, i.prototype.mixin = function(e) {
      for (var a in e)
        this[a] = e[a];
      return this;
    }, i.prototype.unique = function(e, a, n) {
      t(
        typeof e != "function",
        "Chance: The first argument must be a function."
      );
      var s = function(A, H) {
        return A.indexOf(H) !== -1;
      };
      n && (s = n.comparator || s);
      for (var c = [], g = 0, P, f = a * 50, v = S.call(arguments, 2); c.length < a; ) {
        var C = JSON.parse(JSON.stringify(v));
        if (P = e.apply(this, C), s(c, P) || (c.push(P), g = 0), ++g > f)
          throw new RangeError("Chance: num is likely too large for sample set");
      }
      return c;
    }, i.prototype.n = function(e, a) {
      t(
        typeof e != "function",
        "Chance: The first argument must be a function."
      ), typeof a > "u" && (a = 1);
      var n = a, s = [], c = S.call(arguments, 2);
      for (n = Math.max(0, n), null; n--; null)
        s.push(e.apply(this, c));
      return s;
    }, i.prototype.pad = function(e, a, n) {
      return n = n || "0", e = e + "", e.length >= a ? e : new Array(a - e.length + 1).join(n) + e;
    }, i.prototype.pick = function(e, a) {
      if (e.length === 0)
        throw new RangeError("Chance: Cannot pick() from an empty array");
      return !a || a === 1 ? e[this.natural({ max: e.length - 1 })] : this.shuffle(e).slice(0, a);
    }, i.prototype.pickone = function(e) {
      if (e.length === 0)
        throw new RangeError("Chance: Cannot pickone() from an empty array");
      return e[this.natural({ max: e.length - 1 })];
    }, i.prototype.pickset = function(e, a) {
      if (a === 0)
        return [];
      if (e.length === 0)
        throw new RangeError("Chance: Cannot pickset() from an empty array");
      if (a < 0)
        throw new RangeError("Chance: Count must be a positive number");
      if (!a || a === 1)
        return [this.pickone(e)];
      var n = e.slice(0), s = n.length;
      return this.n(function() {
        var c = this.natural({ max: --s }), g = n[c];
        return n[c] = n[s], g;
      }, Math.min(s, a));
    }, i.prototype.shuffle = function(e) {
      for (var a = [], n = 0, s = Number(e.length), c = r(s), g = s - 1, P, f = 0; f < s; f++)
        P = this.natural({ max: g }), n = c[P], a[f] = e[n], c[P] = c[g], g -= 1;
      return a;
    }, i.prototype.weighted = function(e, a, n) {
      if (e.length !== a.length)
        throw new RangeError("Chance: Length of array and weights must match");
      for (var s = 0, c, g = 0; g < a.length; ++g) {
        if (c = a[g], isNaN(c))
          throw new RangeError("Chance: All weights must be numbers");
        c > 0 && (s += c);
      }
      if (s === 0)
        throw new RangeError("Chance: No valid entries in array weights");
      var P = this.random() * s, f = 0, v = -1, C;
      for (g = 0; g < a.length; ++g) {
        if (c = a[g], f += c, c > 0) {
          if (P <= f) {
            C = g;
            break;
          }
          v = g;
        }
        g === a.length - 1 && (C = v);
      }
      var A = e[C];
      return n = typeof n > "u" ? !1 : n, n && (e.splice(C, 1), a.splice(C, 1)), A;
    }, i.prototype.paragraph = function(e) {
      e = u(e);
      var a = e.sentences || this.natural({ min: 3, max: 7 }), n = this.n(this.sentence, a), s = e.linebreak === !0 ? `
` : " ";
      return n.join(s);
    }, i.prototype.sentence = function(e) {
      e = u(e);
      var a = e.words || this.natural({ min: 12, max: 18 }), n = e.punctuation, s, c = this.n(this.word, a);
      return s = c.join(" "), s = this.capitalize(s), n !== !1 && !/^[.?;!:]$/.test(n) && (n = "."), n && (s += n), s;
    }, i.prototype.syllable = function(e) {
      e = u(e);
      for (var a = e.length || this.natural({ min: 2, max: 3 }), n = "bcdfghjklmnprstvwz", s = "aeiou", c = n + s, g = "", P, f = 0; f < a; f++)
        f === 0 ? P = this.character({ pool: c }) : n.indexOf(P) === -1 ? P = this.character({ pool: n }) : P = this.character({ pool: s }), g += P;
      return e.capitalize && (g = this.capitalize(g)), g;
    }, i.prototype.word = function(e) {
      e = u(e), t(
        e.syllables && e.length,
        "Chance: Cannot specify both syllables AND length."
      );
      var a = e.syllables || this.natural({ min: 1, max: 3 }), n = "";
      if (e.length) {
        do
          n += this.syllable();
        while (n.length < e.length);
        n = n.substring(0, e.length);
      } else
        for (var s = 0; s < a; s++)
          n += this.syllable();
      return e.capitalize && (n = this.capitalize(n)), n;
    }, i.prototype.age = function(e) {
      e = u(e);
      var a;
      switch (e.type) {
        case "child":
          a = { min: 0, max: 12 };
          break;
        case "teen":
          a = { min: 13, max: 19 };
          break;
        case "adult":
          a = { min: 18, max: 65 };
          break;
        case "senior":
          a = { min: 65, max: 100 };
          break;
        case "all":
          a = { min: 0, max: 100 };
          break;
        default:
          a = { min: 18, max: 65 };
          break;
      }
      return this.natural(a);
    }, i.prototype.birthday = function(e) {
      var a = this.age(e), n = /* @__PURE__ */ new Date(), s = n.getFullYear();
      if (e && e.type) {
        var c = /* @__PURE__ */ new Date(), g = /* @__PURE__ */ new Date();
        c.setFullYear(s - a - 1), g.setFullYear(s - a), e = u(e, {
          min: c,
          max: g
        });
      } else if (e && (e.minAge !== void 0 || e.maxAge !== void 0)) {
        t(e.minAge < 0, "Chance: MinAge cannot be less than zero."), t(e.minAge > e.maxAge, "Chance: MinAge cannot be greater than MaxAge.");
        var P = e.minAge !== void 0 ? e.minAge : 0, f = e.maxAge !== void 0 ? e.maxAge : 100, v = new Date(s - f - 1, n.getMonth(), n.getDate()), C = new Date(s - P, n.getMonth(), n.getDate());
        v.setDate(v.getDate() + 1), C.setDate(C.getDate() + 1), C.setMilliseconds(C.getMilliseconds() - 1), e = u(e, {
          min: v,
          max: C
        });
      } else
        e = u(e, {
          year: s - a
        });
      return this.date(e);
    }, i.prototype.cpf = function(e) {
      e = u(e, {
        formatted: !0
      });
      var a = this.n(this.natural, 9, { max: 9 }), n = a[8] * 2 + a[7] * 3 + a[6] * 4 + a[5] * 5 + a[4] * 6 + a[3] * 7 + a[2] * 8 + a[1] * 9 + a[0] * 10;
      n = 11 - n % 11, n >= 10 && (n = 0);
      var s = n * 2 + a[8] * 3 + a[7] * 4 + a[6] * 5 + a[5] * 6 + a[4] * 7 + a[3] * 8 + a[2] * 9 + a[1] * 10 + a[0] * 11;
      s = 11 - s % 11, s >= 10 && (s = 0);
      var c = "" + a[0] + a[1] + a[2] + "." + a[3] + a[4] + a[5] + "." + a[6] + a[7] + a[8] + "-" + n + s;
      return e.formatted ? c : c.replace(/\D/g, "");
    }, i.prototype.cnpj = function(e) {
      e = u(e, {
        formatted: !0
      });
      var a = this.n(this.natural, 12, { max: 12 }), n = a[11] * 2 + a[10] * 3 + a[9] * 4 + a[8] * 5 + a[7] * 6 + a[6] * 7 + a[5] * 8 + a[4] * 9 + a[3] * 2 + a[2] * 3 + a[1] * 4 + a[0] * 5;
      n = 11 - n % 11, n < 2 && (n = 0);
      var s = n * 2 + a[11] * 3 + a[10] * 4 + a[9] * 5 + a[8] * 6 + a[7] * 7 + a[6] * 8 + a[5] * 9 + a[4] * 2 + a[3] * 3 + a[2] * 4 + a[1] * 5 + a[0] * 6;
      s = 11 - s % 11, s < 2 && (s = 0);
      var c = "" + a[0] + a[1] + "." + a[2] + a[3] + a[4] + "." + a[5] + a[6] + a[7] + "/" + a[8] + a[9] + a[10] + a[11] + "-" + n + s;
      return e.formatted ? c : c.replace(/\D/g, "");
    }, i.prototype.first = function(e) {
      return e = u(e, { gender: this.gender(), nationality: "en" }), this.pick(this.get("firstNames")[e.gender.toLowerCase()][e.nationality.toLowerCase()]);
    }, i.prototype.profession = function(e) {
      return e = u(e), e.rank ? this.pick(["Apprentice ", "Junior ", "Senior ", "Lead "]) + this.pick(this.get("profession")) : this.pick(this.get("profession"));
    }, i.prototype.company = function() {
      return this.pick(this.get("company"));
    }, i.prototype.gender = function(e) {
      return e = u(e, { extraGenders: [] }), this.pick(["Male", "Female"].concat(e.extraGenders));
    }, i.prototype.last = function(e) {
      if (e = u(e, { nationality: "*" }), e.nationality === "*") {
        var a = [], n = this.get("lastNames");
        return Object.keys(n).forEach(function(s) {
          a = a.concat(n[s]);
        }), this.pick(a);
      } else
        return this.pick(this.get("lastNames")[e.nationality.toLowerCase()]);
    }, i.prototype.israelId = function() {
      for (var e = this.string({ pool: "0123456789", length: 8 }), a = 0, n = 0; n < e.length; n++) {
        var s = e[n] * (n / 2 === parseInt(n / 2) ? 1 : 2);
        s = this.pad(s, 2).toString(), s = parseInt(s[0]) + parseInt(s[1]), a = a + s;
      }
      return e = e + (10 - parseInt(a.toString().slice(-1))).toString().slice(-1), e;
    }, i.prototype.mrz = function(e) {
      var a = function(c) {
        var g = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""), P = [7, 3, 1], f = 0;
        return typeof c != "string" && (c = c.toString()), c.split("").forEach(function(v, C) {
          var A = g.indexOf(v);
          A !== -1 ? v = A === 0 ? 0 : A + 9 : v = parseInt(v, 10), v *= P[C % P.length], f += v;
        }), f % 10;
      }, n = function(c) {
        var g = function(f) {
          return new Array(f + 1).join("<");
        }, P = [
          "P<",
          c.issuer,
          c.last.toUpperCase(),
          "<<",
          c.first.toUpperCase(),
          g(39 - (c.last.length + c.first.length + 2)),
          c.passportNumber,
          a(c.passportNumber),
          c.nationality,
          c.dob,
          a(c.dob),
          c.gender,
          c.expiry,
          a(c.expiry),
          g(14),
          a(g(14))
        ].join("");
        return P + a(P.substr(44, 10) + P.substr(57, 7) + P.substr(65, 7));
      }, s = this;
      return e = u(e, {
        first: this.first(),
        last: this.last(),
        passportNumber: this.integer({ min: 1e8, max: 999999999 }),
        dob: function() {
          var c = s.birthday({ type: "adult" });
          return [
            c.getFullYear().toString().substr(2),
            s.pad(c.getMonth() + 1, 2),
            s.pad(c.getDate(), 2)
          ].join("");
        }(),
        expiry: function() {
          var c = /* @__PURE__ */ new Date();
          return [
            (c.getFullYear() + 5).toString().substr(2),
            s.pad(c.getMonth() + 1, 2),
            s.pad(c.getDate(), 2)
          ].join("");
        }(),
        gender: this.gender() === "Female" ? "F" : "M",
        issuer: "GBR",
        nationality: "GBR"
      }), n(e);
    }, i.prototype.name = function(e) {
      e = u(e);
      var a = this.first(e), n = this.last(e), s;
      return e.middle ? s = a + " " + this.first(e) + " " + n : e.middle_initial ? s = a + " " + this.character({ alpha: !0, casing: "upper" }) + ". " + n : s = a + " " + n, e.prefix && (s = this.prefix(e) + " " + s), e.suffix && (s = s + " " + this.suffix(e)), s;
    }, i.prototype.name_prefixes = function(e) {
      e = e || "all", e = e.toLowerCase();
      var a = [
        { name: "Doctor", abbreviation: "Dr." }
      ];
      return (e === "male" || e === "all") && a.push({ name: "Mister", abbreviation: "Mr." }), (e === "female" || e === "all") && (a.push({ name: "Miss", abbreviation: "Miss" }), a.push({ name: "Misses", abbreviation: "Mrs." })), a;
    }, i.prototype.prefix = function(e) {
      return this.name_prefix(e);
    }, i.prototype.name_prefix = function(e) {
      return e = u(e, { gender: "all" }), e.full ? this.pick(this.name_prefixes(e.gender)).name : this.pick(this.name_prefixes(e.gender)).abbreviation;
    }, i.prototype.HIDN = function() {
      var e = "0123456789", a = "ABCDEFGHIJKLMNOPQRSTUVWXYXZ", n = "";
      return n += this.string({ pool: e, length: 6 }), n += this.string({ pool: a, length: 2 }), n;
    }, i.prototype.ssn = function(e) {
      e = u(e, { ssnFour: !1, dashes: !0 });
      var a = "1234567890", n, s = e.dashes ? "-" : "";
      return e.ssnFour ? n = this.string({ pool: a, length: 4 }) : n = this.string({ pool: a, length: 3 }) + s + this.string({ pool: a, length: 2 }) + s + this.string({ pool: a, length: 4 }), n;
    }, i.prototype.aadhar = function(e) {
      e = u(e, { onlyLastFour: !1, separatedByWhiteSpace: !0 });
      var a = "1234567890", n, s = e.separatedByWhiteSpace ? " " : "";
      return e.onlyLastFour ? n = this.string({ pool: a, length: 4 }) : n = this.string({ pool: a, length: 4 }) + s + this.string({ pool: a, length: 4 }) + s + this.string({ pool: a, length: 4 }), n;
    }, i.prototype.name_suffixes = function() {
      var e = [
        { name: "Doctor of Osteopathic Medicine", abbreviation: "D.O." },
        { name: "Doctor of Philosophy", abbreviation: "Ph.D." },
        { name: "Esquire", abbreviation: "Esq." },
        { name: "Junior", abbreviation: "Jr." },
        { name: "Juris Doctor", abbreviation: "J.D." },
        { name: "Master of Arts", abbreviation: "M.A." },
        { name: "Master of Business Administration", abbreviation: "M.B.A." },
        { name: "Master of Science", abbreviation: "M.S." },
        { name: "Medical Doctor", abbreviation: "M.D." },
        { name: "Senior", abbreviation: "Sr." },
        { name: "The Third", abbreviation: "III" },
        { name: "The Fourth", abbreviation: "IV" },
        { name: "Bachelor of Engineering", abbreviation: "B.E" },
        { name: "Bachelor of Technology", abbreviation: "B.TECH" }
      ];
      return e;
    }, i.prototype.suffix = function(e) {
      return this.name_suffix(e);
    }, i.prototype.name_suffix = function(e) {
      return e = u(e), e.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation;
    }, i.prototype.nationalities = function() {
      return this.get("nationalities");
    }, i.prototype.nationality = function() {
      var e = this.pick(this.nationalities());
      return e.name;
    }, i.prototype.zodiac = function() {
      const e = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
      return this.pickone(e);
    }, i.prototype.android_id = function() {
      return "APA91" + this.string({ pool: "0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_", length: 178 });
    }, i.prototype.apple_token = function() {
      return this.string({ pool: "abcdef1234567890", length: 64 });
    }, i.prototype.wp8_anid2 = function() {
      return l(this.hash({ length: 32 }));
    }, i.prototype.wp7_anid = function() {
      return "A=" + this.guid().replace(/-/g, "").toUpperCase() + "&E=" + this.hash({ length: 3 }) + "&W=" + this.integer({ min: 0, max: 9 });
    }, i.prototype.bb_pin = function() {
      return this.hash({ length: 8 });
    }, i.prototype.avatar = function(e) {
      var a = null, n = "//www.gravatar.com/avatar/", s = {
        http: "http",
        https: "https"
      }, c = {
        bmp: "bmp",
        gif: "gif",
        jpg: "jpg",
        png: "png"
      }, g = {
        404: "404",
        // Return 404 if not found
        mm: "mm",
        // Mystery man
        identicon: "identicon",
        // Geometric pattern based on hash
        monsterid: "monsterid",
        // A generated monster icon
        wavatar: "wavatar",
        // A generated face
        retro: "retro",
        // 8-bit icon
        blank: "blank"
        // A transparent png
      }, P = {
        g: "g",
        pg: "pg",
        r: "r",
        x: "x"
      }, f = {
        protocol: null,
        email: null,
        fileExtension: null,
        size: null,
        fallback: null,
        rating: null
      };
      if (!e)
        f.email = this.email(), e = {};
      else if (typeof e == "string")
        f.email = e, e = {};
      else {
        if (typeof e != "object")
          return null;
        if (e.constructor === "Array")
          return null;
      }
      return f = u(e, f), f.email || (f.email = this.email()), f.protocol = s[f.protocol] ? f.protocol + ":" : "", f.size = parseInt(f.size, 0) ? f.size : "", f.rating = P[f.rating] ? f.rating : "", f.fallback = g[f.fallback] ? f.fallback : "", f.fileExtension = c[f.fileExtension] ? f.fileExtension : "", a = f.protocol + n + this.bimd5.md5(f.email) + (f.fileExtension ? "." + f.fileExtension : "") + (f.size || f.rating || f.fallback ? "?" : "") + (f.size ? "&s=" + f.size.toString() : "") + (f.rating ? "&r=" + f.rating : "") + (f.fallback ? "&d=" + f.fallback : ""), a;
    }, i.prototype.color = function(e) {
      function a(U, $) {
        return [U, U, U].join($ || "");
      }
      function n(U) {
        var $ = U ? "rgba" : "rgb", ne = U ? "," + this.floating({ min: W, max: K }) : "", ie = c ? a(this.natural({ min: g, max: P }), ",") : this.natural({ min: C, max: A }) + "," + this.natural({ min: H, max: _ }) + "," + this.natural({ max: 255 });
        return $ + "(" + ie + ne + ")";
      }
      function s(U, $, ne) {
        var ie = ne ? "#" : "", q = "";
        return c ? (q = a(this.pad(this.hex({ min: g, max: P }), 2)), e.format === "shorthex" && (q = a(this.hex({ min: 0, max: 15 })))) : e.format === "shorthex" ? q = this.pad(this.hex({ min: Math.floor(f / 16), max: Math.floor(v / 16) }), 1) + this.pad(this.hex({ min: Math.floor(C / 16), max: Math.floor(A / 16) }), 1) + this.pad(this.hex({ min: Math.floor(H / 16), max: Math.floor(_ / 16) }), 1) : f !== void 0 || v !== void 0 || C !== void 0 || A !== void 0 || H !== void 0 || _ !== void 0 ? q = this.pad(this.hex({ min: f, max: v }), 2) + this.pad(this.hex({ min: C, max: A }), 2) + this.pad(this.hex({ min: H, max: _ }), 2) : q = this.pad(this.hex({ min: g, max: P }), 2) + this.pad(this.hex({ min: g, max: P }), 2) + this.pad(this.hex({ min: g, max: P }), 2), ie + q;
      }
      e = u(e, {
        format: this.pick(["hex", "shorthex", "rgb", "rgba", "0x", "name"]),
        grayscale: !1,
        casing: "lower",
        min: 0,
        max: 255,
        min_red: void 0,
        max_red: void 0,
        min_green: void 0,
        max_green: void 0,
        min_blue: void 0,
        max_blue: void 0,
        min_alpha: 0,
        max_alpha: 1
      });
      var c = e.grayscale, g = e.min, P = e.max, f = e.min_red, v = e.max_red, C = e.min_green, A = e.max_green, H = e.min_blue, _ = e.max_blue, W = e.min_alpha, K = e.max_alpha;
      e.min_red === void 0 && (f = g), e.max_red === void 0 && (v = P), e.min_green === void 0 && (C = g), e.max_green === void 0 && (A = P), e.min_blue === void 0 && (H = g), e.max_blue === void 0 && (_ = P), e.min_alpha === void 0 && (W = 0), e.max_alpha === void 0 && (K = 1), c && g === 0 && P === 255 && f !== void 0 && v !== void 0 && (g = (f + C + H) / 3, P = (v + A + _) / 3);
      var V;
      if (e.format === "hex")
        V = s.call(this, 2, 6, !0);
      else if (e.format === "shorthex")
        V = s.call(this, 1, 3, !0);
      else if (e.format === "rgb")
        V = n.call(this, !1);
      else if (e.format === "rgba")
        V = n.call(this, !0);
      else if (e.format === "0x")
        V = "0x" + s.call(this, 2, 6);
      else {
        if (e.format === "name")
          return this.pick(this.get("colorNames"));
        throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');
      }
      return e.casing === "upper" && (V = V.toUpperCase()), V;
    }, i.prototype.domain = function(e) {
      return e = u(e), this.word() + "." + (e.tld || this.tld());
    }, i.prototype.email = function(e) {
      return e = u(e), this.word({ length: e.length }) + "@" + (e.domain || this.domain());
    }, i.prototype.fbid = function() {
      return "10000" + this.string({ pool: "1234567890", length: 11 });
    }, i.prototype.google_analytics = function() {
      var e = this.pad(this.natural({ max: 999999 }), 6), a = this.pad(this.natural({ max: 99 }), 2);
      return "UA-" + e + "-" + a;
    }, i.prototype.hashtag = function() {
      return "#" + this.word();
    }, i.prototype.ip = function() {
      return this.natural({ min: 1, max: 254 }) + "." + this.natural({ max: 255 }) + "." + this.natural({ max: 255 }) + "." + this.natural({ min: 1, max: 254 });
    }, i.prototype.ipv6 = function() {
      var e = this.n(this.hash, 8, { length: 4 });
      return e.join(":");
    }, i.prototype.klout = function() {
      return this.natural({ min: 1, max: 99 });
    }, i.prototype.mac = function(e) {
      return e = u(e, { delimiter: ":" }), this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2) + e.delimiter + this.pad(this.natural({ max: 255 }).toString(16), 2);
    }, i.prototype.semver = function(e) {
      e = u(e, { include_prerelease: !0 });
      var a = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
      e.range && (a = e.range);
      var n = "";
      return e.include_prerelease && (n = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1])), a + this.rpg("3d10").join(".") + n;
    }, i.prototype.tlds = function() {
      return ["com", "org", "edu", "gov", "co.uk", "net", "io", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"];
    }, i.prototype.tld = function() {
      return this.pick(this.tlds());
    }, i.prototype.twitter = function() {
      return "@" + this.word();
    }, i.prototype.url = function(e) {
      e = u(e, { protocol: "http", domain: this.domain(e), domain_prefix: "", path: this.word(), extensions: [] });
      var a = e.extensions.length > 0 ? "." + this.pick(e.extensions) : "", n = e.domain_prefix ? e.domain_prefix + "." + e.domain : e.domain;
      return e.protocol + "://" + n + "/" + e.path + a;
    }, i.prototype.port = function() {
      return this.integer({ min: 0, max: 65535 });
    }, i.prototype.locale = function(e) {
      return e = u(e), e.region ? this.pick(this.get("locale_regions")) : this.pick(this.get("locale_languages"));
    }, i.prototype.locales = function(e) {
      return e = u(e), e.region ? this.get("locale_regions") : this.get("locale_languages");
    }, i.prototype.loremPicsum = function(e) {
      e = u(e, { width: 500, height: 500, greyscale: !1, blurred: !1 });
      var a = e.greyscale ? "g/" : "", n = e.blurred ? "/?blur" : "/?random";
      return "https://picsum.photos/" + a + e.width + "/" + e.height + n;
    }, i.prototype.address = function(e) {
      return e = u(e), this.natural({ min: 5, max: 2e3 }) + " " + this.street(e);
    }, i.prototype.altitude = function(e) {
      return e = u(e, { fixed: 5, min: 0, max: 8848 }), this.floating({
        min: e.min,
        max: e.max,
        fixed: e.fixed
      });
    }, i.prototype.areacode = function(e) {
      e = u(e, { parens: !0 });
      var a = e.exampleNumber ? "555" : this.natural({ min: 2, max: 9 }).toString() + this.natural({ min: 0, max: 8 }).toString() + this.natural({ min: 0, max: 9 }).toString();
      return e.parens ? "(" + a + ")" : a;
    }, i.prototype.city = function() {
      return this.capitalize(this.word({ syllables: 3 }));
    }, i.prototype.coordinates = function(e) {
      return this.latitude(e) + ", " + this.longitude(e);
    }, i.prototype.countries = function() {
      return this.get("countries");
    }, i.prototype.country = function(e) {
      e = u(e);
      var a = this.pick(this.countries());
      return e.raw ? a : e.full ? a.name : a.abbreviation;
    }, i.prototype.depth = function(e) {
      return e = u(e, { fixed: 5, min: -10994, max: 0 }), this.floating({
        min: e.min,
        max: e.max,
        fixed: e.fixed
      });
    }, i.prototype.geohash = function(e) {
      return e = u(e, { length: 7 }), this.string({ length: e.length, pool: "0123456789bcdefghjkmnpqrstuvwxyz" });
    }, i.prototype.geojson = function(e) {
      return this.latitude(e) + ", " + this.longitude(e) + ", " + this.altitude(e);
    }, i.prototype.latitude = function(e) {
      var [a, n, s] = ["ddm", "dms", "dd"];
      e = u(
        e,
        e && e.format && [a, n].includes(e.format.toLowerCase()) ? { min: 0, max: 89, fixed: 4 } : { fixed: 5, min: -90, max: 90, format: s }
      );
      var c = e.format.toLowerCase();
      switch ((c === a || c === n) && (t(e.min < 0 || e.min > 89, "Chance: Min specified is out of range. Should be between 0 - 89"), t(e.max < 0 || e.max > 89, "Chance: Max specified is out of range. Should be between 0 - 89"), t(e.fixed > 4, "Chance: Fixed specified should be below or equal to 4")), c) {
        case a:
          return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.floating({ min: 0, max: 59, fixed: e.fixed });
        case n:
          return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.integer({ min: 0, max: 59 }) + "\u2019" + this.floating({ min: 0, max: 59, fixed: e.fixed }) + "\u201D";
        case s:
        default:
          return this.floating({ min: e.min, max: e.max, fixed: e.fixed });
      }
    }, i.prototype.longitude = function(e) {
      var [a, n, s] = ["ddm", "dms", "dd"];
      e = u(
        e,
        e && e.format && [a, n].includes(e.format.toLowerCase()) ? { min: 0, max: 179, fixed: 4 } : { fixed: 5, min: -180, max: 180, format: s }
      );
      var c = e.format.toLowerCase();
      switch ((c === a || c === n) && (t(e.min < 0 || e.min > 179, "Chance: Min specified is out of range. Should be between 0 - 179"), t(e.max < 0 || e.max > 179, "Chance: Max specified is out of range. Should be between 0 - 179"), t(e.fixed > 4, "Chance: Fixed specified should be below or equal to 4")), c) {
        case a:
          return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.floating({ min: 0, max: 59.9999, fixed: e.fixed });
        case n:
          return this.integer({ min: e.min, max: e.max }) + "\xB0" + this.integer({ min: 0, max: 59 }) + "\u2019" + this.floating({ min: 0, max: 59.9999, fixed: e.fixed }) + "\u201D";
        case s:
        default:
          return this.floating({ min: e.min, max: e.max, fixed: e.fixed });
      }
    }, i.prototype.phone = function(e) {
      var a = this, n, s = function(H) {
        var _ = [];
        return H.sections.forEach(function(W) {
          _.push(a.string({ pool: "0123456789", length: W }));
        }), H.area + _.join(" ");
      };
      e = u(e, {
        formatted: !0,
        country: "us",
        mobile: !1,
        exampleNumber: !1
      }), e.formatted || (e.parens = !1);
      var c;
      switch (e.country) {
        case "fr":
          e.mobile ? (n = this.pick(["06", "07"]) + a.string({ pool: "0123456789", length: 8 }), c = e.formatted ? n.match(/../g).join(" ") : n) : (n = this.pick([
            // Valid zone and département codes.
            "01" + this.pick(["30", "34", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "53", "55", "56", "58", "60", "64", "69", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83"]) + a.string({ pool: "0123456789", length: 6 }),
            "02" + this.pick(["14", "18", "22", "23", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "61", "62", "69", "72", "76", "77", "78", "85", "90", "96", "97", "98", "99"]) + a.string({ pool: "0123456789", length: 6 }),
            "03" + this.pick(["10", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "39", "44", "45", "51", "52", "54", "55", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"]) + a.string({ pool: "0123456789", length: 6 }),
            "04" + this.pick(["11", "13", "15", "20", "22", "26", "27", "30", "32", "34", "37", "42", "43", "44", "50", "56", "57", "63", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98"]) + a.string({ pool: "0123456789", length: 6 }),
            "05" + this.pick(["08", "16", "17", "19", "24", "31", "32", "33", "34", "35", "40", "45", "46", "47", "49", "53", "55", "56", "57", "58", "59", "61", "62", "63", "64", "65", "67", "79", "81", "82", "86", "87", "90", "94"]) + a.string({ pool: "0123456789", length: 6 }),
            "09" + a.string({ pool: "0123456789", length: 8 })
          ]), c = e.formatted ? n.match(/../g).join(" ") : n);
          break;
        case "uk":
          e.mobile ? (n = this.pick([
            { area: "07" + this.pick(["4", "5", "7", "8", "9"]), sections: [2, 6] },
            { area: "07624 ", sections: [6] }
          ]), c = e.formatted ? s(n) : s(n).replace(" ", "")) : (n = this.pick([
            //valid area codes of major cities/counties followed by random numbers in required format.
            { area: "01" + this.character({ pool: "234569" }) + "1 ", sections: [3, 4] },
            { area: "020 " + this.character({ pool: "378" }), sections: [3, 4] },
            { area: "023 " + this.character({ pool: "89" }), sections: [3, 4] },
            { area: "024 7", sections: [3, 4] },
            { area: "028 " + this.pick(["25", "28", "37", "71", "82", "90", "92", "95"]), sections: [2, 4] },
            { area: "012" + this.pick(["04", "08", "54", "76", "97", "98"]) + " ", sections: [6] },
            { area: "013" + this.pick(["63", "64", "84", "86"]) + " ", sections: [6] },
            { area: "014" + this.pick(["04", "20", "60", "61", "80", "88"]) + " ", sections: [6] },
            { area: "015" + this.pick(["24", "27", "62", "66"]) + " ", sections: [6] },
            { area: "016" + this.pick(["06", "29", "35", "47", "59", "95"]) + " ", sections: [6] },
            { area: "017" + this.pick(["26", "44", "50", "68"]) + " ", sections: [6] },
            { area: "018" + this.pick(["27", "37", "84", "97"]) + " ", sections: [6] },
            { area: "019" + this.pick(["00", "05", "35", "46", "49", "63", "95"]) + " ", sections: [6] }
          ]), c = e.formatted ? s(n) : s(n).replace(" ", "", "g"));
          break;
        case "za":
          e.mobile ? (n = this.pick([
            "060" + this.pick(["3", "4", "5", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 6 }),
            "061" + this.pick(["0", "1", "2", "3", "4", "5", "8"]) + a.string({ pool: "0123456789", length: 6 }),
            "06" + a.string({ pool: "0123456789", length: 7 }),
            "071" + this.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 6 }),
            "07" + this.pick(["2", "3", "4", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 7 }),
            "08" + this.pick(["0", "1", "2", "3", "4", "5"]) + a.string({ pool: "0123456789", length: 7 })
          ]), c = e.formatted || n) : (n = this.pick([
            "01" + this.pick(["0", "1", "2", "3", "4", "5", "6", "7", "8"]) + a.string({ pool: "0123456789", length: 7 }),
            "02" + this.pick(["1", "2", "3", "4", "7", "8"]) + a.string({ pool: "0123456789", length: 7 }),
            "03" + this.pick(["1", "2", "3", "5", "6", "9"]) + a.string({ pool: "0123456789", length: 7 }),
            "04" + this.pick(["1", "2", "3", "4", "5", "6", "7", "8", "9"]) + a.string({ pool: "0123456789", length: 7 }),
            "05" + this.pick(["1", "3", "4", "6", "7", "8"]) + a.string({ pool: "0123456789", length: 7 })
          ]), c = e.formatted || n);
          break;
        case "us":
          var g = this.areacode(e).toString(), P = this.natural({ min: 2, max: 9 }).toString() + this.natural({ min: 0, max: 9 }).toString() + this.natural({ min: 0, max: 9 }).toString(), f = this.natural({ min: 1e3, max: 9999 }).toString();
          c = e.formatted ? g + " " + P + "-" + f : g + P + f;
          break;
        case "br":
          var v = this.pick(["11", "12", "13", "14", "15", "16", "17", "18", "19", "21", "22", "24", "27", "28", "31", "32", "33", "34", "35", "37", "38", "41", "42", "43", "44", "45", "46", "47", "48", "49", "51", "53", "54", "55", "61", "62", "63", "64", "65", "66", "67", "68", "69", "71", "73", "74", "75", "77", "79", "81", "82", "83", "84", "85", "86", "87", "88", "89", "91", "92", "93", "94", "95", "96", "97", "98", "99"]), C;
          e.mobile ? C = "9" + a.string({ pool: "0123456789", length: 4 }) : C = this.natural({ min: 2e3, max: 5999 }).toString();
          var A = a.string({ pool: "0123456789", length: 4 });
          c = e.formatted ? "(" + v + ") " + C + "-" + A : v + C + A;
          break;
      }
      return c;
    }, i.prototype.postal = function() {
      var e = this.character({ pool: "XVTSRPNKLMHJGECBA" }), a = e + this.natural({ max: 9 }) + this.character({ alpha: !0, casing: "upper" }), n = this.natural({ max: 9 }) + this.character({ alpha: !0, casing: "upper" }) + this.natural({ max: 9 });
      return a + " " + n;
    }, i.prototype.postcode = function() {
      var e = this.pick(this.get("postcodeAreas")).code, a = this.natural({ max: 9 }), n = this.bool() ? this.character({ alpha: !0, casing: "upper" }) : "", s = e + a + n, c = this.natural({ max: 9 }), g = this.character({ alpha: !0, casing: "upper" }) + this.character({ alpha: !0, casing: "upper" }), P = c + g;
      return s + " " + P;
    }, i.prototype.counties = function(e) {
      return e = u(e, { country: "uk" }), this.get("counties")[e.country.toLowerCase()];
    }, i.prototype.county = function(e) {
      return this.pick(this.counties(e)).name;
    }, i.prototype.provinces = function(e) {
      return e = u(e, { country: "ca" }), this.get("provinces")[e.country.toLowerCase()];
    }, i.prototype.province = function(e) {
      return e && e.full ? this.pick(this.provinces(e)).name : this.pick(this.provinces(e)).abbreviation;
    }, i.prototype.state = function(e) {
      return e && e.full ? this.pick(this.states(e)).name : this.pick(this.states(e)).abbreviation;
    }, i.prototype.states = function(e) {
      e = u(e, { country: "us", us_states_and_dc: !0 });
      var a;
      switch (e.country.toLowerCase()) {
        case "us":
          var n = this.get("us_states_and_dc"), s = this.get("territories"), c = this.get("armed_forces");
          a = [], e.us_states_and_dc && (a = a.concat(n)), e.territories && (a = a.concat(s)), e.armed_forces && (a = a.concat(c));
          break;
        case "it":
        case "mx":
          a = this.get("country_regions")[e.country.toLowerCase()];
          break;
        case "uk":
          a = this.get("counties")[e.country.toLowerCase()];
          break;
      }
      return a;
    }, i.prototype.street = function(e) {
      e = u(e, { country: "us", syllables: 2 });
      var a;
      switch (e.country.toLowerCase()) {
        case "us":
          a = this.word({ syllables: e.syllables }), a = this.capitalize(a), a += " ", a += e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name;
          break;
        case "it":
          a = this.word({ syllables: e.syllables }), a = this.capitalize(a), a = (e.short_suffix ? this.street_suffix(e).abbreviation : this.street_suffix(e).name) + " " + a;
          break;
      }
      return a;
    }, i.prototype.street_suffix = function(e) {
      return e = u(e, { country: "us" }), this.pick(this.street_suffixes(e));
    }, i.prototype.street_suffixes = function(e) {
      return e = u(e, { country: "us" }), this.get("street_suffixes")[e.country.toLowerCase()];
    }, i.prototype.zip = function(e) {
      var a = this.n(this.natural, 5, { max: 9 });
      return e && e.plusfour === !0 && (a.push("-"), a = a.concat(this.n(this.natural, 4, { max: 9 }))), a.join("");
    }, i.prototype.ampm = function() {
      return this.bool() ? "am" : "pm";
    }, i.prototype.date = function(e) {
      var a, n;
      if (e && (e.min || e.max)) {
        e = u(e, {
          american: !0,
          string: !1
        });
        var s = typeof e.min < "u" ? e.min.getTime() : 1, c = typeof e.max < "u" ? e.max.getTime() : 864e13;
        n = new Date(this.integer({ min: s, max: c }));
      } else {
        var g = this.month({ raw: !0 }), P = g.days;
        e && e.month && (P = this.get("months")[(e.month % 12 + 12) % 12].days), e = u(e, {
          year: parseInt(this.year(), 10),
          // Necessary to subtract 1 because Date() 0-indexes month but not day or year
          // for some reason.
          month: g.numeric - 1,
          day: this.natural({ min: 1, max: P }),
          hour: this.hour({ twentyfour: !0 }),
          minute: this.minute(),
          second: this.second(),
          millisecond: this.millisecond(),
          american: !0,
          string: !1
        }), n = new Date(e.year, e.month, e.day, e.hour, e.minute, e.second, e.millisecond);
      }
      return e.american ? a = n.getMonth() + 1 + "/" + n.getDate() + "/" + n.getFullYear() : a = n.getDate() + "/" + (n.getMonth() + 1) + "/" + n.getFullYear(), e.string ? a : n;
    }, i.prototype.hammertime = function(e) {
      return this.date(e).getTime();
    }, i.prototype.hour = function(e) {
      return e = u(e, {
        min: e && e.twentyfour ? 0 : 1,
        max: e && e.twentyfour ? 23 : 12
      }), t(e.min < 0, "Chance: Min cannot be less than 0."), t(e.twentyfour && e.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option."), t(!e.twentyfour && e.max > 12, "Chance: Max cannot be greater than 12."), t(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({ min: e.min, max: e.max });
    }, i.prototype.millisecond = function() {
      return this.natural({ max: 999 });
    }, i.prototype.minute = i.prototype.second = function(e) {
      return e = u(e, { min: 0, max: 59 }), t(e.min < 0, "Chance: Min cannot be less than 0."), t(e.max > 59, "Chance: Max cannot be greater than 59."), t(e.min > e.max, "Chance: Min cannot be greater than Max."), this.natural({ min: e.min, max: e.max });
    }, i.prototype.month = function(e) {
      e = u(e, { min: 1, max: 12 }), t(e.min < 1, "Chance: Min cannot be less than 1."), t(e.max > 12, "Chance: Max cannot be greater than 12."), t(e.min > e.max, "Chance: Min cannot be greater than Max.");
      var a = this.pick(this.months().slice(e.min - 1, e.max));
      return e.raw ? a : a.name;
    }, i.prototype.months = function() {
      return this.get("months");
    }, i.prototype.second = function() {
      return this.natural({ max: 59 });
    }, i.prototype.timestamp = function() {
      return this.natural({ min: 1, max: parseInt((/* @__PURE__ */ new Date()).getTime() / 1e3, 10) });
    }, i.prototype.weekday = function(e) {
      e = u(e, { weekday_only: !1 });
      var a = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      return e.weekday_only || (a.push("Saturday"), a.push("Sunday")), this.pickone(a);
    }, i.prototype.year = function(e) {
      return e = u(e, { min: (/* @__PURE__ */ new Date()).getFullYear() }), e.max = typeof e.max < "u" ? e.max : e.min + 100, this.natural(e).toString();
    }, i.prototype.cc = function(e) {
      e = u(e);
      var a, n, s;
      return a = e.type ? this.cc_type({ name: e.type, raw: !0 }) : this.cc_type({ raw: !0 }), n = a.prefix.split(""), s = a.length - a.prefix.length - 1, n = n.concat(this.n(this.integer, s, { min: 0, max: 9 })), n.push(this.luhn_calculate(n.join(""))), n.join("");
    }, i.prototype.cc_types = function() {
      return this.get("cc_types");
    }, i.prototype.cc_type = function(e) {
      e = u(e);
      var a = this.cc_types(), n = null;
      if (e.name) {
        for (var s = 0; s < a.length; s++)
          if (a[s].name === e.name || a[s].short_name === e.name) {
            n = a[s];
            break;
          }
        if (n === null)
          throw new RangeError("Chance: Credit card type '" + e.name + "' is not supported");
      } else
        n = this.pick(a);
      return e.raw ? n : n.name;
    }, i.prototype.currency_types = function() {
      return this.get("currency_types");
    }, i.prototype.currency = function() {
      return this.pick(this.currency_types());
    }, i.prototype.timezones = function() {
      return this.get("timezones");
    }, i.prototype.timezone = function() {
      return this.pick(this.timezones());
    }, i.prototype.currency_pair = function(e) {
      var a = this.unique(this.currency, 2, {
        comparator: function(n, s) {
          return n.reduce(function(c, g) {
            return c || g.code === s.code;
          }, !1);
        }
      });
      return e ? a[0].code + "/" + a[1].code : a;
    }, i.prototype.dollar = function(e) {
      e = u(e, { max: 1e4, min: 0 });
      var a = this.floating({ min: e.min, max: e.max, fixed: 2 }).toString(), n = a.split(".")[1];
      return n === void 0 ? a += ".00" : n.length < 2 && (a = a + "0"), a < 0 ? "-$" + a.replace("-", "") : "$" + a;
    }, i.prototype.euro = function(e) {
      return Number(this.dollar(e).replace("$", "")).toLocaleString() + "\u20AC";
    }, i.prototype.exp = function(e) {
      e = u(e);
      var a = {};
      return a.year = this.exp_year(), a.year === (/* @__PURE__ */ new Date()).getFullYear().toString() ? a.month = this.exp_month({ future: !0 }) : a.month = this.exp_month(), e.raw ? a : a.month + "/" + a.year;
    }, i.prototype.exp_month = function(e) {
      e = u(e);
      var a, n, s = (/* @__PURE__ */ new Date()).getMonth() + 1;
      if (e.future && s !== 12)
        do
          a = this.month({ raw: !0 }).numeric, n = parseInt(a, 10);
        while (n <= s);
      else
        a = this.month({ raw: !0 }).numeric;
      return a;
    }, i.prototype.exp_year = function() {
      var e = (/* @__PURE__ */ new Date()).getMonth() + 1, a = (/* @__PURE__ */ new Date()).getFullYear();
      return this.year({ min: e === 12 ? a + 1 : a, max: a + 10 });
    }, i.prototype.vat = function(e) {
      switch (e = u(e, { country: "it" }), e.country.toLowerCase()) {
        case "it":
          return this.it_vat();
      }
    }, i.prototype.iban = function() {
      var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", a = e + "0123456789", n = this.string({ length: 2, pool: e }) + this.pad(this.integer({ min: 0, max: 99 }), 2) + this.string({ length: 4, pool: a }) + this.pad(this.natural(), this.natural({ min: 6, max: 26 }));
      return n;
    }, i.prototype.it_vat = function() {
      var e = this.natural({ min: 1, max: 18e5 });
      return e = this.pad(e, 7) + this.pad(this.pick(this.provinces({ country: "it" })).code, 3), e + this.luhn_calculate(e);
    }, i.prototype.cf = function(e) {
      e = e || {};
      var a = e.gender ? e.gender : this.gender(), n = e.first ? e.first : this.first({ gender: a, nationality: "it" }), s = e.last ? e.last : this.last({ nationality: "it" }), c = e.birthday ? e.birthday : this.birthday(), g = e.city ? e.city : this.pickone(["A", "B", "C", "D", "E", "F", "G", "H", "I", "L", "M", "Z"]) + this.pad(this.natural({ max: 999 }), 3), P = [], f = function(A, H) {
        var _, W = [];
        return A.length < 3 ? W = A.split("").concat("XXX".split("")).splice(0, 3) : (_ = A.toUpperCase().split("").map(function(K) {
          return "BCDFGHJKLMNPRSTVWZ".indexOf(K) !== -1 ? K : void 0;
        }).join(""), _.length > 3 && (H ? _ = _.substr(0, 3) : _ = _[0] + _.substr(2, 2)), _.length < 3 && (W = _, _ = A.toUpperCase().split("").map(function(K) {
          return "AEIOU".indexOf(K) !== -1 ? K : void 0;
        }).join("").substr(0, 3 - W.length)), W = W + _), W;
      }, v = function(A, H, _) {
        var W = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
        return A.getFullYear().toString().substr(2) + W[A.getMonth()] + _.pad(A.getDate() + (H.toLowerCase() === "female" ? 40 : 0), 2);
      }, C = function(A) {
        for (var H = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", _ = "ABCDEFGHIJABCDEFGHIJKLMNOPQRSTUVWXYZ", W = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", K = "BAKPLCQDREVOSFTGUHMINJWZYX", V = 0, U = 0; U < 15; U++)
          U % 2 !== 0 ? V += W.indexOf(_[H.indexOf(A[U])]) : V += K.indexOf(_[H.indexOf(A[U])]);
        return W[V % 26];
      };
      return P = P.concat(f(s, !0), f(n), v(c, a, this), g.toUpperCase().split("")).join(""), P += C(P.toUpperCase()), P.toUpperCase();
    }, i.prototype.pl_pesel = function() {
      for (var e = this.natural({ min: 1, max: 9999999999 }), a = this.pad(e, 10).split(""), n = 0; n < a.length; n++)
        a[n] = parseInt(a[n]);
      var s = (1 * a[0] + 3 * a[1] + 7 * a[2] + 9 * a[3] + 1 * a[4] + 3 * a[5] + 7 * a[6] + 9 * a[7] + 1 * a[8] + 3 * a[9]) % 10;
      return s !== 0 && (s = 10 - s), a.join("") + s;
    }, i.prototype.pl_nip = function() {
      for (var e = this.natural({ min: 1, max: 999999999 }), a = this.pad(e, 9).split(""), n = 0; n < a.length; n++)
        a[n] = parseInt(a[n]);
      var s = (6 * a[0] + 5 * a[1] + 7 * a[2] + 2 * a[3] + 3 * a[4] + 4 * a[5] + 5 * a[6] + 6 * a[7] + 7 * a[8]) % 11;
      return s === 10 ? this.pl_nip() : a.join("") + s;
    }, i.prototype.pl_regon = function() {
      for (var e = this.natural({ min: 1, max: 99999999 }), a = this.pad(e, 8).split(""), n = 0; n < a.length; n++)
        a[n] = parseInt(a[n]);
      var s = (8 * a[0] + 9 * a[1] + 2 * a[2] + 3 * a[3] + 4 * a[4] + 5 * a[5] + 6 * a[6] + 7 * a[7]) % 11;
      return s === 10 && (s = 0), a.join("") + s;
    }, i.prototype.note = function(e) {
      e = u(e, { notes: "flatKey" });
      var a = {
        naturals: ["C", "D", "E", "F", "G", "A", "B"],
        flats: ["D\u266D", "E\u266D", "G\u266D", "A\u266D", "B\u266D"],
        sharps: ["C\u266F", "D\u266F", "F\u266F", "G\u266F", "A\u266F"]
      };
      return a.all = a.naturals.concat(a.flats.concat(a.sharps)), a.flatKey = a.naturals.concat(a.flats), a.sharpKey = a.naturals.concat(a.sharps), this.pickone(a[e.notes]);
    }, i.prototype.midi_note = function(e) {
      var a = 0, n = 127;
      return e = u(e, { min: a, max: n }), this.integer({ min: e.min, max: e.max });
    }, i.prototype.chord_quality = function(e) {
      e = u(e, { jazz: !0 });
      var a = ["maj", "min", "aug", "dim"];
      return e.jazz && (a = [
        "maj7",
        "min7",
        "7",
        "sus",
        "dim",
        "\xF8"
      ]), this.pickone(a);
    }, i.prototype.chord = function(e) {
      return e = u(e), this.note(e) + this.chord_quality(e);
    }, i.prototype.tempo = function(e) {
      var a = 40, n = 320;
      return e = u(e, { min: a, max: n }), this.integer({ min: e.min, max: e.max });
    }, i.prototype.coin = function() {
      return this.bool() ? "heads" : "tails";
    };
    function I(e) {
      return function() {
        return this.natural(e);
      };
    }
    i.prototype.d4 = I({ min: 1, max: 4 }), i.prototype.d6 = I({ min: 1, max: 6 }), i.prototype.d8 = I({ min: 1, max: 8 }), i.prototype.d10 = I({ min: 1, max: 10 }), i.prototype.d12 = I({ min: 1, max: 12 }), i.prototype.d20 = I({ min: 1, max: 20 }), i.prototype.d30 = I({ min: 1, max: 30 }), i.prototype.d100 = I({ min: 1, max: 100 }), i.prototype.rpg = function(e, a) {
      if (a = u(a), e) {
        var n = e.toLowerCase().split("d"), s = [];
        if (n.length !== 2 || !parseInt(n[0], 10) || !parseInt(n[1], 10))
          throw new Error("Chance: Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
        for (var c = n[0]; c > 0; c--)
          s[c - 1] = this.natural({ min: 1, max: n[1] });
        return typeof a.sum < "u" && a.sum ? s.reduce(function(g, P) {
          return g + P;
        }) : s;
      } else
        throw new RangeError("Chance: A type of die roll must be included");
    }, i.prototype.guid = function(e) {
      e = u(e, { version: 5 });
      var a = "abcdef1234567890", n = "ab89", s = this.string({ pool: a, length: 8 }) + "-" + this.string({ pool: a, length: 4 }) + "-" + // The Version
      e.version + this.string({ pool: a, length: 3 }) + "-" + // The Variant
      this.string({ pool: n, length: 1 }) + this.string({ pool: a, length: 3 }) + "-" + this.string({ pool: a, length: 12 });
      return s;
    }, i.prototype.hash = function(e) {
      e = u(e, { length: 40, casing: "lower" });
      var a = e.casing === "upper" ? h.toUpperCase() : h;
      return this.string({ pool: a, length: e.length });
    }, i.prototype.luhn_check = function(e) {
      var a = e.toString(), n = +a.substring(a.length - 1);
      return n === this.luhn_calculate(+a.substring(0, a.length - 1));
    }, i.prototype.luhn_calculate = function(e) {
      for (var a = e.toString().split("").reverse(), n = 0, s, c = 0, g = a.length; g > c; ++c)
        s = +a[c], c % 2 === 0 && (s *= 2, s > 9 && (s -= 9)), n += s;
      return n * 9 % 10;
    }, i.prototype.md5 = function(e) {
      var a = { str: "", key: null, raw: !1 };
      if (!e)
        a.str = this.string(), e = {};
      else if (typeof e == "string")
        a.str = e, e = {};
      else {
        if (typeof e != "object")
          return null;
        if (e.constructor === "Array")
          return null;
      }
      if (a = u(e, a), !a.str)
        throw new Error("A parameter is required to return an md5 hash.");
      return this.bimd5.md5(a.str, a.key, a.raw);
    }, i.prototype.file = function(e) {
      var a = e || {}, n = "fileExtension", s = Object.keys(this.get("fileExtension")), c, g;
      if (c = this.word({ length: a.length }), a.extension)
        return g = a.extension, c + "." + g;
      if (a.extensions) {
        if (Array.isArray(a.extensions))
          return g = this.pickone(a.extensions), c + "." + g;
        if (a.extensions.constructor === Object) {
          var P = a.extensions, f = Object.keys(P);
          return g = this.pickone(P[this.pickone(f)]), c + "." + g;
        }
        throw new Error("Chance: Extensions must be an Array or Object");
      }
      if (a.fileType) {
        var v = a.fileType;
        if (s.indexOf(v) !== -1)
          return g = this.pickone(this.get(n)[v]), c + "." + g;
        throw new RangeError("Chance: Expect file type value to be 'raster', 'vector', '3d' or 'document'");
      }
      return g = this.pickone(this.get(n)[this.pickone(s)]), c + "." + g;
    }, i.prototype.fileWithContent = function(e) {
      var a = e || {}, n = "fileName" in a ? a.fileName : this.file().split(".")[0];
      if (n += "." + ("fileExtension" in a ? a.fileExtension : this.file().split(".")[1]), typeof a.fileSize != "number")
        throw new Error("File size must be an integer");
      var s = {
        fileData: this.buffer({ length: a.fileSize }),
        fileName: n
      };
      return s;
    };
    var T = {
      firstNames: {
        male: {
          en: ["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"],
          // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0163
          it: ["Adolfo", "Alberto", "Aldo", "Alessandro", "Alessio", "Alfredo", "Alvaro", "Andrea", "Angelo", "Angiolo", "Antonino", "Antonio", "Attilio", "Benito", "Bernardo", "Bruno", "Carlo", "Cesare", "Christian", "Claudio", "Corrado", "Cosimo", "Cristian", "Cristiano", "Daniele", "Dario", "David", "Davide", "Diego", "Dino", "Domenico", "Duccio", "Edoardo", "Elia", "Elio", "Emanuele", "Emiliano", "Emilio", "Enrico", "Enzo", "Ettore", "Fabio", "Fabrizio", "Federico", "Ferdinando", "Fernando", "Filippo", "Francesco", "Franco", "Gabriele", "Giacomo", "Giampaolo", "Giampiero", "Giancarlo", "Gianfranco", "Gianluca", "Gianmarco", "Gianni", "Gino", "Giorgio", "Giovanni", "Giuliano", "Giulio", "Giuseppe", "Graziano", "Gregorio", "Guido", "Iacopo", "Jacopo", "Lapo", "Leonardo", "Lorenzo", "Luca", "Luciano", "Luigi", "Manuel", "Marcello", "Marco", "Marino", "Mario", "Massimiliano", "Massimo", "Matteo", "Mattia", "Maurizio", "Mauro", "Michele", "Mirko", "Mohamed", "Nello", "Neri", "Niccol\xF2", "Nicola", "Osvaldo", "Otello", "Paolo", "Pier Luigi", "Piero", "Pietro", "Raffaele", "Remo", "Renato", "Renzo", "Riccardo", "Roberto", "Rolando", "Romano", "Salvatore", "Samuele", "Sandro", "Sergio", "Silvano", "Simone", "Stefano", "Thomas", "Tommaso", "Ubaldo", "Ugo", "Umberto", "Valerio", "Valter", "Vasco", "Vincenzo", "Vittorio"],
          // Data taken from http://www.svbkindernamen.nl/int/nl/kindernamen/index.html
          nl: ["Aaron", "Abel", "Adam", "Adriaan", "Albert", "Alexander", "Ali", "Arjen", "Arno", "Bart", "Bas", "Bastiaan", "Benjamin", "Bob", "Boris", "Bram", "Brent", "Cas", "Casper", "Chris", "Christiaan", "Cornelis", "Daan", "Daley", "Damian", "Dani", "Daniel", "Dani\xEBl", "David", "Dean", "Dirk", "Dylan", "Egbert", "Elijah", "Erik", "Erwin", "Evert", "Ezra", "Fabian", "Fedde", "Finn", "Florian", "Floris", "Frank", "Frans", "Frederik", "Freek", "Geert", "Gerard", "Gerben", "Gerrit", "Gijs", "Guus", "Hans", "Hendrik", "Henk", "Herman", "Hidde", "Hugo", "Jaap", "Jan Jaap", "Jan-Willem", "Jack", "Jacob", "Jan", "Jason", "Jasper", "Jayden", "Jelle", "Jelte", "Jens", "Jeroen", "Jesse", "Jim", "Job", "Joep", "Johannes", "John", "Jonathan", "Joris", "Joshua", "Jo\xEBl", "Julian", "Kees", "Kevin", "Koen", "Lars", "Laurens", "Leendert", "Lennard", "Lodewijk", "Luc", "Luca", "Lucas", "Lukas", "Luuk", "Maarten", "Marcus", "Martijn", "Martin", "Matthijs", "Maurits", "Max", "Mees", "Melle", "Mick", "Mika", "Milan", "Mohamed", "Mohammed", "Morris", "Muhammed", "Nathan", "Nick", "Nico", "Niek", "Niels", "Noah", "Noud", "Olivier", "Oscar", "Owen", "Paul", "Pepijn", "Peter", "Pieter", "Pim", "Quinten", "Reinier", "Rens", "Robin", "Ruben", "Sam", "Samuel", "Sander", "Sebastiaan", "Sem", "Sep", "Sepp", "Siem", "Simon", "Stan", "Stef", "Steven", "Stijn", "Sven", "Teun", "Thijmen", "Thijs", "Thomas", "Tijn", "Tim", "Timo", "Tobias", "Tom", "Victor", "Vince", "Willem", "Wim", "Wouter", "Yusuf"],
          // Data taken from https://fr.wikipedia.org/wiki/Liste_de_pr%C3%A9noms_fran%C3%A7ais_et_de_la_francophonie
          fr: ["Aaron", "Abdon", "Abel", "Ab\xE9lard", "Abelin", "Abondance", "Abraham", "Absalon", "Acace", "Achaire", "Achille", "Adalard", "Adalbald", "Adalb\xE9ron", "Adalbert", "Adalric", "Adam", "Adegrin", "Adel", "Adelin", "Andelin", "Adelphe", "Adam", "Ad\xE9odat", "Adh\xE9mar", "Adjutor", "Adolphe", "Adonis", "Adon", "Adrien", "Agapet", "Agathange", "Agathon", "Agilbert", "Ag\xE9nor", "Agnan", "Aignan", "Agrippin", "Aimable", "Aim\xE9", "Alain", "Alban", "Albin", "Aubin", "Alb\xE9ric", "Albert", "Albertet", "Alcibiade", "Alcide", "Alc\xE9e", "Alcime", "Aldonce", "Aldric", "Ald\xE9ric", "Aleaume", "Alexandre", "Alexis", "Alix", "Alliaume", "Aleaume", "Almine", "Almire", "Alo\xEFs", "Alph\xE9e", "Alphonse", "Alpinien", "Alver\xE8de", "Amalric", "Amaury", "Amandin", "Amant", "Ambroise", "Am\xE9d\xE9e", "Am\xE9lien", "Amiel", "Amour", "Ana\xEBl", "Anastase", "Anatole", "Ancelin", "And\xE9ol", "Andoche", "Andr\xE9", "Andoche", "Ange", "Angelin", "Angilbe", "Anglebert", "Angoustan", "Anicet", "Anne", "Annibal", "Ansbert", "Anselme", "Anthelme", "Antheaume", "Anthime", "Antide", "Antoine", "Antonius", "Antonin", "Apollinaire", "Apollon", "Aquilin", "Arcade", "Archambaud", "Archambeau", "Archange", "Archibald", "Arian", "Ariel", "Ariste", "Aristide", "Armand", "Armel", "Armin", "Arnould", "Arnaud", "Arolde", "Ars\xE8ne", "Arsino\xE9", "Arthaud", "Arth\xE8me", "Arthur", "Ascelin", "Athanase", "Aubry", "Audebert", "Audouin", "Audran", "Audric", "Auguste", "Augustin", "Aur\xE8le", "Aur\xE9lien", "Aurian", "Auxence", "Axel", "Aymard", "Aymeric", "Aymon", "Aymond", "Balthazar", "Baptiste", "Barnab\xE9", "Barth\xE9lemy", "Bartim\xE9e", "Basile", "Bastien", "Baudouin", "B\xE9nigne", "Benjamin", "Beno\xEEt", "B\xE9renger", "B\xE9rard", "Bernard", "Bertrand", "Blaise", "Bon", "Boniface", "Bouchard", "Brice", "Brieuc", "Bruno", "Brunon", "Calixte", "Calliste", "Cam\xE9lien", "Camille", "Camillien", "Candide", "Caribert", "Carloman", "Cassandre", "Cassien", "C\xE9dric", "C\xE9leste", "C\xE9lestin", "C\xE9lien", "C\xE9saire", "C\xE9sar", "Charles", "Charlemagne", "Childebert", "Chilp\xE9ric", "Chr\xE9tien", "Christian", "Christodule", "Christophe", "Chrysostome", "Clarence", "Claude", "Claudien", "Cl\xE9andre", "Cl\xE9ment", "Clotaire", "C\xF4me", "Constance", "Constant", "Constantin", "Corentin", "Cyprien", "Cyriaque", "Cyrille", "Cyril", "Damien", "Daniel", "David", "Delphin", "Denis", "D\xE9sir\xE9", "Didier", "Dieudonn\xE9", "Dimitri", "Dominique", "Dorian", "Doroth\xE9e", "Edgard", "Edmond", "\xC9douard", "\xC9leuth\xE8re", "\xC9lie", "\xC9lis\xE9e", "\xC9meric", "\xC9mile", "\xC9milien", "Emmanuel", "Enguerrand", "\xC9piphane", "\xC9ric", "Esprit", "Ernest", "\xC9tienne", "Eubert", "Eudes", "Eudoxe", "Eug\xE8ne", "Eus\xE8be", "Eustache", "\xC9variste", "\xC9vrard", "Fabien", "Fabrice", "Falba", "F\xE9licit\xE9", "F\xE9lix", "Ferdinand", "Fiacre", "Fid\xE8le", "Firmin", "Flavien", "Flodoard", "Florent", "Florentin", "Florestan", "Florian", "Fortun\xE9", "Foulques", "Francisque", "Fran\xE7ois", "Fran\xE7ais", "Franciscus", "Francs", "Fr\xE9d\xE9ric", "Fulbert", "Fulcran", "Fulgence", "Gabin", "Gabriel", "Ga\xEBl", "Garnier", "Gaston", "Gaspard", "Gatien", "Gaud", "Gautier", "G\xE9d\xE9on", "Geoffroy", "Georges", "G\xE9raud", "G\xE9rard", "Gerbert", "Germain", "Gervais", "Ghislain", "Gilbert", "Gilles", "Girart", "Gislebert", "Gondebaud", "Gonthier", "Gontran", "Gonzague", "Gr\xE9goire", "Gu\xE9rin", "Gui", "Guillaume", "Gustave", "Guy", "Guyot", "Hardouin", "Hector", "H\xE9delin", "H\xE9lier", "Henri", "Herbert", "Herluin", "Herv\xE9", "Hilaire", "Hildebert", "Hincmar", "Hippolyte", "Honor\xE9", "Hubert", "Hugues", "Innocent", "Isabeau", "Isidore", "Jacques", "Japhet", "Jason", "Jean", "Jeannel", "Jeannot", "J\xE9r\xE9mie", "J\xE9r\xF4me", "Joachim", "Joanny", "Job", "Jocelyn", "Jo\xEBl", "Johan", "Jonas", "Jonathan", "Joseph", "Josse", "Josselin", "Jourdain", "Jude", "Judica\xEBl", "Jules", "Julien", "Juste", "Justin", "Lambert", "Landry", "Laurent", "Lazare", "L\xE9andre", "L\xE9on", "L\xE9onard", "L\xE9opold", "Leu", "Loup", "Leufroy", "Lib\xE8re", "Li\xE9tald", "Lionel", "Lo\xEFc", "Longin", "Lorrain", "Lorraine", "Lothaire", "Louis", "Loup", "Luc", "Lucas", "Lucien", "Ludolphe", "Ludovic", "Macaire", "Malo", "Mamert", "Manass\xE9", "Marc", "Marceau", "Marcel", "Marcelin", "Marius", "Marseille", "Martial", "Martin", "Mathurin", "Matthias", "Mathias", "Matthieu", "Maugis", "Maurice", "Mauricet", "Maxence", "Maxime", "Maximilien", "Mayeul", "M\xE9d\xE9ric", "Melchior", "Mence", "Merlin", "M\xE9rov\xE9e", "Micha\xEBl", "Michel", "Mo\xEFse", "Morgan", "Nathan", "Nathana\xEBl", "Narcisse", "N\xE9h\xE9mie", "Nestor", "Nestor", "Nic\xE9phore", "Nicolas", "No\xE9", "No\xEBl", "Norbert", "Normand", "Normands", "Octave", "Odilon", "Odon", "Oger", "Olivier", "Oury", "Pac\xF4me", "Pal\xE9mon", "Parfait", "Pascal", "Paterne", "Patrice", "Paul", "P\xE9pin", "Perceval", "Phil\xE9mon", "Philibert", "Philippe", "Philoth\xE9e", "Pie", "Pierre", "Pierrick", "Prosper", "Quentin", "Raoul", "Rapha\xEBl", "Raymond", "R\xE9gis", "R\xE9jean", "R\xE9mi", "Renaud", "Ren\xE9", "Reybaud", "Richard", "Robert", "Roch", "Rodolphe", "Rodrigue", "Roger", "Roland", "Romain", "Romuald", "Rom\xE9o", "Rome", "Ronan", "Roselin", "Salomon", "Samuel", "Savin", "Savinien", "Scholastique", "S\xE9bastien", "S\xE9raphin", "Serge", "S\xE9verin", "Sidoine", "Sigebert", "Sigismond", "Silv\xE8re", "Simon", "Sim\xE9on", "Sixte", "Stanislas", "St\xE9phane", "Stephan", "Sylvain", "Sylvestre", "Tancr\xE8de", "Tanguy", "Taurin", "Th\xE9odore", "Th\xE9odose", "Th\xE9ophile", "Th\xE9ophraste", "Thibault", "Thibert", "Thierry", "Thomas", "Timol\xE9on", "Timoth\xE9e", "Titien", "Tonnin", "Toussaint", "Trajan", "Tristan", "Turold", "Tim", "Ulysse", "Urbain", "Valentin", "Val\xE8re", "Val\xE9ry", "Venance", "Venant", "Venceslas", "Vianney", "Victor", "Victorien", "Victorin", "Vigile", "Vincent", "Vital", "Vitalien", "Vivien", "Waleran", "Wandrille", "Xavier", "X\xE9nophon", "Yves", "Zacharie", "Zach\xE9", "Z\xE9phirin"]
        },
        female: {
          en: ["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"],
          // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0162
          it: ["Ada", "Adriana", "Alessandra", "Alessia", "Alice", "Angela", "Anna", "Anna Maria", "Annalisa", "Annita", "Annunziata", "Antonella", "Arianna", "Asia", "Assunta", "Aurora", "Barbara", "Beatrice", "Benedetta", "Bianca", "Bruna", "Camilla", "Carla", "Carlotta", "Carmela", "Carolina", "Caterina", "Catia", "Cecilia", "Chiara", "Cinzia", "Clara", "Claudia", "Costanza", "Cristina", "Daniela", "Debora", "Diletta", "Dina", "Donatella", "Elena", "Eleonora", "Elisa", "Elisabetta", "Emanuela", "Emma", "Eva", "Federica", "Fernanda", "Fiorella", "Fiorenza", "Flora", "Franca", "Francesca", "Gabriella", "Gaia", "Gemma", "Giada", "Gianna", "Gina", "Ginevra", "Giorgia", "Giovanna", "Giulia", "Giuliana", "Giuseppa", "Giuseppina", "Grazia", "Graziella", "Greta", "Ida", "Ilaria", "Ines", "Iolanda", "Irene", "Irma", "Isabella", "Jessica", "Laura", "Lea", "Letizia", "Licia", "Lidia", "Liliana", "Lina", "Linda", "Lisa", "Livia", "Loretta", "Luana", "Lucia", "Luciana", "Lucrezia", "Luisa", "Manuela", "Mara", "Marcella", "Margherita", "Maria", "Maria Cristina", "Maria Grazia", "Maria Luisa", "Maria Pia", "Maria Teresa", "Marina", "Marisa", "Marta", "Martina", "Marzia", "Matilde", "Melissa", "Michela", "Milena", "Mirella", "Monica", "Natalina", "Nella", "Nicoletta", "Noemi", "Olga", "Paola", "Patrizia", "Piera", "Pierina", "Raffaella", "Rebecca", "Renata", "Rina", "Rita", "Roberta", "Rosa", "Rosanna", "Rossana", "Rossella", "Sabrina", "Sandra", "Sara", "Serena", "Silvana", "Silvia", "Simona", "Simonetta", "Sofia", "Sonia", "Stefania", "Susanna", "Teresa", "Tina", "Tiziana", "Tosca", "Valentina", "Valeria", "Vanda", "Vanessa", "Vanna", "Vera", "Veronica", "Vilma", "Viola", "Virginia", "Vittoria"],
          // Data taken from http://www.svbkindernamen.nl/int/nl/kindernamen/index.html
          nl: ["Ada", "Arianne", "Afke", "Amanda", "Amber", "Amy", "Aniek", "Anita", "Anja", "Anna", "Anne", "Annelies", "Annemarie", "Annette", "Anouk", "Astrid", "Aukje", "Barbara", "Bianca", "Carla", "Carlijn", "Carolien", "Chantal", "Charlotte", "Claudia", "Dani\xEBlle", "Debora", "Diane", "Dora", "Eline", "Elise", "Ella", "Ellen", "Emma", "Esmee", "Evelien", "Esther", "Erica", "Eva", "Femke", "Fleur", "Floor", "Froukje", "Gea", "Gerda", "Hanna", "Hanneke", "Heleen", "Hilde", "Ilona", "Ina", "Inge", "Ingrid", "Iris", "Isabel", "Isabelle", "Janneke", "Jasmijn", "Jeanine", "Jennifer", "Jessica", "Johanna", "Joke", "Julia", "Julie", "Karen", "Karin", "Katja", "Kim", "Lara", "Laura", "Lena", "Lianne", "Lieke", "Lilian", "Linda", "Lisa", "Lisanne", "Lotte", "Louise", "Maaike", "Manon", "Marga", "Maria", "Marissa", "Marit", "Marjolein", "Martine", "Marleen", "Melissa", "Merel", "Miranda", "Michelle", "Mirjam", "Mirthe", "Naomi", "Natalie", "Nienke", "Nina", "Noortje", "Olivia", "Patricia", "Paula", "Paulien", "Ramona", "Ria", "Rianne", "Roos", "Rosanne", "Ruth", "Sabrina", "Sandra", "Sanne", "Sara", "Saskia", "Silvia", "Sofia", "Sophie", "Sonja", "Suzanne", "Tamara", "Tess", "Tessa", "Tineke", "Valerie", "Vanessa", "Veerle", "Vera", "Victoria", "Wendy", "Willeke", "Yvonne", "Zo\xEB"],
          // Data taken from https://fr.wikipedia.org/wiki/Liste_de_pr%C3%A9noms_fran%C3%A7ais_et_de_la_francophonie
          fr: ["Abdon", "Abel", "Abiga\xEBlle", "Abiga\xEFl", "Acacius", "Acanthe", "Adalbert", "Adalsinde", "Adegrine", "Ad\xE9la\xEFde", "Ad\xE8le", "Ad\xE9lie", "Adeline", "Adeltrude", "Adolphe", "Adonis", "Adrast\xE9e", "Adrehilde", "Adrienne", "Agathe", "Agilbert", "Agla\xE9", "Aignan", "Agnefl\xE8te", "Agn\xE8s", "Agrippine", "Aim\xE9", "Alaine", "Ala\xEFs", "Albane", "Alb\xE9rade", "Alberte", "Alcide", "Alcine", "Alcyone", "Aldegonde", "Aleth", "Alexandrine", "Alexine", "Alice", "Ali\xE9nor", "Aliette", "Aline", "Alix", "Aliz\xE9", "Alo\xEFse", "Aloyse", "Alphonsine", "Alth\xE9e", "Amaliane", "Amalth\xE9e", "Amande", "Amandine", "Amant", "Amarande", "Amaranthe", "Amaryllis", "Ambre", "Ambroisie", "Am\xE9lie", "Am\xE9thyste", "Aminte", "Ana\xEBl", "Ana\xEFs", "Anastasie", "Anatole", "Ancelin", "Andr\xE9e", "An\xE9mone", "Angadr\xEAme", "Ang\xE8le", "Angeline", "Ang\xE9lique", "Angilbert", "Anicet", "Annabelle", "Anne", "Annette", "Annick", "Annie", "Annonciade", "Ansbert", "Anstrudie", "Anthelme", "Antigone", "Antoinette", "Antonine", "Aph\xE9lie", "Apolline", "Apollonie", "Aquiline", "Arabelle", "Arcadie", "Archange", "Argine", "Ariane", "Aricie", "Ariel", "Arielle", "Arlette", "Armance", "Armande", "Armandine", "Armelle", "Armide", "Armelle", "Armin", "Arnaud", "Ars\xE8ne", "Arsino\xE9", "Art\xE9mis", "Arthur", "Ascelin", "Ascension", "Assomption", "Astart\xE9", "Ast\xE9rie", "Astr\xE9e", "Astrid", "Athalie", "Athanasie", "Athina", "Aube", "Albert", "Aude", "Audrey", "Augustine", "Aure", "Aur\xE9lie", "Aur\xE9lien", "Aur\xE8le", "Aurore", "Auxence", "Aveline", "Abiga\xEBlle", "Avoye", "Axelle", "Aymard", "Azal\xE9e", "Ad\xE8le", "Adeline", "Barbe", "Basilisse", "Bathilde", "B\xE9atrice", "B\xE9atrix", "B\xE9n\xE9dicte", "B\xE9reng\xE8re", "Bernadette", "Berthe", "Bertille", "Beuve", "Blanche", "Blanc", "Blandine", "Brigitte", "Brune", "Brunehilde", "Callista", "Camille", "Capucine", "Carine", "Caroline", "Cassandre", "Catherine", "C\xE9cile", "C\xE9leste", "C\xE9lestine", "C\xE9line", "Chantal", "Charl\xE8ne", "Charline", "Charlotte", "Chlo\xE9", "Christelle", "Christiane", "Christine", "Claire", "Clara", "Claude", "Claudine", "Clarisse", "Cl\xE9mence", "Cl\xE9mentine", "Cl\xE9o", "Clio", "Clotilde", "Coline", "Conception", "Constance", "Coralie", "Coraline", "Corentine", "Corinne", "Cyrielle", "Daniel", "Daniel", "Daphn\xE9", "D\xE9bora", "Delphine", "Denise", "Diane", "Dieudonn\xE9", "Dominique", "Doriane", "Doroth\xE9e", "Douce", "\xC9dith", "Edm\xE9e", "\xC9l\xE9onore", "\xC9liane", "\xC9lia", "\xC9liette", "\xC9lisabeth", "\xC9lise", "Ella", "\xC9lodie", "\xC9lo\xEFse", "Elsa", "\xC9meline", "\xC9m\xE9rance", "\xC9m\xE9rentienne", "\xC9m\xE9rencie", "\xC9milie", "Emma", "Emmanuelle", "Emmelie", "Ernestine", "Esther", "Estelle", "Eudoxie", "Eug\xE9nie", "Eulalie", "Euphrasie", "Eus\xE9bie", "\xC9vang\xE9line", "Eva", "\xC8ve", "\xC9velyne", "Fanny", "Fantine", "Faustine", "F\xE9licie", "Fernande", "Flavie", "Fleur", "Flore", "Florence", "Florie", "Fortun\xE9", "France", "Francia", "Fran\xE7oise", "Francine", "Gabrielle", "Ga\xEBlle", "Garance", "Genevi\xE8ve", "Georgette", "Gerberge", "Germaine", "Gertrude", "Gis\xE8le", "Gueni\xE8vre", "Guilhemine", "Guillemette", "Gustave", "Gwenael", "H\xE9l\xE8ne", "H\xE9lo\xEFse", "Henriette", "Hermine", "Hermione", "Hippolyte", "Honorine", "Hortense", "Huguette", "Ines", "Ir\xE8ne", "Irina", "Iris", "Isabeau", "Isabelle", "Iseult", "Isolde", "Ism\xE9rie", "Jacinthe", "Jacqueline", "Jade", "Janine", "Jeanne", "Jocelyne", "Jo\xEBlle", "Jos\xE9phine", "Judith", "Julia", "Julie", "Jules", "Juliette", "Justine", "Katy", "Kathy", "Katie", "Laura", "Laure", "Laureline", "Laurence", "Laurene", "Lauriane", "Laurianne", "Laurine", "L\xE9a", "L\xE9na", "L\xE9onie", "L\xE9on", "L\xE9ontine", "Lorraine", "Lucie", "Lucienne", "Lucille", "Ludivine", "Lydie", "Lydie", "Megane", "Madeleine", "Magali", "Maguelone", "Mallaury", "Manon", "Marceline", "Margot", "Marguerite", "Marianne", "Marie", "Myriam", "Marie", "Marine", "Marion", "Marl\xE8ne", "Marthe", "Martine", "Mathilde", "Maud", "Maureen", "Mauricette", "Maxime", "M\xE9lanie", "Melissa", "M\xE9lissandre", "M\xE9lisande", "M\xE9lodie", "Michel", "Micheline", "Mireille", "Miriam", "Mo\xEFse", "Monique", "Morgane", "Muriel", "Myl\xE8ne", "Nad\xE8ge", "Nadine", "Nathalie", "Nicole", "Nicolette", "Nine", "No\xEBl", "No\xE9mie", "Oc\xE9ane", "Odette", "Odile", "Olive", "Olivia", "Olympe", "Ombline", "Ombeline", "Oph\xE9lie", "Oriande", "Oriane", "Ozanne", "Pascale", "Pascaline", "Paule", "Paulette", "Pauline", "Priscille", "Prisca", "Prisque", "P\xE9cine", "P\xE9lagie", "P\xE9n\xE9lope", "Perrine", "P\xE9tronille", "Philippine", "Philom\xE8ne", "Philoth\xE9e", "Primerose", "Prudence", "Pulch\xE9rie", "Quentine", "Qui\xE9ta", "Quintia", "Quintilla", "Rachel", "Rapha\xEBlle", "Raymonde", "Rebecca", "R\xE9gine", "R\xE9jeanne", "Ren\xE9", "Rita", "Rita", "Rolande", "Romane", "Rosalie", "Rose", "Roseline", "Sabine", "Salom\xE9", "Sandra", "Sandrine", "Sarah", "S\xE9gol\xE8ne", "S\xE9verine", "Sibylle", "Simone", "Sixt", "Solange", "Soline", "Sol\xE8ne", "Sophie", "St\xE9phanie", "Suzanne", "Sylvain", "Sylvie", "Tatiana", "Tha\xEFs", "Th\xE9odora", "Th\xE9r\xE8se", "Tiphaine", "Ursule", "Valentine", "Val\xE9rie", "V\xE9ronique", "Victoire", "Victorine", "Vinciane", "Violette", "Virginie", "Viviane", "Xavi\xE8re", "Yolande", "Ysaline", "Yvette", "Yvonne", "Z\xE9lie", "Zita", "Zo\xE9"]
        }
      },
      lastNames: {
        en: ["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "McCoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "McKinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "McGee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "McCarthy", "Guerrero", "Lindsey", "Estrada", "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "McBride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "McLaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "McCormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "McKenzie", "Collier", "Luna", "Phelps", "McGuire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins"],
        // Data taken from http://www.dati.gov.it/dataset/comune-di-firenze_0164 (first 1000)
        it: ["Acciai", "Aglietti", "Agostini", "Agresti", "Ahmed", "Aiazzi", "Albanese", "Alberti", "Alessi", "Alfani", "Alinari", "Alterini", "Amato", "Ammannati", "Ancillotti", "Andrei", "Andreini", "Andreoni", "Angeli", "Anichini", "Antonelli", "Antonini", "Arena", "Ariani", "Arnetoli", "Arrighi", "Baccani", "Baccetti", "Bacci", "Bacherini", "Badii", "Baggiani", "Baglioni", "Bagni", "Bagnoli", "Baldassini", "Baldi", "Baldini", "Ballerini", "Balli", "Ballini", "Balloni", "Bambi", "Banchi", "Bandinelli", "Bandini", "Bani", "Barbetti", "Barbieri", "Barchielli", "Bardazzi", "Bardelli", "Bardi", "Barducci", "Bargellini", "Bargiacchi", "Barni", "Baroncelli", "Baroncini", "Barone", "Baroni", "Baronti", "Bartalesi", "Bartoletti", "Bartoli", "Bartolini", "Bartoloni", "Bartolozzi", "Basagni", "Basile", "Bassi", "Batacchi", "Battaglia", "Battaglini", "Bausi", "Becagli", "Becattini", "Becchi", "Becucci", "Bellandi", "Bellesi", "Belli", "Bellini", "Bellucci", "Bencini", "Benedetti", "Benelli", "Beni", "Benini", "Bensi", "Benucci", "Benvenuti", "Berlincioni", "Bernacchioni", "Bernardi", "Bernardini", "Berni", "Bernini", "Bertelli", "Berti", "Bertini", "Bessi", "Betti", "Bettini", "Biagi", "Biagini", "Biagioni", "Biagiotti", "Biancalani", "Bianchi", "Bianchini", "Bianco", "Biffoli", "Bigazzi", "Bigi", "Biliotti", "Billi", "Binazzi", "Bindi", "Bini", "Biondi", "Bizzarri", "Bocci", "Bogani", "Bolognesi", "Bonaiuti", "Bonanni", "Bonciani", "Boncinelli", "Bondi", "Bonechi", "Bongini", "Boni", "Bonini", "Borchi", "Boretti", "Borghi", "Borghini", "Borgioli", "Borri", "Borselli", "Boschi", "Bottai", "Bracci", "Braccini", "Brandi", "Braschi", "Bravi", "Brazzini", "Breschi", "Brilli", "Brizzi", "Brogelli", "Brogi", "Brogioni", "Brunelli", "Brunetti", "Bruni", "Bruno", "Brunori", "Bruschi", "Bucci", "Bucciarelli", "Buccioni", "Bucelli", "Bulli", "Burberi", "Burchi", "Burgassi", "Burroni", "Bussotti", "Buti", "Caciolli", "Caiani", "Calabrese", "Calamai", "Calamandrei", "Caldini", "Calo'", "Calonaci", "Calosi", "Calvelli", "Cambi", "Camiciottoli", "Cammelli", "Cammilli", "Campolmi", "Cantini", "Capanni", "Capecchi", "Caponi", "Cappelletti", "Cappelli", "Cappellini", "Cappugi", "Capretti", "Caputo", "Carbone", "Carboni", "Cardini", "Carlesi", "Carletti", "Carli", "Caroti", "Carotti", "Carrai", "Carraresi", "Carta", "Caruso", "Casalini", "Casati", "Caselli", "Casini", "Castagnoli", "Castellani", "Castelli", "Castellucci", "Catalano", "Catarzi", "Catelani", "Cavaciocchi", "Cavallaro", "Cavallini", "Cavicchi", "Cavini", "Ceccarelli", "Ceccatelli", "Ceccherelli", "Ceccherini", "Cecchi", "Cecchini", "Cecconi", "Cei", "Cellai", "Celli", "Cellini", "Cencetti", "Ceni", "Cenni", "Cerbai", "Cesari", "Ceseri", "Checcacci", "Checchi", "Checcucci", "Cheli", "Chellini", "Chen", "Cheng", "Cherici", "Cherubini", "Chiaramonti", "Chiarantini", "Chiarelli", "Chiari", "Chiarini", "Chiarugi", "Chiavacci", "Chiesi", "Chimenti", "Chini", "Chirici", "Chiti", "Ciabatti", "Ciampi", "Cianchi", "Cianfanelli", "Cianferoni", "Ciani", "Ciapetti", "Ciappi", "Ciardi", "Ciatti", "Cicali", "Ciccone", "Cinelli", "Cini", "Ciobanu", "Ciolli", "Cioni", "Cipriani", "Cirillo", "Cirri", "Ciucchi", "Ciuffi", "Ciulli", "Ciullini", "Clemente", "Cocchi", "Cognome", "Coli", "Collini", "Colombo", "Colzi", "Comparini", "Conforti", "Consigli", "Conte", "Conti", "Contini", "Coppini", "Coppola", "Corsi", "Corsini", "Corti", "Cortini", "Cosi", "Costa", "Costantini", "Costantino", "Cozzi", "Cresci", "Crescioli", "Cresti", "Crini", "Curradi", "D'Agostino", "D'Alessandro", "D'Amico", "D'Angelo", "Daddi", "Dainelli", "Dallai", "Danti", "Davitti", "De Angelis", "De Luca", "De Marco", "De Rosa", "De Santis", "De Simone", "De Vita", "Degl'Innocenti", "Degli Innocenti", "Dei", "Del Lungo", "Del Re", "Di Marco", "Di Stefano", "Dini", "Diop", "Dobre", "Dolfi", "Donati", "Dondoli", "Dong", "Donnini", "Ducci", "Dumitru", "Ermini", "Esposito", "Evangelisti", "Fabbri", "Fabbrini", "Fabbrizzi", "Fabbroni", "Fabbrucci", "Fabiani", "Facchini", "Faggi", "Fagioli", "Failli", "Faini", "Falciani", "Falcini", "Falcone", "Fallani", "Falorni", "Falsini", "Falugiani", "Fancelli", "Fanelli", "Fanetti", "Fanfani", "Fani", "Fantappie'", "Fantechi", "Fanti", "Fantini", "Fantoni", "Farina", "Fattori", "Favilli", "Fedi", "Fei", "Ferrante", "Ferrara", "Ferrari", "Ferraro", "Ferretti", "Ferri", "Ferrini", "Ferroni", "Fiaschi", "Fibbi", "Fiesoli", "Filippi", "Filippini", "Fini", "Fioravanti", "Fiore", "Fiorentini", "Fiorini", "Fissi", "Focardi", "Foggi", "Fontana", "Fontanelli", "Fontani", "Forconi", "Formigli", "Forte", "Forti", "Fortini", "Fossati", "Fossi", "Francalanci", "Franceschi", "Franceschini", "Franchi", "Franchini", "Franci", "Francini", "Francioni", "Franco", "Frassineti", "Frati", "Fratini", "Frilli", "Frizzi", "Frosali", "Frosini", "Frullini", "Fusco", "Fusi", "Gabbrielli", "Gabellini", "Gagliardi", "Galanti", "Galardi", "Galeotti", "Galletti", "Galli", "Gallo", "Gallori", "Gambacciani", "Gargani", "Garofalo", "Garuglieri", "Gashi", "Gasperini", "Gatti", "Gelli", "Gensini", "Gentile", "Gentili", "Geri", "Gerini", "Gheri", "Ghini", "Giachetti", "Giachi", "Giacomelli", "Gianassi", "Giani", "Giannelli", "Giannetti", "Gianni", "Giannini", "Giannoni", "Giannotti", "Giannozzi", "Gigli", "Giordano", "Giorgetti", "Giorgi", "Giovacchini", "Giovannelli", "Giovannetti", "Giovannini", "Giovannoni", "Giuliani", "Giunti", "Giuntini", "Giusti", "Gonnelli", "Goretti", "Gori", "Gradi", "Gramigni", "Grassi", "Grasso", "Graziani", "Grazzini", "Greco", "Grifoni", "Grillo", "Grimaldi", "Grossi", "Gualtieri", "Guarducci", "Guarino", "Guarnieri", "Guasti", "Guerra", "Guerri", "Guerrini", "Guidi", "Guidotti", "He", "Hoxha", "Hu", "Huang", "Iandelli", "Ignesti", "Innocenti", "Jin", "La Rosa", "Lai", "Landi", "Landini", "Lanini", "Lapi", "Lapini", "Lari", "Lascialfari", "Lastrucci", "Latini", "Lazzeri", "Lazzerini", "Lelli", "Lenzi", "Leonardi", "Leoncini", "Leone", "Leoni", "Lepri", "Li", "Liao", "Lin", "Linari", "Lippi", "Lisi", "Livi", "Lombardi", "Lombardini", "Lombardo", "Longo", "Lopez", "Lorenzi", "Lorenzini", "Lorini", "Lotti", "Lu", "Lucchesi", "Lucherini", "Lunghi", "Lupi", "Madiai", "Maestrini", "Maffei", "Maggi", "Maggini", "Magherini", "Magini", "Magnani", "Magnelli", "Magni", "Magnolfi", "Magrini", "Malavolti", "Malevolti", "Manca", "Mancini", "Manetti", "Manfredi", "Mangani", "Mannelli", "Manni", "Mannini", "Mannucci", "Manuelli", "Manzini", "Marcelli", "Marchese", "Marchetti", "Marchi", "Marchiani", "Marchionni", "Marconi", "Marcucci", "Margheri", "Mari", "Mariani", "Marilli", "Marinai", "Marinari", "Marinelli", "Marini", "Marino", "Mariotti", "Marsili", "Martelli", "Martinelli", "Martini", "Martino", "Marzi", "Masi", "Masini", "Masoni", "Massai", "Materassi", "Mattei", "Matteini", "Matteucci", "Matteuzzi", "Mattioli", "Mattolini", "Matucci", "Mauro", "Mazzanti", "Mazzei", "Mazzetti", "Mazzi", "Mazzini", "Mazzocchi", "Mazzoli", "Mazzoni", "Mazzuoli", "Meacci", "Mecocci", "Meini", "Melani", "Mele", "Meli", "Mengoni", "Menichetti", "Meoni", "Merlini", "Messeri", "Messina", "Meucci", "Miccinesi", "Miceli", "Micheli", "Michelini", "Michelozzi", "Migliori", "Migliorini", "Milani", "Miniati", "Misuri", "Monaco", "Montagnani", "Montagni", "Montanari", "Montelatici", "Monti", "Montigiani", "Montini", "Morandi", "Morandini", "Morelli", "Moretti", "Morganti", "Mori", "Morini", "Moroni", "Morozzi", "Mugnai", "Mugnaini", "Mustafa", "Naldi", "Naldini", "Nannelli", "Nanni", "Nannini", "Nannucci", "Nardi", "Nardini", "Nardoni", "Natali", "Ndiaye", "Nencetti", "Nencini", "Nencioni", "Neri", "Nesi", "Nesti", "Niccolai", "Niccoli", "Niccolini", "Nigi", "Nistri", "Nocentini", "Noferini", "Novelli", "Nucci", "Nuti", "Nutini", "Oliva", "Olivieri", "Olmi", "Orlandi", "Orlandini", "Orlando", "Orsini", "Ortolani", "Ottanelli", "Pacciani", "Pace", "Paci", "Pacini", "Pagani", "Pagano", "Paggetti", "Pagliai", "Pagni", "Pagnini", "Paladini", "Palagi", "Palchetti", "Palloni", "Palmieri", "Palumbo", "Pampaloni", "Pancani", "Pandolfi", "Pandolfini", "Panerai", "Panichi", "Paoletti", "Paoli", "Paolini", "Papi", "Papini", "Papucci", "Parenti", "Parigi", "Parisi", "Parri", "Parrini", "Pasquini", "Passeri", "Pecchioli", "Pecorini", "Pellegrini", "Pepi", "Perini", "Perrone", "Peruzzi", "Pesci", "Pestelli", "Petri", "Petrini", "Petrucci", "Pettini", "Pezzati", "Pezzatini", "Piani", "Piazza", "Piazzesi", "Piazzini", "Piccardi", "Picchi", "Piccini", "Piccioli", "Pieraccini", "Pieraccioni", "Pieralli", "Pierattini", "Pieri", "Pierini", "Pieroni", "Pietrini", "Pini", "Pinna", "Pinto", "Pinzani", "Pinzauti", "Piras", "Pisani", "Pistolesi", "Poggesi", "Poggi", "Poggiali", "Poggiolini", "Poli", "Pollastri", "Porciani", "Pozzi", "Pratellesi", "Pratesi", "Prosperi", "Pruneti", "Pucci", "Puccini", "Puccioni", "Pugi", "Pugliese", "Puliti", "Querci", "Quercioli", "Raddi", "Radu", "Raffaelli", "Ragazzini", "Ranfagni", "Ranieri", "Rastrelli", "Raugei", "Raveggi", "Renai", "Renzi", "Rettori", "Ricci", "Ricciardi", "Ridi", "Ridolfi", "Rigacci", "Righi", "Righini", "Rinaldi", "Risaliti", "Ristori", "Rizzo", "Rocchi", "Rocchini", "Rogai", "Romagnoli", "Romanelli", "Romani", "Romano", "Romei", "Romeo", "Romiti", "Romoli", "Romolini", "Rontini", "Rosati", "Roselli", "Rosi", "Rossetti", "Rossi", "Rossini", "Rovai", "Ruggeri", "Ruggiero", "Russo", "Sabatini", "Saccardi", "Sacchetti", "Sacchi", "Sacco", "Salerno", "Salimbeni", "Salucci", "Salvadori", "Salvestrini", "Salvi", "Salvini", "Sanesi", "Sani", "Sanna", "Santi", "Santini", "Santoni", "Santoro", "Santucci", "Sardi", "Sarri", "Sarti", "Sassi", "Sbolci", "Scali", "Scarpelli", "Scarselli", "Scopetani", "Secci", "Selvi", "Senatori", "Senesi", "Serafini", "Sereni", "Serra", "Sestini", "Sguanci", "Sieni", "Signorini", "Silvestri", "Simoncini", "Simonetti", "Simoni", "Singh", "Sodi", "Soldi", "Somigli", "Sorbi", "Sorelli", "Sorrentino", "Sottili", "Spina", "Spinelli", "Staccioli", "Staderini", "Stefanelli", "Stefani", "Stefanini", "Stella", "Susini", "Tacchi", "Tacconi", "Taddei", "Tagliaferri", "Tamburini", "Tanganelli", "Tani", "Tanini", "Tapinassi", "Tarchi", "Tarchiani", "Targioni", "Tassi", "Tassini", "Tempesti", "Terzani", "Tesi", "Testa", "Testi", "Tilli", "Tinti", "Tirinnanzi", "Toccafondi", "Tofanari", "Tofani", "Tognaccini", "Tonelli", "Tonini", "Torelli", "Torrini", "Tosi", "Toti", "Tozzi", "Trambusti", "Trapani", "Tucci", "Turchi", "Ugolini", "Ulivi", "Valente", "Valenti", "Valentini", "Vangelisti", "Vanni", "Vannini", "Vannoni", "Vannozzi", "Vannucchi", "Vannucci", "Ventura", "Venturi", "Venturini", "Vestri", "Vettori", "Vichi", "Viciani", "Vieri", "Vigiani", "Vignoli", "Vignolini", "Vignozzi", "Villani", "Vinci", "Visani", "Vitale", "Vitali", "Viti", "Viviani", "Vivoli", "Volpe", "Volpi", "Wang", "Wu", "Xu", "Yang", "Ye", "Zagli", "Zani", "Zanieri", "Zanobini", "Zecchi", "Zetti", "Zhang", "Zheng", "Zhou", "Zhu", "Zingoni", "Zini", "Zoppi"],
        // http://www.voornamelijk.nl/meest-voorkomende-achternamen-in-nederland-en-amsterdam/
        nl: ["Albers", "Alblas", "Appelman", "Baars", "Baas", "Bakker", "Blank", "Bleeker", "Blok", "Blom", "Boer", "Boers", "Boldewijn", "Boon", "Boot", "Bos", "Bosch", "Bosma", "Bosman", "Bouma", "Bouman", "Bouwman", "Brands", "Brouwer", "Burger", "Buijs", "Buitenhuis", "Ceder", "Cohen", "Dekker", "Dekkers", "Dijkman", "Dijkstra", "Driessen", "Drost", "Engel", "Evers", "Faber", "Franke", "Gerritsen", "Goedhart", "Goossens", "Groen", "Groenenberg", "Groot", "Haan", "Hart", "Heemskerk", "Hendriks", "Hermans", "Hoekstra", "Hofman", "Hopman", "Huisman", "Jacobs", "Jansen", "Janssen", "Jonker", "Jaspers", "Keijzer", "Klaassen", "Klein", "Koek", "Koenders", "Kok", "Kool", "Koopman", "Koopmans", "Koning", "Koster", "Kramer", "Kroon", "Kuijpers", "Kuiper", "Kuipers", "Kurt", "Koster", "Kwakman", "Los", "Lubbers", "Maas", "Markus", "Martens", "Meijer", "Mol", "Molenaar", "Mulder", "Nieuwenhuis", "Peeters", "Peters", "Pengel", "Pieters", "Pool", "Post", "Postma", "Prins", "Pronk", "Reijnders", "Rietveld", "Roest", "Roos", "Sanders", "Schaap", "Scheffer", "Schenk", "Schilder", "Schipper", "Schmidt", "Scholten", "Schouten", "Schut", "Schutte", "Schuurman", "Simons", "Smeets", "Smit", "Smits", "Snel", "Swinkels", "Tas", "Terpstra", "Timmermans", "Tol", "Tromp", "Troost", "Valk", "Veenstra", "Veldkamp", "Verbeek", "Verheul", "Verhoeven", "Vermeer", "Vermeulen", "Verweij", "Vink", "Visser", "Voorn", "Vos", "Wagenaar", "Wiersema", "Willems", "Willemsen", "Witteveen", "Wolff", "Wolters", "Zijlstra", "Zwart", "de Beer", "de Boer", "de Bruijn", "de Bruin", "de Graaf", "de Groot", "de Haan", "de Haas", "de Jager", "de Jong", "de Jonge", "de Koning", "de Lange", "de Leeuw", "de Ridder", "de Rooij", "de Ruiter", "de Vos", "de Vries", "de Waal", "de Wit", "de Zwart", "van Beek", "van Boven", "van Dam", "van Dijk", "van Dongen", "van Doorn", "van Egmond", "van Eijk", "van Es", "van Gelder", "van Gelderen", "van Houten", "van Hulst", "van Kempen", "van Kesteren", "van Leeuwen", "van Loon", "van Mill", "van Noord", "van Ommen", "van Ommeren", "van Oosten", "van Oostveen", "van Rijn", "van Schaik", "van Veen", "van Vliet", "van Wijk", "van Wijngaarden", "van den Poel", "van de Pol", "van den Ploeg", "van de Ven", "van den Berg", "van den Bosch", "van den Brink", "van den Broek", "van den Heuvel", "van der Heijden", "van der Horst", "van der Hulst", "van der Kroon", "van der Laan", "van der Linden", "van der Meer", "van der Meij", "van der Meulen", "van der Molen", "van der Sluis", "van der Spek", "van der Veen", "van der Velde", "van der Velden", "van der Vliet", "van der Wal"],
        // https://surnames.behindthename.com/top/lists/england-wales/1991
        uk: ["Smith", "Jones", "Williams", "Taylor", "Brown", "Davies", "Evans", "Wilson", "Thomas", "Johnson", "Roberts", "Robinson", "Thompson", "Wright", "Walker", "White", "Edwards", "Hughes", "Green", "Hall", "Lewis", "Harris", "Clarke", "Patel", "Jackson", "Wood", "Turner", "Martin", "Cooper", "Hill", "Ward", "Morris", "Moore", "Clark", "Lee", "King", "Baker", "Harrison", "Morgan", "Allen", "James", "Scott", "Phillips", "Watson", "Davis", "Parker", "Price", "Bennett", "Young", "Griffiths", "Mitchell", "Kelly", "Cook", "Carter", "Richardson", "Bailey", "Collins", "Bell", "Shaw", "Murphy", "Miller", "Cox", "Richards", "Khan", "Marshall", "Anderson", "Simpson", "Ellis", "Adams", "Singh", "Begum", "Wilkinson", "Foster", "Chapman", "Powell", "Webb", "Rogers", "Gray", "Mason", "Ali", "Hunt", "Hussain", "Campbell", "Matthews", "Owen", "Palmer", "Holmes", "Mills", "Barnes", "Knight", "Lloyd", "Butler", "Russell", "Barker", "Fisher", "Stevens", "Jenkins", "Murray", "Dixon", "Harvey", "Graham", "Pearson", "Ahmed", "Fletcher", "Walsh", "Kaur", "Gibson", "Howard", "Andrews", "Stewart", "Elliott", "Reynolds", "Saunders", "Payne", "Fox", "Ford", "Pearce", "Day", "Brooks", "West", "Lawrence", "Cole", "Atkinson", "Bradley", "Spencer", "Gill", "Dawson", "Ball", "Burton", "O'brien", "Watts", "Rose", "Booth", "Perry", "Ryan", "Grant", "Wells", "Armstrong", "Francis", "Rees", "Hayes", "Hart", "Hudson", "Newman", "Barrett", "Webster", "Hunter", "Gregory", "Carr", "Lowe", "Page", "Marsh", "Riley", "Dunn", "Woods", "Parsons", "Berry", "Stone", "Reid", "Holland", "Hawkins", "Harding", "Porter", "Robertson", "Newton", "Oliver", "Reed", "Kennedy", "Williamson", "Bird", "Gardner", "Shah", "Dean", "Lane", "Cooke", "Bates", "Henderson", "Parry", "Burgess", "Bishop", "Walton", "Burns", "Nicholson", "Shepherd", "Ross", "Cross", "Long", "Freeman", "Warren", "Nicholls", "Hamilton", "Byrne", "Sutton", "Mcdonald", "Yates", "Hodgson", "Robson", "Curtis", "Hopkins", "O'connor", "Harper", "Coleman", "Watkins", "Moss", "Mccarthy", "Chambers", "O'neill", "Griffin", "Sharp", "Hardy", "Wheeler", "Potter", "Osborne", "Johnston", "Gordon", "Doyle", "Wallace", "George", "Jordan", "Hutchinson", "Rowe", "Burke", "May", "Pritchard", "Gilbert", "Willis", "Higgins", "Read", "Miles", "Stevenson", "Stephenson", "Hammond", "Arnold", "Buckley", "Walters", "Hewitt", "Barber", "Nelson", "Slater", "Austin", "Sullivan", "Whitehead", "Mann", "Frost", "Lambert", "Stephens", "Blake", "Akhtar", "Lynch", "Goodwin", "Barton", "Woodward", "Thomson", "Cunningham", "Quinn", "Barnett", "Baxter", "Bibi", "Clayton", "Nash", "Greenwood", "Jennings", "Holt", "Kemp", "Poole", "Gallagher", "Bond", "Stokes", "Tucker", "Davidson", "Fowler", "Heath", "Norman", "Middleton", "Lawson", "Banks", "French", "Stanley", "Jarvis", "Gibbs", "Ferguson", "Hayward", "Carroll", "Douglas", "Dickinson", "Todd", "Barlow", "Peters", "Lucas", "Knowles", "Hartley", "Miah", "Simmons", "Morton", "Alexander", "Field", "Morrison", "Norris", "Townsend", "Preston", "Hancock", "Thornton", "Baldwin", "Burrows", "Briggs", "Parkinson", "Reeves", "Macdonald", "Lamb", "Black", "Abbott", "Sanders", "Thorpe", "Holden", "Tomlinson", "Perkins", "Ashton", "Rhodes", "Fuller", "Howe", "Bryant", "Vaughan", "Dale", "Davey", "Weston", "Bartlett", "Whittaker", "Davison", "Kent", "Skinner", "Birch", "Morley", "Daniels", "Glover", "Howell", "Cartwright", "Pugh", "Humphreys", "Goddard", "Brennan", "Wall", "Kirby", "Bowen", "Savage", "Bull", "Wong", "Dobson", "Smart", "Wilkins", "Kirk", "Fraser", "Duffy", "Hicks", "Patterson", "Bradshaw", "Little", "Archer", "Warner", "Waters", "O'sullivan", "Farrell", "Brookes", "Atkins", "Kay", "Dodd", "Bentley", "Flynn", "John", "Schofield", "Short", "Haynes", "Wade", "Butcher", "Henry", "Sanderson", "Crawford", "Sheppard", "Bolton", "Coates", "Giles", "Gould", "Houghton", "Gibbons", "Pratt", "Manning", "Law", "Hooper", "Noble", "Dyer", "Rahman", "Clements", "Moran", "Sykes", "Chan", "Doherty", "Connolly", "Joyce", "Franklin", "Hobbs", "Coles", "Herbert", "Steele", "Kerr", "Leach", "Winter", "Owens", "Duncan", "Naylor", "Fleming", "Horton", "Finch", "Fitzgerald", "Randall", "Carpenter", "Marsden", "Browne", "Garner", "Pickering", "Hale", "Dennis", "Vincent", "Chadwick", "Chandler", "Sharpe", "Nolan", "Lyons", "Hurst", "Collier", "Peacock", "Howarth", "Faulkner", "Rice", "Pollard", "Welch", "Norton", "Gough", "Sinclair", "Blackburn", "Bryan", "Conway", "Power", "Cameron", "Daly", "Allan", "Hanson", "Gardiner", "Boyle", "Myers", "Turnbull", "Wallis", "Mahmood", "Sims", "Swift", "Iqbal", "Pope", "Brady", "Chamberlain", "Rowley", "Tyler", "Farmer", "Metcalfe", "Hilton", "Godfrey", "Holloway", "Parkin", "Bray", "Talbot", "Donnelly", "Nixon", "Charlton", "Benson", "Whitehouse", "Barry", "Hope", "Lord", "North", "Storey", "Connor", "Potts", "Bevan", "Hargreaves", "Mclean", "Mistry", "Bruce", "Howells", "Hyde", "Parkes", "Wyatt", "Fry", "Lees", "O'donnell", "Craig", "Forster", "Mckenzie", "Humphries", "Mellor", "Carey", "Ingram", "Summers", "Leonard"],
        // https://surnames.behindthename.com/top/lists/germany/2017
        de: ["M\xFCller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Sch\xE4fer", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schr\xF6der", "Neumann", "Schwarz", "Zimmermann", "Braun", "Kr\xFCger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause", "Meier", "Lehmann", "Schmid", "Schulze", "Maier", "K\xF6hler", "Herrmann", "K\xF6nig", "Walter", "Mayer", "Huber", "Kaiser", "Fuchs", "Peters", "Lang", "Scholz", "M\xF6ller", "Wei\xDF", "Jung", "Hahn", "Schubert", "Vogel", "Friedrich", "Keller", "G\xFCnther", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann", "Franke", "Albrecht", "Schuster", "Simon", "Ludwig", "B\xF6hm", "Winter", "Kraus", "Martin", "Schumacher", "Kr\xE4mer", "Vogt", "Stein", "J\xE4ger", "Otto", "Sommer", "Gro\xDF", "Seidel", "Heinrich", "Brandt", "Haas", "Schreiber", "Graf", "Schulte", "Dietrich", "Ziegler", "Kuhn", "K\xFChn", "Pohl", "Engel", "Horn", "Busch", "Bergmann", "Thomas", "Voigt", "Sauer", "Arnold", "Wolff", "Pfeiffer"],
        // http://www.japantimes.co.jp/life/2009/10/11/lifestyle/japans-top-100-most-common-family-names/
        jp: ["Sato", "Suzuki", "Takahashi", "Tanaka", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada", "Sasaki", "Yamaguchi", "Saito", "Matsumoto", "Inoue", "Kimura", "Hayashi", "Shimizu", "Yamazaki", "Mori", "Abe", "Ikeda", "Hashimoto", "Yamashita", "Ishikawa", "Nakajima", "Maeda", "Fujita", "Ogawa", "Goto", "Okada", "Hasegawa", "Murakami", "Kondo", "Ishii", "Saito", "Sakamoto", "Endo", "Aoki", "Fujii", "Nishimura", "Fukuda", "Ota", "Miura", "Fujiwara", "Okamoto", "Matsuda", "Nakagawa", "Nakano", "Harada", "Ono", "Tamura", "Takeuchi", "Kaneko", "Wada", "Nakayama", "Ishida", "Ueda", "Morita", "Hara", "Shibata", "Sakai", "Kudo", "Yokoyama", "Miyazaki", "Miyamoto", "Uchida", "Takagi", "Ando", "Taniguchi", "Ohno", "Maruyama", "Imai", "Takada", "Fujimoto", "Takeda", "Murata", "Ueno", "Sugiyama", "Masuda", "Sugawara", "Hirano", "Kojima", "Otsuka", "Chiba", "Kubo", "Matsui", "Iwasaki", "Sakurai", "Kinoshita", "Noguchi", "Matsuo", "Nomura", "Kikuchi", "Sano", "Onishi", "Sugimoto", "Arai"],
        // http://www.lowchensaustralia.com/names/popular-spanish-names.htm
        es: ["Garcia", "Fernandez", "Lopez", "Martinez", "Gonzalez", "Rodriguez", "Sanchez", "Perez", "Martin", "Gomez", "Ruiz", "Diaz", "Hernandez", "Alvarez", "Jimenez", "Moreno", "Munoz", "Alonso", "Romero", "Navarro", "Gutierrez", "Torres", "Dominguez", "Gil", "Vazquez", "Blanco", "Serrano", "Ramos", "Castro", "Suarez", "Sanz", "Rubio", "Ortega", "Molina", "Delgado", "Ortiz", "Morales", "Ramirez", "Marin", "Iglesias", "Santos", "Castillo", "Garrido", "Calvo", "Pena", "Cruz", "Cano", "Nunez", "Prieto", "Diez", "Lozano", "Vidal", "Pascual", "Ferrer", "Medina", "Vega", "Leon", "Herrero", "Vicente", "Mendez", "Guerrero", "Fuentes", "Campos", "Nieto", "Cortes", "Caballero", "Ibanez", "Lorenzo", "Pastor", "Gimenez", "Saez", "Soler", "Marquez", "Carrasco", "Herrera", "Montero", "Arias", "Crespo", "Flores", "Andres", "Aguilar", "Hidalgo", "Cabrera", "Mora", "Duran", "Velasco", "Rey", "Pardo", "Roman", "Vila", "Bravo", "Merino", "Moya", "Soto", "Izquierdo", "Reyes", "Redondo", "Marcos", "Carmona", "Menendez"],
        // Data taken from https://fr.wikipedia.org/wiki/Liste_des_noms_de_famille_les_plus_courants_en_France
        fr: ["Martin", "Bernard", "Thomas", "Petit", "Robert", "Richard", "Durand", "Dubois", "Moreau", "Laurent", "Simon", "Michel", "Lef\xE8vre", "Leroy", "Roux", "David", "Bertrand", "Morel", "Fournier", "Girard", "Bonnet", "Dupont", "Lambert", "Fontaine", "Rousseau", "Vincent", "M\xFCller", "Lef\xE8vre", "Faure", "Andr\xE9", "Mercier", "Blanc", "Gu\xE9rin", "Boyer", "Garnier", "Chevalier", "Fran\xE7ois", "Legrand", "Gauthier", "Garcia", "Perrin", "Robin", "Cl\xE9ment", "Morin", "Nicolas", "Henry", "Roussel", "Matthieu", "Gautier", "Masson", "Marchand", "Duval", "Denis", "Dumont", "Marie", "Lemaire", "No\xEBl", "Meyer", "Dufour", "Meunier", "Brun", "Blanchard", "Giraud", "Joly", "Rivi\xE8re", "Lucas", "Brunet", "Gaillard", "Barbier", "Arnaud", "Mart\xEDnez", "G\xE9rard", "Roche", "Renard", "Schmitt", "Roy", "Leroux", "Colin", "Vidal", "Caron", "Picard", "Roger", "Fabre", "Aubert", "Lemoine", "Renaud", "Dumas", "Lacroix", "Olivier", "Philippe", "Bourgeois", "Pierre", "Beno\xEEt", "Rey", "Leclerc", "Payet", "Rolland", "Leclercq", "Guillaume", "Lecomte", "L\xF3pez", "Jean", "Dupuy", "Guillot", "Hubert", "Berger", "Carpentier", "S\xE1nchez", "Dupuis", "Moulin", "Louis", "Deschamps", "Huet", "Vasseur", "Perez", "Boucher", "Fleury", "Royer", "Klein", "Jacquet", "Adam", "Paris", "Poirier", "Marty", "Aubry", "Guyot", "Carr\xE9", "Charles", "Renault", "Charpentier", "M\xE9nard", "Maillard", "Baron", "Bertin", "Bailly", "Herv\xE9", "Schneider", "Fern\xE1ndez", "Le GallGall", "Collet", "L\xE9ger", "Bouvier", "Julien", "Pr\xE9vost", "Millet", "Perrot", "Daniel", "Le RouxRoux", "Cousin", "Germain", "Breton", "Besson", "Langlois", "R\xE9mi", "Le GoffGoff", "Pelletier", "L\xE9v\xEAque", "Perrier", "Leblanc", "Barr\xE9", "Lebrun", "Marchal", "Weber", "Mallet", "Hamon", "Boulanger", "Jacob", "Monnier", "Michaud", "Rodr\xEDguez", "Guichard", "Gillet", "\xC9tienne", "Grondin", "Poulain", "Tessier", "Chevallier", "Collin", "Chauvin", "Da SilvaSilva", "Bouchet", "Gay", "Lema\xEEtre", "B\xE9nard", "Mar\xE9chal", "Humbert", "Reynaud", "Antoine", "Hoarau", "Perret", "Barth\xE9lemy", "Cordier", "Pichon", "Lejeune", "Gilbert", "Lamy", "Delaunay", "Pasquier", "Carlier", "LaporteLaporte"]
      },
      // Data taken from http://geoportal.statistics.gov.uk/datasets/ons-postcode-directory-latest-centroids
      postcodeAreas: [{ code: "AB" }, { code: "AL" }, { code: "B" }, { code: "BA" }, { code: "BB" }, { code: "BD" }, { code: "BH" }, { code: "BL" }, { code: "BN" }, { code: "BR" }, { code: "BS" }, { code: "BT" }, { code: "CA" }, { code: "CB" }, { code: "CF" }, { code: "CH" }, { code: "CM" }, { code: "CO" }, { code: "CR" }, { code: "CT" }, { code: "CV" }, { code: "CW" }, { code: "DA" }, { code: "DD" }, { code: "DE" }, { code: "DG" }, { code: "DH" }, { code: "DL" }, { code: "DN" }, { code: "DT" }, { code: "DY" }, { code: "E" }, { code: "EC" }, { code: "EH" }, { code: "EN" }, { code: "EX" }, { code: "FK" }, { code: "FY" }, { code: "G" }, { code: "GL" }, { code: "GU" }, { code: "GY" }, { code: "HA" }, { code: "HD" }, { code: "HG" }, { code: "HP" }, { code: "HR" }, { code: "HS" }, { code: "HU" }, { code: "HX" }, { code: "IG" }, { code: "IM" }, { code: "IP" }, { code: "IV" }, { code: "JE" }, { code: "KA" }, { code: "KT" }, { code: "KW" }, { code: "KY" }, { code: "L" }, { code: "LA" }, { code: "LD" }, { code: "LE" }, { code: "LL" }, { code: "LN" }, { code: "LS" }, { code: "LU" }, { code: "M" }, { code: "ME" }, { code: "MK" }, { code: "ML" }, { code: "N" }, { code: "NE" }, { code: "NG" }, { code: "NN" }, { code: "NP" }, { code: "NR" }, { code: "NW" }, { code: "OL" }, { code: "OX" }, { code: "PA" }, { code: "PE" }, { code: "PH" }, { code: "PL" }, { code: "PO" }, { code: "PR" }, { code: "RG" }, { code: "RH" }, { code: "RM" }, { code: "S" }, { code: "SA" }, { code: "SE" }, { code: "SG" }, { code: "SK" }, { code: "SL" }, { code: "SM" }, { code: "SN" }, { code: "SO" }, { code: "SP" }, { code: "SR" }, { code: "SS" }, { code: "ST" }, { code: "SW" }, { code: "SY" }, { code: "TA" }, { code: "TD" }, { code: "TF" }, { code: "TN" }, { code: "TQ" }, { code: "TR" }, { code: "TS" }, { code: "TW" }, { code: "UB" }, { code: "W" }, { code: "WA" }, { code: "WC" }, { code: "WD" }, { code: "WF" }, { code: "WN" }, { code: "WR" }, { code: "WS" }, { code: "WV" }, { code: "YO" }, { code: "ZE" }],
      // Data taken from https://github.com/umpirsky/country-list/blob/master/data/en_US/country.json
      countries: [{ name: "Afghanistan", abbreviation: "AF" }, { name: "\xC5land Islands", abbreviation: "AX" }, { name: "Albania", abbreviation: "AL" }, { name: "Algeria", abbreviation: "DZ" }, { name: "American Samoa", abbreviation: "AS" }, { name: "Andorra", abbreviation: "AD" }, { name: "Angola", abbreviation: "AO" }, { name: "Anguilla", abbreviation: "AI" }, { name: "Antarctica", abbreviation: "AQ" }, { name: "Antigua & Barbuda", abbreviation: "AG" }, { name: "Argentina", abbreviation: "AR" }, { name: "Armenia", abbreviation: "AM" }, { name: "Aruba", abbreviation: "AW" }, { name: "Ascension Island", abbreviation: "AC" }, { name: "Australia", abbreviation: "AU" }, { name: "Austria", abbreviation: "AT" }, { name: "Azerbaijan", abbreviation: "AZ" }, { name: "Bahamas", abbreviation: "BS" }, { name: "Bahrain", abbreviation: "BH" }, { name: "Bangladesh", abbreviation: "BD" }, { name: "Barbados", abbreviation: "BB" }, { name: "Belarus", abbreviation: "BY" }, { name: "Belgium", abbreviation: "BE" }, { name: "Belize", abbreviation: "BZ" }, { name: "Benin", abbreviation: "BJ" }, { name: "Bermuda", abbreviation: "BM" }, { name: "Bhutan", abbreviation: "BT" }, { name: "Bolivia", abbreviation: "BO" }, { name: "Bosnia & Herzegovina", abbreviation: "BA" }, { name: "Botswana", abbreviation: "BW" }, { name: "Brazil", abbreviation: "BR" }, { name: "British Indian Ocean Territory", abbreviation: "IO" }, { name: "British Virgin Islands", abbreviation: "VG" }, { name: "Brunei", abbreviation: "BN" }, { name: "Bulgaria", abbreviation: "BG" }, { name: "Burkina Faso", abbreviation: "BF" }, { name: "Burundi", abbreviation: "BI" }, { name: "Cambodia", abbreviation: "KH" }, { name: "Cameroon", abbreviation: "CM" }, { name: "Canada", abbreviation: "CA" }, { name: "Canary Islands", abbreviation: "IC" }, { name: "Cape Verde", abbreviation: "CV" }, { name: "Caribbean Netherlands", abbreviation: "BQ" }, { name: "Cayman Islands", abbreviation: "KY" }, { name: "Central African Republic", abbreviation: "CF" }, { name: "Ceuta & Melilla", abbreviation: "EA" }, { name: "Chad", abbreviation: "TD" }, { name: "Chile", abbreviation: "CL" }, { name: "China", abbreviation: "CN" }, { name: "Christmas Island", abbreviation: "CX" }, { name: "Cocos (Keeling) Islands", abbreviation: "CC" }, { name: "Colombia", abbreviation: "CO" }, { name: "Comoros", abbreviation: "KM" }, { name: "Congo - Brazzaville", abbreviation: "CG" }, { name: "Congo - Kinshasa", abbreviation: "CD" }, { name: "Cook Islands", abbreviation: "CK" }, { name: "Costa Rica", abbreviation: "CR" }, { name: "C\xF4te d'Ivoire", abbreviation: "CI" }, { name: "Croatia", abbreviation: "HR" }, { name: "Cuba", abbreviation: "CU" }, { name: "Cura\xE7ao", abbreviation: "CW" }, { name: "Cyprus", abbreviation: "CY" }, { name: "Czech Republic", abbreviation: "CZ" }, { name: "Denmark", abbreviation: "DK" }, { name: "Diego Garcia", abbreviation: "DG" }, { name: "Djibouti", abbreviation: "DJ" }, { name: "Dominica", abbreviation: "DM" }, { name: "Dominican Republic", abbreviation: "DO" }, { name: "Ecuador", abbreviation: "EC" }, { name: "Egypt", abbreviation: "EG" }, { name: "El Salvador", abbreviation: "SV" }, { name: "Equatorial Guinea", abbreviation: "GQ" }, { name: "Eritrea", abbreviation: "ER" }, { name: "Estonia", abbreviation: "EE" }, { name: "Ethiopia", abbreviation: "ET" }, { name: "Falkland Islands", abbreviation: "FK" }, { name: "Faroe Islands", abbreviation: "FO" }, { name: "Fiji", abbreviation: "FJ" }, { name: "Finland", abbreviation: "FI" }, { name: "France", abbreviation: "FR" }, { name: "French Guiana", abbreviation: "GF" }, { name: "French Polynesia", abbreviation: "PF" }, { name: "French Southern Territories", abbreviation: "TF" }, { name: "Gabon", abbreviation: "GA" }, { name: "Gambia", abbreviation: "GM" }, { name: "Georgia", abbreviation: "GE" }, { name: "Germany", abbreviation: "DE" }, { name: "Ghana", abbreviation: "GH" }, { name: "Gibraltar", abbreviation: "GI" }, { name: "Greece", abbreviation: "GR" }, { name: "Greenland", abbreviation: "GL" }, { name: "Grenada", abbreviation: "GD" }, { name: "Guadeloupe", abbreviation: "GP" }, { name: "Guam", abbreviation: "GU" }, { name: "Guatemala", abbreviation: "GT" }, { name: "Guernsey", abbreviation: "GG" }, { name: "Guinea", abbreviation: "GN" }, { name: "Guinea-Bissau", abbreviation: "GW" }, { name: "Guyana", abbreviation: "GY" }, { name: "Haiti", abbreviation: "HT" }, { name: "Honduras", abbreviation: "HN" }, { name: "Hong Kong SAR China", abbreviation: "HK" }, { name: "Hungary", abbreviation: "HU" }, { name: "Iceland", abbreviation: "IS" }, { name: "India", abbreviation: "IN" }, { name: "Indonesia", abbreviation: "ID" }, { name: "Iran", abbreviation: "IR" }, { name: "Iraq", abbreviation: "IQ" }, { name: "Ireland", abbreviation: "IE" }, { name: "Isle of Man", abbreviation: "IM" }, { name: "Israel", abbreviation: "IL" }, { name: "Italy", abbreviation: "IT" }, { name: "Jamaica", abbreviation: "JM" }, { name: "Japan", abbreviation: "JP" }, { name: "Jersey", abbreviation: "JE" }, { name: "Jordan", abbreviation: "JO" }, { name: "Kazakhstan", abbreviation: "KZ" }, { name: "Kenya", abbreviation: "KE" }, { name: "Kiribati", abbreviation: "KI" }, { name: "Kosovo", abbreviation: "XK" }, { name: "Kuwait", abbreviation: "KW" }, { name: "Kyrgyzstan", abbreviation: "KG" }, { name: "Laos", abbreviation: "LA" }, { name: "Latvia", abbreviation: "LV" }, { name: "Lebanon", abbreviation: "LB" }, { name: "Lesotho", abbreviation: "LS" }, { name: "Liberia", abbreviation: "LR" }, { name: "Libya", abbreviation: "LY" }, { name: "Liechtenstein", abbreviation: "LI" }, { name: "Lithuania", abbreviation: "LT" }, { name: "Luxembourg", abbreviation: "LU" }, { name: "Macau SAR China", abbreviation: "MO" }, { name: "Macedonia", abbreviation: "MK" }, { name: "Madagascar", abbreviation: "MG" }, { name: "Malawi", abbreviation: "MW" }, { name: "Malaysia", abbreviation: "MY" }, { name: "Maldives", abbreviation: "MV" }, { name: "Mali", abbreviation: "ML" }, { name: "Malta", abbreviation: "MT" }, { name: "Marshall Islands", abbreviation: "MH" }, { name: "Martinique", abbreviation: "MQ" }, { name: "Mauritania", abbreviation: "MR" }, { name: "Mauritius", abbreviation: "MU" }, { name: "Mayotte", abbreviation: "YT" }, { name: "Mexico", abbreviation: "MX" }, { name: "Micronesia", abbreviation: "FM" }, { name: "Moldova", abbreviation: "MD" }, { name: "Monaco", abbreviation: "MC" }, { name: "Mongolia", abbreviation: "MN" }, { name: "Montenegro", abbreviation: "ME" }, { name: "Montserrat", abbreviation: "MS" }, { name: "Morocco", abbreviation: "MA" }, { name: "Mozambique", abbreviation: "MZ" }, { name: "Myanmar (Burma)", abbreviation: "MM" }, { name: "Namibia", abbreviation: "NA" }, { name: "Nauru", abbreviation: "NR" }, { name: "Nepal", abbreviation: "NP" }, { name: "Netherlands", abbreviation: "NL" }, { name: "New Caledonia", abbreviation: "NC" }, { name: "New Zealand", abbreviation: "NZ" }, { name: "Nicaragua", abbreviation: "NI" }, { name: "Niger", abbreviation: "NE" }, { name: "Nigeria", abbreviation: "NG" }, { name: "Niue", abbreviation: "NU" }, { name: "Norfolk Island", abbreviation: "NF" }, { name: "North Korea", abbreviation: "KP" }, { name: "Northern Mariana Islands", abbreviation: "MP" }, { name: "Norway", abbreviation: "NO" }, { name: "Oman", abbreviation: "OM" }, { name: "Pakistan", abbreviation: "PK" }, { name: "Palau", abbreviation: "PW" }, { name: "Palestinian Territories", abbreviation: "PS" }, { name: "Panama", abbreviation: "PA" }, { name: "Papua New Guinea", abbreviation: "PG" }, { name: "Paraguay", abbreviation: "PY" }, { name: "Peru", abbreviation: "PE" }, { name: "Philippines", abbreviation: "PH" }, { name: "Pitcairn Islands", abbreviation: "PN" }, { name: "Poland", abbreviation: "PL" }, { name: "Portugal", abbreviation: "PT" }, { name: "Puerto Rico", abbreviation: "PR" }, { name: "Qatar", abbreviation: "QA" }, { name: "R\xE9union", abbreviation: "RE" }, { name: "Romania", abbreviation: "RO" }, { name: "Russia", abbreviation: "RU" }, { name: "Rwanda", abbreviation: "RW" }, { name: "Samoa", abbreviation: "WS" }, { name: "San Marino", abbreviation: "SM" }, { name: "S\xE3o Tom\xE9 and Pr\xEDncipe", abbreviation: "ST" }, { name: "Saudi Arabia", abbreviation: "SA" }, { name: "Senegal", abbreviation: "SN" }, { name: "Serbia", abbreviation: "RS" }, { name: "Seychelles", abbreviation: "SC" }, { name: "Sierra Leone", abbreviation: "SL" }, { name: "Singapore", abbreviation: "SG" }, { name: "Sint Maarten", abbreviation: "SX" }, { name: "Slovakia", abbreviation: "SK" }, { name: "Slovenia", abbreviation: "SI" }, { name: "Solomon Islands", abbreviation: "SB" }, { name: "Somalia", abbreviation: "SO" }, { name: "South Africa", abbreviation: "ZA" }, { name: "South Georgia & South Sandwich Islands", abbreviation: "GS" }, { name: "South Korea", abbreviation: "KR" }, { name: "South Sudan", abbreviation: "SS" }, { name: "Spain", abbreviation: "ES" }, { name: "Sri Lanka", abbreviation: "LK" }, { name: "St. Barth\xE9lemy", abbreviation: "BL" }, { name: "St. Helena", abbreviation: "SH" }, { name: "St. Kitts & Nevis", abbreviation: "KN" }, { name: "St. Lucia", abbreviation: "LC" }, { name: "St. Martin", abbreviation: "MF" }, { name: "St. Pierre & Miquelon", abbreviation: "PM" }, { name: "St. Vincent & Grenadines", abbreviation: "VC" }, { name: "Sudan", abbreviation: "SD" }, { name: "Suriname", abbreviation: "SR" }, { name: "Svalbard & Jan Mayen", abbreviation: "SJ" }, { name: "Swaziland", abbreviation: "SZ" }, { name: "Sweden", abbreviation: "SE" }, { name: "Switzerland", abbreviation: "CH" }, { name: "Syria", abbreviation: "SY" }, { name: "Taiwan", abbreviation: "TW" }, { name: "Tajikistan", abbreviation: "TJ" }, { name: "Tanzania", abbreviation: "TZ" }, { name: "Thailand", abbreviation: "TH" }, { name: "Timor-Leste", abbreviation: "TL" }, { name: "Togo", abbreviation: "TG" }, { name: "Tokelau", abbreviation: "TK" }, { name: "Tonga", abbreviation: "TO" }, { name: "Trinidad & Tobago", abbreviation: "TT" }, { name: "Tristan da Cunha", abbreviation: "TA" }, { name: "Tunisia", abbreviation: "TN" }, { name: "Turkey", abbreviation: "TR" }, { name: "Turkmenistan", abbreviation: "TM" }, { name: "Turks & Caicos Islands", abbreviation: "TC" }, { name: "Tuvalu", abbreviation: "TV" }, { name: "U.S. Outlying Islands", abbreviation: "UM" }, { name: "U.S. Virgin Islands", abbreviation: "VI" }, { name: "Uganda", abbreviation: "UG" }, { name: "Ukraine", abbreviation: "UA" }, { name: "United Arab Emirates", abbreviation: "AE" }, { name: "United Kingdom", abbreviation: "GB" }, { name: "United States", abbreviation: "US" }, { name: "Uruguay", abbreviation: "UY" }, { name: "Uzbekistan", abbreviation: "UZ" }, { name: "Vanuatu", abbreviation: "VU" }, { name: "Vatican City", abbreviation: "VA" }, { name: "Venezuela", abbreviation: "VE" }, { name: "Vietnam", abbreviation: "VN" }, { name: "Wallis & Futuna", abbreviation: "WF" }, { name: "Western Sahara", abbreviation: "EH" }, { name: "Yemen", abbreviation: "YE" }, { name: "Zambia", abbreviation: "ZM" }, { name: "Zimbabwe", abbreviation: "ZW" }],
      counties: {
        // Data taken from http://www.downloadexcelfiles.com/gb_en/download-excel-file-list-counties-uk
        uk: [
          { name: "Bath and North East Somerset" },
          { name: "Aberdeenshire" },
          { name: "Anglesey" },
          { name: "Angus" },
          { name: "Bedford" },
          { name: "Blackburn with Darwen" },
          { name: "Blackpool" },
          { name: "Bournemouth" },
          { name: "Bracknell Forest" },
          { name: "Brighton & Hove" },
          { name: "Bristol" },
          { name: "Buckinghamshire" },
          { name: "Cambridgeshire" },
          { name: "Carmarthenshire" },
          { name: "Central Bedfordshire" },
          { name: "Ceredigion" },
          { name: "Cheshire East" },
          { name: "Cheshire West and Chester" },
          { name: "Clackmannanshire" },
          { name: "Conwy" },
          { name: "Cornwall" },
          { name: "County Antrim" },
          { name: "County Armagh" },
          { name: "County Down" },
          { name: "County Durham" },
          { name: "County Fermanagh" },
          { name: "County Londonderry" },
          { name: "County Tyrone" },
          { name: "Cumbria" },
          { name: "Darlington" },
          { name: "Denbighshire" },
          { name: "Derby" },
          { name: "Derbyshire" },
          { name: "Devon" },
          { name: "Dorset" },
          { name: "Dumfries and Galloway" },
          { name: "Dundee" },
          { name: "East Lothian" },
          { name: "East Riding of Yorkshire" },
          { name: "East Sussex" },
          { name: "Edinburgh?" },
          { name: "Essex" },
          { name: "Falkirk" },
          { name: "Fife" },
          { name: "Flintshire" },
          { name: "Gloucestershire" },
          { name: "Greater London" },
          { name: "Greater Manchester" },
          { name: "Gwent" },
          { name: "Gwynedd" },
          { name: "Halton" },
          { name: "Hampshire" },
          { name: "Hartlepool" },
          { name: "Herefordshire" },
          { name: "Hertfordshire" },
          { name: "Highlands" },
          { name: "Hull" },
          { name: "Isle of Wight" },
          { name: "Isles of Scilly" },
          { name: "Kent" },
          { name: "Lancashire" },
          { name: "Leicester" },
          { name: "Leicestershire" },
          { name: "Lincolnshire" },
          { name: "Lothian" },
          { name: "Luton" },
          { name: "Medway" },
          { name: "Merseyside" },
          { name: "Mid Glamorgan" },
          { name: "Middlesbrough" },
          { name: "Milton Keynes" },
          { name: "Monmouthshire" },
          { name: "Moray" },
          { name: "Norfolk" },
          { name: "North East Lincolnshire" },
          { name: "North Lincolnshire" },
          { name: "North Somerset" },
          { name: "North Yorkshire" },
          { name: "Northamptonshire" },
          { name: "Northumberland" },
          { name: "Nottingham" },
          { name: "Nottinghamshire" },
          { name: "Oxfordshire" },
          { name: "Pembrokeshire" },
          { name: "Perth and Kinross" },
          { name: "Peterborough" },
          { name: "Plymouth" },
          { name: "Poole" },
          { name: "Portsmouth" },
          { name: "Powys" },
          { name: "Reading" },
          { name: "Redcar and Cleveland" },
          { name: "Rutland" },
          { name: "Scottish Borders" },
          { name: "Shropshire" },
          { name: "Slough" },
          { name: "Somerset" },
          { name: "South Glamorgan" },
          { name: "South Gloucestershire" },
          { name: "South Yorkshire" },
          { name: "Southampton" },
          { name: "Southend-on-Sea" },
          { name: "Staffordshire" },
          { name: "Stirlingshire" },
          { name: "Stockton-on-Tees" },
          { name: "Stoke-on-Trent" },
          { name: "Strathclyde" },
          { name: "Suffolk" },
          { name: "Surrey" },
          { name: "Swindon" },
          { name: "Telford and Wrekin" },
          { name: "Thurrock" },
          { name: "Torbay" },
          { name: "Tyne and Wear" },
          { name: "Warrington" },
          { name: "Warwickshire" },
          { name: "West Berkshire" },
          { name: "West Glamorgan" },
          { name: "West Lothian" },
          { name: "West Midlands" },
          { name: "West Sussex" },
          { name: "West Yorkshire" },
          { name: "Western Isles" },
          { name: "Wiltshire" },
          { name: "Windsor and Maidenhead" },
          { name: "Wokingham" },
          { name: "Worcestershire" },
          { name: "Wrexham" },
          { name: "York" }
        ]
      },
      provinces: {
        ca: [
          { name: "Alberta", abbreviation: "AB" },
          { name: "British Columbia", abbreviation: "BC" },
          { name: "Manitoba", abbreviation: "MB" },
          { name: "New Brunswick", abbreviation: "NB" },
          { name: "Newfoundland and Labrador", abbreviation: "NL" },
          { name: "Nova Scotia", abbreviation: "NS" },
          { name: "Ontario", abbreviation: "ON" },
          { name: "Prince Edward Island", abbreviation: "PE" },
          { name: "Quebec", abbreviation: "QC" },
          { name: "Saskatchewan", abbreviation: "SK" },
          // The case could be made that the following are not actually provinces
          // since they are technically considered "territories" however they all
          // look the same on an envelope!
          { name: "Northwest Territories", abbreviation: "NT" },
          { name: "Nunavut", abbreviation: "NU" },
          { name: "Yukon", abbreviation: "YT" }
        ],
        it: [
          { name: "Agrigento", abbreviation: "AG", code: 84 },
          { name: "Alessandria", abbreviation: "AL", code: 6 },
          { name: "Ancona", abbreviation: "AN", code: 42 },
          { name: "Aosta", abbreviation: "AO", code: 7 },
          { name: "L'Aquila", abbreviation: "AQ", code: 66 },
          { name: "Arezzo", abbreviation: "AR", code: 51 },
          { name: "Ascoli-Piceno", abbreviation: "AP", code: 44 },
          { name: "Asti", abbreviation: "AT", code: 5 },
          { name: "Avellino", abbreviation: "AV", code: 64 },
          { name: "Bari", abbreviation: "BA", code: 72 },
          { name: "Barletta-Andria-Trani", abbreviation: "BT", code: 72 },
          { name: "Belluno", abbreviation: "BL", code: 25 },
          { name: "Benevento", abbreviation: "BN", code: 62 },
          { name: "Bergamo", abbreviation: "BG", code: 16 },
          { name: "Biella", abbreviation: "BI", code: 96 },
          { name: "Bologna", abbreviation: "BO", code: 37 },
          { name: "Bolzano", abbreviation: "BZ", code: 21 },
          { name: "Brescia", abbreviation: "BS", code: 17 },
          { name: "Brindisi", abbreviation: "BR", code: 74 },
          { name: "Cagliari", abbreviation: "CA", code: 92 },
          { name: "Caltanissetta", abbreviation: "CL", code: 85 },
          { name: "Campobasso", abbreviation: "CB", code: 70 },
          { name: "Carbonia Iglesias", abbreviation: "CI", code: 70 },
          { name: "Caserta", abbreviation: "CE", code: 61 },
          { name: "Catania", abbreviation: "CT", code: 87 },
          { name: "Catanzaro", abbreviation: "CZ", code: 79 },
          { name: "Chieti", abbreviation: "CH", code: 69 },
          { name: "Como", abbreviation: "CO", code: 13 },
          { name: "Cosenza", abbreviation: "CS", code: 78 },
          { name: "Cremona", abbreviation: "CR", code: 19 },
          { name: "Crotone", abbreviation: "KR", code: 101 },
          { name: "Cuneo", abbreviation: "CN", code: 4 },
          { name: "Enna", abbreviation: "EN", code: 86 },
          { name: "Fermo", abbreviation: "FM", code: 86 },
          { name: "Ferrara", abbreviation: "FE", code: 38 },
          { name: "Firenze", abbreviation: "FI", code: 48 },
          { name: "Foggia", abbreviation: "FG", code: 71 },
          { name: "Forli-Cesena", abbreviation: "FC", code: 71 },
          { name: "Frosinone", abbreviation: "FR", code: 60 },
          { name: "Genova", abbreviation: "GE", code: 10 },
          { name: "Gorizia", abbreviation: "GO", code: 31 },
          { name: "Grosseto", abbreviation: "GR", code: 53 },
          { name: "Imperia", abbreviation: "IM", code: 8 },
          { name: "Isernia", abbreviation: "IS", code: 94 },
          { name: "La-Spezia", abbreviation: "SP", code: 66 },
          { name: "Latina", abbreviation: "LT", code: 59 },
          { name: "Lecce", abbreviation: "LE", code: 75 },
          { name: "Lecco", abbreviation: "LC", code: 97 },
          { name: "Livorno", abbreviation: "LI", code: 49 },
          { name: "Lodi", abbreviation: "LO", code: 98 },
          { name: "Lucca", abbreviation: "LU", code: 46 },
          { name: "Macerata", abbreviation: "MC", code: 43 },
          { name: "Mantova", abbreviation: "MN", code: 20 },
          { name: "Massa-Carrara", abbreviation: "MS", code: 45 },
          { name: "Matera", abbreviation: "MT", code: 77 },
          { name: "Medio Campidano", abbreviation: "VS", code: 77 },
          { name: "Messina", abbreviation: "ME", code: 83 },
          { name: "Milano", abbreviation: "MI", code: 15 },
          { name: "Modena", abbreviation: "MO", code: 36 },
          { name: "Monza-Brianza", abbreviation: "MB", code: 36 },
          { name: "Napoli", abbreviation: "NA", code: 63 },
          { name: "Novara", abbreviation: "NO", code: 3 },
          { name: "Nuoro", abbreviation: "NU", code: 91 },
          { name: "Ogliastra", abbreviation: "OG", code: 91 },
          { name: "Olbia Tempio", abbreviation: "OT", code: 91 },
          { name: "Oristano", abbreviation: "OR", code: 95 },
          { name: "Padova", abbreviation: "PD", code: 28 },
          { name: "Palermo", abbreviation: "PA", code: 82 },
          { name: "Parma", abbreviation: "PR", code: 34 },
          { name: "Pavia", abbreviation: "PV", code: 18 },
          { name: "Perugia", abbreviation: "PG", code: 54 },
          { name: "Pesaro-Urbino", abbreviation: "PU", code: 41 },
          { name: "Pescara", abbreviation: "PE", code: 68 },
          { name: "Piacenza", abbreviation: "PC", code: 33 },
          { name: "Pisa", abbreviation: "PI", code: 50 },
          { name: "Pistoia", abbreviation: "PT", code: 47 },
          { name: "Pordenone", abbreviation: "PN", code: 93 },
          { name: "Potenza", abbreviation: "PZ", code: 76 },
          { name: "Prato", abbreviation: "PO", code: 100 },
          { name: "Ragusa", abbreviation: "RG", code: 88 },
          { name: "Ravenna", abbreviation: "RA", code: 39 },
          { name: "Reggio-Calabria", abbreviation: "RC", code: 35 },
          { name: "Reggio-Emilia", abbreviation: "RE", code: 35 },
          { name: "Rieti", abbreviation: "RI", code: 57 },
          { name: "Rimini", abbreviation: "RN", code: 99 },
          { name: "Roma", abbreviation: "Roma", code: 58 },
          { name: "Rovigo", abbreviation: "RO", code: 29 },
          { name: "Salerno", abbreviation: "SA", code: 65 },
          { name: "Sassari", abbreviation: "SS", code: 90 },
          { name: "Savona", abbreviation: "SV", code: 9 },
          { name: "Siena", abbreviation: "SI", code: 52 },
          { name: "Siracusa", abbreviation: "SR", code: 89 },
          { name: "Sondrio", abbreviation: "SO", code: 14 },
          { name: "Taranto", abbreviation: "TA", code: 73 },
          { name: "Teramo", abbreviation: "TE", code: 67 },
          { name: "Terni", abbreviation: "TR", code: 55 },
          { name: "Torino", abbreviation: "TO", code: 1 },
          { name: "Trapani", abbreviation: "TP", code: 81 },
          { name: "Trento", abbreviation: "TN", code: 22 },
          { name: "Treviso", abbreviation: "TV", code: 26 },
          { name: "Trieste", abbreviation: "TS", code: 32 },
          { name: "Udine", abbreviation: "UD", code: 30 },
          { name: "Varese", abbreviation: "VA", code: 12 },
          { name: "Venezia", abbreviation: "VE", code: 27 },
          { name: "Verbania", abbreviation: "VB", code: 27 },
          { name: "Vercelli", abbreviation: "VC", code: 2 },
          { name: "Verona", abbreviation: "VR", code: 23 },
          { name: "Vibo-Valentia", abbreviation: "VV", code: 102 },
          { name: "Vicenza", abbreviation: "VI", code: 24 },
          { name: "Viterbo", abbreviation: "VT", code: 56 }
        ]
      },
      // from: https://github.com/samsargent/Useful-Autocomplete-Data/blob/master/data/nationalities.json
      nationalities: [
        { name: "Afghan" },
        { name: "Albanian" },
        { name: "Algerian" },
        { name: "American" },
        { name: "Andorran" },
        { name: "Angolan" },
        { name: "Antiguans" },
        { name: "Argentinean" },
        { name: "Armenian" },
        { name: "Australian" },
        { name: "Austrian" },
        { name: "Azerbaijani" },
        { name: "Bahami" },
        { name: "Bahraini" },
        { name: "Bangladeshi" },
        { name: "Barbadian" },
        { name: "Barbudans" },
        { name: "Batswana" },
        { name: "Belarusian" },
        { name: "Belgian" },
        { name: "Belizean" },
        { name: "Beninese" },
        { name: "Bhutanese" },
        { name: "Bolivian" },
        { name: "Bosnian" },
        { name: "Brazilian" },
        { name: "British" },
        { name: "Bruneian" },
        { name: "Bulgarian" },
        { name: "Burkinabe" },
        { name: "Burmese" },
        { name: "Burundian" },
        { name: "Cambodian" },
        { name: "Cameroonian" },
        { name: "Canadian" },
        { name: "Cape Verdean" },
        { name: "Central African" },
        { name: "Chadian" },
        { name: "Chilean" },
        { name: "Chinese" },
        { name: "Colombian" },
        { name: "Comoran" },
        { name: "Congolese" },
        { name: "Costa Rican" },
        { name: "Croatian" },
        { name: "Cuban" },
        { name: "Cypriot" },
        { name: "Czech" },
        { name: "Danish" },
        { name: "Djibouti" },
        { name: "Dominican" },
        { name: "Dutch" },
        { name: "East Timorese" },
        { name: "Ecuadorean" },
        { name: "Egyptian" },
        { name: "Emirian" },
        { name: "Equatorial Guinean" },
        { name: "Eritrean" },
        { name: "Estonian" },
        { name: "Ethiopian" },
        { name: "Fijian" },
        { name: "Filipino" },
        { name: "Finnish" },
        { name: "French" },
        { name: "Gabonese" },
        { name: "Gambian" },
        { name: "Georgian" },
        { name: "German" },
        { name: "Ghanaian" },
        { name: "Greek" },
        { name: "Grenadian" },
        { name: "Guatemalan" },
        { name: "Guinea-Bissauan" },
        { name: "Guinean" },
        { name: "Guyanese" },
        { name: "Haitian" },
        { name: "Herzegovinian" },
        { name: "Honduran" },
        { name: "Hungarian" },
        { name: "I-Kiribati" },
        { name: "Icelander" },
        { name: "Indian" },
        { name: "Indonesian" },
        { name: "Iranian" },
        { name: "Iraqi" },
        { name: "Irish" },
        { name: "Israeli" },
        { name: "Italian" },
        { name: "Ivorian" },
        { name: "Jamaican" },
        { name: "Japanese" },
        { name: "Jordanian" },
        { name: "Kazakhstani" },
        { name: "Kenyan" },
        { name: "Kittian and Nevisian" },
        { name: "Kuwaiti" },
        { name: "Kyrgyz" },
        { name: "Laotian" },
        { name: "Latvian" },
        { name: "Lebanese" },
        { name: "Liberian" },
        { name: "Libyan" },
        { name: "Liechtensteiner" },
        { name: "Lithuanian" },
        { name: "Luxembourger" },
        { name: "Macedonian" },
        { name: "Malagasy" },
        { name: "Malawian" },
        { name: "Malaysian" },
        { name: "Maldivan" },
        { name: "Malian" },
        { name: "Maltese" },
        { name: "Marshallese" },
        { name: "Mauritanian" },
        { name: "Mauritian" },
        { name: "Mexican" },
        { name: "Micronesian" },
        { name: "Moldovan" },
        { name: "Monacan" },
        { name: "Mongolian" },
        { name: "Moroccan" },
        { name: "Mosotho" },
        { name: "Motswana" },
        { name: "Mozambican" },
        { name: "Namibian" },
        { name: "Nauruan" },
        { name: "Nepalese" },
        { name: "New Zealander" },
        { name: "Nicaraguan" },
        { name: "Nigerian" },
        { name: "Nigerien" },
        { name: "North Korean" },
        { name: "Northern Irish" },
        { name: "Norwegian" },
        { name: "Omani" },
        { name: "Pakistani" },
        { name: "Palauan" },
        { name: "Panamanian" },
        { name: "Papua New Guinean" },
        { name: "Paraguayan" },
        { name: "Peruvian" },
        { name: "Polish" },
        { name: "Portuguese" },
        { name: "Qatari" },
        { name: "Romani" },
        { name: "Russian" },
        { name: "Rwandan" },
        { name: "Saint Lucian" },
        { name: "Salvadoran" },
        { name: "Samoan" },
        { name: "San Marinese" },
        { name: "Sao Tomean" },
        { name: "Saudi" },
        { name: "Scottish" },
        { name: "Senegalese" },
        { name: "Serbian" },
        { name: "Seychellois" },
        { name: "Sierra Leonean" },
        { name: "Singaporean" },
        { name: "Slovakian" },
        { name: "Slovenian" },
        { name: "Solomon Islander" },
        { name: "Somali" },
        { name: "South African" },
        { name: "South Korean" },
        { name: "Spanish" },
        { name: "Sri Lankan" },
        { name: "Sudanese" },
        { name: "Surinamer" },
        { name: "Swazi" },
        { name: "Swedish" },
        { name: "Swiss" },
        { name: "Syrian" },
        { name: "Taiwanese" },
        { name: "Tajik" },
        { name: "Tanzanian" },
        { name: "Thai" },
        { name: "Togolese" },
        { name: "Tongan" },
        { name: "Trinidadian or Tobagonian" },
        { name: "Tunisian" },
        { name: "Turkish" },
        { name: "Tuvaluan" },
        { name: "Ugandan" },
        { name: "Ukrainian" },
        { name: "Uruguaya" },
        { name: "Uzbekistani" },
        { name: "Venezuela" },
        { name: "Vietnamese" },
        { name: "Wels" },
        { name: "Yemenit" },
        { name: "Zambia" },
        { name: "Zimbabwe" }
      ],
      // http://www.loc.gov/standards/iso639-2/php/code_list.php (ISO-639-1 codes)
      locale_languages: [
        "aa",
        "ab",
        "ae",
        "af",
        "ak",
        "am",
        "an",
        "ar",
        "as",
        "av",
        "ay",
        "az",
        "ba",
        "be",
        "bg",
        "bh",
        "bi",
        "bm",
        "bn",
        "bo",
        "br",
        "bs",
        "ca",
        "ce",
        "ch",
        "co",
        "cr",
        "cs",
        "cu",
        "cv",
        "cy",
        "da",
        "de",
        "dv",
        "dz",
        "ee",
        "el",
        "en",
        "eo",
        "es",
        "et",
        "eu",
        "fa",
        "ff",
        "fi",
        "fj",
        "fo",
        "fr",
        "fy",
        "ga",
        "gd",
        "gl",
        "gn",
        "gu",
        "gv",
        "ha",
        "he",
        "hi",
        "ho",
        "hr",
        "ht",
        "hu",
        "hy",
        "hz",
        "ia",
        "id",
        "ie",
        "ig",
        "ii",
        "ik",
        "io",
        "is",
        "it",
        "iu",
        "ja",
        "jv",
        "ka",
        "kg",
        "ki",
        "kj",
        "kk",
        "kl",
        "km",
        "kn",
        "ko",
        "kr",
        "ks",
        "ku",
        "kv",
        "kw",
        "ky",
        "la",
        "lb",
        "lg",
        "li",
        "ln",
        "lo",
        "lt",
        "lu",
        "lv",
        "mg",
        "mh",
        "mi",
        "mk",
        "ml",
        "mn",
        "mr",
        "ms",
        "mt",
        "my",
        "na",
        "nb",
        "nd",
        "ne",
        "ng",
        "nl",
        "nn",
        "no",
        "nr",
        "nv",
        "ny",
        "oc",
        "oj",
        "om",
        "or",
        "os",
        "pa",
        "pi",
        "pl",
        "ps",
        "pt",
        "qu",
        "rm",
        "rn",
        "ro",
        "ru",
        "rw",
        "sa",
        "sc",
        "sd",
        "se",
        "sg",
        "si",
        "sk",
        "sl",
        "sm",
        "sn",
        "so",
        "sq",
        "sr",
        "ss",
        "st",
        "su",
        "sv",
        "sw",
        "ta",
        "te",
        "tg",
        "th",
        "ti",
        "tk",
        "tl",
        "tn",
        "to",
        "tr",
        "ts",
        "tt",
        "tw",
        "ty",
        "ug",
        "uk",
        "ur",
        "uz",
        "ve",
        "vi",
        "vo",
        "wa",
        "wo",
        "xh",
        "yi",
        "yo",
        "za",
        "zh",
        "zu"
      ],
      // From http://data.okfn.org/data/core/language-codes#resource-language-codes-full (IETF language tags)
      locale_regions: [
        "agq-CM",
        "asa-TZ",
        "ast-ES",
        "bas-CM",
        "bem-ZM",
        "bez-TZ",
        "brx-IN",
        "cgg-UG",
        "chr-US",
        "dav-KE",
        "dje-NE",
        "dsb-DE",
        "dua-CM",
        "dyo-SN",
        "ebu-KE",
        "ewo-CM",
        "fil-PH",
        "fur-IT",
        "gsw-CH",
        "gsw-FR",
        "gsw-LI",
        "guz-KE",
        "haw-US",
        "hsb-DE",
        "jgo-CM",
        "jmc-TZ",
        "kab-DZ",
        "kam-KE",
        "kde-TZ",
        "kea-CV",
        "khq-ML",
        "kkj-CM",
        "kln-KE",
        "kok-IN",
        "ksb-TZ",
        "ksf-CM",
        "ksh-DE",
        "lag-TZ",
        "lkt-US",
        "luo-KE",
        "luy-KE",
        "mas-KE",
        "mas-TZ",
        "mer-KE",
        "mfe-MU",
        "mgh-MZ",
        "mgo-CM",
        "mua-CM",
        "naq-NA",
        "nmg-CM",
        "nnh-CM",
        "nus-SD",
        "nyn-UG",
        "rof-TZ",
        "rwk-TZ",
        "sah-RU",
        "saq-KE",
        "sbp-TZ",
        "seh-MZ",
        "ses-ML",
        "shi-Latn",
        "shi-Latn-MA",
        "shi-Tfng",
        "shi-Tfng-MA",
        "smn-FI",
        "teo-KE",
        "teo-UG",
        "twq-NE",
        "tzm-Latn",
        "tzm-Latn-MA",
        "vai-Latn",
        "vai-Latn-LR",
        "vai-Vaii",
        "vai-Vaii-LR",
        "vun-TZ",
        "wae-CH",
        "xog-UG",
        "yav-CM",
        "zgh-MA",
        "af-NA",
        "af-ZA",
        "ak-GH",
        "am-ET",
        "ar-001",
        "ar-AE",
        "ar-BH",
        "ar-DJ",
        "ar-DZ",
        "ar-EG",
        "ar-EH",
        "ar-ER",
        "ar-IL",
        "ar-IQ",
        "ar-JO",
        "ar-KM",
        "ar-KW",
        "ar-LB",
        "ar-LY",
        "ar-MA",
        "ar-MR",
        "ar-OM",
        "ar-PS",
        "ar-QA",
        "ar-SA",
        "ar-SD",
        "ar-SO",
        "ar-SS",
        "ar-SY",
        "ar-TD",
        "ar-TN",
        "ar-YE",
        "as-IN",
        "az-Cyrl",
        "az-Cyrl-AZ",
        "az-Latn",
        "az-Latn-AZ",
        "be-BY",
        "bg-BG",
        "bm-Latn",
        "bm-Latn-ML",
        "bn-BD",
        "bn-IN",
        "bo-CN",
        "bo-IN",
        "br-FR",
        "bs-Cyrl",
        "bs-Cyrl-BA",
        "bs-Latn",
        "bs-Latn-BA",
        "ca-AD",
        "ca-ES",
        "ca-ES-VALENCIA",
        "ca-FR",
        "ca-IT",
        "cs-CZ",
        "cy-GB",
        "da-DK",
        "da-GL",
        "de-AT",
        "de-BE",
        "de-CH",
        "de-DE",
        "de-LI",
        "de-LU",
        "dz-BT",
        "ee-GH",
        "ee-TG",
        "el-CY",
        "el-GR",
        "en-001",
        "en-150",
        "en-AG",
        "en-AI",
        "en-AS",
        "en-AU",
        "en-BB",
        "en-BE",
        "en-BM",
        "en-BS",
        "en-BW",
        "en-BZ",
        "en-CA",
        "en-CC",
        "en-CK",
        "en-CM",
        "en-CX",
        "en-DG",
        "en-DM",
        "en-ER",
        "en-FJ",
        "en-FK",
        "en-FM",
        "en-GB",
        "en-GD",
        "en-GG",
        "en-GH",
        "en-GI",
        "en-GM",
        "en-GU",
        "en-GY",
        "en-HK",
        "en-IE",
        "en-IM",
        "en-IN",
        "en-IO",
        "en-JE",
        "en-JM",
        "en-KE",
        "en-KI",
        "en-KN",
        "en-KY",
        "en-LC",
        "en-LR",
        "en-LS",
        "en-MG",
        "en-MH",
        "en-MO",
        "en-MP",
        "en-MS",
        "en-MT",
        "en-MU",
        "en-MW",
        "en-MY",
        "en-NA",
        "en-NF",
        "en-NG",
        "en-NR",
        "en-NU",
        "en-NZ",
        "en-PG",
        "en-PH",
        "en-PK",
        "en-PN",
        "en-PR",
        "en-PW",
        "en-RW",
        "en-SB",
        "en-SC",
        "en-SD",
        "en-SG",
        "en-SH",
        "en-SL",
        "en-SS",
        "en-SX",
        "en-SZ",
        "en-TC",
        "en-TK",
        "en-TO",
        "en-TT",
        "en-TV",
        "en-TZ",
        "en-UG",
        "en-UM",
        "en-US",
        "en-US-POSIX",
        "en-VC",
        "en-VG",
        "en-VI",
        "en-VU",
        "en-WS",
        "en-ZA",
        "en-ZM",
        "en-ZW",
        "eo-001",
        "es-419",
        "es-AR",
        "es-BO",
        "es-CL",
        "es-CO",
        "es-CR",
        "es-CU",
        "es-DO",
        "es-EA",
        "es-EC",
        "es-ES",
        "es-GQ",
        "es-GT",
        "es-HN",
        "es-IC",
        "es-MX",
        "es-NI",
        "es-PA",
        "es-PE",
        "es-PH",
        "es-PR",
        "es-PY",
        "es-SV",
        "es-US",
        "es-UY",
        "es-VE",
        "et-EE",
        "eu-ES",
        "fa-AF",
        "fa-IR",
        "ff-CM",
        "ff-GN",
        "ff-MR",
        "ff-SN",
        "fi-FI",
        "fo-FO",
        "fr-BE",
        "fr-BF",
        "fr-BI",
        "fr-BJ",
        "fr-BL",
        "fr-CA",
        "fr-CD",
        "fr-CF",
        "fr-CG",
        "fr-CH",
        "fr-CI",
        "fr-CM",
        "fr-DJ",
        "fr-DZ",
        "fr-FR",
        "fr-GA",
        "fr-GF",
        "fr-GN",
        "fr-GP",
        "fr-GQ",
        "fr-HT",
        "fr-KM",
        "fr-LU",
        "fr-MA",
        "fr-MC",
        "fr-MF",
        "fr-MG",
        "fr-ML",
        "fr-MQ",
        "fr-MR",
        "fr-MU",
        "fr-NC",
        "fr-NE",
        "fr-PF",
        "fr-PM",
        "fr-RE",
        "fr-RW",
        "fr-SC",
        "fr-SN",
        "fr-SY",
        "fr-TD",
        "fr-TG",
        "fr-TN",
        "fr-VU",
        "fr-WF",
        "fr-YT",
        "fy-NL",
        "ga-IE",
        "gd-GB",
        "gl-ES",
        "gu-IN",
        "gv-IM",
        "ha-Latn",
        "ha-Latn-GH",
        "ha-Latn-NE",
        "ha-Latn-NG",
        "he-IL",
        "hi-IN",
        "hr-BA",
        "hr-HR",
        "hu-HU",
        "hy-AM",
        "id-ID",
        "ig-NG",
        "ii-CN",
        "is-IS",
        "it-CH",
        "it-IT",
        "it-SM",
        "ja-JP",
        "ka-GE",
        "ki-KE",
        "kk-Cyrl",
        "kk-Cyrl-KZ",
        "kl-GL",
        "km-KH",
        "kn-IN",
        "ko-KP",
        "ko-KR",
        "ks-Arab",
        "ks-Arab-IN",
        "kw-GB",
        "ky-Cyrl",
        "ky-Cyrl-KG",
        "lb-LU",
        "lg-UG",
        "ln-AO",
        "ln-CD",
        "ln-CF",
        "ln-CG",
        "lo-LA",
        "lt-LT",
        "lu-CD",
        "lv-LV",
        "mg-MG",
        "mk-MK",
        "ml-IN",
        "mn-Cyrl",
        "mn-Cyrl-MN",
        "mr-IN",
        "ms-Latn",
        "ms-Latn-BN",
        "ms-Latn-MY",
        "ms-Latn-SG",
        "mt-MT",
        "my-MM",
        "nb-NO",
        "nb-SJ",
        "nd-ZW",
        "ne-IN",
        "ne-NP",
        "nl-AW",
        "nl-BE",
        "nl-BQ",
        "nl-CW",
        "nl-NL",
        "nl-SR",
        "nl-SX",
        "nn-NO",
        "om-ET",
        "om-KE",
        "or-IN",
        "os-GE",
        "os-RU",
        "pa-Arab",
        "pa-Arab-PK",
        "pa-Guru",
        "pa-Guru-IN",
        "pl-PL",
        "ps-AF",
        "pt-AO",
        "pt-BR",
        "pt-CV",
        "pt-GW",
        "pt-MO",
        "pt-MZ",
        "pt-PT",
        "pt-ST",
        "pt-TL",
        "qu-BO",
        "qu-EC",
        "qu-PE",
        "rm-CH",
        "rn-BI",
        "ro-MD",
        "ro-RO",
        "ru-BY",
        "ru-KG",
        "ru-KZ",
        "ru-MD",
        "ru-RU",
        "ru-UA",
        "rw-RW",
        "se-FI",
        "se-NO",
        "se-SE",
        "sg-CF",
        "si-LK",
        "sk-SK",
        "sl-SI",
        "sn-ZW",
        "so-DJ",
        "so-ET",
        "so-KE",
        "so-SO",
        "sq-AL",
        "sq-MK",
        "sq-XK",
        "sr-Cyrl",
        "sr-Cyrl-BA",
        "sr-Cyrl-ME",
        "sr-Cyrl-RS",
        "sr-Cyrl-XK",
        "sr-Latn",
        "sr-Latn-BA",
        "sr-Latn-ME",
        "sr-Latn-RS",
        "sr-Latn-XK",
        "sv-AX",
        "sv-FI",
        "sv-SE",
        "sw-CD",
        "sw-KE",
        "sw-TZ",
        "sw-UG",
        "ta-IN",
        "ta-LK",
        "ta-MY",
        "ta-SG",
        "te-IN",
        "th-TH",
        "ti-ER",
        "ti-ET",
        "to-TO",
        "tr-CY",
        "tr-TR",
        "ug-Arab",
        "ug-Arab-CN",
        "uk-UA",
        "ur-IN",
        "ur-PK",
        "uz-Arab",
        "uz-Arab-AF",
        "uz-Cyrl",
        "uz-Cyrl-UZ",
        "uz-Latn",
        "uz-Latn-UZ",
        "vi-VN",
        "yi-001",
        "yo-BJ",
        "yo-NG",
        "zh-Hans",
        "zh-Hans-CN",
        "zh-Hans-HK",
        "zh-Hans-MO",
        "zh-Hans-SG",
        "zh-Hant",
        "zh-Hant-HK",
        "zh-Hant-MO",
        "zh-Hant-TW",
        "zu-ZA"
      ],
      us_states_and_dc: [
        { name: "Alabama", abbreviation: "AL" },
        { name: "Alaska", abbreviation: "AK" },
        { name: "Arizona", abbreviation: "AZ" },
        { name: "Arkansas", abbreviation: "AR" },
        { name: "California", abbreviation: "CA" },
        { name: "Colorado", abbreviation: "CO" },
        { name: "Connecticut", abbreviation: "CT" },
        { name: "Delaware", abbreviation: "DE" },
        { name: "District of Columbia", abbreviation: "DC" },
        { name: "Florida", abbreviation: "FL" },
        { name: "Georgia", abbreviation: "GA" },
        { name: "Hawaii", abbreviation: "HI" },
        { name: "Idaho", abbreviation: "ID" },
        { name: "Illinois", abbreviation: "IL" },
        { name: "Indiana", abbreviation: "IN" },
        { name: "Iowa", abbreviation: "IA" },
        { name: "Kansas", abbreviation: "KS" },
        { name: "Kentucky", abbreviation: "KY" },
        { name: "Louisiana", abbreviation: "LA" },
        { name: "Maine", abbreviation: "ME" },
        { name: "Maryland", abbreviation: "MD" },
        { name: "Massachusetts", abbreviation: "MA" },
        { name: "Michigan", abbreviation: "MI" },
        { name: "Minnesota", abbreviation: "MN" },
        { name: "Mississippi", abbreviation: "MS" },
        { name: "Missouri", abbreviation: "MO" },
        { name: "Montana", abbreviation: "MT" },
        { name: "Nebraska", abbreviation: "NE" },
        { name: "Nevada", abbreviation: "NV" },
        { name: "New Hampshire", abbreviation: "NH" },
        { name: "New Jersey", abbreviation: "NJ" },
        { name: "New Mexico", abbreviation: "NM" },
        { name: "New York", abbreviation: "NY" },
        { name: "North Carolina", abbreviation: "NC" },
        { name: "North Dakota", abbreviation: "ND" },
        { name: "Ohio", abbreviation: "OH" },
        { name: "Oklahoma", abbreviation: "OK" },
        { name: "Oregon", abbreviation: "OR" },
        { name: "Pennsylvania", abbreviation: "PA" },
        { name: "Rhode Island", abbreviation: "RI" },
        { name: "South Carolina", abbreviation: "SC" },
        { name: "South Dakota", abbreviation: "SD" },
        { name: "Tennessee", abbreviation: "TN" },
        { name: "Texas", abbreviation: "TX" },
        { name: "Utah", abbreviation: "UT" },
        { name: "Vermont", abbreviation: "VT" },
        { name: "Virginia", abbreviation: "VA" },
        { name: "Washington", abbreviation: "WA" },
        { name: "West Virginia", abbreviation: "WV" },
        { name: "Wisconsin", abbreviation: "WI" },
        { name: "Wyoming", abbreviation: "WY" }
      ],
      territories: [
        { name: "American Samoa", abbreviation: "AS" },
        { name: "Federated States of Micronesia", abbreviation: "FM" },
        { name: "Guam", abbreviation: "GU" },
        { name: "Marshall Islands", abbreviation: "MH" },
        { name: "Northern Mariana Islands", abbreviation: "MP" },
        { name: "Puerto Rico", abbreviation: "PR" },
        { name: "Virgin Islands, U.S.", abbreviation: "VI" }
      ],
      armed_forces: [
        { name: "Armed Forces Europe", abbreviation: "AE" },
        { name: "Armed Forces Pacific", abbreviation: "AP" },
        { name: "Armed Forces the Americas", abbreviation: "AA" }
      ],
      country_regions: {
        it: [
          { name: "Valle d'Aosta", abbreviation: "VDA" },
          { name: "Piemonte", abbreviation: "PIE" },
          { name: "Lombardia", abbreviation: "LOM" },
          { name: "Veneto", abbreviation: "VEN" },
          { name: "Trentino Alto Adige", abbreviation: "TAA" },
          { name: "Friuli Venezia Giulia", abbreviation: "FVG" },
          { name: "Liguria", abbreviation: "LIG" },
          { name: "Emilia Romagna", abbreviation: "EMR" },
          { name: "Toscana", abbreviation: "TOS" },
          { name: "Umbria", abbreviation: "UMB" },
          { name: "Marche", abbreviation: "MAR" },
          { name: "Abruzzo", abbreviation: "ABR" },
          { name: "Lazio", abbreviation: "LAZ" },
          { name: "Campania", abbreviation: "CAM" },
          { name: "Puglia", abbreviation: "PUG" },
          { name: "Basilicata", abbreviation: "BAS" },
          { name: "Molise", abbreviation: "MOL" },
          { name: "Calabria", abbreviation: "CAL" },
          { name: "Sicilia", abbreviation: "SIC" },
          { name: "Sardegna", abbreviation: "SAR" }
        ],
        mx: [
          { name: "Aguascalientes", abbreviation: "AGU" },
          { name: "Baja California", abbreviation: "BCN" },
          { name: "Baja California Sur", abbreviation: "BCS" },
          { name: "Campeche", abbreviation: "CAM" },
          { name: "Chiapas", abbreviation: "CHP" },
          { name: "Chihuahua", abbreviation: "CHH" },
          { name: "Ciudad de M\xE9xico", abbreviation: "DIF" },
          { name: "Coahuila", abbreviation: "COA" },
          { name: "Colima", abbreviation: "COL" },
          { name: "Durango", abbreviation: "DUR" },
          { name: "Guanajuato", abbreviation: "GUA" },
          { name: "Guerrero", abbreviation: "GRO" },
          { name: "Hidalgo", abbreviation: "HID" },
          { name: "Jalisco", abbreviation: "JAL" },
          { name: "M\xE9xico", abbreviation: "MEX" },
          { name: "Michoac\xE1n", abbreviation: "MIC" },
          { name: "Morelos", abbreviation: "MOR" },
          { name: "Nayarit", abbreviation: "NAY" },
          { name: "Nuevo Le\xF3n", abbreviation: "NLE" },
          { name: "Oaxaca", abbreviation: "OAX" },
          { name: "Puebla", abbreviation: "PUE" },
          { name: "Quer\xE9taro", abbreviation: "QUE" },
          { name: "Quintana Roo", abbreviation: "ROO" },
          { name: "San Luis Potos\xED", abbreviation: "SLP" },
          { name: "Sinaloa", abbreviation: "SIN" },
          { name: "Sonora", abbreviation: "SON" },
          { name: "Tabasco", abbreviation: "TAB" },
          { name: "Tamaulipas", abbreviation: "TAM" },
          { name: "Tlaxcala", abbreviation: "TLA" },
          { name: "Veracruz", abbreviation: "VER" },
          { name: "Yucat\xE1n", abbreviation: "YUC" },
          { name: "Zacatecas", abbreviation: "ZAC" }
        ]
      },
      street_suffixes: {
        us: [
          { name: "Avenue", abbreviation: "Ave" },
          { name: "Boulevard", abbreviation: "Blvd" },
          { name: "Center", abbreviation: "Ctr" },
          { name: "Circle", abbreviation: "Cir" },
          { name: "Court", abbreviation: "Ct" },
          { name: "Drive", abbreviation: "Dr" },
          { name: "Extension", abbreviation: "Ext" },
          { name: "Glen", abbreviation: "Gln" },
          { name: "Grove", abbreviation: "Grv" },
          { name: "Heights", abbreviation: "Hts" },
          { name: "Highway", abbreviation: "Hwy" },
          { name: "Junction", abbreviation: "Jct" },
          { name: "Key", abbreviation: "Key" },
          { name: "Lane", abbreviation: "Ln" },
          { name: "Loop", abbreviation: "Loop" },
          { name: "Manor", abbreviation: "Mnr" },
          { name: "Mill", abbreviation: "Mill" },
          { name: "Park", abbreviation: "Park" },
          { name: "Parkway", abbreviation: "Pkwy" },
          { name: "Pass", abbreviation: "Pass" },
          { name: "Path", abbreviation: "Path" },
          { name: "Pike", abbreviation: "Pike" },
          { name: "Place", abbreviation: "Pl" },
          { name: "Plaza", abbreviation: "Plz" },
          { name: "Point", abbreviation: "Pt" },
          { name: "Ridge", abbreviation: "Rdg" },
          { name: "River", abbreviation: "Riv" },
          { name: "Road", abbreviation: "Rd" },
          { name: "Square", abbreviation: "Sq" },
          { name: "Street", abbreviation: "St" },
          { name: "Terrace", abbreviation: "Ter" },
          { name: "Trail", abbreviation: "Trl" },
          { name: "Turnpike", abbreviation: "Tpke" },
          { name: "View", abbreviation: "Vw" },
          { name: "Way", abbreviation: "Way" }
        ],
        it: [
          { name: "Accesso", abbreviation: "Acc." },
          { name: "Alzaia", abbreviation: "Alz." },
          { name: "Arco", abbreviation: "Arco" },
          { name: "Archivolto", abbreviation: "Acv." },
          { name: "Arena", abbreviation: "Arena" },
          { name: "Argine", abbreviation: "Argine" },
          { name: "Bacino", abbreviation: "Bacino" },
          { name: "Banchi", abbreviation: "Banchi" },
          { name: "Banchina", abbreviation: "Ban." },
          { name: "Bastioni", abbreviation: "Bas." },
          { name: "Belvedere", abbreviation: "Belv." },
          { name: "Borgata", abbreviation: "B.ta" },
          { name: "Borgo", abbreviation: "B.go" },
          { name: "Calata", abbreviation: "Cal." },
          { name: "Calle", abbreviation: "Calle" },
          { name: "Campiello", abbreviation: "Cam." },
          { name: "Campo", abbreviation: "Cam." },
          { name: "Canale", abbreviation: "Can." },
          { name: "Carraia", abbreviation: "Carr." },
          { name: "Cascina", abbreviation: "Cascina" },
          { name: "Case sparse", abbreviation: "c.s." },
          { name: "Cavalcavia", abbreviation: "Cv." },
          { name: "Circonvallazione", abbreviation: "Cv." },
          { name: "Complanare", abbreviation: "C.re" },
          { name: "Contrada", abbreviation: "C.da" },
          { name: "Corso", abbreviation: "C.so" },
          { name: "Corte", abbreviation: "C.te" },
          { name: "Cortile", abbreviation: "C.le" },
          { name: "Diramazione", abbreviation: "Dir." },
          { name: "Fondaco", abbreviation: "F.co" },
          { name: "Fondamenta", abbreviation: "F.ta" },
          { name: "Fondo", abbreviation: "F.do" },
          { name: "Frazione", abbreviation: "Fr." },
          { name: "Isola", abbreviation: "Is." },
          { name: "Largo", abbreviation: "L.go" },
          { name: "Litoranea", abbreviation: "Lit." },
          { name: "Lungolago", abbreviation: "L.go lago" },
          { name: "Lungo Po", abbreviation: "l.go Po" },
          { name: "Molo", abbreviation: "Molo" },
          { name: "Mura", abbreviation: "Mura" },
          { name: "Passaggio privato", abbreviation: "pass. priv." },
          { name: "Passeggiata", abbreviation: "Pass." },
          { name: "Piazza", abbreviation: "P.zza" },
          { name: "Piazzale", abbreviation: "P.le" },
          { name: "Ponte", abbreviation: "P.te" },
          { name: "Portico", abbreviation: "P.co" },
          { name: "Rampa", abbreviation: "Rampa" },
          { name: "Regione", abbreviation: "Reg." },
          { name: "Rione", abbreviation: "R.ne" },
          { name: "Rio", abbreviation: "Rio" },
          { name: "Ripa", abbreviation: "Ripa" },
          { name: "Riva", abbreviation: "Riva" },
          { name: "Rond\xF2", abbreviation: "Rond\xF2" },
          { name: "Rotonda", abbreviation: "Rot." },
          { name: "Sagrato", abbreviation: "Sagr." },
          { name: "Salita", abbreviation: "Sal." },
          { name: "Scalinata", abbreviation: "Scal." },
          { name: "Scalone", abbreviation: "Scal." },
          { name: "Slargo", abbreviation: "Sl." },
          { name: "Sottoportico", abbreviation: "Sott." },
          { name: "Strada", abbreviation: "Str." },
          { name: "Stradale", abbreviation: "Str.le" },
          { name: "Strettoia", abbreviation: "Strett." },
          { name: "Traversa", abbreviation: "Trav." },
          { name: "Via", abbreviation: "V." },
          { name: "Viale", abbreviation: "V.le" },
          { name: "Vicinale", abbreviation: "Vic.le" },
          { name: "Vicolo", abbreviation: "Vic." }
        ],
        uk: [
          { name: "Avenue", abbreviation: "Ave" },
          { name: "Close", abbreviation: "Cl" },
          { name: "Court", abbreviation: "Ct" },
          { name: "Crescent", abbreviation: "Cr" },
          { name: "Drive", abbreviation: "Dr" },
          { name: "Garden", abbreviation: "Gdn" },
          { name: "Gardens", abbreviation: "Gdns" },
          { name: "Green", abbreviation: "Gn" },
          { name: "Grove", abbreviation: "Gr" },
          { name: "Lane", abbreviation: "Ln" },
          { name: "Mount", abbreviation: "Mt" },
          { name: "Place", abbreviation: "Pl" },
          { name: "Park", abbreviation: "Pk" },
          { name: "Ridge", abbreviation: "Rdg" },
          { name: "Road", abbreviation: "Rd" },
          { name: "Square", abbreviation: "Sq" },
          { name: "Street", abbreviation: "St" },
          { name: "Terrace", abbreviation: "Ter" },
          { name: "Valley", abbreviation: "Val" }
        ]
      },
      months: [
        { name: "January", short_name: "Jan", numeric: "01", days: 31 },
        // Not messing with leap years...
        { name: "February", short_name: "Feb", numeric: "02", days: 28 },
        { name: "March", short_name: "Mar", numeric: "03", days: 31 },
        { name: "April", short_name: "Apr", numeric: "04", days: 30 },
        { name: "May", short_name: "May", numeric: "05", days: 31 },
        { name: "June", short_name: "Jun", numeric: "06", days: 30 },
        { name: "July", short_name: "Jul", numeric: "07", days: 31 },
        { name: "August", short_name: "Aug", numeric: "08", days: 31 },
        { name: "September", short_name: "Sep", numeric: "09", days: 30 },
        { name: "October", short_name: "Oct", numeric: "10", days: 31 },
        { name: "November", short_name: "Nov", numeric: "11", days: 30 },
        { name: "December", short_name: "Dec", numeric: "12", days: 31 }
      ],
      // http://en.wikipedia.org/wiki/Bank_card_number#Issuer_identification_number_.28IIN.29
      cc_types: [
        { name: "American Express", short_name: "amex", prefix: "34", length: 15 },
        { name: "Bankcard", short_name: "bankcard", prefix: "5610", length: 16 },
        { name: "China UnionPay", short_name: "chinaunion", prefix: "62", length: 16 },
        { name: "Diners Club Carte Blanche", short_name: "dccarte", prefix: "300", length: 14 },
        { name: "Diners Club enRoute", short_name: "dcenroute", prefix: "2014", length: 15 },
        { name: "Diners Club International", short_name: "dcintl", prefix: "36", length: 14 },
        { name: "Diners Club United States & Canada", short_name: "dcusc", prefix: "54", length: 16 },
        { name: "Discover Card", short_name: "discover", prefix: "6011", length: 16 },
        { name: "InstaPayment", short_name: "instapay", prefix: "637", length: 16 },
        { name: "JCB", short_name: "jcb", prefix: "3528", length: 16 },
        { name: "Laser", short_name: "laser", prefix: "6304", length: 16 },
        { name: "Maestro", short_name: "maestro", prefix: "5018", length: 16 },
        { name: "Mastercard", short_name: "mc", prefix: "51", length: 16 },
        { name: "Solo", short_name: "solo", prefix: "6334", length: 16 },
        { name: "Switch", short_name: "switch", prefix: "4903", length: 16 },
        { name: "Visa", short_name: "visa", prefix: "4", length: 16 },
        { name: "Visa Electron", short_name: "electron", prefix: "4026", length: 16 }
      ],
      //return all world currency by ISO 4217
      currency_types: [
        { code: "AED", name: "United Arab Emirates Dirham" },
        { code: "AFN", name: "Afghanistan Afghani" },
        { code: "ALL", name: "Albania Lek" },
        { code: "AMD", name: "Armenia Dram" },
        { code: "ANG", name: "Netherlands Antilles Guilder" },
        { code: "AOA", name: "Angola Kwanza" },
        { code: "ARS", name: "Argentina Peso" },
        { code: "AUD", name: "Australia Dollar" },
        { code: "AWG", name: "Aruba Guilder" },
        { code: "AZN", name: "Azerbaijan New Manat" },
        { code: "BAM", name: "Bosnia and Herzegovina Convertible Marka" },
        { code: "BBD", name: "Barbados Dollar" },
        { code: "BDT", name: "Bangladesh Taka" },
        { code: "BGN", name: "Bulgaria Lev" },
        { code: "BHD", name: "Bahrain Dinar" },
        { code: "BIF", name: "Burundi Franc" },
        { code: "BMD", name: "Bermuda Dollar" },
        { code: "BND", name: "Brunei Darussalam Dollar" },
        { code: "BOB", name: "Bolivia Boliviano" },
        { code: "BRL", name: "Brazil Real" },
        { code: "BSD", name: "Bahamas Dollar" },
        { code: "BTN", name: "Bhutan Ngultrum" },
        { code: "BWP", name: "Botswana Pula" },
        { code: "BYR", name: "Belarus Ruble" },
        { code: "BZD", name: "Belize Dollar" },
        { code: "CAD", name: "Canada Dollar" },
        { code: "CDF", name: "Congo/Kinshasa Franc" },
        { code: "CHF", name: "Switzerland Franc" },
        { code: "CLP", name: "Chile Peso" },
        { code: "CNY", name: "China Yuan Renminbi" },
        { code: "COP", name: "Colombia Peso" },
        { code: "CRC", name: "Costa Rica Colon" },
        { code: "CUC", name: "Cuba Convertible Peso" },
        { code: "CUP", name: "Cuba Peso" },
        { code: "CVE", name: "Cape Verde Escudo" },
        { code: "CZK", name: "Czech Republic Koruna" },
        { code: "DJF", name: "Djibouti Franc" },
        { code: "DKK", name: "Denmark Krone" },
        { code: "DOP", name: "Dominican Republic Peso" },
        { code: "DZD", name: "Algeria Dinar" },
        { code: "EGP", name: "Egypt Pound" },
        { code: "ERN", name: "Eritrea Nakfa" },
        { code: "ETB", name: "Ethiopia Birr" },
        { code: "EUR", name: "Euro Member Countries" },
        { code: "FJD", name: "Fiji Dollar" },
        { code: "FKP", name: "Falkland Islands (Malvinas) Pound" },
        { code: "GBP", name: "United Kingdom Pound" },
        { code: "GEL", name: "Georgia Lari" },
        { code: "GGP", name: "Guernsey Pound" },
        { code: "GHS", name: "Ghana Cedi" },
        { code: "GIP", name: "Gibraltar Pound" },
        { code: "GMD", name: "Gambia Dalasi" },
        { code: "GNF", name: "Guinea Franc" },
        { code: "GTQ", name: "Guatemala Quetzal" },
        { code: "GYD", name: "Guyana Dollar" },
        { code: "HKD", name: "Hong Kong Dollar" },
        { code: "HNL", name: "Honduras Lempira" },
        { code: "HRK", name: "Croatia Kuna" },
        { code: "HTG", name: "Haiti Gourde" },
        { code: "HUF", name: "Hungary Forint" },
        { code: "IDR", name: "Indonesia Rupiah" },
        { code: "ILS", name: "Israel Shekel" },
        { code: "IMP", name: "Isle of Man Pound" },
        { code: "INR", name: "India Rupee" },
        { code: "IQD", name: "Iraq Dinar" },
        { code: "IRR", name: "Iran Rial" },
        { code: "ISK", name: "Iceland Krona" },
        { code: "JEP", name: "Jersey Pound" },
        { code: "JMD", name: "Jamaica Dollar" },
        { code: "JOD", name: "Jordan Dinar" },
        { code: "JPY", name: "Japan Yen" },
        { code: "KES", name: "Kenya Shilling" },
        { code: "KGS", name: "Kyrgyzstan Som" },
        { code: "KHR", name: "Cambodia Riel" },
        { code: "KMF", name: "Comoros Franc" },
        { code: "KPW", name: "Korea (North) Won" },
        { code: "KRW", name: "Korea (South) Won" },
        { code: "KWD", name: "Kuwait Dinar" },
        { code: "KYD", name: "Cayman Islands Dollar" },
        { code: "KZT", name: "Kazakhstan Tenge" },
        { code: "LAK", name: "Laos Kip" },
        { code: "LBP", name: "Lebanon Pound" },
        { code: "LKR", name: "Sri Lanka Rupee" },
        { code: "LRD", name: "Liberia Dollar" },
        { code: "LSL", name: "Lesotho Loti" },
        { code: "LTL", name: "Lithuania Litas" },
        { code: "LYD", name: "Libya Dinar" },
        { code: "MAD", name: "Morocco Dirham" },
        { code: "MDL", name: "Moldova Leu" },
        { code: "MGA", name: "Madagascar Ariary" },
        { code: "MKD", name: "Macedonia Denar" },
        { code: "MMK", name: "Myanmar (Burma) Kyat" },
        { code: "MNT", name: "Mongolia Tughrik" },
        { code: "MOP", name: "Macau Pataca" },
        { code: "MRO", name: "Mauritania Ouguiya" },
        { code: "MUR", name: "Mauritius Rupee" },
        { code: "MVR", name: "Maldives (Maldive Islands) Rufiyaa" },
        { code: "MWK", name: "Malawi Kwacha" },
        { code: "MXN", name: "Mexico Peso" },
        { code: "MYR", name: "Malaysia Ringgit" },
        { code: "MZN", name: "Mozambique Metical" },
        { code: "NAD", name: "Namibia Dollar" },
        { code: "NGN", name: "Nigeria Naira" },
        { code: "NIO", name: "Nicaragua Cordoba" },
        { code: "NOK", name: "Norway Krone" },
        { code: "NPR", name: "Nepal Rupee" },
        { code: "NZD", name: "New Zealand Dollar" },
        { code: "OMR", name: "Oman Rial" },
        { code: "PAB", name: "Panama Balboa" },
        { code: "PEN", name: "Peru Nuevo Sol" },
        { code: "PGK", name: "Papua New Guinea Kina" },
        { code: "PHP", name: "Philippines Peso" },
        { code: "PKR", name: "Pakistan Rupee" },
        { code: "PLN", name: "Poland Zloty" },
        { code: "PYG", name: "Paraguay Guarani" },
        { code: "QAR", name: "Qatar Riyal" },
        { code: "RON", name: "Romania New Leu" },
        { code: "RSD", name: "Serbia Dinar" },
        { code: "RUB", name: "Russia Ruble" },
        { code: "RWF", name: "Rwanda Franc" },
        { code: "SAR", name: "Saudi Arabia Riyal" },
        { code: "SBD", name: "Solomon Islands Dollar" },
        { code: "SCR", name: "Seychelles Rupee" },
        { code: "SDG", name: "Sudan Pound" },
        { code: "SEK", name: "Sweden Krona" },
        { code: "SGD", name: "Singapore Dollar" },
        { code: "SHP", name: "Saint Helena Pound" },
        { code: "SLL", name: "Sierra Leone Leone" },
        { code: "SOS", name: "Somalia Shilling" },
        { code: "SPL", name: "Seborga Luigino" },
        { code: "SRD", name: "Suriname Dollar" },
        { code: "STD", name: "S\xE3o Tom\xE9 and Pr\xEDncipe Dobra" },
        { code: "SVC", name: "El Salvador Colon" },
        { code: "SYP", name: "Syria Pound" },
        { code: "SZL", name: "Swaziland Lilangeni" },
        { code: "THB", name: "Thailand Baht" },
        { code: "TJS", name: "Tajikistan Somoni" },
        { code: "TMT", name: "Turkmenistan Manat" },
        { code: "TND", name: "Tunisia Dinar" },
        { code: "TOP", name: "Tonga Pa'anga" },
        { code: "TRY", name: "Turkey Lira" },
        { code: "TTD", name: "Trinidad and Tobago Dollar" },
        { code: "TVD", name: "Tuvalu Dollar" },
        { code: "TWD", name: "Taiwan New Dollar" },
        { code: "TZS", name: "Tanzania Shilling" },
        { code: "UAH", name: "Ukraine Hryvnia" },
        { code: "UGX", name: "Uganda Shilling" },
        { code: "USD", name: "United States Dollar" },
        { code: "UYU", name: "Uruguay Peso" },
        { code: "UZS", name: "Uzbekistan Som" },
        { code: "VEF", name: "Venezuela Bolivar" },
        { code: "VND", name: "Viet Nam Dong" },
        { code: "VUV", name: "Vanuatu Vatu" },
        { code: "WST", name: "Samoa Tala" },
        { code: "XAF", name: "Communaut\xE9 Financi\xE8re Africaine (BEAC) CFA Franc BEAC" },
        { code: "XCD", name: "East Caribbean Dollar" },
        { code: "XDR", name: "International Monetary Fund (IMF) Special Drawing Rights" },
        { code: "XOF", name: "Communaut\xE9 Financi\xE8re Africaine (BCEAO) Franc" },
        { code: "XPF", name: "Comptoirs Fran\xE7ais du Pacifique (CFP) Franc" },
        { code: "YER", name: "Yemen Rial" },
        { code: "ZAR", name: "South Africa Rand" },
        { code: "ZMW", name: "Zambia Kwacha" },
        { code: "ZWD", name: "Zimbabwe Dollar" }
      ],
      // return the names of all valide colors
      colorNames: [
        "AliceBlue",
        "Black",
        "Navy",
        "DarkBlue",
        "MediumBlue",
        "Blue",
        "DarkGreen",
        "Green",
        "Teal",
        "DarkCyan",
        "DeepSkyBlue",
        "DarkTurquoise",
        "MediumSpringGreen",
        "Lime",
        "SpringGreen",
        "Aqua",
        "Cyan",
        "MidnightBlue",
        "DodgerBlue",
        "LightSeaGreen",
        "ForestGreen",
        "SeaGreen",
        "DarkSlateGray",
        "LimeGreen",
        "MediumSeaGreen",
        "Turquoise",
        "RoyalBlue",
        "SteelBlue",
        "DarkSlateBlue",
        "MediumTurquoise",
        "Indigo",
        "DarkOliveGreen",
        "CadetBlue",
        "CornflowerBlue",
        "RebeccaPurple",
        "MediumAquaMarine",
        "DimGray",
        "SlateBlue",
        "OliveDrab",
        "SlateGray",
        "LightSlateGray",
        "MediumSlateBlue",
        "LawnGreen",
        "Chartreuse",
        "Aquamarine",
        "Maroon",
        "Purple",
        "Olive",
        "Gray",
        "SkyBlue",
        "LightSkyBlue",
        "BlueViolet",
        "DarkRed",
        "DarkMagenta",
        "SaddleBrown",
        "Ivory",
        "White",
        "DarkSeaGreen",
        "LightGreen",
        "MediumPurple",
        "DarkViolet",
        "PaleGreen",
        "DarkOrchid",
        "YellowGreen",
        "Sienna",
        "Brown",
        "DarkGray",
        "LightBlue",
        "GreenYellow",
        "PaleTurquoise",
        "LightSteelBlue",
        "PowderBlue",
        "FireBrick",
        "DarkGoldenRod",
        "MediumOrchid",
        "RosyBrown",
        "DarkKhaki",
        "Silver",
        "MediumVioletRed",
        "IndianRed",
        "Peru",
        "Chocolate",
        "Tan",
        "LightGray",
        "Thistle",
        "Orchid",
        "GoldenRod",
        "PaleVioletRed",
        "Crimson",
        "Gainsboro",
        "Plum",
        "BurlyWood",
        "LightCyan",
        "Lavender",
        "DarkSalmon",
        "Violet",
        "PaleGoldenRod",
        "LightCoral",
        "Khaki",
        "AliceBlue",
        "HoneyDew",
        "Azure",
        "SandyBrown",
        "Wheat",
        "Beige",
        "WhiteSmoke",
        "MintCream",
        "GhostWhite",
        "Salmon",
        "AntiqueWhite",
        "Linen",
        "LightGoldenRodYellow",
        "OldLace",
        "Red",
        "Fuchsia",
        "Magenta",
        "DeepPink",
        "OrangeRed",
        "Tomato",
        "HotPink",
        "Coral",
        "DarkOrange",
        "LightSalmon",
        "Orange",
        "LightPink",
        "Pink",
        "Gold",
        "PeachPuff",
        "NavajoWhite",
        "Moccasin",
        "Bisque",
        "MistyRose",
        "BlanchedAlmond",
        "PapayaWhip",
        "LavenderBlush",
        "SeaShell",
        "Cornsilk",
        "LemonChiffon",
        "FloralWhite",
        "Snow",
        "Yellow",
        "LightYellow"
      ],
      // Data taken from https://www.sec.gov/rules/other/4-460list.htm
      company: [
        "3Com Corp",
        "3M Company",
        "A.G. Edwards Inc.",
        "Abbott Laboratories",
        "Abercrombie & Fitch Co.",
        "ABM Industries Incorporated",
        "Ace Hardware Corporation",
        "ACT Manufacturing Inc.",
        "Acterna Corp.",
        "Adams Resources & Energy, Inc.",
        "ADC Telecommunications, Inc.",
        "Adelphia Communications Corporation",
        "Administaff, Inc.",
        "Adobe Systems Incorporated",
        "Adolph Coors Company",
        "Advance Auto Parts, Inc.",
        "Advanced Micro Devices, Inc.",
        "AdvancePCS, Inc.",
        "Advantica Restaurant Group, Inc.",
        "The AES Corporation",
        "Aetna Inc.",
        "Affiliated Computer Services, Inc.",
        "AFLAC Incorporated",
        "AGCO Corporation",
        "Agilent Technologies, Inc.",
        "Agway Inc.",
        "Apartment Investment and Management Company",
        "Air Products and Chemicals, Inc.",
        "Airborne, Inc.",
        "Airgas, Inc.",
        "AK Steel Holding Corporation",
        "Alaska Air Group, Inc.",
        "Alberto-Culver Company",
        "Albertson's, Inc.",
        "Alcoa Inc.",
        "Alleghany Corporation",
        "Allegheny Energy, Inc.",
        "Allegheny Technologies Incorporated",
        "Allergan, Inc.",
        "ALLETE, Inc.",
        "Alliant Energy Corporation",
        "Allied Waste Industries, Inc.",
        "Allmerica Financial Corporation",
        "The Allstate Corporation",
        "ALLTEL Corporation",
        "The Alpine Group, Inc.",
        "Amazon.com, Inc.",
        "AMC Entertainment Inc.",
        "American Power Conversion Corporation",
        "Amerada Hess Corporation",
        "AMERCO",
        "Ameren Corporation",
        "America West Holdings Corporation",
        "American Axle & Manufacturing Holdings, Inc.",
        "American Eagle Outfitters, Inc.",
        "American Electric Power Company, Inc.",
        "American Express Company",
        "American Financial Group, Inc.",
        "American Greetings Corporation",
        "American International Group, Inc.",
        "American Standard Companies Inc.",
        "American Water Works Company, Inc.",
        "AmerisourceBergen Corporation",
        "Ames Department Stores, Inc.",
        "Amgen Inc.",
        "Amkor Technology, Inc.",
        "AMR Corporation",
        "AmSouth Bancorp.",
        "Amtran, Inc.",
        "Anadarko Petroleum Corporation",
        "Analog Devices, Inc.",
        "Anheuser-Busch Companies, Inc.",
        "Anixter International Inc.",
        "AnnTaylor Inc.",
        "Anthem, Inc.",
        "AOL Time Warner Inc.",
        "Aon Corporation",
        "Apache Corporation",
        "Apple Computer, Inc.",
        "Applera Corporation",
        "Applied Industrial Technologies, Inc.",
        "Applied Materials, Inc.",
        "Aquila, Inc.",
        "ARAMARK Corporation",
        "Arch Coal, Inc.",
        "Archer Daniels Midland Company",
        "Arkansas Best Corporation",
        "Armstrong Holdings, Inc.",
        "Arrow Electronics, Inc.",
        "ArvinMeritor, Inc.",
        "Ashland Inc.",
        "Astoria Financial Corporation",
        "AT&T Corp.",
        "Atmel Corporation",
        "Atmos Energy Corporation",
        "Audiovox Corporation",
        "Autoliv, Inc.",
        "Automatic Data Processing, Inc.",
        "AutoNation, Inc.",
        "AutoZone, Inc.",
        "Avaya Inc.",
        "Avery Dennison Corporation",
        "Avista Corporation",
        "Avnet, Inc.",
        "Avon Products, Inc.",
        "Baker Hughes Incorporated",
        "Ball Corporation",
        "Bank of America Corporation",
        "The Bank of New York Company, Inc.",
        "Bank One Corporation",
        "Banknorth Group, Inc.",
        "Banta Corporation",
        "Barnes & Noble, Inc.",
        "Bausch & Lomb Incorporated",
        "Baxter International Inc.",
        "BB&T Corporation",
        "The Bear Stearns Companies Inc.",
        "Beazer Homes USA, Inc.",
        "Beckman Coulter, Inc.",
        "Becton, Dickinson and Company",
        "Bed Bath & Beyond Inc.",
        "Belk, Inc.",
        "Bell Microproducts Inc.",
        "BellSouth Corporation",
        "Belo Corp.",
        "Bemis Company, Inc.",
        "Benchmark Electronics, Inc.",
        "Berkshire Hathaway Inc.",
        "Best Buy Co., Inc.",
        "Bethlehem Steel Corporation",
        "Beverly Enterprises, Inc.",
        "Big Lots, Inc.",
        "BJ Services Company",
        "BJ's Wholesale Club, Inc.",
        "The Black & Decker Corporation",
        "Black Hills Corporation",
        "BMC Software, Inc.",
        "The Boeing Company",
        "Boise Cascade Corporation",
        "Borders Group, Inc.",
        "BorgWarner Inc.",
        "Boston Scientific Corporation",
        "Bowater Incorporated",
        "Briggs & Stratton Corporation",
        "Brightpoint, Inc.",
        "Brinker International, Inc.",
        "Bristol-Myers Squibb Company",
        "Broadwing, Inc.",
        "Brown Shoe Company, Inc.",
        "Brown-Forman Corporation",
        "Brunswick Corporation",
        "Budget Group, Inc.",
        "Burlington Coat Factory Warehouse Corporation",
        "Burlington Industries, Inc.",
        "Burlington Northern Santa Fe Corporation",
        "Burlington Resources Inc.",
        "C. H. Robinson Worldwide Inc.",
        "Cablevision Systems Corp",
        "Cabot Corp",
        "Cadence Design Systems, Inc.",
        "Calpine Corp.",
        "Campbell Soup Co.",
        "Capital One Financial Corp.",
        "Cardinal Health Inc.",
        "Caremark Rx Inc.",
        "Carlisle Cos. Inc.",
        "Carpenter Technology Corp.",
        "Casey's General Stores Inc.",
        "Caterpillar Inc.",
        "CBRL Group Inc.",
        "CDI Corp.",
        "CDW Computer Centers Inc.",
        "CellStar Corp.",
        "Cendant Corp",
        "Cenex Harvest States Cooperatives",
        "Centex Corp.",
        "CenturyTel Inc.",
        "Ceridian Corp.",
        "CH2M Hill Cos. Ltd.",
        "Champion Enterprises Inc.",
        "Charles Schwab Corp.",
        "Charming Shoppes Inc.",
        "Charter Communications Inc.",
        "Charter One Financial Inc.",
        "ChevronTexaco Corp.",
        "Chiquita Brands International Inc.",
        "Chubb Corp",
        "Ciena Corp.",
        "Cigna Corp",
        "Cincinnati Financial Corp.",
        "Cinergy Corp.",
        "Cintas Corp.",
        "Circuit City Stores Inc.",
        "Cisco Systems Inc.",
        "Citigroup, Inc",
        "Citizens Communications Co.",
        "CKE Restaurants Inc.",
        "Clear Channel Communications Inc.",
        "The Clorox Co.",
        "CMGI Inc.",
        "CMS Energy Corp.",
        "CNF Inc.",
        "Coca-Cola Co.",
        "Coca-Cola Enterprises Inc.",
        "Colgate-Palmolive Co.",
        "Collins & Aikman Corp.",
        "Comcast Corp.",
        "Comdisco Inc.",
        "Comerica Inc.",
        "Comfort Systems USA Inc.",
        "Commercial Metals Co.",
        "Community Health Systems Inc.",
        "Compass Bancshares Inc",
        "Computer Associates International Inc.",
        "Computer Sciences Corp.",
        "Compuware Corp.",
        "Comverse Technology Inc.",
        "ConAgra Foods Inc.",
        "Concord EFS Inc.",
        "Conectiv, Inc",
        "Conoco Inc",
        "Conseco Inc.",
        "Consolidated Freightways Corp.",
        "Consolidated Edison Inc.",
        "Constellation Brands Inc.",
        "Constellation Emergy Group Inc.",
        "Continental Airlines Inc.",
        "Convergys Corp.",
        "Cooper Cameron Corp.",
        "Cooper Industries Ltd.",
        "Cooper Tire & Rubber Co.",
        "Corn Products International Inc.",
        "Corning Inc.",
        "Costco Wholesale Corp.",
        "Countrywide Credit Industries Inc.",
        "Coventry Health Care Inc.",
        "Cox Communications Inc.",
        "Crane Co.",
        "Crompton Corp.",
        "Crown Cork & Seal Co. Inc.",
        "CSK Auto Corp.",
        "CSX Corp.",
        "Cummins Inc.",
        "CVS Corp.",
        "Cytec Industries Inc.",
        "D&K Healthcare Resources, Inc.",
        "D.R. Horton Inc.",
        "Dana Corporation",
        "Danaher Corporation",
        "Darden Restaurants Inc.",
        "DaVita Inc.",
        "Dean Foods Company",
        "Deere & Company",
        "Del Monte Foods Co",
        "Dell Computer Corporation",
        "Delphi Corp.",
        "Delta Air Lines Inc.",
        "Deluxe Corporation",
        "Devon Energy Corporation",
        "Di Giorgio Corporation",
        "Dial Corporation",
        "Diebold Incorporated",
        "Dillard's Inc.",
        "DIMON Incorporated",
        "Dole Food Company, Inc.",
        "Dollar General Corporation",
        "Dollar Tree Stores, Inc.",
        "Dominion Resources, Inc.",
        "Domino's Pizza LLC",
        "Dover Corporation, Inc.",
        "Dow Chemical Company",
        "Dow Jones & Company, Inc.",
        "DPL Inc.",
        "DQE Inc.",
        "Dreyer's Grand Ice Cream, Inc.",
        "DST Systems, Inc.",
        "DTE Energy Co.",
        "E.I. Du Pont de Nemours and Company",
        "Duke Energy Corp",
        "Dun & Bradstreet Inc.",
        "DURA Automotive Systems Inc.",
        "DynCorp",
        "Dynegy Inc.",
        "E*Trade Group, Inc.",
        "E.W. Scripps Company",
        "Earthlink, Inc.",
        "Eastman Chemical Company",
        "Eastman Kodak Company",
        "Eaton Corporation",
        "Echostar Communications Corporation",
        "Ecolab Inc.",
        "Edison International",
        "EGL Inc.",
        "El Paso Corporation",
        "Electronic Arts Inc.",
        "Electronic Data Systems Corp.",
        "Eli Lilly and Company",
        "EMC Corporation",
        "Emcor Group Inc.",
        "Emerson Electric Co.",
        "Encompass Services Corporation",
        "Energizer Holdings Inc.",
        "Energy East Corporation",
        "Engelhard Corporation",
        "Enron Corp.",
        "Entergy Corporation",
        "Enterprise Products Partners L.P.",
        "EOG Resources, Inc.",
        "Equifax Inc.",
        "Equitable Resources Inc.",
        "Equity Office Properties Trust",
        "Equity Residential Properties Trust",
        "Estee Lauder Companies Inc.",
        "Exelon Corporation",
        "Exide Technologies",
        "Expeditors International of Washington Inc.",
        "Express Scripts Inc.",
        "ExxonMobil Corporation",
        "Fairchild Semiconductor International Inc.",
        "Family Dollar Stores Inc.",
        "Farmland Industries Inc.",
        "Federal Mogul Corp.",
        "Federated Department Stores Inc.",
        "Federal Express Corp.",
        "Felcor Lodging Trust Inc.",
        "Ferro Corp.",
        "Fidelity National Financial Inc.",
        "Fifth Third Bancorp",
        "First American Financial Corp.",
        "First Data Corp.",
        "First National of Nebraska Inc.",
        "First Tennessee National Corp.",
        "FirstEnergy Corp.",
        "Fiserv Inc.",
        "Fisher Scientific International Inc.",
        "FleetBoston Financial Co.",
        "Fleetwood Enterprises Inc.",
        "Fleming Companies Inc.",
        "Flowers Foods Inc.",
        "Flowserv Corp",
        "Fluor Corp",
        "FMC Corp",
        "Foamex International Inc",
        "Foot Locker Inc",
        "Footstar Inc.",
        "Ford Motor Co",
        "Forest Laboratories Inc.",
        "Fortune Brands Inc.",
        "Foster Wheeler Ltd.",
        "FPL Group Inc.",
        "Franklin Resources Inc.",
        "Freeport McMoran Copper & Gold Inc.",
        "Frontier Oil Corp",
        "Furniture Brands International Inc.",
        "Gannett Co., Inc.",
        "Gap Inc.",
        "Gateway Inc.",
        "GATX Corporation",
        "Gemstar-TV Guide International Inc.",
        "GenCorp Inc.",
        "General Cable Corporation",
        "General Dynamics Corporation",
        "General Electric Company",
        "General Mills Inc",
        "General Motors Corporation",
        "Genesis Health Ventures Inc.",
        "Gentek Inc.",
        "Gentiva Health Services Inc.",
        "Genuine Parts Company",
        "Genuity Inc.",
        "Genzyme Corporation",
        "Georgia Gulf Corporation",
        "Georgia-Pacific Corporation",
        "Gillette Company",
        "Gold Kist Inc.",
        "Golden State Bancorp Inc.",
        "Golden West Financial Corporation",
        "Goldman Sachs Group Inc.",
        "Goodrich Corporation",
        "The Goodyear Tire & Rubber Company",
        "Granite Construction Incorporated",
        "Graybar Electric Company Inc.",
        "Great Lakes Chemical Corporation",
        "Great Plains Energy Inc.",
        "GreenPoint Financial Corp.",
        "Greif Bros. Corporation",
        "Grey Global Group Inc.",
        "Group 1 Automotive Inc.",
        "Guidant Corporation",
        "H&R Block Inc.",
        "H.B. Fuller Company",
        "H.J. Heinz Company",
        "Halliburton Co.",
        "Harley-Davidson Inc.",
        "Harman International Industries Inc.",
        "Harrah's Entertainment Inc.",
        "Harris Corp.",
        "Harsco Corp.",
        "Hartford Financial Services Group Inc.",
        "Hasbro Inc.",
        "Hawaiian Electric Industries Inc.",
        "HCA Inc.",
        "Health Management Associates Inc.",
        "Health Net Inc.",
        "Healthsouth Corp",
        "Henry Schein Inc.",
        "Hercules Inc.",
        "Herman Miller Inc.",
        "Hershey Foods Corp.",
        "Hewlett-Packard Company",
        "Hibernia Corp.",
        "Hillenbrand Industries Inc.",
        "Hilton Hotels Corp.",
        "Hollywood Entertainment Corp.",
        "Home Depot Inc.",
        "Hon Industries Inc.",
        "Honeywell International Inc.",
        "Hormel Foods Corp.",
        "Host Marriott Corp.",
        "Household International Corp.",
        "Hovnanian Enterprises Inc.",
        "Hub Group Inc.",
        "Hubbell Inc.",
        "Hughes Supply Inc.",
        "Humana Inc.",
        "Huntington Bancshares Inc.",
        "Idacorp Inc.",
        "IDT Corporation",
        "IKON Office Solutions Inc.",
        "Illinois Tool Works Inc.",
        "IMC Global Inc.",
        "Imperial Sugar Company",
        "IMS Health Inc.",
        "Ingles Market Inc",
        "Ingram Micro Inc.",
        "Insight Enterprises Inc.",
        "Integrated Electrical Services Inc.",
        "Intel Corporation",
        "International Paper Co.",
        "Interpublic Group of Companies Inc.",
        "Interstate Bakeries Corporation",
        "International Business Machines Corp.",
        "International Flavors & Fragrances Inc.",
        "International Multifoods Corporation",
        "Intuit Inc.",
        "IT Group Inc.",
        "ITT Industries Inc.",
        "Ivax Corp.",
        "J.B. Hunt Transport Services Inc.",
        "J.C. Penny Co.",
        "J.P. Morgan Chase & Co.",
        "Jabil Circuit Inc.",
        "Jack In The Box Inc.",
        "Jacobs Engineering Group Inc.",
        "JDS Uniphase Corp.",
        "Jefferson-Pilot Co.",
        "John Hancock Financial Services Inc.",
        "Johnson & Johnson",
        "Johnson Controls Inc.",
        "Jones Apparel Group Inc.",
        "KB Home",
        "Kellogg Company",
        "Kellwood Company",
        "Kelly Services Inc.",
        "Kemet Corp.",
        "Kennametal Inc.",
        "Kerr-McGee Corporation",
        "KeyCorp",
        "KeySpan Corp.",
        "Kimball International Inc.",
        "Kimberly-Clark Corporation",
        "Kindred Healthcare Inc.",
        "KLA-Tencor Corporation",
        "K-Mart Corp.",
        "Knight-Ridder Inc.",
        "Kohl's Corp.",
        "KPMG Consulting Inc.",
        "Kroger Co.",
        "L-3 Communications Holdings Inc.",
        "Laboratory Corporation of America Holdings",
        "Lam Research Corporation",
        "LandAmerica Financial Group Inc.",
        "Lands' End Inc.",
        "Landstar System Inc.",
        "La-Z-Boy Inc.",
        "Lear Corporation",
        "Legg Mason Inc.",
        "Leggett & Platt Inc.",
        "Lehman Brothers Holdings Inc.",
        "Lennar Corporation",
        "Lennox International Inc.",
        "Level 3 Communications Inc.",
        "Levi Strauss & Co.",
        "Lexmark International Inc.",
        "Limited Inc.",
        "Lincoln National Corporation",
        "Linens 'n Things Inc.",
        "Lithia Motors Inc.",
        "Liz Claiborne Inc.",
        "Lockheed Martin Corporation",
        "Loews Corporation",
        "Longs Drug Stores Corporation",
        "Louisiana-Pacific Corporation",
        "Lowe's Companies Inc.",
        "LSI Logic Corporation",
        "The LTV Corporation",
        "The Lubrizol Corporation",
        "Lucent Technologies Inc.",
        "Lyondell Chemical Company",
        "M & T Bank Corporation",
        "Magellan Health Services Inc.",
        "Mail-Well Inc.",
        "Mandalay Resort Group",
        "Manor Care Inc.",
        "Manpower Inc.",
        "Marathon Oil Corporation",
        "Mariner Health Care Inc.",
        "Markel Corporation",
        "Marriott International Inc.",
        "Marsh & McLennan Companies Inc.",
        "Marsh Supermarkets Inc.",
        "Marshall & Ilsley Corporation",
        "Martin Marietta Materials Inc.",
        "Masco Corporation",
        "Massey Energy Company",
        "MasTec Inc.",
        "Mattel Inc.",
        "Maxim Integrated Products Inc.",
        "Maxtor Corporation",
        "Maxxam Inc.",
        "The May Department Stores Company",
        "Maytag Corporation",
        "MBNA Corporation",
        "McCormick & Company Incorporated",
        "McDonald's Corporation",
        "The McGraw-Hill Companies Inc.",
        "McKesson Corporation",
        "McLeodUSA Incorporated",
        "M.D.C. Holdings Inc.",
        "MDU Resources Group Inc.",
        "MeadWestvaco Corporation",
        "Medtronic Inc.",
        "Mellon Financial Corporation",
        "The Men's Wearhouse Inc.",
        "Merck & Co., Inc.",
        "Mercury General Corporation",
        "Merrill Lynch & Co. Inc.",
        "Metaldyne Corporation",
        "Metals USA Inc.",
        "MetLife Inc.",
        "Metris Companies Inc",
        "MGIC Investment Corporation",
        "MGM Mirage",
        "Michaels Stores Inc.",
        "Micron Technology Inc.",
        "Microsoft Corporation",
        "Milacron Inc.",
        "Millennium Chemicals Inc.",
        "Mirant Corporation",
        "Mohawk Industries Inc.",
        "Molex Incorporated",
        "The MONY Group Inc.",
        "Morgan Stanley Dean Witter & Co.",
        "Motorola Inc.",
        "MPS Group Inc.",
        "Murphy Oil Corporation",
        "Nabors Industries Inc",
        "Nacco Industries Inc",
        "Nash Finch Company",
        "National City Corp.",
        "National Commerce Financial Corporation",
        "National Fuel Gas Company",
        "National Oilwell Inc",
        "National Rural Utilities Cooperative Finance Corporation",
        "National Semiconductor Corporation",
        "National Service Industries Inc",
        "Navistar International Corporation",
        "NCR Corporation",
        "The Neiman Marcus Group Inc.",
        "New Jersey Resources Corporation",
        "New York Times Company",
        "Newell Rubbermaid Inc",
        "Newmont Mining Corporation",
        "Nextel Communications Inc",
        "Nicor Inc",
        "Nike Inc",
        "NiSource Inc",
        "Noble Energy Inc",
        "Nordstrom Inc",
        "Norfolk Southern Corporation",
        "Nortek Inc",
        "North Fork Bancorporation Inc",
        "Northeast Utilities System",
        "Northern Trust Corporation",
        "Northrop Grumman Corporation",
        "NorthWestern Corporation",
        "Novellus Systems Inc",
        "NSTAR",
        "NTL Incorporated",
        "Nucor Corp",
        "Nvidia Corp",
        "NVR Inc",
        "Northwest Airlines Corp",
        "Occidental Petroleum Corp",
        "Ocean Energy Inc",
        "Office Depot Inc.",
        "OfficeMax Inc",
        "OGE Energy Corp",
        "Oglethorpe Power Corp.",
        "Ohio Casualty Corp.",
        "Old Republic International Corp.",
        "Olin Corp.",
        "OM Group Inc",
        "Omnicare Inc",
        "Omnicom Group",
        "On Semiconductor Corp",
        "ONEOK Inc",
        "Oracle Corp",
        "Oshkosh Truck Corp",
        "Outback Steakhouse Inc.",
        "Owens & Minor Inc.",
        "Owens Corning",
        "Owens-Illinois Inc",
        "Oxford Health Plans Inc",
        "Paccar Inc",
        "PacifiCare Health Systems Inc",
        "Packaging Corp. of America",
        "Pactiv Corp",
        "Pall Corp",
        "Pantry Inc",
        "Park Place Entertainment Corp",
        "Parker Hannifin Corp.",
        "Pathmark Stores Inc.",
        "Paychex Inc",
        "Payless Shoesource Inc",
        "Penn Traffic Co.",
        "Pennzoil-Quaker State Company",
        "Pentair Inc",
        "Peoples Energy Corp.",
        "PeopleSoft Inc",
        "Pep Boys Manny, Moe & Jack",
        "Potomac Electric Power Co.",
        "Pepsi Bottling Group Inc.",
        "PepsiAmericas Inc.",
        "PepsiCo Inc.",
        "Performance Food Group Co.",
        "Perini Corp",
        "PerkinElmer Inc",
        "Perot Systems Corp",
        "Petco Animal Supplies Inc.",
        "Peter Kiewit Sons', Inc.",
        "PETsMART Inc",
        "Pfizer Inc",
        "Pacific Gas & Electric Corp.",
        "Pharmacia Corp",
        "Phar Mor Inc.",
        "Phelps Dodge Corp.",
        "Philip Morris Companies Inc.",
        "Phillips Petroleum Co",
        "Phillips Van Heusen Corp.",
        "Phoenix Companies Inc",
        "Pier 1 Imports Inc.",
        "Pilgrim's Pride Corporation",
        "Pinnacle West Capital Corp",
        "Pioneer-Standard Electronics Inc.",
        "Pitney Bowes Inc.",
        "Pittston Brinks Group",
        "Plains All American Pipeline LP",
        "PNC Financial Services Group Inc.",
        "PNM Resources Inc",
        "Polaris Industries Inc.",
        "Polo Ralph Lauren Corp",
        "PolyOne Corp",
        "Popular Inc",
        "Potlatch Corp",
        "PPG Industries Inc",
        "PPL Corp",
        "Praxair Inc",
        "Precision Castparts Corp",
        "Premcor Inc.",
        "Pride International Inc",
        "Primedia Inc",
        "Principal Financial Group Inc.",
        "Procter & Gamble Co.",
        "Pro-Fac Cooperative Inc.",
        "Progress Energy Inc",
        "Progressive Corporation",
        "Protective Life Corp",
        "Provident Financial Group",
        "Providian Financial Corp.",
        "Prudential Financial Inc.",
        "PSS World Medical Inc",
        "Public Service Enterprise Group Inc.",
        "Publix Super Markets Inc.",
        "Puget Energy Inc.",
        "Pulte Homes Inc",
        "Qualcomm Inc",
        "Quanta Services Inc.",
        "Quantum Corp",
        "Quest Diagnostics Inc.",
        "Questar Corp",
        "Quintiles Transnational",
        "Qwest Communications Intl Inc",
        "R.J. Reynolds Tobacco Company",
        "R.R. Donnelley & Sons Company",
        "Radio Shack Corporation",
        "Raymond James Financial Inc.",
        "Raytheon Company",
        "Reader's Digest Association Inc.",
        "Reebok International Ltd.",
        "Regions Financial Corp.",
        "Regis Corporation",
        "Reliance Steel & Aluminum Co.",
        "Reliant Energy Inc.",
        "Rent A Center Inc",
        "Republic Services Inc",
        "Revlon Inc",
        "RGS Energy Group Inc",
        "Rite Aid Corp",
        "Riverwood Holding Inc.",
        "RoadwayCorp",
        "Robert Half International Inc.",
        "Rock-Tenn Co",
        "Rockwell Automation Inc",
        "Rockwell Collins Inc",
        "Rohm & Haas Co.",
        "Ross Stores Inc",
        "RPM Inc.",
        "Ruddick Corp",
        "Ryder System Inc",
        "Ryerson Tull Inc",
        "Ryland Group Inc.",
        "Sabre Holdings Corp",
        "Safeco Corp",
        "Safeguard Scientifics Inc.",
        "Safeway Inc",
        "Saks Inc",
        "Sanmina-SCI Inc",
        "Sara Lee Corp",
        "SBC Communications Inc",
        "Scana Corp.",
        "Schering-Plough Corp",
        "Scholastic Corp",
        "SCI Systems Onc.",
        "Science Applications Intl. Inc.",
        "Scientific-Atlanta Inc",
        "Scotts Company",
        "Seaboard Corp",
        "Sealed Air Corp",
        "Sears Roebuck & Co",
        "Sempra Energy",
        "Sequa Corp",
        "Service Corp. International",
        "ServiceMaster Co",
        "Shaw Group Inc",
        "Sherwin-Williams Company",
        "Shopko Stores Inc",
        "Siebel Systems Inc",
        "Sierra Health Services Inc",
        "Sierra Pacific Resources",
        "Silgan Holdings Inc.",
        "Silicon Graphics Inc",
        "Simon Property Group Inc",
        "SLM Corporation",
        "Smith International Inc",
        "Smithfield Foods Inc",
        "Smurfit-Stone Container Corp",
        "Snap-On Inc",
        "Solectron Corp",
        "Solutia Inc",
        "Sonic Automotive Inc.",
        "Sonoco Products Co.",
        "Southern Company",
        "Southern Union Company",
        "SouthTrust Corp.",
        "Southwest Airlines Co",
        "Southwest Gas Corp",
        "Sovereign Bancorp Inc.",
        "Spartan Stores Inc",
        "Spherion Corp",
        "Sports Authority Inc",
        "Sprint Corp.",
        "SPX Corp",
        "St. Jude Medical Inc",
        "St. Paul Cos.",
        "Staff Leasing Inc.",
        "StanCorp Financial Group Inc",
        "Standard Pacific Corp.",
        "Stanley Works",
        "Staples Inc",
        "Starbucks Corp",
        "Starwood Hotels & Resorts Worldwide Inc",
        "State Street Corp.",
        "Stater Bros. Holdings Inc.",
        "Steelcase Inc",
        "Stein Mart Inc",
        "Stewart & Stevenson Services Inc",
        "Stewart Information Services Corp",
        "Stilwell Financial Inc",
        "Storage Technology Corporation",
        "Stryker Corp",
        "Sun Healthcare Group Inc.",
        "Sun Microsystems Inc.",
        "SunGard Data Systems Inc.",
        "Sunoco Inc.",
        "SunTrust Banks Inc",
        "Supervalu Inc",
        "Swift Transportation, Co., Inc",
        "Symbol Technologies Inc",
        "Synovus Financial Corp.",
        "Sysco Corp",
        "Systemax Inc.",
        "Target Corp.",
        "Tech Data Corporation",
        "TECO Energy Inc",
        "Tecumseh Products Company",
        "Tektronix Inc",
        "Teleflex Incorporated",
        "Telephone & Data Systems Inc",
        "Tellabs Inc.",
        "Temple-Inland Inc",
        "Tenet Healthcare Corporation",
        "Tenneco Automotive Inc.",
        "Teradyne Inc",
        "Terex Corp",
        "Tesoro Petroleum Corp.",
        "Texas Industries Inc.",
        "Texas Instruments Incorporated",
        "Textron Inc",
        "Thermo Electron Corporation",
        "Thomas & Betts Corporation",
        "Tiffany & Co",
        "Timken Company",
        "TJX Companies Inc",
        "TMP Worldwide Inc",
        "Toll Brothers Inc",
        "Torchmark Corporation",
        "Toro Company",
        "Tower Automotive Inc.",
        "Toys 'R' Us Inc",
        "Trans World Entertainment Corp.",
        "TransMontaigne Inc",
        "Transocean Inc",
        "TravelCenters of America Inc.",
        "Triad Hospitals Inc",
        "Tribune Company",
        "Trigon Healthcare Inc.",
        "Trinity Industries Inc",
        "Trump Hotels & Casino Resorts Inc.",
        "TruServ Corporation",
        "TRW Inc",
        "TXU Corp",
        "Tyson Foods Inc",
        "U.S. Bancorp",
        "U.S. Industries Inc.",
        "UAL Corporation",
        "UGI Corporation",
        "Unified Western Grocers Inc",
        "Union Pacific Corporation",
        "Union Planters Corp",
        "Unisource Energy Corp",
        "Unisys Corporation",
        "United Auto Group Inc",
        "United Defense Industries Inc.",
        "United Parcel Service Inc",
        "United Rentals Inc",
        "United Stationers Inc",
        "United Technologies Corporation",
        "UnitedHealth Group Incorporated",
        "Unitrin Inc",
        "Universal Corporation",
        "Universal Forest Products Inc",
        "Universal Health Services Inc",
        "Unocal Corporation",
        "Unova Inc",
        "UnumProvident Corporation",
        "URS Corporation",
        "US Airways Group Inc",
        "US Oncology Inc",
        "USA Interactive",
        "USFreighways Corporation",
        "USG Corporation",
        "UST Inc",
        "Valero Energy Corporation",
        "Valspar Corporation",
        "Value City Department Stores Inc",
        "Varco International Inc",
        "Vectren Corporation",
        "Veritas Software Corporation",
        "Verizon Communications Inc",
        "VF Corporation",
        "Viacom Inc",
        "Viad Corp",
        "Viasystems Group Inc",
        "Vishay Intertechnology Inc",
        "Visteon Corporation",
        "Volt Information Sciences Inc",
        "Vulcan Materials Company",
        "W.R. Berkley Corporation",
        "W.R. Grace & Co",
        "W.W. Grainger Inc",
        "Wachovia Corporation",
        "Wakenhut Corporation",
        "Walgreen Co",
        "Wallace Computer Services Inc",
        "Wal-Mart Stores Inc",
        "Walt Disney Co",
        "Walter Industries Inc",
        "Washington Mutual Inc",
        "Washington Post Co.",
        "Waste Management Inc",
        "Watsco Inc",
        "Weatherford International Inc",
        "Weis Markets Inc.",
        "Wellpoint Health Networks Inc",
        "Wells Fargo & Company",
        "Wendy's International Inc",
        "Werner Enterprises Inc",
        "WESCO International Inc",
        "Western Digital Inc",
        "Western Gas Resources Inc",
        "WestPoint Stevens Inc",
        "Weyerhauser Company",
        "WGL Holdings Inc",
        "Whirlpool Corporation",
        "Whole Foods Market Inc",
        "Willamette Industries Inc.",
        "Williams Companies Inc",
        "Williams Sonoma Inc",
        "Winn Dixie Stores Inc",
        "Wisconsin Energy Corporation",
        "Wm Wrigley Jr Company",
        "World Fuel Services Corporation",
        "WorldCom Inc",
        "Worthington Industries Inc",
        "WPS Resources Corporation",
        "Wyeth",
        "Wyndham International Inc",
        "Xcel Energy Inc",
        "Xerox Corp",
        "Xilinx Inc",
        "XO Communications Inc",
        "Yellow Corporation",
        "York International Corp",
        "Yum Brands Inc.",
        "Zale Corporation",
        "Zions Bancorporation"
      ],
      fileExtension: {
        raster: ["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"],
        vector: ["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"],
        "3d": ["3dmf", "3dm", "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"],
        document: ["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]
      },
      // Data taken from https://github.com/dmfilipenko/timezones.json/blob/master/timezones.json
      timezones: [
        {
          name: "Dateline Standard Time",
          abbr: "DST",
          offset: -12,
          isdst: !1,
          text: "(UTC-12:00) International Date Line West",
          utc: [
            "Etc/GMT+12"
          ]
        },
        {
          name: "UTC-11",
          abbr: "U",
          offset: -11,
          isdst: !1,
          text: "(UTC-11:00) Coordinated Universal Time-11",
          utc: [
            "Etc/GMT+11",
            "Pacific/Midway",
            "Pacific/Niue",
            "Pacific/Pago_Pago"
          ]
        },
        {
          name: "Hawaiian Standard Time",
          abbr: "HST",
          offset: -10,
          isdst: !1,
          text: "(UTC-10:00) Hawaii",
          utc: [
            "Etc/GMT+10",
            "Pacific/Honolulu",
            "Pacific/Johnston",
            "Pacific/Rarotonga",
            "Pacific/Tahiti"
          ]
        },
        {
          name: "Alaskan Standard Time",
          abbr: "AKDT",
          offset: -8,
          isdst: !0,
          text: "(UTC-09:00) Alaska",
          utc: [
            "America/Anchorage",
            "America/Juneau",
            "America/Nome",
            "America/Sitka",
            "America/Yakutat"
          ]
        },
        {
          name: "Pacific Standard Time (Mexico)",
          abbr: "PDT",
          offset: -7,
          isdst: !0,
          text: "(UTC-08:00) Baja California",
          utc: [
            "America/Santa_Isabel"
          ]
        },
        {
          name: "Pacific Daylight Time",
          abbr: "PDT",
          offset: -7,
          isdst: !0,
          text: "(UTC-07:00) Pacific Time (US & Canada)",
          utc: [
            "America/Dawson",
            "America/Los_Angeles",
            "America/Tijuana",
            "America/Vancouver",
            "America/Whitehorse"
          ]
        },
        {
          name: "Pacific Standard Time",
          abbr: "PST",
          offset: -8,
          isdst: !1,
          text: "(UTC-08:00) Pacific Time (US & Canada)",
          utc: [
            "America/Dawson",
            "America/Los_Angeles",
            "America/Tijuana",
            "America/Vancouver",
            "America/Whitehorse",
            "PST8PDT"
          ]
        },
        {
          name: "US Mountain Standard Time",
          abbr: "UMST",
          offset: -7,
          isdst: !1,
          text: "(UTC-07:00) Arizona",
          utc: [
            "America/Creston",
            "America/Dawson_Creek",
            "America/Hermosillo",
            "America/Phoenix",
            "Etc/GMT+7"
          ]
        },
        {
          name: "Mountain Standard Time (Mexico)",
          abbr: "MDT",
          offset: -6,
          isdst: !0,
          text: "(UTC-07:00) Chihuahua, La Paz, Mazatlan",
          utc: [
            "America/Chihuahua",
            "America/Mazatlan"
          ]
        },
        {
          name: "Mountain Standard Time",
          abbr: "MDT",
          offset: -6,
          isdst: !0,
          text: "(UTC-07:00) Mountain Time (US & Canada)",
          utc: [
            "America/Boise",
            "America/Cambridge_Bay",
            "America/Denver",
            "America/Edmonton",
            "America/Inuvik",
            "America/Ojinaga",
            "America/Yellowknife",
            "MST7MDT"
          ]
        },
        {
          name: "Central America Standard Time",
          abbr: "CAST",
          offset: -6,
          isdst: !1,
          text: "(UTC-06:00) Central America",
          utc: [
            "America/Belize",
            "America/Costa_Rica",
            "America/El_Salvador",
            "America/Guatemala",
            "America/Managua",
            "America/Tegucigalpa",
            "Etc/GMT+6",
            "Pacific/Galapagos"
          ]
        },
        {
          name: "Central Standard Time",
          abbr: "CDT",
          offset: -5,
          isdst: !0,
          text: "(UTC-06:00) Central Time (US & Canada)",
          utc: [
            "America/Chicago",
            "America/Indiana/Knox",
            "America/Indiana/Tell_City",
            "America/Matamoros",
            "America/Menominee",
            "America/North_Dakota/Beulah",
            "America/North_Dakota/Center",
            "America/North_Dakota/New_Salem",
            "America/Rainy_River",
            "America/Rankin_Inlet",
            "America/Resolute",
            "America/Winnipeg",
            "CST6CDT"
          ]
        },
        {
          name: "Central Standard Time (Mexico)",
          abbr: "CDT",
          offset: -5,
          isdst: !0,
          text: "(UTC-06:00) Guadalajara, Mexico City, Monterrey",
          utc: [
            "America/Bahia_Banderas",
            "America/Cancun",
            "America/Merida",
            "America/Mexico_City",
            "America/Monterrey"
          ]
        },
        {
          name: "Canada Central Standard Time",
          abbr: "CCST",
          offset: -6,
          isdst: !1,
          text: "(UTC-06:00) Saskatchewan",
          utc: [
            "America/Regina",
            "America/Swift_Current"
          ]
        },
        {
          name: "SA Pacific Standard Time",
          abbr: "SPST",
          offset: -5,
          isdst: !1,
          text: "(UTC-05:00) Bogota, Lima, Quito",
          utc: [
            "America/Bogota",
            "America/Cayman",
            "America/Coral_Harbour",
            "America/Eirunepe",
            "America/Guayaquil",
            "America/Jamaica",
            "America/Lima",
            "America/Panama",
            "America/Rio_Branco",
            "Etc/GMT+5"
          ]
        },
        {
          name: "Eastern Standard Time",
          abbr: "EDT",
          offset: -4,
          isdst: !0,
          text: "(UTC-05:00) Eastern Time (US & Canada)",
          utc: [
            "America/Detroit",
            "America/Havana",
            "America/Indiana/Petersburg",
            "America/Indiana/Vincennes",
            "America/Indiana/Winamac",
            "America/Iqaluit",
            "America/Kentucky/Monticello",
            "America/Louisville",
            "America/Montreal",
            "America/Nassau",
            "America/New_York",
            "America/Nipigon",
            "America/Pangnirtung",
            "America/Port-au-Prince",
            "America/Thunder_Bay",
            "America/Toronto",
            "EST5EDT"
          ]
        },
        {
          name: "US Eastern Standard Time",
          abbr: "UEDT",
          offset: -4,
          isdst: !0,
          text: "(UTC-05:00) Indiana (East)",
          utc: [
            "America/Indiana/Marengo",
            "America/Indiana/Vevay",
            "America/Indianapolis"
          ]
        },
        {
          name: "Venezuela Standard Time",
          abbr: "VST",
          offset: -4.5,
          isdst: !1,
          text: "(UTC-04:30) Caracas",
          utc: [
            "America/Caracas"
          ]
        },
        {
          name: "Paraguay Standard Time",
          abbr: "PYT",
          offset: -4,
          isdst: !1,
          text: "(UTC-04:00) Asuncion",
          utc: [
            "America/Asuncion"
          ]
        },
        {
          name: "Atlantic Standard Time",
          abbr: "ADT",
          offset: -3,
          isdst: !0,
          text: "(UTC-04:00) Atlantic Time (Canada)",
          utc: [
            "America/Glace_Bay",
            "America/Goose_Bay",
            "America/Halifax",
            "America/Moncton",
            "America/Thule",
            "Atlantic/Bermuda"
          ]
        },
        {
          name: "Central Brazilian Standard Time",
          abbr: "CBST",
          offset: -4,
          isdst: !1,
          text: "(UTC-04:00) Cuiaba",
          utc: [
            "America/Campo_Grande",
            "America/Cuiaba"
          ]
        },
        {
          name: "SA Western Standard Time",
          abbr: "SWST",
          offset: -4,
          isdst: !1,
          text: "(UTC-04:00) Georgetown, La Paz, Manaus, San Juan",
          utc: [
            "America/Anguilla",
            "America/Antigua",
            "America/Aruba",
            "America/Barbados",
            "America/Blanc-Sablon",
            "America/Boa_Vista",
            "America/Curacao",
            "America/Dominica",
            "America/Grand_Turk",
            "America/Grenada",
            "America/Guadeloupe",
            "America/Guyana",
            "America/Kralendijk",
            "America/La_Paz",
            "America/Lower_Princes",
            "America/Manaus",
            "America/Marigot",
            "America/Martinique",
            "America/Montserrat",
            "America/Port_of_Spain",
            "America/Porto_Velho",
            "America/Puerto_Rico",
            "America/Santo_Domingo",
            "America/St_Barthelemy",
            "America/St_Kitts",
            "America/St_Lucia",
            "America/St_Thomas",
            "America/St_Vincent",
            "America/Tortola",
            "Etc/GMT+4"
          ]
        },
        {
          name: "Pacific SA Standard Time",
          abbr: "PSST",
          offset: -4,
          isdst: !1,
          text: "(UTC-04:00) Santiago",
          utc: [
            "America/Santiago",
            "Antarctica/Palmer"
          ]
        },
        {
          name: "Newfoundland Standard Time",
          abbr: "NDT",
          offset: -2.5,
          isdst: !0,
          text: "(UTC-03:30) Newfoundland",
          utc: [
            "America/St_Johns"
          ]
        },
        {
          name: "E. South America Standard Time",
          abbr: "ESAST",
          offset: -3,
          isdst: !1,
          text: "(UTC-03:00) Brasilia",
          utc: [
            "America/Sao_Paulo"
          ]
        },
        {
          name: "Argentina Standard Time",
          abbr: "AST",
          offset: -3,
          isdst: !1,
          text: "(UTC-03:00) Buenos Aires",
          utc: [
            "America/Argentina/La_Rioja",
            "America/Argentina/Rio_Gallegos",
            "America/Argentina/Salta",
            "America/Argentina/San_Juan",
            "America/Argentina/San_Luis",
            "America/Argentina/Tucuman",
            "America/Argentina/Ushuaia",
            "America/Buenos_Aires",
            "America/Catamarca",
            "America/Cordoba",
            "America/Jujuy",
            "America/Mendoza"
          ]
        },
        {
          name: "SA Eastern Standard Time",
          abbr: "SEST",
          offset: -3,
          isdst: !1,
          text: "(UTC-03:00) Cayenne, Fortaleza",
          utc: [
            "America/Araguaina",
            "America/Belem",
            "America/Cayenne",
            "America/Fortaleza",
            "America/Maceio",
            "America/Paramaribo",
            "America/Recife",
            "America/Santarem",
            "Antarctica/Rothera",
            "Atlantic/Stanley",
            "Etc/GMT+3"
          ]
        },
        {
          name: "Greenland Standard Time",
          abbr: "GDT",
          offset: -3,
          isdst: !0,
          text: "(UTC-03:00) Greenland",
          utc: [
            "America/Godthab"
          ]
        },
        {
          name: "Montevideo Standard Time",
          abbr: "MST",
          offset: -3,
          isdst: !1,
          text: "(UTC-03:00) Montevideo",
          utc: [
            "America/Montevideo"
          ]
        },
        {
          name: "Bahia Standard Time",
          abbr: "BST",
          offset: -3,
          isdst: !1,
          text: "(UTC-03:00) Salvador",
          utc: [
            "America/Bahia"
          ]
        },
        {
          name: "UTC-02",
          abbr: "U",
          offset: -2,
          isdst: !1,
          text: "(UTC-02:00) Coordinated Universal Time-02",
          utc: [
            "America/Noronha",
            "Atlantic/South_Georgia",
            "Etc/GMT+2"
          ]
        },
        {
          name: "Mid-Atlantic Standard Time",
          abbr: "MDT",
          offset: -1,
          isdst: !0,
          text: "(UTC-02:00) Mid-Atlantic - Old",
          utc: []
        },
        {
          name: "Azores Standard Time",
          abbr: "ADT",
          offset: 0,
          isdst: !0,
          text: "(UTC-01:00) Azores",
          utc: [
            "America/Scoresbysund",
            "Atlantic/Azores"
          ]
        },
        {
          name: "Cape Verde Standard Time",
          abbr: "CVST",
          offset: -1,
          isdst: !1,
          text: "(UTC-01:00) Cape Verde Is.",
          utc: [
            "Atlantic/Cape_Verde",
            "Etc/GMT+1"
          ]
        },
        {
          name: "Morocco Standard Time",
          abbr: "MDT",
          offset: 1,
          isdst: !0,
          text: "(UTC) Casablanca",
          utc: [
            "Africa/Casablanca",
            "Africa/El_Aaiun"
          ]
        },
        {
          name: "UTC",
          abbr: "UTC",
          offset: 0,
          isdst: !1,
          text: "(UTC) Coordinated Universal Time",
          utc: [
            "America/Danmarkshavn",
            "Etc/GMT"
          ]
        },
        {
          name: "GMT Standard Time",
          abbr: "GMT",
          offset: 0,
          isdst: !1,
          text: "(UTC) Edinburgh, London",
          utc: [
            "Europe/Isle_of_Man",
            "Europe/Guernsey",
            "Europe/Jersey",
            "Europe/London"
          ]
        },
        {
          name: "British Summer Time",
          abbr: "BST",
          offset: 1,
          isdst: !0,
          text: "(UTC+01:00) Edinburgh, London",
          utc: [
            "Europe/Isle_of_Man",
            "Europe/Guernsey",
            "Europe/Jersey",
            "Europe/London"
          ]
        },
        {
          name: "GMT Standard Time",
          abbr: "GDT",
          offset: 1,
          isdst: !0,
          text: "(UTC) Dublin, Lisbon",
          utc: [
            "Atlantic/Canary",
            "Atlantic/Faeroe",
            "Atlantic/Madeira",
            "Europe/Dublin",
            "Europe/Lisbon"
          ]
        },
        {
          name: "Greenwich Standard Time",
          abbr: "GST",
          offset: 0,
          isdst: !1,
          text: "(UTC) Monrovia, Reykjavik",
          utc: [
            "Africa/Abidjan",
            "Africa/Accra",
            "Africa/Bamako",
            "Africa/Banjul",
            "Africa/Bissau",
            "Africa/Conakry",
            "Africa/Dakar",
            "Africa/Freetown",
            "Africa/Lome",
            "Africa/Monrovia",
            "Africa/Nouakchott",
            "Africa/Ouagadougou",
            "Africa/Sao_Tome",
            "Atlantic/Reykjavik",
            "Atlantic/St_Helena"
          ]
        },
        {
          name: "W. Europe Standard Time",
          abbr: "WEDT",
          offset: 2,
          isdst: !0,
          text: "(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna",
          utc: [
            "Arctic/Longyearbyen",
            "Europe/Amsterdam",
            "Europe/Andorra",
            "Europe/Berlin",
            "Europe/Busingen",
            "Europe/Gibraltar",
            "Europe/Luxembourg",
            "Europe/Malta",
            "Europe/Monaco",
            "Europe/Oslo",
            "Europe/Rome",
            "Europe/San_Marino",
            "Europe/Stockholm",
            "Europe/Vaduz",
            "Europe/Vatican",
            "Europe/Vienna",
            "Europe/Zurich"
          ]
        },
        {
          name: "Central Europe Standard Time",
          abbr: "CEDT",
          offset: 2,
          isdst: !0,
          text: "(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague",
          utc: [
            "Europe/Belgrade",
            "Europe/Bratislava",
            "Europe/Budapest",
            "Europe/Ljubljana",
            "Europe/Podgorica",
            "Europe/Prague",
            "Europe/Tirane"
          ]
        },
        {
          name: "Romance Standard Time",
          abbr: "RDT",
          offset: 2,
          isdst: !0,
          text: "(UTC+01:00) Brussels, Copenhagen, Madrid, Paris",
          utc: [
            "Africa/Ceuta",
            "Europe/Brussels",
            "Europe/Copenhagen",
            "Europe/Madrid",
            "Europe/Paris"
          ]
        },
        {
          name: "Central European Standard Time",
          abbr: "CEDT",
          offset: 2,
          isdst: !0,
          text: "(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb",
          utc: [
            "Europe/Sarajevo",
            "Europe/Skopje",
            "Europe/Warsaw",
            "Europe/Zagreb"
          ]
        },
        {
          name: "W. Central Africa Standard Time",
          abbr: "WCAST",
          offset: 1,
          isdst: !1,
          text: "(UTC+01:00) West Central Africa",
          utc: [
            "Africa/Algiers",
            "Africa/Bangui",
            "Africa/Brazzaville",
            "Africa/Douala",
            "Africa/Kinshasa",
            "Africa/Lagos",
            "Africa/Libreville",
            "Africa/Luanda",
            "Africa/Malabo",
            "Africa/Ndjamena",
            "Africa/Niamey",
            "Africa/Porto-Novo",
            "Africa/Tunis",
            "Etc/GMT-1"
          ]
        },
        {
          name: "Namibia Standard Time",
          abbr: "NST",
          offset: 1,
          isdst: !1,
          text: "(UTC+01:00) Windhoek",
          utc: [
            "Africa/Windhoek"
          ]
        },
        {
          name: "GTB Standard Time",
          abbr: "GDT",
          offset: 3,
          isdst: !0,
          text: "(UTC+02:00) Athens, Bucharest",
          utc: [
            "Asia/Nicosia",
            "Europe/Athens",
            "Europe/Bucharest",
            "Europe/Chisinau"
          ]
        },
        {
          name: "Middle East Standard Time",
          abbr: "MEDT",
          offset: 3,
          isdst: !0,
          text: "(UTC+02:00) Beirut",
          utc: [
            "Asia/Beirut"
          ]
        },
        {
          name: "Egypt Standard Time",
          abbr: "EST",
          offset: 2,
          isdst: !1,
          text: "(UTC+02:00) Cairo",
          utc: [
            "Africa/Cairo"
          ]
        },
        {
          name: "Syria Standard Time",
          abbr: "SDT",
          offset: 3,
          isdst: !0,
          text: "(UTC+02:00) Damascus",
          utc: [
            "Asia/Damascus"
          ]
        },
        {
          name: "E. Europe Standard Time",
          abbr: "EEDT",
          offset: 3,
          isdst: !0,
          text: "(UTC+02:00) E. Europe",
          utc: [
            "Asia/Nicosia",
            "Europe/Athens",
            "Europe/Bucharest",
            "Europe/Chisinau",
            "Europe/Helsinki",
            "Europe/Kiev",
            "Europe/Mariehamn",
            "Europe/Nicosia",
            "Europe/Riga",
            "Europe/Sofia",
            "Europe/Tallinn",
            "Europe/Uzhgorod",
            "Europe/Vilnius",
            "Europe/Zaporozhye"
          ]
        },
        {
          name: "South Africa Standard Time",
          abbr: "SAST",
          offset: 2,
          isdst: !1,
          text: "(UTC+02:00) Harare, Pretoria",
          utc: [
            "Africa/Blantyre",
            "Africa/Bujumbura",
            "Africa/Gaborone",
            "Africa/Harare",
            "Africa/Johannesburg",
            "Africa/Kigali",
            "Africa/Lubumbashi",
            "Africa/Lusaka",
            "Africa/Maputo",
            "Africa/Maseru",
            "Africa/Mbabane",
            "Etc/GMT-2"
          ]
        },
        {
          name: "FLE Standard Time",
          abbr: "FDT",
          offset: 3,
          isdst: !0,
          text: "(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius",
          utc: [
            "Europe/Helsinki",
            "Europe/Kiev",
            "Europe/Mariehamn",
            "Europe/Riga",
            "Europe/Sofia",
            "Europe/Tallinn",
            "Europe/Uzhgorod",
            "Europe/Vilnius",
            "Europe/Zaporozhye"
          ]
        },
        {
          name: "Turkey Standard Time",
          abbr: "TDT",
          offset: 3,
          isdst: !1,
          text: "(UTC+03:00) Istanbul",
          utc: [
            "Europe/Istanbul"
          ]
        },
        {
          name: "Israel Standard Time",
          abbr: "JDT",
          offset: 3,
          isdst: !0,
          text: "(UTC+02:00) Jerusalem",
          utc: [
            "Asia/Jerusalem"
          ]
        },
        {
          name: "Libya Standard Time",
          abbr: "LST",
          offset: 2,
          isdst: !1,
          text: "(UTC+02:00) Tripoli",
          utc: [
            "Africa/Tripoli"
          ]
        },
        {
          name: "Jordan Standard Time",
          abbr: "JST",
          offset: 3,
          isdst: !1,
          text: "(UTC+03:00) Amman",
          utc: [
            "Asia/Amman"
          ]
        },
        {
          name: "Arabic Standard Time",
          abbr: "AST",
          offset: 3,
          isdst: !1,
          text: "(UTC+03:00) Baghdad",
          utc: [
            "Asia/Baghdad"
          ]
        },
        {
          name: "Kaliningrad Standard Time",
          abbr: "KST",
          offset: 3,
          isdst: !1,
          text: "(UTC+02:00) Kaliningrad",
          utc: [
            "Europe/Kaliningrad"
          ]
        },
        {
          name: "Arab Standard Time",
          abbr: "AST",
          offset: 3,
          isdst: !1,
          text: "(UTC+03:00) Kuwait, Riyadh",
          utc: [
            "Asia/Aden",
            "Asia/Bahrain",
            "Asia/Kuwait",
            "Asia/Qatar",
            "Asia/Riyadh"
          ]
        },
        {
          name: "E. Africa Standard Time",
          abbr: "EAST",
          offset: 3,
          isdst: !1,
          text: "(UTC+03:00) Nairobi",
          utc: [
            "Africa/Addis_Ababa",
            "Africa/Asmera",
            "Africa/Dar_es_Salaam",
            "Africa/Djibouti",
            "Africa/Juba",
            "Africa/Kampala",
            "Africa/Khartoum",
            "Africa/Mogadishu",
            "Africa/Nairobi",
            "Antarctica/Syowa",
            "Etc/GMT-3",
            "Indian/Antananarivo",
            "Indian/Comoro",
            "Indian/Mayotte"
          ]
        },
        {
          name: "Moscow Standard Time",
          abbr: "MSK",
          offset: 3,
          isdst: !1,
          text: "(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk",
          utc: [
            "Europe/Kirov",
            "Europe/Moscow",
            "Europe/Simferopol",
            "Europe/Volgograd",
            "Europe/Minsk"
          ]
        },
        {
          name: "Samara Time",
          abbr: "SAMT",
          offset: 4,
          isdst: !1,
          text: "(UTC+04:00) Samara, Ulyanovsk, Saratov",
          utc: [
            "Europe/Astrakhan",
            "Europe/Samara",
            "Europe/Ulyanovsk"
          ]
        },
        {
          name: "Iran Standard Time",
          abbr: "IDT",
          offset: 4.5,
          isdst: !0,
          text: "(UTC+03:30) Tehran",
          utc: [
            "Asia/Tehran"
          ]
        },
        {
          name: "Arabian Standard Time",
          abbr: "AST",
          offset: 4,
          isdst: !1,
          text: "(UTC+04:00) Abu Dhabi, Muscat",
          utc: [
            "Asia/Dubai",
            "Asia/Muscat",
            "Etc/GMT-4"
          ]
        },
        {
          name: "Azerbaijan Standard Time",
          abbr: "ADT",
          offset: 5,
          isdst: !0,
          text: "(UTC+04:00) Baku",
          utc: [
            "Asia/Baku"
          ]
        },
        {
          name: "Mauritius Standard Time",
          abbr: "MST",
          offset: 4,
          isdst: !1,
          text: "(UTC+04:00) Port Louis",
          utc: [
            "Indian/Mahe",
            "Indian/Mauritius",
            "Indian/Reunion"
          ]
        },
        {
          name: "Georgian Standard Time",
          abbr: "GET",
          offset: 4,
          isdst: !1,
          text: "(UTC+04:00) Tbilisi",
          utc: [
            "Asia/Tbilisi"
          ]
        },
        {
          name: "Caucasus Standard Time",
          abbr: "CST",
          offset: 4,
          isdst: !1,
          text: "(UTC+04:00) Yerevan",
          utc: [
            "Asia/Yerevan"
          ]
        },
        {
          name: "Afghanistan Standard Time",
          abbr: "AST",
          offset: 4.5,
          isdst: !1,
          text: "(UTC+04:30) Kabul",
          utc: [
            "Asia/Kabul"
          ]
        },
        {
          name: "West Asia Standard Time",
          abbr: "WAST",
          offset: 5,
          isdst: !1,
          text: "(UTC+05:00) Ashgabat, Tashkent",
          utc: [
            "Antarctica/Mawson",
            "Asia/Aqtau",
            "Asia/Aqtobe",
            "Asia/Ashgabat",
            "Asia/Dushanbe",
            "Asia/Oral",
            "Asia/Samarkand",
            "Asia/Tashkent",
            "Etc/GMT-5",
            "Indian/Kerguelen",
            "Indian/Maldives"
          ]
        },
        {
          name: "Yekaterinburg Time",
          abbr: "YEKT",
          offset: 5,
          isdst: !1,
          text: "(UTC+05:00) Yekaterinburg",
          utc: [
            "Asia/Yekaterinburg"
          ]
        },
        {
          name: "Pakistan Standard Time",
          abbr: "PKT",
          offset: 5,
          isdst: !1,
          text: "(UTC+05:00) Islamabad, Karachi",
          utc: [
            "Asia/Karachi"
          ]
        },
        {
          name: "India Standard Time",
          abbr: "IST",
          offset: 5.5,
          isdst: !1,
          text: "(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi",
          utc: [
            "Asia/Kolkata"
          ]
        },
        {
          name: "Sri Lanka Standard Time",
          abbr: "SLST",
          offset: 5.5,
          isdst: !1,
          text: "(UTC+05:30) Sri Jayawardenepura",
          utc: [
            "Asia/Colombo"
          ]
        },
        {
          name: "Nepal Standard Time",
          abbr: "NST",
          offset: 5.75,
          isdst: !1,
          text: "(UTC+05:45) Kathmandu",
          utc: [
            "Asia/Kathmandu"
          ]
        },
        {
          name: "Central Asia Standard Time",
          abbr: "CAST",
          offset: 6,
          isdst: !1,
          text: "(UTC+06:00) Nur-Sultan (Astana)",
          utc: [
            "Antarctica/Vostok",
            "Asia/Almaty",
            "Asia/Bishkek",
            "Asia/Qyzylorda",
            "Asia/Urumqi",
            "Etc/GMT-6",
            "Indian/Chagos"
          ]
        },
        {
          name: "Bangladesh Standard Time",
          abbr: "BST",
          offset: 6,
          isdst: !1,
          text: "(UTC+06:00) Dhaka",
          utc: [
            "Asia/Dhaka",
            "Asia/Thimphu"
          ]
        },
        {
          name: "Myanmar Standard Time",
          abbr: "MST",
          offset: 6.5,
          isdst: !1,
          text: "(UTC+06:30) Yangon (Rangoon)",
          utc: [
            "Asia/Rangoon",
            "Indian/Cocos"
          ]
        },
        {
          name: "SE Asia Standard Time",
          abbr: "SAST",
          offset: 7,
          isdst: !1,
          text: "(UTC+07:00) Bangkok, Hanoi, Jakarta",
          utc: [
            "Antarctica/Davis",
            "Asia/Bangkok",
            "Asia/Hovd",
            "Asia/Jakarta",
            "Asia/Phnom_Penh",
            "Asia/Pontianak",
            "Asia/Saigon",
            "Asia/Vientiane",
            "Etc/GMT-7",
            "Indian/Christmas"
          ]
        },
        {
          name: "N. Central Asia Standard Time",
          abbr: "NCAST",
          offset: 7,
          isdst: !1,
          text: "(UTC+07:00) Novosibirsk",
          utc: [
            "Asia/Novokuznetsk",
            "Asia/Novosibirsk",
            "Asia/Omsk"
          ]
        },
        {
          name: "China Standard Time",
          abbr: "CST",
          offset: 8,
          isdst: !1,
          text: "(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi",
          utc: [
            "Asia/Hong_Kong",
            "Asia/Macau",
            "Asia/Shanghai"
          ]
        },
        {
          name: "North Asia Standard Time",
          abbr: "NAST",
          offset: 8,
          isdst: !1,
          text: "(UTC+08:00) Krasnoyarsk",
          utc: [
            "Asia/Krasnoyarsk"
          ]
        },
        {
          name: "Singapore Standard Time",
          abbr: "MPST",
          offset: 8,
          isdst: !1,
          text: "(UTC+08:00) Kuala Lumpur, Singapore",
          utc: [
            "Asia/Brunei",
            "Asia/Kuala_Lumpur",
            "Asia/Kuching",
            "Asia/Makassar",
            "Asia/Manila",
            "Asia/Singapore",
            "Etc/GMT-8"
          ]
        },
        {
          name: "W. Australia Standard Time",
          abbr: "WAST",
          offset: 8,
          isdst: !1,
          text: "(UTC+08:00) Perth",
          utc: [
            "Antarctica/Casey",
            "Australia/Perth"
          ]
        },
        {
          name: "Taipei Standard Time",
          abbr: "TST",
          offset: 8,
          isdst: !1,
          text: "(UTC+08:00) Taipei",
          utc: [
            "Asia/Taipei"
          ]
        },
        {
          name: "Ulaanbaatar Standard Time",
          abbr: "UST",
          offset: 8,
          isdst: !1,
          text: "(UTC+08:00) Ulaanbaatar",
          utc: [
            "Asia/Choibalsan",
            "Asia/Ulaanbaatar"
          ]
        },
        {
          name: "North Asia East Standard Time",
          abbr: "NAEST",
          offset: 8,
          isdst: !1,
          text: "(UTC+08:00) Irkutsk",
          utc: [
            "Asia/Irkutsk"
          ]
        },
        {
          name: "Japan Standard Time",
          abbr: "JST",
          offset: 9,
          isdst: !1,
          text: "(UTC+09:00) Osaka, Sapporo, Tokyo",
          utc: [
            "Asia/Dili",
            "Asia/Jayapura",
            "Asia/Tokyo",
            "Etc/GMT-9",
            "Pacific/Palau"
          ]
        },
        {
          name: "Korea Standard Time",
          abbr: "KST",
          offset: 9,
          isdst: !1,
          text: "(UTC+09:00) Seoul",
          utc: [
            "Asia/Pyongyang",
            "Asia/Seoul"
          ]
        },
        {
          name: "Cen. Australia Standard Time",
          abbr: "CAST",
          offset: 9.5,
          isdst: !1,
          text: "(UTC+09:30) Adelaide",
          utc: [
            "Australia/Adelaide",
            "Australia/Broken_Hill"
          ]
        },
        {
          name: "AUS Central Standard Time",
          abbr: "ACST",
          offset: 9.5,
          isdst: !1,
          text: "(UTC+09:30) Darwin",
          utc: [
            "Australia/Darwin"
          ]
        },
        {
          name: "E. Australia Standard Time",
          abbr: "EAST",
          offset: 10,
          isdst: !1,
          text: "(UTC+10:00) Brisbane",
          utc: [
            "Australia/Brisbane",
            "Australia/Lindeman"
          ]
        },
        {
          name: "AUS Eastern Standard Time",
          abbr: "AEST",
          offset: 10,
          isdst: !1,
          text: "(UTC+10:00) Canberra, Melbourne, Sydney",
          utc: [
            "Australia/Melbourne",
            "Australia/Sydney"
          ]
        },
        {
          name: "West Pacific Standard Time",
          abbr: "WPST",
          offset: 10,
          isdst: !1,
          text: "(UTC+10:00) Guam, Port Moresby",
          utc: [
            "Antarctica/DumontDUrville",
            "Etc/GMT-10",
            "Pacific/Guam",
            "Pacific/Port_Moresby",
            "Pacific/Saipan",
            "Pacific/Truk"
          ]
        },
        {
          name: "Tasmania Standard Time",
          abbr: "TST",
          offset: 10,
          isdst: !1,
          text: "(UTC+10:00) Hobart",
          utc: [
            "Australia/Currie",
            "Australia/Hobart"
          ]
        },
        {
          name: "Yakutsk Standard Time",
          abbr: "YST",
          offset: 9,
          isdst: !1,
          text: "(UTC+09:00) Yakutsk",
          utc: [
            "Asia/Chita",
            "Asia/Khandyga",
            "Asia/Yakutsk"
          ]
        },
        {
          name: "Central Pacific Standard Time",
          abbr: "CPST",
          offset: 11,
          isdst: !1,
          text: "(UTC+11:00) Solomon Is., New Caledonia",
          utc: [
            "Antarctica/Macquarie",
            "Etc/GMT-11",
            "Pacific/Efate",
            "Pacific/Guadalcanal",
            "Pacific/Kosrae",
            "Pacific/Noumea",
            "Pacific/Ponape"
          ]
        },
        {
          name: "Vladivostok Standard Time",
          abbr: "VST",
          offset: 11,
          isdst: !1,
          text: "(UTC+11:00) Vladivostok",
          utc: [
            "Asia/Sakhalin",
            "Asia/Ust-Nera",
            "Asia/Vladivostok"
          ]
        },
        {
          name: "New Zealand Standard Time",
          abbr: "NZST",
          offset: 12,
          isdst: !1,
          text: "(UTC+12:00) Auckland, Wellington",
          utc: [
            "Antarctica/McMurdo",
            "Pacific/Auckland"
          ]
        },
        {
          name: "UTC+12",
          abbr: "U",
          offset: 12,
          isdst: !1,
          text: "(UTC+12:00) Coordinated Universal Time+12",
          utc: [
            "Etc/GMT-12",
            "Pacific/Funafuti",
            "Pacific/Kwajalein",
            "Pacific/Majuro",
            "Pacific/Nauru",
            "Pacific/Tarawa",
            "Pacific/Wake",
            "Pacific/Wallis"
          ]
        },
        {
          name: "Fiji Standard Time",
          abbr: "FST",
          offset: 12,
          isdst: !1,
          text: "(UTC+12:00) Fiji",
          utc: [
            "Pacific/Fiji"
          ]
        },
        {
          name: "Magadan Standard Time",
          abbr: "MST",
          offset: 12,
          isdst: !1,
          text: "(UTC+12:00) Magadan",
          utc: [
            "Asia/Anadyr",
            "Asia/Kamchatka",
            "Asia/Magadan",
            "Asia/Srednekolymsk"
          ]
        },
        {
          name: "Kamchatka Standard Time",
          abbr: "KDT",
          offset: 13,
          isdst: !0,
          text: "(UTC+12:00) Petropavlovsk-Kamchatsky - Old",
          utc: [
            "Asia/Kamchatka"
          ]
        },
        {
          name: "Tonga Standard Time",
          abbr: "TST",
          offset: 13,
          isdst: !1,
          text: "(UTC+13:00) Nuku'alofa",
          utc: [
            "Etc/GMT-13",
            "Pacific/Enderbury",
            "Pacific/Fakaofo",
            "Pacific/Tongatapu"
          ]
        },
        {
          name: "Samoa Standard Time",
          abbr: "SST",
          offset: 13,
          isdst: !1,
          text: "(UTC+13:00) Samoa",
          utc: [
            "Pacific/Apia"
          ]
        }
      ],
      //List source: http://answers.google.com/answers/threadview/id/589312.html
      profession: [
        "Airline Pilot",
        "Academic Team",
        "Accountant",
        "Account Executive",
        "Actor",
        "Actuary",
        "Acquisition Analyst",
        "Administrative Asst.",
        "Administrative Analyst",
        "Administrator",
        "Advertising Director",
        "Aerospace Engineer",
        "Agent",
        "Agricultural Inspector",
        "Agricultural Scientist",
        "Air Traffic Controller",
        "Animal Trainer",
        "Anthropologist",
        "Appraiser",
        "Architect",
        "Art Director",
        "Artist",
        "Astronomer",
        "Athletic Coach",
        "Auditor",
        "Author",
        "Baker",
        "Banker",
        "Bankruptcy Attorney",
        "Benefits Manager",
        "Biologist",
        "Bio-feedback Specialist",
        "Biomedical Engineer",
        "Biotechnical Researcher",
        "Broadcaster",
        "Broker",
        "Building Manager",
        "Building Contractor",
        "Building Inspector",
        "Business Analyst",
        "Business Planner",
        "Business Manager",
        "Buyer",
        "Call Center Manager",
        "Career Counselor",
        "Cash Manager",
        "Ceramic Engineer",
        "Chief Executive Officer",
        "Chief Operation Officer",
        "Chef",
        "Chemical Engineer",
        "Chemist",
        "Child Care Manager",
        "Chief Medical Officer",
        "Chiropractor",
        "Cinematographer",
        "City Housing Manager",
        "City Manager",
        "Civil Engineer",
        "Claims Manager",
        "Clinical Research Assistant",
        "Collections Manager",
        "Compliance Manager",
        "Comptroller",
        "Computer Manager",
        "Commercial Artist",
        "Communications Affairs Director",
        "Communications Director",
        "Communications Engineer",
        "Compensation Analyst",
        "Computer Programmer",
        "Computer Ops. Manager",
        "Computer Engineer",
        "Computer Operator",
        "Computer Graphics Specialist",
        "Construction Engineer",
        "Construction Manager",
        "Consultant",
        "Consumer Relations Manager",
        "Contract Administrator",
        "Copyright Attorney",
        "Copywriter",
        "Corporate Planner",
        "Corrections Officer",
        "Cosmetologist",
        "Credit Analyst",
        "Cruise Director",
        "Chief Information Officer",
        "Chief Technology Officer",
        "Customer Service Manager",
        "Cryptologist",
        "Dancer",
        "Data Security Manager",
        "Database Manager",
        "Day Care Instructor",
        "Dentist",
        "Designer",
        "Design Engineer",
        "Desktop Publisher",
        "Developer",
        "Development Officer",
        "Diamond Merchant",
        "Dietitian",
        "Direct Marketer",
        "Director",
        "Distribution Manager",
        "Diversity Manager",
        "Economist",
        "EEO Compliance Manager",
        "Editor",
        "Education Adminator",
        "Electrical Engineer",
        "Electro Optical Engineer",
        "Electronics Engineer",
        "Embassy Management",
        "Employment Agent",
        "Engineer Technician",
        "Entrepreneur",
        "Environmental Analyst",
        "Environmental Attorney",
        "Environmental Engineer",
        "Environmental Specialist",
        "Escrow Officer",
        "Estimator",
        "Executive Assistant",
        "Executive Director",
        "Executive Recruiter",
        "Facilities Manager",
        "Family Counselor",
        "Fashion Events Manager",
        "Fashion Merchandiser",
        "Fast Food Manager",
        "Film Producer",
        "Film Production Assistant",
        "Financial Analyst",
        "Financial Planner",
        "Financier",
        "Fine Artist",
        "Wildlife Specialist",
        "Fitness Consultant",
        "Flight Attendant",
        "Flight Engineer",
        "Floral Designer",
        "Food & Beverage Director",
        "Food Service Manager",
        "Forestry Technician",
        "Franchise Management",
        "Franchise Sales",
        "Fraud Investigator",
        "Freelance Writer",
        "Fund Raiser",
        "General Manager",
        "Geologist",
        "General Counsel",
        "Geriatric Specialist",
        "Gerontologist",
        "Glamour Photographer",
        "Golf Club Manager",
        "Gourmet Chef",
        "Graphic Designer",
        "Grounds Keeper",
        "Hazardous Waste Manager",
        "Health Care Manager",
        "Health Therapist",
        "Health Service Administrator",
        "Hearing Officer",
        "Home Economist",
        "Horticulturist",
        "Hospital Administrator",
        "Hotel Manager",
        "Human Resources Manager",
        "Importer",
        "Industrial Designer",
        "Industrial Engineer",
        "Information Director",
        "Inside Sales",
        "Insurance Adjuster",
        "Interior Decorator",
        "Internal Controls Director",
        "International Acct.",
        "International Courier",
        "International Lawyer",
        "Interpreter",
        "Investigator",
        "Investment Banker",
        "Investment Manager",
        "IT Architect",
        "IT Project Manager",
        "IT Systems Analyst",
        "Jeweler",
        "Joint Venture Manager",
        "Journalist",
        "Labor Negotiator",
        "Labor Organizer",
        "Labor Relations Manager",
        "Lab Services Director",
        "Lab Technician",
        "Land Developer",
        "Landscape Architect",
        "Law Enforcement Officer",
        "Lawyer",
        "Lead Software Engineer",
        "Lead Software Test Engineer",
        "Leasing Manager",
        "Legal Secretary",
        "Library Manager",
        "Litigation Attorney",
        "Loan Officer",
        "Lobbyist",
        "Logistics Manager",
        "Maintenance Manager",
        "Management Consultant",
        "Managed Care Director",
        "Managing Partner",
        "Manufacturing Director",
        "Manpower Planner",
        "Marine Biologist",
        "Market Res. Analyst",
        "Marketing Director",
        "Materials Manager",
        "Mathematician",
        "Membership Chairman",
        "Mechanic",
        "Mechanical Engineer",
        "Media Buyer",
        "Medical Investor",
        "Medical Secretary",
        "Medical Technician",
        "Mental Health Counselor",
        "Merchandiser",
        "Metallurgical Engineering",
        "Meteorologist",
        "Microbiologist",
        "MIS Manager",
        "Motion Picture Director",
        "Multimedia Director",
        "Musician",
        "Network Administrator",
        "Network Specialist",
        "Network Operator",
        "New Product Manager",
        "Novelist",
        "Nuclear Engineer",
        "Nuclear Specialist",
        "Nutritionist",
        "Nursing Administrator",
        "Occupational Therapist",
        "Oceanographer",
        "Office Manager",
        "Operations Manager",
        "Operations Research Director",
        "Optical Technician",
        "Optometrist",
        "Organizational Development Manager",
        "Outplacement Specialist",
        "Paralegal",
        "Park Ranger",
        "Patent Attorney",
        "Payroll Specialist",
        "Personnel Specialist",
        "Petroleum Engineer",
        "Pharmacist",
        "Photographer",
        "Physical Therapist",
        "Physician",
        "Physician Assistant",
        "Physicist",
        "Planning Director",
        "Podiatrist",
        "Political Analyst",
        "Political Scientist",
        "Politician",
        "Portfolio Manager",
        "Preschool Management",
        "Preschool Teacher",
        "Principal",
        "Private Banker",
        "Private Investigator",
        "Probation Officer",
        "Process Engineer",
        "Producer",
        "Product Manager",
        "Product Engineer",
        "Production Engineer",
        "Production Planner",
        "Professional Athlete",
        "Professional Coach",
        "Professor",
        "Project Engineer",
        "Project Manager",
        "Program Manager",
        "Property Manager",
        "Public Administrator",
        "Public Safety Director",
        "PR Specialist",
        "Publisher",
        "Purchasing Agent",
        "Publishing Director",
        "Quality Assurance Specialist",
        "Quality Control Engineer",
        "Quality Control Inspector",
        "Radiology Manager",
        "Railroad Engineer",
        "Real Estate Broker",
        "Recreational Director",
        "Recruiter",
        "Redevelopment Specialist",
        "Regulatory Affairs Manager",
        "Registered Nurse",
        "Rehabilitation Counselor",
        "Relocation Manager",
        "Reporter",
        "Research Specialist",
        "Restaurant Manager",
        "Retail Store Manager",
        "Risk Analyst",
        "Safety Engineer",
        "Sales Engineer",
        "Sales Trainer",
        "Sales Promotion Manager",
        "Sales Representative",
        "Sales Manager",
        "Service Manager",
        "Sanitation Engineer",
        "Scientific Programmer",
        "Scientific Writer",
        "Securities Analyst",
        "Security Consultant",
        "Security Director",
        "Seminar Presenter",
        "Ship's Officer",
        "Singer",
        "Social Director",
        "Social Program Planner",
        "Social Research",
        "Social Scientist",
        "Social Worker",
        "Sociologist",
        "Software Developer",
        "Software Engineer",
        "Software Test Engineer",
        "Soil Scientist",
        "Special Events Manager",
        "Special Education Teacher",
        "Special Projects Director",
        "Speech Pathologist",
        "Speech Writer",
        "Sports Event Manager",
        "Statistician",
        "Store Manager",
        "Strategic Alliance Director",
        "Strategic Planning Director",
        "Stress Reduction Specialist",
        "Stockbroker",
        "Surveyor",
        "Structural Engineer",
        "Superintendent",
        "Supply Chain Director",
        "System Engineer",
        "Systems Analyst",
        "Systems Programmer",
        "System Administrator",
        "Tax Specialist",
        "Teacher",
        "Technical Support Specialist",
        "Technical Illustrator",
        "Technical Writer",
        "Technology Director",
        "Telecom Analyst",
        "Telemarketer",
        "Theatrical Director",
        "Title Examiner",
        "Tour Escort",
        "Tour Guide Director",
        "Traffic Manager",
        "Trainer Translator",
        "Transportation Manager",
        "Travel Agent",
        "Treasurer",
        "TV Programmer",
        "Underwriter",
        "Union Representative",
        "University Administrator",
        "University Dean",
        "Urban Planner",
        "Veterinarian",
        "Vendor Relations Director",
        "Viticulturist",
        "Warehouse Manager"
      ],
      animals: {
        //list of ocean animals comes from https://owlcation.com/stem/list-of-ocean-animals
        ocean: ["Acantharea", "Anemone", "Angelfish King", "Ahi Tuna", "Albacore", "American Oyster", "Anchovy", "Armored Snail", "Arctic Char", "Atlantic Bluefin Tuna", "Atlantic Cod", "Atlantic Goliath Grouper", "Atlantic Trumpetfish", "Atlantic Wolffish", "Baleen Whale", "Banded Butterflyfish", "Banded Coral Shrimp", "Banded Sea Krait", "Barnacle", "Barndoor Skate", "Barracuda", "Basking Shark", "Bass", "Beluga Whale", "Bluebanded Goby", "Bluehead Wrasse", "Bluefish", "Bluestreak Cleaner-Wrasse", "Blue Marlin", "Blue Shark", "Blue Spiny Lobster", "Blue Tang", "Blue Whale", "Broadclub Cuttlefish", "Bull Shark", "Chambered Nautilus", "Chilean Basket Star", "Chilean Jack Mackerel", "Chinook Salmon", "Christmas Tree Worm", "Clam", "Clown Anemonefish", "Clown Triggerfish", "Cod", "Coelacanth", "Cockscomb Cup Coral", "Common Fangtooth", "Conch", "Cookiecutter Shark", "Copepod", "Coral", "Corydoras", "Cownose Ray", "Crab", "Crown-of-Thorns Starfish", "Cushion Star", "Cuttlefish", "California Sea Otters", "Dolphin", "Dolphinfish", "Dory", "Devil Fish", "Dugong", "Dumbo Octopus", "Dungeness Crab", "Eccentric Sand Dollar", "Edible Sea Cucumber", "Eel", "Elephant Seal", "Elkhorn Coral", "Emperor Shrimp", "Estuarine Crocodile", "Fathead Sculpin", "Fiddler Crab", "Fin Whale", "Flameback", "Flamingo Tongue Snail", "Flashlight Fish", "Flatback Turtle", "Flatfish", "Flying Fish", "Flounder", "Fluke", "French Angelfish", "Frilled Shark", "Fugu (also called Pufferfish)", "Gar", "Geoduck", "Giant Barrel Sponge", "Giant Caribbean Sea Anemone", "Giant Clam", "Giant Isopod", "Giant Kingfish", "Giant Oarfish", "Giant Pacific Octopus", "Giant Pyrosome", "Giant Sea Star", "Giant Squid", "Glowing Sucker Octopus", "Giant Tube Worm", "Goblin Shark", "Goosefish", "Great White Shark", "Greenland Shark", "Grey Atlantic Seal", "Grouper", "Grunion", "Guineafowl Puffer", "Haddock", "Hake", "Halibut", "Hammerhead Shark", "Hapuka", "Harbor Porpoise", "Harbor Seal", "Hatchetfish", "Hawaiian Monk Seal", "Hawksbill Turtle", "Hector's Dolphin", "Hermit Crab", "Herring", "Hoki", "Horn Shark", "Horseshoe Crab", "Humpback Anglerfish", "Humpback Whale", "Icefish", "Imperator Angelfish", "Irukandji Jellyfish", "Isopod", "Ivory Bush Coral", "Japanese Spider Crab", "Jellyfish", "John Dory", "Juan Fernandez Fur Seal", "Killer Whale", "Kiwa Hirsuta", "Krill", "Lagoon Triggerfish", "Lamprey", "Leafy Seadragon", "Leopard Seal", "Limpet", "Ling", "Lionfish", "Lions Mane Jellyfish", "Lobe Coral", "Lobster", "Loggerhead Turtle", "Longnose Sawshark", "Longsnout Seahorse", "Lophelia Coral", "Marrus Orthocanna", "Manatee", "Manta Ray", "Marlin", "Megamouth Shark", "Mexican Lookdown", "Mimic Octopus", "Moon Jelly", "Mollusk", "Monkfish", "Moray Eel", "Mullet", "Mussel", "Megaladon", "Napoleon Wrasse", "Nassau Grouper", "Narwhal", "Nautilus", "Needlefish", "Northern Seahorse", "North Atlantic Right Whale", "Northern Red Snapper", "Norway Lobster", "Nudibranch", "Nurse Shark", "Oarfish", "Ocean Sunfish", "Oceanic Whitetip Shark", "Octopus", "Olive Sea Snake", "Orange Roughy", "Ostracod", "Otter", "Oyster", "Pacific Angelshark", "Pacific Blackdragon", "Pacific Halibut", "Pacific Sardine", "Pacific Sea Nettle Jellyfish", "Pacific White Sided Dolphin", "Pantropical Spotted Dolphin", "Patagonian Toothfish", "Peacock Mantis Shrimp", "Pelagic Thresher Shark", "Penguin", "Peruvian Anchoveta", "Pilchard", "Pink Salmon", "Pinniped", "Plankton", "Porpoise", "Polar Bear", "Portuguese Man o' War", "Pycnogonid Sea Spider", "Quahog", "Queen Angelfish", "Queen Conch", "Queen Parrotfish", "Queensland Grouper", "Ragfish", "Ratfish", "Rattail Fish", "Ray", "Red Drum", "Red King Crab", "Ringed Seal", "Risso's Dolphin", "Ross Seals", "Sablefish", "Salmon", "Sand Dollar", "Sandbar Shark", "Sawfish", "Sarcastic Fringehead", "Scalloped Hammerhead Shark", "Seahorse", "Sea Cucumber", "Sea Lion", "Sea Urchin", "Seal", "Shark", "Shortfin Mako Shark", "Shovelnose Guitarfish", "Shrimp", "Silverside Fish", "Skipjack Tuna", "Slender Snipe Eel", "Smalltooth Sawfish", "Smelts", "Sockeye Salmon", "Southern Stingray", "Sponge", "Spotted Porcupinefish", "Spotted Dolphin", "Spotted Eagle Ray", "Spotted Moray", "Squid", "Squidworm", "Starfish", "Stickleback", "Stonefish", "Stoplight Loosejaw", "Sturgeon", "Swordfish", "Tan Bristlemouth", "Tasseled Wobbegong", "Terrible Claw Lobster", "Threespot Damselfish", "Tiger Prawn", "Tiger Shark", "Tilefish", "Toadfish", "Tropical Two-Wing Flyfish", "Tuna", "Umbrella Squid", "Velvet Crab", "Venus Flytrap Sea Anemone", "Vigtorniella Worm", "Viperfish", "Vampire Squid", "Vaquita", "Wahoo", "Walrus", "West Indian Manatee", "Whale", "Whale Shark", "Whiptail Gulper", "White-Beaked Dolphin", "White-Ring Garden Eel", "White Shrimp", "Wobbegong", "Wrasse", "Wreckfish", "Xiphosura", "Yellowtail Damselfish", "Yelloweye Rockfish", "Yellow Cup Black Coral", "Yellow Tube Sponge", "Yellowfin Tuna", "Zebrashark", "Zooplankton"],
        //list of desert, grassland, and forest animals comes from http://www.skyenimals.com/
        desert: ["Aardwolf", "Addax", "African Wild Ass", "Ant", "Antelope", "Armadillo", "Baboon", "Badger", "Bat", "Bearded Dragon", "Beetle", "Bird", "Black-footed Cat", "Boa", "Brown Bear", "Bustard", "Butterfly", "Camel", "Caracal", "Caracara", "Caterpillar", "Centipede", "Cheetah", "Chipmunk", "Chuckwalla", "Climbing Mouse", "Coati", "Cobra", "Cotton Rat", "Cougar", "Courser", "Crane Fly", "Crow", "Dassie Rat", "Dove", "Dunnart", "Eagle", "Echidna", "Elephant", "Emu", "Falcon", "Fly", "Fox", "Frogmouth", "Gecko", "Geoffroy's Cat", "Gerbil", "Grasshopper", "Guanaco", "Gundi", "Hamster", "Hawk", "Hedgehog", "Hyena", "Hyrax", "Jackal", "Kangaroo", "Kangaroo Rat", "Kestrel", "Kowari", "Kultarr", "Leopard", "Lion", "Macaw", "Meerkat", "Mouse", "Oryx", "Ostrich", "Owl", "Pronghorn", "Python", "Rabbit", "Raccoon", "Rattlesnake", "Rhinoceros", "Sand Cat", "Spectacled Bear", "Spiny Mouse", "Starling", "Stick Bug", "Tarantula", "Tit", "Toad", "Tortoise", "Tyrant Flycatcher", "Viper", "Vulture", "Waxwing", "Xerus", "Zebra"],
        grassland: ["Aardvark", "Aardwolf", "Accentor", "African Buffalo", "African Wild Dog", "Alpaca", "Anaconda", "Ant", "Anteater", "Antelope", "Armadillo", "Baboon", "Badger", "Bandicoot", "Barbet", "Bat", "Bee", "Bee-eater", "Beetle", "Bird", "Bison", "Black-footed Cat", "Black-footed Ferret", "Bluebird", "Boa", "Bowerbird", "Brown Bear", "Bush Dog", "Bushshrike", "Bustard", "Butterfly", "Buzzard", "Caracal", "Caracara", "Cardinal", "Caterpillar", "Cheetah", "Chipmunk", "Civet", "Climbing Mouse", "Clouded Leopard", "Coati", "Cobra", "Cockatoo", "Cockroach", "Common Genet", "Cotton Rat", "Cougar", "Courser", "Coyote", "Crane", "Crane Fly", "Cricket", "Crow", "Culpeo", "Death Adder", "Deer", "Deer Mouse", "Dingo", "Dinosaur", "Dove", "Drongo", "Duck", "Duiker", "Dunnart", "Eagle", "Echidna", "Elephant", "Elk", "Emu", "Falcon", "Finch", "Flea", "Fly", "Flying Frog", "Fox", "Frog", "Frogmouth", "Garter Snake", "Gazelle", "Gecko", "Geoffroy's Cat", "Gerbil", "Giant Tortoise", "Giraffe", "Grasshopper", "Grison", "Groundhog", "Grouse", "Guanaco", "Guinea Pig", "Hamster", "Harrier", "Hartebeest", "Hawk", "Hedgehog", "Helmetshrike", "Hippopotamus", "Hornbill", "Hyena", "Hyrax", "Impala", "Jackal", "Jaguar", "Jaguarundi", "Kangaroo", "Kangaroo Rat", "Kestrel", "Kultarr", "Ladybug", "Leopard", "Lion", "Macaw", "Meerkat", "Mouse", "Newt", "Oryx", "Ostrich", "Owl", "Pangolin", "Pheasant", "Prairie Dog", "Pronghorn", "Przewalski's Horse", "Python", "Quoll", "Rabbit", "Raven", "Rhinoceros", "Shelduck", "Sloth Bear", "Spectacled Bear", "Squirrel", "Starling", "Stick Bug", "Tamandua", "Tasmanian Devil", "Thornbill", "Thrush", "Toad", "Tortoise"],
        forest: ["Agouti", "Anaconda", "Anoa", "Ant", "Anteater", "Antelope", "Armadillo", "Asian Black Bear", "Aye-aye", "Babirusa", "Baboon", "Badger", "Bandicoot", "Banteng", "Barbet", "Basilisk", "Bat", "Bearded Dragon", "Bee", "Bee-eater", "Beetle", "Bettong", "Binturong", "Bird-of-paradise", "Bongo", "Bowerbird", "Bulbul", "Bush Dog", "Bushbaby", "Bushshrike", "Butterfly", "Buzzard", "Caecilian", "Cardinal", "Cassowary", "Caterpillar", "Centipede", "Chameleon", "Chimpanzee", "Cicada", "Civet", "Clouded Leopard", "Coati", "Cobra", "Cockatoo", "Cockroach", "Colugo", "Cotinga", "Cotton Rat", "Cougar", "Crane Fly", "Cricket", "Crocodile", "Crow", "Cuckoo", "Cuscus", "Death Adder", "Deer", "Dhole", "Dingo", "Dinosaur", "Drongo", "Duck", "Duiker", "Eagle", "Echidna", "Elephant", "Finch", "Flat-headed Cat", "Flea", "Flowerpecker", "Fly", "Flying Frog", "Fossa", "Frog", "Frogmouth", "Gaur", "Gecko", "Gorilla", "Grison", "Hawaiian Honeycreeper", "Hawk", "Hedgehog", "Helmetshrike", "Hornbill", "Hyrax", "Iguana", "Jackal", "Jaguar", "Jaguarundi", "Kestrel", "Ladybug", "Lemur", "Leopard", "Lion", "Macaw", "Mandrill", "Margay", "Monkey", "Mouse", "Mouse Deer", "Newt", "Okapi", "Old World Flycatcher", "Orangutan", "Owl", "Pangolin", "Peafowl", "Pheasant", "Possum", "Python", "Quokka", "Rabbit", "Raccoon", "Red Panda", "Red River Hog", "Rhinoceros", "Sloth Bear", "Spectacled Bear", "Squirrel", "Starling", "Stick Bug", "Sun Bear", "Tamandua", "Tamarin", "Tapir", "Tarantula", "Thrush", "Tiger", "Tit", "Toad", "Tortoise", "Toucan", "Trogon", "Trumpeter", "Turaco", "Turtle", "Tyrant Flycatcher", "Viper", "Vulture", "Wallaby", "Warbler", "Wasp", "Waxwing", "Weaver", "Weaver-finch", "Whistler", "White-eye", "Whydah", "Woodswallow", "Worm", "Wren", "Xenops", "Yellowjacket", "Accentor", "African Buffalo", "American Black Bear", "Anole", "Bird", "Bison", "Boa", "Brown Bear", "Chipmunk", "Common Genet", "Copperhead", "Coyote", "Deer Mouse", "Dormouse", "Elk", "Emu", "Fisher", "Fox", "Garter Snake", "Giant Panda", "Giant Tortoise", "Groundhog", "Grouse", "Guanaco", "Himalayan Tahr", "Kangaroo", "Koala", "Numbat", "Quoll", "Raccoon dog", "Tasmanian Devil", "Thornbill", "Turkey", "Vole", "Weasel", "Wildcat", "Wolf", "Wombat", "Woodchuck", "Woodpecker"],
        //list of farm animals comes from https://www.buzzle.com/articles/farm-animals-list.html
        farm: ["Alpaca", "Buffalo", "Banteng", "Cow", "Cat", "Chicken", "Carp", "Camel", "Donkey", "Dog", "Duck", "Emu", "Goat", "Gayal", "Guinea", "Goose", "Horse", "Honey", "Llama", "Pig", "Pigeon", "Rhea", "Rabbit", "Sheep", "Silkworm", "Turkey", "Yak", "Zebu"],
        //list of pet animals comes from https://www.dogbreedinfo.com/pets/pet.htm
        pet: ["Bearded Dragon", "Birds", "Burro", "Cats", "Chameleons", "Chickens", "Chinchillas", "Chinese Water Dragon", "Cows", "Dogs", "Donkey", "Ducks", "Ferrets", "Fish", "Geckos", "Geese", "Gerbils", "Goats", "Guinea Fowl", "Guinea Pigs", "Hamsters", "Hedgehogs", "Horses", "Iguanas", "Llamas", "Lizards", "Mice", "Mule", "Peafowl", "Pigs and Hogs", "Pigeons", "Ponies", "Pot Bellied Pig", "Rabbits", "Rats", "Sheep", "Skinks", "Snakes", "Stick Insects", "Sugar Gliders", "Tarantula", "Turkeys", "Turtles"],
        //list of zoo animals comes from https://bronxzoo.com/animals
        zoo: ["Aardvark", "African Wild Dog", "Aldabra Tortoise", "American Alligator", "American Bison", "Amur Tiger", "Anaconda", "Andean Condor", "Asian Elephant", "Baby Doll Sheep", "Bald Eagle", "Barred Owl", "Blue Iguana", "Boer Goat", "California Sea Lion", "Caribbean Flamingo", "Chinchilla", "Collared Lemur", "Coquerel's Sifaka", "Cuban Amazon Parrot", "Ebony Langur", "Fennec Fox", "Fossa", "Gelada", "Giant Anteater", "Giraffe", "Gorilla", "Grizzly Bear", "Henkel's Leaf-tailed Gecko", "Indian Gharial", "Indian Rhinoceros", "King Cobra", "King Vulture", "Komodo Dragon", "Linne's Two-toed Sloth", "Lion", "Little Penguin", "Madagascar Tree Boa", "Magellanic Penguin", "Malayan Tapir", "Malayan Tiger", "Matschies Tree Kangaroo", "Mini Donkey", "Monarch Butterfly", "Nile crocodile", "North American Porcupine", "Nubian Ibex", "Okapi", "Poison Dart Frog", "Polar Bear", "Pygmy Marmoset", "Radiated Tortoise", "Red Panda", "Red Ruffed Lemur", "Ring-tailed Lemur", "Ring-tailed Mongoose", "Rock Hyrax", "Small Clawed Asian Otter", "Snow Leopard", "Snowy Owl", "Southern White-faced Owl", "Southern White Rhinocerous", "Squirrel Monkey", "Tufted Puffin", "White Cheeked Gibbon", "White-throated Bee Eater", "Zebra"]
      },
      primes: [
        // 1230 first primes, i.e. all primes up to the first one greater than 10000, inclusive.
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
        101,
        103,
        107,
        109,
        113,
        127,
        131,
        137,
        139,
        149,
        151,
        157,
        163,
        167,
        173,
        179,
        181,
        191,
        193,
        197,
        199,
        211,
        223,
        227,
        229,
        233,
        239,
        241,
        251,
        257,
        263,
        269,
        271,
        277,
        281,
        283,
        293,
        307,
        311,
        313,
        317,
        331,
        337,
        347,
        349,
        353,
        359,
        367,
        373,
        379,
        383,
        389,
        397,
        401,
        409,
        419,
        421,
        431,
        433,
        439,
        443,
        449,
        457,
        461,
        463,
        467,
        479,
        487,
        491,
        499,
        503,
        509,
        521,
        523,
        541,
        547,
        557,
        563,
        569,
        571,
        577,
        587,
        593,
        599,
        601,
        607,
        613,
        617,
        619,
        631,
        641,
        643,
        647,
        653,
        659,
        661,
        673,
        677,
        683,
        691,
        701,
        709,
        719,
        727,
        733,
        739,
        743,
        751,
        757,
        761,
        769,
        773,
        787,
        797,
        809,
        811,
        821,
        823,
        827,
        829,
        839,
        853,
        857,
        859,
        863,
        877,
        881,
        883,
        887,
        907,
        911,
        919,
        929,
        937,
        941,
        947,
        953,
        967,
        971,
        977,
        983,
        991,
        997,
        1009,
        1013,
        1019,
        1021,
        1031,
        1033,
        1039,
        1049,
        1051,
        1061,
        1063,
        1069,
        1087,
        1091,
        1093,
        1097,
        1103,
        1109,
        1117,
        1123,
        1129,
        1151,
        1153,
        1163,
        1171,
        1181,
        1187,
        1193,
        1201,
        1213,
        1217,
        1223,
        1229,
        1231,
        1237,
        1249,
        1259,
        1277,
        1279,
        1283,
        1289,
        1291,
        1297,
        1301,
        1303,
        1307,
        1319,
        1321,
        1327,
        1361,
        1367,
        1373,
        1381,
        1399,
        1409,
        1423,
        1427,
        1429,
        1433,
        1439,
        1447,
        1451,
        1453,
        1459,
        1471,
        1481,
        1483,
        1487,
        1489,
        1493,
        1499,
        1511,
        1523,
        1531,
        1543,
        1549,
        1553,
        1559,
        1567,
        1571,
        1579,
        1583,
        1597,
        1601,
        1607,
        1609,
        1613,
        1619,
        1621,
        1627,
        1637,
        1657,
        1663,
        1667,
        1669,
        1693,
        1697,
        1699,
        1709,
        1721,
        1723,
        1733,
        1741,
        1747,
        1753,
        1759,
        1777,
        1783,
        1787,
        1789,
        1801,
        1811,
        1823,
        1831,
        1847,
        1861,
        1867,
        1871,
        1873,
        1877,
        1879,
        1889,
        1901,
        1907,
        1913,
        1931,
        1933,
        1949,
        1951,
        1973,
        1979,
        1987,
        1993,
        1997,
        1999,
        2003,
        2011,
        2017,
        2027,
        2029,
        2039,
        2053,
        2063,
        2069,
        2081,
        2083,
        2087,
        2089,
        2099,
        2111,
        2113,
        2129,
        2131,
        2137,
        2141,
        2143,
        2153,
        2161,
        2179,
        2203,
        2207,
        2213,
        2221,
        2237,
        2239,
        2243,
        2251,
        2267,
        2269,
        2273,
        2281,
        2287,
        2293,
        2297,
        2309,
        2311,
        2333,
        2339,
        2341,
        2347,
        2351,
        2357,
        2371,
        2377,
        2381,
        2383,
        2389,
        2393,
        2399,
        2411,
        2417,
        2423,
        2437,
        2441,
        2447,
        2459,
        2467,
        2473,
        2477,
        2503,
        2521,
        2531,
        2539,
        2543,
        2549,
        2551,
        2557,
        2579,
        2591,
        2593,
        2609,
        2617,
        2621,
        2633,
        2647,
        2657,
        2659,
        2663,
        2671,
        2677,
        2683,
        2687,
        2689,
        2693,
        2699,
        2707,
        2711,
        2713,
        2719,
        2729,
        2731,
        2741,
        2749,
        2753,
        2767,
        2777,
        2789,
        2791,
        2797,
        2801,
        2803,
        2819,
        2833,
        2837,
        2843,
        2851,
        2857,
        2861,
        2879,
        2887,
        2897,
        2903,
        2909,
        2917,
        2927,
        2939,
        2953,
        2957,
        2963,
        2969,
        2971,
        2999,
        3001,
        3011,
        3019,
        3023,
        3037,
        3041,
        3049,
        3061,
        3067,
        3079,
        3083,
        3089,
        3109,
        3119,
        3121,
        3137,
        3163,
        3167,
        3169,
        3181,
        3187,
        3191,
        3203,
        3209,
        3217,
        3221,
        3229,
        3251,
        3253,
        3257,
        3259,
        3271,
        3299,
        3301,
        3307,
        3313,
        3319,
        3323,
        3329,
        3331,
        3343,
        3347,
        3359,
        3361,
        3371,
        3373,
        3389,
        3391,
        3407,
        3413,
        3433,
        3449,
        3457,
        3461,
        3463,
        3467,
        3469,
        3491,
        3499,
        3511,
        3517,
        3527,
        3529,
        3533,
        3539,
        3541,
        3547,
        3557,
        3559,
        3571,
        3581,
        3583,
        3593,
        3607,
        3613,
        3617,
        3623,
        3631,
        3637,
        3643,
        3659,
        3671,
        3673,
        3677,
        3691,
        3697,
        3701,
        3709,
        3719,
        3727,
        3733,
        3739,
        3761,
        3767,
        3769,
        3779,
        3793,
        3797,
        3803,
        3821,
        3823,
        3833,
        3847,
        3851,
        3853,
        3863,
        3877,
        3881,
        3889,
        3907,
        3911,
        3917,
        3919,
        3923,
        3929,
        3931,
        3943,
        3947,
        3967,
        3989,
        4001,
        4003,
        4007,
        4013,
        4019,
        4021,
        4027,
        4049,
        4051,
        4057,
        4073,
        4079,
        4091,
        4093,
        4099,
        4111,
        4127,
        4129,
        4133,
        4139,
        4153,
        4157,
        4159,
        4177,
        4201,
        4211,
        4217,
        4219,
        4229,
        4231,
        4241,
        4243,
        4253,
        4259,
        4261,
        4271,
        4273,
        4283,
        4289,
        4297,
        4327,
        4337,
        4339,
        4349,
        4357,
        4363,
        4373,
        4391,
        4397,
        4409,
        4421,
        4423,
        4441,
        4447,
        4451,
        4457,
        4463,
        4481,
        4483,
        4493,
        4507,
        4513,
        4517,
        4519,
        4523,
        4547,
        4549,
        4561,
        4567,
        4583,
        4591,
        4597,
        4603,
        4621,
        4637,
        4639,
        4643,
        4649,
        4651,
        4657,
        4663,
        4673,
        4679,
        4691,
        4703,
        4721,
        4723,
        4729,
        4733,
        4751,
        4759,
        4783,
        4787,
        4789,
        4793,
        4799,
        4801,
        4813,
        4817,
        4831,
        4861,
        4871,
        4877,
        4889,
        4903,
        4909,
        4919,
        4931,
        4933,
        4937,
        4943,
        4951,
        4957,
        4967,
        4969,
        4973,
        4987,
        4993,
        4999,
        5003,
        5009,
        5011,
        5021,
        5023,
        5039,
        5051,
        5059,
        5077,
        5081,
        5087,
        5099,
        5101,
        5107,
        5113,
        5119,
        5147,
        5153,
        5167,
        5171,
        5179,
        5189,
        5197,
        5209,
        5227,
        5231,
        5233,
        5237,
        5261,
        5273,
        5279,
        5281,
        5297,
        5303,
        5309,
        5323,
        5333,
        5347,
        5351,
        5381,
        5387,
        5393,
        5399,
        5407,
        5413,
        5417,
        5419,
        5431,
        5437,
        5441,
        5443,
        5449,
        5471,
        5477,
        5479,
        5483,
        5501,
        5503,
        5507,
        5519,
        5521,
        5527,
        5531,
        5557,
        5563,
        5569,
        5573,
        5581,
        5591,
        5623,
        5639,
        5641,
        5647,
        5651,
        5653,
        5657,
        5659,
        5669,
        5683,
        5689,
        5693,
        5701,
        5711,
        5717,
        5737,
        5741,
        5743,
        5749,
        5779,
        5783,
        5791,
        5801,
        5807,
        5813,
        5821,
        5827,
        5839,
        5843,
        5849,
        5851,
        5857,
        5861,
        5867,
        5869,
        5879,
        5881,
        5897,
        5903,
        5923,
        5927,
        5939,
        5953,
        5981,
        5987,
        6007,
        6011,
        6029,
        6037,
        6043,
        6047,
        6053,
        6067,
        6073,
        6079,
        6089,
        6091,
        6101,
        6113,
        6121,
        6131,
        6133,
        6143,
        6151,
        6163,
        6173,
        6197,
        6199,
        6203,
        6211,
        6217,
        6221,
        6229,
        6247,
        6257,
        6263,
        6269,
        6271,
        6277,
        6287,
        6299,
        6301,
        6311,
        6317,
        6323,
        6329,
        6337,
        6343,
        6353,
        6359,
        6361,
        6367,
        6373,
        6379,
        6389,
        6397,
        6421,
        6427,
        6449,
        6451,
        6469,
        6473,
        6481,
        6491,
        6521,
        6529,
        6547,
        6551,
        6553,
        6563,
        6569,
        6571,
        6577,
        6581,
        6599,
        6607,
        6619,
        6637,
        6653,
        6659,
        6661,
        6673,
        6679,
        6689,
        6691,
        6701,
        6703,
        6709,
        6719,
        6733,
        6737,
        6761,
        6763,
        6779,
        6781,
        6791,
        6793,
        6803,
        6823,
        6827,
        6829,
        6833,
        6841,
        6857,
        6863,
        6869,
        6871,
        6883,
        6899,
        6907,
        6911,
        6917,
        6947,
        6949,
        6959,
        6961,
        6967,
        6971,
        6977,
        6983,
        6991,
        6997,
        7001,
        7013,
        7019,
        7027,
        7039,
        7043,
        7057,
        7069,
        7079,
        7103,
        7109,
        7121,
        7127,
        7129,
        7151,
        7159,
        7177,
        7187,
        7193,
        7207,
        7211,
        7213,
        7219,
        7229,
        7237,
        7243,
        7247,
        7253,
        7283,
        7297,
        7307,
        7309,
        7321,
        7331,
        7333,
        7349,
        7351,
        7369,
        7393,
        7411,
        7417,
        7433,
        7451,
        7457,
        7459,
        7477,
        7481,
        7487,
        7489,
        7499,
        7507,
        7517,
        7523,
        7529,
        7537,
        7541,
        7547,
        7549,
        7559,
        7561,
        7573,
        7577,
        7583,
        7589,
        7591,
        7603,
        7607,
        7621,
        7639,
        7643,
        7649,
        7669,
        7673,
        7681,
        7687,
        7691,
        7699,
        7703,
        7717,
        7723,
        7727,
        7741,
        7753,
        7757,
        7759,
        7789,
        7793,
        7817,
        7823,
        7829,
        7841,
        7853,
        7867,
        7873,
        7877,
        7879,
        7883,
        7901,
        7907,
        7919,
        7927,
        7933,
        7937,
        7949,
        7951,
        7963,
        7993,
        8009,
        8011,
        8017,
        8039,
        8053,
        8059,
        8069,
        8081,
        8087,
        8089,
        8093,
        8101,
        8111,
        8117,
        8123,
        8147,
        8161,
        8167,
        8171,
        8179,
        8191,
        8209,
        8219,
        8221,
        8231,
        8233,
        8237,
        8243,
        8263,
        8269,
        8273,
        8287,
        8291,
        8293,
        8297,
        8311,
        8317,
        8329,
        8353,
        8363,
        8369,
        8377,
        8387,
        8389,
        8419,
        8423,
        8429,
        8431,
        8443,
        8447,
        8461,
        8467,
        8501,
        8513,
        8521,
        8527,
        8537,
        8539,
        8543,
        8563,
        8573,
        8581,
        8597,
        8599,
        8609,
        8623,
        8627,
        8629,
        8641,
        8647,
        8663,
        8669,
        8677,
        8681,
        8689,
        8693,
        8699,
        8707,
        8713,
        8719,
        8731,
        8737,
        8741,
        8747,
        8753,
        8761,
        8779,
        8783,
        8803,
        8807,
        8819,
        8821,
        8831,
        8837,
        8839,
        8849,
        8861,
        8863,
        8867,
        8887,
        8893,
        8923,
        8929,
        8933,
        8941,
        8951,
        8963,
        8969,
        8971,
        8999,
        9001,
        9007,
        9011,
        9013,
        9029,
        9041,
        9043,
        9049,
        9059,
        9067,
        9091,
        9103,
        9109,
        9127,
        9133,
        9137,
        9151,
        9157,
        9161,
        9173,
        9181,
        9187,
        9199,
        9203,
        9209,
        9221,
        9227,
        9239,
        9241,
        9257,
        9277,
        9281,
        9283,
        9293,
        9311,
        9319,
        9323,
        9337,
        9341,
        9343,
        9349,
        9371,
        9377,
        9391,
        9397,
        9403,
        9413,
        9419,
        9421,
        9431,
        9433,
        9437,
        9439,
        9461,
        9463,
        9467,
        9473,
        9479,
        9491,
        9497,
        9511,
        9521,
        9533,
        9539,
        9547,
        9551,
        9587,
        9601,
        9613,
        9619,
        9623,
        9629,
        9631,
        9643,
        9649,
        9661,
        9677,
        9679,
        9689,
        9697,
        9719,
        9721,
        9733,
        9739,
        9743,
        9749,
        9767,
        9769,
        9781,
        9787,
        9791,
        9803,
        9811,
        9817,
        9829,
        9833,
        9839,
        9851,
        9857,
        9859,
        9871,
        9883,
        9887,
        9901,
        9907,
        9923,
        9929,
        9931,
        9941,
        9949,
        9967,
        9973,
        10007
      ],
      emotions: [
        "love",
        "joy",
        "surprise",
        "anger",
        "sadness",
        "fear"
      ]
    }, N = Object.prototype.hasOwnProperty, F = Object.keys || function(e) {
      var a = [];
      for (var n in e)
        N.call(e, n) && a.push(n);
      return a;
    };
    function w(e, a) {
      for (var n = F(e), s, c = 0, g = n.length; c < g; c++)
        s = n[c], a[s] = e[s] || a[s];
    }
    function R(e, a) {
      for (var n = 0, s = e.length; n < s; n++)
        a[n] = e[n];
    }
    function D(e, a) {
      var n = Array.isArray(e), s = a || (n ? new Array(e.length) : {});
      return n ? R(e, s) : w(e, s), s;
    }
    i.prototype.get = function(e) {
      return D(T[e]);
    }, i.prototype.mac_address = function(e) {
      e = u(e), e.separator || (e.separator = e.networkVersion ? "." : ":");
      var a = "ABCDEF1234567890", n = "";
      return e.networkVersion ? n = this.n(this.string, 3, { pool: a, length: 4 }).join(e.separator) : n = this.n(this.string, 6, { pool: a, length: 2 }).join(e.separator), n;
    }, i.prototype.normal = function(e) {
      if (e = u(e, { mean: 0, dev: 1, pool: [] }), t(
        e.pool.constructor !== Array,
        "Chance: The pool option must be a valid array."
      ), t(
        typeof e.mean != "number",
        "Chance: Mean (mean) must be a number"
      ), t(
        typeof e.dev != "number",
        "Chance: Standard deviation (dev) must be a number"
      ), e.pool.length > 0)
        return this.normal_pool(e);
      var a, n, s, c, g = e.mean, P = e.dev;
      do
        n = this.random() * 2 - 1, s = this.random() * 2 - 1, a = n * n + s * s;
      while (a >= 1);
      return c = n * Math.sqrt(-2 * Math.log(a) / a), P * c + g;
    }, i.prototype.normal_pool = function(e) {
      var a = 0;
      do {
        var n = Math.round(this.normal({ mean: e.mean, dev: e.dev }));
        if (n < e.pool.length && n >= 0)
          return e.pool[n];
        a++;
      } while (a < 100);
      throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.");
    }, i.prototype.radio = function(e) {
      e = u(e, { side: "?" });
      var a = "";
      switch (e.side.toLowerCase()) {
        case "east":
        case "e":
          a = "W";
          break;
        case "west":
        case "w":
          a = "K";
          break;
        default:
          a = this.character({ pool: "KW" });
          break;
      }
      return a + this.character({ alpha: !0, casing: "upper" }) + this.character({ alpha: !0, casing: "upper" }) + this.character({ alpha: !0, casing: "upper" });
    }, i.prototype.set = function(e, a) {
      typeof e == "string" ? T[e] = a : T = D(e, T);
    }, i.prototype.tv = function(e) {
      return this.radio(e);
    }, i.prototype.cnpj = function() {
      var e = this.n(this.natural, 8, { max: 9 }), a = 2 + e[7] * 6 + e[6] * 7 + e[5] * 8 + e[4] * 9 + e[3] * 2 + e[2] * 3 + e[1] * 4 + e[0] * 5;
      a = 11 - a % 11, a >= 10 && (a = 0);
      var n = a * 2 + 3 + e[7] * 7 + e[6] * 8 + e[5] * 9 + e[4] * 2 + e[3] * 3 + e[2] * 4 + e[1] * 5 + e[0] * 6;
      return n = 11 - n % 11, n >= 10 && (n = 0), "" + e[0] + e[1] + "." + e[2] + e[3] + e[4] + "." + e[5] + e[6] + e[7] + "/0001-" + a + n;
    }, i.prototype.emotion = function() {
      return this.pick(this.get("emotions"));
    }, i.prototype.mersenne_twister = function(e) {
      return new O(e);
    }, i.prototype.blueimp_md5 = function() {
      return new G();
    };
    var O = function(e) {
      e === void 0 && (e = Math.floor(Math.random() * Math.pow(10, 13))), this.N = 624, this.M = 397, this.MATRIX_A = 2567483615, this.UPPER_MASK = 2147483648, this.LOWER_MASK = 2147483647, this.mt = new Array(this.N), this.mti = this.N + 1, this.init_genrand(e);
    };
    O.prototype.init_genrand = function(e) {
      for (this.mt[0] = e >>> 0, this.mti = 1; this.mti < this.N; this.mti++)
        e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30, this.mt[this.mti] = (((e & 4294901760) >>> 16) * 1812433253 << 16) + (e & 65535) * 1812433253 + this.mti, this.mt[this.mti] >>>= 0;
    }, O.prototype.init_by_array = function(e, a) {
      var n = 1, s = 0, c, g;
      for (this.init_genrand(19650218), c = this.N > a ? this.N : a; c; c--)
        g = this.mt[n - 1] ^ this.mt[n - 1] >>> 30, this.mt[n] = (this.mt[n] ^ (((g & 4294901760) >>> 16) * 1664525 << 16) + (g & 65535) * 1664525) + e[s] + s, this.mt[n] >>>= 0, n++, s++, n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1), s >= a && (s = 0);
      for (c = this.N - 1; c; c--)
        g = this.mt[n - 1] ^ this.mt[n - 1] >>> 30, this.mt[n] = (this.mt[n] ^ (((g & 4294901760) >>> 16) * 1566083941 << 16) + (g & 65535) * 1566083941) - n, this.mt[n] >>>= 0, n++, n >= this.N && (this.mt[0] = this.mt[this.N - 1], n = 1);
      this.mt[0] = 2147483648;
    }, O.prototype.genrand_int32 = function() {
      var e, a = new Array(0, this.MATRIX_A);
      if (this.mti >= this.N) {
        var n;
        for (this.mti === this.N + 1 && this.init_genrand(5489), n = 0; n < this.N - this.M; n++)
          e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + this.M] ^ e >>> 1 ^ a[e & 1];
        for (; n < this.N - 1; n++)
          e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK, this.mt[n] = this.mt[n + (this.M - this.N)] ^ e >>> 1 ^ a[e & 1];
        e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK, this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ a[e & 1], this.mti = 0;
      }
      return e = this.mt[this.mti++], e ^= e >>> 11, e ^= e << 7 & 2636928640, e ^= e << 15 & 4022730752, e ^= e >>> 18, e >>> 0;
    }, O.prototype.genrand_int31 = function() {
      return this.genrand_int32() >>> 1;
    }, O.prototype.genrand_real1 = function() {
      return this.genrand_int32() * (1 / 4294967295);
    }, O.prototype.random = function() {
      return this.genrand_int32() * (1 / 4294967296);
    }, O.prototype.genrand_real3 = function() {
      return (this.genrand_int32() + 0.5) * (1 / 4294967296);
    }, O.prototype.genrand_res53 = function() {
      var e = this.genrand_int32() >>> 5, a = this.genrand_int32() >>> 6;
      return (e * 67108864 + a) * (1 / 9007199254740992);
    };
    var G = function() {
    };
    G.prototype.VERSION = "1.0.1", G.prototype.safe_add = function(a, n) {
      var s = (a & 65535) + (n & 65535), c = (a >> 16) + (n >> 16) + (s >> 16);
      return c << 16 | s & 65535;
    }, G.prototype.bit_roll = function(e, a) {
      return e << a | e >>> 32 - a;
    }, G.prototype.md5_cmn = function(e, a, n, s, c, g) {
      return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(a, e), this.safe_add(s, g)), c), n);
    }, G.prototype.md5_ff = function(e, a, n, s, c, g, P) {
      return this.md5_cmn(a & n | ~a & s, e, a, c, g, P);
    }, G.prototype.md5_gg = function(e, a, n, s, c, g, P) {
      return this.md5_cmn(a & s | n & ~s, e, a, c, g, P);
    }, G.prototype.md5_hh = function(e, a, n, s, c, g, P) {
      return this.md5_cmn(a ^ n ^ s, e, a, c, g, P);
    }, G.prototype.md5_ii = function(e, a, n, s, c, g, P) {
      return this.md5_cmn(n ^ (a | ~s), e, a, c, g, P);
    }, G.prototype.binl_md5 = function(e, a) {
      e[a >> 5] |= 128 << a % 32, e[(a + 64 >>> 9 << 4) + 14] = a;
      var n, s, c, g, P, f = 1732584193, v = -271733879, C = -1732584194, A = 271733878;
      for (n = 0; n < e.length; n += 16)
        s = f, c = v, g = C, P = A, f = this.md5_ff(f, v, C, A, e[n], 7, -680876936), A = this.md5_ff(A, f, v, C, e[n + 1], 12, -389564586), C = this.md5_ff(C, A, f, v, e[n + 2], 17, 606105819), v = this.md5_ff(v, C, A, f, e[n + 3], 22, -1044525330), f = this.md5_ff(f, v, C, A, e[n + 4], 7, -176418897), A = this.md5_ff(A, f, v, C, e[n + 5], 12, 1200080426), C = this.md5_ff(C, A, f, v, e[n + 6], 17, -1473231341), v = this.md5_ff(v, C, A, f, e[n + 7], 22, -45705983), f = this.md5_ff(f, v, C, A, e[n + 8], 7, 1770035416), A = this.md5_ff(A, f, v, C, e[n + 9], 12, -1958414417), C = this.md5_ff(C, A, f, v, e[n + 10], 17, -42063), v = this.md5_ff(v, C, A, f, e[n + 11], 22, -1990404162), f = this.md5_ff(f, v, C, A, e[n + 12], 7, 1804603682), A = this.md5_ff(A, f, v, C, e[n + 13], 12, -40341101), C = this.md5_ff(C, A, f, v, e[n + 14], 17, -1502002290), v = this.md5_ff(v, C, A, f, e[n + 15], 22, 1236535329), f = this.md5_gg(f, v, C, A, e[n + 1], 5, -165796510), A = this.md5_gg(A, f, v, C, e[n + 6], 9, -1069501632), C = this.md5_gg(C, A, f, v, e[n + 11], 14, 643717713), v = this.md5_gg(v, C, A, f, e[n], 20, -373897302), f = this.md5_gg(f, v, C, A, e[n + 5], 5, -701558691), A = this.md5_gg(A, f, v, C, e[n + 10], 9, 38016083), C = this.md5_gg(C, A, f, v, e[n + 15], 14, -660478335), v = this.md5_gg(v, C, A, f, e[n + 4], 20, -405537848), f = this.md5_gg(f, v, C, A, e[n + 9], 5, 568446438), A = this.md5_gg(A, f, v, C, e[n + 14], 9, -1019803690), C = this.md5_gg(C, A, f, v, e[n + 3], 14, -187363961), v = this.md5_gg(v, C, A, f, e[n + 8], 20, 1163531501), f = this.md5_gg(f, v, C, A, e[n + 13], 5, -1444681467), A = this.md5_gg(A, f, v, C, e[n + 2], 9, -51403784), C = this.md5_gg(C, A, f, v, e[n + 7], 14, 1735328473), v = this.md5_gg(v, C, A, f, e[n + 12], 20, -1926607734), f = this.md5_hh(f, v, C, A, e[n + 5], 4, -378558), A = this.md5_hh(A, f, v, C, e[n + 8], 11, -2022574463), C = this.md5_hh(C, A, f, v, e[n + 11], 16, 1839030562), v = this.md5_hh(v, C, A, f, e[n + 14], 23, -35309556), f = this.md5_hh(f, v, C, A, e[n + 1], 4, -1530992060), A = this.md5_hh(A, f, v, C, e[n + 4], 11, 1272893353), C = this.md5_hh(C, A, f, v, e[n + 7], 16, -155497632), v = this.md5_hh(v, C, A, f, e[n + 10], 23, -1094730640), f = this.md5_hh(f, v, C, A, e[n + 13], 4, 681279174), A = this.md5_hh(A, f, v, C, e[n], 11, -358537222), C = this.md5_hh(C, A, f, v, e[n + 3], 16, -722521979), v = this.md5_hh(v, C, A, f, e[n + 6], 23, 76029189), f = this.md5_hh(f, v, C, A, e[n + 9], 4, -640364487), A = this.md5_hh(A, f, v, C, e[n + 12], 11, -421815835), C = this.md5_hh(C, A, f, v, e[n + 15], 16, 530742520), v = this.md5_hh(v, C, A, f, e[n + 2], 23, -995338651), f = this.md5_ii(f, v, C, A, e[n], 6, -198630844), A = this.md5_ii(A, f, v, C, e[n + 7], 10, 1126891415), C = this.md5_ii(C, A, f, v, e[n + 14], 15, -1416354905), v = this.md5_ii(v, C, A, f, e[n + 5], 21, -57434055), f = this.md5_ii(f, v, C, A, e[n + 12], 6, 1700485571), A = this.md5_ii(A, f, v, C, e[n + 3], 10, -1894986606), C = this.md5_ii(C, A, f, v, e[n + 10], 15, -1051523), v = this.md5_ii(v, C, A, f, e[n + 1], 21, -2054922799), f = this.md5_ii(f, v, C, A, e[n + 8], 6, 1873313359), A = this.md5_ii(A, f, v, C, e[n + 15], 10, -30611744), C = this.md5_ii(C, A, f, v, e[n + 6], 15, -1560198380), v = this.md5_ii(v, C, A, f, e[n + 13], 21, 1309151649), f = this.md5_ii(f, v, C, A, e[n + 4], 6, -145523070), A = this.md5_ii(A, f, v, C, e[n + 11], 10, -1120210379), C = this.md5_ii(C, A, f, v, e[n + 2], 15, 718787259), v = this.md5_ii(v, C, A, f, e[n + 9], 21, -343485551), f = this.safe_add(f, s), v = this.safe_add(v, c), C = this.safe_add(C, g), A = this.safe_add(A, P);
      return [f, v, C, A];
    }, G.prototype.binl2rstr = function(e) {
      var a, n = "";
      for (a = 0; a < e.length * 32; a += 8)
        n += String.fromCharCode(e[a >> 5] >>> a % 32 & 255);
      return n;
    }, G.prototype.rstr2binl = function(e) {
      var a, n = [];
      for (n[(e.length >> 2) - 1] = void 0, a = 0; a < n.length; a += 1)
        n[a] = 0;
      for (a = 0; a < e.length * 8; a += 8)
        n[a >> 5] |= (e.charCodeAt(a / 8) & 255) << a % 32;
      return n;
    }, G.prototype.rstr_md5 = function(e) {
      return this.binl2rstr(this.binl_md5(this.rstr2binl(e), e.length * 8));
    }, G.prototype.rstr_hmac_md5 = function(e, a) {
      var n, s = this.rstr2binl(e), c = [], g = [], P;
      for (c[15] = g[15] = void 0, s.length > 16 && (s = this.binl_md5(s, e.length * 8)), n = 0; n < 16; n += 1)
        c[n] = s[n] ^ 909522486, g[n] = s[n] ^ 1549556828;
      return P = this.binl_md5(c.concat(this.rstr2binl(a)), 512 + a.length * 8), this.binl2rstr(this.binl_md5(g.concat(P), 512 + 128));
    }, G.prototype.rstr2hex = function(e) {
      var a = "0123456789abcdef", n = "", s, c;
      for (c = 0; c < e.length; c += 1)
        s = e.charCodeAt(c), n += a.charAt(s >>> 4 & 15) + a.charAt(s & 15);
      return n;
    }, G.prototype.str2rstr_utf8 = function(e) {
      return unescape(encodeURIComponent(e));
    }, G.prototype.raw_md5 = function(e) {
      return this.rstr_md5(this.str2rstr_utf8(e));
    }, G.prototype.hex_md5 = function(e) {
      return this.rstr2hex(this.raw_md5(e));
    }, G.prototype.raw_hmac_md5 = function(e, a) {
      return this.rstr_hmac_md5(this.str2rstr_utf8(e), this.str2rstr_utf8(a));
    }, G.prototype.hex_hmac_md5 = function(e, a) {
      return this.rstr2hex(this.raw_hmac_md5(e, a));
    }, G.prototype.md5 = function(e, a, n) {
      return a ? n ? this.raw_hmac_md5(a, e) : this.hex_hmac_md5(a, e) : n ? this.raw_md5(e) : this.hex_md5(e);
    }, m.exports && (b = m.exports = i), b.Chance = i, typeof importScripts < "u" && (chance = new i(), self.Chance = i), typeof window == "object" && typeof window.document == "object" && (window.Chance = i, window.chance = new i());
  })();
})(re, re.exports);
var fe = re.exports;
const be = /* @__PURE__ */ he(fe);
var Y = new be(), le = function() {
  function m(b, E, k, M) {
    let x = k.toUpperCase(), p = b.toUpperCase(), h = E.toUpperCase();
    if (M != null && 0 < M.length) {
      let r = 0, t = M.length;
      var y = "'";
      (x.startsWith("INTEGER") || x.startsWith("NUMBER") || x.startsWith("DATE")) && (y = "");
      let l = M[Math.floor(Math.random() * (t - r)) + r];
      return l.toLowerCase && l.toLowerCase() == "null" && (y = ""), y + l + y;
    }
    if (h == "NAME" && 0 <= p.indexOf("DEPARTMENT")) {
      var S = ["Sales", "Finance", "Delivery", "Manufacturing"];
      let r = 0, t = S.length;
      return "'" + S[Math.floor(Math.random() * (t - r)) + r] + "'";
    }
    if (Y[h.toLowerCase()] != null && h.indexOf("NAME") < 0)
      return "'" + Y[h.toLowerCase()]() + "'";
    if (h == "FIRST_NAME")
      return "'" + Y.first() + "'";
    if (h == "LAST_NAME")
      return "'" + Y.last() + "'";
    if (0 <= h.indexOf("NAME"))
      return "'" + Y.name() + "'";
    if (0 < h.indexOf("ADDRESS"))
      return "'" + Y.address() + "'";
    if (h == "LOCATION")
      return "'" + Y.city() + "'";
    if (h == "DESCRIPTION")
      return "'" + Y.paragraph({ sentences: 2 }) + "'";
    if (h == "JOB") {
      var i = ["Engineer", "Consultant", "Architect", "Manager", "Analyst", "Specialist", "Evangelist", "Salesman"];
      let r = 0, t = i.length;
      return "'" + i[Math.floor(Math.random() * (t - r)) + r] + "'";
    }
    if (x.startsWith("INTEGER") || x.startsWith("NUMBER")) {
      let r = 0, t = 100;
      return Math.floor(Math.random() * (t - r)) + r;
    }
    if (x.startsWith("DATE")) {
      let r = 0, t = 100;
      var u = Math.floor(Math.random() * (t - r)) + r;
      return "sysdate-" + u;
    }
    return "'N/A'";
  }
  return m;
}(), ae = function() {
  function m(b, E) {
    for (var k = [], M = "", x = 0; x < b.length; x++) {
      for (var p = b.charAt(x), h = k.length, y = 0; y < E.length; y++) {
        var S = E.charAt(y);
        if (p == S) {
          0 < M.length && k.push(M), k.push(p), M = "";
          continue;
        }
      }
      h == k.length && (M = M + p);
    }
    return 0 < M.length && k.push(M), k;
  }
  return m;
}(), ee = function() {
  function m(M, x, p, h, y, S) {
    this.type = h, this.value = M, this.begin = x, this.end = p, this.line = y, this.col = S, this.toString = function() {
      return "{type:" + h + ",value:" + M + "}";
    }, this.isStandardLiteral = function() {
      if (this.value.length < 2 || !(this.value.charAt(0) == "'" || this.value.charAt(0) == "n" || this.value.charAt(0) == "N"))
        return !1;
      var u = this.value;
      if (u.charAt(0) == "n" || u.charAt(0) == "N") {
        if (u.length < 3)
          return !1;
        u = u.substring(1);
      }
      return u.length < 2 ? !1 : u.charAt(0) == "'" && u.charAt(u.length - 1) == "'";
    }, this.isAltLiteral = function() {
      if (this.value.length < 5 || !(this.value.charAt(0) == "q" || this.value.charAt(0) == "Q" || this.value.charAt(0) == "n" || this.value.charAt(0) == "N"))
        return !1;
      var u = this.value;
      if (this.value.charAt(0) == "q" || this.value.charAt(0) == "Q")
        u = u.substring(1);
      else if (
        /*content.startsWith("Nq")*/
        (this.value.charAt(0) == "n" || this.value.charAt(0) == "N") && (this.value.charAt(1) == "q" || this.value.charAt(1) == "Q")
      ) {
        if (u.length < 6)
          return !1;
        u = u.substring(2);
      } else
        return !1;
      if (u.charAt(0) == "'" && u.charAt(u.length - 1) == "'")
        u = u.substring(1, u.length - 1);
      else
        return !1;
      return i(u.charAt(0)) == u.charAt(u.length - 1);
    };
    function i(u) {
      return u == "<" ? ">" : u == "[" ? "]" : u == "{" ? "}" : u == "(" ? ")" : u;
    }
  }
  function b(M, x, p) {
    for (var h = [], y = `(){}[]^-|!*+.><='",;:%@?/\\#~` + p, S = ` 
\r	`, i = ae(
      M,
      //".*-+/|><=()\'\", \n\r\t"
      y + S
    ), u = 0, r = 0, t = 0, l = 0; l < i.length; l++) {
      var o = i[l], d = null;
      if (h.length > 0 && (d = h[h.length - 1]), o == `
` ? (r++, t = 0) : l > 0 && i[l - 1] !== `
` ? t = t + i[l - 1].length : t = 0, u += o.length, d != null && d.type == "comment" && (d.value.lastIndexOf("*/") != d.value.length - 2 || d.value == "/*/")) {
        o == "*" || o == "/" ? d.value = d.value + o : d.value = "/* ... ", d.end = u, d != null && d.type == "comment" && d.value.lastIndexOf("*/") == d.value.length - 2 && d.value != "/*/" && (d.value = M.substring(d.begin, d.end));
        continue;
      }
      if (d != null && (d.type == "line-comment" || d.type == "dbtools-command") && o != `
`) {
        d.value = d.value + o;
        continue;
      }
      if (d != null && (d.type == "line-comment" || d.type == "dbtools-command") && o == `
` && (d.end = d.begin + d.value.length), d != null && d.type == "quoted-string" && !(d.isStandardLiteral() || d.isAltLiteral())) {
        d.value = d.value + o, d.end = d.begin + d.value.length;
        continue;
      }
      if (!(d != null && d.type == "dquoted-string" && o != '"' && !(d.value.endsWith('"') && d.value.length > 1))) {
        if (d != null && d.type == "dquoted-string" && o == '"') {
          d.end = u, d.value = M.substring(d.begin, d.end);
          continue;
        }
        if (!(d != null && d.type == "bquoted-string" && o != "`" && !(d.value.endsWith("`") && d.value.length > 1))) {
          if (d != null && d.type == "bquoted-string" && o == "`") {
            d.end = u, d.value = M.substring(d.begin, d.end);
            continue;
          }
          if (o == "*" && d != null && d.value == "/") {
            d.value = d.value + o, d.end = d.begin + d.value.length, d.type = "comment";
            continue;
          }
          if (o == "-" && d != null && d.value == "-") {
            d.value = d.value + o, d.type = "line-comment";
            continue;
          }
          if ((o.toUpperCase() == "REM" || o.toUpperCase() == "REMA" || o.toUpperCase() == "REMAR" || o.toUpperCase() == "REMARK" || o.toUpperCase() == "PRO" || o.toUpperCase() == "PROM" || o.toUpperCase() == "PROMP" || o.toUpperCase() == "PROMPT") && (d == null || d.value == `
` || d.value == "\r")) {
            h.push(new m(o, u - o.length, -9, "line-comment", r, t));
            continue;
          }
          if (o.toUpperCase() == "SODA" && (d == null || d.value == `
` || d.value == "\r")) {
            h.push(new m(o, u - o.length, -9, "dbtools-command", r, t));
            continue;
          }
          if (d != null && d.type == "identifier" && d.end == -11 && d.value.indexOf("@") == 0 && !(o == `
` || o == "\r")) {
            d.value = d.value + o;
            continue;
          }
          if (d != null && d.type == "identifier" && d.end == -11 && d.value.indexOf("@") == 0 && (o == `
` || o == "\r")) {
            d.end = u - 1, h.push(new m(o, u - 1, u, "ws", r, t));
            continue;
          }
          if (x && o == "'") {
            d != null && (d.value.toUpperCase() == "Q" || d.value.toUpperCase() == "N" || d.value.toUpperCase() == "U" || d.value.toUpperCase() == "NQ") ? (d.value += o, d.type = "quoted-string") : h.push(new m(o, u - 1, -10, "quoted-string", r, t));
            continue;
          }
          if (x && o == '"') {
            h.push(new m(o, u - 1, -11, "dquoted-string", r, t));
            continue;
          }
          if (o == "`" && 0 <= y.indexOf("`")) {
            h.push(new m(o, u - 1, -11, "bquoted-string", r, t));
            continue;
          }
          if (o.length == 1 && 0 <= y.indexOf(o)) {
            h.push(new m(o, u - 1, u, "operation", r, t));
            continue;
          }
          if (o.length == 1 && 0 <= S.indexOf(o)) {
            h.push(new m(o, u - 1, u, "ws", r, t));
            continue;
          }
          if ("0" <= o.charAt(0) && o.charAt(0) <= "9") {
            E(o, h, u - o.length, r) || (o.charAt(o.length - 1) == "K" || o.charAt(o.length - 1) == "k" || o.charAt(o.length - 1) == "M" || o.charAt(o.length - 1) == "m" || o.charAt(o.length - 1) == "G" || o.charAt(o.length - 1) == "g" || o.charAt(o.length - 1) == "T" || o.charAt(o.length - 1) == "t" || o.charAt(o.length - 1) == "P" || o.charAt(o.length - 1) == "p" || o.charAt(o.length - 1) == "E" || o.charAt(o.length - 1) == "e" ? (h.push(new m(o.substring(0, o.length - 1), u - o.length, u - 1, "constant.numeric", r, t)), h.push(new m(o.substring(o.length - 1), u - 1, u, "constant.numeric", r, t))) : h.push(new m(o, u - o.length, u, "constant.numeric", r, t)));
            continue;
          }
          var L = "identifier";
          l + 1 < i.length && i[l + 1], h.push(new m(o, u - o.length, u, L, r, t));
        }
      }
    }
    if (h.length > 0) {
      var d = h[h.length - 1];
      d.end = M.length;
    }
    return h;
  }
  function E(M, x, p, h) {
    if (0 > M.indexOf("e") && 0 > M.indexOf("f") && 0 > M.indexOf("d"))
      return !1;
    0 <= M.indexOf("e"), 0 <= M.indexOf("e"), !(0 <= M.indexOf("e")) && 0 <= M.indexOf("f");
    for (var y = ae(M, "efd"), S = 0; S < y.length; S++) {
      var i = y[S];
      p += i.length, "0" <= i.charAt(0) && i.charAt(0) <= "9" ? x.push(new m(i, p - i.length, p, "constant.numeric", h)) : x.push(new m(i, p - i.length, p, "identifier", h));
    }
    return !0;
  }
  function k(M, x, p, h) {
    for (var y = [], S = b(M, p, h), i = null, u = 0; u < S.length; u++) {
      var r = S[u];
      if (r.type == "quoted-string") {
        if (i != null && i.type == "quoted-string") {
          i.value = i.value + r.value, i.end = r.end;
          continue;
        }
        if (i != null && i.type == "identifier" && i.value.toUpperCase() == "N" && i.end == r.begin) {
          i.begin = r.begin, i.end = r.end, i.type = r.type, i.value = r.value;
          continue;
        }
      }
      if (r.value.indexOf("@") == 0 && (r.end = r.begin + r.value.length), r.value == "#" && i != null && i.type == "identifier") {
        i.end += 1, i.value += "#";
        continue;
      }
      if ((r.type === "identifier" || r.type === "constant.numeric") && i !== null && i.value[i.value.length - 1] === "#" && i.type === "identifier") {
        i.end += r.value.length, i.value += r.value;
        continue;
      }
      /*17607445: can just drop preprocessor directives
          token.value.equals("$IF")
          || token.value.equals("$ELSIF")
          || token.value.equals("$ELSE")
          || token.value.equals("$THEN")
          ||*/
      r.value.indexOf("$$") == 0 && (r.value = "$$VAR"), (x || r.type != "ws" && r.type != "comment" && r.type != "line-comment") && y.push(r), i = r;
    }
    return y;
  }
  return k;
}();
function pe(m) {
  const b = {
    ACCESS: "N",
    ADD: "N",
    ALL: "Y",
    ALTER: "Y",
    AND: "Y",
    ANY: "Y",
    AS: "Y",
    ASC: "Y",
    AUDIT: "N",
    BETWEEN: "Y",
    BY: "Y",
    CHAR: "Y",
    CHECK: "Y",
    CLUSTER: "Y",
    COLUMN: "N",
    COMMENT: "N",
    COMPRESS: "Y",
    CONNECT: "Y",
    CREATE: "Y",
    CURRENT: "N",
    DATE: "Y",
    DECIMAL: "Y",
    DEFAULT: "Y",
    DELETE: "Y",
    DESC: "Y",
    DISTINCT: "Y",
    DROP: "Y",
    ELSE: "Y",
    EXCEPT: "Y",
    EXCLUSIVE: "Y",
    EXISTS: "Y",
    FILE: "N",
    FLOAT: "Y",
    FOR: "Y",
    FROM: "Y",
    GRANT: "Y",
    GROUP: "Y",
    HAVING: "Y",
    IDENTIFIED: "Y",
    IMMEDIATE: "N",
    IN: "Y",
    INCREMENT: "N",
    INDEX: "Y",
    INITIAL: "N",
    INSERT: "Y",
    INTEGER: "Y",
    INTERSECT: "Y",
    INTO: "Y",
    IS: "Y",
    LEVEL: "N",
    LIKE: "Y",
    LOCK: "Y",
    LONG: "Y",
    MAXEXTENTS: "N",
    MINUS: "Y",
    MLSLABEL: "N",
    MODE: "Y",
    MODIFY: "N",
    NOAUDIT: "N",
    NOCOMPRESS: "Y",
    NOT: "Y",
    NOWAIT: "Y",
    NULL: "Y",
    NUMBER: "Y",
    OF: "Y",
    OFFLINE: "N",
    ON: "Y",
    ONLINE: "N",
    OPTION: "Y",
    OR: "Y",
    ORDER: "Y",
    PCTFREE: "Y",
    PRIOR: "Y",
    PUBLIC: "Y",
    RAW: "Y",
    RENAME: "Y",
    RESOURCE: "Y",
    REVOKE: "Y",
    ROW: "N",
    ROWID: "N",
    ROWNUM: "N",
    ROWS: "N",
    SELECT: "Y",
    SESSION: "N",
    SET: "Y",
    SHARE: "Y",
    SIZE: "Y",
    SMALLINT: "Y",
    START: "Y",
    SUCCESSFUL: "N",
    SYNONYM: "Y",
    SYSDATE: "N",
    TABLE: "Y",
    THEN: "Y",
    TO: "Y",
    TRIGGER: "Y",
    UID: "N",
    UNION: "Y",
    UNIQUE: "Y",
    UPDATE: "Y",
    USER: "N",
    VALIDATE: "N",
    VALUES: "Y",
    VARCHAR: "Y",
    VARCHAR2: "Y",
    VIEW: "Y",
    WHENEVER: "N",
    WHERE: "Y",
    WITH: "Y"
  };
  let E = m.toUpperCase();
  return b[E] != null ? "the_" + m : m;
}
let se = function() {
  let m, b = "    ", E = ["string", "varchar2", "varchar", "vc", "char"];
  var k = ["yn", "boolean", "bool"];
  function M(y, S, i) {
    this.line = y, this.parent = i, this.children = [], i != null && i.children.push(this), this.fks = null, this.descendants = function() {
      var r = [];
      r.push(this);
      for (var t = 0; t < this.children.length; t++)
        r = r.concat(this.children[t].descendants());
      return r;
    }, this.maxChildNameLen = function() {
      var r = 2, t = this.trimmedContent().toUpperCase();
      if ((m.optionEQvalue("rowkey", !0) || 0 < t.indexOf("/ROWKEY")) && (r = 7), (m.optionEQvalue("Row Version Number", "yes") || 0 < t.indexOf("/ROWVERSION")) && (r = 11), m.optionEQvalue("Audit Columns", "yes") || 0 < t.indexOf("/AUDITCOLS")) {
        let B = m.getOptionValue("createdcol").length;
        r < B && (r = B), B = m.getOptionValue("createdbycol").length, r < B && (r = B), B = m.getOptionValue("updatedcol").length, r < B && (r = B), B = m.getOptionValue("updatedbycol").length, r < B && (r = B);
      }
      if (this.fks != null)
        for (var l in this.fks) {
          var o = l.length;
          let B = m.find(l);
          B != null && B.isMany2One() && (o += 3), r < o && (r = o);
        }
      for (var d = 0; d < this.children.length; d++) {
        let B = this.children[d];
        if (0 < B.children.length)
          continue;
        let I = B.parseName().length;
        0 < B.indexOf("file") && (I += 9), r < I && (r = I);
      }
      var L = m.additionalColumns();
      for (let B in L) {
        let I = B.length;
        r < I && (r = I);
      }
      return r;
    };
    function u(r) {
      let t = r;
      return t = t.replace(/ timestamp with local time zone/gi, " tswltz"), t = t.replace(/ timestamp with time zone/gi, " tswtz"), t = t.replace(/ timestamp/gi, " ts"), t;
    }
    this.content = u(S), this.comment, this.indexOf = function(r, t) {
      for (let l = 0; l < this.src.length; l++) {
        if (t && this.src[l].value.indexOf(r) == 0)
          return l;
        if (r == this.src[l].value)
          return l;
      }
      return -1;
    }, this.trimmedContent = function() {
      var r = this.content.trim(), t = r.indexOf("["), l = r.indexOf("]");
      return this.comment == null && 0 < t && (this.comment = r.substr(t + 1, l - t - 1)), 0 < t && (r = r.substr(0, t) + r.substr(l + 2)), t = r.indexOf("--"), this.comment == null && 0 < t && (this.comment = r.substr(t + 2)), 0 < t && (r = r.substr(0, t)), r.trim();
    }, this.src = ee(this.content.toLowerCase(), !1, !0, ""), this.parseName = function() {
      let r = this.trimmedContent();
      r = r.replace(/\t/, b);
      const t = r.indexOf('"'), l = r.indexOf('"', t + 1);
      if (0 <= t && t < l)
        return r.substring(t, l + 1);
      (r.indexOf(">") == 0 || r.indexOf("<") == 0) && (r = r.substring(1).trim());
      const o = r.toLowerCase();
      if (o.indexOf("view ") == 0) {
        var d = r.split(" ");
        return d[1];
      }
      r = p(r, " d");
      var L = r.indexOf("/");
      0 < L && (r = r.substring(0, L)), r = r.trim(), r = p(r, " integer"), r = p(r, " number"), r = p(r, " int"), r = p(r, " num"), r = p(r, " clob"), r = p(r, " blob"), r = p(r, " json"), r = p(r, " file"), r = p(r, " date"), r = p(r, " tstz"), r = p(r, " tswtz"), r = p(r, " tswltz"), r = p(r, " ts"), r = r.replace(/ vc\d+k/g, ""), r = r.replace(/ vc\(\d+\)/g, ""), r = r.replace(/ vc\d+/g, "");
      for (let I in E) {
        let T = o.indexOf(" " + E[I]);
        if (0 < T) {
          r = r.substring(0, T) + r.substring(T + E[I].length + 1);
          break;
        }
      }
      for (let I in k) {
        let T = o.indexOf(" " + k[I]);
        if (0 < T) {
          r = r.substring(0, T) + r.substring(T + k[I].length + 1);
          break;
        }
      }
      r = r.replace(/ num(ber)?\(\d+\)/g, ""), r = r.replace(/ num(ber)?\(\d+,\d+\)/g, ""), r = r.replace(/ num(ber)?\d+/g, ""), r = r.trim(), this.children.length == 0 && this.parent != null && this.parent.colprefix != null && (r = this.parent.colprefix + "_" + r);
      var B = r.substr(0, 1);
      return B >= "0" && B <= "9" && (r = "x" + r), pe(me(r));
    }, this.parseType = function(r) {
      if (this.children != null && 0 < this.children.length)
        return "table";
      const t = this.src;
      if (t[0].value == "view")
        return "view";
      if (t[0].value == "dv")
        return "dv";
      if (this.parent == null)
        return "table";
      var l = m.semantics(), o = 4e3;
      (t[0].value.startsWith("name") || t[0].value.startsWith("email")) && (o = 255);
      var d, L, B;
      const I = this.indexOf("vc", !0);
      if (0 < I) {
        d = t[I].begin, L = t[I].end;
        let D = t[I].value.substring(2);
        D == "" && this.indexOf("(") == I + 1 && (D = t[I + 2].value), D != "" && (o = parseInt(D)), t[I].value.endsWith("k") && (o < 32 ? o = o * 1024 : o = o * 1024 - 1);
      }
      var T = "varchar2(" + o + l + ")";
      r == "plsql" && (T = "varchar2"), 0 < this.indexOf("int", !0) && (T = "integer"), t[0].value.endsWith("_id") && I < 0 && this.indexOf("date") < 0 && (T = "number"), t[0].value.endsWith("id") && I < 0 && this.indexOf("/") + 1 == this.indexOf("pk") && (T = "number");
      let N = J(i.parseName(), "_", this.parseName());
      (t[0].value.endsWith("_yn") || t[0].value.startsWith("is_")) && (T = "varchar2(1 char) constraint " + J(m.objPrefix(), N) + `
`, T += b + b + " ".repeat(i.maxChildNameLen()) + "check (" + this.parseName() + " in ('Y','N'))");
      for (let D in k)
        if (0 < this.indexOf(k[D])) {
          T = "varchar2(1 char) constraint " + J(m.objPrefix(), N) + `
`, T += b + b + " ".repeat(i.maxChildNameLen()) + "check (" + this.parseName() + " in ('Y','N'))";
          break;
        }
      this.indexOf("phone_number") == 0 && (T = "number");
      let F = this.indexOf("num", !0);
      0 < F && (T = "number");
      let w = this.indexOf(")");
      if (0 < F && 0 < w && (T += this.content.toLowerCase().substring(t[F + 1].begin, t[w].end)), (0 <= this.indexOf("date") || this.indexOf("hiredate") == 0 || t[0].value.endsWith("_date") || t[0].value.startsWith("date_of_") || 1 < t.length && t[1].value == "d" || t[0].value == "CREATED_ON".toLowerCase() || t[0].value == "UPDATED_ON".toLowerCase()) && (T = m.getOptionValue("Date Data Type").toLowerCase()), I < 0 && (0 < this.indexOf("clob") && (T = "clob"), (0 < this.indexOf("blob") || 0 < this.indexOf("file")) && (T = "blob"), 0 < this.indexOf("json") && (T = "clob check (" + this.parseName() + " is json)")), 0 < this.indexOf("tswltz") ? T = "TIMESTAMP WITH LOCAL TIME ZONE".toLowerCase() : 0 < this.indexOf("tswtz") || 0 < this.indexOf("tstz") ? T = "TIMESTAMP WITH TIME ZONE".toLowerCase() : 0 < this.indexOf("ts") && (T = "TIMESTAMP".toLowerCase()), r) {
        if (0 < this.indexOf("fk") || 0 < this.indexOf("reference")) {
          const D = this.refId();
          let O = "number", G = m.find(D);
          return G != null && G.getExplicitPkNode() != null && (O = G.getExplicitPkNode().parseType((e) => !0)), O;
        }
        return T;
      }
      0 < this.indexOf("unique") && (T += `
`, T += b + b + " ".repeat(i.maxChildNameLen()) + "constraint " + N + "_unq unique");
      var R = "'";
      if ((T.startsWith("integer") || T.startsWith("number") || T.startsWith("date")) && (R = ""), 0 < this.indexOf("default")) {
        const D = t[this.indexOf("default") + 1].value;
        T += " default on null " + R + D + R;
      }
      if ((0 < this.indexOf("nn") || this.indexOf("not") + 1 == this.indexOf("null")) && this.indexOf("pk") < 0 && (T += " not null"), (0 < this.indexOf("hidden") || 0 < this.indexOf("invincible")) && (T += " invisible"), 0 < this.indexOf("check")) {
        const D = this.trimmedContent().toUpperCase();
        d = D.indexOf("/CHECK"), L = D.lastIndexOf("/"), L == d && (L = D.length), B = this.trimmedContent().substr(d + 6, L - d - 6).trim(), 0 < B.indexOf(", ") ? B = B.replace(/, /g, R + "," + R) : 0 < B.indexOf(",") ? B = B.replace(/,/g, R + "," + R) : B = B.replace(/ /g, R + "," + R), T += " constraint " + J(m.objPrefix(), N, "_ck") + `
`, T += b + b + " ".repeat(i.maxChildNameLen()) + "check (" + this.parseName() + " in (" + R + B + R + "))", T = T.replace(/''/gm, "'");
      }
      if (0 < this.indexOf("between")) {
        const D = this.indexOf("between"), O = t[D + 1].value + " and " + t[D + 3].value;
        T += " constraint " + J(N, "_bet") + `
`, T += "           check (" + this.parseName() + " between " + O + ")";
      }
      if (0 < this.indexOf("pk")) {
        let D = " not null";
        T.startsWith("number") && m.optionEQvalue("pk", Z) && (D = " GENERATED BY DEFAULT ON NULL AS IDENTITY".toLowerCase()), T.startsWith("number") && m.optionEQvalue("pk", "seq") && (D = " default on null " + (m.objPrefix() + this.parent.parseName()) + "_seq.NEXTVAL ".toLowerCase()), T.startsWith("number") && m.optionEQvalue("pk", Q) && (D = " default on null to_number(sys_guid(), 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') "), T += D + `
`, T += b + b + " ".repeat(i.maxChildNameLen()) + "constraint " + J(m.objPrefix(), N, "_pk") + " primary key";
      }
      return T;
    }, this.isMany2One = function() {
      var r = this.trimmedContent(), t = r.indexOf(">");
      return t == 0;
    }, this.getExplicitPkNode = function() {
      for (var r = 0; r < this.children.length; r++) {
        var t = this.children[r], l = t.trimmedContent().toLowerCase();
        if (0 < l.indexOf("/pk"))
          return t;
      }
      return null;
    }, this.refId = function() {
      var r = this.trimmedContent();
      r = r.replace(/\/cascade/g, "");
      var t = r.indexOf(" id ");
      if (t < 0 && t == r.length - 3 && (t = r.indexOf(" id")), t < 0 && (t = r.indexOf(" id"), t != r.length - 3 && (t = -1)), t < 0 && (t = r.indexOf("_id "), t != r.length - 4 && (t = -1)), t < 0 && (t = r.indexOf("_id"), t != r.length - 3 && (t = -1)), t < 0 && (t = r.indexOf("Id "), t != r.length - 3 && (t = -1)), 0 < t) {
        let l = r.substr(0, t) + "s";
        if (m.find(l) != null || (l = r.substr(0, t), m.find(l) != null))
          return l;
      }
      return t = r.indexOf("/fk"), 0 < t ? (r = r.substr(t + 3).trim(), t = r.indexOf("/"), 0 < t && (r = r.substring(0, t).trim()), r.replace(" ", "_")) : (t = r.indexOf("/reference"), 0 < t ? (r = r.substr(t + 10).trim(), r.indexOf("s") == 0 && (r = r.substring(1).trim()), t = r.indexOf("/"), 0 < t && (r = r.substring(0, t).trim()), r.replace(" ", "_")) : null);
    }, this.parseValues = function() {
      var r = this.trimmedContent().toUpperCase(), t, l, o;
      if (0 <= r.indexOf("/CHECK") || 0 <= r.indexOf("/VALUES")) {
        var d = "/CHECK";
        return t = r.indexOf(d), t < 0 && (d = "/VALUES", t = r.indexOf(d)), l = r.lastIndexOf("/"), l == t && (l = r.length), o = r.substr(t + d.length, l - t - d.length).trim(), 0 < o.indexOf(",") ? (o = o.replace(/ /g, ""), o.split(",")) : o.split(" ");
      }
      if (0 <= r.indexOf("/BETWEEN")) {
        t = r.indexOf("/BETWEEN"), l = r.lastIndexOf("/"), l == t && (l = r.length), o = r.substr(t + 8, l - t - 8).trim(), o = o.replace(" AND ", " ");
        for (var L = [], B = parseInt(o.split(" ")[0]); B <= parseInt(o.split(" ")[1]); B++)
          L.push(B);
        return L;
      }
      return null;
    }, this.apparentDepth = function() {
      let r = this.content.split(/ |\t/), t = 0;
      for (var l = 0; l < r.length; l++) {
        var o = r[l];
        if (o == "	") {
          t += this.tab;
          continue;
        }
        if (o == "") {
          t++;
          continue;
        }
        return t;
      }
      throw "No alphanumerics in the node content";
    }, this.depth = function() {
      return this.parent == null ? 0 : this.parent.depth() + 1;
    }, this.isLeaf = function() {
      return this.children.every((r) => r.children.length == 0);
    }, this.getGenIdColName = function() {
      if (this.parseType() != "table" || this.getExplicitPkNode() != null)
        return null;
      if (m.optionEQvalue("Auto Primary Key", "yes")) {
        let t = "";
        return this.colprefix != null && (t = this.colprefix + "_"), m.optionEQvalue("prefixPKwithTname", "yes") && (t = z(this.parseName()) + "_"), t + "id";
      }
      return null;
    }, this.getPkName = function() {
      let r = this.getGenIdColName();
      return r ?? this.getExplicitPkNode().parseName();
    }, this.toDDL = function() {
      if (this.parseType() == "view" || this.parseType() == "dv")
        return "";
      if (this.children.length == 0 && 0 < this.apparentDepth()) {
        let a = b;
        return this.parent != null && (a += " ".repeat(this.parent.maxChildNameLen() - this.parseName().length)), this.parseName() + a + this.parseType();
      }
      if (this.fks == null && (this.fks = []), !this.isMany2One()) {
        this.parent != null && this.parseType() == "table" && (this.fks[z(this.parent.parseName()) + "_id"] = this.parent.parseName());
        for (let a = 0; a < this.children.length; a++)
          this.children[a].refId() != null && (this.fks[this.children[a].parseName()] = this.children[a].refId());
      }
      const r = this.trimmedContent().toUpperCase();
      var t = r.indexOf("/COLPREFIX ");
      if (0 < t) {
        let n = r.substr(t + 11).split(" ");
        this.colprefix = n[0];
      }
      var l = [], o = "";
      let d = m.objPrefix() + this.parseName();
      m.optionEQvalue("pk", "SEQ") && m.optionEQvalue("genpk", !0) && (o = o + "create sequence  " + d + `_seq;

`), o = o + "create table " + d + ` (
`;
      var L = b + " ".repeat(this.maxChildNameLen() - 2);
      let B = this.getGenIdColName();
      if (B != null) {
        let a = "not null";
        m.optionEQvalue("pk", Z) && (a = "GENERATED BY DEFAULT ON NULL AS IDENTITY".toLowerCase()), m.optionEQvalue("pk", "seq") && (a = "default on null " + d + "_seq.NEXTVAL ".toLowerCase()), m.optionEQvalue("pk", Q) && (a = "default on null to_number(sys_guid(), 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX') "), o += b + B + L + "number " + a + `
`;
        const n = J(d, "_", B);
        o += b + b + " ".repeat(this.maxChildNameLen()) + "constraint " + J(n, "_pk") + ` primary key,
`;
      } else {
        let a = this.getExplicitPkNode();
        if (a != null) {
          let n = b + " ".repeat(this.maxChildNameLen() - a.parseName().length);
          o += b + a.parseName() + n + a.parseType() + `,
`;
        }
      }
      for (let a in this.fks) {
        let n = this.fks[a], s = "number", c = m.find(n), g = "";
        c != null && c.getExplicitPkNode() != null ? s = c.getExplicitPkNode().parseType((v) => !0) : c == null && (c = m.find(a), c.isMany2One() & !a.endsWith("_id") && (n = a, a = z(a), g = "_id")), L = b + " ".repeat(this.maxChildNameLen() - a.length), o += b + a + g + L + s + `
`, o += b + b + " ".repeat(this.maxChildNameLen()) + "constraint " + d + "_" + a + `_fk
`;
        let P = "";
        0 <= r.indexOf("/CASCADE") && (P = " on delete cascade");
        let f = "";
        for (let v in this.children) {
          let C = this.children[v];
          if (a == C.parseName()) {
            let A = C.trimmedContent().toUpperCase();
            (0 <= A.indexOf("/NN") || 0 <= A.indexOf("/NOTNULL")) && (f = " NOT NULL".toLowerCase()), 0 <= A.indexOf("/CASCADE") && (P = " on delete cascade");
            break;
          }
        }
        o += b + b + " ".repeat(this.maxChildNameLen()) + "references " + m.objPrefix() + n + P + f + `,
`;
      }
      if (m.optionEQvalue("rowkey", !0) || 0 < r.indexOf("/ROWKEY")) {
        let a = b + " ".repeat(this.maxChildNameLen() - 7);
        o += b + "row_key" + a + `varchar2(30 char)
`, o += b + b + " ".repeat(this.maxChildNameLen()) + "constraint " + d + `_row_key_unq unique not null,
`;
      }
      for (let a = 0; a < this.children.length; a++) {
        let n = this.children[a];
        if (!(B != null && n.parseName() == "id")) {
          if (0 < n.children.length) {
            l.push(n);
            continue;
          }
          if (n.refId() == null) {
            if (n == this.getExplicitPkNode())
              continue;
            if (o += b + n.toDDL([]) + `,
`, 0 < n.indexOf("file")) {
              const s = n.parseName().toUpperCase();
              let c = s + "_FILENAME", g = b + " ".repeat(this.maxChildNameLen() - c.length);
              o += b + c.toLowerCase() + g + "varchar2(255" + m.semantics() + `),
`, c = s + "_MIMETYPE", g = b + " ".repeat(this.maxChildNameLen() - c.length), o += b + c.toLowerCase() + g + "varchar2(255" + m.semantics() + `),
`, c = s + "_CHARSET", g = b + " ".repeat(this.maxChildNameLen() - c.length), o += b + c.toLowerCase() + g + "varchar2(255" + m.semantics() + `),
`, c = s + "_LASTUPD", g = b + " ".repeat(this.maxChildNameLen() - c.length), o += b + c.toLowerCase() + g + m.getOptionValue("Date Data Type").toLowerCase() + `,
`;
            }
          }
        }
      }
      if (m.optionEQvalue("rowVersion", "yes") || 0 < r.indexOf("/ROWVERSION")) {
        let a = b + " ".repeat(this.maxChildNameLen() - 11);
        o += b + "row_version" + a + `integer not null,
`;
      }
      if (m.optionEQvalue("Audit Columns", "yes") || 0 < r.indexOf("/AUDITCOLS")) {
        let a = m.getOptionValue("createdcol"), n = b + " ".repeat(this.maxChildNameLen() - a.length);
        o += b + a + n + m.getOptionValue("Date Data Type").toLowerCase() + ` not null,
`;
        let s = m.getOptionValue("createdbycol");
        n = b + " ".repeat(this.maxChildNameLen() - s.length), o += b + s + n + "varchar2(255" + m.semantics() + `) not null,
`;
        let c = m.getOptionValue("updatedcol");
        n = b + " ".repeat(this.maxChildNameLen() - c.length), o += b + c + n + m.getOptionValue("Date Data Type").toLowerCase() + ` not null,
`;
        let g = m.getOptionValue("updatedbycol");
        n = b + " ".repeat(this.maxChildNameLen() - g.length), o += b + g + n + "varchar2(255" + m.semantics() + `) not null,
`;
      }
      var I = m.additionalColumns();
      for (let a in I) {
        var T = I[a];
        L = b + " ".repeat(this.maxChildNameLen() - a.length), o += b + a.toUpperCase() + L + T + ` not null,
`;
      }
      o.lastIndexOf(`,
`) == o.length - 2 && (o = o.substr(0, o.length - 2) + `
`), o += ")" + (m.optionEQvalue("compress", "yes") || 0 < r.indexOf("/COMPRESS") ? " compress" : "") + `;

`;
      let N = r.indexOf("/AUDIT"), F = r.indexOf("/AUDITCOLS");
      0 < N && N != F && (o += "audit all on " + d + `;

`);
      let w = 1;
      for (let a in this.fks)
        if (!this.isMany2One()) {
          var R = this.fks[a], D = R, O = a;
          O == null && (O = z(D) + "_id"), w == 1 && (o += `-- table index
`), o += "create index " + d + "_i" + w++ + " on " + d + " (" + O + `);

`;
        }
      let G = r.indexOf("/UNIQUE ");
      if (0 < G) {
        let a = r.substr(G + 8), n = a.indexOf("/");
        0 < n && (a = a.substring(0, n).trim()), o += "alter table " + d + " add constraint " + d + "_uk unique (" + a + `);

`;
      }
      for (let a = 0; a < this.children.length; a++) {
        var e = this.children[a];
        let n = e.trimmedContent().toUpperCase();
        (0 <= n.indexOf("/IDX") || 0 <= n.indexOf("/INDEX")) && (w == 1 && (o += `-- table index
`), o += "create index " + d + "_i" + w++ + " on " + d + " (" + e.parseName() + `);
`);
      }
      this.comment != null && (o += "comment on table " + d + " is '" + this.comment + `';
`);
      for (let a = 0; a < this.children.length; a++) {
        let n = this.children[a];
        n.comment != null && n.children.length == 0 && (o += "comment on column " + d + "." + n.parseName() + " is '" + n.comment + `';
`);
      }
      o += `
`;
      for (let a = 0; a < l.length; a++)
        o += l[a].toDDL();
      return o;
    }, this.generateDrop = function() {
      let r = m.objPrefix() + this.parseName(), t = "";
      return this.parseType() == "view" && (t = "drop view " + r + `;
`), this.parseType() == "table" && (t = "drop table " + r + ` cascade constraints;
`, m.optionEQvalue("api", "yes") && (t += "drop package " + r + `_api;
`)), t.toLowerCase();
    }, this.generateView = function() {
      if (this.parseType() != "view" && this.parseType() != "dv")
        return "";
      if (m.optionEQvalue("Duality View", "yes") || this.parseType() == "dv")
        return this.generateDualityView();
      let r = m.objPrefix() + this.parseName();
      var l = this.trimmedContent().split(" "), o = "create or replace view " + r + ` as
`;
      o += `select
`;
      for (var d = 0, L = 2; L < l.length; L++) {
        let c = m.find(l[L]);
        if (c == null)
          return "";
        var B = (l[L] + ".id").length;
        d < B && (d = B);
        for (var I = 0; I < c.children.length; I++) {
          var T = c.children[I];
          B = (l[L] + "." + T.parseName()).length, d < B && (d = B);
        }
      }
      var N = {};
      for (let c = 2; c < l.length; c++) {
        let g = m.find(l[c]);
        if (g != null)
          for (let P = 0; P < g.children.length; P++) {
            var F = g.children[P].parseName(), w = N[F];
            w == null && (w = 0), N[F] = w + 1;
          }
      }
      for (let c = 2; c < l.length; c++) {
        let g = m.find(l[c]);
        if (g == null)
          continue;
        let P = " ".repeat(d - (l[c] + ".id").length);
        o += b + l[c] + ".id" + b + P + z(l[c]) + `_id,
`;
        for (let v = 0; v < g.children.length; v++) {
          let C = g.children[v];
          if (C.children.length == 0) {
            P = " ".repeat(d - (l[c] + "." + C.parseName()).length);
            var R = "";
            1 < N[C.parseName()] && (R = z(l[c]) + "_"), o += b + l[c] + "." + C.parseName() + b + P + R + C.parseName() + `,
`;
          }
        }
        let f = g.trimmedContent().toUpperCase();
        if (m.optionEQvalue("rowVersion", "yes") || 0 < f.indexOf("/ROWVERSION")) {
          let v = b + " ".repeat(g.maxChildNameLen() - 11);
          o += b + l[c] + ".row_version" + z(v + l[c]) + `_row_version,
`;
        }
        if (m.optionEQvalue("rowkey", "yes") || 0 < f.indexOf("/ROWKEY")) {
          let v = b + " ".repeat(g.maxChildNameLen() - 7);
          o += b + l[c] + ".ROW_KEY" + z(v + l[c]) + `_ROW_KEY,
`;
        }
        if (m.optionEQvalue("Audit Columns", "yes") || 0 < f.indexOf("/AUDITCOLS")) {
          let v = m.getOptionValue("createdcol"), C = b + " ".repeat(g.maxChildNameLen() - v.length);
          o += b + l[c] + "." + v + z(C + l[c]) + "_" + v + `,
`;
          let A = m.getOptionValue("createdbycol");
          C = b + " ".repeat(g.maxChildNameLen() - A.length), o += b + l[c] + "." + A + z(C + l[c]) + "_" + A + `,
`;
          let H = m.getOptionValue("updatedcol");
          C = b + " ".repeat(g.maxChildNameLen() - H.length), o += b + l[c] + "." + H + z(C + l[c]) + "_" + H + `,
`;
          let _ = m.getOptionValue("updatedbycol");
          C = b + " ".repeat(g.maxChildNameLen() - _.length), o += b + l[c] + "." + _ + z(C + l[c]) + "_" + _ + `,
`;
        }
      }
      o.lastIndexOf(`,
`) == o.length - 2 && (o = o.substr(0, o.length - 2) + `
`), o += `from
`;
      for (let c = 2; c < l.length; c++) {
        let g = " ".repeat(d - l[c].length);
        var D = l[c];
        m.objPrefix() != null && m.objPrefix() != "" && m.objPrefix() + l[c] + g + l[c], o += b + D + `,
`;
      }
      o.lastIndexOf(`,
`) == o.length - 2 && (o = o.substr(0, o.length - 2) + `
`), o += `where
`;
      for (let c = 2; c < l.length; c++)
        for (let g = 2; g < l.length; g++)
          if (g != c) {
            var O = l[c], G = l[g], e = m.find(O);
            if (e != null) {
              var a = m.find(G);
              if (a != null)
                for (var n in e.fks) {
                  var s = e.fks[n];
                  s == G && (o += b + O + "." + z(s) + "_id(+) = " + G + `.id and
`);
                }
            }
          }
      return o = p(o, `where
`), o.lastIndexOf(" and") == o.length - 4 && (o = o.substring(0, o.length - 4) + `
`), o += `/
`, o.toLowerCase();
    }, this.restEnable = function() {
      if (this.parseType() != "table" || this.trimmedContent().toUpperCase().indexOf("/REST") < 0)
        return "";
      let l = this.parseName();
      const o = l.indexOf('"') == 0;
      let d = m.objPrefix() + l;
      return o ? d = m.objPrefix() + l.substring(1, l.length - 1) : d = (m.objPrefix() + l).toUpperCase(), `begin
` + b + "ords.enable_object(p_enabled=>TRUE, p_object=>'" + d + `');
end;
/
`;
    }, this.generateTrigger = function() {
      if (this.parseType() != "table")
        return "";
      let r = "";
      m.optionEQvalue("editionable", "yes") && (r = " editionable");
      let t = m.objPrefix() + this.parseName();
      var l = "create or replace" + r + " trigger " + t.toLowerCase() + `_BIU
`.toLowerCase();
      l += `    before insert or update
`, l += "    on " + t.toLowerCase() + `
`, l += `    for each row
`;
      let o = this.trimmedContent().toUpperCase();
      (m.optionEQvalue("Rowkey", "yes") || 0 < o.indexOf("/ROWKEY")) && (l += `declare
    function compress_int (n in integer ) return varchar2
    as
        ret       varchar2(30);
        quotient  integer;
        remainder integer;
        digit     char(1);
    begin
        ret := null; quotient := n;
        while quotient > 0
        loop
            remainder := mod(quotient, 10 + 26);
            quotient := floor(quotient  / (10 + 26));
            if remainder < 26 then
                digit := chr(ascii('A') + remainder);
            else
                digit := chr(ascii('0') + remainder - 26);
            end if;
            ret := digit || ret;
        end loop ;
        if length(ret) < 5 then ret := lpad(ret, 4, 'A'); end if ;
        return upper(ret);
    end compress_int;
`), l += `begin
`;
      var d = !1, L = "user";
      m.optionEQvalue("apex", "yes") && (L = "coalesce(sys_context('APEX$SESSION','APP_USER'),user)"), (m.optionEQvalue("rowkey", "yes") || 0 < o.indexOf("/ROWKEY")) && (l += `    if inserting then
`, l += `        :new.row_key := compress_int(row_key_seq.nextval);
`, l += `    end if;
`, d = !0);
      for (var B = 0; B < this.children.length; B++) {
        var I = this.children[B];
        let w = null;
        0 < I.content.indexOf("/lower") ? w = "LOWER".toLowerCase() : 0 < I.content.indexOf("/upper") && (w = "UPPER".toLowerCase()), w != null && (l += "    :new." + I.parseName().toLowerCase() + " := " + w + "(:new." + I.parseName().toLowerCase() + `);
`, d = !0);
      }
      (m.optionEQvalue("Row Version Number", "yes") || 0 < o.indexOf("/ROWVERSION")) && (l += `    if inserting then
`, l += `        :new.row_version := 1;
`, l += `    elsif updating then
`, l += `        :new.row_version := NVL(:old.row_version, 0) + 1;
`, l += `    end if;
`, d = !0), (m.optionEQvalue("Audit Columns", "yes") || 0 < o.indexOf("/AUDITCOLS")) && (l += `    if inserting then
`, l += "        :new." + m.getOptionValue("createdcol") + ` := SYSDATE;
`.toLowerCase(), l += "        :new." + m.getOptionValue("createdbycol") + " := " + L + `;
`.toLowerCase(), l += `    end if;
`, l += "    :new." + m.getOptionValue("updatedcol") + ` := SYSDATE;
`.toLowerCase(), l += "    :new." + m.getOptionValue("updatedbycol") + " := " + L + `;
`.toLowerCase(), d = !0), m.optionEQvalue("genpk", "yes") && m.optionEQvalue("pk", Q) && (l += `    if :new.id is null then
`, l += `        :new.id := to_number(sys_guid(), 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
`, l += `    end if;
`, d = !0);
      var T = m.additionalColumns();
      for (var N in T) {
        var F = T[N];
        l += "    if :new." + N + ` is null then
`, F.startsWith("INT") ? l += "        " + N + ` := 0;
` : l += "        " + N + ` := 'N/A';
`, l += `    end if;
`, d = !0;
      }
      return d ? (l += "end " + t.toLowerCase() + `_BIU;
/

`.toLowerCase(), l) : "";
    }, this.procDecl = function(r) {
      let t = "";
      r != "get" && (t = " default null");
      let l = "out";
      r != "get" && (l = " in");
      let o = b + "procedure " + r + `_row (
`;
      o += b + b + "p_id        in  number" + t;
      for (var d in this.fks) {
        let B = this.fks[d], I = "number", T = m.find(B);
        T != null && T.getExplicitPkNode() != null && (I = T.getExplicitPkNode().parseType((N) => !0)), o += `,
`, o += b + b + "P_" + d + "   " + l + "  " + I + t;
      }
      for (let B = 0; B < this.children.length; B++) {
        var L = this.children[B];
        L.children.length == 0 && (o += `,
`, o += b + b + "P_" + L.parseName() + "   " + l + "  " + L.parseType("plsql") + t);
      }
      return o += `
    )`, o;
    }, this.procBody = function(r) {
      let t = m.objPrefix() + this.parseName(), l = b + `is 
`;
      l += b + `begin 
`;
      let o = b + b + "for c1 in (select * from " + t + ` where id = p_id) loop 
`;
      r == "insert" && (o = b + b + "insert into " + t + ` ( 
`, o += b + b + "id"), r == "update" && (o = b + b + "update  " + t + ` set 
`, o += b + b + "id = p_id"), l += o;
      for (let I in this.fks) {
        let T = this.fks[I], N = m.find(T);
        N != null && N.getExplicitPkNode() != null && N.getExplicitPkNode().parseType((w) => !0), (r == "insert" || r == "update") && (l += `,
`);
        let F = "        P_" + I + " := c1." + I + `;
`;
        r == "insert" && (F = "        " + I), r == "update" && (F = "        " + I + " = P_" + I + `
`), l += F;
      }
      for (var d = 0; d < this.children.length; d++) {
        var L = this.children[d];
        if (L.children.length != 0)
          continue;
        (r == "insert" || r == "update") && (l += `,
`);
        let I = "        P_" + L.parseName().toLowerCase() + " := c1." + L.parseName().toLowerCase() + `;
`;
        r == "insert" && (I = "        " + L.parseName().toLowerCase()), r == "update" && (I = "        " + L.parseName().toLowerCase() + " = P_" + L.parseName().toLowerCase() + `
`), l += I;
      }
      if (r == "insert") {
        l += `        ) values ( 
`, l += "            p_id";
        for (let I in this.fks)
          l += `,
`, l += "        p_" + I;
        for (let I = 0; I < this.children.length; I++) {
          let T = this.children[I];
          T.children.length == 0 && (l += `,
`, l += "        p_" + T.parseName());
        }
      }
      let B = `
        end loop;
`;
      return r == "insert" && (B = "        );"), r == "update" && (B = "    where id = p_id;"), l += B, l += "    end " + r + `_row;
 `, l += `
 `, l;
    }, this.generateTAPI = function() {
      if (this.children.length == 0)
        return "";
      let r = m.objPrefix() + this.parseName();
      var t = "create or replace package " + r.toLowerCase() + `_API
is

`.toLowerCase();
      return t += this.procDecl("get"), t += `;

`, t += this.procDecl("insert"), t += `;

`, t += this.procDecl("update"), t += `;

`, t += `    procedure delete_row (
        p_id              in number
    );
end ` + r.toLowerCase() + `_api;
/

`, t += "create or replace package body " + r.toLowerCase() + `_API
is

`.toLowerCase(), t += this.procDecl("get"), t += `
`, t += this.procBody("get"), t += this.procDecl("insert"), t += `
`, t += this.procBody("insert"), t += this.procDecl("update"), t += `
`, t += this.procBody("update"), t += `    procedure delete_row (
`, t += `        p_id              in number
`, t += `    )
`, t += `    is
`, t += `    begin
`, t += "        delete from " + r.toLowerCase() + ` where id = p_id;
`, t += `    end delete_row;
`, t += "end " + r.toLowerCase() + `_api;
`, t += `/
`, t.toLowerCase();
    }, this.rows = 0, this.generateData = function(r, t) {
      let l = "";
      if (m.optionEQvalue("inserts", !1))
        return l;
      let o = m.objPrefix() + this.parseName(), d = this.trimmedContent().toLowerCase(), L = d.indexOf("/insert "), B = 0;
      if (0 < L) {
        d = d.substr(L + 8);
        let T = d.split(" ");
        if (this.rows = parseInt(T[0]), 0 < this.rows) {
          for (m.getOptionValue("datalimit") < this.rows && (this.rows = m.getOptionValue("datalimit")), B = 0; B < this.rows; B++) {
            let N = r;
            r != null && Array.isArray(r) && (N = r[B]), l += "insert into " + o + ` (
`;
            let F = this.getGenIdColName();
            if (F != null)
              l += b + F + `,
`;
            else {
              let w = this.getExplicitPkNode();
              w != null && (l += b + w.parseName() + `,
`);
            }
            for (let w in this.fks) {
              let R = this.fks[w], D = m.find(R), O = "";
              D == null && (D = m.find(w), D.isMany2One() & !w.endsWith("_id") && (R = w, w = z(w), O = "_id")), l += b + w + O + `,
`;
            }
            for (let w = 0; w < this.children.length; w++) {
              let R = this.children[w];
              if (!(F != null && R.parseName() == "id") && R.refId() == null) {
                if (R == this.getExplicitPkNode())
                  continue;
                R.children.length == 0 && (l += b + R.parseName() + `,
`);
              }
            }
            if (l.lastIndexOf(`,
`) == l.length - 2 && (l = l.substr(0, l.length - 2) + `
`), l += `) values (
`, F != null)
              l += b + (B + 1) + `,
`;
            else {
              let w = this.getExplicitPkNode();
              if (w != null) {
                const R = w.parseName();
                let D = h(m.data, null, R, this.parseName()), O = -1;
                N != null && (O = N[R]), D != null && D[B] != null && (O = D[B]), l += b + (O ?? B + 1) + `,
`;
              }
            }
            for (let w in this.fks) {
              let R = this.fks[w], D = m.find(R), O = [];
              for (let G = 1; G <= D.rows; G++)
                O.push(G);
              if (t != null && D != null) {
                const G = D.getPkName();
                let e = t[G];
                e != null && (O = [], O[0] = e);
              }
              if (N != null) {
                let G = N[R];
                if (G != null) {
                  let e = G[D.getPkName()];
                  e != null && (O = [], O[0] = e);
                }
              }
              l += b + oe(m.getOptionValue("Data Language"), le(o, z(R) + "_id", "INTEGER", O)) + `,
`;
            }
            for (let w = 0; w < this.children.length; w++) {
              let R = this.children[w];
              if (!(F != null && R.parseName() == "id") && R.refId() == null) {
                if (R == this.getExplicitPkNode())
                  continue;
                if (R.children.length == 0) {
                  let D = R.parseValues(), O = R.parseName();
                  if (N != null) {
                    let a = N[O];
                    a != null && (D = [], D[0] = a);
                  }
                  let G = h(m.data, null, O, this.parseName());
                  G != null && G[B] != null && (D = [], D[0] = G[B]);
                  let e = le(o, O, R.parseType(), D);
                  l += b + oe(m.getOptionValue("Data Language"), e) + `,
`;
                }
              }
            }
            l.lastIndexOf(`,
`) == l.length - 2 && (l = l.substr(0, l.length - 2) + `
`), l += `);
`;
          }
          l += `
`;
        }
      }
      l != "" && (l += `commit;

`);
      let I = this.getGenIdColName();
      I != null && 1 < B && (l += "alter table " + o + `
modify ` + I + " generated always  as identity restart start with " + (B + 1) + `;

`);
      for (let T = 0; T < this.children.length; T++) {
        const N = this.children[T];
        if (0 < N.children.length) {
          const F = r;
          let w = null;
          r != null && (w = r[N.parseName()]), l += N.generateData(w, F);
        }
      }
      return l;
    }, this.isArray = function() {
      return !this.isMany2One() && this.parent != null;
    }, this.hasNonArrayChildId = function(r) {
      if (!r.endsWith("_id"))
        return !1;
      var t = r.slice(0, -3);
      return this.children.some((l) => l.children.length > 0 && l.parseName() == t && !l.isArray());
    }, this.generateSelectJsonTopDown = function(r) {
      var t = this.parseName();
      let l = "";
      this.getExplicitPkNode == null && (l += r + "'" + this.getGenIdColName() + "' : " + t + "." + this.getGenIdColName() + `,
`);
      for (var o = 0; o < this.children.length; o++) {
        var d = this.children[o], L = d.parseName();
        if (d.children.length == 0) {
          if (this.hasNonArrayChildId(L))
            continue;
          l += r + "'" + L + "' : " + t + "." + L;
        } else {
          l += r + "'" + L + `' : [
`, d.isMany2One(), r += "  ", l += r + `select JSON {
`, l += d.generateSelectJsonTopDown(r + "  "), l += r + " WITH NOCHECK } from " + L + ` with INSERT UPDATE
`;
          let T = null;
          for (var B in d.fks) {
            var I = d.fks[B];
            if (I == t) {
              T = B;
              break;
            }
          }
          const N = t + "." + this.getPkName(), F = L + "." + T;
          l += r + "where " + F + " = " + N + `
`, r = r.slice(0, -2), l += r + "]";
        }
        l += o < this.children.length - 1 ? `,
` : `
`;
      }
      return l[l.length - 2] == "," ? l.slice(0, -2) + `
` : l;
    }, this.generateDualityView = function() {
      var r = this.trimmedContent(), t = r.split(" ");
      if (3 < t.length)
        throw "max 1 table is allowed in DV";
      var l = "", o = m.find(t[2]);
      return o != null && (l += "create or replace json relational duality view " + t[1] + ` as
`, l += `select JSON {
`, l += // tbl.isLeaf()? tbl.generateSelectJsonBottomUp('  ') :        what if middle?
      o.generateSelectJsonTopDown("  "), l += "} from " + o.parseName() + ` with INSERT UPDATE DELETE;

`), l;
    };
  }
  function x(y) {
    m = y;
    const S = y.input;
    let i = [], u = [];
    const r = ee(S + `
`, !0, !0, "");
    m.data = null;
    let t = null, l = "", o = 0;
    e:
      for (let d in r) {
        const L = r[d];
        if (L.value == `
` && t == null) {
          if (l = l.replace(/\r/g, ""), l.replace(/\r/g, "").replace(/ /g, "") == "") {
            l = "", o++;
            continue;
          }
          let I = new M(o, l, null), T = !1;
          for (let N = 0; N < i.length; N++) {
            let F = i[N];
            if (I.apparentDepth() <= F.apparentDepth())
              if (0 < N) {
                let w = i[N - 1];
                I = new M(o, l, w), i[N] = I, i = i.slice(0, N + 1), T = !0;
                break;
              } else
                i[0] = I, i = i.slice(0, 1), u.push(I), T = !0;
          }
          if (!T) {
            if (0 < i.length) {
              let N = i[i.length - 1];
              I = new M(o, l, N);
            }
            i.push(I), I.apparentDepth() == 0 && u.push(I);
          }
          if (I.isMany2One()) {
            const N = I.parent;
            N.fks == null && (N.fks = []);
            let F = I.refId();
            F == null && (F = I.parseName()), N.fks[I.parseName() + "_id"] = F;
          }
          o++, l = "";
          continue;
        }
        if (t == null && L.value == "#") {
          t = "";
          continue;
        }
        if (t != null) {
          if (t += L.value, L.value != `
` && L.value != "}")
            continue;
          const B = ee(t, !1, !0, "");
          if (B.length % 4 == 3 && B[1].value == ":") {
            y.setOptions(t), t = null, l = "";
            continue;
          }
          let I = null, T = null;
          for (let N in B) {
            const F = B[N];
            if (I == null && F.value == "document") {
              I = "";
              continue;
            }
            if (I != null) {
              if (I += F.value, I == "=")
                continue;
              let w = I.substring(1);
              try {
                m.data = JSON.parse(w), t = null, l = "";
                continue e;
              } catch {
              }
            }
            if (T == null && F.value == "settings") {
              T = "";
              continue;
            }
            if (T != null) {
              T += F.value, T.substring(1);
              try {
                y.setOptions(T), t = null, l = "";
                continue e;
              } catch {
              }
            }
          }
        }
        if (L.type != "comment") {
          if (L.type == "line-comment") {
            0 < l.trim().length && (l += L.value);
            continue;
          }
          l += L.value;
        }
      }
    return u;
  }
  function p(y, S) {
    let i = S.toLowerCase();
    return 0 < y.indexOf(i) && y.indexOf(i) == y.length - i.length ? y.substring(0, y.length - i.length) : y.trim();
  }
  function h(y, S, i, u) {
    let r = [];
    if (y == null || typeof y != "object")
      return null;
    let t = y[i];
    t != null && S == u && r.push(t);
    for (var l in y) {
      let o = y[l];
      t = h(o, l, i, u), t != null && (r = r.concat(t));
    }
    return r;
  }
  return x;
}();
var ge = function() {
  function m() {
    this.aggrCounts = {}, this.calculateCounts = function(E, k) {
      let M = this.aggrSizes[E];
      M == null && (M = 0);
      let x = 1;
      k.length != null && (x = k.length), this.aggrSizes[E] = M + x;
      for (let p in k)
        typeof k[p] == "object" && this.calculateCounts(p, k[p]);
    }, this.introspect = function(E, k, M, x) {
      if (M == 0) {
        if (this.aggrSizes = {}, E == null)
          for (let y in k) {
            let S = ["_address", "_id", "_name", "Id"], i = !1, u = "";
            for (let r = 0; r < S.length; r++) {
              const t = S[r];
              if (y.endsWith(t)) {
                u += y.substring(0, y.length - t.length), i = !0;
                break;
              }
            }
            i || (u += "unnamed_entity"), E = u;
            break;
          }
        this.calculateCounts(E, k);
      }
      let p = "";
      x != null && x && (p = ">");
      let h = `
` + b(M) + p + E;
      if (typeof k == "number" && (h += " num", E.endsWith("_id") || E.endsWith("Id")))
        return h += " /pk", h;
      if (typeof k == "object") {
        if (Array.isArray(k))
          for (let S in k) {
            1 <= S && console.log("1 <= property !");
            const i = k[S];
            return this.introspect(E, i, M, !1);
          }
        else if (E != "") {
          let S = this.aggrSizes[E];
          h += "  /insert " + S;
        }
        let y = "";
        for (let S in k) {
          const i = k[S];
          if (S != null) {
            const t = z(E), l = S.toLowerCase();
            if (E != null && t + "_id" == l && 0 < M && (y = S), t + "_id" == l)
              continue;
          }
          let u = typeof i == "object";
          const r = this.introspect(S, i, M + 1, u);
          h += r;
        }
        y != "" && (h += `
` + b(M) + y);
      }
      return M == 0 && (h += `

dv ` + E + "_dv " + E, h += `

#settings = { genpk: false, drop: true }`, h += `

-- Generated by json2qsql.js ${X.version} ` + (/* @__PURE__ */ new Date()).toLocaleString() + `

`, h += `#document = 
`, h += JSON.stringify(k, null, 3), h += `
`), h;
    };
  }
  function b(E) {
    for (var k = "", M = 0; M < E; M++)
      k = k + "   ";
    return k;
  }
  return new m();
}();
const Ce = function() {
  function m(p, h, y, S) {
    this.from = h, this.to = y, y == null && (this.to = new b(h.line, h.depth + 1)), this.message = p, this.severity = S, S == null && (this.severity = "error");
  }
  function b(p, h) {
    this.line = p, this.depth = h;
  }
  function E(p) {
    const h = p, y = p.input;
    let S = [];
    const i = y.split(`
`);
    S = S.concat(x(i));
    const u = h.descendants();
    for (let r = 0; r < u.length; r++) {
      const t = u[r];
      if (h.optionEQvalue("genpk", !0) && u[r].parseName() == "id") {
        const d = t.content.toLowerCase().indexOf("id");
        S.push(new m(j.duplicateId, new b(t.line, d)));
        continue;
      }
      const l = t.src[2];
      if (2 < t.src.length && l.value == "-") {
        const d = l.begin;
        S.push(new m(j.invalidDatatype, new b(t.line, d)));
        continue;
      }
      const o = t.src[1];
      if (1 < t.src.length && 0 < o.value.indexOf("0")) {
        const d = o.begin;
        S.push(new m(j.invalidDatatype, new b(t.line, d)));
        continue;
      }
      S = S.concat(k(h, t)), S = S.concat(M(h, t));
    }
    return S;
  }
  function k(p, h) {
    var y = [], S = h.content.toLowerCase();
    if (h.parseType() == "view") {
      var i = ae(S, " ");
      let t = 0;
      for (var u = 0; u < i.length; u++)
        if (t += i[u].length, i[u] != " " && i[u] != "view" && u != 1) {
          var r = p.find(i[u]);
          r == null && y.push(new m(
            j.undefinedObject + i[u],
            new b(h.line, t - i[u].length)
          ));
        }
    }
    return y;
  }
  function M(p, h) {
    var y = [], S = h.content.toLowerCase();
    if (0 < S.indexOf("/fk") || 0 < S.indexOf("/reference")) {
      let r = ae(S, " "), t = 0, l = !1;
      for (var i = 0; i < r.length; i++)
        if (t += r[i].length, r[i] != " ") {
          if (r[i] == "/fk" || r[i].indexOf("/reference") == 0) {
            l = !0;
            continue;
          }
          if (l) {
            var u = p.find(r[i]);
            if (u == null) {
              y.push(new m(
                j.undefinedObject + r[i],
                new b(h.line, t - r[i].length)
              ));
              break;
            }
          }
        }
    }
    return y;
  }
  function x(p) {
    for (var h = [], y = ve(p), S = 1; S < p.length; S++) {
      var i = p[S - 1], u = p[S], r = te(i), t = te(u);
      t != 0 && r < t && t < r + y && h.push(
        new m(
          j.misalignedAttribute + y,
          new b(S, t)
        )
      );
    }
    return h;
  }
  return E;
}();
function ve(m) {
  let b = [];
  for (var E = 0; E < m.length; E++) {
    var k = m[E];
    b[E] = te(k);
  }
  let M = [];
  for (let p = 0; p < b.length; p++) {
    let h = Ae(b, p);
    if (h != null) {
      let y = M[b[p] - b[h]];
      y == null && (y = 0), M[b[p] - b[h]] = y + 1;
    }
  }
  let x = null;
  for (let p in M)
    (x == null || M[x] <= M[p]) && (x = p);
  return x;
}
function te(m) {
  for (var b = m.split(/ |\t/), E = 0, k = 0; k < b.length; k++) {
    var M = b[k];
    if (M == "	" && (E += 4), M == "") {
      E++;
      continue;
    }
    if (!/[^.a-zA-Z0-9_"]/.test(M))
      return E;
  }
  return 0;
}
function Ae(m, b) {
  for (let E = b; 0 <= E; E--)
    if (m[E] < m[b])
      return E;
  return null;
}
const j = {
  duplicateId: "Explicit ID column conflicts with genpk",
  invalidDatatype: "Invalid Datatype",
  undefinedObject: "Undefined Object: ",
  misalignedAttribute: "Misaligned Table or Column; apparent indent = "
}, ye = { findErrors: Ce, messages: j }, Z = "identityDataType", Q = "guid", ce = "Timestamp with time zone", ue = "Timestamp with local time zone", X = function() {
  const m = {
    apex: { label: "APEX", value: "no", check: ["yes", "no"] },
    auditcols: { label: "Audit Columns", value: "no", check: ["yes", "no"] },
    createdcol: { label: "Created Column Name", value: "created" },
    createdbycol: { label: "Created By Column Name", value: "created_by" },
    updatedcol: { label: "Updated Column Name", value: "updated" },
    updatedbycol: { label: "Updated By Column Name", value: "updated_by" },
    genpk: { label: "Auto Primary Key", value: "yes", check: ["yes", "no"] },
    semantics: { label: "Character Strings", value: "CHAR", check: ["BYTE", "CHAR", "Default"] },
    language: { label: "Data Language", value: "EN", check: ["EN", "JP", "KO"] },
    datalimit: { label: "Data Limit Rows", value: 1e4 },
    date: { label: "Date Data Type", value: "DATE", check: ["DATE", "TIMESTAMP", ce, ue] },
    db: { label: "DB", value: "no", check: ["not used"] },
    dv: { label: "Duality View", value: "no", check: ["yes", "no"] },
    // switched default to 'no' until thorough development&testig
    drop: { label: "Include Drops", value: "no", check: ["yes", "no"] },
    editionable: { label: "Editinable", value: "no", check: ["yes", "no"] },
    inserts: { label: "Generate Inserts", value: !0, check: ["yes", "no"] },
    //longvc: {label: 'Longer Varchars', value:'yes',check:['yes','no']},    // not used, if a user specified the length, presumably he knows what he is doing
    //columnNamePrefix: "?",
    overridesettings: { label: "Ignore toDDL() second parameter", value: "no", check: ["yes", "no"] },
    prefix: { label: "Object Prefix", value: "" },
    //ondelete: {label: 'On Delete', value:'Cascade',check:['restrict','cascade','set null']},
    pk: { label: "Primary Key Maintenance", value: Z, check: [Z, Q, "SEQ", "NONE"] },
    prefixpkwithtname: { label: "Prefix primary keys with table name", value: "no", check: ["yes", "no"] },
    rowkey: { label: "Alphanumeric Row Identifier", value: "no", check: ["yes", "no"] },
    rowversion: { label: "Row Version Number", value: "no", check: ["yes", "no"] },
    schema: { label: "Schema", value: "" },
    api: { label: "Table API", value: "no", check: ["yes", "no"] },
    compress: { label: "Table Compression", value: "no", check: ["yes", "no"] }
    //"Auxiliary Columns": {label: "Auxiliary Columns", value:''}, // e.g. security_group_id integer
    //namecase: {label: 'Object and Field name convention', value:'canonic',check:['canonic','json']},
  };
  function b(k) {
    if (k == null)
      return null;
    let M = k;
    return typeof M == "string" && (M = M.toLowerCase()), M == "yes" ? !0 : M == "no" ? !1 : M == "y" ? !0 : M == "n" ? !1 : M == "true" ? !0 : M == "false" ? !1 : M == Z.toLowerCase() ? "identity" : M == Q.toLowerCase() ? "guid" : M == ce.toLowerCase() ? "tswtz" : M == ue.toLowerCase() ? "tswltz" : M;
  }
  function E(k, M) {
    this.ddl = null, this.erd = null, this.errors = null, this.options = JSON.parse(JSON.stringify(m)), this.input = k, this.getOptionValue = function(p) {
      const h = p.toLowerCase();
      let y = this.options[h];
      if (!(h in this.options))
        for (let S in this.options) {
          const i = this.options[S].label;
          if (i == null)
            continue;
          i.toLowerCase() == h && (y = this.options[S]);
        }
      return y == null ? null : y.value;
    }, this.optionEQvalue = function(p, h) {
      var y = this.getOptionValue(p);
      return b(y) == b(h);
    }, this.nonDefaultOptions = function() {
      let p = {};
      for (let h in this.options)
        m[h] && !this.optionEQvalue(h, m[h].value) && (p[h] = this.options[h].value);
      return p;
    }, this.unknownOptions = function() {
      let p = [];
      for (let h in this.options)
        m[h] == null && p.push(h);
      return p;
    }, this.setOptionValue = function(p, h) {
      let y = p.toLowerCase();
      if (!(y in this.options)) {
        for (let i in this.options)
          if (this.options[i].label == p) {
            this.options[i].value = h;
            return;
          }
      }
      h == null && (h = "");
      let S = this.options[y];
      S == null && (S = {}, this.options[y] = S), S.value = h;
    }, this.semantics = function() {
      var p = "";
      return this.optionEQvalue("semantics", "CHAR") ? p = " char" : this.optionEQvalue("semantics", "BYTE") && (p = " byte"), p;
    }, this.find = function(p) {
      for (var h = 0; h < this.forest.length; h++)
        for (var y = this.forest[h].descendants(), S = 0; S < y.length; S++) {
          var i = y[S];
          if (i.parseName() == me(p))
            return i;
        }
      return null;
    }, this.setOptions = function(p) {
      p = p.trim(), p.startsWith("#") && (p = p.substring(1).trim());
      const h = p.indexOf("=");
      let y = p.substring(h + 1).trim();
      y.indexOf("{") < 0 && (y = "{" + p + "}");
      let S = "", i = ee(y, !0, !0, "");
      for (let r in i) {
        let t = i[r];
        t.type == "identifier" && t.value != "true" && t.value != "false" && t.value != "null" ? S += '"' + t.value + '"' : S += t.value;
      }
      let u = JSON.parse(S);
      for (let r in u)
        this.setOptionValue(r.toLowerCase(), u[r]);
    }, this.descendants = function() {
      for (var p = [], h = 0; h < this.forest.length; h++)
        p = p.concat(this.forest[h].descendants());
      return p;
    }, this.additionalColumns = function() {
      var p = [], h = this.getOptionValue("Auxiliary Columns");
      if (h == null)
        return p;
      for (var y = h.split(","), S = 0; S < y.length; S++) {
        var i = y[S].trim(), u = "VARCHAR2(4000)", r = i.indexOf(" ");
        0 < r && (u = i.substring(r + 1).toUpperCase(), i = i.substring(0, r)), p[i] = u;
      }
      return p;
    }, this.objPrefix = function(p) {
      var h = this.getOptionValue("schema");
      h == null && (h = ""), h != "" && p == null ? h = h + "." : h = "";
      var y = "";
      return this.getOptionValue("prefix") != null && (y = this.getOptionValue("prefix")), h = h + y, y != "" && (h = h + "_"), h.toLowerCase();
    };
    let x = "";
    0 < k.toLowerCase().indexOf("overridesettings") && se(this), M != null && this.optionEQvalue("overrideSettings", !1) && (x = "# settings = " + M + `

`), this.input = x + k, this.forest = se(this), this.getERD = function() {
      if (this.erd != null)
        return this.erd;
      let p = this.descendants(), h = { items: [] };
      for (let i = 0; i < p.length; i++) {
        if (p[i].parseType() != "table")
          continue;
        let u = { name: this.objPrefix("no schema") + p[i].parseName("") }, r = this.getOptionValue("schema");
        r == "" && (r = null), u.schema = r, u.columns = [], h.items.push(u);
        let t = p[i].getGenIdColName();
        t != null && u.columns.push({ name: t, datatype: "number" });
        for (let o = 0; o < p[i].children.length; o++) {
          let d = p[i].children[o];
          if (d.parseType() != "table" && (u.columns.push({ name: d.parseName(""), datatype: d.parseType((L) => !0) }), 0 < d.indexOf("file"))) {
            const L = d.parseName();
            u.columns.push({ name: L + "_filename", datatype: "varchar2(255" + this.semantics() + ")" }), u.columns.push({ name: L + "_mimetype", datatype: "varchar2(255" + this.semantics() + ")" }), u.columns.push({ name: L + "_charset", datatype: "varchar2(255" + this.semantics() + ")" }), u.columns.push({ name: L + "_lastupd", datatype: "date" });
          }
        }
        const l = p[i].trimmedContent().toUpperCase();
        if ((this.optionEQvalue("rowkey", !0) || 0 < l.indexOf("/ROWKEY")) && u.columns.push({ name: "row_key", datatype: "varchar2(30 char)" }), (this.optionEQvalue("rowVersion", "yes") || 0 < l.indexOf("/ROWVERSION")) && u.columns.push({ name: "row_version", datatype: "integer" }), this.optionEQvalue("Audit Columns", "yes") || 0 < l.indexOf("/AUDITCOLS")) {
          let o = this.getOptionValue("createdcol");
          u.columns.push({ name: o, datatype: this.getOptionValue("Date Data Type").toLowerCase() });
          let d = this.getOptionValue("createdbycol");
          u.columns.push({ name: d, datatype: "varchar2(255" + this.semantics() + ")" });
          let L = this.getOptionValue("updatedcol");
          u.columns.push({ name: L, datatype: this.getOptionValue("Date Data Type").toLowerCase() });
          let B = this.getOptionValue("updatedbycol");
          u.columns.push({ name: B, datatype: "varchar2(255" + this.semantics() + ")" });
        }
        var y = this.additionalColumns();
        for (let o in y) {
          var S = y[o];
          pad = tab + " ".repeat(this.maxChildNameLen() - o.length), ret += tab + o.toUpperCase() + pad + S + ` not null,
`;
        }
      }
      h.links = [];
      for (let i = 0; i < p.length; i++)
        if (p[i].parseType() == "table") {
          p[i].toDDL();
          for (let u in p[i].fks) {
            let r = p[i].fks[u], t = this.find(r);
            if (t == null)
              continue;
            let l = "id";
            t.getExplicitPkNode() != null && (l = t.getExplicitPkNode().parseName()), h.links.push({
              source: this.objPrefix() + r,
              source_id: l,
              target: this.objPrefix() + p[i].parseName(""),
              target_id: u
            });
          }
        }
      return this.erd = h, h;
    }, this.getDDL = function() {
      if (this.ddl != null)
        return this.ddl;
      var p = "", h = this.descendants();
      if (this.optionEQvalue("Include Drops", "yes"))
        for (let i = 0; i < h.length; i++) {
          let u = h[i].generateDrop();
          u != "" && (p += u);
        }
      if (this.optionEQvalue("rowkey", !0))
        p += `create sequence  row_key_seq;

`;
      else
        for (let i = 0; i < this.forest.length; i++)
          if (0 < this.forest[i].trimmedContent().toUpperCase().indexOf("/ROWKEY")) {
            p += `create sequence  row_key_seq;

`;
            break;
          }
      p += `-- create tables

`;
      for (let i = 0; i < this.forest.length; i++)
        p += this.forest[i].toDDL() + `
`;
      let y = 0;
      for (let i = 0; i < h.length; i++) {
        let u = h[i].generateTrigger();
        u != "" && (y++ == 0 && (p += `-- triggers
`), p += u + `
`);
      }
      y = 0;
      for (let i = 0; i < h.length; i++) {
        let u = h[i].restEnable();
        u != "" && (p += u + `
`);
      }
      y = 0;
      for (let i = 0; i < h.length; i++) {
        if (this.optionEQvalue("api", !1) && h[i].trimmedContent().toLowerCase().indexOf("/api") < 0)
          continue;
        let u = h[i].generateTAPI();
        u != "" && (y++ == 0 && (p += `-- APIs
`), p += u + `
`);
      }
      y = 0;
      for (let i = 0; i < this.forest.length; i++) {
        let u = this.forest[i].generateView();
        u != "" && (y++ == 0 && (p += `-- create views
`), p += u + `
`);
      }
      y = 0;
      for (let i = 0; i < this.forest.length; i++) {
        let u = this.forest[i].generateData(this.data);
        u != "" && (y++ == 0 && (p += `-- load data

`), p += u + `
`);
      }
      y = 0, p += `-- Generated by Quick SQL ${this.version} ` + (/* @__PURE__ */ new Date()).toLocaleString() + `

`, p += `/*
`;
      let S = k;
      S = S.replace(/#.+/g, `
`), S = S.replace(/\/\*/g, "--<--"), S = S.replace(/\*\//g, "-->--"), S = S.replace(/\/* Non-default options:/g, ""), p += S, p += `
`;
      for (let i = 0; i < this.unknownOptions().length; i++)
        p += "*** Unknown setting: " + this.unknownOptions()[i] + `
`;
      return p += `
 Non-default options:
# settings = ` + JSON.stringify(this.nonDefaultOptions()) + `
`, p += `
*/`, this.ddl = p, p;
    }, this.getErrors = function() {
      return this.errors != null ? this.errors : (this.errors = ye.findErrors(this, this.fullInput), this.errors);
    };
  }
  return E;
}();
function Ie(m) {
  const b = JSON.parse(m);
  return ge.introspect(null, b, 0);
}
function Se(m, b) {
  return new X(m, b).getERD();
}
function Me(m, b) {
  return new X(m, b).getDDL();
}
function Be(m, b) {
  return new X(m, b).getErrors();
}
const Te = {
  writable: !1,
  value: "1.2.0"
};
X.version = Te;
X.toDDL = Me;
X.toERD = Se;
export {
  X as ddl,
  X as default,
  Be as errors,
  Q as guid,
  Z as identityDataType,
  Me as toDDL,
  Se as toERD,
  Ie as toQSQL,
  ue as tswltz,
  ce as tswtz,
  Te as version
};
