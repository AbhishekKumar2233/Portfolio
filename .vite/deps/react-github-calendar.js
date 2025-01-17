"use client";
import {
  require_react
} from "./chunk-TQDKLHUW.js";
import {
  __commonJS,
  __publicField
} from "./chunk-LNEMQRCO.js";

// node_modules/chroma-js/chroma.js
var require_chroma = __commonJS({
  "node_modules/chroma-js/chroma.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, global.chroma = factory());
    })(exports, function() {
      "use strict";
      var limit$2 = function(x, min2, max2) {
        if (min2 === void 0)
          min2 = 0;
        if (max2 === void 0)
          max2 = 1;
        return x < min2 ? min2 : x > max2 ? max2 : x;
      };
      var limit$1 = limit$2;
      var clip_rgb$3 = function(rgb2) {
        rgb2._clipped = false;
        rgb2._unclipped = rgb2.slice(0);
        for (var i2 = 0; i2 <= 3; i2++) {
          if (i2 < 3) {
            if (rgb2[i2] < 0 || rgb2[i2] > 255) {
              rgb2._clipped = true;
            }
            rgb2[i2] = limit$1(rgb2[i2], 0, 255);
          } else if (i2 === 3) {
            rgb2[i2] = limit$1(rgb2[i2], 0, 1);
          }
        }
        return rgb2;
      };
      var classToType = {};
      for (var i$1 = 0, list$1 = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; i$1 < list$1.length; i$1 += 1) {
        var name = list$1[i$1];
        classToType["[object " + name + "]"] = name.toLowerCase();
      }
      var type$p = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
      };
      var type$o = type$p;
      var unpack$B = function(args, keyOrder) {
        if (keyOrder === void 0)
          keyOrder = null;
        if (args.length >= 3) {
          return Array.prototype.slice.call(args);
        }
        if (type$o(args[0]) == "object" && keyOrder) {
          return keyOrder.split("").filter(function(k) {
            return args[0][k] !== void 0;
          }).map(function(k) {
            return args[0][k];
          });
        }
        return args[0];
      };
      var type$n = type$p;
      var last$4 = function(args) {
        if (args.length < 2) {
          return null;
        }
        var l = args.length - 1;
        if (type$n(args[l]) == "string") {
          return args[l].toLowerCase();
        }
        return null;
      };
      var PI$2 = Math.PI;
      var utils = {
        clip_rgb: clip_rgb$3,
        limit: limit$2,
        type: type$p,
        unpack: unpack$B,
        last: last$4,
        PI: PI$2,
        TWOPI: PI$2 * 2,
        PITHIRD: PI$2 / 3,
        DEG2RAD: PI$2 / 180,
        RAD2DEG: 180 / PI$2
      };
      var input$h = {
        format: {},
        autodetect: []
      };
      var last$3 = utils.last;
      var clip_rgb$2 = utils.clip_rgb;
      var type$m = utils.type;
      var _input = input$h;
      var Color$D = function Color2() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var me = this;
        if (type$m(args[0]) === "object" && args[0].constructor && args[0].constructor === this.constructor) {
          return args[0];
        }
        var mode = last$3(args);
        var autodetect = false;
        if (!mode) {
          autodetect = true;
          if (!_input.sorted) {
            _input.autodetect = _input.autodetect.sort(function(a, b) {
              return b.p - a.p;
            });
            _input.sorted = true;
          }
          for (var i2 = 0, list2 = _input.autodetect; i2 < list2.length; i2 += 1) {
            var chk = list2[i2];
            mode = chk.test.apply(chk, args);
            if (mode) {
              break;
            }
          }
        }
        if (_input.format[mode]) {
          var rgb2 = _input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
          me._rgb = clip_rgb$2(rgb2);
        } else {
          throw new Error("unknown format: " + args);
        }
        if (me._rgb.length === 3) {
          me._rgb.push(1);
        }
      };
      Color$D.prototype.toString = function toString() {
        if (type$m(this.hex) == "function") {
          return this.hex();
        }
        return "[" + this._rgb.join(",") + "]";
      };
      var Color_1 = Color$D;
      var chroma$k = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(chroma$k.Color, [null].concat(args)))();
      };
      chroma$k.Color = Color_1;
      chroma$k.version = "2.4.2";
      var chroma_1 = chroma$k;
      var unpack$A = utils.unpack;
      var max$2 = Math.max;
      var rgb2cmyk$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$A(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max$2(r, max$2(g, b));
        var f = k < 1 ? 1 / (1 - k) : 0;
        var c = (1 - r - k) * f;
        var m = (1 - g - k) * f;
        var y = (1 - b - k) * f;
        return [c, m, y, k];
      };
      var rgb2cmyk_1 = rgb2cmyk$1;
      var unpack$z = utils.unpack;
      var cmyk2rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$z(args, "cmyk");
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) {
          return [0, 0, 0, alpha];
        }
        return [
          c >= 1 ? 0 : 255 * (1 - c) * (1 - k),
          // r
          m >= 1 ? 0 : 255 * (1 - m) * (1 - k),
          // g
          y >= 1 ? 0 : 255 * (1 - y) * (1 - k),
          // b
          alpha
        ];
      };
      var cmyk2rgb_1 = cmyk2rgb;
      var chroma$j = chroma_1;
      var Color$C = Color_1;
      var input$g = input$h;
      var unpack$y = utils.unpack;
      var type$l = utils.type;
      var rgb2cmyk = rgb2cmyk_1;
      Color$C.prototype.cmyk = function() {
        return rgb2cmyk(this._rgb);
      };
      chroma$j.cmyk = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$C, [null].concat(args, ["cmyk"])))();
      };
      input$g.format.cmyk = cmyk2rgb_1;
      input$g.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$y(args, "cmyk");
          if (type$l(args) === "array" && args.length === 4) {
            return "cmyk";
          }
        }
      });
      var unpack$x = utils.unpack;
      var last$2 = utils.last;
      var rnd = function(a) {
        return Math.round(a * 100) / 100;
      };
      var hsl2css$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var hsla = unpack$x(args, "hsla");
        var mode = last$2(args) || "lsa";
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1] * 100) + "%";
        hsla[2] = rnd(hsla[2] * 100) + "%";
        if (mode === "hsla" || hsla.length > 3 && hsla[3] < 1) {
          hsla[3] = hsla.length > 3 ? hsla[3] : 1;
          mode = "hsla";
        } else {
          hsla.length = 3;
        }
        return mode + "(" + hsla.join(",") + ")";
      };
      var hsl2css_1 = hsl2css$1;
      var unpack$w = utils.unpack;
      var rgb2hsl$3 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$w(args, "rgba");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var min2 = Math.min(r, g, b);
        var max2 = Math.max(r, g, b);
        var l = (max2 + min2) / 2;
        var s, h;
        if (max2 === min2) {
          s = 0;
          h = Number.NaN;
        } else {
          s = l < 0.5 ? (max2 - min2) / (max2 + min2) : (max2 - min2) / (2 - max2 - min2);
        }
        if (r == max2) {
          h = (g - b) / (max2 - min2);
        } else if (g == max2) {
          h = 2 + (b - r) / (max2 - min2);
        } else if (b == max2) {
          h = 4 + (r - g) / (max2 - min2);
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
        if (args.length > 3 && args[3] !== void 0) {
          return [h, s, l, args[3]];
        }
        return [h, s, l];
      };
      var rgb2hsl_1 = rgb2hsl$3;
      var unpack$v = utils.unpack;
      var last$1 = utils.last;
      var hsl2css = hsl2css_1;
      var rgb2hsl$2 = rgb2hsl_1;
      var round$6 = Math.round;
      var rgb2css$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgba = unpack$v(args, "rgba");
        var mode = last$1(args) || "rgb";
        if (mode.substr(0, 3) == "hsl") {
          return hsl2css(rgb2hsl$2(rgba), mode);
        }
        rgba[0] = round$6(rgba[0]);
        rgba[1] = round$6(rgba[1]);
        rgba[2] = round$6(rgba[2]);
        if (mode === "rgba" || rgba.length > 3 && rgba[3] < 1) {
          rgba[3] = rgba.length > 3 ? rgba[3] : 1;
          mode = "rgba";
        }
        return mode + "(" + rgba.slice(0, mode === "rgb" ? 3 : 4).join(",") + ")";
      };
      var rgb2css_1 = rgb2css$1;
      var unpack$u = utils.unpack;
      var round$5 = Math.round;
      var hsl2rgb$1 = function() {
        var assign;
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$u(args, "hsl");
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r, g, b;
        if (s === 0) {
          r = g = b = l * 255;
        } else {
          var t3 = [0, 0, 0];
          var c = [0, 0, 0];
          var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var t1 = 2 * l - t2;
          var h_ = h / 360;
          t3[0] = h_ + 1 / 3;
          t3[1] = h_;
          t3[2] = h_ - 1 / 3;
          for (var i2 = 0; i2 < 3; i2++) {
            if (t3[i2] < 0) {
              t3[i2] += 1;
            }
            if (t3[i2] > 1) {
              t3[i2] -= 1;
            }
            if (6 * t3[i2] < 1) {
              c[i2] = t1 + (t2 - t1) * 6 * t3[i2];
            } else if (2 * t3[i2] < 1) {
              c[i2] = t2;
            } else if (3 * t3[i2] < 2) {
              c[i2] = t1 + (t2 - t1) * (2 / 3 - t3[i2]) * 6;
            } else {
              c[i2] = t1;
            }
          }
          assign = [round$5(c[0] * 255), round$5(c[1] * 255), round$5(c[2] * 255)], r = assign[0], g = assign[1], b = assign[2];
        }
        if (args.length > 3) {
          return [r, g, b, args[3]];
        }
        return [r, g, b, 1];
      };
      var hsl2rgb_1 = hsl2rgb$1;
      var hsl2rgb = hsl2rgb_1;
      var input$f = input$h;
      var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
      var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
      var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
      var round$4 = Math.round;
      var css2rgb$1 = function(css) {
        css = css.toLowerCase().trim();
        var m;
        if (input$f.format.named) {
          try {
            return input$f.format.named(css);
          } catch (e) {
          }
        }
        if (m = css.match(RE_RGB)) {
          var rgb2 = m.slice(1, 4);
          for (var i2 = 0; i2 < 3; i2++) {
            rgb2[i2] = +rgb2[i2];
          }
          rgb2[3] = 1;
          return rgb2;
        }
        if (m = css.match(RE_RGBA)) {
          var rgb$1 = m.slice(1, 5);
          for (var i$12 = 0; i$12 < 4; i$12++) {
            rgb$1[i$12] = +rgb$1[i$12];
          }
          return rgb$1;
        }
        if (m = css.match(RE_RGB_PCT)) {
          var rgb$2 = m.slice(1, 4);
          for (var i$2 = 0; i$2 < 3; i$2++) {
            rgb$2[i$2] = round$4(rgb$2[i$2] * 2.55);
          }
          rgb$2[3] = 1;
          return rgb$2;
        }
        if (m = css.match(RE_RGBA_PCT)) {
          var rgb$3 = m.slice(1, 5);
          for (var i$3 = 0; i$3 < 3; i$3++) {
            rgb$3[i$3] = round$4(rgb$3[i$3] * 2.55);
          }
          rgb$3[3] = +rgb$3[3];
          return rgb$3;
        }
        if (m = css.match(RE_HSL)) {
          var hsl2 = m.slice(1, 4);
          hsl2[1] *= 0.01;
          hsl2[2] *= 0.01;
          var rgb$4 = hsl2rgb(hsl2);
          rgb$4[3] = 1;
          return rgb$4;
        }
        if (m = css.match(RE_HSLA)) {
          var hsl$1 = m.slice(1, 4);
          hsl$1[1] *= 0.01;
          hsl$1[2] *= 0.01;
          var rgb$5 = hsl2rgb(hsl$1);
          rgb$5[3] = +m[4];
          return rgb$5;
        }
      };
      css2rgb$1.test = function(s) {
        return RE_RGB.test(s) || RE_RGBA.test(s) || RE_RGB_PCT.test(s) || RE_RGBA_PCT.test(s) || RE_HSL.test(s) || RE_HSLA.test(s);
      };
      var css2rgb_1 = css2rgb$1;
      var chroma$i = chroma_1;
      var Color$B = Color_1;
      var input$e = input$h;
      var type$k = utils.type;
      var rgb2css = rgb2css_1;
      var css2rgb = css2rgb_1;
      Color$B.prototype.css = function(mode) {
        return rgb2css(this._rgb, mode);
      };
      chroma$i.css = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$B, [null].concat(args, ["css"])))();
      };
      input$e.format.css = css2rgb;
      input$e.autodetect.push({
        p: 5,
        test: function(h) {
          var rest = [], len = arguments.length - 1;
          while (len-- > 0)
            rest[len] = arguments[len + 1];
          if (!rest.length && type$k(h) === "string" && css2rgb.test(h)) {
            return "css";
          }
        }
      });
      var Color$A = Color_1;
      var chroma$h = chroma_1;
      var input$d = input$h;
      var unpack$t = utils.unpack;
      input$d.format.gl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgb2 = unpack$t(args, "rgba");
        rgb2[0] *= 255;
        rgb2[1] *= 255;
        rgb2[2] *= 255;
        return rgb2;
      };
      chroma$h.gl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$A, [null].concat(args, ["gl"])))();
      };
      Color$A.prototype.gl = function() {
        var rgb2 = this._rgb;
        return [rgb2[0] / 255, rgb2[1] / 255, rgb2[2] / 255, rgb2[3]];
      };
      var unpack$s = utils.unpack;
      var rgb2hcg$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$s(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min2 = Math.min(r, g, b);
        var max2 = Math.max(r, g, b);
        var delta = max2 - min2;
        var c = delta * 100 / 255;
        var _g = min2 / (255 - delta) * 100;
        var h;
        if (delta === 0) {
          h = Number.NaN;
        } else {
          if (r === max2) {
            h = (g - b) / delta;
          }
          if (g === max2) {
            h = 2 + (b - r) / delta;
          }
          if (b === max2) {
            h = 4 + (r - g) / delta;
          }
          h *= 60;
          if (h < 0) {
            h += 360;
          }
        }
        return [h, c, _g];
      };
      var rgb2hcg_1 = rgb2hcg$1;
      var unpack$r = utils.unpack;
      var floor$3 = Math.floor;
      var hcg2rgb = function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$r(args, "hcg");
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r, g, b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
          r = g = b = _g;
        } else {
          if (h === 360) {
            h = 0;
          }
          if (h > 360) {
            h -= 360;
          }
          if (h < 0) {
            h += 360;
          }
          h /= 60;
          var i2 = floor$3(h);
          var f = h - i2;
          var p = _g * (1 - c);
          var q = p + _c * (1 - f);
          var t = p + _c * f;
          var v = p + _c;
          switch (i2) {
            case 0:
              assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
              break;
            case 1:
              assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
              break;
            case 2:
              assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
              break;
            case 3:
              assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
              break;
            case 4:
              assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
              break;
            case 5:
              assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
              break;
          }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var hcg2rgb_1 = hcg2rgb;
      var unpack$q = utils.unpack;
      var type$j = utils.type;
      var chroma$g = chroma_1;
      var Color$z = Color_1;
      var input$c = input$h;
      var rgb2hcg = rgb2hcg_1;
      Color$z.prototype.hcg = function() {
        return rgb2hcg(this._rgb);
      };
      chroma$g.hcg = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$z, [null].concat(args, ["hcg"])))();
      };
      input$c.format.hcg = hcg2rgb_1;
      input$c.autodetect.push({
        p: 1,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$q(args, "hcg");
          if (type$j(args) === "array" && args.length === 3) {
            return "hcg";
          }
        }
      });
      var unpack$p = utils.unpack;
      var last = utils.last;
      var round$3 = Math.round;
      var rgb2hex$2 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$p(args, "rgba");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last(args) || "auto";
        if (a === void 0) {
          a = 1;
        }
        if (mode === "auto") {
          mode = a < 1 ? "rgba" : "rgb";
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16);
        str = str.substr(str.length - 6);
        var hxa = "0" + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
          case "rgba":
            return "#" + str + hxa;
          case "argb":
            return "#" + hxa + str;
          default:
            return "#" + str;
        }
      };
      var rgb2hex_1 = rgb2hex$2;
      var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
      var RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/;
      var hex2rgb$1 = function(hex) {
        if (hex.match(RE_HEX)) {
          if (hex.length === 4 || hex.length === 7) {
            hex = hex.substr(1);
          }
          if (hex.length === 3) {
            hex = hex.split("");
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }
          var u = parseInt(hex, 16);
          var r = u >> 16;
          var g = u >> 8 & 255;
          var b = u & 255;
          return [r, g, b, 1];
        }
        if (hex.match(RE_HEXA)) {
          if (hex.length === 5 || hex.length === 9) {
            hex = hex.substr(1);
          }
          if (hex.length === 4) {
            hex = hex.split("");
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
          }
          var u$1 = parseInt(hex, 16);
          var r$1 = u$1 >> 24 & 255;
          var g$1 = u$1 >> 16 & 255;
          var b$1 = u$1 >> 8 & 255;
          var a = Math.round((u$1 & 255) / 255 * 100) / 100;
          return [r$1, g$1, b$1, a];
        }
        throw new Error("unknown hex color: " + hex);
      };
      var hex2rgb_1 = hex2rgb$1;
      var chroma$f = chroma_1;
      var Color$y = Color_1;
      var type$i = utils.type;
      var input$b = input$h;
      var rgb2hex$1 = rgb2hex_1;
      Color$y.prototype.hex = function(mode) {
        return rgb2hex$1(this._rgb, mode);
      };
      chroma$f.hex = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$y, [null].concat(args, ["hex"])))();
      };
      input$b.format.hex = hex2rgb_1;
      input$b.autodetect.push({
        p: 4,
        test: function(h) {
          var rest = [], len = arguments.length - 1;
          while (len-- > 0)
            rest[len] = arguments[len + 1];
          if (!rest.length && type$i(h) === "string" && [3, 4, 5, 6, 7, 8, 9].indexOf(h.length) >= 0) {
            return "hex";
          }
        }
      });
      var unpack$o = utils.unpack;
      var TWOPI$2 = utils.TWOPI;
      var min$2 = Math.min;
      var sqrt$4 = Math.sqrt;
      var acos = Math.acos;
      var rgb2hsi$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$o(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min$2(r, g, b);
        var i2 = (r + g + b) / 3;
        var s = i2 > 0 ? 1 - min_ / i2 : 0;
        if (s === 0) {
          h = NaN;
        } else {
          h = (r - g + (r - b)) / 2;
          h /= sqrt$4((r - g) * (r - g) + (r - b) * (g - b));
          h = acos(h);
          if (b > g) {
            h = TWOPI$2 - h;
          }
          h /= TWOPI$2;
        }
        return [h * 360, s, i2];
      };
      var rgb2hsi_1 = rgb2hsi$1;
      var unpack$n = utils.unpack;
      var limit = utils.limit;
      var TWOPI$1 = utils.TWOPI;
      var PITHIRD = utils.PITHIRD;
      var cos$4 = Math.cos;
      var hsi2rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$n(args, "hsi");
        var h = args[0];
        var s = args[1];
        var i2 = args[2];
        var r, g, b;
        if (isNaN(h)) {
          h = 0;
        }
        if (isNaN(s)) {
          s = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 360;
        if (h < 1 / 3) {
          b = (1 - s) / 3;
          r = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          g = 1 - (b + r);
        } else if (h < 2 / 3) {
          h -= 1 / 3;
          r = (1 - s) / 3;
          g = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          b = 1 - (r + g);
        } else {
          h -= 2 / 3;
          g = (1 - s) / 3;
          b = (1 + s * cos$4(TWOPI$1 * h) / cos$4(PITHIRD - TWOPI$1 * h)) / 3;
          r = 1 - (g + b);
        }
        r = limit(i2 * r * 3);
        g = limit(i2 * g * 3);
        b = limit(i2 * b * 3);
        return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
      };
      var hsi2rgb_1 = hsi2rgb;
      var unpack$m = utils.unpack;
      var type$h = utils.type;
      var chroma$e = chroma_1;
      var Color$x = Color_1;
      var input$a = input$h;
      var rgb2hsi = rgb2hsi_1;
      Color$x.prototype.hsi = function() {
        return rgb2hsi(this._rgb);
      };
      chroma$e.hsi = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$x, [null].concat(args, ["hsi"])))();
      };
      input$a.format.hsi = hsi2rgb_1;
      input$a.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$m(args, "hsi");
          if (type$h(args) === "array" && args.length === 3) {
            return "hsi";
          }
        }
      });
      var unpack$l = utils.unpack;
      var type$g = utils.type;
      var chroma$d = chroma_1;
      var Color$w = Color_1;
      var input$9 = input$h;
      var rgb2hsl$1 = rgb2hsl_1;
      Color$w.prototype.hsl = function() {
        return rgb2hsl$1(this._rgb);
      };
      chroma$d.hsl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$w, [null].concat(args, ["hsl"])))();
      };
      input$9.format.hsl = hsl2rgb_1;
      input$9.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$l(args, "hsl");
          if (type$g(args) === "array" && args.length === 3) {
            return "hsl";
          }
        }
      });
      var unpack$k = utils.unpack;
      var min$1 = Math.min;
      var max$1 = Math.max;
      var rgb2hsl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$k(args, "rgb");
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h, s, v;
        v = max_ / 255;
        if (max_ === 0) {
          h = Number.NaN;
          s = 0;
        } else {
          s = delta / max_;
          if (r === max_) {
            h = (g - b) / delta;
          }
          if (g === max_) {
            h = 2 + (b - r) / delta;
          }
          if (b === max_) {
            h = 4 + (r - g) / delta;
          }
          h *= 60;
          if (h < 0) {
            h += 360;
          }
        }
        return [h, s, v];
      };
      var rgb2hsv$1 = rgb2hsl;
      var unpack$j = utils.unpack;
      var floor$2 = Math.floor;
      var hsv2rgb = function() {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$j(args, "hsv");
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r, g, b;
        v *= 255;
        if (s === 0) {
          r = g = b = v;
        } else {
          if (h === 360) {
            h = 0;
          }
          if (h > 360) {
            h -= 360;
          }
          if (h < 0) {
            h += 360;
          }
          h /= 60;
          var i2 = floor$2(h);
          var f = h - i2;
          var p = v * (1 - s);
          var q = v * (1 - s * f);
          var t = v * (1 - s * (1 - f));
          switch (i2) {
            case 0:
              assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2];
              break;
            case 1:
              assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2];
              break;
            case 2:
              assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2];
              break;
            case 3:
              assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2];
              break;
            case 4:
              assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2];
              break;
            case 5:
              assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2];
              break;
          }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var hsv2rgb_1 = hsv2rgb;
      var unpack$i = utils.unpack;
      var type$f = utils.type;
      var chroma$c = chroma_1;
      var Color$v = Color_1;
      var input$8 = input$h;
      var rgb2hsv = rgb2hsv$1;
      Color$v.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
      };
      chroma$c.hsv = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$v, [null].concat(args, ["hsv"])))();
      };
      input$8.format.hsv = hsv2rgb_1;
      input$8.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$i(args, "hsv");
          if (type$f(args) === "array" && args.length === 3) {
            return "hsv";
          }
        }
      });
      var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,
        // D65 standard referent
        Xn: 0.95047,
        Yn: 1,
        Zn: 1.08883,
        t0: 0.137931034,
        // 4 / 29
        t1: 0.206896552,
        // 6 / 29
        t2: 0.12841855,
        // 3 * t1 * t1
        t3: 8856452e-9
        // t1 * t1 * t1
      };
      var LAB_CONSTANTS$3 = labConstants;
      var unpack$h = utils.unpack;
      var pow$a = Math.pow;
      var rgb2lab$2 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$h(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r, g, b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
      };
      var rgb_xyz = function(r) {
        if ((r /= 255) <= 0.04045) {
          return r / 12.92;
        }
        return pow$a((r + 0.055) / 1.055, 2.4);
      };
      var xyz_lab = function(t) {
        if (t > LAB_CONSTANTS$3.t3) {
          return pow$a(t, 1 / 3);
        }
        return t / LAB_CONSTANTS$3.t2 + LAB_CONSTANTS$3.t0;
      };
      var rgb2xyz = function(r, g, b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS$3.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.072175 * b) / LAB_CONSTANTS$3.Yn);
        var z = xyz_lab((0.0193339 * r + 0.119192 * g + 0.9503041 * b) / LAB_CONSTANTS$3.Zn);
        return [x, y, z];
      };
      var rgb2lab_1 = rgb2lab$2;
      var LAB_CONSTANTS$2 = labConstants;
      var unpack$g = utils.unpack;
      var pow$9 = Math.pow;
      var lab2rgb$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$g(args, "lab");
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x, y, z, r, g, b_;
        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;
        y = LAB_CONSTANTS$2.Yn * lab_xyz(y);
        x = LAB_CONSTANTS$2.Xn * lab_xyz(x);
        z = LAB_CONSTANTS$2.Zn * lab_xyz(z);
        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
        g = xyz_rgb(-0.969266 * x + 1.8760108 * y + 0.041556 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
        return [r, g, b_, args.length > 3 ? args[3] : 1];
      };
      var xyz_rgb = function(r) {
        return 255 * (r <= 304e-5 ? 12.92 * r : 1.055 * pow$9(r, 1 / 2.4) - 0.055);
      };
      var lab_xyz = function(t) {
        return t > LAB_CONSTANTS$2.t1 ? t * t * t : LAB_CONSTANTS$2.t2 * (t - LAB_CONSTANTS$2.t0);
      };
      var lab2rgb_1 = lab2rgb$1;
      var unpack$f = utils.unpack;
      var type$e = utils.type;
      var chroma$b = chroma_1;
      var Color$u = Color_1;
      var input$7 = input$h;
      var rgb2lab$1 = rgb2lab_1;
      Color$u.prototype.lab = function() {
        return rgb2lab$1(this._rgb);
      };
      chroma$b.lab = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$u, [null].concat(args, ["lab"])))();
      };
      input$7.format.lab = lab2rgb_1;
      input$7.autodetect.push({
        p: 2,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$f(args, "lab");
          if (type$e(args) === "array" && args.length === 3) {
            return "lab";
          }
        }
      });
      var unpack$e = utils.unpack;
      var RAD2DEG = utils.RAD2DEG;
      var sqrt$3 = Math.sqrt;
      var atan2$2 = Math.atan2;
      var round$2 = Math.round;
      var lab2lch$2 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$e(args, "lab");
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$3(a * a + b * b);
        var h = (atan2$2(b, a) * RAD2DEG + 360) % 360;
        if (round$2(c * 1e4) === 0) {
          h = Number.NaN;
        }
        return [l, c, h];
      };
      var lab2lch_1 = lab2lch$2;
      var unpack$d = utils.unpack;
      var rgb2lab = rgb2lab_1;
      var lab2lch$1 = lab2lch_1;
      var rgb2lch$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$d(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch$1(l, a, b_);
      };
      var rgb2lch_1 = rgb2lch$1;
      var unpack$c = utils.unpack;
      var DEG2RAD = utils.DEG2RAD;
      var sin$3 = Math.sin;
      var cos$3 = Math.cos;
      var lch2lab$2 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$c(args, "lch");
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) {
          h = 0;
        }
        h = h * DEG2RAD;
        return [l, cos$3(h) * c, sin$3(h) * c];
      };
      var lch2lab_1 = lch2lab$2;
      var unpack$b = utils.unpack;
      var lch2lab$1 = lch2lab_1;
      var lab2rgb = lab2rgb_1;
      var lch2rgb$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$b(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab$1(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var lch2rgb_1 = lch2rgb$1;
      var unpack$a = utils.unpack;
      var lch2rgb = lch2rgb_1;
      var hcl2rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var hcl = unpack$a(args, "hcl").reverse();
        return lch2rgb.apply(void 0, hcl);
      };
      var hcl2rgb_1 = hcl2rgb;
      var unpack$9 = utils.unpack;
      var type$d = utils.type;
      var chroma$a = chroma_1;
      var Color$t = Color_1;
      var input$6 = input$h;
      var rgb2lch = rgb2lch_1;
      Color$t.prototype.lch = function() {
        return rgb2lch(this._rgb);
      };
      Color$t.prototype.hcl = function() {
        return rgb2lch(this._rgb).reverse();
      };
      chroma$a.lch = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["lch"])))();
      };
      chroma$a.hcl = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$t, [null].concat(args, ["hcl"])))();
      };
      input$6.format.lch = lch2rgb_1;
      input$6.format.hcl = hcl2rgb_1;
      ["lch", "hcl"].forEach(function(m) {
        return input$6.autodetect.push({
          p: 2,
          test: function() {
            var args = [], len = arguments.length;
            while (len--)
              args[len] = arguments[len];
            args = unpack$9(args, m);
            if (type$d(args) === "array" && args.length === 3) {
              return m;
            }
          }
        });
      });
      var w3cx11$1 = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflower: "#6495ed",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkgrey: "#a9a9a9",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkslategrey: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        grey: "#808080",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        laserlemon: "#ffff54",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrod: "#fafad2",
        lightgoldenrodyellow: "#fafad2",
        lightgray: "#d3d3d3",
        lightgreen: "#90ee90",
        lightgrey: "#d3d3d3",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        maroon2: "#7f0000",
        maroon3: "#b03060",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370db",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#db7093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        purple2: "#7f007f",
        purple3: "#a020f0",
        rebeccapurple: "#663399",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32"
      };
      var w3cx11_1 = w3cx11$1;
      var Color$s = Color_1;
      var input$5 = input$h;
      var type$c = utils.type;
      var w3cx11 = w3cx11_1;
      var hex2rgb = hex2rgb_1;
      var rgb2hex = rgb2hex_1;
      Color$s.prototype.name = function() {
        var hex = rgb2hex(this._rgb, "rgb");
        for (var i2 = 0, list2 = Object.keys(w3cx11); i2 < list2.length; i2 += 1) {
          var n = list2[i2];
          if (w3cx11[n] === hex) {
            return n.toLowerCase();
          }
        }
        return hex;
      };
      input$5.format.named = function(name2) {
        name2 = name2.toLowerCase();
        if (w3cx11[name2]) {
          return hex2rgb(w3cx11[name2]);
        }
        throw new Error("unknown color name: " + name2);
      };
      input$5.autodetect.push({
        p: 5,
        test: function(h) {
          var rest = [], len = arguments.length - 1;
          while (len-- > 0)
            rest[len] = arguments[len + 1];
          if (!rest.length && type$c(h) === "string" && w3cx11[h.toLowerCase()]) {
            return "named";
          }
        }
      });
      var unpack$8 = utils.unpack;
      var rgb2num$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$8(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
      };
      var rgb2num_1 = rgb2num$1;
      var type$b = utils.type;
      var num2rgb = function(num2) {
        if (type$b(num2) == "number" && num2 >= 0 && num2 <= 16777215) {
          var r = num2 >> 16;
          var g = num2 >> 8 & 255;
          var b = num2 & 255;
          return [r, g, b, 1];
        }
        throw new Error("unknown num color: " + num2);
      };
      var num2rgb_1 = num2rgb;
      var chroma$9 = chroma_1;
      var Color$r = Color_1;
      var input$4 = input$h;
      var type$a = utils.type;
      var rgb2num = rgb2num_1;
      Color$r.prototype.num = function() {
        return rgb2num(this._rgb);
      };
      chroma$9.num = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$r, [null].concat(args, ["num"])))();
      };
      input$4.format.num = num2rgb_1;
      input$4.autodetect.push({
        p: 5,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          if (args.length === 1 && type$a(args[0]) === "number" && args[0] >= 0 && args[0] <= 16777215) {
            return "num";
          }
        }
      });
      var chroma$8 = chroma_1;
      var Color$q = Color_1;
      var input$3 = input$h;
      var unpack$7 = utils.unpack;
      var type$9 = utils.type;
      var round$1 = Math.round;
      Color$q.prototype.rgb = function(rnd2) {
        if (rnd2 === void 0)
          rnd2 = true;
        if (rnd2 === false) {
          return this._rgb.slice(0, 3);
        }
        return this._rgb.slice(0, 3).map(round$1);
      };
      Color$q.prototype.rgba = function(rnd2) {
        if (rnd2 === void 0)
          rnd2 = true;
        return this._rgb.slice(0, 4).map(function(v, i2) {
          return i2 < 3 ? rnd2 === false ? v : round$1(v) : v;
        });
      };
      chroma$8.rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$q, [null].concat(args, ["rgb"])))();
      };
      input$3.format.rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgba = unpack$7(args, "rgba");
        if (rgba[3] === void 0) {
          rgba[3] = 1;
        }
        return rgba;
      };
      input$3.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$7(args, "rgba");
          if (type$9(args) === "array" && (args.length === 3 || args.length === 4 && type$9(args[3]) == "number" && args[3] >= 0 && args[3] <= 1)) {
            return "rgb";
          }
        }
      });
      var log$1 = Math.log;
      var temperature2rgb$1 = function(kelvin) {
        var temp = kelvin / 100;
        var r, g, b;
        if (temp < 66) {
          r = 255;
          g = temp < 6 ? 0 : -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log$1(g);
          b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log$1(b);
        } else {
          r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log$1(r);
          g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log$1(g);
          b = 255;
        }
        return [r, g, b, 1];
      };
      var temperature2rgb_1 = temperature2rgb$1;
      var temperature2rgb = temperature2rgb_1;
      var unpack$6 = utils.unpack;
      var round = Math.round;
      var rgb2temperature$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var rgb2 = unpack$6(args, "rgb");
        var r = rgb2[0], b = rgb2[2];
        var minTemp = 1e3;
        var maxTemp = 4e4;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
          temp = (maxTemp + minTemp) * 0.5;
          var rgb$1 = temperature2rgb(temp);
          if (rgb$1[2] / rgb$1[0] >= b / r) {
            maxTemp = temp;
          } else {
            minTemp = temp;
          }
        }
        return round(temp);
      };
      var rgb2temperature_1 = rgb2temperature$1;
      var chroma$7 = chroma_1;
      var Color$p = Color_1;
      var input$2 = input$h;
      var rgb2temperature = rgb2temperature_1;
      Color$p.prototype.temp = Color$p.prototype.kelvin = Color$p.prototype.temperature = function() {
        return rgb2temperature(this._rgb);
      };
      chroma$7.temp = chroma$7.kelvin = chroma$7.temperature = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$p, [null].concat(args, ["temp"])))();
      };
      input$2.format.temp = input$2.format.kelvin = input$2.format.temperature = temperature2rgb_1;
      var unpack$5 = utils.unpack;
      var cbrt = Math.cbrt;
      var pow$8 = Math.pow;
      var sign$1 = Math.sign;
      var rgb2oklab$2 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$5(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = [rgb2lrgb(r / 255), rgb2lrgb(g / 255), rgb2lrgb(b / 255)];
        var lr = ref$1[0];
        var lg = ref$1[1];
        var lb = ref$1[2];
        var l = cbrt(0.4122214708 * lr + 0.5363325363 * lg + 0.0514459929 * lb);
        var m = cbrt(0.2119034982 * lr + 0.6806995451 * lg + 0.1073969566 * lb);
        var s = cbrt(0.0883024619 * lr + 0.2817188376 * lg + 0.6299787005 * lb);
        return [
          0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
          1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
          0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s
        ];
      };
      var rgb2oklab_1 = rgb2oklab$2;
      function rgb2lrgb(c) {
        var abs2 = Math.abs(c);
        if (abs2 < 0.04045) {
          return c / 12.92;
        }
        return (sign$1(c) || 1) * pow$8((abs2 + 0.055) / 1.055, 2.4);
      }
      var unpack$4 = utils.unpack;
      var pow$7 = Math.pow;
      var sign = Math.sign;
      var oklab2rgb$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$4(args, "lab");
        var L = args[0];
        var a = args[1];
        var b = args[2];
        var l = pow$7(L + 0.3963377774 * a + 0.2158037573 * b, 3);
        var m = pow$7(L - 0.1055613458 * a - 0.0638541728 * b, 3);
        var s = pow$7(L - 0.0894841775 * a - 1.291485548 * b, 3);
        return [
          255 * lrgb2rgb(4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s),
          255 * lrgb2rgb(-1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s),
          255 * lrgb2rgb(-0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s),
          args.length > 3 ? args[3] : 1
        ];
      };
      var oklab2rgb_1 = oklab2rgb$1;
      function lrgb2rgb(c) {
        var abs2 = Math.abs(c);
        if (abs2 > 31308e-7) {
          return (sign(c) || 1) * (1.055 * pow$7(abs2, 1 / 2.4) - 0.055);
        }
        return c * 12.92;
      }
      var unpack$3 = utils.unpack;
      var type$8 = utils.type;
      var chroma$6 = chroma_1;
      var Color$o = Color_1;
      var input$1 = input$h;
      var rgb2oklab$1 = rgb2oklab_1;
      Color$o.prototype.oklab = function() {
        return rgb2oklab$1(this._rgb);
      };
      chroma$6.oklab = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$o, [null].concat(args, ["oklab"])))();
      };
      input$1.format.oklab = oklab2rgb_1;
      input$1.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack$3(args, "oklab");
          if (type$8(args) === "array" && args.length === 3) {
            return "oklab";
          }
        }
      });
      var unpack$2 = utils.unpack;
      var rgb2oklab = rgb2oklab_1;
      var lab2lch = lab2lch_1;
      var rgb2oklch$1 = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        var ref = unpack$2(args, "rgb");
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2oklab(r, g, b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch(l, a, b_);
      };
      var rgb2oklch_1 = rgb2oklch$1;
      var unpack$1 = utils.unpack;
      var lch2lab = lch2lab_1;
      var oklab2rgb = oklab2rgb_1;
      var oklch2rgb = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        args = unpack$1(args, "lch");
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab(l, c, h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = oklab2rgb(L, a, b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
      };
      var oklch2rgb_1 = oklch2rgb;
      var unpack = utils.unpack;
      var type$7 = utils.type;
      var chroma$5 = chroma_1;
      var Color$n = Color_1;
      var input = input$h;
      var rgb2oklch = rgb2oklch_1;
      Color$n.prototype.oklch = function() {
        return rgb2oklch(this._rgb);
      };
      chroma$5.oklch = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        return new (Function.prototype.bind.apply(Color$n, [null].concat(args, ["oklch"])))();
      };
      input.format.oklch = oklch2rgb_1;
      input.autodetect.push({
        p: 3,
        test: function() {
          var args = [], len = arguments.length;
          while (len--)
            args[len] = arguments[len];
          args = unpack(args, "oklch");
          if (type$7(args) === "array" && args.length === 3) {
            return "oklch";
          }
        }
      });
      var Color$m = Color_1;
      var type$6 = utils.type;
      Color$m.prototype.alpha = function(a, mutate) {
        if (mutate === void 0)
          mutate = false;
        if (a !== void 0 && type$6(a) === "number") {
          if (mutate) {
            this._rgb[3] = a;
            return this;
          }
          return new Color$m([this._rgb[0], this._rgb[1], this._rgb[2], a], "rgb");
        }
        return this._rgb[3];
      };
      var Color$l = Color_1;
      Color$l.prototype.clipped = function() {
        return this._rgb._clipped || false;
      };
      var Color$k = Color_1;
      var LAB_CONSTANTS$1 = labConstants;
      Color$k.prototype.darken = function(amount) {
        if (amount === void 0)
          amount = 1;
        var me = this;
        var lab2 = me.lab();
        lab2[0] -= LAB_CONSTANTS$1.Kn * amount;
        return new Color$k(lab2, "lab").alpha(me.alpha(), true);
      };
      Color$k.prototype.brighten = function(amount) {
        if (amount === void 0)
          amount = 1;
        return this.darken(-amount);
      };
      Color$k.prototype.darker = Color$k.prototype.darken;
      Color$k.prototype.brighter = Color$k.prototype.brighten;
      var Color$j = Color_1;
      Color$j.prototype.get = function(mc) {
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
          var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
          if (i2 > -1) {
            return src[i2];
          }
          throw new Error("unknown channel " + channel + " in mode " + mode);
        } else {
          return src;
        }
      };
      var Color$i = Color_1;
      var type$5 = utils.type;
      var pow$6 = Math.pow;
      var EPS = 1e-7;
      var MAX_ITER = 20;
      Color$i.prototype.luminance = function(lum) {
        if (lum !== void 0 && type$5(lum) === "number") {
          if (lum === 0) {
            return new Color$i([0, 0, 0, this._rgb[3]], "rgb");
          }
          if (lum === 1) {
            return new Color$i([255, 255, 255, this._rgb[3]], "rgb");
          }
          var cur_lum = this.luminance();
          var mode = "rgb";
          var max_iter = MAX_ITER;
          var test = function(low, high) {
            var mid = low.interpolate(high, 0.5, mode);
            var lm = mid.luminance();
            if (Math.abs(lum - lm) < EPS || !max_iter--) {
              return mid;
            }
            return lm > lum ? test(low, mid) : test(mid, high);
          };
          var rgb2 = (cur_lum > lum ? test(new Color$i([0, 0, 0]), this) : test(this, new Color$i([255, 255, 255]))).rgb();
          return new Color$i(rgb2.concat([this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, this._rgb.slice(0, 3));
      };
      var rgb2luminance = function(r, g, b) {
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
      };
      var luminance_x = function(x) {
        x /= 255;
        return x <= 0.03928 ? x / 12.92 : pow$6((x + 0.055) / 1.055, 2.4);
      };
      var interpolator$1 = {};
      var Color$h = Color_1;
      var type$4 = utils.type;
      var interpolator = interpolator$1;
      var mix$1 = function(col1, col2, f) {
        if (f === void 0)
          f = 0.5;
        var rest = [], len = arguments.length - 3;
        while (len-- > 0)
          rest[len] = arguments[len + 3];
        var mode = rest[0] || "lrgb";
        if (!interpolator[mode] && !rest.length) {
          mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
          throw new Error("interpolation mode " + mode + " is not defined");
        }
        if (type$4(col1) !== "object") {
          col1 = new Color$h(col1);
        }
        if (type$4(col2) !== "object") {
          col2 = new Color$h(col2);
        }
        return interpolator[mode](col1, col2, f).alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
      };
      var Color$g = Color_1;
      var mix = mix$1;
      Color$g.prototype.mix = Color$g.prototype.interpolate = function(col2, f) {
        if (f === void 0)
          f = 0.5;
        var rest = [], len = arguments.length - 2;
        while (len-- > 0)
          rest[len] = arguments[len + 2];
        return mix.apply(void 0, [this, col2, f].concat(rest));
      };
      var Color$f = Color_1;
      Color$f.prototype.premultiply = function(mutate) {
        if (mutate === void 0)
          mutate = false;
        var rgb2 = this._rgb;
        var a = rgb2[3];
        if (mutate) {
          this._rgb = [rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a];
          return this;
        } else {
          return new Color$f([rgb2[0] * a, rgb2[1] * a, rgb2[2] * a, a], "rgb");
        }
      };
      var Color$e = Color_1;
      var LAB_CONSTANTS = labConstants;
      Color$e.prototype.saturate = function(amount) {
        if (amount === void 0)
          amount = 1;
        var me = this;
        var lch2 = me.lch();
        lch2[1] += LAB_CONSTANTS.Kn * amount;
        if (lch2[1] < 0) {
          lch2[1] = 0;
        }
        return new Color$e(lch2, "lch").alpha(me.alpha(), true);
      };
      Color$e.prototype.desaturate = function(amount) {
        if (amount === void 0)
          amount = 1;
        return this.saturate(-amount);
      };
      var Color$d = Color_1;
      var type$3 = utils.type;
      Color$d.prototype.set = function(mc, value, mutate) {
        if (mutate === void 0)
          mutate = false;
        var ref = mc.split(".");
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
          var i2 = mode.indexOf(channel) - (mode.substr(0, 2) === "ok" ? 2 : 0);
          if (i2 > -1) {
            if (type$3(value) == "string") {
              switch (value.charAt(0)) {
                case "+":
                  src[i2] += +value;
                  break;
                case "-":
                  src[i2] += +value;
                  break;
                case "*":
                  src[i2] *= +value.substr(1);
                  break;
                case "/":
                  src[i2] /= +value.substr(1);
                  break;
                default:
                  src[i2] = +value;
              }
            } else if (type$3(value) === "number") {
              src[i2] = value;
            } else {
              throw new Error("unsupported value for Color.set");
            }
            var out = new Color$d(src, mode);
            if (mutate) {
              this._rgb = out._rgb;
              return this;
            }
            return out;
          }
          throw new Error("unknown channel " + channel + " in mode " + mode);
        } else {
          return src;
        }
      };
      var Color$c = Color_1;
      var rgb = function(col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color$c(
          xyz0[0] + f * (xyz1[0] - xyz0[0]),
          xyz0[1] + f * (xyz1[1] - xyz0[1]),
          xyz0[2] + f * (xyz1[2] - xyz0[2]),
          "rgb"
        );
      };
      interpolator$1.rgb = rgb;
      var Color$b = Color_1;
      var sqrt$2 = Math.sqrt;
      var pow$5 = Math.pow;
      var lrgb = function(col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color$b(
          sqrt$2(pow$5(x1, 2) * (1 - f) + pow$5(x2, 2) * f),
          sqrt$2(pow$5(y1, 2) * (1 - f) + pow$5(y2, 2) * f),
          sqrt$2(pow$5(z1, 2) * (1 - f) + pow$5(z2, 2) * f),
          "rgb"
        );
      };
      interpolator$1.lrgb = lrgb;
      var Color$a = Color_1;
      var lab = function(col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color$a(
          xyz0[0] + f * (xyz1[0] - xyz0[0]),
          xyz0[1] + f * (xyz1[1] - xyz0[1]),
          xyz0[2] + f * (xyz1[2] - xyz0[2]),
          "lab"
        );
      };
      interpolator$1.lab = lab;
      var Color$9 = Color_1;
      var _hsx = function(col1, col2, f, m) {
        var assign, assign$1;
        var xyz0, xyz1;
        if (m === "hsl") {
          xyz0 = col1.hsl();
          xyz1 = col2.hsl();
        } else if (m === "hsv") {
          xyz0 = col1.hsv();
          xyz1 = col2.hsv();
        } else if (m === "hcg") {
          xyz0 = col1.hcg();
          xyz1 = col2.hcg();
        } else if (m === "hsi") {
          xyz0 = col1.hsi();
          xyz1 = col2.hsi();
        } else if (m === "lch" || m === "hcl") {
          m = "hcl";
          xyz0 = col1.hcl();
          xyz1 = col2.hcl();
        } else if (m === "oklch") {
          xyz0 = col1.oklch().reverse();
          xyz1 = col2.oklch().reverse();
        }
        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === "h" || m === "oklch") {
          assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2];
          assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2];
        }
        var sat, hue, lbv, dh;
        if (!isNaN(hue0) && !isNaN(hue1)) {
          if (hue1 > hue0 && hue1 - hue0 > 180) {
            dh = hue1 - (hue0 + 360);
          } else if (hue1 < hue0 && hue0 - hue1 > 180) {
            dh = hue1 + 360 - hue0;
          } else {
            dh = hue1 - hue0;
          }
          hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
          hue = hue0;
          if ((lbv1 == 1 || lbv1 == 0) && m != "hsv") {
            sat = sat0;
          }
        } else if (!isNaN(hue1)) {
          hue = hue1;
          if ((lbv0 == 1 || lbv0 == 0) && m != "hsv") {
            sat = sat1;
          }
        } else {
          hue = Number.NaN;
        }
        if (sat === void 0) {
          sat = sat0 + f * (sat1 - sat0);
        }
        lbv = lbv0 + f * (lbv1 - lbv0);
        return m === "oklch" ? new Color$9([lbv, sat, hue], m) : new Color$9([hue, sat, lbv], m);
      };
      var interpolate_hsx$5 = _hsx;
      var lch = function(col1, col2, f) {
        return interpolate_hsx$5(col1, col2, f, "lch");
      };
      interpolator$1.lch = lch;
      interpolator$1.hcl = lch;
      var Color$8 = Color_1;
      var num = function(col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color$8(c1 + f * (c2 - c1), "num");
      };
      interpolator$1.num = num;
      var interpolate_hsx$4 = _hsx;
      var hcg = function(col1, col2, f) {
        return interpolate_hsx$4(col1, col2, f, "hcg");
      };
      interpolator$1.hcg = hcg;
      var interpolate_hsx$3 = _hsx;
      var hsi = function(col1, col2, f) {
        return interpolate_hsx$3(col1, col2, f, "hsi");
      };
      interpolator$1.hsi = hsi;
      var interpolate_hsx$2 = _hsx;
      var hsl = function(col1, col2, f) {
        return interpolate_hsx$2(col1, col2, f, "hsl");
      };
      interpolator$1.hsl = hsl;
      var interpolate_hsx$1 = _hsx;
      var hsv = function(col1, col2, f) {
        return interpolate_hsx$1(col1, col2, f, "hsv");
      };
      interpolator$1.hsv = hsv;
      var Color$7 = Color_1;
      var oklab = function(col1, col2, f) {
        var xyz0 = col1.oklab();
        var xyz1 = col2.oklab();
        return new Color$7(
          xyz0[0] + f * (xyz1[0] - xyz0[0]),
          xyz0[1] + f * (xyz1[1] - xyz0[1]),
          xyz0[2] + f * (xyz1[2] - xyz0[2]),
          "oklab"
        );
      };
      interpolator$1.oklab = oklab;
      var interpolate_hsx = _hsx;
      var oklch = function(col1, col2, f) {
        return interpolate_hsx(col1, col2, f, "oklch");
      };
      interpolator$1.oklch = oklch;
      var Color$6 = Color_1;
      var clip_rgb$1 = utils.clip_rgb;
      var pow$4 = Math.pow;
      var sqrt$1 = Math.sqrt;
      var PI$1 = Math.PI;
      var cos$2 = Math.cos;
      var sin$2 = Math.sin;
      var atan2$1 = Math.atan2;
      var average = function(colors, mode, weights) {
        if (mode === void 0)
          mode = "lrgb";
        if (weights === void 0)
          weights = null;
        var l = colors.length;
        if (!weights) {
          weights = Array.from(new Array(l)).map(function() {
            return 1;
          });
        }
        var k = l / weights.reduce(function(a, b) {
          return a + b;
        });
        weights.forEach(function(w, i3) {
          weights[i3] *= k;
        });
        colors = colors.map(function(c) {
          return new Color$6(c);
        });
        if (mode === "lrgb") {
          return _average_lrgb(colors, weights);
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        for (var i2 = 0; i2 < xyz.length; i2++) {
          xyz[i2] = (xyz[i2] || 0) * weights[0];
          cnt.push(isNaN(xyz[i2]) ? 0 : weights[0]);
          if (mode.charAt(i2) === "h" && !isNaN(xyz[i2])) {
            var A = xyz[i2] / 180 * PI$1;
            dx += cos$2(A) * weights[0];
            dy += sin$2(A) * weights[0];
          }
        }
        var alpha = first.alpha() * weights[0];
        colors.forEach(function(c, ci) {
          var xyz2 = c.get(mode);
          alpha += c.alpha() * weights[ci + 1];
          for (var i3 = 0; i3 < xyz.length; i3++) {
            if (!isNaN(xyz2[i3])) {
              cnt[i3] += weights[ci + 1];
              if (mode.charAt(i3) === "h") {
                var A2 = xyz2[i3] / 180 * PI$1;
                dx += cos$2(A2) * weights[ci + 1];
                dy += sin$2(A2) * weights[ci + 1];
              } else {
                xyz[i3] += xyz2[i3] * weights[ci + 1];
              }
            }
          }
        });
        for (var i$12 = 0; i$12 < xyz.length; i$12++) {
          if (mode.charAt(i$12) === "h") {
            var A$1 = atan2$1(dy / cnt[i$12], dx / cnt[i$12]) / PI$1 * 180;
            while (A$1 < 0) {
              A$1 += 360;
            }
            while (A$1 >= 360) {
              A$1 -= 360;
            }
            xyz[i$12] = A$1;
          } else {
            xyz[i$12] = xyz[i$12] / cnt[i$12];
          }
        }
        alpha /= l;
        return new Color$6(xyz, mode).alpha(alpha > 0.99999 ? 1 : alpha, true);
      };
      var _average_lrgb = function(colors, weights) {
        var l = colors.length;
        var xyz = [0, 0, 0, 0];
        for (var i2 = 0; i2 < colors.length; i2++) {
          var col = colors[i2];
          var f = weights[i2] / l;
          var rgb2 = col._rgb;
          xyz[0] += pow$4(rgb2[0], 2) * f;
          xyz[1] += pow$4(rgb2[1], 2) * f;
          xyz[2] += pow$4(rgb2[2], 2) * f;
          xyz[3] += rgb2[3] * f;
        }
        xyz[0] = sqrt$1(xyz[0]);
        xyz[1] = sqrt$1(xyz[1]);
        xyz[2] = sqrt$1(xyz[2]);
        if (xyz[3] > 0.9999999) {
          xyz[3] = 1;
        }
        return new Color$6(clip_rgb$1(xyz));
      };
      var chroma$4 = chroma_1;
      var type$2 = utils.type;
      var pow$3 = Math.pow;
      var scale$2 = function(colors) {
        var _mode = "rgb";
        var _nacol = chroma$4("#ccc");
        var _spread = 0;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0, 0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;
        var setColors = function(colors2) {
          colors2 = colors2 || ["#fff", "#000"];
          if (colors2 && type$2(colors2) === "string" && chroma$4.brewer && chroma$4.brewer[colors2.toLowerCase()]) {
            colors2 = chroma$4.brewer[colors2.toLowerCase()];
          }
          if (type$2(colors2) === "array") {
            if (colors2.length === 1) {
              colors2 = [colors2[0], colors2[0]];
            }
            colors2 = colors2.slice(0);
            for (var c = 0; c < colors2.length; c++) {
              colors2[c] = chroma$4(colors2[c]);
            }
            _pos.length = 0;
            for (var c$1 = 0; c$1 < colors2.length; c$1++) {
              _pos.push(c$1 / (colors2.length - 1));
            }
          }
          resetCache();
          return _colors = colors2;
        };
        var getClass = function(value) {
          if (_classes != null) {
            var n = _classes.length - 1;
            var i2 = 0;
            while (i2 < n && value >= _classes[i2]) {
              i2++;
            }
            return i2 - 1;
          }
          return 0;
        };
        var tMapLightness = function(t) {
          return t;
        };
        var tMapDomain = function(t) {
          return t;
        };
        var getColor = function(val, bypassMap) {
          var col, t;
          if (bypassMap == null) {
            bypassMap = false;
          }
          if (isNaN(val) || val === null) {
            return _nacol;
          }
          if (!bypassMap) {
            if (_classes && _classes.length > 2) {
              var c = getClass(val);
              t = c / (_classes.length - 2);
            } else if (_max !== _min) {
              t = (val - _min) / (_max - _min);
            } else {
              t = 1;
            }
          } else {
            t = val;
          }
          t = tMapDomain(t);
          if (!bypassMap) {
            t = tMapLightness(t);
          }
          if (_gamma !== 1) {
            t = pow$3(t, _gamma);
          }
          t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
          t = Math.min(1, Math.max(0, t));
          var k = Math.floor(t * 1e4);
          if (_useCache && _colorCache[k]) {
            col = _colorCache[k];
          } else {
            if (type$2(_colors) === "array") {
              for (var i2 = 0; i2 < _pos.length; i2++) {
                var p = _pos[i2];
                if (t <= p) {
                  col = _colors[i2];
                  break;
                }
                if (t >= p && i2 === _pos.length - 1) {
                  col = _colors[i2];
                  break;
                }
                if (t > p && t < _pos[i2 + 1]) {
                  t = (t - p) / (_pos[i2 + 1] - p);
                  col = chroma$4.interpolate(_colors[i2], _colors[i2 + 1], t, _mode);
                  break;
                }
              }
            } else if (type$2(_colors) === "function") {
              col = _colors(t);
            }
            if (_useCache) {
              _colorCache[k] = col;
            }
          }
          return col;
        };
        var resetCache = function() {
          return _colorCache = {};
        };
        setColors(colors);
        var f = function(v) {
          var c = chroma$4(getColor(v));
          if (_out && c[_out]) {
            return c[_out]();
          } else {
            return c;
          }
        };
        f.classes = function(classes) {
          if (classes != null) {
            if (type$2(classes) === "array") {
              _classes = classes;
              _domain = [classes[0], classes[classes.length - 1]];
            } else {
              var d = chroma$4.analyze(_domain);
              if (classes === 0) {
                _classes = [d.min, d.max];
              } else {
                _classes = chroma$4.limits(d, "e", classes);
              }
            }
            return f;
          }
          return _classes;
        };
        f.domain = function(domain) {
          if (!arguments.length) {
            return _domain;
          }
          _min = domain[0];
          _max = domain[domain.length - 1];
          _pos = [];
          var k = _colors.length;
          if (domain.length === k && _min !== _max) {
            for (var i2 = 0, list2 = Array.from(domain); i2 < list2.length; i2 += 1) {
              var d = list2[i2];
              _pos.push((d - _min) / (_max - _min));
            }
          } else {
            for (var c = 0; c < k; c++) {
              _pos.push(c / (k - 1));
            }
            if (domain.length > 2) {
              var tOut = domain.map(function(d2, i3) {
                return i3 / (domain.length - 1);
              });
              var tBreaks = domain.map(function(d2) {
                return (d2 - _min) / (_max - _min);
              });
              if (!tBreaks.every(function(val, i3) {
                return tOut[i3] === val;
              })) {
                tMapDomain = function(t) {
                  if (t <= 0 || t >= 1) {
                    return t;
                  }
                  var i3 = 0;
                  while (t >= tBreaks[i3 + 1]) {
                    i3++;
                  }
                  var f2 = (t - tBreaks[i3]) / (tBreaks[i3 + 1] - tBreaks[i3]);
                  var out = tOut[i3] + f2 * (tOut[i3 + 1] - tOut[i3]);
                  return out;
                };
              }
            }
          }
          _domain = [_min, _max];
          return f;
        };
        f.mode = function(_m) {
          if (!arguments.length) {
            return _mode;
          }
          _mode = _m;
          resetCache();
          return f;
        };
        f.range = function(colors2, _pos2) {
          setColors(colors2);
          return f;
        };
        f.out = function(_o) {
          _out = _o;
          return f;
        };
        f.spread = function(val) {
          if (!arguments.length) {
            return _spread;
          }
          _spread = val;
          return f;
        };
        f.correctLightness = function(v) {
          if (v == null) {
            v = true;
          }
          _correctLightness = v;
          resetCache();
          if (_correctLightness) {
            tMapLightness = function(t) {
              var L0 = getColor(0, true).lab()[0];
              var L1 = getColor(1, true).lab()[0];
              var pol = L0 > L1;
              var L_actual = getColor(t, true).lab()[0];
              var L_ideal = L0 + (L1 - L0) * t;
              var L_diff = L_actual - L_ideal;
              var t0 = 0;
              var t1 = 1;
              var max_iter = 20;
              while (Math.abs(L_diff) > 0.01 && max_iter-- > 0) {
                (function() {
                  if (pol) {
                    L_diff *= -1;
                  }
                  if (L_diff < 0) {
                    t0 = t;
                    t += (t1 - t) * 0.5;
                  } else {
                    t1 = t;
                    t += (t0 - t) * 0.5;
                  }
                  L_actual = getColor(t, true).lab()[0];
                  return L_diff = L_actual - L_ideal;
                })();
              }
              return t;
            };
          } else {
            tMapLightness = function(t) {
              return t;
            };
          }
          return f;
        };
        f.padding = function(p) {
          if (p != null) {
            if (type$2(p) === "number") {
              p = [p, p];
            }
            _padding = p;
            return f;
          } else {
            return _padding;
          }
        };
        f.colors = function(numColors, out) {
          if (arguments.length < 2) {
            out = "hex";
          }
          var result = [];
          if (arguments.length === 0) {
            result = _colors.slice(0);
          } else if (numColors === 1) {
            result = [f(0.5)];
          } else if (numColors > 1) {
            var dm = _domain[0];
            var dd = _domain[1] - dm;
            result = __range__(0, numColors, false).map(function(i3) {
              return f(dm + i3 / (numColors - 1) * dd);
            });
          } else {
            colors = [];
            var samples = [];
            if (_classes && _classes.length > 2) {
              for (var i2 = 1, end = _classes.length, asc = 1 <= end; asc ? i2 < end : i2 > end; asc ? i2++ : i2--) {
                samples.push((_classes[i2 - 1] + _classes[i2]) * 0.5);
              }
            } else {
              samples = _domain;
            }
            result = samples.map(function(v) {
              return f(v);
            });
          }
          if (chroma$4[out]) {
            result = result.map(function(c) {
              return c[out]();
            });
          }
          return result;
        };
        f.cache = function(c) {
          if (c != null) {
            _useCache = c;
            return f;
          } else {
            return _useCache;
          }
        };
        f.gamma = function(g) {
          if (g != null) {
            _gamma = g;
            return f;
          } else {
            return _gamma;
          }
        };
        f.nodata = function(d) {
          if (d != null) {
            _nacol = chroma$4(d);
            return f;
          } else {
            return _nacol;
          }
        };
        return f;
      };
      function __range__(left, right, inclusive) {
        var range = [];
        var ascending = left < right;
        var end = !inclusive ? right : ascending ? right + 1 : right - 1;
        for (var i2 = left; ascending ? i2 < end : i2 > end; ascending ? i2++ : i2--) {
          range.push(i2);
        }
        return range;
      }
      var Color$5 = Color_1;
      var scale$1 = scale$2;
      var binom_row = function(n) {
        var row = [1, 1];
        for (var i2 = 1; i2 < n; i2++) {
          var newrow = [1];
          for (var j = 1; j <= row.length; j++) {
            newrow[j] = (row[j] || 0) + row[j - 1];
          }
          row = newrow;
        }
        return row;
      };
      var bezier = function(colors) {
        var assign, assign$1, assign$2;
        var I, lab0, lab1, lab2;
        colors = colors.map(function(c) {
          return new Color$5(c);
        });
        if (colors.length === 2) {
          assign = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign[0], lab1 = assign[1];
          I = function(t) {
            var lab4 = [0, 1, 2].map(function(i2) {
              return lab0[i2] + t * (lab1[i2] - lab0[i2]);
            });
            return new Color$5(lab4, "lab");
          };
        } else if (colors.length === 3) {
          assign$1 = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2];
          I = function(t) {
            var lab4 = [0, 1, 2].map(function(i2) {
              return (1 - t) * (1 - t) * lab0[i2] + 2 * (1 - t) * t * lab1[i2] + t * t * lab2[i2];
            });
            return new Color$5(lab4, "lab");
          };
        } else if (colors.length === 4) {
          var lab3;
          assign$2 = colors.map(function(c) {
            return c.lab();
          }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3];
          I = function(t) {
            var lab4 = [0, 1, 2].map(function(i2) {
              return (1 - t) * (1 - t) * (1 - t) * lab0[i2] + 3 * (1 - t) * (1 - t) * t * lab1[i2] + 3 * (1 - t) * t * t * lab2[i2] + t * t * t * lab3[i2];
            });
            return new Color$5(lab4, "lab");
          };
        } else if (colors.length >= 5) {
          var labs, row, n;
          labs = colors.map(function(c) {
            return c.lab();
          });
          n = colors.length - 1;
          row = binom_row(n);
          I = function(t) {
            var u = 1 - t;
            var lab4 = [0, 1, 2].map(function(i2) {
              return labs.reduce(function(sum, el, j) {
                return sum + row[j] * Math.pow(u, n - j) * Math.pow(t, j) * el[i2];
              }, 0);
            });
            return new Color$5(lab4, "lab");
          };
        } else {
          throw new RangeError("No point in running bezier with only one color.");
        }
        return I;
      };
      var bezier_1 = function(colors) {
        var f = bezier(colors);
        f.scale = function() {
          return scale$1(f);
        };
        return f;
      };
      var chroma$3 = chroma_1;
      var blend = function(bottom, top, mode) {
        if (!blend[mode]) {
          throw new Error("unknown blend mode " + mode);
        }
        return blend[mode](bottom, top);
      };
      var blend_f = function(f) {
        return function(bottom, top) {
          var c0 = chroma$3(top).rgb();
          var c1 = chroma$3(bottom).rgb();
          return chroma$3.rgb(f(c0, c1));
        };
      };
      var each = function(f) {
        return function(c0, c1) {
          var out = [];
          out[0] = f(c0[0], c1[0]);
          out[1] = f(c0[1], c1[1]);
          out[2] = f(c0[2], c1[2]);
          return out;
        };
      };
      var normal = function(a) {
        return a;
      };
      var multiply = function(a, b) {
        return a * b / 255;
      };
      var darken = function(a, b) {
        return a > b ? b : a;
      };
      var lighten = function(a, b) {
        return a > b ? a : b;
      };
      var screen = function(a, b) {
        return 255 * (1 - (1 - a / 255) * (1 - b / 255));
      };
      var overlay = function(a, b) {
        return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
      };
      var burn = function(a, b) {
        return 255 * (1 - (1 - b / 255) / (a / 255));
      };
      var dodge = function(a, b) {
        if (a === 255) {
          return 255;
        }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a;
      };
      blend.normal = blend_f(each(normal));
      blend.multiply = blend_f(each(multiply));
      blend.screen = blend_f(each(screen));
      blend.overlay = blend_f(each(overlay));
      blend.darken = blend_f(each(darken));
      blend.lighten = blend_f(each(lighten));
      blend.dodge = blend_f(each(dodge));
      blend.burn = blend_f(each(burn));
      var blend_1 = blend;
      var type$1 = utils.type;
      var clip_rgb = utils.clip_rgb;
      var TWOPI = utils.TWOPI;
      var pow$2 = Math.pow;
      var sin$1 = Math.sin;
      var cos$1 = Math.cos;
      var chroma$2 = chroma_1;
      var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if (start === void 0)
          start = 300;
        if (rotations === void 0)
          rotations = -1.5;
        if (hue === void 0)
          hue = 1;
        if (gamma === void 0)
          gamma = 1;
        if (lightness === void 0)
          lightness = [0, 1];
        var dh = 0, dl;
        if (type$1(lightness) === "array") {
          dl = lightness[1] - lightness[0];
        } else {
          dl = 0;
          lightness = [lightness, lightness];
        }
        var f = function(fract) {
          var a = TWOPI * ((start + 120) / 360 + rotations * fract);
          var l = pow$2(lightness[0] + dl * fract, gamma);
          var h = dh !== 0 ? hue[0] + fract * dh : hue;
          var amp = h * l * (1 - l) / 2;
          var cos_a = cos$1(a);
          var sin_a = sin$1(a);
          var r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
          var g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
          var b = l + amp * (1.97294 * cos_a);
          return chroma$2(clip_rgb([r * 255, g * 255, b * 255, 1]));
        };
        f.start = function(s) {
          if (s == null) {
            return start;
          }
          start = s;
          return f;
        };
        f.rotations = function(r) {
          if (r == null) {
            return rotations;
          }
          rotations = r;
          return f;
        };
        f.gamma = function(g) {
          if (g == null) {
            return gamma;
          }
          gamma = g;
          return f;
        };
        f.hue = function(h) {
          if (h == null) {
            return hue;
          }
          hue = h;
          if (type$1(hue) === "array") {
            dh = hue[1] - hue[0];
            if (dh === 0) {
              hue = hue[1];
            }
          } else {
            dh = 0;
          }
          return f;
        };
        f.lightness = function(h) {
          if (h == null) {
            return lightness;
          }
          if (type$1(h) === "array") {
            lightness = h;
            dl = h[1] - h[0];
          } else {
            lightness = [h, h];
            dl = 0;
          }
          return f;
        };
        f.scale = function() {
          return chroma$2.scale(f);
        };
        f.hue(hue);
        return f;
      };
      var Color$4 = Color_1;
      var digits = "0123456789abcdef";
      var floor$1 = Math.floor;
      var random = Math.random;
      var random_1 = function() {
        var code = "#";
        for (var i2 = 0; i2 < 6; i2++) {
          code += digits.charAt(floor$1(random() * 16));
        }
        return new Color$4(code, "hex");
      };
      var type = type$p;
      var log = Math.log;
      var pow$1 = Math.pow;
      var floor = Math.floor;
      var abs$1 = Math.abs;
      var analyze = function(data, key2) {
        if (key2 === void 0)
          key2 = null;
        var r = {
          min: Number.MAX_VALUE,
          max: Number.MAX_VALUE * -1,
          sum: 0,
          values: [],
          count: 0
        };
        if (type(data) === "object") {
          data = Object.values(data);
        }
        data.forEach(function(val) {
          if (key2 && type(val) === "object") {
            val = val[key2];
          }
          if (val !== void 0 && val !== null && !isNaN(val)) {
            r.values.push(val);
            r.sum += val;
            if (val < r.min) {
              r.min = val;
            }
            if (val > r.max) {
              r.max = val;
            }
            r.count += 1;
          }
        });
        r.domain = [r.min, r.max];
        r.limits = function(mode, num2) {
          return limits(r, mode, num2);
        };
        return r;
      };
      var limits = function(data, mode, num2) {
        if (mode === void 0)
          mode = "equal";
        if (num2 === void 0)
          num2 = 7;
        if (type(data) == "array") {
          data = analyze(data);
        }
        var min2 = data.min;
        var max2 = data.max;
        var values = data.values.sort(function(a, b) {
          return a - b;
        });
        if (num2 === 1) {
          return [min2, max2];
        }
        var limits2 = [];
        if (mode.substr(0, 1) === "c") {
          limits2.push(min2);
          limits2.push(max2);
        }
        if (mode.substr(0, 1) === "e") {
          limits2.push(min2);
          for (var i2 = 1; i2 < num2; i2++) {
            limits2.push(min2 + i2 / num2 * (max2 - min2));
          }
          limits2.push(max2);
        } else if (mode.substr(0, 1) === "l") {
          if (min2 <= 0) {
            throw new Error("Logarithmic scales are only possible for values > 0");
          }
          var min_log = Math.LOG10E * log(min2);
          var max_log = Math.LOG10E * log(max2);
          limits2.push(min2);
          for (var i$12 = 1; i$12 < num2; i$12++) {
            limits2.push(pow$1(10, min_log + i$12 / num2 * (max_log - min_log)));
          }
          limits2.push(max2);
        } else if (mode.substr(0, 1) === "q") {
          limits2.push(min2);
          for (var i$2 = 1; i$2 < num2; i$2++) {
            var p = (values.length - 1) * i$2 / num2;
            var pb = floor(p);
            if (pb === p) {
              limits2.push(values[pb]);
            } else {
              var pr = p - pb;
              limits2.push(values[pb] * (1 - pr) + values[pb + 1] * pr);
            }
          }
          limits2.push(max2);
        } else if (mode.substr(0, 1) === "k") {
          var cluster;
          var n = values.length;
          var assignments = new Array(n);
          var clusterSizes = new Array(num2);
          var repeat = true;
          var nb_iters = 0;
          var centroids = null;
          centroids = [];
          centroids.push(min2);
          for (var i$3 = 1; i$3 < num2; i$3++) {
            centroids.push(min2 + i$3 / num2 * (max2 - min2));
          }
          centroids.push(max2);
          while (repeat) {
            for (var j = 0; j < num2; j++) {
              clusterSizes[j] = 0;
            }
            for (var i$4 = 0; i$4 < n; i$4++) {
              var value = values[i$4];
              var mindist = Number.MAX_VALUE;
              var best = void 0;
              for (var j$1 = 0; j$1 < num2; j$1++) {
                var dist = abs$1(centroids[j$1] - value);
                if (dist < mindist) {
                  mindist = dist;
                  best = j$1;
                }
                clusterSizes[best]++;
                assignments[i$4] = best;
              }
            }
            var newCentroids = new Array(num2);
            for (var j$2 = 0; j$2 < num2; j$2++) {
              newCentroids[j$2] = null;
            }
            for (var i$5 = 0; i$5 < n; i$5++) {
              cluster = assignments[i$5];
              if (newCentroids[cluster] === null) {
                newCentroids[cluster] = values[i$5];
              } else {
                newCentroids[cluster] += values[i$5];
              }
            }
            for (var j$3 = 0; j$3 < num2; j$3++) {
              newCentroids[j$3] *= 1 / clusterSizes[j$3];
            }
            repeat = false;
            for (var j$4 = 0; j$4 < num2; j$4++) {
              if (newCentroids[j$4] !== centroids[j$4]) {
                repeat = true;
                break;
              }
            }
            centroids = newCentroids;
            nb_iters++;
            if (nb_iters > 200) {
              repeat = false;
            }
          }
          var kClusters = {};
          for (var j$5 = 0; j$5 < num2; j$5++) {
            kClusters[j$5] = [];
          }
          for (var i$6 = 0; i$6 < n; i$6++) {
            cluster = assignments[i$6];
            kClusters[cluster].push(values[i$6]);
          }
          var tmpKMeansBreaks = [];
          for (var j$6 = 0; j$6 < num2; j$6++) {
            tmpKMeansBreaks.push(kClusters[j$6][0]);
            tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
          }
          tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
            return a - b;
          });
          limits2.push(tmpKMeansBreaks[0]);
          for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
            var v = tmpKMeansBreaks[i$7];
            if (!isNaN(v) && limits2.indexOf(v) === -1) {
              limits2.push(v);
            }
          }
        }
        return limits2;
      };
      var analyze_1 = { analyze, limits };
      var Color$3 = Color_1;
      var contrast = function(a, b) {
        a = new Color$3(a);
        b = new Color$3(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
      };
      var Color$2 = Color_1;
      var sqrt = Math.sqrt;
      var pow = Math.pow;
      var min = Math.min;
      var max = Math.max;
      var atan2 = Math.atan2;
      var abs = Math.abs;
      var cos = Math.cos;
      var sin = Math.sin;
      var exp = Math.exp;
      var PI = Math.PI;
      var deltaE = function(a, b, Kl, Kc, Kh) {
        if (Kl === void 0)
          Kl = 1;
        if (Kc === void 0)
          Kc = 1;
        if (Kh === void 0)
          Kh = 1;
        var rad2deg = function(rad) {
          return 360 * rad / (2 * PI);
        };
        var deg2rad = function(deg) {
          return 2 * PI * deg / 360;
        };
        a = new Color$2(a);
        b = new Color$2(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var avgL = (L1 + L2) / 2;
        var C1 = sqrt(pow(a1, 2) + pow(b1, 2));
        var C2 = sqrt(pow(a2, 2) + pow(b2, 2));
        var avgC = (C1 + C2) / 2;
        var G = 0.5 * (1 - sqrt(pow(avgC, 7) / (pow(avgC, 7) + pow(25, 7))));
        var a1p = a1 * (1 + G);
        var a2p = a2 * (1 + G);
        var C1p = sqrt(pow(a1p, 2) + pow(b1, 2));
        var C2p = sqrt(pow(a2p, 2) + pow(b2, 2));
        var avgCp = (C1p + C2p) / 2;
        var arctan1 = rad2deg(atan2(b1, a1p));
        var arctan2 = rad2deg(atan2(b2, a2p));
        var h1p = arctan1 >= 0 ? arctan1 : arctan1 + 360;
        var h2p = arctan2 >= 0 ? arctan2 : arctan2 + 360;
        var avgHp = abs(h1p - h2p) > 180 ? (h1p + h2p + 360) / 2 : (h1p + h2p) / 2;
        var T = 1 - 0.17 * cos(deg2rad(avgHp - 30)) + 0.24 * cos(deg2rad(2 * avgHp)) + 0.32 * cos(deg2rad(3 * avgHp + 6)) - 0.2 * cos(deg2rad(4 * avgHp - 63));
        var deltaHp = h2p - h1p;
        deltaHp = abs(deltaHp) <= 180 ? deltaHp : h2p <= h1p ? deltaHp + 360 : deltaHp - 360;
        deltaHp = 2 * sqrt(C1p * C2p) * sin(deg2rad(deltaHp) / 2);
        var deltaL = L2 - L1;
        var deltaCp = C2p - C1p;
        var sl = 1 + 0.015 * pow(avgL - 50, 2) / sqrt(20 + pow(avgL - 50, 2));
        var sc = 1 + 0.045 * avgCp;
        var sh = 1 + 0.015 * avgCp * T;
        var deltaTheta = 30 * exp(-pow((avgHp - 275) / 25, 2));
        var Rc = 2 * sqrt(pow(avgCp, 7) / (pow(avgCp, 7) + pow(25, 7)));
        var Rt = -Rc * sin(2 * deg2rad(deltaTheta));
        var result = sqrt(pow(deltaL / (Kl * sl), 2) + pow(deltaCp / (Kc * sc), 2) + pow(deltaHp / (Kh * sh), 2) + Rt * (deltaCp / (Kc * sc)) * (deltaHp / (Kh * sh)));
        return max(0, min(100, result));
      };
      var Color$1 = Color_1;
      var distance = function(a, b, mode) {
        if (mode === void 0)
          mode = "lab";
        a = new Color$1(a);
        b = new Color$1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i2 in l1) {
          var d = (l1[i2] || 0) - (l2[i2] || 0);
          sum_sq += d * d;
        }
        return Math.sqrt(sum_sq);
      };
      var Color = Color_1;
      var valid = function() {
        var args = [], len = arguments.length;
        while (len--)
          args[len] = arguments[len];
        try {
          new (Function.prototype.bind.apply(Color, [null].concat(args)))();
          return true;
        } catch (e) {
          return false;
        }
      };
      var chroma$1 = chroma_1;
      var scale = scale$2;
      var scales = {
        cool: function cool() {
          return scale([chroma$1.hsl(180, 1, 0.9), chroma$1.hsl(250, 0.7, 0.4)]);
        },
        hot: function hot() {
          return scale(["#000", "#f00", "#ff0", "#fff"]).mode("rgb");
        }
      };
      var colorbrewer = {
        // sequential
        OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
        PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
        BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
        Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
        BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
        YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
        YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
        Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
        RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
        Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
        YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
        Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
        GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
        Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
        YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
        PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
        Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
        PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
        Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
        // diverging
        Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
        RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
        RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
        PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
        PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
        RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
        BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
        RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
        PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
        // qualitative
        Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
        Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
        Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
        Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
        Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
        Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
        Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
        Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
      };
      for (var i = 0, list = Object.keys(colorbrewer); i < list.length; i += 1) {
        var key = list[i];
        colorbrewer[key.toLowerCase()] = colorbrewer[key];
      }
      var colorbrewer_1 = colorbrewer;
      var chroma = chroma_1;
      chroma.average = average;
      chroma.bezier = bezier_1;
      chroma.blend = blend_1;
      chroma.cubehelix = cubehelix;
      chroma.mix = chroma.interpolate = mix$1;
      chroma.random = random_1;
      chroma.scale = scale$2;
      chroma.analyze = analyze_1.analyze;
      chroma.contrast = contrast;
      chroma.deltaE = deltaE;
      chroma.distance = distance;
      chroma.limits = analyze_1.limits;
      chroma.valid = valid;
      chroma.scales = scales;
      chroma.colors = w3cx11_1;
      chroma.brewer = colorbrewer_1;
      var chroma_js = chroma;
      return chroma_js;
    });
  }
});

// node_modules/date-fns/toDate.js
var require_toDate = __commonJS({
  "node_modules/date-fns/toDate.js"(exports) {
    "use strict";
    exports.toDate = toDate;
    function toDate(argument) {
      const argStr = Object.prototype.toString.call(argument);
      if (argument instanceof Date || typeof argument === "object" && argStr === "[object Date]") {
        return new argument.constructor(+argument);
      } else if (typeof argument === "number" || argStr === "[object Number]" || typeof argument === "string" || argStr === "[object String]") {
        return new Date(argument);
      } else {
        return /* @__PURE__ */ new Date(NaN);
      }
    }
  }
});

// node_modules/date-fns/constructFrom.js
var require_constructFrom = __commonJS({
  "node_modules/date-fns/constructFrom.js"(exports) {
    "use strict";
    exports.constructFrom = constructFrom;
    function constructFrom(date, value) {
      if (date instanceof Date) {
        return new date.constructor(value);
      } else {
        return new Date(value);
      }
    }
  }
});

// node_modules/date-fns/addDays.js
var require_addDays = __commonJS({
  "node_modules/date-fns/addDays.js"(exports) {
    "use strict";
    exports.addDays = addDays;
    var _index = require_toDate();
    var _index2 = require_constructFrom();
    function addDays(date, amount) {
      const _date = (0, _index.toDate)(date);
      if (isNaN(amount))
        return (0, _index2.constructFrom)(date, NaN);
      if (!amount) {
        return _date;
      }
      _date.setDate(_date.getDate() + amount);
      return _date;
    }
  }
});

// node_modules/date-fns/addMonths.js
var require_addMonths = __commonJS({
  "node_modules/date-fns/addMonths.js"(exports) {
    "use strict";
    exports.addMonths = addMonths;
    var _index = require_toDate();
    var _index2 = require_constructFrom();
    function addMonths(date, amount) {
      const _date = (0, _index.toDate)(date);
      if (isNaN(amount))
        return (0, _index2.constructFrom)(date, NaN);
      if (!amount) {
        return _date;
      }
      const dayOfMonth = _date.getDate();
      const endOfDesiredMonth = (0, _index2.constructFrom)(date, _date.getTime());
      endOfDesiredMonth.setMonth(_date.getMonth() + amount + 1, 0);
      const daysInMonth = endOfDesiredMonth.getDate();
      if (dayOfMonth >= daysInMonth) {
        return endOfDesiredMonth;
      } else {
        _date.setFullYear(
          endOfDesiredMonth.getFullYear(),
          endOfDesiredMonth.getMonth(),
          dayOfMonth
        );
        return _date;
      }
    }
  }
});

// node_modules/date-fns/add.js
var require_add = __commonJS({
  "node_modules/date-fns/add.js"(exports) {
    "use strict";
    exports.add = add;
    var _index = require_addDays();
    var _index2 = require_addMonths();
    var _index3 = require_constructFrom();
    var _index4 = require_toDate();
    function add(date, duration) {
      const {
        years = 0,
        months = 0,
        weeks = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
      } = duration;
      const _date = (0, _index4.toDate)(date);
      const dateWithMonths = months || years ? (0, _index2.addMonths)(_date, months + years * 12) : _date;
      const dateWithDays = days || weeks ? (0, _index.addDays)(dateWithMonths, days + weeks * 7) : dateWithMonths;
      const minutesToAdd = minutes + hours * 60;
      const secondsToAdd = seconds + minutesToAdd * 60;
      const msToAdd = secondsToAdd * 1e3;
      const finalDate = (0, _index3.constructFrom)(
        date,
        dateWithDays.getTime() + msToAdd
      );
      return finalDate;
    }
  }
});

// node_modules/date-fns/isSaturday.js
var require_isSaturday = __commonJS({
  "node_modules/date-fns/isSaturday.js"(exports) {
    "use strict";
    exports.isSaturday = isSaturday;
    var _index = require_toDate();
    function isSaturday(date) {
      return (0, _index.toDate)(date).getDay() === 6;
    }
  }
});

// node_modules/date-fns/isSunday.js
var require_isSunday = __commonJS({
  "node_modules/date-fns/isSunday.js"(exports) {
    "use strict";
    exports.isSunday = isSunday;
    var _index = require_toDate();
    function isSunday(date) {
      return (0, _index.toDate)(date).getDay() === 0;
    }
  }
});

// node_modules/date-fns/isWeekend.js
var require_isWeekend = __commonJS({
  "node_modules/date-fns/isWeekend.js"(exports) {
    "use strict";
    exports.isWeekend = isWeekend;
    var _index = require_toDate();
    function isWeekend(date) {
      const day = (0, _index.toDate)(date).getDay();
      return day === 0 || day === 6;
    }
  }
});

// node_modules/date-fns/addBusinessDays.js
var require_addBusinessDays = __commonJS({
  "node_modules/date-fns/addBusinessDays.js"(exports) {
    "use strict";
    exports.addBusinessDays = addBusinessDays;
    var _index = require_constructFrom();
    var _index2 = require_isSaturday();
    var _index3 = require_isSunday();
    var _index4 = require_isWeekend();
    var _index5 = require_toDate();
    function addBusinessDays(date, amount) {
      const _date = (0, _index5.toDate)(date);
      const startedOnWeekend = (0, _index4.isWeekend)(_date);
      if (isNaN(amount))
        return (0, _index.constructFrom)(date, NaN);
      const hours = _date.getHours();
      const sign = amount < 0 ? -1 : 1;
      const fullWeeks = Math.trunc(amount / 5);
      _date.setDate(_date.getDate() + fullWeeks * 7);
      let restDays = Math.abs(amount % 5);
      while (restDays > 0) {
        _date.setDate(_date.getDate() + sign);
        if (!(0, _index4.isWeekend)(_date))
          restDays -= 1;
      }
      if (startedOnWeekend && (0, _index4.isWeekend)(_date) && amount !== 0) {
        if ((0, _index2.isSaturday)(_date))
          _date.setDate(_date.getDate() + (sign < 0 ? 2 : -1));
        if ((0, _index3.isSunday)(_date))
          _date.setDate(_date.getDate() + (sign < 0 ? 1 : -2));
      }
      _date.setHours(hours);
      return _date;
    }
  }
});

// node_modules/date-fns/addMilliseconds.js
var require_addMilliseconds = __commonJS({
  "node_modules/date-fns/addMilliseconds.js"(exports) {
    "use strict";
    exports.addMilliseconds = addMilliseconds;
    var _index = require_toDate();
    var _index2 = require_constructFrom();
    function addMilliseconds(date, amount) {
      const timestamp = +(0, _index.toDate)(date);
      return (0, _index2.constructFrom)(date, timestamp + amount);
    }
  }
});

// node_modules/date-fns/constants.js
var require_constants = __commonJS({
  "node_modules/date-fns/constants.js"(exports) {
    "use strict";
    exports.secondsInYear = exports.secondsInWeek = exports.secondsInQuarter = exports.secondsInMonth = exports.secondsInMinute = exports.secondsInHour = exports.secondsInDay = exports.quartersInYear = exports.monthsInYear = exports.monthsInQuarter = exports.minutesInYear = exports.minutesInMonth = exports.minutesInHour = exports.minutesInDay = exports.minTime = exports.millisecondsInWeek = exports.millisecondsInSecond = exports.millisecondsInMinute = exports.millisecondsInHour = exports.millisecondsInDay = exports.maxTime = exports.daysInYear = exports.daysInWeek = void 0;
    var daysInWeek = exports.daysInWeek = 7;
    var daysInYear = exports.daysInYear = 365.2425;
    var maxTime = exports.maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
    var minTime = exports.minTime = -maxTime;
    var millisecondsInWeek = exports.millisecondsInWeek = 6048e5;
    var millisecondsInDay = exports.millisecondsInDay = 864e5;
    var millisecondsInMinute = exports.millisecondsInMinute = 6e4;
    var millisecondsInHour = exports.millisecondsInHour = 36e5;
    var millisecondsInSecond = exports.millisecondsInSecond = 1e3;
    var minutesInYear = exports.minutesInYear = 525600;
    var minutesInMonth = exports.minutesInMonth = 43200;
    var minutesInDay = exports.minutesInDay = 1440;
    var minutesInHour = exports.minutesInHour = 60;
    var monthsInQuarter = exports.monthsInQuarter = 3;
    var monthsInYear = exports.monthsInYear = 12;
    var quartersInYear = exports.quartersInYear = 4;
    var secondsInHour = exports.secondsInHour = 3600;
    var secondsInMinute = exports.secondsInMinute = 60;
    var secondsInDay = exports.secondsInDay = secondsInHour * 24;
    var secondsInWeek = exports.secondsInWeek = secondsInDay * 7;
    var secondsInYear = exports.secondsInYear = secondsInDay * daysInYear;
    var secondsInMonth = exports.secondsInMonth = secondsInYear / 12;
    var secondsInQuarter = exports.secondsInQuarter = secondsInMonth * 3;
  }
});

// node_modules/date-fns/addHours.js
var require_addHours = __commonJS({
  "node_modules/date-fns/addHours.js"(exports) {
    "use strict";
    exports.addHours = addHours;
    var _index = require_addMilliseconds();
    var _index2 = require_constants();
    function addHours(date, amount) {
      return (0, _index.addMilliseconds)(date, amount * _index2.millisecondsInHour);
    }
  }
});

// node_modules/date-fns/_lib/defaultOptions.js
var require_defaultOptions = __commonJS({
  "node_modules/date-fns/_lib/defaultOptions.js"(exports) {
    "use strict";
    exports.getDefaultOptions = getDefaultOptions;
    exports.setDefaultOptions = setDefaultOptions;
    var defaultOptions = {};
    function getDefaultOptions() {
      return defaultOptions;
    }
    function setDefaultOptions(newOptions) {
      defaultOptions = newOptions;
    }
  }
});

// node_modules/date-fns/startOfWeek.js
var require_startOfWeek = __commonJS({
  "node_modules/date-fns/startOfWeek.js"(exports) {
    "use strict";
    exports.startOfWeek = startOfWeek;
    var _index = require_toDate();
    var _index2 = require_defaultOptions();
    function startOfWeek(date, options) {
      var _a, _b, _c, _d;
      const defaultOptions = (0, _index2.getDefaultOptions)();
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
      const _date = (0, _index.toDate)(date);
      const day = _date.getDay();
      const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      _date.setDate(_date.getDate() - diff);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/startOfISOWeek.js
var require_startOfISOWeek = __commonJS({
  "node_modules/date-fns/startOfISOWeek.js"(exports) {
    "use strict";
    exports.startOfISOWeek = startOfISOWeek;
    var _index = require_startOfWeek();
    function startOfISOWeek(date) {
      return (0, _index.startOfWeek)(date, { weekStartsOn: 1 });
    }
  }
});

// node_modules/date-fns/getISOWeekYear.js
var require_getISOWeekYear = __commonJS({
  "node_modules/date-fns/getISOWeekYear.js"(exports) {
    "use strict";
    exports.getISOWeekYear = getISOWeekYear;
    var _index = require_constructFrom();
    var _index2 = require_startOfISOWeek();
    var _index3 = require_toDate();
    function getISOWeekYear(date) {
      const _date = (0, _index3.toDate)(date);
      const year = _date.getFullYear();
      const fourthOfJanuaryOfNextYear = (0, _index.constructFrom)(date, 0);
      fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
      const startOfNextYear = (0, _index2.startOfISOWeek)(
        fourthOfJanuaryOfNextYear
      );
      const fourthOfJanuaryOfThisYear = (0, _index.constructFrom)(date, 0);
      fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
      fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
      const startOfThisYear = (0, _index2.startOfISOWeek)(
        fourthOfJanuaryOfThisYear
      );
      if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
  }
});

// node_modules/date-fns/startOfDay.js
var require_startOfDay = __commonJS({
  "node_modules/date-fns/startOfDay.js"(exports) {
    "use strict";
    exports.startOfDay = startOfDay;
    var _index = require_toDate();
    function startOfDay(date) {
      const _date = (0, _index.toDate)(date);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
var require_getTimezoneOffsetInMilliseconds = __commonJS({
  "node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js"(exports) {
    "use strict";
    exports.getTimezoneOffsetInMilliseconds = getTimezoneOffsetInMilliseconds;
    var _index = require_toDate();
    function getTimezoneOffsetInMilliseconds(date) {
      const _date = (0, _index.toDate)(date);
      const utcDate = new Date(
        Date.UTC(
          _date.getFullYear(),
          _date.getMonth(),
          _date.getDate(),
          _date.getHours(),
          _date.getMinutes(),
          _date.getSeconds(),
          _date.getMilliseconds()
        )
      );
      utcDate.setUTCFullYear(_date.getFullYear());
      return +date - +utcDate;
    }
  }
});

// node_modules/date-fns/differenceInCalendarDays.js
var require_differenceInCalendarDays = __commonJS({
  "node_modules/date-fns/differenceInCalendarDays.js"(exports) {
    "use strict";
    exports.differenceInCalendarDays = differenceInCalendarDays;
    var _index = require_constants();
    var _index2 = require_startOfDay();
    var _index3 = require_getTimezoneOffsetInMilliseconds();
    function differenceInCalendarDays(dateLeft, dateRight) {
      const startOfDayLeft = (0, _index2.startOfDay)(dateLeft);
      const startOfDayRight = (0, _index2.startOfDay)(dateRight);
      const timestampLeft = +startOfDayLeft - (0, _index3.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
      const timestampRight = +startOfDayRight - (0, _index3.getTimezoneOffsetInMilliseconds)(startOfDayRight);
      return Math.round(
        (timestampLeft - timestampRight) / _index.millisecondsInDay
      );
    }
  }
});

// node_modules/date-fns/startOfISOWeekYear.js
var require_startOfISOWeekYear = __commonJS({
  "node_modules/date-fns/startOfISOWeekYear.js"(exports) {
    "use strict";
    exports.startOfISOWeekYear = startOfISOWeekYear;
    var _index = require_getISOWeekYear();
    var _index2 = require_startOfISOWeek();
    var _index3 = require_constructFrom();
    function startOfISOWeekYear(date) {
      const year = (0, _index.getISOWeekYear)(date);
      const fourthOfJanuary = (0, _index3.constructFrom)(date, 0);
      fourthOfJanuary.setFullYear(year, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      return (0, _index2.startOfISOWeek)(fourthOfJanuary);
    }
  }
});

// node_modules/date-fns/setISOWeekYear.js
var require_setISOWeekYear = __commonJS({
  "node_modules/date-fns/setISOWeekYear.js"(exports) {
    "use strict";
    exports.setISOWeekYear = setISOWeekYear;
    var _index = require_constructFrom();
    var _index2 = require_differenceInCalendarDays();
    var _index3 = require_startOfISOWeekYear();
    var _index4 = require_toDate();
    function setISOWeekYear(date, weekYear) {
      let _date = (0, _index4.toDate)(date);
      const diff = (0, _index2.differenceInCalendarDays)(
        _date,
        (0, _index3.startOfISOWeekYear)(_date)
      );
      const fourthOfJanuary = (0, _index.constructFrom)(date, 0);
      fourthOfJanuary.setFullYear(weekYear, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      _date = (0, _index3.startOfISOWeekYear)(fourthOfJanuary);
      _date.setDate(_date.getDate() + diff);
      return _date;
    }
  }
});

// node_modules/date-fns/addISOWeekYears.js
var require_addISOWeekYears = __commonJS({
  "node_modules/date-fns/addISOWeekYears.js"(exports) {
    "use strict";
    exports.addISOWeekYears = addISOWeekYears;
    var _index = require_getISOWeekYear();
    var _index2 = require_setISOWeekYear();
    function addISOWeekYears(date, amount) {
      return (0, _index2.setISOWeekYear)(
        date,
        (0, _index.getISOWeekYear)(date) + amount
      );
    }
  }
});

// node_modules/date-fns/addMinutes.js
var require_addMinutes = __commonJS({
  "node_modules/date-fns/addMinutes.js"(exports) {
    "use strict";
    exports.addMinutes = addMinutes;
    var _index = require_addMilliseconds();
    var _index2 = require_constants();
    function addMinutes(date, amount) {
      return (0, _index.addMilliseconds)(
        date,
        amount * _index2.millisecondsInMinute
      );
    }
  }
});

// node_modules/date-fns/addQuarters.js
var require_addQuarters = __commonJS({
  "node_modules/date-fns/addQuarters.js"(exports) {
    "use strict";
    exports.addQuarters = addQuarters;
    var _index = require_addMonths();
    function addQuarters(date, amount) {
      const months = amount * 3;
      return (0, _index.addMonths)(date, months);
    }
  }
});

// node_modules/date-fns/addSeconds.js
var require_addSeconds = __commonJS({
  "node_modules/date-fns/addSeconds.js"(exports) {
    "use strict";
    exports.addSeconds = addSeconds;
    var _index = require_addMilliseconds();
    function addSeconds(date, amount) {
      return (0, _index.addMilliseconds)(date, amount * 1e3);
    }
  }
});

// node_modules/date-fns/addWeeks.js
var require_addWeeks = __commonJS({
  "node_modules/date-fns/addWeeks.js"(exports) {
    "use strict";
    exports.addWeeks = addWeeks;
    var _index = require_addDays();
    function addWeeks(date, amount) {
      const days = amount * 7;
      return (0, _index.addDays)(date, days);
    }
  }
});

// node_modules/date-fns/addYears.js
var require_addYears = __commonJS({
  "node_modules/date-fns/addYears.js"(exports) {
    "use strict";
    exports.addYears = addYears;
    var _index = require_addMonths();
    function addYears(date, amount) {
      return (0, _index.addMonths)(date, amount * 12);
    }
  }
});

// node_modules/date-fns/areIntervalsOverlapping.js
var require_areIntervalsOverlapping = __commonJS({
  "node_modules/date-fns/areIntervalsOverlapping.js"(exports) {
    "use strict";
    exports.areIntervalsOverlapping = areIntervalsOverlapping;
    var _index = require_toDate();
    function areIntervalsOverlapping(intervalLeft, intervalRight, options) {
      const [leftStartTime, leftEndTime] = [
        +(0, _index.toDate)(intervalLeft.start),
        +(0, _index.toDate)(intervalLeft.end)
      ].sort((a, b) => a - b);
      const [rightStartTime, rightEndTime] = [
        +(0, _index.toDate)(intervalRight.start),
        +(0, _index.toDate)(intervalRight.end)
      ].sort((a, b) => a - b);
      if (options == null ? void 0 : options.inclusive)
        return leftStartTime <= rightEndTime && rightStartTime <= leftEndTime;
      return leftStartTime < rightEndTime && rightStartTime < leftEndTime;
    }
  }
});

// node_modules/date-fns/max.js
var require_max = __commonJS({
  "node_modules/date-fns/max.js"(exports) {
    "use strict";
    exports.max = max;
    var _index = require_toDate();
    function max(dates) {
      let result;
      dates.forEach(function(dirtyDate) {
        const currentDate = (0, _index.toDate)(dirtyDate);
        if (result === void 0 || result < currentDate || isNaN(Number(currentDate))) {
          result = currentDate;
        }
      });
      return result || /* @__PURE__ */ new Date(NaN);
    }
  }
});

// node_modules/date-fns/min.js
var require_min = __commonJS({
  "node_modules/date-fns/min.js"(exports) {
    "use strict";
    exports.min = min;
    var _index = require_toDate();
    function min(dates) {
      let result;
      dates.forEach((dirtyDate) => {
        const date = (0, _index.toDate)(dirtyDate);
        if (!result || result > date || isNaN(+date)) {
          result = date;
        }
      });
      return result || /* @__PURE__ */ new Date(NaN);
    }
  }
});

// node_modules/date-fns/clamp.js
var require_clamp = __commonJS({
  "node_modules/date-fns/clamp.js"(exports) {
    "use strict";
    exports.clamp = clamp;
    var _index = require_max();
    var _index2 = require_min();
    function clamp(date, interval) {
      return (0, _index2.min)([
        (0, _index.max)([date, interval.start]),
        interval.end
      ]);
    }
  }
});

// node_modules/date-fns/closestIndexTo.js
var require_closestIndexTo = __commonJS({
  "node_modules/date-fns/closestIndexTo.js"(exports) {
    "use strict";
    exports.closestIndexTo = closestIndexTo;
    var _index = require_toDate();
    function closestIndexTo(dateToCompare, dates) {
      const date = (0, _index.toDate)(dateToCompare);
      if (isNaN(Number(date)))
        return NaN;
      const timeToCompare = date.getTime();
      let result;
      let minDistance;
      dates.forEach(function(dirtyDate, index) {
        const currentDate = (0, _index.toDate)(dirtyDate);
        if (isNaN(Number(currentDate))) {
          result = NaN;
          minDistance = NaN;
          return;
        }
        const distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < minDistance) {
          result = index;
          minDistance = distance;
        }
      });
      return result;
    }
  }
});

// node_modules/date-fns/closestTo.js
var require_closestTo = __commonJS({
  "node_modules/date-fns/closestTo.js"(exports) {
    "use strict";
    exports.closestTo = closestTo;
    var _index = require_constructFrom();
    var _index2 = require_toDate();
    function closestTo(dateToCompare, dates) {
      const date = (0, _index2.toDate)(dateToCompare);
      if (isNaN(Number(date)))
        return (0, _index.constructFrom)(dateToCompare, NaN);
      const timeToCompare = date.getTime();
      let result;
      let minDistance;
      dates.forEach((dirtyDate) => {
        const currentDate = (0, _index2.toDate)(dirtyDate);
        if (isNaN(Number(currentDate))) {
          result = (0, _index.constructFrom)(dateToCompare, NaN);
          minDistance = NaN;
          return;
        }
        const distance = Math.abs(timeToCompare - currentDate.getTime());
        if (result == null || distance < minDistance) {
          result = currentDate;
          minDistance = distance;
        }
      });
      return result;
    }
  }
});

// node_modules/date-fns/compareAsc.js
var require_compareAsc = __commonJS({
  "node_modules/date-fns/compareAsc.js"(exports) {
    "use strict";
    exports.compareAsc = compareAsc;
    var _index = require_toDate();
    function compareAsc(dateLeft, dateRight) {
      const _dateLeft = (0, _index.toDate)(dateLeft);
      const _dateRight = (0, _index.toDate)(dateRight);
      const diff = _dateLeft.getTime() - _dateRight.getTime();
      if (diff < 0) {
        return -1;
      } else if (diff > 0) {
        return 1;
      } else {
        return diff;
      }
    }
  }
});

// node_modules/date-fns/compareDesc.js
var require_compareDesc = __commonJS({
  "node_modules/date-fns/compareDesc.js"(exports) {
    "use strict";
    exports.compareDesc = compareDesc;
    var _index = require_toDate();
    function compareDesc(dateLeft, dateRight) {
      const _dateLeft = (0, _index.toDate)(dateLeft);
      const _dateRight = (0, _index.toDate)(dateRight);
      const diff = _dateLeft.getTime() - _dateRight.getTime();
      if (diff > 0) {
        return -1;
      } else if (diff < 0) {
        return 1;
      } else {
        return diff;
      }
    }
  }
});

// node_modules/date-fns/daysToWeeks.js
var require_daysToWeeks = __commonJS({
  "node_modules/date-fns/daysToWeeks.js"(exports) {
    "use strict";
    exports.daysToWeeks = daysToWeeks;
    var _index = require_constants();
    function daysToWeeks(days) {
      const weeks = days / _index.daysInWeek;
      return Math.trunc(weeks);
    }
  }
});

// node_modules/date-fns/isSameDay.js
var require_isSameDay = __commonJS({
  "node_modules/date-fns/isSameDay.js"(exports) {
    "use strict";
    exports.isSameDay = isSameDay;
    var _index = require_startOfDay();
    function isSameDay(dateLeft, dateRight) {
      const dateLeftStartOfDay = (0, _index.startOfDay)(dateLeft);
      const dateRightStartOfDay = (0, _index.startOfDay)(dateRight);
      return +dateLeftStartOfDay === +dateRightStartOfDay;
    }
  }
});

// node_modules/date-fns/isDate.js
var require_isDate = __commonJS({
  "node_modules/date-fns/isDate.js"(exports) {
    "use strict";
    exports.isDate = isDate;
    function isDate(value) {
      return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
    }
  }
});

// node_modules/date-fns/isValid.js
var require_isValid = __commonJS({
  "node_modules/date-fns/isValid.js"(exports) {
    "use strict";
    exports.isValid = isValid;
    var _index = require_isDate();
    var _index2 = require_toDate();
    function isValid(date) {
      if (!(0, _index.isDate)(date) && typeof date !== "number") {
        return false;
      }
      const _date = (0, _index2.toDate)(date);
      return !isNaN(Number(_date));
    }
  }
});

// node_modules/date-fns/differenceInBusinessDays.js
var require_differenceInBusinessDays = __commonJS({
  "node_modules/date-fns/differenceInBusinessDays.js"(exports) {
    "use strict";
    exports.differenceInBusinessDays = differenceInBusinessDays;
    var _index = require_addDays();
    var _index2 = require_differenceInCalendarDays();
    var _index3 = require_isSameDay();
    var _index4 = require_isValid();
    var _index5 = require_isWeekend();
    var _index6 = require_toDate();
    function differenceInBusinessDays(dateLeft, dateRight) {
      const _dateLeft = (0, _index6.toDate)(dateLeft);
      let _dateRight = (0, _index6.toDate)(dateRight);
      if (!(0, _index4.isValid)(_dateLeft) || !(0, _index4.isValid)(_dateRight))
        return NaN;
      const calendarDifference = (0, _index2.differenceInCalendarDays)(
        _dateLeft,
        _dateRight
      );
      const sign = calendarDifference < 0 ? -1 : 1;
      const weeks = Math.trunc(calendarDifference / 7);
      let result = weeks * 5;
      _dateRight = (0, _index.addDays)(_dateRight, weeks * 7);
      while (!(0, _index3.isSameDay)(_dateLeft, _dateRight)) {
        result += (0, _index5.isWeekend)(_dateRight) ? 0 : sign;
        _dateRight = (0, _index.addDays)(_dateRight, sign);
      }
      return result === 0 ? 0 : result;
    }
  }
});

// node_modules/date-fns/differenceInCalendarISOWeekYears.js
var require_differenceInCalendarISOWeekYears = __commonJS({
  "node_modules/date-fns/differenceInCalendarISOWeekYears.js"(exports) {
    "use strict";
    exports.differenceInCalendarISOWeekYears = differenceInCalendarISOWeekYears;
    var _index = require_getISOWeekYear();
    function differenceInCalendarISOWeekYears(dateLeft, dateRight) {
      return (0, _index.getISOWeekYear)(dateLeft) - (0, _index.getISOWeekYear)(dateRight);
    }
  }
});

// node_modules/date-fns/differenceInCalendarISOWeeks.js
var require_differenceInCalendarISOWeeks = __commonJS({
  "node_modules/date-fns/differenceInCalendarISOWeeks.js"(exports) {
    "use strict";
    exports.differenceInCalendarISOWeeks = differenceInCalendarISOWeeks;
    var _index = require_constants();
    var _index2 = require_startOfISOWeek();
    var _index3 = require_getTimezoneOffsetInMilliseconds();
    function differenceInCalendarISOWeeks(dateLeft, dateRight) {
      const startOfISOWeekLeft = (0, _index2.startOfISOWeek)(dateLeft);
      const startOfISOWeekRight = (0, _index2.startOfISOWeek)(dateRight);
      const timestampLeft = +startOfISOWeekLeft - (0, _index3.getTimezoneOffsetInMilliseconds)(startOfISOWeekLeft);
      const timestampRight = +startOfISOWeekRight - (0, _index3.getTimezoneOffsetInMilliseconds)(startOfISOWeekRight);
      return Math.round(
        (timestampLeft - timestampRight) / _index.millisecondsInWeek
      );
    }
  }
});

// node_modules/date-fns/differenceInCalendarMonths.js
var require_differenceInCalendarMonths = __commonJS({
  "node_modules/date-fns/differenceInCalendarMonths.js"(exports) {
    "use strict";
    exports.differenceInCalendarMonths = differenceInCalendarMonths;
    var _index = require_toDate();
    function differenceInCalendarMonths(dateLeft, dateRight) {
      const _dateLeft = (0, _index.toDate)(dateLeft);
      const _dateRight = (0, _index.toDate)(dateRight);
      const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
      const monthDiff = _dateLeft.getMonth() - _dateRight.getMonth();
      return yearDiff * 12 + monthDiff;
    }
  }
});

// node_modules/date-fns/getQuarter.js
var require_getQuarter = __commonJS({
  "node_modules/date-fns/getQuarter.js"(exports) {
    "use strict";
    exports.getQuarter = getQuarter;
    var _index = require_toDate();
    function getQuarter(date) {
      const _date = (0, _index.toDate)(date);
      const quarter = Math.trunc(_date.getMonth() / 3) + 1;
      return quarter;
    }
  }
});

// node_modules/date-fns/differenceInCalendarQuarters.js
var require_differenceInCalendarQuarters = __commonJS({
  "node_modules/date-fns/differenceInCalendarQuarters.js"(exports) {
    "use strict";
    exports.differenceInCalendarQuarters = differenceInCalendarQuarters;
    var _index = require_getQuarter();
    var _index2 = require_toDate();
    function differenceInCalendarQuarters(dateLeft, dateRight) {
      const _dateLeft = (0, _index2.toDate)(dateLeft);
      const _dateRight = (0, _index2.toDate)(dateRight);
      const yearDiff = _dateLeft.getFullYear() - _dateRight.getFullYear();
      const quarterDiff = (0, _index.getQuarter)(_dateLeft) - (0, _index.getQuarter)(_dateRight);
      return yearDiff * 4 + quarterDiff;
    }
  }
});

// node_modules/date-fns/differenceInCalendarWeeks.js
var require_differenceInCalendarWeeks = __commonJS({
  "node_modules/date-fns/differenceInCalendarWeeks.js"(exports) {
    "use strict";
    exports.differenceInCalendarWeeks = differenceInCalendarWeeks;
    var _index = require_constants();
    var _index2 = require_startOfWeek();
    var _index3 = require_getTimezoneOffsetInMilliseconds();
    function differenceInCalendarWeeks(dateLeft, dateRight, options) {
      const startOfWeekLeft = (0, _index2.startOfWeek)(dateLeft, options);
      const startOfWeekRight = (0, _index2.startOfWeek)(dateRight, options);
      const timestampLeft = +startOfWeekLeft - (0, _index3.getTimezoneOffsetInMilliseconds)(startOfWeekLeft);
      const timestampRight = +startOfWeekRight - (0, _index3.getTimezoneOffsetInMilliseconds)(startOfWeekRight);
      return Math.round(
        (timestampLeft - timestampRight) / _index.millisecondsInWeek
      );
    }
  }
});

// node_modules/date-fns/differenceInCalendarYears.js
var require_differenceInCalendarYears = __commonJS({
  "node_modules/date-fns/differenceInCalendarYears.js"(exports) {
    "use strict";
    exports.differenceInCalendarYears = differenceInCalendarYears;
    var _index = require_toDate();
    function differenceInCalendarYears(dateLeft, dateRight) {
      const _dateLeft = (0, _index.toDate)(dateLeft);
      const _dateRight = (0, _index.toDate)(dateRight);
      return _dateLeft.getFullYear() - _dateRight.getFullYear();
    }
  }
});

// node_modules/date-fns/differenceInDays.js
var require_differenceInDays = __commonJS({
  "node_modules/date-fns/differenceInDays.js"(exports) {
    "use strict";
    exports.differenceInDays = differenceInDays;
    var _index = require_differenceInCalendarDays();
    var _index2 = require_toDate();
    function differenceInDays(dateLeft, dateRight) {
      const _dateLeft = (0, _index2.toDate)(dateLeft);
      const _dateRight = (0, _index2.toDate)(dateRight);
      const sign = compareLocalAsc(_dateLeft, _dateRight);
      const difference = Math.abs(
        (0, _index.differenceInCalendarDays)(_dateLeft, _dateRight)
      );
      _dateLeft.setDate(_dateLeft.getDate() - sign * difference);
      const isLastDayNotFull = Number(
        compareLocalAsc(_dateLeft, _dateRight) === -sign
      );
      const result = sign * (difference - isLastDayNotFull);
      return result === 0 ? 0 : result;
    }
    function compareLocalAsc(dateLeft, dateRight) {
      const diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();
      if (diff < 0) {
        return -1;
      } else if (diff > 0) {
        return 1;
      } else {
        return diff;
      }
    }
  }
});

// node_modules/date-fns/_lib/getRoundingMethod.js
var require_getRoundingMethod = __commonJS({
  "node_modules/date-fns/_lib/getRoundingMethod.js"(exports) {
    "use strict";
    exports.getRoundingMethod = getRoundingMethod;
    function getRoundingMethod(method) {
      return (number) => {
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        return result === 0 ? 0 : result;
      };
    }
  }
});

// node_modules/date-fns/differenceInMilliseconds.js
var require_differenceInMilliseconds = __commonJS({
  "node_modules/date-fns/differenceInMilliseconds.js"(exports) {
    "use strict";
    exports.differenceInMilliseconds = differenceInMilliseconds;
    var _index = require_toDate();
    function differenceInMilliseconds(dateLeft, dateRight) {
      return +(0, _index.toDate)(dateLeft) - +(0, _index.toDate)(dateRight);
    }
  }
});

// node_modules/date-fns/differenceInHours.js
var require_differenceInHours = __commonJS({
  "node_modules/date-fns/differenceInHours.js"(exports) {
    "use strict";
    exports.differenceInHours = differenceInHours;
    var _index = require_getRoundingMethod();
    var _index2 = require_constants();
    var _index3 = require_differenceInMilliseconds();
    function differenceInHours(dateLeft, dateRight, options) {
      const diff = (0, _index3.differenceInMilliseconds)(dateLeft, dateRight) / _index2.millisecondsInHour;
      return (0, _index.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
  }
});

// node_modules/date-fns/subISOWeekYears.js
var require_subISOWeekYears = __commonJS({
  "node_modules/date-fns/subISOWeekYears.js"(exports) {
    "use strict";
    exports.subISOWeekYears = subISOWeekYears;
    var _index = require_addISOWeekYears();
    function subISOWeekYears(date, amount) {
      return (0, _index.addISOWeekYears)(date, -amount);
    }
  }
});

// node_modules/date-fns/differenceInISOWeekYears.js
var require_differenceInISOWeekYears = __commonJS({
  "node_modules/date-fns/differenceInISOWeekYears.js"(exports) {
    "use strict";
    exports.differenceInISOWeekYears = differenceInISOWeekYears;
    var _index = require_compareAsc();
    var _index2 = require_differenceInCalendarISOWeekYears();
    var _index3 = require_subISOWeekYears();
    var _index4 = require_toDate();
    function differenceInISOWeekYears(dateLeft, dateRight) {
      let _dateLeft = (0, _index4.toDate)(dateLeft);
      const _dateRight = (0, _index4.toDate)(dateRight);
      const sign = (0, _index.compareAsc)(_dateLeft, _dateRight);
      const difference = Math.abs(
        (0, _index2.differenceInCalendarISOWeekYears)(_dateLeft, _dateRight)
      );
      _dateLeft = (0, _index3.subISOWeekYears)(_dateLeft, sign * difference);
      const isLastISOWeekYearNotFull = Number(
        (0, _index.compareAsc)(_dateLeft, _dateRight) === -sign
      );
      const result = sign * (difference - isLastISOWeekYearNotFull);
      return result === 0 ? 0 : result;
    }
  }
});

// node_modules/date-fns/differenceInMinutes.js
var require_differenceInMinutes = __commonJS({
  "node_modules/date-fns/differenceInMinutes.js"(exports) {
    "use strict";
    exports.differenceInMinutes = differenceInMinutes;
    var _index = require_getRoundingMethod();
    var _index2 = require_constants();
    var _index3 = require_differenceInMilliseconds();
    function differenceInMinutes(dateLeft, dateRight, options) {
      const diff = (0, _index3.differenceInMilliseconds)(dateLeft, dateRight) / _index2.millisecondsInMinute;
      return (0, _index.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
  }
});

// node_modules/date-fns/endOfDay.js
var require_endOfDay = __commonJS({
  "node_modules/date-fns/endOfDay.js"(exports) {
    "use strict";
    exports.endOfDay = endOfDay;
    var _index = require_toDate();
    function endOfDay(date) {
      const _date = (0, _index.toDate)(date);
      _date.setHours(23, 59, 59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfMonth.js
var require_endOfMonth = __commonJS({
  "node_modules/date-fns/endOfMonth.js"(exports) {
    "use strict";
    exports.endOfMonth = endOfMonth;
    var _index = require_toDate();
    function endOfMonth(date) {
      const _date = (0, _index.toDate)(date);
      const month = _date.getMonth();
      _date.setFullYear(_date.getFullYear(), month + 1, 0);
      _date.setHours(23, 59, 59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/isLastDayOfMonth.js
var require_isLastDayOfMonth = __commonJS({
  "node_modules/date-fns/isLastDayOfMonth.js"(exports) {
    "use strict";
    exports.isLastDayOfMonth = isLastDayOfMonth;
    var _index = require_endOfDay();
    var _index2 = require_endOfMonth();
    var _index3 = require_toDate();
    function isLastDayOfMonth(date) {
      const _date = (0, _index3.toDate)(date);
      return +(0, _index.endOfDay)(_date) === +(0, _index2.endOfMonth)(_date);
    }
  }
});

// node_modules/date-fns/differenceInMonths.js
var require_differenceInMonths = __commonJS({
  "node_modules/date-fns/differenceInMonths.js"(exports) {
    "use strict";
    exports.differenceInMonths = differenceInMonths;
    var _index = require_compareAsc();
    var _index2 = require_differenceInCalendarMonths();
    var _index3 = require_isLastDayOfMonth();
    var _index4 = require_toDate();
    function differenceInMonths(dateLeft, dateRight) {
      const _dateLeft = (0, _index4.toDate)(dateLeft);
      const _dateRight = (0, _index4.toDate)(dateRight);
      const sign = (0, _index.compareAsc)(_dateLeft, _dateRight);
      const difference = Math.abs(
        (0, _index2.differenceInCalendarMonths)(_dateLeft, _dateRight)
      );
      let result;
      if (difference < 1) {
        result = 0;
      } else {
        if (_dateLeft.getMonth() === 1 && _dateLeft.getDate() > 27) {
          _dateLeft.setDate(30);
        }
        _dateLeft.setMonth(_dateLeft.getMonth() - sign * difference);
        let isLastMonthNotFull = (0, _index.compareAsc)(_dateLeft, _dateRight) === -sign;
        if ((0, _index3.isLastDayOfMonth)((0, _index4.toDate)(dateLeft)) && difference === 1 && (0, _index.compareAsc)(dateLeft, _dateRight) === 1) {
          isLastMonthNotFull = false;
        }
        result = sign * (difference - Number(isLastMonthNotFull));
      }
      return result === 0 ? 0 : result;
    }
  }
});

// node_modules/date-fns/differenceInQuarters.js
var require_differenceInQuarters = __commonJS({
  "node_modules/date-fns/differenceInQuarters.js"(exports) {
    "use strict";
    exports.differenceInQuarters = differenceInQuarters;
    var _index = require_getRoundingMethod();
    var _index2 = require_differenceInMonths();
    function differenceInQuarters(dateLeft, dateRight, options) {
      const diff = (0, _index2.differenceInMonths)(dateLeft, dateRight) / 3;
      return (0, _index.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
  }
});

// node_modules/date-fns/differenceInSeconds.js
var require_differenceInSeconds = __commonJS({
  "node_modules/date-fns/differenceInSeconds.js"(exports) {
    "use strict";
    exports.differenceInSeconds = differenceInSeconds;
    var _index = require_getRoundingMethod();
    var _index2 = require_differenceInMilliseconds();
    function differenceInSeconds(dateLeft, dateRight, options) {
      const diff = (0, _index2.differenceInMilliseconds)(dateLeft, dateRight) / 1e3;
      return (0, _index.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
  }
});

// node_modules/date-fns/differenceInWeeks.js
var require_differenceInWeeks = __commonJS({
  "node_modules/date-fns/differenceInWeeks.js"(exports) {
    "use strict";
    exports.differenceInWeeks = differenceInWeeks;
    var _index = require_getRoundingMethod();
    var _index2 = require_differenceInDays();
    function differenceInWeeks(dateLeft, dateRight, options) {
      const diff = (0, _index2.differenceInDays)(dateLeft, dateRight) / 7;
      return (0, _index.getRoundingMethod)(options == null ? void 0 : options.roundingMethod)(diff);
    }
  }
});

// node_modules/date-fns/differenceInYears.js
var require_differenceInYears = __commonJS({
  "node_modules/date-fns/differenceInYears.js"(exports) {
    "use strict";
    exports.differenceInYears = differenceInYears;
    var _index = require_compareAsc();
    var _index2 = require_differenceInCalendarYears();
    var _index3 = require_toDate();
    function differenceInYears(dateLeft, dateRight) {
      const _dateLeft = (0, _index3.toDate)(dateLeft);
      const _dateRight = (0, _index3.toDate)(dateRight);
      const sign = (0, _index.compareAsc)(_dateLeft, _dateRight);
      const difference = Math.abs(
        (0, _index2.differenceInCalendarYears)(_dateLeft, _dateRight)
      );
      _dateLeft.setFullYear(1584);
      _dateRight.setFullYear(1584);
      const isLastYearNotFull = (0, _index.compareAsc)(_dateLeft, _dateRight) === -sign;
      const result = sign * (difference - +isLastYearNotFull);
      return result === 0 ? 0 : result;
    }
  }
});

// node_modules/date-fns/eachDayOfInterval.js
var require_eachDayOfInterval = __commonJS({
  "node_modules/date-fns/eachDayOfInterval.js"(exports) {
    "use strict";
    exports.eachDayOfInterval = eachDayOfInterval;
    var _index = require_toDate();
    function eachDayOfInterval(interval, options) {
      const startDate = (0, _index.toDate)(interval.start);
      const endDate = (0, _index.toDate)(interval.end);
      let reversed = +startDate > +endDate;
      const endTime = reversed ? +startDate : +endDate;
      const currentDate = reversed ? endDate : startDate;
      currentDate.setHours(0, 0, 0, 0);
      let step = (options == null ? void 0 : options.step) ?? 1;
      if (!step)
        return [];
      if (step < 0) {
        step = -step;
        reversed = !reversed;
      }
      const dates = [];
      while (+currentDate <= endTime) {
        dates.push((0, _index.toDate)(currentDate));
        currentDate.setDate(currentDate.getDate() + step);
        currentDate.setHours(0, 0, 0, 0);
      }
      return reversed ? dates.reverse() : dates;
    }
  }
});

// node_modules/date-fns/eachHourOfInterval.js
var require_eachHourOfInterval = __commonJS({
  "node_modules/date-fns/eachHourOfInterval.js"(exports) {
    "use strict";
    exports.eachHourOfInterval = eachHourOfInterval;
    var _index = require_addHours();
    var _index2 = require_toDate();
    function eachHourOfInterval(interval, options) {
      const startDate = (0, _index2.toDate)(interval.start);
      const endDate = (0, _index2.toDate)(interval.end);
      let reversed = +startDate > +endDate;
      const endTime = reversed ? +startDate : +endDate;
      let currentDate = reversed ? endDate : startDate;
      currentDate.setMinutes(0, 0, 0);
      let step = (options == null ? void 0 : options.step) ?? 1;
      if (!step)
        return [];
      if (step < 0) {
        step = -step;
        reversed = !reversed;
      }
      const dates = [];
      while (+currentDate <= endTime) {
        dates.push((0, _index2.toDate)(currentDate));
        currentDate = (0, _index.addHours)(currentDate, step);
      }
      return reversed ? dates.reverse() : dates;
    }
  }
});

// node_modules/date-fns/startOfMinute.js
var require_startOfMinute = __commonJS({
  "node_modules/date-fns/startOfMinute.js"(exports) {
    "use strict";
    exports.startOfMinute = startOfMinute;
    var _index = require_toDate();
    function startOfMinute(date) {
      const _date = (0, _index.toDate)(date);
      _date.setSeconds(0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/eachMinuteOfInterval.js
var require_eachMinuteOfInterval = __commonJS({
  "node_modules/date-fns/eachMinuteOfInterval.js"(exports) {
    "use strict";
    exports.eachMinuteOfInterval = eachMinuteOfInterval;
    var _index = require_addMinutes();
    var _index2 = require_startOfMinute();
    var _index3 = require_toDate();
    function eachMinuteOfInterval(interval, options) {
      const startDate = (0, _index2.startOfMinute)(
        (0, _index3.toDate)(interval.start)
      );
      const endDate = (0, _index3.toDate)(interval.end);
      let reversed = +startDate > +endDate;
      const endTime = reversed ? +startDate : +endDate;
      let currentDate = reversed ? endDate : startDate;
      let step = (options == null ? void 0 : options.step) ?? 1;
      if (!step)
        return [];
      if (step < 0) {
        step = -step;
        reversed = !reversed;
      }
      const dates = [];
      while (+currentDate <= endTime) {
        dates.push((0, _index3.toDate)(currentDate));
        currentDate = (0, _index.addMinutes)(currentDate, step);
      }
      return reversed ? dates.reverse() : dates;
    }
  }
});

// node_modules/date-fns/eachMonthOfInterval.js
var require_eachMonthOfInterval = __commonJS({
  "node_modules/date-fns/eachMonthOfInterval.js"(exports) {
    "use strict";
    exports.eachMonthOfInterval = eachMonthOfInterval;
    var _index = require_toDate();
    function eachMonthOfInterval(interval, options) {
      const startDate = (0, _index.toDate)(interval.start);
      const endDate = (0, _index.toDate)(interval.end);
      let reversed = +startDate > +endDate;
      const endTime = reversed ? +startDate : +endDate;
      const currentDate = reversed ? endDate : startDate;
      currentDate.setHours(0, 0, 0, 0);
      currentDate.setDate(1);
      let step = (options == null ? void 0 : options.step) ?? 1;
      if (!step)
        return [];
      if (step < 0) {
        step = -step;
        reversed = !reversed;
      }
      const dates = [];
      while (+currentDate <= endTime) {
        dates.push((0, _index.toDate)(currentDate));
        currentDate.setMonth(currentDate.getMonth() + step);
      }
      return reversed ? dates.reverse() : dates;
    }
  }
});

// node_modules/date-fns/startOfQuarter.js
var require_startOfQuarter = __commonJS({
  "node_modules/date-fns/startOfQuarter.js"(exports) {
    "use strict";
    exports.startOfQuarter = startOfQuarter;
    var _index = require_toDate();
    function startOfQuarter(date) {
      const _date = (0, _index.toDate)(date);
      const currentMonth = _date.getMonth();
      const month = currentMonth - currentMonth % 3;
      _date.setMonth(month, 1);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/eachQuarterOfInterval.js
var require_eachQuarterOfInterval = __commonJS({
  "node_modules/date-fns/eachQuarterOfInterval.js"(exports) {
    "use strict";
    exports.eachQuarterOfInterval = eachQuarterOfInterval;
    var _index = require_addQuarters();
    var _index2 = require_startOfQuarter();
    var _index3 = require_toDate();
    function eachQuarterOfInterval(interval, options) {
      const startDate = (0, _index3.toDate)(interval.start);
      const endDate = (0, _index3.toDate)(interval.end);
      let reversed = +startDate > +endDate;
      const endTime = reversed ? +(0, _index2.startOfQuarter)(startDate) : +(0, _index2.startOfQuarter)(endDate);
      let currentDate = reversed ? (0, _index2.startOfQuarter)(endDate) : (0, _index2.startOfQuarter)(startDate);
      let step = (options == null ? void 0 : options.step) ?? 1;
      if (!step)
        return [];
      if (step < 0) {
        step = -step;
        reversed = !reversed;
      }
      const dates = [];
      while (+currentDate <= endTime) {
        dates.push((0, _index3.toDate)(currentDate));
        currentDate = (0, _index.addQuarters)(currentDate, step);
      }
      return reversed ? dates.reverse() : dates;
    }
  }
});

// node_modules/date-fns/eachWeekOfInterval.js
var require_eachWeekOfInterval = __commonJS({
  "node_modules/date-fns/eachWeekOfInterval.js"(exports) {
    "use strict";
    exports.eachWeekOfInterval = eachWeekOfInterval;
    var _index = require_addWeeks();
    var _index2 = require_startOfWeek();
    var _index3 = require_toDate();
    function eachWeekOfInterval(interval, options) {
      const startDate = (0, _index3.toDate)(interval.start);
      const endDate = (0, _index3.toDate)(interval.end);
      let reversed = +startDate > +endDate;
      const startDateWeek = reversed ? (0, _index2.startOfWeek)(endDate, options) : (0, _index2.startOfWeek)(startDate, options);
      const endDateWeek = reversed ? (0, _index2.startOfWeek)(startDate, options) : (0, _index2.startOfWeek)(endDate, options);
      startDateWeek.setHours(15);
      endDateWeek.setHours(15);
      const endTime = +endDateWeek.getTime();
      let currentDate = startDateWeek;
      let step = (options == null ? void 0 : options.step) ?? 1;
      if (!step)
        return [];
      if (step < 0) {
        step = -step;
        reversed = !reversed;
      }
      const dates = [];
      while (+currentDate <= endTime) {
        currentDate.setHours(0);
        dates.push((0, _index3.toDate)(currentDate));
        currentDate = (0, _index.addWeeks)(currentDate, step);
        currentDate.setHours(15);
      }
      return reversed ? dates.reverse() : dates;
    }
  }
});

// node_modules/date-fns/eachWeekendOfInterval.js
var require_eachWeekendOfInterval = __commonJS({
  "node_modules/date-fns/eachWeekendOfInterval.js"(exports) {
    "use strict";
    exports.eachWeekendOfInterval = eachWeekendOfInterval;
    var _index = require_eachDayOfInterval();
    var _index2 = require_isWeekend();
    function eachWeekendOfInterval(interval) {
      const dateInterval = (0, _index.eachDayOfInterval)(interval);
      const weekends = [];
      let index = 0;
      while (index < dateInterval.length) {
        const date = dateInterval[index++];
        if ((0, _index2.isWeekend)(date))
          weekends.push(date);
      }
      return weekends;
    }
  }
});

// node_modules/date-fns/startOfMonth.js
var require_startOfMonth = __commonJS({
  "node_modules/date-fns/startOfMonth.js"(exports) {
    "use strict";
    exports.startOfMonth = startOfMonth;
    var _index = require_toDate();
    function startOfMonth(date) {
      const _date = (0, _index.toDate)(date);
      _date.setDate(1);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/eachWeekendOfMonth.js
var require_eachWeekendOfMonth = __commonJS({
  "node_modules/date-fns/eachWeekendOfMonth.js"(exports) {
    "use strict";
    exports.eachWeekendOfMonth = eachWeekendOfMonth;
    var _index = require_eachWeekendOfInterval();
    var _index2 = require_endOfMonth();
    var _index3 = require_startOfMonth();
    function eachWeekendOfMonth(date) {
      const start = (0, _index3.startOfMonth)(date);
      const end = (0, _index2.endOfMonth)(date);
      return (0, _index.eachWeekendOfInterval)({ start, end });
    }
  }
});

// node_modules/date-fns/endOfYear.js
var require_endOfYear = __commonJS({
  "node_modules/date-fns/endOfYear.js"(exports) {
    "use strict";
    exports.endOfYear = endOfYear;
    var _index = require_toDate();
    function endOfYear(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      _date.setFullYear(year + 1, 0, 0);
      _date.setHours(23, 59, 59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/startOfYear.js
var require_startOfYear = __commonJS({
  "node_modules/date-fns/startOfYear.js"(exports) {
    "use strict";
    exports.startOfYear = startOfYear;
    var _index = require_toDate();
    var _index2 = require_constructFrom();
    function startOfYear(date) {
      const cleanDate = (0, _index.toDate)(date);
      const _date = (0, _index2.constructFrom)(date, 0);
      _date.setFullYear(cleanDate.getFullYear(), 0, 1);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/eachWeekendOfYear.js
var require_eachWeekendOfYear = __commonJS({
  "node_modules/date-fns/eachWeekendOfYear.js"(exports) {
    "use strict";
    exports.eachWeekendOfYear = eachWeekendOfYear;
    var _index = require_eachWeekendOfInterval();
    var _index2 = require_endOfYear();
    var _index3 = require_startOfYear();
    function eachWeekendOfYear(date) {
      const start = (0, _index3.startOfYear)(date);
      const end = (0, _index2.endOfYear)(date);
      return (0, _index.eachWeekendOfInterval)({ start, end });
    }
  }
});

// node_modules/date-fns/eachYearOfInterval.js
var require_eachYearOfInterval = __commonJS({
  "node_modules/date-fns/eachYearOfInterval.js"(exports) {
    "use strict";
    exports.eachYearOfInterval = eachYearOfInterval;
    var _index = require_toDate();
    function eachYearOfInterval(interval, options) {
      const startDate = (0, _index.toDate)(interval.start);
      const endDate = (0, _index.toDate)(interval.end);
      let reversed = +startDate > +endDate;
      const endTime = reversed ? +startDate : +endDate;
      const currentDate = reversed ? endDate : startDate;
      currentDate.setHours(0, 0, 0, 0);
      currentDate.setMonth(0, 1);
      let step = (options == null ? void 0 : options.step) ?? 1;
      if (!step)
        return [];
      if (step < 0) {
        step = -step;
        reversed = !reversed;
      }
      const dates = [];
      while (+currentDate <= endTime) {
        dates.push((0, _index.toDate)(currentDate));
        currentDate.setFullYear(currentDate.getFullYear() + step);
      }
      return reversed ? dates.reverse() : dates;
    }
  }
});

// node_modules/date-fns/endOfDecade.js
var require_endOfDecade = __commonJS({
  "node_modules/date-fns/endOfDecade.js"(exports) {
    "use strict";
    exports.endOfDecade = endOfDecade;
    var _index = require_toDate();
    function endOfDecade(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      const decade = 9 + Math.floor(year / 10) * 10;
      _date.setFullYear(decade, 11, 31);
      _date.setHours(23, 59, 59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfHour.js
var require_endOfHour = __commonJS({
  "node_modules/date-fns/endOfHour.js"(exports) {
    "use strict";
    exports.endOfHour = endOfHour;
    var _index = require_toDate();
    function endOfHour(date) {
      const _date = (0, _index.toDate)(date);
      _date.setMinutes(59, 59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfWeek.js
var require_endOfWeek = __commonJS({
  "node_modules/date-fns/endOfWeek.js"(exports) {
    "use strict";
    exports.endOfWeek = endOfWeek;
    var _index = require_toDate();
    var _index2 = require_defaultOptions();
    function endOfWeek(date, options) {
      var _a, _b, _c, _d;
      const defaultOptions = (0, _index2.getDefaultOptions)();
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
      const _date = (0, _index.toDate)(date);
      const day = _date.getDay();
      const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
      _date.setDate(_date.getDate() + diff);
      _date.setHours(23, 59, 59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfISOWeek.js
var require_endOfISOWeek = __commonJS({
  "node_modules/date-fns/endOfISOWeek.js"(exports) {
    "use strict";
    exports.endOfISOWeek = endOfISOWeek;
    var _index = require_endOfWeek();
    function endOfISOWeek(date) {
      return (0, _index.endOfWeek)(date, { weekStartsOn: 1 });
    }
  }
});

// node_modules/date-fns/endOfISOWeekYear.js
var require_endOfISOWeekYear = __commonJS({
  "node_modules/date-fns/endOfISOWeekYear.js"(exports) {
    "use strict";
    exports.endOfISOWeekYear = endOfISOWeekYear;
    var _index = require_getISOWeekYear();
    var _index2 = require_startOfISOWeek();
    var _index3 = require_constructFrom();
    function endOfISOWeekYear(date) {
      const year = (0, _index.getISOWeekYear)(date);
      const fourthOfJanuaryOfNextYear = (0, _index3.constructFrom)(date, 0);
      fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
      const _date = (0, _index2.startOfISOWeek)(fourthOfJanuaryOfNextYear);
      _date.setMilliseconds(_date.getMilliseconds() - 1);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfMinute.js
var require_endOfMinute = __commonJS({
  "node_modules/date-fns/endOfMinute.js"(exports) {
    "use strict";
    exports.endOfMinute = endOfMinute;
    var _index = require_toDate();
    function endOfMinute(date) {
      const _date = (0, _index.toDate)(date);
      _date.setSeconds(59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfQuarter.js
var require_endOfQuarter = __commonJS({
  "node_modules/date-fns/endOfQuarter.js"(exports) {
    "use strict";
    exports.endOfQuarter = endOfQuarter;
    var _index = require_toDate();
    function endOfQuarter(date) {
      const _date = (0, _index.toDate)(date);
      const currentMonth = _date.getMonth();
      const month = currentMonth - currentMonth % 3 + 3;
      _date.setMonth(month, 0);
      _date.setHours(23, 59, 59, 999);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfSecond.js
var require_endOfSecond = __commonJS({
  "node_modules/date-fns/endOfSecond.js"(exports) {
    "use strict";
    exports.endOfSecond = endOfSecond;
    var _index = require_toDate();
    function endOfSecond(date) {
      const _date = (0, _index.toDate)(date);
      _date.setMilliseconds(999);
      return _date;
    }
  }
});

// node_modules/date-fns/endOfToday.js
var require_endOfToday = __commonJS({
  "node_modules/date-fns/endOfToday.js"(exports) {
    "use strict";
    exports.endOfToday = endOfToday;
    var _index = require_endOfDay();
    function endOfToday() {
      return (0, _index.endOfDay)(Date.now());
    }
  }
});

// node_modules/date-fns/endOfTomorrow.js
var require_endOfTomorrow = __commonJS({
  "node_modules/date-fns/endOfTomorrow.js"(exports) {
    "use strict";
    exports.endOfTomorrow = endOfTomorrow;
    function endOfTomorrow() {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const date = /* @__PURE__ */ new Date(0);
      date.setFullYear(year, month, day + 1);
      date.setHours(23, 59, 59, 999);
      return date;
    }
  }
});

// node_modules/date-fns/endOfYesterday.js
var require_endOfYesterday = __commonJS({
  "node_modules/date-fns/endOfYesterday.js"(exports) {
    "use strict";
    exports.endOfYesterday = endOfYesterday;
    function endOfYesterday() {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const date = /* @__PURE__ */ new Date(0);
      date.setFullYear(year, month, day - 1);
      date.setHours(23, 59, 59, 999);
      return date;
    }
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var require_formatDistance = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatDistance.js"(exports) {
    "use strict";
    exports.formatDistance = void 0;
    var formatDistanceLocale = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
      },
      xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
      },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
      },
      xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
      },
      aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
      },
      xHours: {
        one: "1 hour",
        other: "{{count}} hours"
      },
      xDays: {
        one: "1 day",
        other: "{{count}} days"
      },
      aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
      },
      xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
      },
      aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
      },
      xMonths: {
        one: "1 month",
        other: "{{count}} months"
      },
      aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
      },
      xYears: {
        one: "1 year",
        other: "{{count}} years"
      },
      overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
      },
      almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
      }
    };
    var formatDistance = (token, count, options) => {
      let result;
      const tokenValue = formatDistanceLocale[token];
      if (typeof tokenValue === "string") {
        result = tokenValue;
      } else if (count === 1) {
        result = tokenValue.one;
      } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
      }
      if (options == null ? void 0 : options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
          return "in " + result;
        } else {
          return result + " ago";
        }
      }
      return result;
    };
    exports.formatDistance = formatDistance;
  }
});

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
var require_buildFormatLongFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildFormatLongFn.js"(exports) {
    "use strict";
    exports.buildFormatLongFn = buildFormatLongFn;
    function buildFormatLongFn(args) {
      return (options = {}) => {
        const width = options.width ? String(options.width) : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
      };
    }
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var require_formatLong = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatLong.js"(exports) {
    "use strict";
    exports.formatLong = void 0;
    var _index = require_buildFormatLongFn();
    var dateFormats = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy"
    };
    var timeFormats = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    };
    var dateTimeFormats = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    };
    var formatLong = exports.formatLong = {
      date: (0, _index.buildFormatLongFn)({
        formats: dateFormats,
        defaultWidth: "full"
      }),
      time: (0, _index.buildFormatLongFn)({
        formats: timeFormats,
        defaultWidth: "full"
      }),
      dateTime: (0, _index.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "full"
      })
    };
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var require_formatRelative = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatRelative.js"(exports) {
    "use strict";
    exports.formatRelative = void 0;
    var formatRelativeLocale = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P"
    };
    var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];
    exports.formatRelative = formatRelative;
  }
});

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
var require_buildLocalizeFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildLocalizeFn.js"(exports) {
    "use strict";
    exports.buildLocalizeFn = buildLocalizeFn;
    function buildLocalizeFn(args) {
      return (value, options) => {
        const context = (options == null ? void 0 : options.context) ? String(options.context) : "standalone";
        let valuesArray;
        if (context === "formatting" && args.formattingValues) {
          const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
          const width = (options == null ? void 0 : options.width) ? String(options.width) : defaultWidth;
          valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
          const defaultWidth = args.defaultWidth;
          const width = (options == null ? void 0 : options.width) ? String(options.width) : args.defaultWidth;
          valuesArray = args.values[width] || args.values[defaultWidth];
        }
        const index = args.argumentCallback ? args.argumentCallback(value) : value;
        return valuesArray[index];
      };
    }
  }
});

// node_modules/date-fns/locale/en-US/_lib/localize.js
var require_localize = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/localize.js"(exports) {
    "use strict";
    exports.localize = void 0;
    var _index = require_buildLocalizeFn();
    var eraValues = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    };
    var quarterValues = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    };
    var monthValues = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ],
      wide: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    };
    var dayValues = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ]
    };
    var dayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      }
    };
    var formattingDayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      }
    };
    var ordinalNumber = (dirtyNumber, _options) => {
      const number = Number(dirtyNumber);
      const rem100 = number % 100;
      if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
          case 1:
            return number + "st";
          case 2:
            return number + "nd";
          case 3:
            return number + "rd";
        }
      }
      return number + "th";
    };
    var localize = exports.localize = {
      ordinalNumber,
      era: (0, _index.buildLocalizeFn)({
        values: eraValues,
        defaultWidth: "wide"
      }),
      quarter: (0, _index.buildLocalizeFn)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter) => quarter - 1
      }),
      month: (0, _index.buildLocalizeFn)({
        values: monthValues,
        defaultWidth: "wide"
      }),
      day: (0, _index.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide"
      }),
      dayPeriod: (0, _index.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
      })
    };
  }
});

// node_modules/date-fns/locale/_lib/buildMatchFn.js
var require_buildMatchFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildMatchFn.js"(exports) {
    "use strict";
    exports.buildMatchFn = buildMatchFn;
    function buildMatchFn(args) {
      return (string, options = {}) => {
        const width = options.width;
        const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        const matchResult = string.match(matchPattern);
        if (!matchResult) {
          return null;
        }
        const matchedString = matchResult[0];
        const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
          findKey(parsePatterns, (pattern) => pattern.test(matchedString))
        );
        let value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? (
          // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
          options.valueCallback(value)
        ) : value;
        const rest = string.slice(matchedString.length);
        return { value, rest };
      };
    }
    function findKey(object, predicate) {
      for (const key in object) {
        if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
          return key;
        }
      }
      return void 0;
    }
    function findIndex(array, predicate) {
      for (let key = 0; key < array.length; key++) {
        if (predicate(array[key])) {
          return key;
        }
      }
      return void 0;
    }
  }
});

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
var require_buildMatchPatternFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildMatchPatternFn.js"(exports) {
    "use strict";
    exports.buildMatchPatternFn = buildMatchPatternFn;
    function buildMatchPatternFn(args) {
      return (string, options = {}) => {
        const matchResult = string.match(args.matchPattern);
        if (!matchResult)
          return null;
        const matchedString = matchResult[0];
        const parseResult = string.match(args.parsePattern);
        if (!parseResult)
          return null;
        let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        const rest = string.slice(matchedString.length);
        return { value, rest };
      };
    }
  }
});

// node_modules/date-fns/locale/en-US/_lib/match.js
var require_match = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/match.js"(exports) {
    "use strict";
    exports.match = void 0;
    var _index = require_buildMatchFn();
    var _index2 = require_buildMatchPatternFn();
    var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
    var parseOrdinalNumberPattern = /\d+/i;
    var matchEraPatterns = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i
    };
    var parseEraPatterns = {
      any: [/^b/i, /^(a|c)/i]
    };
    var matchQuarterPatterns = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i
    };
    var parseQuarterPatterns = {
      any: [/1/i, /2/i, /3/i, /4/i]
    };
    var matchMonthPatterns = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    };
    var parseMonthPatterns = {
      narrow: [
        /^j/i,
        /^f/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
      ],
      any: [
        /^ja/i,
        /^f/i,
        /^mar/i,
        /^ap/i,
        /^may/i,
        /^jun/i,
        /^jul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i
      ]
    };
    var matchDayPatterns = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    };
    var parseDayPatterns = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    };
    var matchDayPeriodPatterns = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    };
    var parseDayPeriodPatterns = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
      }
    };
    var match = exports.match = {
      ordinalNumber: (0, _index2.buildMatchPatternFn)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value) => parseInt(value, 10)
      }),
      era: (0, _index.buildMatchFn)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
      }),
      quarter: (0, _index.buildMatchFn)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index) => index + 1
      }),
      month: (0, _index.buildMatchFn)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
      }),
      day: (0, _index.buildMatchFn)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
      }),
      dayPeriod: (0, _index.buildMatchFn)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
      })
    };
  }
});

// node_modules/date-fns/locale/en-US.js
var require_en_US = __commonJS({
  "node_modules/date-fns/locale/en-US.js"(exports) {
    "use strict";
    exports.enUS = void 0;
    var _index = require_formatDistance();
    var _index2 = require_formatLong();
    var _index3 = require_formatRelative();
    var _index4 = require_localize();
    var _index5 = require_match();
    var enUS = exports.enUS = {
      code: "en-US",
      formatDistance: _index.formatDistance,
      formatLong: _index2.formatLong,
      formatRelative: _index3.formatRelative,
      localize: _index4.localize,
      match: _index5.match,
      options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }
    };
  }
});

// node_modules/date-fns/_lib/defaultLocale.js
var require_defaultLocale = __commonJS({
  "node_modules/date-fns/_lib/defaultLocale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "defaultLocale", {
      enumerable: true,
      get: function() {
        return _index.enUS;
      }
    });
    var _index = require_en_US();
  }
});

// node_modules/date-fns/getDayOfYear.js
var require_getDayOfYear = __commonJS({
  "node_modules/date-fns/getDayOfYear.js"(exports) {
    "use strict";
    exports.getDayOfYear = getDayOfYear;
    var _index = require_differenceInCalendarDays();
    var _index2 = require_startOfYear();
    var _index3 = require_toDate();
    function getDayOfYear(date) {
      const _date = (0, _index3.toDate)(date);
      const diff = (0, _index.differenceInCalendarDays)(
        _date,
        (0, _index2.startOfYear)(_date)
      );
      const dayOfYear = diff + 1;
      return dayOfYear;
    }
  }
});

// node_modules/date-fns/getISOWeek.js
var require_getISOWeek = __commonJS({
  "node_modules/date-fns/getISOWeek.js"(exports) {
    "use strict";
    exports.getISOWeek = getISOWeek;
    var _index = require_constants();
    var _index2 = require_startOfISOWeek();
    var _index3 = require_startOfISOWeekYear();
    var _index4 = require_toDate();
    function getISOWeek(date) {
      const _date = (0, _index4.toDate)(date);
      const diff = +(0, _index2.startOfISOWeek)(_date) - +(0, _index3.startOfISOWeekYear)(_date);
      return Math.round(diff / _index.millisecondsInWeek) + 1;
    }
  }
});

// node_modules/date-fns/getWeekYear.js
var require_getWeekYear = __commonJS({
  "node_modules/date-fns/getWeekYear.js"(exports) {
    "use strict";
    exports.getWeekYear = getWeekYear;
    var _index = require_constructFrom();
    var _index2 = require_startOfWeek();
    var _index3 = require_toDate();
    var _index4 = require_defaultOptions();
    function getWeekYear(date, options) {
      var _a, _b, _c, _d;
      const _date = (0, _index3.toDate)(date);
      const year = _date.getFullYear();
      const defaultOptions = (0, _index4.getDefaultOptions)();
      const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions.firstWeekContainsDate ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
      const firstWeekOfNextYear = (0, _index.constructFrom)(date, 0);
      firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
      firstWeekOfNextYear.setHours(0, 0, 0, 0);
      const startOfNextYear = (0, _index2.startOfWeek)(
        firstWeekOfNextYear,
        options
      );
      const firstWeekOfThisYear = (0, _index.constructFrom)(date, 0);
      firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
      firstWeekOfThisYear.setHours(0, 0, 0, 0);
      const startOfThisYear = (0, _index2.startOfWeek)(
        firstWeekOfThisYear,
        options
      );
      if (_date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (_date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
  }
});

// node_modules/date-fns/startOfWeekYear.js
var require_startOfWeekYear = __commonJS({
  "node_modules/date-fns/startOfWeekYear.js"(exports) {
    "use strict";
    exports.startOfWeekYear = startOfWeekYear;
    var _index = require_constructFrom();
    var _index2 = require_getWeekYear();
    var _index3 = require_startOfWeek();
    var _index4 = require_defaultOptions();
    function startOfWeekYear(date, options) {
      var _a, _b, _c, _d;
      const defaultOptions = (0, _index4.getDefaultOptions)();
      const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions.firstWeekContainsDate ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
      const year = (0, _index2.getWeekYear)(date, options);
      const firstWeek = (0, _index.constructFrom)(date, 0);
      firstWeek.setFullYear(year, 0, firstWeekContainsDate);
      firstWeek.setHours(0, 0, 0, 0);
      const _date = (0, _index3.startOfWeek)(firstWeek, options);
      return _date;
    }
  }
});

// node_modules/date-fns/getWeek.js
var require_getWeek = __commonJS({
  "node_modules/date-fns/getWeek.js"(exports) {
    "use strict";
    exports.getWeek = getWeek;
    var _index = require_constants();
    var _index2 = require_startOfWeek();
    var _index3 = require_startOfWeekYear();
    var _index4 = require_toDate();
    function getWeek(date, options) {
      const _date = (0, _index4.toDate)(date);
      const diff = +(0, _index2.startOfWeek)(_date, options) - +(0, _index3.startOfWeekYear)(_date, options);
      return Math.round(diff / _index.millisecondsInWeek) + 1;
    }
  }
});

// node_modules/date-fns/_lib/addLeadingZeros.js
var require_addLeadingZeros = __commonJS({
  "node_modules/date-fns/_lib/addLeadingZeros.js"(exports) {
    "use strict";
    exports.addLeadingZeros = addLeadingZeros;
    function addLeadingZeros(number, targetLength) {
      const sign = number < 0 ? "-" : "";
      const output = Math.abs(number).toString().padStart(targetLength, "0");
      return sign + output;
    }
  }
});

// node_modules/date-fns/_lib/format/lightFormatters.js
var require_lightFormatters = __commonJS({
  "node_modules/date-fns/_lib/format/lightFormatters.js"(exports) {
    "use strict";
    exports.lightFormatters = void 0;
    var _index = require_addLeadingZeros();
    var lightFormatters = exports.lightFormatters = {
      // Year
      y(date, token) {
        const signedYear = date.getFullYear();
        const year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _index.addLeadingZeros)(
          token === "yy" ? year % 100 : year,
          token.length
        );
      },
      // Month
      M(date, token) {
        const month = date.getMonth();
        return token === "M" ? String(month + 1) : (0, _index.addLeadingZeros)(month + 1, 2);
      },
      // Day of the month
      d(date, token) {
        return (0, _index.addLeadingZeros)(date.getDate(), token.length);
      },
      // AM or PM
      a(date, token) {
        const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return dayPeriodEnumValue.toUpperCase();
          case "aaa":
            return dayPeriodEnumValue;
          case "aaaaa":
            return dayPeriodEnumValue[0];
          case "aaaa":
          default:
            return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
      },
      // Hour [1-12]
      h(date, token) {
        return (0, _index.addLeadingZeros)(
          date.getHours() % 12 || 12,
          token.length
        );
      },
      // Hour [0-23]
      H(date, token) {
        return (0, _index.addLeadingZeros)(date.getHours(), token.length);
      },
      // Minute
      m(date, token) {
        return (0, _index.addLeadingZeros)(date.getMinutes(), token.length);
      },
      // Second
      s(date, token) {
        return (0, _index.addLeadingZeros)(date.getSeconds(), token.length);
      },
      // Fraction of second
      S(date, token) {
        const numberOfDigits = token.length;
        const milliseconds = date.getMilliseconds();
        const fractionalSeconds = Math.trunc(
          milliseconds * Math.pow(10, numberOfDigits - 3)
        );
        return (0, _index.addLeadingZeros)(fractionalSeconds, token.length);
      }
    };
  }
});

// node_modules/date-fns/_lib/format/formatters.js
var require_formatters = __commonJS({
  "node_modules/date-fns/_lib/format/formatters.js"(exports) {
    "use strict";
    exports.formatters = void 0;
    var _index = require_getDayOfYear();
    var _index2 = require_getISOWeek();
    var _index3 = require_getISOWeekYear();
    var _index4 = require_getWeek();
    var _index5 = require_getWeekYear();
    var _index6 = require_addLeadingZeros();
    var _index7 = require_lightFormatters();
    var dayPeriodEnum = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    };
    var formatters = exports.formatters = {
      // Era
      G: function(date, token, localize) {
        const era = date.getFullYear() > 0 ? 1 : 0;
        switch (token) {
          case "G":
          case "GG":
          case "GGG":
            return localize.era(era, { width: "abbreviated" });
          case "GGGGG":
            return localize.era(era, { width: "narrow" });
          case "GGGG":
          default:
            return localize.era(era, { width: "wide" });
        }
      },
      // Year
      y: function(date, token, localize) {
        if (token === "yo") {
          const signedYear = date.getFullYear();
          const year = signedYear > 0 ? signedYear : 1 - signedYear;
          return localize.ordinalNumber(year, { unit: "year" });
        }
        return _index7.lightFormatters.y(date, token);
      },
      // Local week-numbering year
      Y: function(date, token, localize, options) {
        const signedWeekYear = (0, _index5.getWeekYear)(date, options);
        const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        if (token === "YY") {
          const twoDigitYear = weekYear % 100;
          return (0, _index6.addLeadingZeros)(twoDigitYear, 2);
        }
        if (token === "Yo") {
          return localize.ordinalNumber(weekYear, { unit: "year" });
        }
        return (0, _index6.addLeadingZeros)(weekYear, token.length);
      },
      // ISO week-numbering year
      R: function(date, token) {
        const isoWeekYear = (0, _index3.getISOWeekYear)(date);
        return (0, _index6.addLeadingZeros)(isoWeekYear, token.length);
      },
      // Extended year. This is a single number designating the year of this calendar system.
      // The main difference between `y` and `u` localizers are B.C. years:
      // | Year | `y` | `u` |
      // |------|-----|-----|
      // | AC 1 |   1 |   1 |
      // | BC 1 |   1 |   0 |
      // | BC 2 |   2 |  -1 |
      // Also `yy` always returns the last two digits of a year,
      // while `uu` pads single digit years to 2 characters and returns other years unchanged.
      u: function(date, token) {
        const year = date.getFullYear();
        return (0, _index6.addLeadingZeros)(year, token.length);
      },
      // Quarter
      Q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch (token) {
          case "Q":
            return String(quarter);
          case "QQ":
            return (0, _index6.addLeadingZeros)(quarter, 2);
          case "Qo":
            return localize.ordinalNumber(quarter, { unit: "quarter" });
          case "QQQ":
            return localize.quarter(quarter, {
              width: "abbreviated",
              context: "formatting"
            });
          case "QQQQQ":
            return localize.quarter(quarter, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQ":
          default:
            return localize.quarter(quarter, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone quarter
      q: function(date, token, localize) {
        const quarter = Math.ceil((date.getMonth() + 1) / 3);
        switch (token) {
          case "q":
            return String(quarter);
          case "qq":
            return (0, _index6.addLeadingZeros)(quarter, 2);
          case "qo":
            return localize.ordinalNumber(quarter, { unit: "quarter" });
          case "qqq":
            return localize.quarter(quarter, {
              width: "abbreviated",
              context: "standalone"
            });
          case "qqqqq":
            return localize.quarter(quarter, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqq":
          default:
            return localize.quarter(quarter, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // Month
      M: function(date, token, localize) {
        const month = date.getMonth();
        switch (token) {
          case "M":
          case "MM":
            return _index7.lightFormatters.M(date, token);
          case "Mo":
            return localize.ordinalNumber(month + 1, { unit: "month" });
          case "MMM":
            return localize.month(month, {
              width: "abbreviated",
              context: "formatting"
            });
          case "MMMMM":
            return localize.month(month, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMM":
          default:
            return localize.month(month, { width: "wide", context: "formatting" });
        }
      },
      // Stand-alone month
      L: function(date, token, localize) {
        const month = date.getMonth();
        switch (token) {
          case "L":
            return String(month + 1);
          case "LL":
            return (0, _index6.addLeadingZeros)(month + 1, 2);
          case "Lo":
            return localize.ordinalNumber(month + 1, { unit: "month" });
          case "LLL":
            return localize.month(month, {
              width: "abbreviated",
              context: "standalone"
            });
          case "LLLLL":
            return localize.month(month, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLL":
          default:
            return localize.month(month, { width: "wide", context: "standalone" });
        }
      },
      // Local week of year
      w: function(date, token, localize, options) {
        const week = (0, _index4.getWeek)(date, options);
        if (token === "wo") {
          return localize.ordinalNumber(week, { unit: "week" });
        }
        return (0, _index6.addLeadingZeros)(week, token.length);
      },
      // ISO week of year
      I: function(date, token, localize) {
        const isoWeek = (0, _index2.getISOWeek)(date);
        if (token === "Io") {
          return localize.ordinalNumber(isoWeek, { unit: "week" });
        }
        return (0, _index6.addLeadingZeros)(isoWeek, token.length);
      },
      // Day of the month
      d: function(date, token, localize) {
        if (token === "do") {
          return localize.ordinalNumber(date.getDate(), { unit: "date" });
        }
        return _index7.lightFormatters.d(date, token);
      },
      // Day of year
      D: function(date, token, localize) {
        const dayOfYear = (0, _index.getDayOfYear)(date);
        if (token === "Do") {
          return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
        }
        return (0, _index6.addLeadingZeros)(dayOfYear, token.length);
      },
      // Day of week
      E: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        switch (token) {
          case "E":
          case "EE":
          case "EEE":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "EEEEE":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "EEEE":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Local day of week
      e: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "e":
            return String(localDayOfWeek);
          case "ee":
            return (0, _index6.addLeadingZeros)(localDayOfWeek, 2);
          case "eo":
            return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
          case "eee":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "eeeee":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "eeee":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone local day of week
      c: function(date, token, localize, options) {
        const dayOfWeek = date.getDay();
        const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "c":
            return String(localDayOfWeek);
          case "cc":
            return (0, _index6.addLeadingZeros)(localDayOfWeek, token.length);
          case "co":
            return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
          case "ccc":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "standalone"
            });
          case "ccccc":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "standalone"
            });
          case "cccc":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // ISO day of week
      i: function(date, token, localize) {
        const dayOfWeek = date.getDay();
        const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch (token) {
          case "i":
            return String(isoDayOfWeek);
          case "ii":
            return (0, _index6.addLeadingZeros)(isoDayOfWeek, token.length);
          case "io":
            return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
          case "iii":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "iiiii":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "iiiiii":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "iiii":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM or PM
      a: function(date, token, localize) {
        const hours = date.getHours();
        const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "aaa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "aaaaa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaa":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM, PM, midnight, noon
      b: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours === 12) {
          dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
          dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
          dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch (token) {
          case "b":
          case "bb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "bbb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "bbbbb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbb":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // in the morning, in the afternoon, in the evening, at night
      B: function(date, token, localize) {
        const hours = date.getHours();
        let dayPeriodEnumValue;
        if (hours >= 17) {
          dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
          dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
          dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
          dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch (token) {
          case "B":
          case "BB":
          case "BBB":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "BBBBB":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBB":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Hour [1-12]
      h: function(date, token, localize) {
        if (token === "ho") {
          let hours = date.getHours() % 12;
          if (hours === 0)
            hours = 12;
          return localize.ordinalNumber(hours, { unit: "hour" });
        }
        return _index7.lightFormatters.h(date, token);
      },
      // Hour [0-23]
      H: function(date, token, localize) {
        if (token === "Ho") {
          return localize.ordinalNumber(date.getHours(), { unit: "hour" });
        }
        return _index7.lightFormatters.H(date, token);
      },
      // Hour [0-11]
      K: function(date, token, localize) {
        const hours = date.getHours() % 12;
        if (token === "Ko") {
          return localize.ordinalNumber(hours, { unit: "hour" });
        }
        return (0, _index6.addLeadingZeros)(hours, token.length);
      },
      // Hour [1-24]
      k: function(date, token, localize) {
        let hours = date.getHours();
        if (hours === 0)
          hours = 24;
        if (token === "ko") {
          return localize.ordinalNumber(hours, { unit: "hour" });
        }
        return (0, _index6.addLeadingZeros)(hours, token.length);
      },
      // Minute
      m: function(date, token, localize) {
        if (token === "mo") {
          return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
        }
        return _index7.lightFormatters.m(date, token);
      },
      // Second
      s: function(date, token, localize) {
        if (token === "so") {
          return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
        }
        return _index7.lightFormatters.s(date, token);
      },
      // Fraction of second
      S: function(date, token) {
        return _index7.lightFormatters.S(date, token);
      },
      // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
      X: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        if (timezoneOffset === 0) {
          return "Z";
        }
        switch (token) {
          case "X":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "XXXX":
          case "XX":
            return formatTimezone(timezoneOffset);
          case "XXXXX":
          case "XXX":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
      x: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch (token) {
          case "x":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "xxxx":
          case "xx":
            return formatTimezone(timezoneOffset);
          case "xxxxx":
          case "xxx":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (GMT)
      O: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch (token) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "OOOO":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (specific non-location)
      z: function(date, token, _localize) {
        const timezoneOffset = date.getTimezoneOffset();
        switch (token) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "zzzz":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      // Seconds timestamp
      t: function(date, token, _localize) {
        const timestamp = Math.trunc(date.getTime() / 1e3);
        return (0, _index6.addLeadingZeros)(timestamp, token.length);
      },
      // Milliseconds timestamp
      T: function(date, token, _localize) {
        const timestamp = date.getTime();
        return (0, _index6.addLeadingZeros)(timestamp, token.length);
      }
    };
    function formatTimezoneShort(offset, delimiter = "") {
      const sign = offset > 0 ? "-" : "+";
      const absOffset = Math.abs(offset);
      const hours = Math.trunc(absOffset / 60);
      const minutes = absOffset % 60;
      if (minutes === 0) {
        return sign + String(hours);
      }
      return sign + String(hours) + delimiter + (0, _index6.addLeadingZeros)(minutes, 2);
    }
    function formatTimezoneWithOptionalMinutes(offset, delimiter) {
      if (offset % 60 === 0) {
        const sign = offset > 0 ? "-" : "+";
        return sign + (0, _index6.addLeadingZeros)(Math.abs(offset) / 60, 2);
      }
      return formatTimezone(offset, delimiter);
    }
    function formatTimezone(offset, delimiter = "") {
      const sign = offset > 0 ? "-" : "+";
      const absOffset = Math.abs(offset);
      const hours = (0, _index6.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
      const minutes = (0, _index6.addLeadingZeros)(absOffset % 60, 2);
      return sign + hours + delimiter + minutes;
    }
  }
});

// node_modules/date-fns/_lib/format/longFormatters.js
var require_longFormatters = __commonJS({
  "node_modules/date-fns/_lib/format/longFormatters.js"(exports) {
    "use strict";
    exports.longFormatters = void 0;
    var dateLongFormatter = (pattern, formatLong) => {
      switch (pattern) {
        case "P":
          return formatLong.date({ width: "short" });
        case "PP":
          return formatLong.date({ width: "medium" });
        case "PPP":
          return formatLong.date({ width: "long" });
        case "PPPP":
        default:
          return formatLong.date({ width: "full" });
      }
    };
    var timeLongFormatter = (pattern, formatLong) => {
      switch (pattern) {
        case "p":
          return formatLong.time({ width: "short" });
        case "pp":
          return formatLong.time({ width: "medium" });
        case "ppp":
          return formatLong.time({ width: "long" });
        case "pppp":
        default:
          return formatLong.time({ width: "full" });
      }
    };
    var dateTimeLongFormatter = (pattern, formatLong) => {
      const matchResult = pattern.match(/(P+)(p+)?/) || [];
      const datePattern = matchResult[1];
      const timePattern = matchResult[2];
      if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
      }
      let dateTimeFormat;
      switch (datePattern) {
        case "P":
          dateTimeFormat = formatLong.dateTime({ width: "short" });
          break;
        case "PP":
          dateTimeFormat = formatLong.dateTime({ width: "medium" });
          break;
        case "PPP":
          dateTimeFormat = formatLong.dateTime({ width: "long" });
          break;
        case "PPPP":
        default:
          dateTimeFormat = formatLong.dateTime({ width: "full" });
          break;
      }
      return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
    };
    var longFormatters = exports.longFormatters = {
      p: timeLongFormatter,
      P: dateTimeLongFormatter
    };
  }
});

// node_modules/date-fns/_lib/protectedTokens.js
var require_protectedTokens = __commonJS({
  "node_modules/date-fns/_lib/protectedTokens.js"(exports) {
    "use strict";
    exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
    exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
    exports.warnOrThrowProtectedError = warnOrThrowProtectedError;
    var dayOfYearTokenRE = /^D+$/;
    var weekYearTokenRE = /^Y+$/;
    var throwTokens = ["D", "DD", "YY", "YYYY"];
    function isProtectedDayOfYearToken(token) {
      return dayOfYearTokenRE.test(token);
    }
    function isProtectedWeekYearToken(token) {
      return weekYearTokenRE.test(token);
    }
    function warnOrThrowProtectedError(token, format, input) {
      const _message = message(token, format, input);
      console.warn(_message);
      if (throwTokens.includes(token))
        throw new RangeError(_message);
    }
    function message(token, format, input) {
      const subject = token[0] === "Y" ? "years" : "days of the month";
      return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
    }
  }
});

// node_modules/date-fns/format.js
var require_format = __commonJS({
  "node_modules/date-fns/format.js"(exports) {
    "use strict";
    exports.format = exports.formatDate = format;
    Object.defineProperty(exports, "formatters", {
      enumerable: true,
      get: function() {
        return _index3.formatters;
      }
    });
    Object.defineProperty(exports, "longFormatters", {
      enumerable: true,
      get: function() {
        return _index4.longFormatters;
      }
    });
    var _index = require_defaultLocale();
    var _index2 = require_defaultOptions();
    var _index3 = require_formatters();
    var _index4 = require_longFormatters();
    var _index5 = require_protectedTokens();
    var _index6 = require_isValid();
    var _index7 = require_toDate();
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'([^]*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    function format(date, formatStr, options) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const defaultOptions = (0, _index2.getDefaultOptions)();
      const locale = (options == null ? void 0 : options.locale) ?? defaultOptions.locale ?? _index.defaultLocale;
      const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions.firstWeekContainsDate ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_f = (_e = options == null ? void 0 : options.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_h = (_g = defaultOptions.locale) == null ? void 0 : _g.options) == null ? void 0 : _h.weekStartsOn) ?? 0;
      const originalDate = (0, _index7.toDate)(date);
      if (!(0, _index6.isValid)(originalDate)) {
        throw new RangeError("Invalid time value");
      }
      let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
        const firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
          const longFormatter = _index4.longFormatters[firstCharacter];
          return longFormatter(substring, locale.formatLong);
        }
        return substring;
      }).join("").match(formattingTokensRegExp).map((substring) => {
        if (substring === "''") {
          return { isToken: false, value: "'" };
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
          return { isToken: false, value: cleanEscapedString(substring) };
        }
        if (_index3.formatters[firstCharacter]) {
          return { isToken: true, value: substring };
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
          );
        }
        return { isToken: false, value: substring };
      });
      if (locale.localize.preprocessor) {
        parts = locale.localize.preprocessor(originalDate, parts);
      }
      const formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
      };
      return parts.map((part) => {
        if (!part.isToken)
          return part.value;
        const token = part.value;
        if (!(options == null ? void 0 : options.useAdditionalWeekYearTokens) && (0, _index5.isProtectedWeekYearToken)(token) || !(options == null ? void 0 : options.useAdditionalDayOfYearTokens) && (0, _index5.isProtectedDayOfYearToken)(token)) {
          (0, _index5.warnOrThrowProtectedError)(token, formatStr, String(date));
        }
        const formatter = _index3.formatters[token[0]];
        return formatter(originalDate, token, locale.localize, formatterOptions);
      }).join("");
    }
    function cleanEscapedString(input) {
      const matched = input.match(escapedStringRegExp);
      if (!matched) {
        return input;
      }
      return matched[1].replace(doubleQuoteRegExp, "'");
    }
  }
});

// node_modules/date-fns/formatDistance.js
var require_formatDistance2 = __commonJS({
  "node_modules/date-fns/formatDistance.js"(exports) {
    "use strict";
    exports.formatDistance = formatDistance;
    var _index = require_compareAsc();
    var _index2 = require_constants();
    var _index3 = require_differenceInMonths();
    var _index4 = require_differenceInSeconds();
    var _index5 = require_toDate();
    var _index6 = require_defaultLocale();
    var _index7 = require_defaultOptions();
    var _index8 = require_getTimezoneOffsetInMilliseconds();
    function formatDistance(date, baseDate, options) {
      const defaultOptions = (0, _index7.getDefaultOptions)();
      const locale = (options == null ? void 0 : options.locale) ?? defaultOptions.locale ?? _index6.defaultLocale;
      const minutesInAlmostTwoDays = 2520;
      const comparison = (0, _index.compareAsc)(date, baseDate);
      if (isNaN(comparison)) {
        throw new RangeError("Invalid time value");
      }
      const localizeOptions = Object.assign({}, options, {
        addSuffix: options == null ? void 0 : options.addSuffix,
        comparison
      });
      let dateLeft;
      let dateRight;
      if (comparison > 0) {
        dateLeft = (0, _index5.toDate)(baseDate);
        dateRight = (0, _index5.toDate)(date);
      } else {
        dateLeft = (0, _index5.toDate)(date);
        dateRight = (0, _index5.toDate)(baseDate);
      }
      const seconds = (0, _index4.differenceInSeconds)(dateRight, dateLeft);
      const offsetInSeconds = ((0, _index8.getTimezoneOffsetInMilliseconds)(dateRight) - (0, _index8.getTimezoneOffsetInMilliseconds)(dateLeft)) / 1e3;
      const minutes = Math.round((seconds - offsetInSeconds) / 60);
      let months;
      if (minutes < 2) {
        if (options == null ? void 0 : options.includeSeconds) {
          if (seconds < 5) {
            return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
          } else if (seconds < 10) {
            return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
          } else if (seconds < 20) {
            return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
          } else if (seconds < 40) {
            return locale.formatDistance("halfAMinute", 0, localizeOptions);
          } else if (seconds < 60) {
            return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
          } else {
            return locale.formatDistance("xMinutes", 1, localizeOptions);
          }
        } else {
          if (minutes === 0) {
            return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
          } else {
            return locale.formatDistance("xMinutes", minutes, localizeOptions);
          }
        }
      } else if (minutes < 45) {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      } else if (minutes < 90) {
        return locale.formatDistance("aboutXHours", 1, localizeOptions);
      } else if (minutes < _index2.minutesInDay) {
        const hours = Math.round(minutes / 60);
        return locale.formatDistance("aboutXHours", hours, localizeOptions);
      } else if (minutes < minutesInAlmostTwoDays) {
        return locale.formatDistance("xDays", 1, localizeOptions);
      } else if (minutes < _index2.minutesInMonth) {
        const days = Math.round(minutes / _index2.minutesInDay);
        return locale.formatDistance("xDays", days, localizeOptions);
      } else if (minutes < _index2.minutesInMonth * 2) {
        months = Math.round(minutes / _index2.minutesInMonth);
        return locale.formatDistance("aboutXMonths", months, localizeOptions);
      }
      months = (0, _index3.differenceInMonths)(dateRight, dateLeft);
      if (months < 12) {
        const nearestMonth = Math.round(minutes / _index2.minutesInMonth);
        return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
      } else {
        const monthsSinceStartOfYear = months % 12;
        const years = Math.trunc(months / 12);
        if (monthsSinceStartOfYear < 3) {
          return locale.formatDistance("aboutXYears", years, localizeOptions);
        } else if (monthsSinceStartOfYear < 9) {
          return locale.formatDistance("overXYears", years, localizeOptions);
        } else {
          return locale.formatDistance("almostXYears", years + 1, localizeOptions);
        }
      }
    }
  }
});

// node_modules/date-fns/formatDistanceStrict.js
var require_formatDistanceStrict = __commonJS({
  "node_modules/date-fns/formatDistanceStrict.js"(exports) {
    "use strict";
    exports.formatDistanceStrict = formatDistanceStrict;
    var _index = require_defaultLocale();
    var _index2 = require_defaultOptions();
    var _index3 = require_getRoundingMethod();
    var _index4 = require_getTimezoneOffsetInMilliseconds();
    var _index5 = require_compareAsc();
    var _index6 = require_constants();
    var _index7 = require_toDate();
    function formatDistanceStrict(date, baseDate, options) {
      const defaultOptions = (0, _index2.getDefaultOptions)();
      const locale = (options == null ? void 0 : options.locale) ?? defaultOptions.locale ?? _index.defaultLocale;
      const comparison = (0, _index5.compareAsc)(date, baseDate);
      if (isNaN(comparison)) {
        throw new RangeError("Invalid time value");
      }
      const localizeOptions = Object.assign({}, options, {
        addSuffix: options == null ? void 0 : options.addSuffix,
        comparison
      });
      let dateLeft;
      let dateRight;
      if (comparison > 0) {
        dateLeft = (0, _index7.toDate)(baseDate);
        dateRight = (0, _index7.toDate)(date);
      } else {
        dateLeft = (0, _index7.toDate)(date);
        dateRight = (0, _index7.toDate)(baseDate);
      }
      const roundingMethod = (0, _index3.getRoundingMethod)(
        (options == null ? void 0 : options.roundingMethod) ?? "round"
      );
      const milliseconds = dateRight.getTime() - dateLeft.getTime();
      const minutes = milliseconds / _index6.millisecondsInMinute;
      const timezoneOffset = (0, _index4.getTimezoneOffsetInMilliseconds)(dateRight) - (0, _index4.getTimezoneOffsetInMilliseconds)(dateLeft);
      const dstNormalizedMinutes = (milliseconds - timezoneOffset) / _index6.millisecondsInMinute;
      const defaultUnit = options == null ? void 0 : options.unit;
      let unit;
      if (!defaultUnit) {
        if (minutes < 1) {
          unit = "second";
        } else if (minutes < 60) {
          unit = "minute";
        } else if (minutes < _index6.minutesInDay) {
          unit = "hour";
        } else if (dstNormalizedMinutes < _index6.minutesInMonth) {
          unit = "day";
        } else if (dstNormalizedMinutes < _index6.minutesInYear) {
          unit = "month";
        } else {
          unit = "year";
        }
      } else {
        unit = defaultUnit;
      }
      if (unit === "second") {
        const seconds = roundingMethod(milliseconds / 1e3);
        return locale.formatDistance("xSeconds", seconds, localizeOptions);
      } else if (unit === "minute") {
        const roundedMinutes = roundingMethod(minutes);
        return locale.formatDistance("xMinutes", roundedMinutes, localizeOptions);
      } else if (unit === "hour") {
        const hours = roundingMethod(minutes / 60);
        return locale.formatDistance("xHours", hours, localizeOptions);
      } else if (unit === "day") {
        const days = roundingMethod(dstNormalizedMinutes / _index6.minutesInDay);
        return locale.formatDistance("xDays", days, localizeOptions);
      } else if (unit === "month") {
        const months = roundingMethod(
          dstNormalizedMinutes / _index6.minutesInMonth
        );
        return months === 12 && defaultUnit !== "month" ? locale.formatDistance("xYears", 1, localizeOptions) : locale.formatDistance("xMonths", months, localizeOptions);
      } else {
        const years = roundingMethod(dstNormalizedMinutes / _index6.minutesInYear);
        return locale.formatDistance("xYears", years, localizeOptions);
      }
    }
  }
});

// node_modules/date-fns/formatDistanceToNow.js
var require_formatDistanceToNow = __commonJS({
  "node_modules/date-fns/formatDistanceToNow.js"(exports) {
    "use strict";
    exports.formatDistanceToNow = formatDistanceToNow;
    var _index = require_formatDistance2();
    function formatDistanceToNow(date, options) {
      return (0, _index.formatDistance)(date, Date.now(), options);
    }
  }
});

// node_modules/date-fns/formatDistanceToNowStrict.js
var require_formatDistanceToNowStrict = __commonJS({
  "node_modules/date-fns/formatDistanceToNowStrict.js"(exports) {
    "use strict";
    exports.formatDistanceToNowStrict = formatDistanceToNowStrict;
    var _index = require_formatDistanceStrict();
    function formatDistanceToNowStrict(date, options) {
      return (0, _index.formatDistanceStrict)(date, Date.now(), options);
    }
  }
});

// node_modules/date-fns/formatDuration.js
var require_formatDuration = __commonJS({
  "node_modules/date-fns/formatDuration.js"(exports) {
    "use strict";
    exports.formatDuration = formatDuration;
    var _index = require_defaultLocale();
    var _index2 = require_defaultOptions();
    var defaultFormat = [
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds"
    ];
    function formatDuration(duration, options) {
      const defaultOptions = (0, _index2.getDefaultOptions)();
      const locale = (options == null ? void 0 : options.locale) ?? defaultOptions.locale ?? _index.defaultLocale;
      const format = (options == null ? void 0 : options.format) ?? defaultFormat;
      const zero = (options == null ? void 0 : options.zero) ?? false;
      const delimiter = (options == null ? void 0 : options.delimiter) ?? " ";
      if (!locale.formatDistance) {
        return "";
      }
      const result = format.reduce((acc, unit) => {
        const token = `x${unit.replace(/(^.)/, (m) => m.toUpperCase())}`;
        const value = duration[unit];
        if (value !== void 0 && (zero || duration[unit])) {
          return acc.concat(locale.formatDistance(token, value));
        }
        return acc;
      }, []).join(delimiter);
      return result;
    }
  }
});

// node_modules/date-fns/formatISO.js
var require_formatISO = __commonJS({
  "node_modules/date-fns/formatISO.js"(exports) {
    "use strict";
    exports.formatISO = formatISO;
    var _index = require_toDate();
    var _index2 = require_addLeadingZeros();
    function formatISO(date, options) {
      const _date = (0, _index.toDate)(date);
      if (isNaN(_date.getTime())) {
        throw new RangeError("Invalid time value");
      }
      const format = (options == null ? void 0 : options.format) ?? "extended";
      const representation = (options == null ? void 0 : options.representation) ?? "complete";
      let result = "";
      let tzOffset = "";
      const dateDelimiter = format === "extended" ? "-" : "";
      const timeDelimiter = format === "extended" ? ":" : "";
      if (representation !== "time") {
        const day = (0, _index2.addLeadingZeros)(_date.getDate(), 2);
        const month = (0, _index2.addLeadingZeros)(_date.getMonth() + 1, 2);
        const year = (0, _index2.addLeadingZeros)(_date.getFullYear(), 4);
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
      }
      if (representation !== "date") {
        const offset = _date.getTimezoneOffset();
        if (offset !== 0) {
          const absoluteOffset = Math.abs(offset);
          const hourOffset = (0, _index2.addLeadingZeros)(
            Math.trunc(absoluteOffset / 60),
            2
          );
          const minuteOffset = (0, _index2.addLeadingZeros)(absoluteOffset % 60, 2);
          const sign = offset < 0 ? "+" : "-";
          tzOffset = `${sign}${hourOffset}:${minuteOffset}`;
        } else {
          tzOffset = "Z";
        }
        const hour = (0, _index2.addLeadingZeros)(_date.getHours(), 2);
        const minute = (0, _index2.addLeadingZeros)(_date.getMinutes(), 2);
        const second = (0, _index2.addLeadingZeros)(_date.getSeconds(), 2);
        const separator = result === "" ? "" : "T";
        const time = [hour, minute, second].join(timeDelimiter);
        result = `${result}${separator}${time}${tzOffset}`;
      }
      return result;
    }
  }
});

// node_modules/date-fns/formatISO9075.js
var require_formatISO9075 = __commonJS({
  "node_modules/date-fns/formatISO9075.js"(exports) {
    "use strict";
    exports.formatISO9075 = formatISO9075;
    var _index = require_isValid();
    var _index2 = require_toDate();
    var _index3 = require_addLeadingZeros();
    function formatISO9075(date, options) {
      const _date = (0, _index2.toDate)(date);
      if (!(0, _index.isValid)(_date)) {
        throw new RangeError("Invalid time value");
      }
      const format = (options == null ? void 0 : options.format) ?? "extended";
      const representation = (options == null ? void 0 : options.representation) ?? "complete";
      let result = "";
      const dateDelimiter = format === "extended" ? "-" : "";
      const timeDelimiter = format === "extended" ? ":" : "";
      if (representation !== "time") {
        const day = (0, _index3.addLeadingZeros)(_date.getDate(), 2);
        const month = (0, _index3.addLeadingZeros)(_date.getMonth() + 1, 2);
        const year = (0, _index3.addLeadingZeros)(_date.getFullYear(), 4);
        result = `${year}${dateDelimiter}${month}${dateDelimiter}${day}`;
      }
      if (representation !== "date") {
        const hour = (0, _index3.addLeadingZeros)(_date.getHours(), 2);
        const minute = (0, _index3.addLeadingZeros)(_date.getMinutes(), 2);
        const second = (0, _index3.addLeadingZeros)(_date.getSeconds(), 2);
        const separator = result === "" ? "" : " ";
        result = `${result}${separator}${hour}${timeDelimiter}${minute}${timeDelimiter}${second}`;
      }
      return result;
    }
  }
});

// node_modules/date-fns/formatISODuration.js
var require_formatISODuration = __commonJS({
  "node_modules/date-fns/formatISODuration.js"(exports) {
    "use strict";
    exports.formatISODuration = formatISODuration;
    function formatISODuration(duration) {
      const {
        years = 0,
        months = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
      } = duration;
      return `P${years}Y${months}M${days}DT${hours}H${minutes}M${seconds}S`;
    }
  }
});

// node_modules/date-fns/formatRFC3339.js
var require_formatRFC3339 = __commonJS({
  "node_modules/date-fns/formatRFC3339.js"(exports) {
    "use strict";
    exports.formatRFC3339 = formatRFC3339;
    var _index = require_isValid();
    var _index2 = require_toDate();
    var _index3 = require_addLeadingZeros();
    function formatRFC3339(date, options) {
      const _date = (0, _index2.toDate)(date);
      if (!(0, _index.isValid)(_date)) {
        throw new RangeError("Invalid time value");
      }
      const fractionDigits = (options == null ? void 0 : options.fractionDigits) ?? 0;
      const day = (0, _index3.addLeadingZeros)(_date.getDate(), 2);
      const month = (0, _index3.addLeadingZeros)(_date.getMonth() + 1, 2);
      const year = _date.getFullYear();
      const hour = (0, _index3.addLeadingZeros)(_date.getHours(), 2);
      const minute = (0, _index3.addLeadingZeros)(_date.getMinutes(), 2);
      const second = (0, _index3.addLeadingZeros)(_date.getSeconds(), 2);
      let fractionalSecond = "";
      if (fractionDigits > 0) {
        const milliseconds = _date.getMilliseconds();
        const fractionalSeconds = Math.trunc(
          milliseconds * Math.pow(10, fractionDigits - 3)
        );
        fractionalSecond = "." + (0, _index3.addLeadingZeros)(fractionalSeconds, fractionDigits);
      }
      let offset = "";
      const tzOffset = _date.getTimezoneOffset();
      if (tzOffset !== 0) {
        const absoluteOffset = Math.abs(tzOffset);
        const hourOffset = (0, _index3.addLeadingZeros)(
          Math.trunc(absoluteOffset / 60),
          2
        );
        const minuteOffset = (0, _index3.addLeadingZeros)(absoluteOffset % 60, 2);
        const sign = tzOffset < 0 ? "+" : "-";
        offset = `${sign}${hourOffset}:${minuteOffset}`;
      } else {
        offset = "Z";
      }
      return `${year}-${month}-${day}T${hour}:${minute}:${second}${fractionalSecond}${offset}`;
    }
  }
});

// node_modules/date-fns/formatRFC7231.js
var require_formatRFC7231 = __commonJS({
  "node_modules/date-fns/formatRFC7231.js"(exports) {
    "use strict";
    exports.formatRFC7231 = formatRFC7231;
    var _index = require_isValid();
    var _index2 = require_toDate();
    var _index3 = require_addLeadingZeros();
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function formatRFC7231(date) {
      const _date = (0, _index2.toDate)(date);
      if (!(0, _index.isValid)(_date)) {
        throw new RangeError("Invalid time value");
      }
      const dayName = days[_date.getUTCDay()];
      const dayOfMonth = (0, _index3.addLeadingZeros)(_date.getUTCDate(), 2);
      const monthName = months[_date.getUTCMonth()];
      const year = _date.getUTCFullYear();
      const hour = (0, _index3.addLeadingZeros)(_date.getUTCHours(), 2);
      const minute = (0, _index3.addLeadingZeros)(_date.getUTCMinutes(), 2);
      const second = (0, _index3.addLeadingZeros)(_date.getUTCSeconds(), 2);
      return `${dayName}, ${dayOfMonth} ${monthName} ${year} ${hour}:${minute}:${second} GMT`;
    }
  }
});

// node_modules/date-fns/formatRelative.js
var require_formatRelative2 = __commonJS({
  "node_modules/date-fns/formatRelative.js"(exports) {
    "use strict";
    exports.formatRelative = formatRelative;
    var _index = require_differenceInCalendarDays();
    var _index2 = require_format();
    var _index3 = require_toDate();
    var _index4 = require_defaultLocale();
    var _index5 = require_defaultOptions();
    function formatRelative(date, baseDate, options) {
      var _a, _b, _c, _d;
      const _date = (0, _index3.toDate)(date);
      const _baseDate = (0, _index3.toDate)(baseDate);
      const defaultOptions = (0, _index5.getDefaultOptions)();
      const locale = (options == null ? void 0 : options.locale) ?? defaultOptions.locale ?? _index4.defaultLocale;
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
      const diff = (0, _index.differenceInCalendarDays)(_date, _baseDate);
      if (isNaN(diff)) {
        throw new RangeError("Invalid time value");
      }
      let token;
      if (diff < -6) {
        token = "other";
      } else if (diff < -1) {
        token = "lastWeek";
      } else if (diff < 0) {
        token = "yesterday";
      } else if (diff < 1) {
        token = "today";
      } else if (diff < 2) {
        token = "tomorrow";
      } else if (diff < 7) {
        token = "nextWeek";
      } else {
        token = "other";
      }
      const formatStr = locale.formatRelative(token, _date, _baseDate, {
        locale,
        weekStartsOn
      });
      return (0, _index2.format)(_date, formatStr, { locale, weekStartsOn });
    }
  }
});

// node_modules/date-fns/fromUnixTime.js
var require_fromUnixTime = __commonJS({
  "node_modules/date-fns/fromUnixTime.js"(exports) {
    "use strict";
    exports.fromUnixTime = fromUnixTime;
    var _index = require_toDate();
    function fromUnixTime(unixTime) {
      return (0, _index.toDate)(unixTime * 1e3);
    }
  }
});

// node_modules/date-fns/getDate.js
var require_getDate = __commonJS({
  "node_modules/date-fns/getDate.js"(exports) {
    "use strict";
    exports.getDate = getDate;
    var _index = require_toDate();
    function getDate(date) {
      const _date = (0, _index.toDate)(date);
      const dayOfMonth = _date.getDate();
      return dayOfMonth;
    }
  }
});

// node_modules/date-fns/getDay.js
var require_getDay = __commonJS({
  "node_modules/date-fns/getDay.js"(exports) {
    "use strict";
    exports.getDay = getDay;
    var _index = require_toDate();
    function getDay(date) {
      const _date = (0, _index.toDate)(date);
      const day = _date.getDay();
      return day;
    }
  }
});

// node_modules/date-fns/getDaysInMonth.js
var require_getDaysInMonth = __commonJS({
  "node_modules/date-fns/getDaysInMonth.js"(exports) {
    "use strict";
    exports.getDaysInMonth = getDaysInMonth;
    var _index = require_toDate();
    var _index2 = require_constructFrom();
    function getDaysInMonth(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      const monthIndex = _date.getMonth();
      const lastDayOfMonth = (0, _index2.constructFrom)(date, 0);
      lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
      lastDayOfMonth.setHours(0, 0, 0, 0);
      return lastDayOfMonth.getDate();
    }
  }
});

// node_modules/date-fns/isLeapYear.js
var require_isLeapYear = __commonJS({
  "node_modules/date-fns/isLeapYear.js"(exports) {
    "use strict";
    exports.isLeapYear = isLeapYear;
    var _index = require_toDate();
    function isLeapYear(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
    }
  }
});

// node_modules/date-fns/getDaysInYear.js
var require_getDaysInYear = __commonJS({
  "node_modules/date-fns/getDaysInYear.js"(exports) {
    "use strict";
    exports.getDaysInYear = getDaysInYear;
    var _index = require_isLeapYear();
    var _index2 = require_toDate();
    function getDaysInYear(date) {
      const _date = (0, _index2.toDate)(date);
      if (String(new Date(_date)) === "Invalid Date") {
        return NaN;
      }
      return (0, _index.isLeapYear)(_date) ? 366 : 365;
    }
  }
});

// node_modules/date-fns/getDecade.js
var require_getDecade = __commonJS({
  "node_modules/date-fns/getDecade.js"(exports) {
    "use strict";
    exports.getDecade = getDecade;
    var _index = require_toDate();
    function getDecade(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      const decade = Math.floor(year / 10) * 10;
      return decade;
    }
  }
});

// node_modules/date-fns/getDefaultOptions.js
var require_getDefaultOptions = __commonJS({
  "node_modules/date-fns/getDefaultOptions.js"(exports) {
    "use strict";
    exports.getDefaultOptions = getDefaultOptions;
    var _index = require_defaultOptions();
    function getDefaultOptions() {
      return Object.assign({}, (0, _index.getDefaultOptions)());
    }
  }
});

// node_modules/date-fns/getHours.js
var require_getHours = __commonJS({
  "node_modules/date-fns/getHours.js"(exports) {
    "use strict";
    exports.getHours = getHours;
    var _index = require_toDate();
    function getHours(date) {
      const _date = (0, _index.toDate)(date);
      const hours = _date.getHours();
      return hours;
    }
  }
});

// node_modules/date-fns/getISODay.js
var require_getISODay = __commonJS({
  "node_modules/date-fns/getISODay.js"(exports) {
    "use strict";
    exports.getISODay = getISODay;
    var _index = require_toDate();
    function getISODay(date) {
      const _date = (0, _index.toDate)(date);
      let day = _date.getDay();
      if (day === 0) {
        day = 7;
      }
      return day;
    }
  }
});

// node_modules/date-fns/getISOWeeksInYear.js
var require_getISOWeeksInYear = __commonJS({
  "node_modules/date-fns/getISOWeeksInYear.js"(exports) {
    "use strict";
    exports.getISOWeeksInYear = getISOWeeksInYear;
    var _index = require_addWeeks();
    var _index2 = require_constants();
    var _index3 = require_startOfISOWeekYear();
    function getISOWeeksInYear(date) {
      const thisYear = (0, _index3.startOfISOWeekYear)(date);
      const nextYear = (0, _index3.startOfISOWeekYear)(
        (0, _index.addWeeks)(thisYear, 60)
      );
      const diff = +nextYear - +thisYear;
      return Math.round(diff / _index2.millisecondsInWeek);
    }
  }
});

// node_modules/date-fns/getMilliseconds.js
var require_getMilliseconds = __commonJS({
  "node_modules/date-fns/getMilliseconds.js"(exports) {
    "use strict";
    exports.getMilliseconds = getMilliseconds;
    var _index = require_toDate();
    function getMilliseconds(date) {
      const _date = (0, _index.toDate)(date);
      const milliseconds = _date.getMilliseconds();
      return milliseconds;
    }
  }
});

// node_modules/date-fns/getMinutes.js
var require_getMinutes = __commonJS({
  "node_modules/date-fns/getMinutes.js"(exports) {
    "use strict";
    exports.getMinutes = getMinutes;
    var _index = require_toDate();
    function getMinutes(date) {
      const _date = (0, _index.toDate)(date);
      const minutes = _date.getMinutes();
      return minutes;
    }
  }
});

// node_modules/date-fns/getMonth.js
var require_getMonth = __commonJS({
  "node_modules/date-fns/getMonth.js"(exports) {
    "use strict";
    exports.getMonth = getMonth;
    var _index = require_toDate();
    function getMonth(date) {
      const _date = (0, _index.toDate)(date);
      const month = _date.getMonth();
      return month;
    }
  }
});

// node_modules/date-fns/getOverlappingDaysInIntervals.js
var require_getOverlappingDaysInIntervals = __commonJS({
  "node_modules/date-fns/getOverlappingDaysInIntervals.js"(exports) {
    "use strict";
    exports.getOverlappingDaysInIntervals = getOverlappingDaysInIntervals;
    var _index = require_getTimezoneOffsetInMilliseconds();
    var _index2 = require_constants();
    var _index3 = require_toDate();
    function getOverlappingDaysInIntervals(intervalLeft, intervalRight) {
      const [leftStart, leftEnd] = [
        +(0, _index3.toDate)(intervalLeft.start),
        +(0, _index3.toDate)(intervalLeft.end)
      ].sort((a, b) => a - b);
      const [rightStart, rightEnd] = [
        +(0, _index3.toDate)(intervalRight.start),
        +(0, _index3.toDate)(intervalRight.end)
      ].sort((a, b) => a - b);
      const isOverlapping = leftStart < rightEnd && rightStart < leftEnd;
      if (!isOverlapping)
        return 0;
      const overlapLeft = rightStart < leftStart ? leftStart : rightStart;
      const left = overlapLeft - (0, _index.getTimezoneOffsetInMilliseconds)(overlapLeft);
      const overlapRight = rightEnd > leftEnd ? leftEnd : rightEnd;
      const right = overlapRight - (0, _index.getTimezoneOffsetInMilliseconds)(overlapRight);
      return Math.ceil((right - left) / _index2.millisecondsInDay);
    }
  }
});

// node_modules/date-fns/getSeconds.js
var require_getSeconds = __commonJS({
  "node_modules/date-fns/getSeconds.js"(exports) {
    "use strict";
    exports.getSeconds = getSeconds;
    var _index = require_toDate();
    function getSeconds(date) {
      const _date = (0, _index.toDate)(date);
      const seconds = _date.getSeconds();
      return seconds;
    }
  }
});

// node_modules/date-fns/getTime.js
var require_getTime = __commonJS({
  "node_modules/date-fns/getTime.js"(exports) {
    "use strict";
    exports.getTime = getTime;
    var _index = require_toDate();
    function getTime(date) {
      const _date = (0, _index.toDate)(date);
      const timestamp = _date.getTime();
      return timestamp;
    }
  }
});

// node_modules/date-fns/getUnixTime.js
var require_getUnixTime = __commonJS({
  "node_modules/date-fns/getUnixTime.js"(exports) {
    "use strict";
    exports.getUnixTime = getUnixTime;
    var _index = require_toDate();
    function getUnixTime(date) {
      return Math.trunc(+(0, _index.toDate)(date) / 1e3);
    }
  }
});

// node_modules/date-fns/getWeekOfMonth.js
var require_getWeekOfMonth = __commonJS({
  "node_modules/date-fns/getWeekOfMonth.js"(exports) {
    "use strict";
    exports.getWeekOfMonth = getWeekOfMonth;
    var _index = require_getDate();
    var _index2 = require_getDay();
    var _index3 = require_startOfMonth();
    var _index4 = require_defaultOptions();
    function getWeekOfMonth(date, options) {
      var _a, _b, _c, _d;
      const defaultOptions = (0, _index4.getDefaultOptions)();
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
      const currentDayOfMonth = (0, _index.getDate)(date);
      if (isNaN(currentDayOfMonth))
        return NaN;
      const startWeekDay = (0, _index2.getDay)((0, _index3.startOfMonth)(date));
      let lastDayOfFirstWeek = weekStartsOn - startWeekDay;
      if (lastDayOfFirstWeek <= 0)
        lastDayOfFirstWeek += 7;
      const remainingDaysAfterFirstWeek = currentDayOfMonth - lastDayOfFirstWeek;
      return Math.ceil(remainingDaysAfterFirstWeek / 7) + 1;
    }
  }
});

// node_modules/date-fns/lastDayOfMonth.js
var require_lastDayOfMonth = __commonJS({
  "node_modules/date-fns/lastDayOfMonth.js"(exports) {
    "use strict";
    exports.lastDayOfMonth = lastDayOfMonth;
    var _index = require_toDate();
    function lastDayOfMonth(date) {
      const _date = (0, _index.toDate)(date);
      const month = _date.getMonth();
      _date.setFullYear(_date.getFullYear(), month + 1, 0);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/getWeeksInMonth.js
var require_getWeeksInMonth = __commonJS({
  "node_modules/date-fns/getWeeksInMonth.js"(exports) {
    "use strict";
    exports.getWeeksInMonth = getWeeksInMonth;
    var _index = require_differenceInCalendarWeeks();
    var _index2 = require_lastDayOfMonth();
    var _index3 = require_startOfMonth();
    function getWeeksInMonth(date, options) {
      return (0, _index.differenceInCalendarWeeks)(
        (0, _index2.lastDayOfMonth)(date),
        (0, _index3.startOfMonth)(date),
        options
      ) + 1;
    }
  }
});

// node_modules/date-fns/getYear.js
var require_getYear = __commonJS({
  "node_modules/date-fns/getYear.js"(exports) {
    "use strict";
    exports.getYear = getYear;
    var _index = require_toDate();
    function getYear(date) {
      return (0, _index.toDate)(date).getFullYear();
    }
  }
});

// node_modules/date-fns/hoursToMilliseconds.js
var require_hoursToMilliseconds = __commonJS({
  "node_modules/date-fns/hoursToMilliseconds.js"(exports) {
    "use strict";
    exports.hoursToMilliseconds = hoursToMilliseconds;
    var _index = require_constants();
    function hoursToMilliseconds(hours) {
      return Math.trunc(hours * _index.millisecondsInHour);
    }
  }
});

// node_modules/date-fns/hoursToMinutes.js
var require_hoursToMinutes = __commonJS({
  "node_modules/date-fns/hoursToMinutes.js"(exports) {
    "use strict";
    exports.hoursToMinutes = hoursToMinutes;
    var _index = require_constants();
    function hoursToMinutes(hours) {
      return Math.trunc(hours * _index.minutesInHour);
    }
  }
});

// node_modules/date-fns/hoursToSeconds.js
var require_hoursToSeconds = __commonJS({
  "node_modules/date-fns/hoursToSeconds.js"(exports) {
    "use strict";
    exports.hoursToSeconds = hoursToSeconds;
    var _index = require_constants();
    function hoursToSeconds(hours) {
      return Math.trunc(hours * _index.secondsInHour);
    }
  }
});

// node_modules/date-fns/interval.js
var require_interval = __commonJS({
  "node_modules/date-fns/interval.js"(exports) {
    "use strict";
    exports.interval = interval;
    var _index = require_toDate();
    function interval(start, end, options) {
      const _start = (0, _index.toDate)(start);
      if (isNaN(+_start))
        throw new TypeError("Start date is invalid");
      const _end = (0, _index.toDate)(end);
      if (isNaN(+_end))
        throw new TypeError("End date is invalid");
      if ((options == null ? void 0 : options.assertPositive) && +_start > +_end)
        throw new TypeError("End date must be after start date");
      return { start: _start, end: _end };
    }
  }
});

// node_modules/date-fns/intervalToDuration.js
var require_intervalToDuration = __commonJS({
  "node_modules/date-fns/intervalToDuration.js"(exports) {
    "use strict";
    exports.intervalToDuration = intervalToDuration;
    var _index = require_add();
    var _index2 = require_differenceInDays();
    var _index3 = require_differenceInHours();
    var _index4 = require_differenceInMinutes();
    var _index5 = require_differenceInMonths();
    var _index6 = require_differenceInSeconds();
    var _index7 = require_differenceInYears();
    var _index8 = require_toDate();
    function intervalToDuration(interval) {
      const start = (0, _index8.toDate)(interval.start);
      const end = (0, _index8.toDate)(interval.end);
      const duration = {};
      const years = (0, _index7.differenceInYears)(end, start);
      if (years)
        duration.years = years;
      const remainingMonths = (0, _index.add)(start, { years: duration.years });
      const months = (0, _index5.differenceInMonths)(end, remainingMonths);
      if (months)
        duration.months = months;
      const remainingDays = (0, _index.add)(remainingMonths, {
        months: duration.months
      });
      const days = (0, _index2.differenceInDays)(end, remainingDays);
      if (days)
        duration.days = days;
      const remainingHours = (0, _index.add)(remainingDays, {
        days: duration.days
      });
      const hours = (0, _index3.differenceInHours)(end, remainingHours);
      if (hours)
        duration.hours = hours;
      const remainingMinutes = (0, _index.add)(remainingHours, {
        hours: duration.hours
      });
      const minutes = (0, _index4.differenceInMinutes)(end, remainingMinutes);
      if (minutes)
        duration.minutes = minutes;
      const remainingSeconds = (0, _index.add)(remainingMinutes, {
        minutes: duration.minutes
      });
      const seconds = (0, _index6.differenceInSeconds)(end, remainingSeconds);
      if (seconds)
        duration.seconds = seconds;
      return duration;
    }
  }
});

// node_modules/date-fns/intlFormat.js
var require_intlFormat = __commonJS({
  "node_modules/date-fns/intlFormat.js"(exports) {
    "use strict";
    exports.intlFormat = intlFormat;
    var _index = require_toDate();
    function intlFormat(date, formatOrLocale, localeOptions) {
      let formatOptions;
      if (isFormatOptions(formatOrLocale)) {
        formatOptions = formatOrLocale;
      } else {
        localeOptions = formatOrLocale;
      }
      return new Intl.DateTimeFormat(localeOptions == null ? void 0 : localeOptions.locale, formatOptions).format(
        (0, _index.toDate)(date)
      );
    }
    function isFormatOptions(opts) {
      return opts !== void 0 && !("locale" in opts);
    }
  }
});

// node_modules/date-fns/intlFormatDistance.js
var require_intlFormatDistance = __commonJS({
  "node_modules/date-fns/intlFormatDistance.js"(exports) {
    "use strict";
    exports.intlFormatDistance = intlFormatDistance;
    var _index = require_constants();
    var _index2 = require_differenceInCalendarDays();
    var _index3 = require_differenceInCalendarMonths();
    var _index4 = require_differenceInCalendarQuarters();
    var _index5 = require_differenceInCalendarWeeks();
    var _index6 = require_differenceInCalendarYears();
    var _index7 = require_differenceInHours();
    var _index8 = require_differenceInMinutes();
    var _index9 = require_differenceInSeconds();
    var _index10 = require_toDate();
    function intlFormatDistance(date, baseDate, options) {
      let value = 0;
      let unit;
      const dateLeft = (0, _index10.toDate)(date);
      const dateRight = (0, _index10.toDate)(baseDate);
      if (!(options == null ? void 0 : options.unit)) {
        const diffInSeconds = (0, _index9.differenceInSeconds)(dateLeft, dateRight);
        if (Math.abs(diffInSeconds) < _index.secondsInMinute) {
          value = (0, _index9.differenceInSeconds)(dateLeft, dateRight);
          unit = "second";
        } else if (Math.abs(diffInSeconds) < _index.secondsInHour) {
          value = (0, _index8.differenceInMinutes)(dateLeft, dateRight);
          unit = "minute";
        } else if (Math.abs(diffInSeconds) < _index.secondsInDay && Math.abs((0, _index2.differenceInCalendarDays)(dateLeft, dateRight)) < 1) {
          value = (0, _index7.differenceInHours)(dateLeft, dateRight);
          unit = "hour";
        } else if (Math.abs(diffInSeconds) < _index.secondsInWeek && (value = (0, _index2.differenceInCalendarDays)(dateLeft, dateRight)) && Math.abs(value) < 7) {
          unit = "day";
        } else if (Math.abs(diffInSeconds) < _index.secondsInMonth) {
          value = (0, _index5.differenceInCalendarWeeks)(dateLeft, dateRight);
          unit = "week";
        } else if (Math.abs(diffInSeconds) < _index.secondsInQuarter) {
          value = (0, _index3.differenceInCalendarMonths)(dateLeft, dateRight);
          unit = "month";
        } else if (Math.abs(diffInSeconds) < _index.secondsInYear) {
          if ((0, _index4.differenceInCalendarQuarters)(dateLeft, dateRight) < 4) {
            value = (0, _index4.differenceInCalendarQuarters)(dateLeft, dateRight);
            unit = "quarter";
          } else {
            value = (0, _index6.differenceInCalendarYears)(dateLeft, dateRight);
            unit = "year";
          }
        } else {
          value = (0, _index6.differenceInCalendarYears)(dateLeft, dateRight);
          unit = "year";
        }
      } else {
        unit = options == null ? void 0 : options.unit;
        if (unit === "second") {
          value = (0, _index9.differenceInSeconds)(dateLeft, dateRight);
        } else if (unit === "minute") {
          value = (0, _index8.differenceInMinutes)(dateLeft, dateRight);
        } else if (unit === "hour") {
          value = (0, _index7.differenceInHours)(dateLeft, dateRight);
        } else if (unit === "day") {
          value = (0, _index2.differenceInCalendarDays)(dateLeft, dateRight);
        } else if (unit === "week") {
          value = (0, _index5.differenceInCalendarWeeks)(dateLeft, dateRight);
        } else if (unit === "month") {
          value = (0, _index3.differenceInCalendarMonths)(dateLeft, dateRight);
        } else if (unit === "quarter") {
          value = (0, _index4.differenceInCalendarQuarters)(dateLeft, dateRight);
        } else if (unit === "year") {
          value = (0, _index6.differenceInCalendarYears)(dateLeft, dateRight);
        }
      }
      const rtf = new Intl.RelativeTimeFormat(options == null ? void 0 : options.locale, {
        localeMatcher: options == null ? void 0 : options.localeMatcher,
        numeric: (options == null ? void 0 : options.numeric) || "auto",
        style: options == null ? void 0 : options.style
      });
      return rtf.format(value, unit);
    }
  }
});

// node_modules/date-fns/isAfter.js
var require_isAfter = __commonJS({
  "node_modules/date-fns/isAfter.js"(exports) {
    "use strict";
    exports.isAfter = isAfter;
    var _index = require_toDate();
    function isAfter(date, dateToCompare) {
      const _date = (0, _index.toDate)(date);
      const _dateToCompare = (0, _index.toDate)(dateToCompare);
      return _date.getTime() > _dateToCompare.getTime();
    }
  }
});

// node_modules/date-fns/isBefore.js
var require_isBefore = __commonJS({
  "node_modules/date-fns/isBefore.js"(exports) {
    "use strict";
    exports.isBefore = isBefore;
    var _index = require_toDate();
    function isBefore(date, dateToCompare) {
      const _date = (0, _index.toDate)(date);
      const _dateToCompare = (0, _index.toDate)(dateToCompare);
      return +_date < +_dateToCompare;
    }
  }
});

// node_modules/date-fns/isEqual.js
var require_isEqual = __commonJS({
  "node_modules/date-fns/isEqual.js"(exports) {
    "use strict";
    exports.isEqual = isEqual;
    var _index = require_toDate();
    function isEqual(leftDate, rightDate) {
      const _dateLeft = (0, _index.toDate)(leftDate);
      const _dateRight = (0, _index.toDate)(rightDate);
      return +_dateLeft === +_dateRight;
    }
  }
});

// node_modules/date-fns/isExists.js
var require_isExists = __commonJS({
  "node_modules/date-fns/isExists.js"(exports) {
    "use strict";
    exports.isExists = isExists;
    function isExists(year, month, day) {
      const date = new Date(year, month, day);
      return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
    }
  }
});

// node_modules/date-fns/isFirstDayOfMonth.js
var require_isFirstDayOfMonth = __commonJS({
  "node_modules/date-fns/isFirstDayOfMonth.js"(exports) {
    "use strict";
    exports.isFirstDayOfMonth = isFirstDayOfMonth;
    var _index = require_toDate();
    function isFirstDayOfMonth(date) {
      return (0, _index.toDate)(date).getDate() === 1;
    }
  }
});

// node_modules/date-fns/isFriday.js
var require_isFriday = __commonJS({
  "node_modules/date-fns/isFriday.js"(exports) {
    "use strict";
    exports.isFriday = isFriday;
    var _index = require_toDate();
    function isFriday(date) {
      return (0, _index.toDate)(date).getDay() === 5;
    }
  }
});

// node_modules/date-fns/isFuture.js
var require_isFuture = __commonJS({
  "node_modules/date-fns/isFuture.js"(exports) {
    "use strict";
    exports.isFuture = isFuture;
    var _index = require_toDate();
    function isFuture(date) {
      return +(0, _index.toDate)(date) > Date.now();
    }
  }
});

// node_modules/date-fns/transpose.js
var require_transpose = __commonJS({
  "node_modules/date-fns/transpose.js"(exports) {
    "use strict";
    exports.transpose = transpose;
    var _index = require_constructFrom();
    function transpose(fromDate, constructor) {
      const date = constructor instanceof Date ? (0, _index.constructFrom)(constructor, 0) : new constructor(0);
      date.setFullYear(
        fromDate.getFullYear(),
        fromDate.getMonth(),
        fromDate.getDate()
      );
      date.setHours(
        fromDate.getHours(),
        fromDate.getMinutes(),
        fromDate.getSeconds(),
        fromDate.getMilliseconds()
      );
      return date;
    }
  }
});

// node_modules/date-fns/parse/_lib/Setter.js
var require_Setter = __commonJS({
  "node_modules/date-fns/parse/_lib/Setter.js"(exports) {
    "use strict";
    exports.ValueSetter = exports.Setter = exports.DateToSystemTimezoneSetter = void 0;
    var _index = require_transpose();
    var _index2 = require_constructFrom();
    var TIMEZONE_UNIT_PRIORITY = 10;
    var Setter = class {
      constructor() {
        __publicField(this, "subPriority", 0);
      }
      validate(_utcDate, _options) {
        return true;
      }
    };
    exports.Setter = Setter;
    var ValueSetter = class extends Setter {
      constructor(value, validateValue, setValue, priority, subPriority) {
        super();
        this.value = value;
        this.validateValue = validateValue;
        this.setValue = setValue;
        this.priority = priority;
        if (subPriority) {
          this.subPriority = subPriority;
        }
      }
      validate(date, options) {
        return this.validateValue(date, this.value, options);
      }
      set(date, flags, options) {
        return this.setValue(date, flags, this.value, options);
      }
    };
    exports.ValueSetter = ValueSetter;
    var DateToSystemTimezoneSetter = class extends Setter {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", TIMEZONE_UNIT_PRIORITY);
        __publicField(this, "subPriority", -1);
      }
      set(date, flags) {
        if (flags.timestampIsSet)
          return date;
        return (0, _index2.constructFrom)(date, (0, _index.transpose)(date, Date));
      }
    };
    exports.DateToSystemTimezoneSetter = DateToSystemTimezoneSetter;
  }
});

// node_modules/date-fns/parse/_lib/Parser.js
var require_Parser = __commonJS({
  "node_modules/date-fns/parse/_lib/Parser.js"(exports) {
    "use strict";
    exports.Parser = void 0;
    var _Setter = require_Setter();
    var Parser = class {
      run(dateString, token, match, options) {
        const result = this.parse(dateString, token, match, options);
        if (!result) {
          return null;
        }
        return {
          setter: new _Setter.ValueSetter(
            result.value,
            this.validate,
            this.set,
            this.priority,
            this.subPriority
          ),
          rest: result.rest
        };
      }
      validate(_utcDate, _value, _options) {
        return true;
      }
    };
    exports.Parser = Parser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/EraParser.js
var require_EraParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/EraParser.js"(exports) {
    "use strict";
    exports.EraParser = void 0;
    var _Parser = require_Parser();
    var EraParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 140);
        __publicField(this, "incompatibleTokens", ["R", "u", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "G":
          case "GG":
          case "GGG":
            return match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
          case "GGGGG":
            return match.era(dateString, { width: "narrow" });
          case "GGGG":
          default:
            return match.era(dateString, { width: "wide" }) || match.era(dateString, { width: "abbreviated" }) || match.era(dateString, { width: "narrow" });
        }
      }
      set(date, flags, value) {
        flags.era = value;
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.EraParser = EraParser;
  }
});

// node_modules/date-fns/parse/_lib/constants.js
var require_constants2 = __commonJS({
  "node_modules/date-fns/parse/_lib/constants.js"(exports) {
    "use strict";
    exports.timezonePatterns = exports.numericPatterns = void 0;
    var numericPatterns = exports.numericPatterns = {
      month: /^(1[0-2]|0?\d)/,
      // 0 to 12
      date: /^(3[0-1]|[0-2]?\d)/,
      // 0 to 31
      dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
      // 0 to 366
      week: /^(5[0-3]|[0-4]?\d)/,
      // 0 to 53
      hour23h: /^(2[0-3]|[0-1]?\d)/,
      // 0 to 23
      hour24h: /^(2[0-4]|[0-1]?\d)/,
      // 0 to 24
      hour11h: /^(1[0-1]|0?\d)/,
      // 0 to 11
      hour12h: /^(1[0-2]|0?\d)/,
      // 0 to 12
      minute: /^[0-5]?\d/,
      // 0 to 59
      second: /^[0-5]?\d/,
      // 0 to 59
      singleDigit: /^\d/,
      // 0 to 9
      twoDigits: /^\d{1,2}/,
      // 0 to 99
      threeDigits: /^\d{1,3}/,
      // 0 to 999
      fourDigits: /^\d{1,4}/,
      // 0 to 9999
      anyDigitsSigned: /^-?\d+/,
      singleDigitSigned: /^-?\d/,
      // 0 to 9, -0 to -9
      twoDigitsSigned: /^-?\d{1,2}/,
      // 0 to 99, -0 to -99
      threeDigitsSigned: /^-?\d{1,3}/,
      // 0 to 999, -0 to -999
      fourDigitsSigned: /^-?\d{1,4}/
      // 0 to 9999, -0 to -9999
    };
    var timezonePatterns = exports.timezonePatterns = {
      basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
      basic: /^([+-])(\d{2})(\d{2})|Z/,
      basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
      extended: /^([+-])(\d{2}):(\d{2})|Z/,
      extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };
  }
});

// node_modules/date-fns/parse/_lib/utils.js
var require_utils = __commonJS({
  "node_modules/date-fns/parse/_lib/utils.js"(exports) {
    "use strict";
    exports.dayPeriodEnumToHours = dayPeriodEnumToHours;
    exports.isLeapYearIndex = isLeapYearIndex;
    exports.mapValue = mapValue;
    exports.normalizeTwoDigitYear = normalizeTwoDigitYear;
    exports.parseAnyDigitsSigned = parseAnyDigitsSigned;
    exports.parseNDigits = parseNDigits;
    exports.parseNDigitsSigned = parseNDigitsSigned;
    exports.parseNumericPattern = parseNumericPattern;
    exports.parseTimezonePattern = parseTimezonePattern;
    var _index = require_constants();
    var _constants = require_constants2();
    function mapValue(parseFnResult, mapFn) {
      if (!parseFnResult) {
        return parseFnResult;
      }
      return {
        value: mapFn(parseFnResult.value),
        rest: parseFnResult.rest
      };
    }
    function parseNumericPattern(pattern, dateString) {
      const matchResult = dateString.match(pattern);
      if (!matchResult) {
        return null;
      }
      return {
        value: parseInt(matchResult[0], 10),
        rest: dateString.slice(matchResult[0].length)
      };
    }
    function parseTimezonePattern(pattern, dateString) {
      const matchResult = dateString.match(pattern);
      if (!matchResult) {
        return null;
      }
      if (matchResult[0] === "Z") {
        return {
          value: 0,
          rest: dateString.slice(1)
        };
      }
      const sign = matchResult[1] === "+" ? 1 : -1;
      const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
      const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
      const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
      return {
        value: sign * (hours * _index.millisecondsInHour + minutes * _index.millisecondsInMinute + seconds * _index.millisecondsInSecond),
        rest: dateString.slice(matchResult[0].length)
      };
    }
    function parseAnyDigitsSigned(dateString) {
      return parseNumericPattern(
        _constants.numericPatterns.anyDigitsSigned,
        dateString
      );
    }
    function parseNDigits(n, dateString) {
      switch (n) {
        case 1:
          return parseNumericPattern(
            _constants.numericPatterns.singleDigit,
            dateString
          );
        case 2:
          return parseNumericPattern(
            _constants.numericPatterns.twoDigits,
            dateString
          );
        case 3:
          return parseNumericPattern(
            _constants.numericPatterns.threeDigits,
            dateString
          );
        case 4:
          return parseNumericPattern(
            _constants.numericPatterns.fourDigits,
            dateString
          );
        default:
          return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
      }
    }
    function parseNDigitsSigned(n, dateString) {
      switch (n) {
        case 1:
          return parseNumericPattern(
            _constants.numericPatterns.singleDigitSigned,
            dateString
          );
        case 2:
          return parseNumericPattern(
            _constants.numericPatterns.twoDigitsSigned,
            dateString
          );
        case 3:
          return parseNumericPattern(
            _constants.numericPatterns.threeDigitsSigned,
            dateString
          );
        case 4:
          return parseNumericPattern(
            _constants.numericPatterns.fourDigitsSigned,
            dateString
          );
        default:
          return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
      }
    }
    function dayPeriodEnumToHours(dayPeriod) {
      switch (dayPeriod) {
        case "morning":
          return 4;
        case "evening":
          return 17;
        case "pm":
        case "noon":
        case "afternoon":
          return 12;
        case "am":
        case "midnight":
        case "night":
        default:
          return 0;
      }
    }
    function normalizeTwoDigitYear(twoDigitYear, currentYear) {
      const isCommonEra = currentYear > 0;
      const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
      let result;
      if (absCurrentYear <= 50) {
        result = twoDigitYear || 100;
      } else {
        const rangeEnd = absCurrentYear + 50;
        const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
        const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
      }
      return isCommonEra ? result : 1 - result;
    }
    function isLeapYearIndex(year) {
      return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
    }
  }
});

// node_modules/date-fns/parse/_lib/parsers/YearParser.js
var require_YearParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/YearParser.js"(exports) {
    "use strict";
    exports.YearParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var YearParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 130);
        __publicField(this, "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]);
      }
      parse(dateString, token, match) {
        const valueCallback = (year) => ({
          year,
          isTwoDigitYear: token === "yy"
        });
        switch (token) {
          case "y":
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(4, dateString),
              valueCallback
            );
          case "yo":
            return (0, _utils.mapValue)(
              match.ordinalNumber(dateString, {
                unit: "year"
              }),
              valueCallback
            );
          default:
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(token.length, dateString),
              valueCallback
            );
        }
      }
      validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
      }
      set(date, flags, value) {
        const currentYear = date.getFullYear();
        if (value.isTwoDigitYear) {
          const normalizedTwoDigitYear = (0, _utils.normalizeTwoDigitYear)(
            value.year,
            currentYear
          );
          date.setFullYear(normalizedTwoDigitYear, 0, 1);
          date.setHours(0, 0, 0, 0);
          return date;
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.YearParser = YearParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js
var require_LocalWeekYearParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/LocalWeekYearParser.js"(exports) {
    "use strict";
    exports.LocalWeekYearParser = void 0;
    var _index = require_getWeekYear();
    var _index2 = require_startOfWeek();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var LocalWeekYearParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 130);
        __publicField(this, "incompatibleTokens", [
          "y",
          "R",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        const valueCallback = (year) => ({
          year,
          isTwoDigitYear: token === "YY"
        });
        switch (token) {
          case "Y":
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(4, dateString),
              valueCallback
            );
          case "Yo":
            return (0, _utils.mapValue)(
              match.ordinalNumber(dateString, {
                unit: "year"
              }),
              valueCallback
            );
          default:
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(token.length, dateString),
              valueCallback
            );
        }
      }
      validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
      }
      set(date, flags, value, options) {
        const currentYear = (0, _index.getWeekYear)(date, options);
        if (value.isTwoDigitYear) {
          const normalizedTwoDigitYear = (0, _utils.normalizeTwoDigitYear)(
            value.year,
            currentYear
          );
          date.setFullYear(
            normalizedTwoDigitYear,
            0,
            options.firstWeekContainsDate
          );
          date.setHours(0, 0, 0, 0);
          return (0, _index2.startOfWeek)(date, options);
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, options.firstWeekContainsDate);
        date.setHours(0, 0, 0, 0);
        return (0, _index2.startOfWeek)(date, options);
      }
    };
    exports.LocalWeekYearParser = LocalWeekYearParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js
var require_ISOWeekYearParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/ISOWeekYearParser.js"(exports) {
    "use strict";
    exports.ISOWeekYearParser = void 0;
    var _index = require_startOfISOWeek();
    var _index2 = require_constructFrom();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var ISOWeekYearParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 130);
        __publicField(this, "incompatibleTokens", [
          "G",
          "y",
          "Y",
          "u",
          "Q",
          "q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token) {
        if (token === "R") {
          return (0, _utils.parseNDigitsSigned)(4, dateString);
        }
        return (0, _utils.parseNDigitsSigned)(token.length, dateString);
      }
      set(date, _flags, value) {
        const firstWeekOfYear = (0, _index2.constructFrom)(date, 0);
        firstWeekOfYear.setFullYear(value, 0, 4);
        firstWeekOfYear.setHours(0, 0, 0, 0);
        return (0, _index.startOfISOWeek)(firstWeekOfYear);
      }
    };
    exports.ISOWeekYearParser = ISOWeekYearParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js
var require_ExtendedYearParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/ExtendedYearParser.js"(exports) {
    "use strict";
    exports.ExtendedYearParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var ExtendedYearParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 130);
        __publicField(this, "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]);
      }
      parse(dateString, token) {
        if (token === "u") {
          return (0, _utils.parseNDigitsSigned)(4, dateString);
        }
        return (0, _utils.parseNDigitsSigned)(token.length, dateString);
      }
      set(date, _flags, value) {
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.ExtendedYearParser = ExtendedYearParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/QuarterParser.js
var require_QuarterParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/QuarterParser.js"(exports) {
    "use strict";
    exports.QuarterParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var QuarterParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 120);
        __publicField(this, "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "Q":
          case "QQ":
            return (0, _utils.parseNDigits)(token.length, dateString);
          case "Qo":
            return match.ordinalNumber(dateString, { unit: "quarter" });
          case "QQQ":
            return match.quarter(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.quarter(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQQ":
            return match.quarter(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQ":
          default:
            return match.quarter(dateString, {
              width: "wide",
              context: "formatting"
            }) || match.quarter(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.quarter(dateString, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
      validate(_date, value) {
        return value >= 1 && value <= 4;
      }
      set(date, _flags, value) {
        date.setMonth((value - 1) * 3, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.QuarterParser = QuarterParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js
var require_StandAloneQuarterParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/StandAloneQuarterParser.js"(exports) {
    "use strict";
    exports.StandAloneQuarterParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var StandAloneQuarterParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 120);
        __publicField(this, "incompatibleTokens", [
          "Y",
          "R",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "q":
          case "qq":
            return (0, _utils.parseNDigits)(token.length, dateString);
          case "qo":
            return match.ordinalNumber(dateString, { unit: "quarter" });
          case "qqq":
            return match.quarter(dateString, {
              width: "abbreviated",
              context: "standalone"
            }) || match.quarter(dateString, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqqq":
            return match.quarter(dateString, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqq":
          default:
            return match.quarter(dateString, {
              width: "wide",
              context: "standalone"
            }) || match.quarter(dateString, {
              width: "abbreviated",
              context: "standalone"
            }) || match.quarter(dateString, {
              width: "narrow",
              context: "standalone"
            });
        }
      }
      validate(_date, value) {
        return value >= 1 && value <= 4;
      }
      set(date, _flags, value) {
        date.setMonth((value - 1) * 3, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.StandAloneQuarterParser = StandAloneQuarterParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/MonthParser.js
var require_MonthParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/MonthParser.js"(exports) {
    "use strict";
    exports.MonthParser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var MonthParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "L",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T"
        ]);
        __publicField(this, "priority", 110);
      }
      parse(dateString, token, match) {
        const valueCallback = (value) => value - 1;
        switch (token) {
          case "M":
            return (0, _utils.mapValue)(
              (0, _utils.parseNumericPattern)(
                _constants.numericPatterns.month,
                dateString
              ),
              valueCallback
            );
          case "MM":
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(2, dateString),
              valueCallback
            );
          case "Mo":
            return (0, _utils.mapValue)(
              match.ordinalNumber(dateString, {
                unit: "month"
              }),
              valueCallback
            );
          case "MMM":
            return match.month(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.month(dateString, { width: "narrow", context: "formatting" });
          case "MMMMM":
            return match.month(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMM":
          default:
            return match.month(dateString, { width: "wide", context: "formatting" }) || match.month(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.month(dateString, { width: "narrow", context: "formatting" });
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 11;
      }
      set(date, _flags, value) {
        date.setMonth(value, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.MonthParser = MonthParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js
var require_StandAloneMonthParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/StandAloneMonthParser.js"(exports) {
    "use strict";
    exports.StandAloneMonthParser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var StandAloneMonthParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 110);
        __publicField(this, "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        const valueCallback = (value) => value - 1;
        switch (token) {
          case "L":
            return (0, _utils.mapValue)(
              (0, _utils.parseNumericPattern)(
                _constants.numericPatterns.month,
                dateString
              ),
              valueCallback
            );
          case "LL":
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(2, dateString),
              valueCallback
            );
          case "Lo":
            return (0, _utils.mapValue)(
              match.ordinalNumber(dateString, {
                unit: "month"
              }),
              valueCallback
            );
          case "LLL":
            return match.month(dateString, {
              width: "abbreviated",
              context: "standalone"
            }) || match.month(dateString, { width: "narrow", context: "standalone" });
          case "LLLLL":
            return match.month(dateString, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLL":
          default:
            return match.month(dateString, { width: "wide", context: "standalone" }) || match.month(dateString, {
              width: "abbreviated",
              context: "standalone"
            }) || match.month(dateString, { width: "narrow", context: "standalone" });
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 11;
      }
      set(date, _flags, value) {
        date.setMonth(value, 1);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.StandAloneMonthParser = StandAloneMonthParser;
  }
});

// node_modules/date-fns/setWeek.js
var require_setWeek = __commonJS({
  "node_modules/date-fns/setWeek.js"(exports) {
    "use strict";
    exports.setWeek = setWeek;
    var _index = require_getWeek();
    var _index2 = require_toDate();
    function setWeek(date, week, options) {
      const _date = (0, _index2.toDate)(date);
      const diff = (0, _index.getWeek)(_date, options) - week;
      _date.setDate(_date.getDate() - diff * 7);
      return _date;
    }
  }
});

// node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js
var require_LocalWeekParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/LocalWeekParser.js"(exports) {
    "use strict";
    exports.LocalWeekParser = void 0;
    var _index = require_setWeek();
    var _index2 = require_startOfWeek();
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var LocalWeekParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 100);
        __publicField(this, "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "i",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "w":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.week,
              dateString
            );
          case "wo":
            return match.ordinalNumber(dateString, { unit: "week" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 1 && value <= 53;
      }
      set(date, _flags, value, options) {
        return (0, _index2.startOfWeek)(
          (0, _index.setWeek)(date, value, options),
          options
        );
      }
    };
    exports.LocalWeekParser = LocalWeekParser;
  }
});

// node_modules/date-fns/setISOWeek.js
var require_setISOWeek = __commonJS({
  "node_modules/date-fns/setISOWeek.js"(exports) {
    "use strict";
    exports.setISOWeek = setISOWeek;
    var _index = require_getISOWeek();
    var _index2 = require_toDate();
    function setISOWeek(date, week) {
      const _date = (0, _index2.toDate)(date);
      const diff = (0, _index.getISOWeek)(_date) - week;
      _date.setDate(_date.getDate() - diff * 7);
      return _date;
    }
  }
});

// node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js
var require_ISOWeekParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/ISOWeekParser.js"(exports) {
    "use strict";
    exports.ISOWeekParser = void 0;
    var _index = require_setISOWeek();
    var _index2 = require_startOfISOWeek();
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var ISOWeekParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 100);
        __publicField(this, "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "I":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.week,
              dateString
            );
          case "Io":
            return match.ordinalNumber(dateString, { unit: "week" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 1 && value <= 53;
      }
      set(date, _flags, value) {
        return (0, _index2.startOfISOWeek)((0, _index.setISOWeek)(date, value));
      }
    };
    exports.ISOWeekParser = ISOWeekParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/DateParser.js
var require_DateParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/DateParser.js"(exports) {
    "use strict";
    exports.DateParser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var DAYS_IN_MONTH_LEAP_YEAR = [
      31,
      29,
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31
    ];
    var DateParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 90);
        __publicField(this, "subPriority", 1);
        __publicField(this, "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "w",
          "I",
          "D",
          "i",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "d":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.date,
              dateString
            );
          case "do":
            return match.ordinalNumber(dateString, { unit: "date" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, _utils.isLeapYearIndex)(year);
        const month = date.getMonth();
        if (isLeapYear) {
          return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
        } else {
          return value >= 1 && value <= DAYS_IN_MONTH[month];
        }
      }
      set(date, _flags, value) {
        date.setDate(value);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.DateParser = DateParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js
var require_DayOfYearParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/DayOfYearParser.js"(exports) {
    "use strict";
    exports.DayOfYearParser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var DayOfYearParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 90);
        __publicField(this, "subpriority", 1);
        __publicField(this, "incompatibleTokens", [
          "Y",
          "R",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "I",
          "d",
          "E",
          "i",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "D":
          case "DD":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.dayOfYear,
              dateString
            );
          case "Do":
            return match.ordinalNumber(dateString, { unit: "date" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, _utils.isLeapYearIndex)(year);
        if (isLeapYear) {
          return value >= 1 && value <= 366;
        } else {
          return value >= 1 && value <= 365;
        }
      }
      set(date, _flags, value) {
        date.setMonth(0, value);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.DayOfYearParser = DayOfYearParser;
  }
});

// node_modules/date-fns/setDay.js
var require_setDay = __commonJS({
  "node_modules/date-fns/setDay.js"(exports) {
    "use strict";
    exports.setDay = setDay;
    var _index = require_addDays();
    var _index2 = require_toDate();
    var _index3 = require_defaultOptions();
    function setDay(date, day, options) {
      var _a, _b, _c, _d;
      const defaultOptions = (0, _index3.getDefaultOptions)();
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
      const _date = (0, _index2.toDate)(date);
      const currentDay = _date.getDay();
      const remainder = day % 7;
      const dayIndex = (remainder + 7) % 7;
      const delta = 7 - weekStartsOn;
      const diff = day < 0 || day > 6 ? day - (currentDay + delta) % 7 : (dayIndex + delta) % 7 - (currentDay + delta) % 7;
      return (0, _index.addDays)(_date, diff);
    }
  }
});

// node_modules/date-fns/parse/_lib/parsers/DayParser.js
var require_DayParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/DayParser.js"(exports) {
    "use strict";
    exports.DayParser = void 0;
    var _index = require_setDay();
    var _Parser = require_Parser();
    var DayParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 90);
        __publicField(this, "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "E":
          case "EE":
          case "EEE":
            return match.day(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
          case "EEEEE":
            return match.day(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
          case "EEEE":
          default:
            return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 6;
      }
      set(date, _flags, value, options) {
        date = (0, _index.setDay)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.DayParser = DayParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js
var require_LocalDayParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/LocalDayParser.js"(exports) {
    "use strict";
    exports.LocalDayParser = void 0;
    var _index = require_setDay();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var LocalDayParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 90);
        __publicField(this, "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match, options) {
        const valueCallback = (value) => {
          const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
          return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };
        switch (token) {
          case "e":
          case "ee":
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(token.length, dateString),
              valueCallback
            );
          case "eo":
            return (0, _utils.mapValue)(
              match.ordinalNumber(dateString, {
                unit: "day"
              }),
              valueCallback
            );
          case "eee":
            return match.day(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
          case "eeeee":
            return match.day(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
          case "eeee":
          default:
            return match.day(dateString, { width: "wide", context: "formatting" }) || match.day(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.day(dateString, { width: "short", context: "formatting" }) || match.day(dateString, { width: "narrow", context: "formatting" });
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 6;
      }
      set(date, _flags, value, options) {
        date = (0, _index.setDay)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.LocalDayParser = LocalDayParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js
var require_StandAloneLocalDayParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/StandAloneLocalDayParser.js"(exports) {
    "use strict";
    exports.StandAloneLocalDayParser = void 0;
    var _index = require_setDay();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var StandAloneLocalDayParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 90);
        __publicField(this, "incompatibleTokens", [
          "y",
          "R",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "I",
          "d",
          "D",
          "E",
          "i",
          "e",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match, options) {
        const valueCallback = (value) => {
          const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
          return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };
        switch (token) {
          case "c":
          case "cc":
            return (0, _utils.mapValue)(
              (0, _utils.parseNDigits)(token.length, dateString),
              valueCallback
            );
          case "co":
            return (0, _utils.mapValue)(
              match.ordinalNumber(dateString, {
                unit: "day"
              }),
              valueCallback
            );
          case "ccc":
            return match.day(dateString, {
              width: "abbreviated",
              context: "standalone"
            }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
          case "ccccc":
            return match.day(dateString, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
          case "cccc":
          default:
            return match.day(dateString, { width: "wide", context: "standalone" }) || match.day(dateString, {
              width: "abbreviated",
              context: "standalone"
            }) || match.day(dateString, { width: "short", context: "standalone" }) || match.day(dateString, { width: "narrow", context: "standalone" });
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 6;
      }
      set(date, _flags, value, options) {
        date = (0, _index.setDay)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.StandAloneLocalDayParser = StandAloneLocalDayParser;
  }
});

// node_modules/date-fns/setISODay.js
var require_setISODay = __commonJS({
  "node_modules/date-fns/setISODay.js"(exports) {
    "use strict";
    exports.setISODay = setISODay;
    var _index = require_addDays();
    var _index2 = require_getISODay();
    var _index3 = require_toDate();
    function setISODay(date, day) {
      const _date = (0, _index3.toDate)(date);
      const currentDay = (0, _index2.getISODay)(_date);
      const diff = day - currentDay;
      return (0, _index.addDays)(_date, diff);
    }
  }
});

// node_modules/date-fns/parse/_lib/parsers/ISODayParser.js
var require_ISODayParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/ISODayParser.js"(exports) {
    "use strict";
    exports.ISODayParser = void 0;
    var _index = require_setISODay();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var ISODayParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 90);
        __publicField(this, "incompatibleTokens", [
          "y",
          "Y",
          "u",
          "q",
          "Q",
          "M",
          "L",
          "w",
          "d",
          "D",
          "E",
          "e",
          "c",
          "t",
          "T"
        ]);
      }
      parse(dateString, token, match) {
        const valueCallback = (value) => {
          if (value === 0) {
            return 7;
          }
          return value;
        };
        switch (token) {
          case "i":
          case "ii":
            return (0, _utils.parseNDigits)(token.length, dateString);
          case "io":
            return match.ordinalNumber(dateString, { unit: "day" });
          case "iii":
            return (0, _utils.mapValue)(
              match.day(dateString, {
                width: "abbreviated",
                context: "formatting"
              }) || match.day(dateString, {
                width: "short",
                context: "formatting"
              }) || match.day(dateString, {
                width: "narrow",
                context: "formatting"
              }),
              valueCallback
            );
          case "iiiii":
            return (0, _utils.mapValue)(
              match.day(dateString, {
                width: "narrow",
                context: "formatting"
              }),
              valueCallback
            );
          case "iiiiii":
            return (0, _utils.mapValue)(
              match.day(dateString, {
                width: "short",
                context: "formatting"
              }) || match.day(dateString, {
                width: "narrow",
                context: "formatting"
              }),
              valueCallback
            );
          case "iiii":
          default:
            return (0, _utils.mapValue)(
              match.day(dateString, {
                width: "wide",
                context: "formatting"
              }) || match.day(dateString, {
                width: "abbreviated",
                context: "formatting"
              }) || match.day(dateString, {
                width: "short",
                context: "formatting"
              }) || match.day(dateString, {
                width: "narrow",
                context: "formatting"
              }),
              valueCallback
            );
        }
      }
      validate(_date, value) {
        return value >= 1 && value <= 7;
      }
      set(date, _flags, value) {
        date = (0, _index.setISODay)(date, value);
        date.setHours(0, 0, 0, 0);
        return date;
      }
    };
    exports.ISODayParser = ISODayParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/AMPMParser.js
var require_AMPMParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/AMPMParser.js"(exports) {
    "use strict";
    exports.AMPMParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var AMPMParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 80);
        __publicField(this, "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "a":
          case "aa":
          case "aaa":
            return match.dayPeriod(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaaa":
            return match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaa":
          default:
            return match.dayPeriod(dateString, {
              width: "wide",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
      set(date, _flags, value) {
        date.setHours((0, _utils.dayPeriodEnumToHours)(value), 0, 0, 0);
        return date;
      }
    };
    exports.AMPMParser = AMPMParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js
var require_AMPMMidnightParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/AMPMMidnightParser.js"(exports) {
    "use strict";
    exports.AMPMMidnightParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var AMPMMidnightParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 80);
        __publicField(this, "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "b":
          case "bb":
          case "bbb":
            return match.dayPeriod(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbbb":
            return match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbb":
          default:
            return match.dayPeriod(dateString, {
              width: "wide",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
      set(date, _flags, value) {
        date.setHours((0, _utils.dayPeriodEnumToHours)(value), 0, 0, 0);
        return date;
      }
    };
    exports.AMPMMidnightParser = AMPMMidnightParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js
var require_DayPeriodParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/DayPeriodParser.js"(exports) {
    "use strict";
    exports.DayPeriodParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var DayPeriodParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 80);
        __publicField(this, "incompatibleTokens", ["a", "b", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "B":
          case "BB":
          case "BBB":
            return match.dayPeriod(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBBB":
            return match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBB":
          default:
            return match.dayPeriod(dateString, {
              width: "wide",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "abbreviated",
              context: "formatting"
            }) || match.dayPeriod(dateString, {
              width: "narrow",
              context: "formatting"
            });
        }
      }
      set(date, _flags, value) {
        date.setHours((0, _utils.dayPeriodEnumToHours)(value), 0, 0, 0);
        return date;
      }
    };
    exports.DayPeriodParser = DayPeriodParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js
var require_Hour1to12Parser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/Hour1to12Parser.js"(exports) {
    "use strict";
    exports.Hour1to12Parser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var Hour1to12Parser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 70);
        __publicField(this, "incompatibleTokens", ["H", "K", "k", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "h":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.hour12h,
              dateString
            );
          case "ho":
            return match.ordinalNumber(dateString, { unit: "hour" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 1 && value <= 12;
      }
      set(date, _flags, value) {
        const isPM = date.getHours() >= 12;
        if (isPM && value < 12) {
          date.setHours(value + 12, 0, 0, 0);
        } else if (!isPM && value === 12) {
          date.setHours(0, 0, 0, 0);
        } else {
          date.setHours(value, 0, 0, 0);
        }
        return date;
      }
    };
    exports.Hour1to12Parser = Hour1to12Parser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js
var require_Hour0to23Parser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/Hour0to23Parser.js"(exports) {
    "use strict";
    exports.Hour0to23Parser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var Hour0to23Parser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 70);
        __publicField(this, "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "H":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.hour23h,
              dateString
            );
          case "Ho":
            return match.ordinalNumber(dateString, { unit: "hour" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 23;
      }
      set(date, _flags, value) {
        date.setHours(value, 0, 0, 0);
        return date;
      }
    };
    exports.Hour0to23Parser = Hour0to23Parser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js
var require_Hour0To11Parser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/Hour0To11Parser.js"(exports) {
    "use strict";
    exports.Hour0To11Parser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var Hour0To11Parser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 70);
        __publicField(this, "incompatibleTokens", ["h", "H", "k", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "K":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.hour11h,
              dateString
            );
          case "Ko":
            return match.ordinalNumber(dateString, { unit: "hour" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 11;
      }
      set(date, _flags, value) {
        const isPM = date.getHours() >= 12;
        if (isPM && value < 12) {
          date.setHours(value + 12, 0, 0, 0);
        } else {
          date.setHours(value, 0, 0, 0);
        }
        return date;
      }
    };
    exports.Hour0To11Parser = Hour0To11Parser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js
var require_Hour1To24Parser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/Hour1To24Parser.js"(exports) {
    "use strict";
    exports.Hour1To24Parser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var Hour1To24Parser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 70);
        __publicField(this, "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "k":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.hour24h,
              dateString
            );
          case "ko":
            return match.ordinalNumber(dateString, { unit: "hour" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 1 && value <= 24;
      }
      set(date, _flags, value) {
        const hours = value <= 24 ? value % 24 : value;
        date.setHours(hours, 0, 0, 0);
        return date;
      }
    };
    exports.Hour1To24Parser = Hour1To24Parser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/MinuteParser.js
var require_MinuteParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/MinuteParser.js"(exports) {
    "use strict";
    exports.MinuteParser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var MinuteParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 60);
        __publicField(this, "incompatibleTokens", ["t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "m":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.minute,
              dateString
            );
          case "mo":
            return match.ordinalNumber(dateString, { unit: "minute" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 59;
      }
      set(date, _flags, value) {
        date.setMinutes(value, 0, 0);
        return date;
      }
    };
    exports.MinuteParser = MinuteParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/SecondParser.js
var require_SecondParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/SecondParser.js"(exports) {
    "use strict";
    exports.SecondParser = void 0;
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var SecondParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 50);
        __publicField(this, "incompatibleTokens", ["t", "T"]);
      }
      parse(dateString, token, match) {
        switch (token) {
          case "s":
            return (0, _utils.parseNumericPattern)(
              _constants.numericPatterns.second,
              dateString
            );
          case "so":
            return match.ordinalNumber(dateString, { unit: "second" });
          default:
            return (0, _utils.parseNDigits)(token.length, dateString);
        }
      }
      validate(_date, value) {
        return value >= 0 && value <= 59;
      }
      set(date, _flags, value) {
        date.setSeconds(value, 0);
        return date;
      }
    };
    exports.SecondParser = SecondParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js
var require_FractionOfSecondParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/FractionOfSecondParser.js"(exports) {
    "use strict";
    exports.FractionOfSecondParser = void 0;
    var _Parser = require_Parser();
    var _utils = require_utils();
    var FractionOfSecondParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 30);
        __publicField(this, "incompatibleTokens", ["t", "T"]);
      }
      parse(dateString, token) {
        const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
        return (0, _utils.mapValue)(
          (0, _utils.parseNDigits)(token.length, dateString),
          valueCallback
        );
      }
      set(date, _flags, value) {
        date.setMilliseconds(value);
        return date;
      }
    };
    exports.FractionOfSecondParser = FractionOfSecondParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js
var require_ISOTimezoneWithZParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/ISOTimezoneWithZParser.js"(exports) {
    "use strict";
    exports.ISOTimezoneWithZParser = void 0;
    var _index = require_constructFrom();
    var _index2 = require_getTimezoneOffsetInMilliseconds();
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var ISOTimezoneWithZParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 10);
        __publicField(this, "incompatibleTokens", ["t", "T", "x"]);
      }
      parse(dateString, token) {
        switch (token) {
          case "X":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.basicOptionalMinutes,
              dateString
            );
          case "XX":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.basic,
              dateString
            );
          case "XXXX":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.basicOptionalSeconds,
              dateString
            );
          case "XXXXX":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.extendedOptionalSeconds,
              dateString
            );
          case "XXX":
          default:
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.extended,
              dateString
            );
        }
      }
      set(date, flags, value) {
        if (flags.timestampIsSet)
          return date;
        return (0, _index.constructFrom)(
          date,
          date.getTime() - (0, _index2.getTimezoneOffsetInMilliseconds)(date) - value
        );
      }
    };
    exports.ISOTimezoneWithZParser = ISOTimezoneWithZParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js
var require_ISOTimezoneParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/ISOTimezoneParser.js"(exports) {
    "use strict";
    exports.ISOTimezoneParser = void 0;
    var _index = require_constructFrom();
    var _index2 = require_getTimezoneOffsetInMilliseconds();
    var _constants = require_constants2();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var ISOTimezoneParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 10);
        __publicField(this, "incompatibleTokens", ["t", "T", "X"]);
      }
      parse(dateString, token) {
        switch (token) {
          case "x":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.basicOptionalMinutes,
              dateString
            );
          case "xx":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.basic,
              dateString
            );
          case "xxxx":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.basicOptionalSeconds,
              dateString
            );
          case "xxxxx":
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.extendedOptionalSeconds,
              dateString
            );
          case "xxx":
          default:
            return (0, _utils.parseTimezonePattern)(
              _constants.timezonePatterns.extended,
              dateString
            );
        }
      }
      set(date, flags, value) {
        if (flags.timestampIsSet)
          return date;
        return (0, _index.constructFrom)(
          date,
          date.getTime() - (0, _index2.getTimezoneOffsetInMilliseconds)(date) - value
        );
      }
    };
    exports.ISOTimezoneParser = ISOTimezoneParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js
var require_TimestampSecondsParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/TimestampSecondsParser.js"(exports) {
    "use strict";
    exports.TimestampSecondsParser = void 0;
    var _index = require_constructFrom();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var TimestampSecondsParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 40);
        __publicField(this, "incompatibleTokens", "*");
      }
      parse(dateString) {
        return (0, _utils.parseAnyDigitsSigned)(dateString);
      }
      set(date, _flags, value) {
        return [
          (0, _index.constructFrom)(date, value * 1e3),
          { timestampIsSet: true }
        ];
      }
    };
    exports.TimestampSecondsParser = TimestampSecondsParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js
var require_TimestampMillisecondsParser = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers/TimestampMillisecondsParser.js"(exports) {
    "use strict";
    exports.TimestampMillisecondsParser = void 0;
    var _index = require_constructFrom();
    var _Parser = require_Parser();
    var _utils = require_utils();
    var TimestampMillisecondsParser = class extends _Parser.Parser {
      constructor() {
        super(...arguments);
        __publicField(this, "priority", 20);
        __publicField(this, "incompatibleTokens", "*");
      }
      parse(dateString) {
        return (0, _utils.parseAnyDigitsSigned)(dateString);
      }
      set(date, _flags, value) {
        return [(0, _index.constructFrom)(date, value), { timestampIsSet: true }];
      }
    };
    exports.TimestampMillisecondsParser = TimestampMillisecondsParser;
  }
});

// node_modules/date-fns/parse/_lib/parsers.js
var require_parsers = __commonJS({
  "node_modules/date-fns/parse/_lib/parsers.js"(exports) {
    "use strict";
    exports.parsers = void 0;
    var _EraParser = require_EraParser();
    var _YearParser = require_YearParser();
    var _LocalWeekYearParser = require_LocalWeekYearParser();
    var _ISOWeekYearParser = require_ISOWeekYearParser();
    var _ExtendedYearParser = require_ExtendedYearParser();
    var _QuarterParser = require_QuarterParser();
    var _StandAloneQuarterParser = require_StandAloneQuarterParser();
    var _MonthParser = require_MonthParser();
    var _StandAloneMonthParser = require_StandAloneMonthParser();
    var _LocalWeekParser = require_LocalWeekParser();
    var _ISOWeekParser = require_ISOWeekParser();
    var _DateParser = require_DateParser();
    var _DayOfYearParser = require_DayOfYearParser();
    var _DayParser = require_DayParser();
    var _LocalDayParser = require_LocalDayParser();
    var _StandAloneLocalDayParser = require_StandAloneLocalDayParser();
    var _ISODayParser = require_ISODayParser();
    var _AMPMParser = require_AMPMParser();
    var _AMPMMidnightParser = require_AMPMMidnightParser();
    var _DayPeriodParser = require_DayPeriodParser();
    var _Hour1to12Parser = require_Hour1to12Parser();
    var _Hour0to23Parser = require_Hour0to23Parser();
    var _Hour0To11Parser = require_Hour0To11Parser();
    var _Hour1To24Parser = require_Hour1To24Parser();
    var _MinuteParser = require_MinuteParser();
    var _SecondParser = require_SecondParser();
    var _FractionOfSecondParser = require_FractionOfSecondParser();
    var _ISOTimezoneWithZParser = require_ISOTimezoneWithZParser();
    var _ISOTimezoneParser = require_ISOTimezoneParser();
    var _TimestampSecondsParser = require_TimestampSecondsParser();
    var _TimestampMillisecondsParser = require_TimestampMillisecondsParser();
    var parsers = exports.parsers = {
      G: new _EraParser.EraParser(),
      y: new _YearParser.YearParser(),
      Y: new _LocalWeekYearParser.LocalWeekYearParser(),
      R: new _ISOWeekYearParser.ISOWeekYearParser(),
      u: new _ExtendedYearParser.ExtendedYearParser(),
      Q: new _QuarterParser.QuarterParser(),
      q: new _StandAloneQuarterParser.StandAloneQuarterParser(),
      M: new _MonthParser.MonthParser(),
      L: new _StandAloneMonthParser.StandAloneMonthParser(),
      w: new _LocalWeekParser.LocalWeekParser(),
      I: new _ISOWeekParser.ISOWeekParser(),
      d: new _DateParser.DateParser(),
      D: new _DayOfYearParser.DayOfYearParser(),
      E: new _DayParser.DayParser(),
      e: new _LocalDayParser.LocalDayParser(),
      c: new _StandAloneLocalDayParser.StandAloneLocalDayParser(),
      i: new _ISODayParser.ISODayParser(),
      a: new _AMPMParser.AMPMParser(),
      b: new _AMPMMidnightParser.AMPMMidnightParser(),
      B: new _DayPeriodParser.DayPeriodParser(),
      h: new _Hour1to12Parser.Hour1to12Parser(),
      H: new _Hour0to23Parser.Hour0to23Parser(),
      K: new _Hour0To11Parser.Hour0To11Parser(),
      k: new _Hour1To24Parser.Hour1To24Parser(),
      m: new _MinuteParser.MinuteParser(),
      s: new _SecondParser.SecondParser(),
      S: new _FractionOfSecondParser.FractionOfSecondParser(),
      X: new _ISOTimezoneWithZParser.ISOTimezoneWithZParser(),
      x: new _ISOTimezoneParser.ISOTimezoneParser(),
      t: new _TimestampSecondsParser.TimestampSecondsParser(),
      T: new _TimestampMillisecondsParser.TimestampMillisecondsParser()
    };
  }
});

// node_modules/date-fns/parse.js
var require_parse = __commonJS({
  "node_modules/date-fns/parse.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "longFormatters", {
      enumerable: true,
      get: function() {
        return _index5.longFormatters;
      }
    });
    exports.parse = parse;
    Object.defineProperty(exports, "parsers", {
      enumerable: true,
      get: function() {
        return _index7.parsers;
      }
    });
    var _index = require_constructFrom();
    var _index2 = require_getDefaultOptions();
    var _index3 = require_en_US();
    var _index4 = require_toDate();
    var _index5 = require_longFormatters();
    var _index6 = require_protectedTokens();
    var _index7 = require_parsers();
    var _Setter = require_Setter();
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'([^]*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    var notWhitespaceRegExp = /\S/;
    var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    function parse(dateStr, formatStr, referenceDate, options) {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const defaultOptions = (0, _index2.getDefaultOptions)();
      const locale = (options == null ? void 0 : options.locale) ?? defaultOptions.locale ?? _index3.enUS;
      const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions.firstWeekContainsDate ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_f = (_e = options == null ? void 0 : options.locale) == null ? void 0 : _e.options) == null ? void 0 : _f.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_h = (_g = defaultOptions.locale) == null ? void 0 : _g.options) == null ? void 0 : _h.weekStartsOn) ?? 0;
      if (formatStr === "") {
        if (dateStr === "") {
          return (0, _index4.toDate)(referenceDate);
        } else {
          return (0, _index.constructFrom)(referenceDate, NaN);
        }
      }
      const subFnOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale
      };
      const setters = [new _Setter.DateToSystemTimezoneSetter()];
      const tokens = formatStr.match(longFormattingTokensRegExp).map((substring) => {
        const firstCharacter = substring[0];
        if (firstCharacter in _index5.longFormatters) {
          const longFormatter = _index5.longFormatters[firstCharacter];
          return longFormatter(substring, locale.formatLong);
        }
        return substring;
      }).join("").match(formattingTokensRegExp);
      const usedTokens = [];
      for (let token of tokens) {
        if (!(options == null ? void 0 : options.useAdditionalWeekYearTokens) && (0, _index6.isProtectedWeekYearToken)(token)) {
          (0, _index6.warnOrThrowProtectedError)(token, formatStr, dateStr);
        }
        if (!(options == null ? void 0 : options.useAdditionalDayOfYearTokens) && (0, _index6.isProtectedDayOfYearToken)(token)) {
          (0, _index6.warnOrThrowProtectedError)(token, formatStr, dateStr);
        }
        const firstCharacter = token[0];
        const parser = _index7.parsers[firstCharacter];
        if (parser) {
          const { incompatibleTokens } = parser;
          if (Array.isArray(incompatibleTokens)) {
            const incompatibleToken = usedTokens.find(
              (usedToken) => incompatibleTokens.includes(usedToken.token) || usedToken.token === firstCharacter
            );
            if (incompatibleToken) {
              throw new RangeError(
                `The format string mustn't contain \`${incompatibleToken.fullToken}\` and \`${token}\` at the same time`
              );
            }
          } else if (parser.incompatibleTokens === "*" && usedTokens.length > 0) {
            throw new RangeError(
              `The format string mustn't contain \`${token}\` and any other token at the same time`
            );
          }
          usedTokens.push({ token: firstCharacter, fullToken: token });
          const parseResult = parser.run(
            dateStr,
            token,
            locale.match,
            subFnOptions
          );
          if (!parseResult) {
            return (0, _index.constructFrom)(referenceDate, NaN);
          }
          setters.push(parseResult.setter);
          dateStr = parseResult.rest;
        } else {
          if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
            throw new RangeError(
              "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
            );
          }
          if (token === "''") {
            token = "'";
          } else if (firstCharacter === "'") {
            token = cleanEscapedString(token);
          }
          if (dateStr.indexOf(token) === 0) {
            dateStr = dateStr.slice(token.length);
          } else {
            return (0, _index.constructFrom)(referenceDate, NaN);
          }
        }
      }
      if (dateStr.length > 0 && notWhitespaceRegExp.test(dateStr)) {
        return (0, _index.constructFrom)(referenceDate, NaN);
      }
      const uniquePrioritySetters = setters.map((setter) => setter.priority).sort((a, b) => b - a).filter((priority, index, array) => array.indexOf(priority) === index).map(
        (priority) => setters.filter((setter) => setter.priority === priority).sort((a, b) => b.subPriority - a.subPriority)
      ).map((setterArray) => setterArray[0]);
      let date = (0, _index4.toDate)(referenceDate);
      if (isNaN(date.getTime())) {
        return (0, _index.constructFrom)(referenceDate, NaN);
      }
      const flags = {};
      for (const setter of uniquePrioritySetters) {
        if (!setter.validate(date, subFnOptions)) {
          return (0, _index.constructFrom)(referenceDate, NaN);
        }
        const result = setter.set(date, flags, subFnOptions);
        if (Array.isArray(result)) {
          date = result[0];
          Object.assign(flags, result[1]);
        } else {
          date = result;
        }
      }
      return (0, _index.constructFrom)(referenceDate, date);
    }
    function cleanEscapedString(input) {
      return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
    }
  }
});

// node_modules/date-fns/isMatch.js
var require_isMatch = __commonJS({
  "node_modules/date-fns/isMatch.js"(exports) {
    "use strict";
    exports.isMatch = isMatch;
    var _index = require_isValid();
    var _index2 = require_parse();
    function isMatch(dateStr, formatStr, options) {
      return (0, _index.isValid)(
        (0, _index2.parse)(dateStr, formatStr, /* @__PURE__ */ new Date(), options)
      );
    }
  }
});

// node_modules/date-fns/isMonday.js
var require_isMonday = __commonJS({
  "node_modules/date-fns/isMonday.js"(exports) {
    "use strict";
    exports.isMonday = isMonday;
    var _index = require_toDate();
    function isMonday(date) {
      return (0, _index.toDate)(date).getDay() === 1;
    }
  }
});

// node_modules/date-fns/isPast.js
var require_isPast = __commonJS({
  "node_modules/date-fns/isPast.js"(exports) {
    "use strict";
    exports.isPast = isPast;
    var _index = require_toDate();
    function isPast(date) {
      return +(0, _index.toDate)(date) < Date.now();
    }
  }
});

// node_modules/date-fns/startOfHour.js
var require_startOfHour = __commonJS({
  "node_modules/date-fns/startOfHour.js"(exports) {
    "use strict";
    exports.startOfHour = startOfHour;
    var _index = require_toDate();
    function startOfHour(date) {
      const _date = (0, _index.toDate)(date);
      _date.setMinutes(0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/isSameHour.js
var require_isSameHour = __commonJS({
  "node_modules/date-fns/isSameHour.js"(exports) {
    "use strict";
    exports.isSameHour = isSameHour;
    var _index = require_startOfHour();
    function isSameHour(dateLeft, dateRight) {
      const dateLeftStartOfHour = (0, _index.startOfHour)(dateLeft);
      const dateRightStartOfHour = (0, _index.startOfHour)(dateRight);
      return +dateLeftStartOfHour === +dateRightStartOfHour;
    }
  }
});

// node_modules/date-fns/isSameWeek.js
var require_isSameWeek = __commonJS({
  "node_modules/date-fns/isSameWeek.js"(exports) {
    "use strict";
    exports.isSameWeek = isSameWeek;
    var _index = require_startOfWeek();
    function isSameWeek(dateLeft, dateRight, options) {
      const dateLeftStartOfWeek = (0, _index.startOfWeek)(dateLeft, options);
      const dateRightStartOfWeek = (0, _index.startOfWeek)(dateRight, options);
      return +dateLeftStartOfWeek === +dateRightStartOfWeek;
    }
  }
});

// node_modules/date-fns/isSameISOWeek.js
var require_isSameISOWeek = __commonJS({
  "node_modules/date-fns/isSameISOWeek.js"(exports) {
    "use strict";
    exports.isSameISOWeek = isSameISOWeek;
    var _index = require_isSameWeek();
    function isSameISOWeek(dateLeft, dateRight) {
      return (0, _index.isSameWeek)(dateLeft, dateRight, { weekStartsOn: 1 });
    }
  }
});

// node_modules/date-fns/isSameISOWeekYear.js
var require_isSameISOWeekYear = __commonJS({
  "node_modules/date-fns/isSameISOWeekYear.js"(exports) {
    "use strict";
    exports.isSameISOWeekYear = isSameISOWeekYear;
    var _index = require_startOfISOWeekYear();
    function isSameISOWeekYear(dateLeft, dateRight) {
      const dateLeftStartOfYear = (0, _index.startOfISOWeekYear)(dateLeft);
      const dateRightStartOfYear = (0, _index.startOfISOWeekYear)(dateRight);
      return +dateLeftStartOfYear === +dateRightStartOfYear;
    }
  }
});

// node_modules/date-fns/isSameMinute.js
var require_isSameMinute = __commonJS({
  "node_modules/date-fns/isSameMinute.js"(exports) {
    "use strict";
    exports.isSameMinute = isSameMinute;
    var _index = require_startOfMinute();
    function isSameMinute(dateLeft, dateRight) {
      const dateLeftStartOfMinute = (0, _index.startOfMinute)(dateLeft);
      const dateRightStartOfMinute = (0, _index.startOfMinute)(dateRight);
      return +dateLeftStartOfMinute === +dateRightStartOfMinute;
    }
  }
});

// node_modules/date-fns/isSameMonth.js
var require_isSameMonth = __commonJS({
  "node_modules/date-fns/isSameMonth.js"(exports) {
    "use strict";
    exports.isSameMonth = isSameMonth;
    var _index = require_toDate();
    function isSameMonth(dateLeft, dateRight) {
      const _dateLeft = (0, _index.toDate)(dateLeft);
      const _dateRight = (0, _index.toDate)(dateRight);
      return _dateLeft.getFullYear() === _dateRight.getFullYear() && _dateLeft.getMonth() === _dateRight.getMonth();
    }
  }
});

// node_modules/date-fns/isSameQuarter.js
var require_isSameQuarter = __commonJS({
  "node_modules/date-fns/isSameQuarter.js"(exports) {
    "use strict";
    exports.isSameQuarter = isSameQuarter;
    var _index = require_startOfQuarter();
    function isSameQuarter(dateLeft, dateRight) {
      const dateLeftStartOfQuarter = (0, _index.startOfQuarter)(dateLeft);
      const dateRightStartOfQuarter = (0, _index.startOfQuarter)(dateRight);
      return +dateLeftStartOfQuarter === +dateRightStartOfQuarter;
    }
  }
});

// node_modules/date-fns/startOfSecond.js
var require_startOfSecond = __commonJS({
  "node_modules/date-fns/startOfSecond.js"(exports) {
    "use strict";
    exports.startOfSecond = startOfSecond;
    var _index = require_toDate();
    function startOfSecond(date) {
      const _date = (0, _index.toDate)(date);
      _date.setMilliseconds(0);
      return _date;
    }
  }
});

// node_modules/date-fns/isSameSecond.js
var require_isSameSecond = __commonJS({
  "node_modules/date-fns/isSameSecond.js"(exports) {
    "use strict";
    exports.isSameSecond = isSameSecond;
    var _index = require_startOfSecond();
    function isSameSecond(dateLeft, dateRight) {
      const dateLeftStartOfSecond = (0, _index.startOfSecond)(dateLeft);
      const dateRightStartOfSecond = (0, _index.startOfSecond)(dateRight);
      return +dateLeftStartOfSecond === +dateRightStartOfSecond;
    }
  }
});

// node_modules/date-fns/isSameYear.js
var require_isSameYear = __commonJS({
  "node_modules/date-fns/isSameYear.js"(exports) {
    "use strict";
    exports.isSameYear = isSameYear;
    var _index = require_toDate();
    function isSameYear(dateLeft, dateRight) {
      const _dateLeft = (0, _index.toDate)(dateLeft);
      const _dateRight = (0, _index.toDate)(dateRight);
      return _dateLeft.getFullYear() === _dateRight.getFullYear();
    }
  }
});

// node_modules/date-fns/isThisHour.js
var require_isThisHour = __commonJS({
  "node_modules/date-fns/isThisHour.js"(exports) {
    "use strict";
    exports.isThisHour = isThisHour;
    var _index = require_isSameHour();
    function isThisHour(date) {
      return (0, _index.isSameHour)(Date.now(), date);
    }
  }
});

// node_modules/date-fns/isThisISOWeek.js
var require_isThisISOWeek = __commonJS({
  "node_modules/date-fns/isThisISOWeek.js"(exports) {
    "use strict";
    exports.isThisISOWeek = isThisISOWeek;
    var _index = require_isSameISOWeek();
    function isThisISOWeek(date) {
      return (0, _index.isSameISOWeek)(date, Date.now());
    }
  }
});

// node_modules/date-fns/isThisMinute.js
var require_isThisMinute = __commonJS({
  "node_modules/date-fns/isThisMinute.js"(exports) {
    "use strict";
    exports.isThisMinute = isThisMinute;
    var _index = require_isSameMinute();
    function isThisMinute(date) {
      return (0, _index.isSameMinute)(Date.now(), date);
    }
  }
});

// node_modules/date-fns/isThisMonth.js
var require_isThisMonth = __commonJS({
  "node_modules/date-fns/isThisMonth.js"(exports) {
    "use strict";
    exports.isThisMonth = isThisMonth;
    var _index = require_isSameMonth();
    function isThisMonth(date) {
      return (0, _index.isSameMonth)(Date.now(), date);
    }
  }
});

// node_modules/date-fns/isThisQuarter.js
var require_isThisQuarter = __commonJS({
  "node_modules/date-fns/isThisQuarter.js"(exports) {
    "use strict";
    exports.isThisQuarter = isThisQuarter;
    var _index = require_isSameQuarter();
    function isThisQuarter(date) {
      return (0, _index.isSameQuarter)(Date.now(), date);
    }
  }
});

// node_modules/date-fns/isThisSecond.js
var require_isThisSecond = __commonJS({
  "node_modules/date-fns/isThisSecond.js"(exports) {
    "use strict";
    exports.isThisSecond = isThisSecond;
    var _index = require_isSameSecond();
    function isThisSecond(date) {
      return (0, _index.isSameSecond)(Date.now(), date);
    }
  }
});

// node_modules/date-fns/isThisWeek.js
var require_isThisWeek = __commonJS({
  "node_modules/date-fns/isThisWeek.js"(exports) {
    "use strict";
    exports.isThisWeek = isThisWeek;
    var _index = require_isSameWeek();
    function isThisWeek(date, options) {
      return (0, _index.isSameWeek)(date, Date.now(), options);
    }
  }
});

// node_modules/date-fns/isThisYear.js
var require_isThisYear = __commonJS({
  "node_modules/date-fns/isThisYear.js"(exports) {
    "use strict";
    exports.isThisYear = isThisYear;
    var _index = require_isSameYear();
    function isThisYear(date) {
      return (0, _index.isSameYear)(date, Date.now());
    }
  }
});

// node_modules/date-fns/isThursday.js
var require_isThursday = __commonJS({
  "node_modules/date-fns/isThursday.js"(exports) {
    "use strict";
    exports.isThursday = isThursday;
    var _index = require_toDate();
    function isThursday(date) {
      return (0, _index.toDate)(date).getDay() === 4;
    }
  }
});

// node_modules/date-fns/isToday.js
var require_isToday = __commonJS({
  "node_modules/date-fns/isToday.js"(exports) {
    "use strict";
    exports.isToday = isToday;
    var _index = require_isSameDay();
    function isToday(date) {
      return (0, _index.isSameDay)(date, Date.now());
    }
  }
});

// node_modules/date-fns/isTomorrow.js
var require_isTomorrow = __commonJS({
  "node_modules/date-fns/isTomorrow.js"(exports) {
    "use strict";
    exports.isTomorrow = isTomorrow;
    var _index = require_addDays();
    var _index2 = require_isSameDay();
    function isTomorrow(date) {
      return (0, _index2.isSameDay)(date, (0, _index.addDays)(Date.now(), 1));
    }
  }
});

// node_modules/date-fns/isTuesday.js
var require_isTuesday = __commonJS({
  "node_modules/date-fns/isTuesday.js"(exports) {
    "use strict";
    exports.isTuesday = isTuesday;
    var _index = require_toDate();
    function isTuesday(date) {
      return (0, _index.toDate)(date).getDay() === 2;
    }
  }
});

// node_modules/date-fns/isWednesday.js
var require_isWednesday = __commonJS({
  "node_modules/date-fns/isWednesday.js"(exports) {
    "use strict";
    exports.isWednesday = isWednesday;
    var _index = require_toDate();
    function isWednesday(date) {
      return (0, _index.toDate)(date).getDay() === 3;
    }
  }
});

// node_modules/date-fns/isWithinInterval.js
var require_isWithinInterval = __commonJS({
  "node_modules/date-fns/isWithinInterval.js"(exports) {
    "use strict";
    exports.isWithinInterval = isWithinInterval;
    var _index = require_toDate();
    function isWithinInterval(date, interval) {
      const time = +(0, _index.toDate)(date);
      const [startTime, endTime] = [
        +(0, _index.toDate)(interval.start),
        +(0, _index.toDate)(interval.end)
      ].sort((a, b) => a - b);
      return time >= startTime && time <= endTime;
    }
  }
});

// node_modules/date-fns/subDays.js
var require_subDays = __commonJS({
  "node_modules/date-fns/subDays.js"(exports) {
    "use strict";
    exports.subDays = subDays;
    var _index = require_addDays();
    function subDays(date, amount) {
      return (0, _index.addDays)(date, -amount);
    }
  }
});

// node_modules/date-fns/isYesterday.js
var require_isYesterday = __commonJS({
  "node_modules/date-fns/isYesterday.js"(exports) {
    "use strict";
    exports.isYesterday = isYesterday;
    var _index = require_isSameDay();
    var _index2 = require_subDays();
    function isYesterday(date) {
      return (0, _index.isSameDay)(date, (0, _index2.subDays)(Date.now(), 1));
    }
  }
});

// node_modules/date-fns/lastDayOfDecade.js
var require_lastDayOfDecade = __commonJS({
  "node_modules/date-fns/lastDayOfDecade.js"(exports) {
    "use strict";
    exports.lastDayOfDecade = lastDayOfDecade;
    var _index = require_toDate();
    function lastDayOfDecade(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      const decade = 9 + Math.floor(year / 10) * 10;
      _date.setFullYear(decade + 1, 0, 0);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/lastDayOfWeek.js
var require_lastDayOfWeek = __commonJS({
  "node_modules/date-fns/lastDayOfWeek.js"(exports) {
    "use strict";
    exports.lastDayOfWeek = lastDayOfWeek;
    var _index = require_toDate();
    var _index2 = require_defaultOptions();
    function lastDayOfWeek(date, options) {
      var _a, _b, _c, _d;
      const defaultOptions = (0, _index2.getDefaultOptions)();
      const weekStartsOn = (options == null ? void 0 : options.weekStartsOn) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.weekStartsOn) ?? defaultOptions.weekStartsOn ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.weekStartsOn) ?? 0;
      const _date = (0, _index.toDate)(date);
      const day = _date.getDay();
      const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
      _date.setHours(0, 0, 0, 0);
      _date.setDate(_date.getDate() + diff);
      return _date;
    }
  }
});

// node_modules/date-fns/lastDayOfISOWeek.js
var require_lastDayOfISOWeek = __commonJS({
  "node_modules/date-fns/lastDayOfISOWeek.js"(exports) {
    "use strict";
    exports.lastDayOfISOWeek = lastDayOfISOWeek;
    var _index = require_lastDayOfWeek();
    function lastDayOfISOWeek(date) {
      return (0, _index.lastDayOfWeek)(date, { weekStartsOn: 1 });
    }
  }
});

// node_modules/date-fns/lastDayOfISOWeekYear.js
var require_lastDayOfISOWeekYear = __commonJS({
  "node_modules/date-fns/lastDayOfISOWeekYear.js"(exports) {
    "use strict";
    exports.lastDayOfISOWeekYear = lastDayOfISOWeekYear;
    var _index = require_getISOWeekYear();
    var _index2 = require_startOfISOWeek();
    var _index3 = require_constructFrom();
    function lastDayOfISOWeekYear(date) {
      const year = (0, _index.getISOWeekYear)(date);
      const fourthOfJanuary = (0, _index3.constructFrom)(date, 0);
      fourthOfJanuary.setFullYear(year + 1, 0, 4);
      fourthOfJanuary.setHours(0, 0, 0, 0);
      const _date = (0, _index2.startOfISOWeek)(fourthOfJanuary);
      _date.setDate(_date.getDate() - 1);
      return _date;
    }
  }
});

// node_modules/date-fns/lastDayOfQuarter.js
var require_lastDayOfQuarter = __commonJS({
  "node_modules/date-fns/lastDayOfQuarter.js"(exports) {
    "use strict";
    exports.lastDayOfQuarter = lastDayOfQuarter;
    var _index = require_toDate();
    function lastDayOfQuarter(date) {
      const _date = (0, _index.toDate)(date);
      const currentMonth = _date.getMonth();
      const month = currentMonth - currentMonth % 3 + 3;
      _date.setMonth(month, 0);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/lastDayOfYear.js
var require_lastDayOfYear = __commonJS({
  "node_modules/date-fns/lastDayOfYear.js"(exports) {
    "use strict";
    exports.lastDayOfYear = lastDayOfYear;
    var _index = require_toDate();
    function lastDayOfYear(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      _date.setFullYear(year + 1, 0, 0);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/lightFormat.js
var require_lightFormat = __commonJS({
  "node_modules/date-fns/lightFormat.js"(exports) {
    "use strict";
    exports.lightFormat = lightFormat;
    Object.defineProperty(exports, "lightFormatters", {
      enumerable: true,
      get: function() {
        return _index3.lightFormatters;
      }
    });
    var _index = require_isValid();
    var _index2 = require_toDate();
    var _index3 = require_lightFormatters();
    var formattingTokensRegExp = /(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'([^]*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    function lightFormat(date, formatStr) {
      const _date = (0, _index2.toDate)(date);
      if (!(0, _index.isValid)(_date)) {
        throw new RangeError("Invalid time value");
      }
      const tokens = formatStr.match(formattingTokensRegExp);
      if (!tokens)
        return "";
      const result = tokens.map((substring) => {
        if (substring === "''") {
          return "'";
        }
        const firstCharacter = substring[0];
        if (firstCharacter === "'") {
          return cleanEscapedString(substring);
        }
        const formatter = _index3.lightFormatters[firstCharacter];
        if (formatter) {
          return formatter(_date, substring);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
          );
        }
        return substring;
      }).join("");
      return result;
    }
    function cleanEscapedString(input) {
      const matches = input.match(escapedStringRegExp);
      if (!matches) {
        return input;
      }
      return matches[1].replace(doubleQuoteRegExp, "'");
    }
  }
});

// node_modules/date-fns/milliseconds.js
var require_milliseconds = __commonJS({
  "node_modules/date-fns/milliseconds.js"(exports) {
    "use strict";
    exports.milliseconds = milliseconds;
    var _index = require_constants();
    function milliseconds({ years, months, weeks, days, hours, minutes, seconds }) {
      let totalDays = 0;
      if (years)
        totalDays += years * _index.daysInYear;
      if (months)
        totalDays += months * (_index.daysInYear / 12);
      if (weeks)
        totalDays += weeks * 7;
      if (days)
        totalDays += days;
      let totalSeconds = totalDays * 24 * 60 * 60;
      if (hours)
        totalSeconds += hours * 60 * 60;
      if (minutes)
        totalSeconds += minutes * 60;
      if (seconds)
        totalSeconds += seconds;
      return Math.trunc(totalSeconds * 1e3);
    }
  }
});

// node_modules/date-fns/millisecondsToHours.js
var require_millisecondsToHours = __commonJS({
  "node_modules/date-fns/millisecondsToHours.js"(exports) {
    "use strict";
    exports.millisecondsToHours = millisecondsToHours;
    var _index = require_constants();
    function millisecondsToHours(milliseconds) {
      const hours = milliseconds / _index.millisecondsInHour;
      return Math.trunc(hours);
    }
  }
});

// node_modules/date-fns/millisecondsToMinutes.js
var require_millisecondsToMinutes = __commonJS({
  "node_modules/date-fns/millisecondsToMinutes.js"(exports) {
    "use strict";
    exports.millisecondsToMinutes = millisecondsToMinutes;
    var _index = require_constants();
    function millisecondsToMinutes(milliseconds) {
      const minutes = milliseconds / _index.millisecondsInMinute;
      return Math.trunc(minutes);
    }
  }
});

// node_modules/date-fns/millisecondsToSeconds.js
var require_millisecondsToSeconds = __commonJS({
  "node_modules/date-fns/millisecondsToSeconds.js"(exports) {
    "use strict";
    exports.millisecondsToSeconds = millisecondsToSeconds;
    var _index = require_constants();
    function millisecondsToSeconds(milliseconds) {
      const seconds = milliseconds / _index.millisecondsInSecond;
      return Math.trunc(seconds);
    }
  }
});

// node_modules/date-fns/minutesToHours.js
var require_minutesToHours = __commonJS({
  "node_modules/date-fns/minutesToHours.js"(exports) {
    "use strict";
    exports.minutesToHours = minutesToHours;
    var _index = require_constants();
    function minutesToHours(minutes) {
      const hours = minutes / _index.minutesInHour;
      return Math.trunc(hours);
    }
  }
});

// node_modules/date-fns/minutesToMilliseconds.js
var require_minutesToMilliseconds = __commonJS({
  "node_modules/date-fns/minutesToMilliseconds.js"(exports) {
    "use strict";
    exports.minutesToMilliseconds = minutesToMilliseconds;
    var _index = require_constants();
    function minutesToMilliseconds(minutes) {
      return Math.trunc(minutes * _index.millisecondsInMinute);
    }
  }
});

// node_modules/date-fns/minutesToSeconds.js
var require_minutesToSeconds = __commonJS({
  "node_modules/date-fns/minutesToSeconds.js"(exports) {
    "use strict";
    exports.minutesToSeconds = minutesToSeconds;
    var _index = require_constants();
    function minutesToSeconds(minutes) {
      return Math.trunc(minutes * _index.secondsInMinute);
    }
  }
});

// node_modules/date-fns/monthsToQuarters.js
var require_monthsToQuarters = __commonJS({
  "node_modules/date-fns/monthsToQuarters.js"(exports) {
    "use strict";
    exports.monthsToQuarters = monthsToQuarters;
    var _index = require_constants();
    function monthsToQuarters(months) {
      const quarters = months / _index.monthsInQuarter;
      return Math.trunc(quarters);
    }
  }
});

// node_modules/date-fns/monthsToYears.js
var require_monthsToYears = __commonJS({
  "node_modules/date-fns/monthsToYears.js"(exports) {
    "use strict";
    exports.monthsToYears = monthsToYears;
    var _index = require_constants();
    function monthsToYears(months) {
      const years = months / _index.monthsInYear;
      return Math.trunc(years);
    }
  }
});

// node_modules/date-fns/nextDay.js
var require_nextDay = __commonJS({
  "node_modules/date-fns/nextDay.js"(exports) {
    "use strict";
    exports.nextDay = nextDay;
    var _index = require_addDays();
    var _index2 = require_getDay();
    function nextDay(date, day) {
      let delta = day - (0, _index2.getDay)(date);
      if (delta <= 0)
        delta += 7;
      return (0, _index.addDays)(date, delta);
    }
  }
});

// node_modules/date-fns/nextFriday.js
var require_nextFriday = __commonJS({
  "node_modules/date-fns/nextFriday.js"(exports) {
    "use strict";
    exports.nextFriday = nextFriday;
    var _index = require_nextDay();
    function nextFriday(date) {
      return (0, _index.nextDay)(date, 5);
    }
  }
});

// node_modules/date-fns/nextMonday.js
var require_nextMonday = __commonJS({
  "node_modules/date-fns/nextMonday.js"(exports) {
    "use strict";
    exports.nextMonday = nextMonday;
    var _index = require_nextDay();
    function nextMonday(date) {
      return (0, _index.nextDay)(date, 1);
    }
  }
});

// node_modules/date-fns/nextSaturday.js
var require_nextSaturday = __commonJS({
  "node_modules/date-fns/nextSaturday.js"(exports) {
    "use strict";
    exports.nextSaturday = nextSaturday;
    var _index = require_nextDay();
    function nextSaturday(date) {
      return (0, _index.nextDay)(date, 6);
    }
  }
});

// node_modules/date-fns/nextSunday.js
var require_nextSunday = __commonJS({
  "node_modules/date-fns/nextSunday.js"(exports) {
    "use strict";
    exports.nextSunday = nextSunday;
    var _index = require_nextDay();
    function nextSunday(date) {
      return (0, _index.nextDay)(date, 0);
    }
  }
});

// node_modules/date-fns/nextThursday.js
var require_nextThursday = __commonJS({
  "node_modules/date-fns/nextThursday.js"(exports) {
    "use strict";
    exports.nextThursday = nextThursday;
    var _index = require_nextDay();
    function nextThursday(date) {
      return (0, _index.nextDay)(date, 4);
    }
  }
});

// node_modules/date-fns/nextTuesday.js
var require_nextTuesday = __commonJS({
  "node_modules/date-fns/nextTuesday.js"(exports) {
    "use strict";
    exports.nextTuesday = nextTuesday;
    var _index = require_nextDay();
    function nextTuesday(date) {
      return (0, _index.nextDay)(date, 2);
    }
  }
});

// node_modules/date-fns/nextWednesday.js
var require_nextWednesday = __commonJS({
  "node_modules/date-fns/nextWednesday.js"(exports) {
    "use strict";
    exports.nextWednesday = nextWednesday;
    var _index = require_nextDay();
    function nextWednesday(date) {
      return (0, _index.nextDay)(date, 3);
    }
  }
});

// node_modules/date-fns/parseISO.js
var require_parseISO = __commonJS({
  "node_modules/date-fns/parseISO.js"(exports) {
    "use strict";
    exports.parseISO = parseISO;
    var _index = require_constants();
    function parseISO(argument, options) {
      const additionalDigits = (options == null ? void 0 : options.additionalDigits) ?? 2;
      const dateStrings = splitDateString(argument);
      let date;
      if (dateStrings.date) {
        const parseYearResult = parseYear(dateStrings.date, additionalDigits);
        date = parseDate(parseYearResult.restDateString, parseYearResult.year);
      }
      if (!date || isNaN(date.getTime())) {
        return /* @__PURE__ */ new Date(NaN);
      }
      const timestamp = date.getTime();
      let time = 0;
      let offset;
      if (dateStrings.time) {
        time = parseTime(dateStrings.time);
        if (isNaN(time)) {
          return /* @__PURE__ */ new Date(NaN);
        }
      }
      if (dateStrings.timezone) {
        offset = parseTimezone(dateStrings.timezone);
        if (isNaN(offset)) {
          return /* @__PURE__ */ new Date(NaN);
        }
      } else {
        const dirtyDate = new Date(timestamp + time);
        const result = /* @__PURE__ */ new Date(0);
        result.setFullYear(
          dirtyDate.getUTCFullYear(),
          dirtyDate.getUTCMonth(),
          dirtyDate.getUTCDate()
        );
        result.setHours(
          dirtyDate.getUTCHours(),
          dirtyDate.getUTCMinutes(),
          dirtyDate.getUTCSeconds(),
          dirtyDate.getUTCMilliseconds()
        );
        return result;
      }
      return new Date(timestamp + time + offset);
    }
    var patterns = {
      dateTimeDelimiter: /[T ]/,
      timeZoneDelimiter: /[Z ]/i,
      timezone: /([Z+-].*)$/
    };
    var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
    var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
    var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
    function splitDateString(dateString) {
      const dateStrings = {};
      const array = dateString.split(patterns.dateTimeDelimiter);
      let timeString;
      if (array.length > 2) {
        return dateStrings;
      }
      if (/:/.test(array[0])) {
        timeString = array[0];
      } else {
        dateStrings.date = array[0];
        timeString = array[1];
        if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
          dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
          timeString = dateString.substr(
            dateStrings.date.length,
            dateString.length
          );
        }
      }
      if (timeString) {
        const token = patterns.timezone.exec(timeString);
        if (token) {
          dateStrings.time = timeString.replace(token[1], "");
          dateStrings.timezone = token[1];
        } else {
          dateStrings.time = timeString;
        }
      }
      return dateStrings;
    }
    function parseYear(dateString, additionalDigits) {
      const regex = new RegExp(
        "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
      );
      const captures = dateString.match(regex);
      if (!captures)
        return { year: NaN, restDateString: "" };
      const year = captures[1] ? parseInt(captures[1]) : null;
      const century = captures[2] ? parseInt(captures[2]) : null;
      return {
        year: century === null ? year : century * 100,
        restDateString: dateString.slice((captures[1] || captures[2]).length)
      };
    }
    function parseDate(dateString, year) {
      if (year === null)
        return /* @__PURE__ */ new Date(NaN);
      const captures = dateString.match(dateRegex);
      if (!captures)
        return /* @__PURE__ */ new Date(NaN);
      const isWeekDate = !!captures[4];
      const dayOfYear = parseDateUnit(captures[1]);
      const month = parseDateUnit(captures[2]) - 1;
      const day = parseDateUnit(captures[3]);
      const week = parseDateUnit(captures[4]);
      const dayOfWeek = parseDateUnit(captures[5]) - 1;
      if (isWeekDate) {
        if (!validateWeekDate(year, week, dayOfWeek)) {
          return /* @__PURE__ */ new Date(NaN);
        }
        return dayOfISOWeekYear(year, week, dayOfWeek);
      } else {
        const date = /* @__PURE__ */ new Date(0);
        if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
          return /* @__PURE__ */ new Date(NaN);
        }
        date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
        return date;
      }
    }
    function parseDateUnit(value) {
      return value ? parseInt(value) : 1;
    }
    function parseTime(timeString) {
      const captures = timeString.match(timeRegex);
      if (!captures)
        return NaN;
      const hours = parseTimeUnit(captures[1]);
      const minutes = parseTimeUnit(captures[2]);
      const seconds = parseTimeUnit(captures[3]);
      if (!validateTime(hours, minutes, seconds)) {
        return NaN;
      }
      return hours * _index.millisecondsInHour + minutes * _index.millisecondsInMinute + seconds * 1e3;
    }
    function parseTimeUnit(value) {
      return value && parseFloat(value.replace(",", ".")) || 0;
    }
    function parseTimezone(timezoneString) {
      if (timezoneString === "Z")
        return 0;
      const captures = timezoneString.match(timezoneRegex);
      if (!captures)
        return 0;
      const sign = captures[1] === "+" ? -1 : 1;
      const hours = parseInt(captures[2]);
      const minutes = captures[3] && parseInt(captures[3]) || 0;
      if (!validateTimezone(hours, minutes)) {
        return NaN;
      }
      return sign * (hours * _index.millisecondsInHour + minutes * _index.millisecondsInMinute);
    }
    function dayOfISOWeekYear(isoWeekYear, week, day) {
      const date = /* @__PURE__ */ new Date(0);
      date.setUTCFullYear(isoWeekYear, 0, 4);
      const fourthOfJanuaryDay = date.getUTCDay() || 7;
      const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
      date.setUTCDate(date.getUTCDate() + diff);
      return date;
    }
    var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    function isLeapYearIndex(year) {
      return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
    }
    function validateDate(year, month, date) {
      return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
    }
    function validateDayOfYearDate(year, dayOfYear) {
      return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
    }
    function validateWeekDate(_year, week, day) {
      return week >= 1 && week <= 53 && day >= 0 && day <= 6;
    }
    function validateTime(hours, minutes, seconds) {
      if (hours === 24) {
        return minutes === 0 && seconds === 0;
      }
      return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
    }
    function validateTimezone(_hours, minutes) {
      return minutes >= 0 && minutes <= 59;
    }
  }
});

// node_modules/date-fns/parseJSON.js
var require_parseJSON = __commonJS({
  "node_modules/date-fns/parseJSON.js"(exports) {
    "use strict";
    exports.parseJSON = parseJSON;
    function parseJSON(dateStr) {
      const parts = dateStr.match(
        /(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/
      );
      if (parts) {
        return new Date(
          Date.UTC(
            +parts[1],
            +parts[2] - 1,
            +parts[3],
            +parts[4] - (+parts[9] || 0) * (parts[8] == "-" ? -1 : 1),
            +parts[5] - (+parts[10] || 0) * (parts[8] == "-" ? -1 : 1),
            +parts[6],
            +((parts[7] || "0") + "00").substring(0, 3)
          )
        );
      }
      return /* @__PURE__ */ new Date(NaN);
    }
  }
});

// node_modules/date-fns/previousDay.js
var require_previousDay = __commonJS({
  "node_modules/date-fns/previousDay.js"(exports) {
    "use strict";
    exports.previousDay = previousDay;
    var _index = require_getDay();
    var _index2 = require_subDays();
    function previousDay(date, day) {
      let delta = (0, _index.getDay)(date) - day;
      if (delta <= 0)
        delta += 7;
      return (0, _index2.subDays)(date, delta);
    }
  }
});

// node_modules/date-fns/previousFriday.js
var require_previousFriday = __commonJS({
  "node_modules/date-fns/previousFriday.js"(exports) {
    "use strict";
    exports.previousFriday = previousFriday;
    var _index = require_previousDay();
    function previousFriday(date) {
      return (0, _index.previousDay)(date, 5);
    }
  }
});

// node_modules/date-fns/previousMonday.js
var require_previousMonday = __commonJS({
  "node_modules/date-fns/previousMonday.js"(exports) {
    "use strict";
    exports.previousMonday = previousMonday;
    var _index = require_previousDay();
    function previousMonday(date) {
      return (0, _index.previousDay)(date, 1);
    }
  }
});

// node_modules/date-fns/previousSaturday.js
var require_previousSaturday = __commonJS({
  "node_modules/date-fns/previousSaturday.js"(exports) {
    "use strict";
    exports.previousSaturday = previousSaturday;
    var _index = require_previousDay();
    function previousSaturday(date) {
      return (0, _index.previousDay)(date, 6);
    }
  }
});

// node_modules/date-fns/previousSunday.js
var require_previousSunday = __commonJS({
  "node_modules/date-fns/previousSunday.js"(exports) {
    "use strict";
    exports.previousSunday = previousSunday;
    var _index = require_previousDay();
    function previousSunday(date) {
      return (0, _index.previousDay)(date, 0);
    }
  }
});

// node_modules/date-fns/previousThursday.js
var require_previousThursday = __commonJS({
  "node_modules/date-fns/previousThursday.js"(exports) {
    "use strict";
    exports.previousThursday = previousThursday;
    var _index = require_previousDay();
    function previousThursday(date) {
      return (0, _index.previousDay)(date, 4);
    }
  }
});

// node_modules/date-fns/previousTuesday.js
var require_previousTuesday = __commonJS({
  "node_modules/date-fns/previousTuesday.js"(exports) {
    "use strict";
    exports.previousTuesday = previousTuesday;
    var _index = require_previousDay();
    function previousTuesday(date) {
      return (0, _index.previousDay)(date, 2);
    }
  }
});

// node_modules/date-fns/previousWednesday.js
var require_previousWednesday = __commonJS({
  "node_modules/date-fns/previousWednesday.js"(exports) {
    "use strict";
    exports.previousWednesday = previousWednesday;
    var _index = require_previousDay();
    function previousWednesday(date) {
      return (0, _index.previousDay)(date, 3);
    }
  }
});

// node_modules/date-fns/quartersToMonths.js
var require_quartersToMonths = __commonJS({
  "node_modules/date-fns/quartersToMonths.js"(exports) {
    "use strict";
    exports.quartersToMonths = quartersToMonths;
    var _index = require_constants();
    function quartersToMonths(quarters) {
      return Math.trunc(quarters * _index.monthsInQuarter);
    }
  }
});

// node_modules/date-fns/quartersToYears.js
var require_quartersToYears = __commonJS({
  "node_modules/date-fns/quartersToYears.js"(exports) {
    "use strict";
    exports.quartersToYears = quartersToYears;
    var _index = require_constants();
    function quartersToYears(quarters) {
      const years = quarters / _index.quartersInYear;
      return Math.trunc(years);
    }
  }
});

// node_modules/date-fns/roundToNearestMinutes.js
var require_roundToNearestMinutes = __commonJS({
  "node_modules/date-fns/roundToNearestMinutes.js"(exports) {
    "use strict";
    exports.roundToNearestMinutes = roundToNearestMinutes;
    var _index = require_getRoundingMethod();
    var _index2 = require_constructFrom();
    var _index3 = require_toDate();
    function roundToNearestMinutes(date, options) {
      const nearestTo = (options == null ? void 0 : options.nearestTo) ?? 1;
      if (nearestTo < 1 || nearestTo > 30)
        return (0, _index2.constructFrom)(date, NaN);
      const _date = (0, _index3.toDate)(date);
      const fractionalSeconds = _date.getSeconds() / 60;
      const fractionalMilliseconds = _date.getMilliseconds() / 1e3 / 60;
      const minutes = _date.getMinutes() + fractionalSeconds + fractionalMilliseconds;
      const method = (options == null ? void 0 : options.roundingMethod) ?? "round";
      const roundingMethod = (0, _index.getRoundingMethod)(method);
      const roundedMinutes = roundingMethod(minutes / nearestTo) * nearestTo;
      const result = (0, _index2.constructFrom)(date, _date);
      result.setMinutes(roundedMinutes, 0, 0);
      return result;
    }
  }
});

// node_modules/date-fns/secondsToHours.js
var require_secondsToHours = __commonJS({
  "node_modules/date-fns/secondsToHours.js"(exports) {
    "use strict";
    exports.secondsToHours = secondsToHours;
    var _index = require_constants();
    function secondsToHours(seconds) {
      const hours = seconds / _index.secondsInHour;
      return Math.trunc(hours);
    }
  }
});

// node_modules/date-fns/secondsToMilliseconds.js
var require_secondsToMilliseconds = __commonJS({
  "node_modules/date-fns/secondsToMilliseconds.js"(exports) {
    "use strict";
    exports.secondsToMilliseconds = secondsToMilliseconds;
    var _index = require_constants();
    function secondsToMilliseconds(seconds) {
      return seconds * _index.millisecondsInSecond;
    }
  }
});

// node_modules/date-fns/secondsToMinutes.js
var require_secondsToMinutes = __commonJS({
  "node_modules/date-fns/secondsToMinutes.js"(exports) {
    "use strict";
    exports.secondsToMinutes = secondsToMinutes;
    var _index = require_constants();
    function secondsToMinutes(seconds) {
      const minutes = seconds / _index.secondsInMinute;
      return Math.trunc(minutes);
    }
  }
});

// node_modules/date-fns/setMonth.js
var require_setMonth = __commonJS({
  "node_modules/date-fns/setMonth.js"(exports) {
    "use strict";
    exports.setMonth = setMonth;
    var _index = require_constructFrom();
    var _index2 = require_getDaysInMonth();
    var _index3 = require_toDate();
    function setMonth(date, month) {
      const _date = (0, _index3.toDate)(date);
      const year = _date.getFullYear();
      const day = _date.getDate();
      const dateWithDesiredMonth = (0, _index.constructFrom)(date, 0);
      dateWithDesiredMonth.setFullYear(year, month, 15);
      dateWithDesiredMonth.setHours(0, 0, 0, 0);
      const daysInMonth = (0, _index2.getDaysInMonth)(dateWithDesiredMonth);
      _date.setMonth(month, Math.min(day, daysInMonth));
      return _date;
    }
  }
});

// node_modules/date-fns/set.js
var require_set = __commonJS({
  "node_modules/date-fns/set.js"(exports) {
    "use strict";
    exports.set = set;
    var _index = require_constructFrom();
    var _index2 = require_setMonth();
    var _index3 = require_toDate();
    function set(date, values) {
      let _date = (0, _index3.toDate)(date);
      if (isNaN(+_date)) {
        return (0, _index.constructFrom)(date, NaN);
      }
      if (values.year != null) {
        _date.setFullYear(values.year);
      }
      if (values.month != null) {
        _date = (0, _index2.setMonth)(_date, values.month);
      }
      if (values.date != null) {
        _date.setDate(values.date);
      }
      if (values.hours != null) {
        _date.setHours(values.hours);
      }
      if (values.minutes != null) {
        _date.setMinutes(values.minutes);
      }
      if (values.seconds != null) {
        _date.setSeconds(values.seconds);
      }
      if (values.milliseconds != null) {
        _date.setMilliseconds(values.milliseconds);
      }
      return _date;
    }
  }
});

// node_modules/date-fns/setDate.js
var require_setDate = __commonJS({
  "node_modules/date-fns/setDate.js"(exports) {
    "use strict";
    exports.setDate = setDate;
    var _index = require_toDate();
    function setDate(date, dayOfMonth) {
      const _date = (0, _index.toDate)(date);
      _date.setDate(dayOfMonth);
      return _date;
    }
  }
});

// node_modules/date-fns/setDayOfYear.js
var require_setDayOfYear = __commonJS({
  "node_modules/date-fns/setDayOfYear.js"(exports) {
    "use strict";
    exports.setDayOfYear = setDayOfYear;
    var _index = require_toDate();
    function setDayOfYear(date, dayOfYear) {
      const _date = (0, _index.toDate)(date);
      _date.setMonth(0);
      _date.setDate(dayOfYear);
      return _date;
    }
  }
});

// node_modules/date-fns/setDefaultOptions.js
var require_setDefaultOptions = __commonJS({
  "node_modules/date-fns/setDefaultOptions.js"(exports) {
    "use strict";
    exports.setDefaultOptions = setDefaultOptions;
    var _index = require_defaultOptions();
    function setDefaultOptions(options) {
      const result = {};
      const defaultOptions = (0, _index.getDefaultOptions)();
      for (const property in defaultOptions) {
        if (Object.prototype.hasOwnProperty.call(defaultOptions, property)) {
          result[property] = defaultOptions[property];
        }
      }
      for (const property in options) {
        if (Object.prototype.hasOwnProperty.call(options, property)) {
          if (options[property] === void 0) {
            delete result[property];
          } else {
            result[property] = options[property];
          }
        }
      }
      (0, _index.setDefaultOptions)(result);
    }
  }
});

// node_modules/date-fns/setHours.js
var require_setHours = __commonJS({
  "node_modules/date-fns/setHours.js"(exports) {
    "use strict";
    exports.setHours = setHours;
    var _index = require_toDate();
    function setHours(date, hours) {
      const _date = (0, _index.toDate)(date);
      _date.setHours(hours);
      return _date;
    }
  }
});

// node_modules/date-fns/setMilliseconds.js
var require_setMilliseconds = __commonJS({
  "node_modules/date-fns/setMilliseconds.js"(exports) {
    "use strict";
    exports.setMilliseconds = setMilliseconds;
    var _index = require_toDate();
    function setMilliseconds(date, milliseconds) {
      const _date = (0, _index.toDate)(date);
      _date.setMilliseconds(milliseconds);
      return _date;
    }
  }
});

// node_modules/date-fns/setMinutes.js
var require_setMinutes = __commonJS({
  "node_modules/date-fns/setMinutes.js"(exports) {
    "use strict";
    exports.setMinutes = setMinutes;
    var _index = require_toDate();
    function setMinutes(date, minutes) {
      const _date = (0, _index.toDate)(date);
      _date.setMinutes(minutes);
      return _date;
    }
  }
});

// node_modules/date-fns/setQuarter.js
var require_setQuarter = __commonJS({
  "node_modules/date-fns/setQuarter.js"(exports) {
    "use strict";
    exports.setQuarter = setQuarter;
    var _index = require_setMonth();
    var _index2 = require_toDate();
    function setQuarter(date, quarter) {
      const _date = (0, _index2.toDate)(date);
      const oldQuarter = Math.trunc(_date.getMonth() / 3) + 1;
      const diff = quarter - oldQuarter;
      return (0, _index.setMonth)(_date, _date.getMonth() + diff * 3);
    }
  }
});

// node_modules/date-fns/setSeconds.js
var require_setSeconds = __commonJS({
  "node_modules/date-fns/setSeconds.js"(exports) {
    "use strict";
    exports.setSeconds = setSeconds;
    var _index = require_toDate();
    function setSeconds(date, seconds) {
      const _date = (0, _index.toDate)(date);
      _date.setSeconds(seconds);
      return _date;
    }
  }
});

// node_modules/date-fns/setWeekYear.js
var require_setWeekYear = __commonJS({
  "node_modules/date-fns/setWeekYear.js"(exports) {
    "use strict";
    exports.setWeekYear = setWeekYear;
    var _index = require_constructFrom();
    var _index2 = require_differenceInCalendarDays();
    var _index3 = require_startOfWeekYear();
    var _index4 = require_toDate();
    var _index5 = require_defaultOptions();
    function setWeekYear(date, weekYear, options) {
      var _a, _b, _c, _d;
      const defaultOptions = (0, _index5.getDefaultOptions)();
      const firstWeekContainsDate = (options == null ? void 0 : options.firstWeekContainsDate) ?? ((_b = (_a = options == null ? void 0 : options.locale) == null ? void 0 : _a.options) == null ? void 0 : _b.firstWeekContainsDate) ?? defaultOptions.firstWeekContainsDate ?? ((_d = (_c = defaultOptions.locale) == null ? void 0 : _c.options) == null ? void 0 : _d.firstWeekContainsDate) ?? 1;
      let _date = (0, _index4.toDate)(date);
      const diff = (0, _index2.differenceInCalendarDays)(
        _date,
        (0, _index3.startOfWeekYear)(_date, options)
      );
      const firstWeek = (0, _index.constructFrom)(date, 0);
      firstWeek.setFullYear(weekYear, 0, firstWeekContainsDate);
      firstWeek.setHours(0, 0, 0, 0);
      _date = (0, _index3.startOfWeekYear)(firstWeek, options);
      _date.setDate(_date.getDate() + diff);
      return _date;
    }
  }
});

// node_modules/date-fns/setYear.js
var require_setYear = __commonJS({
  "node_modules/date-fns/setYear.js"(exports) {
    "use strict";
    exports.setYear = setYear;
    var _index = require_constructFrom();
    var _index2 = require_toDate();
    function setYear(date, year) {
      const _date = (0, _index2.toDate)(date);
      if (isNaN(+_date)) {
        return (0, _index.constructFrom)(date, NaN);
      }
      _date.setFullYear(year);
      return _date;
    }
  }
});

// node_modules/date-fns/startOfDecade.js
var require_startOfDecade = __commonJS({
  "node_modules/date-fns/startOfDecade.js"(exports) {
    "use strict";
    exports.startOfDecade = startOfDecade;
    var _index = require_toDate();
    function startOfDecade(date) {
      const _date = (0, _index.toDate)(date);
      const year = _date.getFullYear();
      const decade = Math.floor(year / 10) * 10;
      _date.setFullYear(decade, 0, 1);
      _date.setHours(0, 0, 0, 0);
      return _date;
    }
  }
});

// node_modules/date-fns/startOfToday.js
var require_startOfToday = __commonJS({
  "node_modules/date-fns/startOfToday.js"(exports) {
    "use strict";
    exports.startOfToday = startOfToday;
    var _index = require_startOfDay();
    function startOfToday() {
      return (0, _index.startOfDay)(Date.now());
    }
  }
});

// node_modules/date-fns/startOfTomorrow.js
var require_startOfTomorrow = __commonJS({
  "node_modules/date-fns/startOfTomorrow.js"(exports) {
    "use strict";
    exports.startOfTomorrow = startOfTomorrow;
    function startOfTomorrow() {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const date = /* @__PURE__ */ new Date(0);
      date.setFullYear(year, month, day + 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
  }
});

// node_modules/date-fns/startOfYesterday.js
var require_startOfYesterday = __commonJS({
  "node_modules/date-fns/startOfYesterday.js"(exports) {
    "use strict";
    exports.startOfYesterday = startOfYesterday;
    function startOfYesterday() {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = now.getMonth();
      const day = now.getDate();
      const date = /* @__PURE__ */ new Date(0);
      date.setFullYear(year, month, day - 1);
      date.setHours(0, 0, 0, 0);
      return date;
    }
  }
});

// node_modules/date-fns/subMonths.js
var require_subMonths = __commonJS({
  "node_modules/date-fns/subMonths.js"(exports) {
    "use strict";
    exports.subMonths = subMonths;
    var _index = require_addMonths();
    function subMonths(date, amount) {
      return (0, _index.addMonths)(date, -amount);
    }
  }
});

// node_modules/date-fns/sub.js
var require_sub = __commonJS({
  "node_modules/date-fns/sub.js"(exports) {
    "use strict";
    exports.sub = sub;
    var _index = require_subDays();
    var _index2 = require_subMonths();
    var _index3 = require_constructFrom();
    function sub(date, duration) {
      const {
        years = 0,
        months = 0,
        weeks = 0,
        days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
      } = duration;
      const dateWithoutMonths = (0, _index2.subMonths)(date, months + years * 12);
      const dateWithoutDays = (0, _index.subDays)(
        dateWithoutMonths,
        days + weeks * 7
      );
      const minutestoSub = minutes + hours * 60;
      const secondstoSub = seconds + minutestoSub * 60;
      const mstoSub = secondstoSub * 1e3;
      const finalDate = (0, _index3.constructFrom)(
        date,
        dateWithoutDays.getTime() - mstoSub
      );
      return finalDate;
    }
  }
});

// node_modules/date-fns/subBusinessDays.js
var require_subBusinessDays = __commonJS({
  "node_modules/date-fns/subBusinessDays.js"(exports) {
    "use strict";
    exports.subBusinessDays = subBusinessDays;
    var _index = require_addBusinessDays();
    function subBusinessDays(date, amount) {
      return (0, _index.addBusinessDays)(date, -amount);
    }
  }
});

// node_modules/date-fns/subHours.js
var require_subHours = __commonJS({
  "node_modules/date-fns/subHours.js"(exports) {
    "use strict";
    exports.subHours = subHours;
    var _index = require_addHours();
    function subHours(date, amount) {
      return (0, _index.addHours)(date, -amount);
    }
  }
});

// node_modules/date-fns/subMilliseconds.js
var require_subMilliseconds = __commonJS({
  "node_modules/date-fns/subMilliseconds.js"(exports) {
    "use strict";
    exports.subMilliseconds = subMilliseconds;
    var _index = require_addMilliseconds();
    function subMilliseconds(date, amount) {
      return (0, _index.addMilliseconds)(date, -amount);
    }
  }
});

// node_modules/date-fns/subMinutes.js
var require_subMinutes = __commonJS({
  "node_modules/date-fns/subMinutes.js"(exports) {
    "use strict";
    exports.subMinutes = subMinutes;
    var _index = require_addMinutes();
    function subMinutes(date, amount) {
      return (0, _index.addMinutes)(date, -amount);
    }
  }
});

// node_modules/date-fns/subQuarters.js
var require_subQuarters = __commonJS({
  "node_modules/date-fns/subQuarters.js"(exports) {
    "use strict";
    exports.subQuarters = subQuarters;
    var _index = require_addQuarters();
    function subQuarters(date, amount) {
      return (0, _index.addQuarters)(date, -amount);
    }
  }
});

// node_modules/date-fns/subSeconds.js
var require_subSeconds = __commonJS({
  "node_modules/date-fns/subSeconds.js"(exports) {
    "use strict";
    exports.subSeconds = subSeconds;
    var _index = require_addSeconds();
    function subSeconds(date, amount) {
      return (0, _index.addSeconds)(date, -amount);
    }
  }
});

// node_modules/date-fns/subWeeks.js
var require_subWeeks = __commonJS({
  "node_modules/date-fns/subWeeks.js"(exports) {
    "use strict";
    exports.subWeeks = subWeeks;
    var _index = require_addWeeks();
    function subWeeks(date, amount) {
      return (0, _index.addWeeks)(date, -amount);
    }
  }
});

// node_modules/date-fns/subYears.js
var require_subYears = __commonJS({
  "node_modules/date-fns/subYears.js"(exports) {
    "use strict";
    exports.subYears = subYears;
    var _index = require_addYears();
    function subYears(date, amount) {
      return (0, _index.addYears)(date, -amount);
    }
  }
});

// node_modules/date-fns/weeksToDays.js
var require_weeksToDays = __commonJS({
  "node_modules/date-fns/weeksToDays.js"(exports) {
    "use strict";
    exports.weeksToDays = weeksToDays;
    var _index = require_constants();
    function weeksToDays(weeks) {
      return Math.trunc(weeks * _index.daysInWeek);
    }
  }
});

// node_modules/date-fns/yearsToDays.js
var require_yearsToDays = __commonJS({
  "node_modules/date-fns/yearsToDays.js"(exports) {
    "use strict";
    exports.yearsToDays = yearsToDays;
    var _index = require_constants();
    function yearsToDays(years) {
      return Math.trunc(years * _index.daysInYear);
    }
  }
});

// node_modules/date-fns/yearsToMonths.js
var require_yearsToMonths = __commonJS({
  "node_modules/date-fns/yearsToMonths.js"(exports) {
    "use strict";
    exports.yearsToMonths = yearsToMonths;
    var _index = require_constants();
    function yearsToMonths(years) {
      return Math.trunc(years * _index.monthsInYear);
    }
  }
});

// node_modules/date-fns/yearsToQuarters.js
var require_yearsToQuarters = __commonJS({
  "node_modules/date-fns/yearsToQuarters.js"(exports) {
    "use strict";
    exports.yearsToQuarters = yearsToQuarters;
    var _index = require_constants();
    function yearsToQuarters(years) {
      return Math.trunc(years * _index.quartersInYear);
    }
  }
});

// node_modules/date-fns/index.js
var require_date_fns = __commonJS({
  "node_modules/date-fns/index.js"(exports) {
    "use strict";
    var _index = require_add();
    Object.keys(_index).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index[key];
        }
      });
    });
    var _index2 = require_addBusinessDays();
    Object.keys(_index2).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index2[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index2[key];
        }
      });
    });
    var _index3 = require_addDays();
    Object.keys(_index3).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index3[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index3[key];
        }
      });
    });
    var _index4 = require_addHours();
    Object.keys(_index4).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index4[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index4[key];
        }
      });
    });
    var _index5 = require_addISOWeekYears();
    Object.keys(_index5).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index5[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index5[key];
        }
      });
    });
    var _index6 = require_addMilliseconds();
    Object.keys(_index6).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index6[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index6[key];
        }
      });
    });
    var _index7 = require_addMinutes();
    Object.keys(_index7).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index7[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index7[key];
        }
      });
    });
    var _index8 = require_addMonths();
    Object.keys(_index8).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index8[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index8[key];
        }
      });
    });
    var _index9 = require_addQuarters();
    Object.keys(_index9).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index9[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index9[key];
        }
      });
    });
    var _index10 = require_addSeconds();
    Object.keys(_index10).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index10[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index10[key];
        }
      });
    });
    var _index11 = require_addWeeks();
    Object.keys(_index11).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index11[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index11[key];
        }
      });
    });
    var _index12 = require_addYears();
    Object.keys(_index12).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index12[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index12[key];
        }
      });
    });
    var _index13 = require_areIntervalsOverlapping();
    Object.keys(_index13).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index13[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index13[key];
        }
      });
    });
    var _index14 = require_clamp();
    Object.keys(_index14).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index14[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index14[key];
        }
      });
    });
    var _index15 = require_closestIndexTo();
    Object.keys(_index15).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index15[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index15[key];
        }
      });
    });
    var _index16 = require_closestTo();
    Object.keys(_index16).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index16[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index16[key];
        }
      });
    });
    var _index17 = require_compareAsc();
    Object.keys(_index17).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index17[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index17[key];
        }
      });
    });
    var _index18 = require_compareDesc();
    Object.keys(_index18).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index18[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index18[key];
        }
      });
    });
    var _index19 = require_constructFrom();
    Object.keys(_index19).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index19[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index19[key];
        }
      });
    });
    var _index20 = require_daysToWeeks();
    Object.keys(_index20).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index20[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index20[key];
        }
      });
    });
    var _index21 = require_differenceInBusinessDays();
    Object.keys(_index21).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index21[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index21[key];
        }
      });
    });
    var _index22 = require_differenceInCalendarDays();
    Object.keys(_index22).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index22[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index22[key];
        }
      });
    });
    var _index23 = require_differenceInCalendarISOWeekYears();
    Object.keys(_index23).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index23[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index23[key];
        }
      });
    });
    var _index24 = require_differenceInCalendarISOWeeks();
    Object.keys(_index24).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index24[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index24[key];
        }
      });
    });
    var _index25 = require_differenceInCalendarMonths();
    Object.keys(_index25).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index25[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index25[key];
        }
      });
    });
    var _index26 = require_differenceInCalendarQuarters();
    Object.keys(_index26).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index26[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index26[key];
        }
      });
    });
    var _index27 = require_differenceInCalendarWeeks();
    Object.keys(_index27).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index27[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index27[key];
        }
      });
    });
    var _index28 = require_differenceInCalendarYears();
    Object.keys(_index28).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index28[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index28[key];
        }
      });
    });
    var _index29 = require_differenceInDays();
    Object.keys(_index29).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index29[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index29[key];
        }
      });
    });
    var _index30 = require_differenceInHours();
    Object.keys(_index30).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index30[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index30[key];
        }
      });
    });
    var _index31 = require_differenceInISOWeekYears();
    Object.keys(_index31).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index31[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index31[key];
        }
      });
    });
    var _index32 = require_differenceInMilliseconds();
    Object.keys(_index32).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index32[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index32[key];
        }
      });
    });
    var _index33 = require_differenceInMinutes();
    Object.keys(_index33).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index33[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index33[key];
        }
      });
    });
    var _index34 = require_differenceInMonths();
    Object.keys(_index34).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index34[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index34[key];
        }
      });
    });
    var _index35 = require_differenceInQuarters();
    Object.keys(_index35).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index35[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index35[key];
        }
      });
    });
    var _index36 = require_differenceInSeconds();
    Object.keys(_index36).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index36[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index36[key];
        }
      });
    });
    var _index37 = require_differenceInWeeks();
    Object.keys(_index37).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index37[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index37[key];
        }
      });
    });
    var _index38 = require_differenceInYears();
    Object.keys(_index38).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index38[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index38[key];
        }
      });
    });
    var _index39 = require_eachDayOfInterval();
    Object.keys(_index39).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index39[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index39[key];
        }
      });
    });
    var _index40 = require_eachHourOfInterval();
    Object.keys(_index40).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index40[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index40[key];
        }
      });
    });
    var _index41 = require_eachMinuteOfInterval();
    Object.keys(_index41).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index41[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index41[key];
        }
      });
    });
    var _index42 = require_eachMonthOfInterval();
    Object.keys(_index42).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index42[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index42[key];
        }
      });
    });
    var _index43 = require_eachQuarterOfInterval();
    Object.keys(_index43).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index43[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index43[key];
        }
      });
    });
    var _index44 = require_eachWeekOfInterval();
    Object.keys(_index44).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index44[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index44[key];
        }
      });
    });
    var _index45 = require_eachWeekendOfInterval();
    Object.keys(_index45).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index45[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index45[key];
        }
      });
    });
    var _index46 = require_eachWeekendOfMonth();
    Object.keys(_index46).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index46[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index46[key];
        }
      });
    });
    var _index47 = require_eachWeekendOfYear();
    Object.keys(_index47).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index47[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index47[key];
        }
      });
    });
    var _index48 = require_eachYearOfInterval();
    Object.keys(_index48).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index48[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index48[key];
        }
      });
    });
    var _index49 = require_endOfDay();
    Object.keys(_index49).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index49[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index49[key];
        }
      });
    });
    var _index50 = require_endOfDecade();
    Object.keys(_index50).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index50[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index50[key];
        }
      });
    });
    var _index51 = require_endOfHour();
    Object.keys(_index51).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index51[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index51[key];
        }
      });
    });
    var _index52 = require_endOfISOWeek();
    Object.keys(_index52).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index52[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index52[key];
        }
      });
    });
    var _index53 = require_endOfISOWeekYear();
    Object.keys(_index53).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index53[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index53[key];
        }
      });
    });
    var _index54 = require_endOfMinute();
    Object.keys(_index54).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index54[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index54[key];
        }
      });
    });
    var _index55 = require_endOfMonth();
    Object.keys(_index55).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index55[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index55[key];
        }
      });
    });
    var _index56 = require_endOfQuarter();
    Object.keys(_index56).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index56[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index56[key];
        }
      });
    });
    var _index57 = require_endOfSecond();
    Object.keys(_index57).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index57[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index57[key];
        }
      });
    });
    var _index58 = require_endOfToday();
    Object.keys(_index58).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index58[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index58[key];
        }
      });
    });
    var _index59 = require_endOfTomorrow();
    Object.keys(_index59).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index59[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index59[key];
        }
      });
    });
    var _index60 = require_endOfWeek();
    Object.keys(_index60).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index60[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index60[key];
        }
      });
    });
    var _index61 = require_endOfYear();
    Object.keys(_index61).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index61[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index61[key];
        }
      });
    });
    var _index62 = require_endOfYesterday();
    Object.keys(_index62).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index62[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index62[key];
        }
      });
    });
    var _index63 = require_format();
    Object.keys(_index63).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index63[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index63[key];
        }
      });
    });
    var _index64 = require_formatDistance2();
    Object.keys(_index64).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index64[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index64[key];
        }
      });
    });
    var _index65 = require_formatDistanceStrict();
    Object.keys(_index65).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index65[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index65[key];
        }
      });
    });
    var _index66 = require_formatDistanceToNow();
    Object.keys(_index66).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index66[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index66[key];
        }
      });
    });
    var _index67 = require_formatDistanceToNowStrict();
    Object.keys(_index67).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index67[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index67[key];
        }
      });
    });
    var _index68 = require_formatDuration();
    Object.keys(_index68).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index68[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index68[key];
        }
      });
    });
    var _index69 = require_formatISO();
    Object.keys(_index69).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index69[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index69[key];
        }
      });
    });
    var _index70 = require_formatISO9075();
    Object.keys(_index70).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index70[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index70[key];
        }
      });
    });
    var _index71 = require_formatISODuration();
    Object.keys(_index71).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index71[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index71[key];
        }
      });
    });
    var _index72 = require_formatRFC3339();
    Object.keys(_index72).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index72[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index72[key];
        }
      });
    });
    var _index73 = require_formatRFC7231();
    Object.keys(_index73).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index73[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index73[key];
        }
      });
    });
    var _index74 = require_formatRelative2();
    Object.keys(_index74).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index74[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index74[key];
        }
      });
    });
    var _index75 = require_fromUnixTime();
    Object.keys(_index75).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index75[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index75[key];
        }
      });
    });
    var _index76 = require_getDate();
    Object.keys(_index76).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index76[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index76[key];
        }
      });
    });
    var _index77 = require_getDay();
    Object.keys(_index77).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index77[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index77[key];
        }
      });
    });
    var _index78 = require_getDayOfYear();
    Object.keys(_index78).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index78[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index78[key];
        }
      });
    });
    var _index79 = require_getDaysInMonth();
    Object.keys(_index79).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index79[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index79[key];
        }
      });
    });
    var _index80 = require_getDaysInYear();
    Object.keys(_index80).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index80[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index80[key];
        }
      });
    });
    var _index81 = require_getDecade();
    Object.keys(_index81).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index81[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index81[key];
        }
      });
    });
    var _index82 = require_getDefaultOptions();
    Object.keys(_index82).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index82[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index82[key];
        }
      });
    });
    var _index83 = require_getHours();
    Object.keys(_index83).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index83[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index83[key];
        }
      });
    });
    var _index84 = require_getISODay();
    Object.keys(_index84).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index84[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index84[key];
        }
      });
    });
    var _index85 = require_getISOWeek();
    Object.keys(_index85).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index85[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index85[key];
        }
      });
    });
    var _index86 = require_getISOWeekYear();
    Object.keys(_index86).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index86[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index86[key];
        }
      });
    });
    var _index87 = require_getISOWeeksInYear();
    Object.keys(_index87).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index87[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index87[key];
        }
      });
    });
    var _index88 = require_getMilliseconds();
    Object.keys(_index88).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index88[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index88[key];
        }
      });
    });
    var _index89 = require_getMinutes();
    Object.keys(_index89).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index89[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index89[key];
        }
      });
    });
    var _index90 = require_getMonth();
    Object.keys(_index90).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index90[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index90[key];
        }
      });
    });
    var _index91 = require_getOverlappingDaysInIntervals();
    Object.keys(_index91).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index91[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index91[key];
        }
      });
    });
    var _index92 = require_getQuarter();
    Object.keys(_index92).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index92[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index92[key];
        }
      });
    });
    var _index93 = require_getSeconds();
    Object.keys(_index93).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index93[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index93[key];
        }
      });
    });
    var _index94 = require_getTime();
    Object.keys(_index94).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index94[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index94[key];
        }
      });
    });
    var _index95 = require_getUnixTime();
    Object.keys(_index95).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index95[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index95[key];
        }
      });
    });
    var _index96 = require_getWeek();
    Object.keys(_index96).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index96[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index96[key];
        }
      });
    });
    var _index97 = require_getWeekOfMonth();
    Object.keys(_index97).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index97[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index97[key];
        }
      });
    });
    var _index98 = require_getWeekYear();
    Object.keys(_index98).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index98[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index98[key];
        }
      });
    });
    var _index99 = require_getWeeksInMonth();
    Object.keys(_index99).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index99[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index99[key];
        }
      });
    });
    var _index100 = require_getYear();
    Object.keys(_index100).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index100[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index100[key];
        }
      });
    });
    var _index101 = require_hoursToMilliseconds();
    Object.keys(_index101).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index101[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index101[key];
        }
      });
    });
    var _index102 = require_hoursToMinutes();
    Object.keys(_index102).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index102[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index102[key];
        }
      });
    });
    var _index103 = require_hoursToSeconds();
    Object.keys(_index103).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index103[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index103[key];
        }
      });
    });
    var _index104 = require_interval();
    Object.keys(_index104).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index104[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index104[key];
        }
      });
    });
    var _index105 = require_intervalToDuration();
    Object.keys(_index105).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index105[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index105[key];
        }
      });
    });
    var _index106 = require_intlFormat();
    Object.keys(_index106).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index106[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index106[key];
        }
      });
    });
    var _index107 = require_intlFormatDistance();
    Object.keys(_index107).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index107[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index107[key];
        }
      });
    });
    var _index108 = require_isAfter();
    Object.keys(_index108).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index108[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index108[key];
        }
      });
    });
    var _index109 = require_isBefore();
    Object.keys(_index109).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index109[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index109[key];
        }
      });
    });
    var _index110 = require_isDate();
    Object.keys(_index110).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index110[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index110[key];
        }
      });
    });
    var _index111 = require_isEqual();
    Object.keys(_index111).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index111[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index111[key];
        }
      });
    });
    var _index112 = require_isExists();
    Object.keys(_index112).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index112[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index112[key];
        }
      });
    });
    var _index113 = require_isFirstDayOfMonth();
    Object.keys(_index113).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index113[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index113[key];
        }
      });
    });
    var _index114 = require_isFriday();
    Object.keys(_index114).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index114[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index114[key];
        }
      });
    });
    var _index115 = require_isFuture();
    Object.keys(_index115).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index115[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index115[key];
        }
      });
    });
    var _index116 = require_isLastDayOfMonth();
    Object.keys(_index116).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index116[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index116[key];
        }
      });
    });
    var _index117 = require_isLeapYear();
    Object.keys(_index117).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index117[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index117[key];
        }
      });
    });
    var _index118 = require_isMatch();
    Object.keys(_index118).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index118[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index118[key];
        }
      });
    });
    var _index119 = require_isMonday();
    Object.keys(_index119).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index119[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index119[key];
        }
      });
    });
    var _index120 = require_isPast();
    Object.keys(_index120).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index120[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index120[key];
        }
      });
    });
    var _index121 = require_isSameDay();
    Object.keys(_index121).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index121[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index121[key];
        }
      });
    });
    var _index122 = require_isSameHour();
    Object.keys(_index122).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index122[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index122[key];
        }
      });
    });
    var _index123 = require_isSameISOWeek();
    Object.keys(_index123).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index123[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index123[key];
        }
      });
    });
    var _index124 = require_isSameISOWeekYear();
    Object.keys(_index124).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index124[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index124[key];
        }
      });
    });
    var _index125 = require_isSameMinute();
    Object.keys(_index125).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index125[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index125[key];
        }
      });
    });
    var _index126 = require_isSameMonth();
    Object.keys(_index126).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index126[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index126[key];
        }
      });
    });
    var _index127 = require_isSameQuarter();
    Object.keys(_index127).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index127[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index127[key];
        }
      });
    });
    var _index128 = require_isSameSecond();
    Object.keys(_index128).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index128[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index128[key];
        }
      });
    });
    var _index129 = require_isSameWeek();
    Object.keys(_index129).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index129[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index129[key];
        }
      });
    });
    var _index130 = require_isSameYear();
    Object.keys(_index130).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index130[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index130[key];
        }
      });
    });
    var _index131 = require_isSaturday();
    Object.keys(_index131).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index131[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index131[key];
        }
      });
    });
    var _index132 = require_isSunday();
    Object.keys(_index132).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index132[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index132[key];
        }
      });
    });
    var _index133 = require_isThisHour();
    Object.keys(_index133).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index133[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index133[key];
        }
      });
    });
    var _index134 = require_isThisISOWeek();
    Object.keys(_index134).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index134[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index134[key];
        }
      });
    });
    var _index135 = require_isThisMinute();
    Object.keys(_index135).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index135[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index135[key];
        }
      });
    });
    var _index136 = require_isThisMonth();
    Object.keys(_index136).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index136[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index136[key];
        }
      });
    });
    var _index137 = require_isThisQuarter();
    Object.keys(_index137).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index137[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index137[key];
        }
      });
    });
    var _index138 = require_isThisSecond();
    Object.keys(_index138).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index138[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index138[key];
        }
      });
    });
    var _index139 = require_isThisWeek();
    Object.keys(_index139).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index139[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index139[key];
        }
      });
    });
    var _index140 = require_isThisYear();
    Object.keys(_index140).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index140[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index140[key];
        }
      });
    });
    var _index141 = require_isThursday();
    Object.keys(_index141).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index141[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index141[key];
        }
      });
    });
    var _index142 = require_isToday();
    Object.keys(_index142).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index142[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index142[key];
        }
      });
    });
    var _index143 = require_isTomorrow();
    Object.keys(_index143).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index143[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index143[key];
        }
      });
    });
    var _index144 = require_isTuesday();
    Object.keys(_index144).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index144[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index144[key];
        }
      });
    });
    var _index145 = require_isValid();
    Object.keys(_index145).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index145[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index145[key];
        }
      });
    });
    var _index146 = require_isWednesday();
    Object.keys(_index146).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index146[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index146[key];
        }
      });
    });
    var _index147 = require_isWeekend();
    Object.keys(_index147).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index147[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index147[key];
        }
      });
    });
    var _index148 = require_isWithinInterval();
    Object.keys(_index148).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index148[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index148[key];
        }
      });
    });
    var _index149 = require_isYesterday();
    Object.keys(_index149).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index149[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index149[key];
        }
      });
    });
    var _index150 = require_lastDayOfDecade();
    Object.keys(_index150).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index150[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index150[key];
        }
      });
    });
    var _index151 = require_lastDayOfISOWeek();
    Object.keys(_index151).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index151[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index151[key];
        }
      });
    });
    var _index152 = require_lastDayOfISOWeekYear();
    Object.keys(_index152).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index152[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index152[key];
        }
      });
    });
    var _index153 = require_lastDayOfMonth();
    Object.keys(_index153).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index153[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index153[key];
        }
      });
    });
    var _index154 = require_lastDayOfQuarter();
    Object.keys(_index154).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index154[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index154[key];
        }
      });
    });
    var _index155 = require_lastDayOfWeek();
    Object.keys(_index155).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index155[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index155[key];
        }
      });
    });
    var _index156 = require_lastDayOfYear();
    Object.keys(_index156).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index156[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index156[key];
        }
      });
    });
    var _index157 = require_lightFormat();
    Object.keys(_index157).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index157[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index157[key];
        }
      });
    });
    var _index158 = require_max();
    Object.keys(_index158).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index158[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index158[key];
        }
      });
    });
    var _index159 = require_milliseconds();
    Object.keys(_index159).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index159[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index159[key];
        }
      });
    });
    var _index160 = require_millisecondsToHours();
    Object.keys(_index160).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index160[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index160[key];
        }
      });
    });
    var _index161 = require_millisecondsToMinutes();
    Object.keys(_index161).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index161[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index161[key];
        }
      });
    });
    var _index162 = require_millisecondsToSeconds();
    Object.keys(_index162).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index162[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index162[key];
        }
      });
    });
    var _index163 = require_min();
    Object.keys(_index163).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index163[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index163[key];
        }
      });
    });
    var _index164 = require_minutesToHours();
    Object.keys(_index164).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index164[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index164[key];
        }
      });
    });
    var _index165 = require_minutesToMilliseconds();
    Object.keys(_index165).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index165[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index165[key];
        }
      });
    });
    var _index166 = require_minutesToSeconds();
    Object.keys(_index166).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index166[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index166[key];
        }
      });
    });
    var _index167 = require_monthsToQuarters();
    Object.keys(_index167).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index167[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index167[key];
        }
      });
    });
    var _index168 = require_monthsToYears();
    Object.keys(_index168).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index168[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index168[key];
        }
      });
    });
    var _index169 = require_nextDay();
    Object.keys(_index169).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index169[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index169[key];
        }
      });
    });
    var _index170 = require_nextFriday();
    Object.keys(_index170).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index170[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index170[key];
        }
      });
    });
    var _index171 = require_nextMonday();
    Object.keys(_index171).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index171[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index171[key];
        }
      });
    });
    var _index172 = require_nextSaturday();
    Object.keys(_index172).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index172[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index172[key];
        }
      });
    });
    var _index173 = require_nextSunday();
    Object.keys(_index173).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index173[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index173[key];
        }
      });
    });
    var _index174 = require_nextThursday();
    Object.keys(_index174).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index174[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index174[key];
        }
      });
    });
    var _index175 = require_nextTuesday();
    Object.keys(_index175).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index175[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index175[key];
        }
      });
    });
    var _index176 = require_nextWednesday();
    Object.keys(_index176).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index176[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index176[key];
        }
      });
    });
    var _index177 = require_parse();
    Object.keys(_index177).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index177[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index177[key];
        }
      });
    });
    var _index178 = require_parseISO();
    Object.keys(_index178).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index178[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index178[key];
        }
      });
    });
    var _index179 = require_parseJSON();
    Object.keys(_index179).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index179[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index179[key];
        }
      });
    });
    var _index180 = require_previousDay();
    Object.keys(_index180).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index180[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index180[key];
        }
      });
    });
    var _index181 = require_previousFriday();
    Object.keys(_index181).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index181[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index181[key];
        }
      });
    });
    var _index182 = require_previousMonday();
    Object.keys(_index182).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index182[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index182[key];
        }
      });
    });
    var _index183 = require_previousSaturday();
    Object.keys(_index183).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index183[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index183[key];
        }
      });
    });
    var _index184 = require_previousSunday();
    Object.keys(_index184).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index184[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index184[key];
        }
      });
    });
    var _index185 = require_previousThursday();
    Object.keys(_index185).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index185[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index185[key];
        }
      });
    });
    var _index186 = require_previousTuesday();
    Object.keys(_index186).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index186[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index186[key];
        }
      });
    });
    var _index187 = require_previousWednesday();
    Object.keys(_index187).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index187[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index187[key];
        }
      });
    });
    var _index188 = require_quartersToMonths();
    Object.keys(_index188).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index188[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index188[key];
        }
      });
    });
    var _index189 = require_quartersToYears();
    Object.keys(_index189).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index189[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index189[key];
        }
      });
    });
    var _index190 = require_roundToNearestMinutes();
    Object.keys(_index190).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index190[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index190[key];
        }
      });
    });
    var _index191 = require_secondsToHours();
    Object.keys(_index191).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index191[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index191[key];
        }
      });
    });
    var _index192 = require_secondsToMilliseconds();
    Object.keys(_index192).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index192[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index192[key];
        }
      });
    });
    var _index193 = require_secondsToMinutes();
    Object.keys(_index193).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index193[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index193[key];
        }
      });
    });
    var _index194 = require_set();
    Object.keys(_index194).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index194[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index194[key];
        }
      });
    });
    var _index195 = require_setDate();
    Object.keys(_index195).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index195[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index195[key];
        }
      });
    });
    var _index196 = require_setDay();
    Object.keys(_index196).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index196[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index196[key];
        }
      });
    });
    var _index197 = require_setDayOfYear();
    Object.keys(_index197).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index197[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index197[key];
        }
      });
    });
    var _index198 = require_setDefaultOptions();
    Object.keys(_index198).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index198[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index198[key];
        }
      });
    });
    var _index199 = require_setHours();
    Object.keys(_index199).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index199[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index199[key];
        }
      });
    });
    var _index200 = require_setISODay();
    Object.keys(_index200).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index200[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index200[key];
        }
      });
    });
    var _index201 = require_setISOWeek();
    Object.keys(_index201).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index201[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index201[key];
        }
      });
    });
    var _index202 = require_setISOWeekYear();
    Object.keys(_index202).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index202[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index202[key];
        }
      });
    });
    var _index203 = require_setMilliseconds();
    Object.keys(_index203).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index203[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index203[key];
        }
      });
    });
    var _index204 = require_setMinutes();
    Object.keys(_index204).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index204[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index204[key];
        }
      });
    });
    var _index205 = require_setMonth();
    Object.keys(_index205).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index205[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index205[key];
        }
      });
    });
    var _index206 = require_setQuarter();
    Object.keys(_index206).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index206[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index206[key];
        }
      });
    });
    var _index207 = require_setSeconds();
    Object.keys(_index207).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index207[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index207[key];
        }
      });
    });
    var _index208 = require_setWeek();
    Object.keys(_index208).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index208[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index208[key];
        }
      });
    });
    var _index209 = require_setWeekYear();
    Object.keys(_index209).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index209[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index209[key];
        }
      });
    });
    var _index210 = require_setYear();
    Object.keys(_index210).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index210[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index210[key];
        }
      });
    });
    var _index211 = require_startOfDay();
    Object.keys(_index211).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index211[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index211[key];
        }
      });
    });
    var _index212 = require_startOfDecade();
    Object.keys(_index212).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index212[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index212[key];
        }
      });
    });
    var _index213 = require_startOfHour();
    Object.keys(_index213).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index213[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index213[key];
        }
      });
    });
    var _index214 = require_startOfISOWeek();
    Object.keys(_index214).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index214[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index214[key];
        }
      });
    });
    var _index215 = require_startOfISOWeekYear();
    Object.keys(_index215).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index215[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index215[key];
        }
      });
    });
    var _index216 = require_startOfMinute();
    Object.keys(_index216).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index216[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index216[key];
        }
      });
    });
    var _index217 = require_startOfMonth();
    Object.keys(_index217).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index217[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index217[key];
        }
      });
    });
    var _index218 = require_startOfQuarter();
    Object.keys(_index218).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index218[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index218[key];
        }
      });
    });
    var _index219 = require_startOfSecond();
    Object.keys(_index219).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index219[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index219[key];
        }
      });
    });
    var _index220 = require_startOfToday();
    Object.keys(_index220).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index220[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index220[key];
        }
      });
    });
    var _index221 = require_startOfTomorrow();
    Object.keys(_index221).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index221[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index221[key];
        }
      });
    });
    var _index222 = require_startOfWeek();
    Object.keys(_index222).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index222[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index222[key];
        }
      });
    });
    var _index223 = require_startOfWeekYear();
    Object.keys(_index223).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index223[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index223[key];
        }
      });
    });
    var _index224 = require_startOfYear();
    Object.keys(_index224).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index224[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index224[key];
        }
      });
    });
    var _index225 = require_startOfYesterday();
    Object.keys(_index225).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index225[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index225[key];
        }
      });
    });
    var _index226 = require_sub();
    Object.keys(_index226).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index226[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index226[key];
        }
      });
    });
    var _index227 = require_subBusinessDays();
    Object.keys(_index227).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index227[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index227[key];
        }
      });
    });
    var _index228 = require_subDays();
    Object.keys(_index228).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index228[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index228[key];
        }
      });
    });
    var _index229 = require_subHours();
    Object.keys(_index229).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index229[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index229[key];
        }
      });
    });
    var _index230 = require_subISOWeekYears();
    Object.keys(_index230).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index230[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index230[key];
        }
      });
    });
    var _index231 = require_subMilliseconds();
    Object.keys(_index231).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index231[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index231[key];
        }
      });
    });
    var _index232 = require_subMinutes();
    Object.keys(_index232).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index232[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index232[key];
        }
      });
    });
    var _index233 = require_subMonths();
    Object.keys(_index233).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index233[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index233[key];
        }
      });
    });
    var _index234 = require_subQuarters();
    Object.keys(_index234).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index234[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index234[key];
        }
      });
    });
    var _index235 = require_subSeconds();
    Object.keys(_index235).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index235[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index235[key];
        }
      });
    });
    var _index236 = require_subWeeks();
    Object.keys(_index236).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index236[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index236[key];
        }
      });
    });
    var _index237 = require_subYears();
    Object.keys(_index237).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index237[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index237[key];
        }
      });
    });
    var _index238 = require_toDate();
    Object.keys(_index238).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index238[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index238[key];
        }
      });
    });
    var _index239 = require_transpose();
    Object.keys(_index239).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index239[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index239[key];
        }
      });
    });
    var _index240 = require_weeksToDays();
    Object.keys(_index240).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index240[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index240[key];
        }
      });
    });
    var _index241 = require_yearsToDays();
    Object.keys(_index241).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index241[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index241[key];
        }
      });
    });
    var _index242 = require_yearsToMonths();
    Object.keys(_index242).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index242[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index242[key];
        }
      });
    });
    var _index243 = require_yearsToQuarters();
    Object.keys(_index243).forEach(function(key) {
      if (key === "default" || key === "__esModule")
        return;
      if (key in exports && exports[key] === _index243[key])
        return;
      Object.defineProperty(exports, key, {
        enumerable: true,
        get: function() {
          return _index243[key];
        }
      });
    });
  }
});

// node_modules/react-activity-calendar/build/index.js
var require_build = __commonJS({
  "node_modules/react-activity-calendar/build/index.js"(exports) {
    "use client";
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var chroma = require_chroma();
    var dateFns = require_date_fns();
    var React = require_react();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var chroma__default = _interopDefault(chroma);
    var React__default = _interopDefault(React);
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var NAMESPACE = "react-activity-calendar";
    var LABEL_MARGIN = 8;
    var DEFAULT_MONTH_LABELS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var DEFAULT_LABELS = {
      months: DEFAULT_MONTH_LABELS,
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      totalCount: "{{count}} activities in {{year}}",
      legend: {
        less: "Less",
        more: "More"
      }
    };
    function useColorScheme() {
      const [colorScheme, setColorScheme] = React.useState("light");
      const onChange = (event) => setColorScheme(event.matches ? "dark" : "light");
      React.useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setColorScheme(mediaQuery.matches ? "dark" : "light");
        mediaQuery.addEventListener("change", onChange);
        return () => {
          mediaQuery.removeEventListener("change", onChange);
        };
      }, []);
      return colorScheme;
    }
    var query = "(prefers-reduced-motion: reduce)";
    function usePrefersReducedMotion() {
      const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(true);
      React.useEffect(() => {
        const mediaQuery = window.matchMedia(query);
        setPrefersReducedMotion(mediaQuery.matches);
        const onChange = (event) => {
          setPrefersReducedMotion(event.matches);
        };
        mediaQuery.addEventListener("change", onChange);
        return () => {
          mediaQuery.removeEventListener("change", onChange);
        };
      }, []);
      return prefersReducedMotion;
    }
    function styleInject(css, ref) {
      if (ref === void 0)
        ref = {};
      var insertAt = ref.insertAt;
      if (!css || typeof document === "undefined") {
        return;
      }
      var head = document.head || document.getElementsByTagName("head")[0];
      var style = document.createElement("style");
      style.type = "text/css";
      if (insertAt === "top") {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }
    var css_248z = ".styles-module_container__GBNxC {\n  width: max-content; /* Calendar should not grow */\n  max-width: 100%; /* Do not remove - flexbox parents */\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.styles-module_container__GBNxC rect {\n  stroke: rgba(0, 0, 0, 0.08);\n  stroke-width: 1px;\n  shape-rendering: geometricPrecision;\n}\n\n@media (prefers-color-scheme: dark) {\n  .styles-module_container__GBNxC rect {\n    stroke: rgba(255, 255, 255, 0.04);\n  }\n}\n\n.styles-module_scrollContainer__-bJC8 {\n  max-width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n\n.styles-module_calendar__sT1ND {\n  display: block; /* SVGs are inline-block by default */\n  overflow: visible; /* Weekday labels are rendered left of the container */\n}\n\n.styles-module_calendar__sT1ND text {\n  fill: currentColor;\n}\n\n.styles-module_footer__ZQ-Bl {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px 16px;\n  white-space: nowrap;\n}\n\n.styles-module_legendColors__kFY2e {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n@keyframes styles-module_loadingAnimation__V0w3h {\n  0% {\n    fill: var(--react-activity-calendar-loading);\n  }\n  50% {\n    fill: var(--react-activity-calendar-loading-active);\n  }\n  100% {\n    fill: var(--react-activity-calendar-loading);\n  }\n}\n";
    var styles = { "container": "styles-module_container__GBNxC", "scrollContainer": "styles-module_scrollContainer__-bJC8", "calendar": "styles-module_calendar__sT1ND", "footer": "styles-module_footer__ZQ-Bl", "legendColors": "styles-module_legendColors__kFY2e", "loadingAnimation": "styles-module_loadingAnimation__V0w3h" };
    styleInject(css_248z);
    function groupByWeeks(activities, weekStart = 0) {
      if (activities.length === 0) {
        return [];
      }
      const normalizedActivities = fillHoles(activities);
      const firstDate = dateFns.parseISO(normalizedActivities[0].date);
      const firstCalendarDate = dateFns.getDay(firstDate) === weekStart ? firstDate : dateFns.subWeeks(dateFns.nextDay(firstDate, weekStart), 1);
      const paddedActivities = [...Array(dateFns.differenceInCalendarDays(firstDate, firstCalendarDate)).fill(void 0), ...normalizedActivities];
      const numberOfWeeks = Math.ceil(paddedActivities.length / 7);
      return Array(numberOfWeeks).fill(void 0).map((_, weekIndex) => paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7));
    }
    function fillHoles(activities) {
      const dateMap = {};
      for (const activity of activities) {
        dateMap[activity.date] = activity;
      }
      return dateFns.eachDayOfInterval({
        start: dateFns.parseISO(activities[0].date),
        end: dateFns.parseISO(activities[activities.length - 1].date)
      }).map((day) => {
        const date = dateFns.formatISO(day, {
          representation: "date"
        });
        if (dateMap[date]) {
          return dateMap[date];
        }
        return {
          date,
          count: 0,
          level: 0
        };
      });
    }
    function getMonthLabels(weeks, monthNames = DEFAULT_MONTH_LABELS) {
      return weeks.reduce((labels, week, weekIndex) => {
        const firstActivity = week.find((activity) => activity !== void 0);
        if (!firstActivity) {
          throw new Error(`Unexpected error: Week ${weekIndex + 1} is empty: [${week}].`);
        }
        const month = monthNames[dateFns.getMonth(dateFns.parseISO(firstActivity.date))];
        const prevLabel = labels[labels.length - 1];
        if (weekIndex === 0 || prevLabel.label !== month) {
          return [...labels, {
            weekIndex,
            label: month
          }];
        }
        return labels;
      }, []).filter(({
        weekIndex
      }, index, labels) => {
        const minWeeks = 3;
        if (index === 0) {
          return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks;
        }
        if (index === labels.length - 1) {
          return weeks.slice(weekIndex).length >= minWeeks;
        }
        return true;
      });
    }
    function getClassName(name, styles2) {
      if (styles2) {
        return `${NAMESPACE}__${name} ${styles2}`;
      }
      return `${NAMESPACE}__${name}`;
    }
    function generateEmptyData() {
      const year = (/* @__PURE__ */ new Date()).getFullYear();
      const days = dateFns.eachDayOfInterval({
        start: new Date(year, 0, 1),
        end: new Date(year, 11, 31)
      });
      return days.map((date) => ({
        date: dateFns.formatISO(date, {
          representation: "date"
        }),
        count: 0,
        level: 0
      }));
    }
    function maxWeekdayLabelLength(firstWeek, weekStart, labels, fontSize) {
      return firstWeek.reduce((maxLength, _, index) => {
        if (index % 2 !== 0) {
          const dayIndex = (index + weekStart) % 7;
          const curLength = Math.ceil(calcTextDimensions(labels[dayIndex], fontSize).width);
          return Math.max(maxLength, curLength);
        }
        return maxLength;
      }, 0);
    }
    function calcTextDimensions(text, fontSize) {
      if (typeof document === "undefined" || typeof window === "undefined") {
        throw new Error("calcTextDimensions() requires browser APIs");
      }
      if (fontSize < 1) {
        throw new RangeError("fontSize must be positive");
      }
      if (text.length === 0) {
        return {
          width: 0,
          height: 0
        };
      }
      const namespace = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(namespace, "svg");
      svg.style.position = "absolute";
      svg.style.visibility = "hidden";
      svg.style.fontFamily = window.getComputedStyle(document.body).fontFamily;
      svg.style.fontSize = `${fontSize}px`;
      const textNode = document.createElementNS(namespace, "text");
      textNode.textContent = text;
      svg.appendChild(textNode);
      document.body.appendChild(svg);
      const boundingBox = textNode.getBBox();
      document.body.removeChild(svg);
      return {
        width: boundingBox.width,
        height: boundingBox.height
      };
    }
    function createTheme(input, size = 5) {
      const defaultTheme = createDefaultTheme(size);
      if (input) {
        validateTheme(input, size);
        input.light = input.light ?? defaultTheme.light;
        input.dark = input.dark ?? defaultTheme.dark;
        return {
          light: isColorScale(input.light, size) ? input.light : createColorScale(input.light, size),
          dark: isColorScale(input.dark, size) ? input.dark : createColorScale(input.dark, size)
        };
      }
      return defaultTheme;
    }
    function createDefaultTheme(size) {
      return {
        light: createColorScale(["hsl(0, 0%, 92%)", "hsl(0, 0%, 26%)"], size),
        dark: createColorScale(["hsl(0, 0%, 20%)", "hsl(0, 0%, 92%)"], size)
      };
    }
    function validateTheme(input, size) {
      if (typeof input !== "object" || input.light === void 0 && input.dark === void 0) {
        throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${size} colors respectively.`);
      }
      if (input.light) {
        const {
          length
        } = input.light;
        if (length !== 2 && length !== size) {
          throw new Error(`theme.light must contain exactly 2 or ${size} colors, ${length} passed.`);
        }
      }
      if (input.dark) {
        const {
          length
        } = input.dark;
        if (length !== 2 && length !== size) {
          throw new Error(`theme.dark must contain exactly 2 or ${size} colors, ${length} passed.`);
        }
      }
    }
    function isColorScale(colors, size) {
      const invalidColor = colors.find((color) => !chroma__default.default.valid(color));
      if (invalidColor) {
        throw new Error(`Invalid color "${invalidColor}" passed. All CSS color formats are accepted.`);
      }
      return colors.length === size;
    }
    function createColorScale(colors, size) {
      return chroma__default.default.scale(colors).mode("lch").colors(size);
    }
    var ActivityCalendar = ({
      data,
      blockMargin = 4,
      blockRadius = 2,
      blockSize = 12,
      colorScheme = void 0,
      eventHandlers = {},
      fontSize = 14,
      hideColorLegend = false,
      hideMonthLabels = false,
      hideTotalCount = false,
      labels: labelsProp = void 0,
      maxLevel = 4,
      loading = false,
      renderBlock = void 0,
      showWeekdayLabels = false,
      style: styleProp = {},
      theme: themeProp = void 0,
      totalCount: totalCountProp = void 0,
      weekStart = 0
      // Sunday
    }) => {
      var _a;
      maxLevel = Math.max(1, maxLevel);
      const theme = createTheme(themeProp, maxLevel + 1);
      const systemColorScheme = useColorScheme();
      const colorScale = theme[colorScheme ?? systemColorScheme];
      const useAnimation = !usePrefersReducedMotion();
      if (loading) {
        data = generateEmptyData();
      }
      if (data.length === 0) {
        return null;
      }
      const year = dateFns.getYear(dateFns.parseISO((_a = data[0]) == null ? void 0 : _a.date));
      const weeks = groupByWeeks(data, weekStart);
      const labels = Object.assign({}, DEFAULT_LABELS, labelsProp);
      const labelHeight = hideMonthLabels ? 0 : fontSize + LABEL_MARGIN;
      const weekdayLabelOffset = showWeekdayLabels ? maxWeekdayLabelLength(weeks[0], weekStart, labels.weekdays, fontSize) + LABEL_MARGIN : void 0;
      function getDimensions() {
        return {
          width: weeks.length * (blockSize + blockMargin) - blockMargin,
          height: labelHeight + (blockSize + blockMargin) * 7 - blockMargin
        };
      }
      function getEventHandlers(activity) {
        return Object.keys(eventHandlers).reduce((handlers, key) => ({
          ...handlers,
          [key]: (event) => {
            var _a2;
            return (_a2 = eventHandlers[key]) == null ? void 0 : _a2.call(eventHandlers, event)(activity);
          }
        }), {});
      }
      function renderCalendar() {
        return weeks.map((week, weekIndex) => week.map((activity, dayIndex) => {
          if (!activity) {
            return null;
          }
          if (activity.level < 0 || activity.level > maxLevel) {
            throw new RangeError(`Provided activity level ${activity.level} for ${activity.date} is out of range. It must be between 0 and ${maxLevel}.`);
          }
          const style = loading && useAnimation ? {
            animation: `${styles.loadingAnimation} 1.75s ease-in-out infinite`,
            animationDelay: `${weekIndex * 20 + dayIndex * 20}ms`
          } : void 0;
          const block = React__default.default.createElement("rect", _extends({}, getEventHandlers(activity), {
            x: 0,
            y: labelHeight + (blockSize + blockMargin) * dayIndex,
            width: blockSize,
            height: blockSize,
            rx: blockRadius,
            ry: blockRadius,
            fill: colorScale[activity.level],
            "data-date": activity.date,
            "data-level": activity.level,
            style
          }));
          return React__default.default.createElement(React.Fragment, {
            key: activity.date
          }, renderBlock ? renderBlock(block, activity) : block);
        })).map((week, x) => React__default.default.createElement("g", {
          key: x,
          transform: `translate(${(blockSize + blockMargin) * x}, 0)`
        }, week));
      }
      function renderFooter() {
        var _a2, _b;
        if (hideTotalCount && hideColorLegend) {
          return null;
        }
        const totalCount = typeof totalCountProp === "number" ? totalCountProp : data.reduce((sum, activity) => sum + activity.count, 0);
        return React__default.default.createElement("footer", {
          className: getClassName("footer", styles.footer),
          style: {
            marginLeft: weekdayLabelOffset
          }
        }, loading && React__default.default.createElement("div", null, " "), !loading && !hideTotalCount && React__default.default.createElement("div", {
          className: getClassName("count")
        }, labels.totalCount ? labels.totalCount.replace("{{count}}", String(totalCount)).replace("{{year}}", String(year)) : `${totalCount} activities in ${year}`), !loading && !hideColorLegend && React__default.default.createElement("div", {
          className: getClassName("legend-colors", styles.legendColors)
        }, React__default.default.createElement("span", {
          style: {
            marginRight: "0.4em"
          }
        }, ((_a2 = labels == null ? void 0 : labels.legend) == null ? void 0 : _a2.less) ?? "Less"), Array(maxLevel + 1).fill(void 0).map((_, level) => React__default.default.createElement("svg", {
          width: blockSize,
          height: blockSize,
          key: level
        }, React__default.default.createElement("rect", {
          width: blockSize,
          height: blockSize,
          fill: colorScale[level],
          rx: blockRadius,
          ry: blockRadius
        }))), React__default.default.createElement("span", {
          style: {
            marginLeft: "0.4em"
          }
        }, ((_b = labels == null ? void 0 : labels.legend) == null ? void 0 : _b.more) ?? "More")));
      }
      function renderLabels() {
        if (!showWeekdayLabels && hideMonthLabels) {
          return null;
        }
        return React__default.default.createElement(React__default.default.Fragment, null, showWeekdayLabels && React__default.default.createElement("g", {
          className: getClassName("legend-weekday")
        }, weeks[0].map((_, index) => {
          if (index % 2 === 0) {
            return null;
          }
          const dayIndex = (index + weekStart) % 7;
          return React__default.default.createElement("text", {
            x: -LABEL_MARGIN,
            y: labelHeight + (blockSize + blockMargin) * index + blockSize / 2,
            dominantBaseline: "middle",
            textAnchor: "end",
            key: index
          }, labels.weekdays[dayIndex]);
        })), !hideMonthLabels && React__default.default.createElement("g", {
          className: getClassName("legend-month")
        }, getMonthLabels(weeks, labels.months).map(({
          label,
          weekIndex
        }) => React__default.default.createElement("text", {
          x: (blockSize + blockMargin) * weekIndex,
          dominantBaseline: "hanging",
          key: weekIndex
        }, label))));
      }
      const {
        width,
        height
      } = getDimensions();
      const containerStyles = {
        fontSize,
        ...useAnimation && {
          [`--${NAMESPACE}-loading`]: colorScale[0],
          [`--${NAMESPACE}-loading-active`]: colorScheme === "light" ? chroma__default.default(colorScale[0]).darken(0.3).hex() : chroma__default.default(colorScale[0]).brighten(0.25).hex()
        }
      };
      return React__default.default.createElement("article", {
        className: `${NAMESPACE} ${styles.container}`,
        style: {
          ...styleProp,
          ...containerStyles
        }
      }, React__default.default.createElement("div", {
        className: getClassName("scroll-container", styles.scrollContainer)
      }, React__default.default.createElement("svg", {
        width,
        height,
        viewBox: `0 0 ${width} ${height}`,
        className: getClassName("calendar", styles.calendar),
        style: {
          marginLeft: weekdayLabelOffset
        }
      }, !loading && renderLabels(), renderCalendar())), renderFooter());
    };
    var Skeleton = (props) => React__default.default.createElement(ActivityCalendar, _extends({
      data: []
    }, props));
    exports.Skeleton = Skeleton;
    exports.default = ActivityCalendar;
  }
});

// node_modules/react-github-calendar/build/index.js
var require_build2 = __commonJS({
  "node_modules/react-github-calendar/build/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    var Calendar = require_build();
    function _interopDefault(e) {
      return e && e.__esModule ? e : { default: e };
    }
    var React__default = _interopDefault(React);
    var Calendar__default = _interopDefault(Calendar);
    function _extends() {
      _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return _extends.apply(this, arguments);
    }
    var API_URL = "https://github-contributions-api.jogruber.de/v4/";
    var DEFAULT_THEME = {
      light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
      dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"]
    };
    var transformData = (data, transformFn) => {
      if (typeof transformFn !== "function") {
        return data;
      }
      const transformedData = transformFn(data);
      if (!Array.isArray(transformedData)) {
        throw Error(`Passed function transformData must return a list of Day objects.`);
      }
      if (transformedData.length > 0) {
        const testObj = transformedData[0];
        if (typeof testObj.count !== "number" || testObj.count < 0) {
          throw Error(`Required property "count: number" missing or invalid. Got: ${testObj.count}`);
        }
        if (!/\d{4}-\d{2}-\d{2}/.test(testObj.date)) {
          throw Error(`Required property "date: YYYY-MM-DD" missing or invalid. Got: ${testObj.date}`);
        }
        if (typeof testObj.level !== "number" || testObj.level < 0 || testObj.level > 4) {
          throw Error(`Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${testObj.level}.`);
        }
      }
      return transformedData;
    };
    async function fetchCalendarData(username, year) {
      const response = await fetch(`${API_URL}${username}?y=${year}`);
      const data = await response.json();
      if (!response.ok) {
        throw Error(`Fetching GitHub contribution data for "${username}" failed: ${data.error}`);
      }
      return data;
    }
    var GitHubCalendar = ({
      username,
      year = "last",
      labels,
      transformData: transformFn,
      transformTotalCount = true,
      throwOnError = false,
      errorMessage = `Error – Fetching GitHub contribution data for "${username}" failed.`,
      ...props
    }) => {
      const [data, setData] = React.useState(null);
      const [loading, setLoading] = React.useState(false);
      const [error, setError] = React.useState(null);
      const fetchData = React.useCallback(() => {
        setLoading(true);
        setError(null);
        fetchCalendarData(username, year).then(setData).catch(setError).finally(() => setLoading(false));
      }, [username, year]);
      React.useEffect(fetchData, [fetchData]);
      if (error) {
        if (throwOnError) {
          throw error;
        } else {
          return React__default.default.createElement("div", null, errorMessage);
        }
      }
      if (loading || !data) {
        return React__default.default.createElement(Calendar.Skeleton, _extends({}, props, {
          loading: true
        }));
      }
      const theme = props.theme ?? DEFAULT_THEME;
      const defaultLabels = {
        totalCount: `{{count}} contributions in ${year === "last" ? "the last year" : "{{year}}"}`
      };
      const totalCount = year === "last" ? data.total["lastYear"] : data.total[year];
      return React__default.default.createElement(Calendar__default.default, _extends({
        data: transformData(data.contributions, transformFn),
        theme,
        labels: Object.assign({}, defaultLabels, labels),
        totalCount: transformFn && transformTotalCount ? void 0 : totalCount
      }, props, {
        maxLevel: 4
      }));
    };
    exports.default = GitHubCalendar;
  }
});
export default require_build2();
/*! Bundled license information:

chroma-js/chroma.js:
  (**
   * chroma.js - JavaScript library for color conversions
   *
   * Copyright (c) 2011-2019, Gregor Aisch
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   *
   * 1. Redistributions of source code must retain the above copyright notice, this
   * list of conditions and the following disclaimer.
   *
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   * this list of conditions and the following disclaimer in the documentation
   * and/or other materials provided with the distribution.
   *
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   * derived from this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   * -------------------------------------------------------
   *
   * chroma.js includes colors from colorbrewer2.org, which are released under
   * the following license:
   *
   * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
   * and The Pennsylvania State University.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   * http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing,
   * software distributed under the License is distributed on an
   * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
   * either express or implied. See the License for the specific
   * language governing permissions and limitations under the License.
   *
   * ------------------------------------------------------
   *
   * Named colors are taken from X11 Color Names.
   * http://www.w3.org/TR/css3-color/#svg-color
   *
   * @preserve
   *)
*/
//# sourceMappingURL=react-github-calendar.js.map
