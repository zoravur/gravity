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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/color-interpolate/index.js":
/*!*************************************************!*\
  !*** ./node_modules/color-interpolate/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @module  color-interpolate
 * Pick color from palette by index
 */

const parse = __webpack_require__(/*! color-parse */ "./node_modules/color-parse/index.js");
const hsl = __webpack_require__(/*! color-space/hsl */ "./node_modules/color-space/hsl.js");
const lerp = __webpack_require__(/*! lerp */ "./node_modules/lerp/index.js");
const clamp = __webpack_require__(/*! mumath/clamp */ "./node_modules/mumath/clamp.js");

module.exports = interpolate;

function interpolate (palette) {
	palette = palette.map(c => {
		c = parse(c);
		if (c.space != 'rgb') {
			if (c.space != 'hsl') throw `${c.space} space is not supported.`;
			c.values = hsl.rgb(c.values);
		}
		c.values.push(c.alpha);
		return c.values;
	});

	return (t, mix = lerp) => {
		t = clamp(t, 0, 1);

		let idx = ( palette.length - 1 ) * t,
			lIdx = Math.floor( idx ),
			rIdx = Math.ceil( idx );

		t = idx - lIdx;

		let lColor = palette[lIdx], rColor = palette[rIdx];

		let result = lColor.map((v, i) => {
			v = mix(v, rColor[i], t);
			if (i < 3) v = Math.round(v);
			return v;
		});

		if (result[3] === 1) {
			return `rgb(${result.slice(0,3)})`;
		}
		return `rgba(${result})`;
	};
}


/***/ }),

/***/ "./node_modules/color-name/index.js":
/*!******************************************!*\
  !*** ./node_modules/color-name/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),

/***/ "./node_modules/color-parse/index.js":
/*!*******************************************!*\
  !*** ./node_modules/color-parse/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**
 * @module color-parse
 */



var names = __webpack_require__(/*! color-name */ "./node_modules/color-name/index.js")
var isObject = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js")
var defined = __webpack_require__(/*! defined */ "./node_modules/defined/index.js")

module.exports = parse

/**
 * Base hues
 * http://dev.w3.org/csswg/css-color/#typedef-named-hue
 */
//FIXME: use external hue detector
var baseHues = {
	red: 0,
	orange: 60,
	yellow: 120,
	green: 180,
	blue: 240,
	purple: 300
}

/**
 * Parse color from the string passed
 *
 * @return {Object} A space indicator `space`, an array `values` and `alpha`
 */
function parse (cstr) {
	var m, parts = [], alpha = 1, space

	if (typeof cstr === 'string') {
		//keyword
		if (names[cstr]) {
			parts = names[cstr].slice()
			space = 'rgb'
		}

		//reserved words
		else if (cstr === 'transparent') {
			alpha = 0
			space = 'rgb'
			parts = [0,0,0]
		}

		//hex
		else if (/^#[A-Fa-f0-9]+$/.test(cstr)) {
			var base = cstr.slice(1)
			var size = base.length
			var isShort = size <= 4
			alpha = 1

			if (isShort) {
				parts = [
					parseInt(base[0] + base[0], 16),
					parseInt(base[1] + base[1], 16),
					parseInt(base[2] + base[2], 16)
				]
				if (size === 4) {
					alpha = parseInt(base[3] + base[3], 16) / 255
				}
			}
			else {
				parts = [
					parseInt(base[0] + base[1], 16),
					parseInt(base[2] + base[3], 16),
					parseInt(base[4] + base[5], 16)
				]
				if (size === 8) {
					alpha = parseInt(base[6] + base[7], 16) / 255
				}
			}

			if (!parts[0]) parts[0] = 0
			if (!parts[1]) parts[1] = 0
			if (!parts[2]) parts[2] = 0

			space = 'rgb'
		}

		//color space
		else if (m = /^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(cstr)) {
			var name = m[1]
			var base = name.replace(/a$/, '')
			space = base
			var size = base === 'cmyk' ? 4 : base === 'gray' ? 1 : 3
			parts = m[2].trim()
				.split(/\s*,\s*/)
				.map(function (x, i) {
					//<percentage>
					if (/%$/.test(x)) {
						//alpha
						if (i === size)	return parseFloat(x) / 100
						//rgb
						if (base === 'rgb') return parseFloat(x) * 255 / 100
						return parseFloat(x)
					}
					//hue
					else if (base[i] === 'h') {
						//<deg>
						if (/deg$/.test(x)) {
							return parseFloat(x)
						}
						//<base-hue>
						else if (baseHues[x] !== undefined) {
							return baseHues[x]
						}
					}
					return parseFloat(x)
				})

			if (name === base) parts.push(1)
			alpha = parts[size] === undefined ? 1 : parts[size]
			parts = parts.slice(0, size)
		}

		//named channels case
		else if (cstr.length > 10 && /[0-9](?:\s|\/)/.test(cstr)) {
			parts = cstr.match(/([0-9]+)/g).map(function (value) {
				return parseFloat(value)
			})

			space = cstr.match(/([a-z])/ig).join('').toLowerCase()
		}
	}

	//numeric case
	else if (!isNaN(cstr)) {
		space = 'rgb'
		parts = [cstr >>> 16, (cstr & 0x00ff00) >>> 8, cstr & 0x0000ff]
	}

	//object case - detects css cases of rgb and hsl
	else if (isObject(cstr)) {
		var r = defined(cstr.r, cstr.red, cstr.R, null)

		if (r !== null) {
			space = 'rgb'
			parts = [
				r,
				defined(cstr.g, cstr.green, cstr.G),
				defined(cstr.b, cstr.blue, cstr.B)
			]
		}
		else {
			space = 'hsl'
			parts = [
				defined(cstr.h, cstr.hue, cstr.H),
				defined(cstr.s, cstr.saturation, cstr.S),
				defined(cstr.l, cstr.lightness, cstr.L, cstr.b, cstr.brightness)
			]
		}

		alpha = defined(cstr.a, cstr.alpha, cstr.opacity, 1)

		if (cstr.opacity != null) alpha /= 100
	}

	//array
	else if (Array.isArray(cstr) || global.ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(cstr)) {
		parts = [cstr[0], cstr[1], cstr[2]]
		space = 'rgb'
		alpha = cstr.length === 4 ? cstr[3] : 1
	}

	return {
		space: space,
		values: parts,
		alpha: alpha
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/color-space/hsl.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/hsl.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @module color-space/hsl
 */


var rgb = __webpack_require__(/*! ./rgb */ "./node_modules/color-space/rgb.js");

module.exports = {
	name: 'hsl',
	min: [0,0,0],
	max: [360,100,100],
	channel: ['hue', 'saturation', 'lightness'],
	alias: ['HSL'],

	rgb: function(hsl) {
		var h = hsl[0] / 360,
				s = hsl[1] / 100,
				l = hsl[2] / 100,
				t1, t2, t3, rgb, val;

		if (s === 0) {
			val = l * 255;
			return [val, val, val];
		}

		if (l < 0.5) {
			t2 = l * (1 + s);
		}
		else {
			t2 = l + s - l * s;
		}
		t1 = 2 * l - t2;

		rgb = [0, 0, 0];
		for (var i = 0; i < 3; i++) {
			t3 = h + 1 / 3 * - (i - 1);
			if (t3 < 0) {
				t3++;
			}
			else if (t3 > 1) {
				t3--;
			}

			if (6 * t3 < 1) {
				val = t1 + (t2 - t1) * 6 * t3;
			}
			else if (2 * t3 < 1) {
				val = t2;
			}
			else if (3 * t3 < 2) {
				val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			}
			else {
				val = t1;
			}

			rgb[i] = val * 255;
		}

		return rgb;
	}
};


//extend rgb
rgb.hsl = function(rgb) {
	var r = rgb[0]/255,
			g = rgb[1]/255,
			b = rgb[2]/255,
			min = Math.min(r, g, b),
			max = Math.max(r, g, b),
			delta = max - min,
			h, s, l;

	if (max === min) {
		h = 0;
	}
	else if (r === max) {
		h = (g - b) / delta;
	}
	else if (g === max) {
		h = 2 + (b - r) / delta;
	}
	else if (b === max) {
		h = 4 + (r - g)/ delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	l = (min + max) / 2;

	if (max === min) {
		s = 0;
	}
	else if (l <= 0.5) {
		s = delta / (max + min);
	}
	else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};


/***/ }),

/***/ "./node_modules/color-space/rgb.js":
/*!*****************************************!*\
  !*** ./node_modules/color-space/rgb.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * RGB space.
 *
 * @module  color-space/rgb
 */


module.exports = {
	name: 'rgb',
	min: [0,0,0],
	max: [255,255,255],
	channel: ['red', 'green', 'blue'],
	alias: ['RGB']
};


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/normalize.css/normalize.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/normalize.css/normalize.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/defined/index.js":
/*!***************************************!*\
  !*** ./node_modules/defined/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function () {
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] !== undefined) return arguments[i];
    }
};


/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),

/***/ "./node_modules/lerp/index.js":
/*!************************************!*\
  !*** ./node_modules/lerp/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function lerp(v0, v1, t) {
    return v0*(1-t)+v1*t
}
module.exports = lerp

/***/ }),

/***/ "./node_modules/mumath/clamp.js":
/*!**************************************!*\
  !*** ./node_modules/mumath/clamp.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Clamp value.
 * Detects proper clamp min/max.
 *
 * @param {number} a Current value to cut off
 * @param {number} min One side limit
 * @param {number} max Other side limit
 *
 * @return {number} Clamped value
 */

module.exports = function(a, min, max){
	return max > min ? Math.max(Math.min(a,max),min) : Math.max(Math.min(a,min),max);
};


/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader!./normalize.css */ "./node_modules/css-loader/index.js!./node_modules/normalize.css/normalize.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/Input.ts":
/*!**********************!*\
  !*** ./src/Input.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/Projectile.ts");
const Vec_1 = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
const Options_1 = __webpack_require__(/*! ./Options */ "./src/Options.ts");
//import State from './State';
'use strict';
class Input {
    constructor(canvas, fn) {
        this.drawInput = () => { };
        this.getInputLine = () => { };
        this.options = Options_1.default;
        this.canvas = canvas;
        this.cx = canvas.getContext('2d');
        this.addProjectile = fn;
        this.camera = {
            delta: Vec_1.default(),
            position: Vec_1.default()
        };
        canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    }
    getTransform() {
        return this.camera.position.plus(this.camera.delta);
    }
    handleMouseDown(event) {
        if (event.shiftKey) {
            this.beginViewDrag(Vec_1.default(event.offsetX, event.offsetY));
        }
        else {
            this.beginVectorDraw(Vec_1.default(event.offsetX, event.offsetY));
        }
    }
    beginViewDrag(startVec) {
        let canvas = this.canvas;
        let camera = this.camera;
        let moveHandle = event => {
            let delta = Vec_1.default(event.offsetX, event.offsetY).minus(startVec);
            camera.delta = delta;
        };
        canvas.addEventListener('mousemove', moveHandle);
        let upHandle = event => {
            camera.position = camera.delta.plus(camera.position);
            camera.delta = Vec_1.default();
            canvas.removeEventListener('mousemove', moveHandle);
            canvas.removeEventListener('mouseup', upHandle);
        };
        canvas.addEventListener('mouseup', upHandle);
    }
    beginVectorDraw(startVec) {
        let canvas = this.canvas;
        startVec = startVec.minus(this.camera.position); // Correct for camera placement
        let moveHandle = event => {
            let end = Vec_1.default(event.offsetX, event.offsetY);
            end = end.minus(this.camera.position);
            this.drawInput = () => {
                this.cx.save();
                this.cx.strokeStyle = 'blue';
                this.cx.beginPath();
                this.cx.moveTo(startVec.x, startVec.y);
                this.cx.lineTo(end.x, end.y);
                this.cx.stroke();
                this.cx.restore();
            };
            this.getInputLine = () => ({
                start: startVec,
                end: end
            });
        };
        canvas.addEventListener('mousemove', moveHandle);
        let upHandle = event => {
            let end = Vec_1.default(event.offsetX, event.offsetY);
            end = end.minus(this.camera.position);
            this.drawInput = () => { };
            this.getInputLine = () => { };
            let delta = end.minus(startVec);
            this.addProjectile(new Projectile_1.default(startVec, delta, this.options.projectileMass));
            canvas.removeEventListener('mousemove', moveHandle);
            canvas.removeEventListener('mouseup', upHandle);
        };
        canvas.addEventListener('mouseup', upHandle);
    }
}
exports.default = Input;


/***/ }),

/***/ "./src/Options.ts":
/*!************************!*\
  !*** ./src/Options.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function Options(onchange) {
    //let options = {};
    /*
    const fields = [
        ['projectileMass', 'mass', 100],
        ['bigG', 'big-g-control', -50],
        ['inverseDegree', 'inverse-degree-control', 2],
        ['pause', 'pause'],
        ['paths', 'paths'],
        ['integration', 'integration'],
        ['accelerationArrow', 'acceleration-arrow'],
        ['velocityArrow', 'velocity-arrow'],
        ['historyLength', 'history-length', 500],
    ];
    */
    /*
    fields.forEach(([key, elementId, defaultVal]) => {
        options[key] = getValueFromInputElement(document.getElementById(<string>elementId)) || defaultVal;
        watchChange(key,elementId,defaultVal);
    });

    function watchChange(key, elementId, defaultVal?) {
        document.getElementById(elementId).onchange = function (event) {
            let inputElement = (<HTMLInputElement>event.target);
            options[key] = getValueFromInputElement(inputElement) || defaultVal;
            onchange(options);
           
        }
    }

    function getValueFromInputElement(inputElement) {
        if (inputElement.type == 'checkbox') {
            return inputElement.checked
        } else if (inputElement.type == 'number') {
            return +inputElement.value
        } else {
            return inputElement.value
        }
    }

    return options;

     */
}
exports.Options = Options;
//TODO: change this so that options is an object that will mutate itself based on the changes.
exports.default = {
    get projectileMass() {
        return +(document.querySelector('#mass').value || 100);
    },
    get bigG() {
        return +(document.querySelector('#big-g-control').value || -50);
    },
    get inverseDegree() {
        return +(document.querySelector('#inverse-degree-control').value || 2);
    },
    get pause() {
        return document.querySelector('#pause').checked;
    },
    get paths() {
        return document.querySelector('#paths').checked;
    },
    get integration() {
        return document.querySelector('#integration').value;
    },
    get accelerationArrow() {
        return document.querySelector('#acceleration-arrow').checked;
    },
    get velocityArrow() {
        return document.querySelector('#velocity-arrow').checked;
    }
};


/***/ }),

/***/ "./src/Paths.ts":
/*!**********************!*\
  !*** ./src/Paths.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class PathHistory extends Map {
    addStep(projectiles, options) {
        projectiles.forEach(proj => {
            if (this.has(proj.id)) {
                let path = this.get(proj.id).position;
                path.unshift(proj.position);
                path.length = Math.min(path.length, options.historyLength);
            }
            else {
                this.set(proj.id, { position: [proj.position], mass: proj.mass });
            }
        });
    }
    getFullHistory() {
        return Array.from(this.values());
    }
}
exports.default = PathHistory;


/***/ }),

/***/ "./src/Projectile.ts":
/*!***************************!*\
  !*** ./src/Projectile.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vec_1 = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
class Projectile {
    constructor(position, velocity, mass) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = Vec_1.default(0, 0);
        this.mass = mass || 50;
        this.id = Math.random();
    }
    get momentum() {
        return this.velocity.times(this.mass);
    }
    set momentum(vec) {
        this.velocity = vec.times(1 / this.mass);
    }
    /*
    computeColor () {
      let colormap = interpolate(['white', 'brown', 'orange', 'red']);
      return colormap(Math.log10(Math.max(this.mass, 1))/4);
    }
    */
    /*
    updateAcceleration (projectiles: Projectile[]) {
      return this.acceleration = projectiles
        .filter(({ id }) => (id != this.id))
        .map(proj => ({
          displacement: this.position.minus(proj.position),
          mass: proj.mass
        }))
        .map(({displacement, mass}) => Vec(
          // Gmm/r^2
          constants.bigG*mass/(Math.pow(displacement.magnitude, constants.inverseDegree)),
          displacement.angle,
          true // Is polar
        ))
        .reduce((total, cur) => total.plus(cur), Vec())
        //.times(1/this.mass)
    }
    */
    /*
    getForce(projectiles) {
      return projectiles
      .filter(({ id }) => (id != this.id))
      .map(proj => ({
        displacement: this.position.minus(proj.position),
        mass: proj.mass
      }))
      .map(({displacement, mass}) => Vec(
        // Gmm/r^2
        constants.bigG*mass*this.mass/(Math.pow(displacement.magnitude, constants.inverseDegree)),
        displacement.angle,
        true // Is polar
      ))
      .reduce((total, cur) => total.plus(cur), Vec())
    }
    */
    //The new and improved updateVelocity & updatePosition
    // verletIntegrate(elapsedTime, projectiles) {
    //   let a_0 = this.acceleration.plus(Vec(0,0));
    //   // d = v1*t + 1/2at^2
    //   let delta = this.velocity.times(elapsedTime).plus(a_0.times(0.5*elapsedTime*elapsedTime));
    //   this.position = this.position.plus(delta);
    //   this.updateAcceleration(projectiles);
    //   let avgAcceleration = a_0.plus(this.acceleration).times(0.5);
    //   // a = (v2 - v1) / t => v2 = v1 + at
    //   this.velocity = this.velocity.plus(avgAcceleration.times(elapsedTime));
    //   return this;
    // }
    // implicitEulerIntegrate(h, projectiles) {
    //   this.updateAcceleration(projectiles);
    //   this.velocity = this.velocity.plus(this.acceleration.times(h));
    //   this.position = this.position.plus(this.velocity.times(h));
    //   return this;
    // }
    // eulerIntegrate(h, projectiles) {
    //   this.updateAcceleration(projectiles);
    //   this.position = this.position.plus(this.velocity.times(h));
    //   this.velocity = this.velocity.plus(this.acceleration.times(h));
    //   return this;
    // }
    // midpointIntegrate(h, projectiles) {
    //   this.position = this.position.plus(this.velocity.times(h/2));
    //   this.velocity = this.velocity.plus(this.updateAcceleration(projectiles).times(h));
    //   this.position = this.position.plus(this.velocity.times(h/2));
    //   return this;
    // }
    // fourthOrderIntegrate(h, projectiles) {
    //   // n = 2^(1/3)
    //   const n = 1.2599210498948732;
    //   const w_0 = 1/(2-n);
    //   const w_1 = -n/(2-n);
    //   this.midpointIntegrate(w_0*h, projectiles);
    //   this.midpointIntegrate(w_1*h, projectiles);
    //   this.midpointIntegrate(w_0*h, projectiles);
    //   return this;
    // }
    // //static momentumIntegrate()
    // static RK4Integrate(h: number, projectiles: Projectile[]) {
    //   let v1 = projectiles.map(proj => proj.velocity);
    //   let p1 = projectiles.map(proj => proj.position);
    //   let a1 = projectiles.map(proj => proj.updateAcceleration(projectiles));
    //   let v2 = v1.map((vel, i) => vel.plus(a1[i].times(h/2)));
    //   let p2 = p1.map((pos, i) => pos.plus(v1[i].times(h/2)));
    //   projectiles.forEach((proj, i) => {proj.position = p2[i]});
    //   let a2 = projectiles.map(proj => proj.updateAcceleration(projectiles));
    //   let v3 = v2.map((vel, i) => vel.plus(a2[i].times(h/2)));
    //   let p3 = p2.map((pos, i) => pos.plus(v2[i].times(h/2)));
    //   projectiles.forEach((proj, i) => {proj.position = p3[i]});
    //   let a3 = projectiles.map(proj => proj.updateAcceleration(projectiles));
    //   let v4 = v3.map((vel, i) => vel.plus(a3[i].times(h)));
    //   let p4 = p3.map((pos, i) => pos.plus(v3[i].times(h)));
    //   projectiles.forEach((proj, i) => {proj.position = p4[i]});
    //   let a4 = projectiles.map(proj => proj.updateAcceleration(projectiles));
    //   projectiles.forEach((proj, i) => {
    //     proj.acceleration = a1[i].plus(a2[i].times(2)).plus(a3[i].times(2)).plus(a4[i]).times(1/6);
    //     proj.velocity = v1[i].plus(v2[i].times(2)).plus(v3[i].times(2)).plus(v4[i]).times(1/6);
    //     proj.position = proj.position.plus(proj.velocity.times(h));
    //     proj.velocity = proj.velocity.plus(proj.acceleration.times(h));
    //   });
    //   return projectiles;
    // }
    computeRadius() {
        return (Math.log(Math.abs(this.mass)) + 2) / 1.5;
    }
    get radius() {
        return this._radius || (this._radius = this.computeRadius());
    }
}
exports.default = Projectile;
/*
draw(cx: CanvasRenderingContext2D) {
  cx.save();
  //cx.translate(0.5, 0.5);



  cx.fillStyle = cx.strokeStyle = this.computeColor();
  cx.beginPath();
  cx.arc(this.position.x, this.position.y, this.computeRadius(), 0, 2*Math.PI);
  cx.fill();

  if (constants.velocityArrow)
    arrow(cx, this.position, this.position.plus(this.velocity));
  if (constants.accelerationArrow)
    arrow(cx, this.position, this.position.plus(this.acceleration));
  cx.restore();
}
*/ 


/***/ }),

/***/ "./src/Vec.ts":
/*!********************!*\
  !*** ./src/Vec.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector {
    constructor(x, y, isPolar) {
        if (!(this instanceof Vector)) {
            return new Vector(...arguments);
        }
        if (x === undefined) {
            this.x = 0;
            this.y = 0;
            return;
        }
        if (isPolar) {
            // x = magnitude, y = angle
            this.x = x * Math.cos(y);
            this.y = x * Math.sin(y);
            return;
        }
        this.x = x;
        this.y = y;
    }
    toPolar() {
        return {
            magnitude: Math.hypot(this.x, this.y),
            angle: Math.atan2(this.y, this.x)
        };
    }
    get magnitude() {
        return Math.hypot(this.x, this.y);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    get degrees() {
        return this.angle / Math.PI * 180;
    }
    normalize() {
        return this.times(1 / this.magnitude);
    }
    normalize_() {
        this.x /= this.magnitude;
        this.y /= this.magnitude;
        return this;
    }
    plus(v) {
        return new Vector(this.x + v.x, this.y + v.y);
    }
    plus_(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }
    minus(v) {
        return new Vector(this.x - v.x, this.y - v.y);
    }
    minus_(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }
    times(scalar) {
        return new Vector(this.x * scalar, this.y * scalar);
    }
    times_(s) {
        this.x *= s;
        this.y *= s;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    rotateAround(a, point) {
        let { magnitude, angle } = this.minus(point).toPolar();
        angle += a;
        return (new Vector(magnitude, angle, true)).plus(point);
    }
    rotate(a) {
        if (Math.abs(a) > 2 * Math.PI)
            console.log('Check to see if your rotations are in radians');
        let { magnitude, angle } = this.toPolar();
        angle += a;
        return new Vector(magnitude, angle, true);
    }
    proj(v) {
        let vhat = v.normalize();
        return vhat.times(this.dot(vhat));
    }
}
exports.Vector = Vector;
let Vec = function (x, y, isPolar) { return new Vector(x, y, isPolar); };
exports.default = Vec;


/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vec_1 = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
const Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/Projectile.ts");
const interpolate = __webpack_require__(/*! color-interpolate */ "./node_modules/color-interpolate/index.js");
let cx;
function render(canvas, itemsToRender, rules) {
    if (!cx)
        cx = canvas.getContext('2d');
    cx.clearRect(0, 0, canvas.width, canvas.height);
    cx.save();
    if (rules.transform) {
        let { x, y } = rules.transform;
        cx.translate(x, y);
    }
    if (itemsToRender.history) {
        if (rules.paths) {
            let history = itemsToRender.history;
            for (let proj of history) {
                proj = proj[1];
                drawPathHistory(cx, proj.position, proj.mass);
            }
        }
    }
    let state = itemsToRender.projectiles;
    (state || console.log(`state is being weird: ${JSON.stringify(state)}`)) && state.forEach(proj => {
        cx.save();
        drawProjectile(cx, proj, rules);
        cx.restore();
    });
    if (itemsToRender.inputLine) {
        let inputLine = itemsToRender.inputLine;
        cx.save();
        drawInput(cx, inputLine);
        cx.restore();
    }
    cx.restore();
}
exports.render = render;
;
const drawPathHistory = (cx, path, mass) => {
    cx.fillStyle = cx.strokeStyle = colormap(Math.log10(Math.max(mass, 1)) / 4);
    cx.beginPath();
    path.forEach(({ x, y }) => {
        cx.lineTo(x, y);
    });
    cx.stroke();
};
const drawProjectile = (cx, proj, options) => {
    cx.fillStyle = cx.strokeStyle = computeProjectileColor(proj);
    cx.beginPath();
    cx.arc(proj.position.x, proj.position.y, (proj._radius || Projectile_1.default.prototype.computeRadius.apply(proj)), 0, 2 * Math.PI);
    cx.fill();
    let pos = Object.assign(Vec_1.default(), proj.position);
    let vel = Object.assign(Vec_1.default(), proj.velocity);
    let accel = Object.assign(Vec_1.default(), proj.acceleration);
    if (options.velocityArrow)
        arrow(cx, pos, pos.plus(vel));
    if (options.accelerationArrow)
        arrow(cx, pos, pos.plus(accel));
};
const drawInput = (cx, { start, end }) => {
    cx.strokeStyle = 'blue';
    cx.beginPath();
    cx.moveTo(start.x, start.y);
    cx.lineTo(end.x, end.y);
    cx.stroke();
};
let colormap = interpolate(['white', 'brown', 'orange', 'red']);
function computeProjectileColor(proj) {
    return colormap(Math.log10(Math.max(proj.mass, 1)) / 4);
}
let arrow = (cx, s, e) => {
    cx.beginPath();
    cx.moveTo(s.x, s.y);
    cx.lineTo(e.x, e.y);
    cx.stroke();
    cx.beginPath();
    cx.moveTo(e.x, e.y);
    let { x, y } = e.minus(s).normalize().times(7).rotate(5 / 6 * Math.PI).plus(e);
    cx.lineTo(x, y);
    ({ x, y } = e.minus(s).normalize().times(7).rotate(-5 / 6 * Math.PI).plus(e));
    cx.lineTo(x, y);
    cx.closePath();
    cx.fill();
};
exports.arrow = arrow;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
const Input_1 = __webpack_require__(/*! ./Input */ "./src/Input.ts");
const Paths_1 = __webpack_require__(/*! ./Paths */ "./src/Paths.ts");
const Options_1 = __webpack_require__(/*! ./Options */ "./src/Options.ts");
const View_1 = __webpack_require__(/*! ./View */ "./src/View.ts");
__webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
let fg = document.querySelector('#fg');
fg.id = "fg";
fg.style.zIndex = '1';
fg.style.position = 'absolute';
//Object.assign(fg.style, {border: "1px solid rgb(0, 0, 0)", position: "absolute; z-index: 1"});
//let fg: HTMLCanvasElement = document.querySelector('#fg');
let bg = document.querySelector('#bg');
document.querySelector('#graphics').insertBefore(fg, bg);
let input;
let stats;
let options;
let pathHistory;
ui_1.addButtons();
function init() {
    console.log('init');
    let worker = new Worker('worker.js');
    input = new Input_1.default(fg, proj => {
        worker.postMessage({
            type: 'new-projectile',
            projectile: proj
        });
    });
    // TODO: Change options to an Object: (i.e. new Options(...)  )
    options = Options_1.Options((newOptions) => {
        worker.postMessage({
            type: 'set-engine-rules',
            rules: newOptions,
        });
    });
    let bgx = bg.getContext('2d');
    bgx.fillStyle = 'black';
    bgx.fillRect(0, 0, bg.width, bg.height);
    pathHistory = new Paths_1.default();
    function handleSimulationStep(e) {
        pathHistory.addStep(e.data.projectiles, options);
        stats.begin();
        requestAnimationFrame(() => {
            stats.end();
            View_1.render(fg, {
                projectiles: e.data.projectiles,
                inputLine: input.getInputLine(),
                history: pathHistory
            }, Object.assign({}, options, {
                transform: input.getTransform()
            }));
        });
    }
    worker.onmessage = e => {
        switch (e.data.type) {
            case 'simulation-step':
                handleSimulationStep(e);
                break;
            default:
                throw Error('Unhandled message type');
                break;
        }
    };
}
// (function () {
//   stats = new Stats();
//   stats.setMode(0);
//
//   stats.domElement.style.position = 'absolute';
//   stats.domElement.style.left = '0px';
//   stats.domElement.style.top = '0px';
//
//   document.body.appendChild(stats.domElement);
// })();
init();


/***/ }),

/***/ "./src/ui.ts":
/*!*******************!*\
  !*** ./src/ui.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function addButtons() {
    let massControl = document.getElementById('mass-control');
    function button(val) {
        let button = document.createElement('button');
        button.textContent = String(val);
        massControl.appendChild(button);
        button.addEventListener('click', () => {
            document.querySelector('#mass').value = String(val);
        });
    }
    [1, 10, 100, 500, 1000, 2500, 5000, 10000].map(button);
}
exports.addButtons = addButtons;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map