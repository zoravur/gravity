/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/color-interpolate/index.js":
/*!*************************************************!*\
  !*** ./node_modules/color-interpolate/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\r\n * @module  color-interpolate\r\n * Pick color from palette by index\r\n */\r\n\r\nconst parse = __webpack_require__(/*! color-parse */ \"./node_modules/color-parse/index.js\");\r\nconst hsl = __webpack_require__(/*! color-space/hsl */ \"./node_modules/color-space/hsl.js\");\r\nconst lerp = __webpack_require__(/*! lerp */ \"./node_modules/lerp/index.js\");\r\nconst clamp = __webpack_require__(/*! mumath/clamp */ \"./node_modules/mumath/clamp.js\");\r\n\r\nmodule.exports = interpolate;\r\n\r\nfunction interpolate (palette) {\r\n\tpalette = palette.map(c => {\r\n\t\tc = parse(c);\r\n\t\tif (c.space != 'rgb') {\r\n\t\t\tif (c.space != 'hsl') throw `${c.space} space is not supported.`;\r\n\t\t\tc.values = hsl.rgb(c.values);\r\n\t\t}\r\n\t\tc.values.push(c.alpha);\r\n\t\treturn c.values;\r\n\t});\r\n\r\n\treturn (t, mix = lerp) => {\r\n\t\tt = clamp(t, 0, 1);\r\n\r\n\t\tlet idx = ( palette.length - 1 ) * t,\r\n\t\t\tlIdx = Math.floor( idx ),\r\n\t\t\trIdx = Math.ceil( idx );\r\n\r\n\t\tt = idx - lIdx;\r\n\r\n\t\tlet lColor = palette[lIdx], rColor = palette[rIdx];\r\n\r\n\t\tlet result = lColor.map((v, i) => {\r\n\t\t\tv = mix(v, rColor[i], t);\r\n\t\t\tif (i < 3) v = Math.round(v);\r\n\t\t\treturn v;\r\n\t\t});\r\n\r\n\t\tif (result[3] === 1) {\r\n\t\t\treturn `rgb(${result.slice(0,3)})`;\r\n\t\t}\r\n\t\treturn `rgba(${result})`;\r\n\t};\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/color-interpolate/index.js?");

/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\n\r\nmodule.exports = {\r\n\t\"aliceblue\": [240, 248, 255],\r\n\t\"antiquewhite\": [250, 235, 215],\r\n\t\"aqua\": [0, 255, 255],\r\n\t\"aquamarine\": [127, 255, 212],\r\n\t\"azure\": [240, 255, 255],\r\n\t\"beige\": [245, 245, 220],\r\n\t\"bisque\": [255, 228, 196],\r\n\t\"black\": [0, 0, 0],\r\n\t\"blanchedalmond\": [255, 235, 205],\r\n\t\"blue\": [0, 0, 255],\r\n\t\"blueviolet\": [138, 43, 226],\r\n\t\"brown\": [165, 42, 42],\r\n\t\"burlywood\": [222, 184, 135],\r\n\t\"cadetblue\": [95, 158, 160],\r\n\t\"chartreuse\": [127, 255, 0],\r\n\t\"chocolate\": [210, 105, 30],\r\n\t\"coral\": [255, 127, 80],\r\n\t\"cornflowerblue\": [100, 149, 237],\r\n\t\"cornsilk\": [255, 248, 220],\r\n\t\"crimson\": [220, 20, 60],\r\n\t\"cyan\": [0, 255, 255],\r\n\t\"darkblue\": [0, 0, 139],\r\n\t\"darkcyan\": [0, 139, 139],\r\n\t\"darkgoldenrod\": [184, 134, 11],\r\n\t\"darkgray\": [169, 169, 169],\r\n\t\"darkgreen\": [0, 100, 0],\r\n\t\"darkgrey\": [169, 169, 169],\r\n\t\"darkkhaki\": [189, 183, 107],\r\n\t\"darkmagenta\": [139, 0, 139],\r\n\t\"darkolivegreen\": [85, 107, 47],\r\n\t\"darkorange\": [255, 140, 0],\r\n\t\"darkorchid\": [153, 50, 204],\r\n\t\"darkred\": [139, 0, 0],\r\n\t\"darksalmon\": [233, 150, 122],\r\n\t\"darkseagreen\": [143, 188, 143],\r\n\t\"darkslateblue\": [72, 61, 139],\r\n\t\"darkslategray\": [47, 79, 79],\r\n\t\"darkslategrey\": [47, 79, 79],\r\n\t\"darkturquoise\": [0, 206, 209],\r\n\t\"darkviolet\": [148, 0, 211],\r\n\t\"deeppink\": [255, 20, 147],\r\n\t\"deepskyblue\": [0, 191, 255],\r\n\t\"dimgray\": [105, 105, 105],\r\n\t\"dimgrey\": [105, 105, 105],\r\n\t\"dodgerblue\": [30, 144, 255],\r\n\t\"firebrick\": [178, 34, 34],\r\n\t\"floralwhite\": [255, 250, 240],\r\n\t\"forestgreen\": [34, 139, 34],\r\n\t\"fuchsia\": [255, 0, 255],\r\n\t\"gainsboro\": [220, 220, 220],\r\n\t\"ghostwhite\": [248, 248, 255],\r\n\t\"gold\": [255, 215, 0],\r\n\t\"goldenrod\": [218, 165, 32],\r\n\t\"gray\": [128, 128, 128],\r\n\t\"green\": [0, 128, 0],\r\n\t\"greenyellow\": [173, 255, 47],\r\n\t\"grey\": [128, 128, 128],\r\n\t\"honeydew\": [240, 255, 240],\r\n\t\"hotpink\": [255, 105, 180],\r\n\t\"indianred\": [205, 92, 92],\r\n\t\"indigo\": [75, 0, 130],\r\n\t\"ivory\": [255, 255, 240],\r\n\t\"khaki\": [240, 230, 140],\r\n\t\"lavender\": [230, 230, 250],\r\n\t\"lavenderblush\": [255, 240, 245],\r\n\t\"lawngreen\": [124, 252, 0],\r\n\t\"lemonchiffon\": [255, 250, 205],\r\n\t\"lightblue\": [173, 216, 230],\r\n\t\"lightcoral\": [240, 128, 128],\r\n\t\"lightcyan\": [224, 255, 255],\r\n\t\"lightgoldenrodyellow\": [250, 250, 210],\r\n\t\"lightgray\": [211, 211, 211],\r\n\t\"lightgreen\": [144, 238, 144],\r\n\t\"lightgrey\": [211, 211, 211],\r\n\t\"lightpink\": [255, 182, 193],\r\n\t\"lightsalmon\": [255, 160, 122],\r\n\t\"lightseagreen\": [32, 178, 170],\r\n\t\"lightskyblue\": [135, 206, 250],\r\n\t\"lightslategray\": [119, 136, 153],\r\n\t\"lightslategrey\": [119, 136, 153],\r\n\t\"lightsteelblue\": [176, 196, 222],\r\n\t\"lightyellow\": [255, 255, 224],\r\n\t\"lime\": [0, 255, 0],\r\n\t\"limegreen\": [50, 205, 50],\r\n\t\"linen\": [250, 240, 230],\r\n\t\"magenta\": [255, 0, 255],\r\n\t\"maroon\": [128, 0, 0],\r\n\t\"mediumaquamarine\": [102, 205, 170],\r\n\t\"mediumblue\": [0, 0, 205],\r\n\t\"mediumorchid\": [186, 85, 211],\r\n\t\"mediumpurple\": [147, 112, 219],\r\n\t\"mediumseagreen\": [60, 179, 113],\r\n\t\"mediumslateblue\": [123, 104, 238],\r\n\t\"mediumspringgreen\": [0, 250, 154],\r\n\t\"mediumturquoise\": [72, 209, 204],\r\n\t\"mediumvioletred\": [199, 21, 133],\r\n\t\"midnightblue\": [25, 25, 112],\r\n\t\"mintcream\": [245, 255, 250],\r\n\t\"mistyrose\": [255, 228, 225],\r\n\t\"moccasin\": [255, 228, 181],\r\n\t\"navajowhite\": [255, 222, 173],\r\n\t\"navy\": [0, 0, 128],\r\n\t\"oldlace\": [253, 245, 230],\r\n\t\"olive\": [128, 128, 0],\r\n\t\"olivedrab\": [107, 142, 35],\r\n\t\"orange\": [255, 165, 0],\r\n\t\"orangered\": [255, 69, 0],\r\n\t\"orchid\": [218, 112, 214],\r\n\t\"palegoldenrod\": [238, 232, 170],\r\n\t\"palegreen\": [152, 251, 152],\r\n\t\"paleturquoise\": [175, 238, 238],\r\n\t\"palevioletred\": [219, 112, 147],\r\n\t\"papayawhip\": [255, 239, 213],\r\n\t\"peachpuff\": [255, 218, 185],\r\n\t\"peru\": [205, 133, 63],\r\n\t\"pink\": [255, 192, 203],\r\n\t\"plum\": [221, 160, 221],\r\n\t\"powderblue\": [176, 224, 230],\r\n\t\"purple\": [128, 0, 128],\r\n\t\"rebeccapurple\": [102, 51, 153],\r\n\t\"red\": [255, 0, 0],\r\n\t\"rosybrown\": [188, 143, 143],\r\n\t\"royalblue\": [65, 105, 225],\r\n\t\"saddlebrown\": [139, 69, 19],\r\n\t\"salmon\": [250, 128, 114],\r\n\t\"sandybrown\": [244, 164, 96],\r\n\t\"seagreen\": [46, 139, 87],\r\n\t\"seashell\": [255, 245, 238],\r\n\t\"sienna\": [160, 82, 45],\r\n\t\"silver\": [192, 192, 192],\r\n\t\"skyblue\": [135, 206, 235],\r\n\t\"slateblue\": [106, 90, 205],\r\n\t\"slategray\": [112, 128, 144],\r\n\t\"slategrey\": [112, 128, 144],\r\n\t\"snow\": [255, 250, 250],\r\n\t\"springgreen\": [0, 255, 127],\r\n\t\"steelblue\": [70, 130, 180],\r\n\t\"tan\": [210, 180, 140],\r\n\t\"teal\": [0, 128, 128],\r\n\t\"thistle\": [216, 191, 216],\r\n\t\"tomato\": [255, 99, 71],\r\n\t\"turquoise\": [64, 224, 208],\r\n\t\"violet\": [238, 130, 238],\r\n\t\"wheat\": [245, 222, 179],\r\n\t\"white\": [255, 255, 255],\r\n\t\"whitesmoke\": [245, 245, 245],\r\n\t\"yellow\": [255, 255, 0],\r\n\t\"yellowgreen\": [154, 205, 50]\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/color-name/index.js?");

/***/ }),

/***/ "./node_modules/color-parse/index.js":
/*!*******************************************!*\
  !*** ./node_modules/color-parse/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(global) {/**\r\n * @module color-parse\r\n */\r\n\r\n\r\n\r\nvar names = __webpack_require__(/*! color-name */ \"./node_modules/color-name/index.js\")\r\nvar isObject = __webpack_require__(/*! is-plain-obj */ \"./node_modules/is-plain-obj/index.js\")\r\nvar defined = __webpack_require__(/*! defined */ \"./node_modules/defined/index.js\")\r\n\r\nmodule.exports = parse\r\n\r\n/**\r\n * Base hues\r\n * http://dev.w3.org/csswg/css-color/#typedef-named-hue\r\n */\r\n//FIXME: use external hue detector\r\nvar baseHues = {\r\n\tred: 0,\r\n\torange: 60,\r\n\tyellow: 120,\r\n\tgreen: 180,\r\n\tblue: 240,\r\n\tpurple: 300\r\n}\r\n\r\n/**\r\n * Parse color from the string passed\r\n *\r\n * @return {Object} A space indicator `space`, an array `values` and `alpha`\r\n */\r\nfunction parse (cstr) {\r\n\tvar m, parts = [], alpha = 1, space\r\n\r\n\tif (typeof cstr === 'string') {\r\n\t\t//keyword\r\n\t\tif (names[cstr]) {\r\n\t\t\tparts = names[cstr].slice()\r\n\t\t\tspace = 'rgb'\r\n\t\t}\r\n\r\n\t\t//reserved words\r\n\t\telse if (cstr === 'transparent') {\r\n\t\t\talpha = 0\r\n\t\t\tspace = 'rgb'\r\n\t\t\tparts = [0,0,0]\r\n\t\t}\r\n\r\n\t\t//hex\r\n\t\telse if (/^#[A-Fa-f0-9]+$/.test(cstr)) {\r\n\t\t\tvar base = cstr.slice(1)\r\n\t\t\tvar size = base.length\r\n\t\t\tvar isShort = size <= 4\r\n\t\t\talpha = 1\r\n\r\n\t\t\tif (isShort) {\r\n\t\t\t\tparts = [\r\n\t\t\t\t\tparseInt(base[0] + base[0], 16),\r\n\t\t\t\t\tparseInt(base[1] + base[1], 16),\r\n\t\t\t\t\tparseInt(base[2] + base[2], 16)\r\n\t\t\t\t]\r\n\t\t\t\tif (size === 4) {\r\n\t\t\t\t\talpha = parseInt(base[3] + base[3], 16) / 255\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\telse {\r\n\t\t\t\tparts = [\r\n\t\t\t\t\tparseInt(base[0] + base[1], 16),\r\n\t\t\t\t\tparseInt(base[2] + base[3], 16),\r\n\t\t\t\t\tparseInt(base[4] + base[5], 16)\r\n\t\t\t\t]\r\n\t\t\t\tif (size === 8) {\r\n\t\t\t\t\talpha = parseInt(base[6] + base[7], 16) / 255\r\n\t\t\t\t}\r\n\t\t\t}\r\n\r\n\t\t\tif (!parts[0]) parts[0] = 0\r\n\t\t\tif (!parts[1]) parts[1] = 0\r\n\t\t\tif (!parts[2]) parts[2] = 0\r\n\r\n\t\t\tspace = 'rgb'\r\n\t\t}\r\n\r\n\t\t//color space\r\n\t\telse if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\\s*\\(([^\\)]*)\\)/.exec(cstr)) {\r\n\t\t\tvar name = m[1]\r\n\t\t\tvar base = name.replace(/a$/, '')\r\n\t\t\tspace = base\r\n\t\t\tvar size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3\r\n\t\t\tparts = m[2].trim()\r\n\t\t\t\t.split(/\\s*,\\s*/)\r\n\t\t\t\t.map(function (x, i) {\r\n\t\t\t\t\t//<percentage>\r\n\t\t\t\t\tif (/%$/.test(x)) {\r\n\t\t\t\t\t\t//alpha\r\n\t\t\t\t\t\tif (i === size)\treturn parseFloat(x) / 100\r\n\t\t\t\t\t\t//rgb\r\n\t\t\t\t\t\tif (base === 'rgb') return parseFloat(x) * 255 / 100\r\n\t\t\t\t\t\treturn parseFloat(x)\r\n\t\t\t\t\t}\r\n\t\t\t\t\t//hue\r\n\t\t\t\t\telse if (base[i] === 'h') {\r\n\t\t\t\t\t\t//<deg>\r\n\t\t\t\t\t\tif (/deg$/.test(x)) {\r\n\t\t\t\t\t\t\treturn parseFloat(x)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\t//<base-hue>\r\n\t\t\t\t\t\telse if (baseHues[x] !== undefined) {\r\n\t\t\t\t\t\t\treturn baseHues[x]\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn parseFloat(x)\r\n\t\t\t\t})\r\n\r\n\t\t\tif (name === base) parts.push(1)\r\n\t\t\talpha = parts[size] === undefined ? 1 : parts[size]\r\n\t\t\tparts = parts.slice(0, size)\r\n\t\t}\r\n\r\n\t\t//named channels case\r\n\t\telse if (cstr.length > 10 && /[0-9](?:\\s|\\/)/.test(cstr)) {\r\n\t\t\tparts = cstr.match(/([0-9]+)/g).map(function (value) {\r\n\t\t\t\treturn parseFloat(value)\r\n\t\t\t})\r\n\r\n\t\t\tspace = cstr.match(/([a-z])/ig).join('').toLowerCase()\r\n\t\t}\r\n\t}\r\n\r\n\t//numeric case\r\n\telse if (typeof cstr === 'number') {\r\n\t\tspace = 'rgb'\r\n\t\tparts = [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff]\r\n\t}\r\n\r\n\t//object case - detects css cases of rgb and hsl\r\n\telse if (isObject(cstr)) {\r\n\t\tvar r = defined(cstr.r, cstr.red, cstr.R, null)\r\n\r\n\t\tif (r !== null) {\r\n\t\t\tspace = 'rgb'\r\n\t\t\tparts = [\r\n\t\t\t\tr,\r\n\t\t\t\tdefined(cstr.g, cstr.green, cstr.G),\r\n\t\t\t\tdefined(cstr.b, cstr.blue, cstr.B)\r\n\t\t\t]\r\n\t\t}\r\n\t\telse {\r\n\t\t\tspace = 'hsl'\r\n\t\t\tparts = [\r\n\t\t\t\tdefined(cstr.h, cstr.hue, cstr.H),\r\n\t\t\t\tdefined(cstr.s, cstr.saturation, cstr.S),\r\n\t\t\t\tdefined(cstr.l, cstr.lightness, cstr.L, cstr.b, cstr.brightness)\r\n\t\t\t]\r\n\t\t}\r\n\r\n\t\talpha = defined(cstr.a, cstr.alpha, cstr.opacity, 1)\r\n\r\n\t\tif (cstr.opacity != null) alpha /= 100\r\n\t}\r\n\r\n\t//array\r\n\telse if (Array.isArray(cstr) || global.ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(cstr)) {\r\n\t\tparts = [cstr[0], cstr[1], cstr[2]]\r\n\t\tspace = 'rgb'\r\n\t\talpha = cstr.length === 4 ? cstr[3] : 1\r\n\t}\r\n\r\n\treturn {\r\n\t\tspace: space,\r\n\t\tvalues: parts,\r\n\t\talpha: alpha\r\n\t}\r\n}\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/color-parse/index.js?");

/***/ }),

/***/ "./node_modules/color-space/hsl.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsl.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * @module color-space/hsl\n */\n\n\nvar rgb = __webpack_require__(/*! ./rgb */ \"./node_modules/color-space/rgb.js\");\n\nmodule.exports = {\n\tname: 'hsl',\n\tmin: [0,0,0],\n\tmax: [360,100,100],\n\tchannel: ['hue', 'saturation', 'lightness'],\n\talias: ['HSL'],\n\n\trgb: function(hsl) {\n\t\tvar h = hsl[0] / 360,\n\t\t\t\ts = hsl[1] / 100,\n\t\t\t\tl = hsl[2] / 100,\n\t\t\t\tt1, t2, t3, rgb, val;\n\n\t\tif (s === 0) {\n\t\t\tval = l * 255;\n\t\t\treturn [val, val, val];\n\t\t}\n\n\t\tif (l < 0.5) {\n\t\t\tt2 = l * (1 + s);\n\t\t}\n\t\telse {\n\t\t\tt2 = l + s - l * s;\n\t\t}\n\t\tt1 = 2 * l - t2;\n\n\t\trgb = [0, 0, 0];\n\t\tfor (var i = 0; i < 3; i++) {\n\t\t\tt3 = h + 1 / 3 * - (i - 1);\n\t\t\tif (t3 < 0) {\n\t\t\t\tt3++;\n\t\t\t}\n\t\t\telse if (t3 > 1) {\n\t\t\t\tt3--;\n\t\t\t}\n\n\t\t\tif (6 * t3 < 1) {\n\t\t\t\tval = t1 + (t2 - t1) * 6 * t3;\n\t\t\t}\n\t\t\telse if (2 * t3 < 1) {\n\t\t\t\tval = t2;\n\t\t\t}\n\t\t\telse if (3 * t3 < 2) {\n\t\t\t\tval = t1 + (t2 - t1) * (2 / 3 - t3) * 6;\n\t\t\t}\n\t\t\telse {\n\t\t\t\tval = t1;\n\t\t\t}\n\n\t\t\trgb[i] = val * 255;\n\t\t}\n\n\t\treturn rgb;\n\t}\n};\n\n\n//extend rgb\nrgb.hsl = function(rgb) {\n\tvar r = rgb[0]/255,\n\t\t\tg = rgb[1]/255,\n\t\t\tb = rgb[2]/255,\n\t\t\tmin = Math.min(r, g, b),\n\t\t\tmax = Math.max(r, g, b),\n\t\t\tdelta = max - min,\n\t\t\th, s, l;\n\n\tif (max === min) {\n\t\th = 0;\n\t}\n\telse if (r === max) {\n\t\th = (g - b) / delta;\n\t}\n\telse if (g === max) {\n\t\th = 2 + (b - r) / delta;\n\t}\n\telse if (b === max) {\n\t\th = 4 + (r - g)/ delta;\n\t}\n\n\th = Math.min(h * 60, 360);\n\n\tif (h < 0) {\n\t\th += 360;\n\t}\n\n\tl = (min + max) / 2;\n\n\tif (max === min) {\n\t\ts = 0;\n\t}\n\telse if (l <= 0.5) {\n\t\ts = delta / (max + min);\n\t}\n\telse {\n\t\ts = delta / (2 - max - min);\n\t}\n\n\treturn [h, s * 100, l * 100];\n};\n\n\n//# sourceURL=webpack:///./node_modules/color-space/hsl.js?");

/***/ }),

/***/ "./node_modules/color-space/rgb.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/rgb.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\n * RGB space.\n *\n * @module  color-space/rgb\n */\n\n\nmodule.exports = {\n\tname: 'rgb',\n\tmin: [0,0,0],\n\tmax: [255,255,255],\n\tchannel: ['red', 'green', 'blue'],\n\talias: ['RGB']\n};\n\n\n//# sourceURL=webpack:///./node_modules/color-space/rgb.js?");

/***/ }),

/***/ "./node_modules/defined/index.js":
/*!***************************************!*\
  !*** ./node_modules/defined/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function () {\n    for (var i = 0; i < arguments.length; i++) {\n        if (arguments[i] !== undefined) return arguments[i];\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/defined/index.js?");

/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar toString = Object.prototype.toString;\n\nmodule.exports = function (x) {\n\tvar prototype;\n\treturn toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-plain-obj/index.js?");

/***/ }),

/***/ "./node_modules/lerp/index.js":
/*!************************************!*\
  !*** ./node_modules/lerp/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function lerp(v0, v1, t) {\n    return v0*(1-t)+v1*t\n}\nmodule.exports = lerp\n\n//# sourceURL=webpack:///./node_modules/lerp/index.js?");

/***/ }),

/***/ "./node_modules/mumath/clamp.js":
/*!**************************************!*\
  !*** ./node_modules/mumath/clamp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/**\r\n * Clamp value.\r\n * Detects proper clamp min/max.\r\n *\r\n * @param {number} a Current value to cut off\r\n * @param {number} min One side limit\r\n * @param {number} max Other side limit\r\n *\r\n * @return {number} Clamped value\r\n */\r\n\r\nmodule.exports = function(a, min, max){\r\n\treturn max > min ? Math.max(Math.min(a,max),min) : Math.max(Math.min(a,min),max);\r\n};\r\n\n\n//# sourceURL=webpack:///./node_modules/mumath/clamp.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/Projectile.js":
/*!***************************!*\
  !*** ./src/Projectile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec.js */ \"./src/Vec.js\");\n/* harmony import */ var color_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! color-interpolate */ \"./node_modules/color-interpolate/index.js\");\n/* harmony import */ var color_interpolate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(color_interpolate__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst bigG = -100;\n\n\nclass Projectile {\n  constructor(position, velocity, mass) {\n    this.position = position;\n    this.velocity = velocity;\n    this.acceleration = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n    this.mass = mass || 100;\n  }\n\n  computeColor () {\n    //    let colormap = interpolate(['blue', 'red']);\n    let colormap = x => `hsl(${260*x - 50},100%,50%)`;\n\n    return colormap(Math.cbrt(this.mass/100)/2);\n  }\n\n  updateAcceleration (projectiles) {\n    let totalForce = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,0);\n    projectiles.forEach(proj => {\n      if (proj != this) {\n        let {magnitude, angle} = \n          _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].minus(this.position, proj.position).toPolar();\n        let forceMag = bigG*proj.mass*this.mass/(magnitude);\n        // NOTICE THE ABOVE LINE... magnitude(distance) isn't squared.\n        // It's because the simulation is 2 dimensional.\n        let force = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fromPolar(forceMag, angle);\n        totalForce = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(totalForce, force);\n      }\n    });\n    this.acceleration = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].times(totalForce, 1 / this.mass);\n    return this.acceleration;\n  }\n\n  updateVelocity (elapsedTime) {\n    let dV = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].times(this.acceleration, elapsedTime);\n    this.velocity = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(this.velocity, dV);\n    return this.velocity;\n  }\n\n  updatePosition(elapsedTime) {\n    let v1 = this.velocity;\n    let v2 = this.updateVelocity(elapsedTime);\n    let vAvg = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].times(_Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(v1, v2), 0.5);\n\n    let d = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].times(vAvg, elapsedTime);\n    this.position = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(this.position, d);\n    return this.position;\n  }\n\n  draw(cx) {\n    let oldColor = cx.fillStyle = cx.strokeStyle;\n\n    cx.fillStyle = cx.strokeStyle = this.computeColor();\n    cx.fillRect(this.position.x - 5, this.position.y - 5, 10, 10);\n    cx.beginPath();\n    cx.moveTo(this.position.x, this.position.y);\n    let endPoint = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(this.position, this.velocity);\n    cx.lineTo(endPoint.x, endPoint.y);\n    cx.stroke();\n\n    cx.strokeStyle = cx.fillStyle = oldColor;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);\n\n\n//# sourceURL=webpack:///./src/Projectile.js?");

/***/ }),

/***/ "./src/Vec.js":
/*!********************!*\
  !*** ./src/Vec.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vec; });\nclass Vec {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  toPolar() {\n    return {\n      magnitude: Math.hypot(this.x, this.y),\n      angle: Math.atan2(this.y, this.x)\n    };\n  }\n\n  static fromPolar(mag, angle) {\n    return new Vec(\n      mag * Math.cos(angle),\n      mag * Math.sin(angle)\n    );\n  }\n\n  static plus(vec1, vec2) {\n    return new Vec(\n      vec1.x + vec2.x,\n      vec1.y + vec2.y\n    );\n  }\n\n  static minus(vec1, vec2) {\n    return new Vec(\n      vec1.x - vec2.x,\n      vec1.y - vec2.y\n    );\n  }\n\n  static times(vec, scalar) {\n    return new Vec(\n      vec.x * scalar,\n      vec.y * scalar\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Vec.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projectile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projectile.js */ \"./src/Projectile.js\");\n/* harmony import */ var _Vec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec.js */ \"./src/Vec.js\");\n\n\n\n\nlet projectiles = [];\nlet clickAndDrag = {};\n\nlet canvas = document.getElementById('canvas');\nlet cx = canvas.getContext('2d');\n\nfunction addButtons () {\n  let massControl = document.getElementById('mass-control');\n\n  function button(val) {\n    let button = document.createElement('button');\n    button.textContent = val;\n    massControl.appendChild(button);\n    button.addEventListener('click', () => {\n      document.getElementById('mass').value = val;\n    });\n  }\n  button(10);\n  button(50);\n  button(100);\n  button(200);\n  button(500);\n  button(750);\n  button(1000);\n}\n\nfunction animate() {\n  let start;\n  let prevTime;\n\n  function draw(timestamp) {\n    cx.fillRect(0, 0, canvas.width, canvas.height);\n    if (!start) start = timestamp;\n\n    let elapsedTime = (timestamp - prevTime) / 1000;\n\n    if (JSON.stringify(clickAndDrag) != JSON.stringify({})) {\n      cx.strokeStyle = 'blue';\n\n      cx.beginPath();\n      cx.moveTo(clickAndDrag.sX, clickAndDrag.sY);\n      cx.lineTo(clickAndDrag.cX, clickAndDrag.cY);\n      cx.stroke();\n\n      cx.strokeStyle = 'black';\n    }\n\n    projectiles.forEach(proj => {\n      proj.updateAcceleration(projectiles);\n    });\n\n    projectiles.forEach(proj => {\n      proj.draw(cx);\n      proj.updatePosition(elapsedTime);\n    });\n    \n    prevTime = timestamp; //store time for next frame;\n    requestAnimationFrame(draw);\n  }\n\n  requestAnimationFrame(draw);\n}\n\nfunction handleMouseDown(event) {\n  let startX = event.offsetX;\n  let startY = event.offsetY;\n  clickAndDrag.sX = startX;\n  clickAndDrag.sY = startY;\n\n\n  function handleMouseDrag(event) {\n    clickAndDrag.cX = event.offsetX;\n    clickAndDrag.cY = event.offsetY;\n  }\n  canvas.addEventListener('mousemove', handleMouseDrag);\n\n\n  function handleMouseUp(event) {\n    let endX = event.offsetX;\n    let endY = event.offsetY;\n\n    let newProj = computeProjectile(startX, startY, endX, endY);\n    newProj.mass = document.getElementById('mass').value;\n    projectiles.push(newProj);\n\n    clickAndDrag = {};\n    canvas.removeEventListener('mouseup', handleMouseUp);\n    canvas.removeEventListener('mousemove', handleMouseDrag);\n  }\n  canvas.addEventListener('mouseup', handleMouseUp);\n\n}\ncanvas.addEventListener('mousedown', handleMouseDown);\n\naddButtons();\nanimate();\n\nfunction computeProjectile (x1, y1, x2, y2) {\n\n  let startVec = new _Vec_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x1, y1);\n  let endVec = new _Vec_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x2, y2);\n  let deltaVec = _Vec_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minus(endVec, startVec);\n  let proj = new _Projectile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startVec, deltaVec);\n\n  //console.log('startVec', startVec);\n  //console.log('endVec', endVec);\n  //console.log('proj', proj);\n\n  return proj;\n}\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });