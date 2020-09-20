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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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

/***/ "./node_modules/object-path/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-path/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if ( true && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    function hasShallowProperty(obj, prop) {
      return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),

/***/ "./node_modules/uuid/index.js":
/*!************************************!*\
  !*** ./node_modules/uuid/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(/*! ./v1 */ "./node_modules/uuid/v1.js");
var v4 = __webpack_require__(/*! ./v4 */ "./node_modules/uuid/v4.js");

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v1.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v1.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


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
	g = g || new Function("return this")();
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
const Vec_1 = __webpack_require__(/*! ./lib/Vec */ "./src/lib/Vec.ts");
const Subject_1 = __webpack_require__(/*! ./Subject */ "./src/Subject.ts");
class Input extends Subject_1.default {
    constructor(canvas) {
        super();
        this.drawInput = () => { };
        this.getInputLine = () => { };
        this.canvas = canvas;
        this.cx = canvas.getContext('2d');
        this.camera = {
            delta: Vec_1.default(0, 0),
            position: Vec_1.default(0, 0)
        };
        canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
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
            this.camera.delta = Vec_1.default(event.offsetX, event.offsetY).minus(startVec);
            this.emit({ cameraUpdate: this.camera.position.plus(this.camera.delta) });
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
            this.emit({
                inputArrow: {
                    start: startVec, delta: end.minus(startVec)
                }
            });
        };
        canvas.addEventListener('mousemove', moveHandle);
        let upHandle = event => {
            let end = Vec_1.default(event.offsetX, event.offsetY);
            end = end.minus(this.camera.position);
            this.drawInput = () => { };
            this.getInputLine = () => { };
            let delta = end.minus(startVec);
            this.emit({
                newProjectileArrow: {
                    start: startVec,
                    delta
                }
            });
            canvas.removeEventListener('mousemove', moveHandle);
            canvas.removeEventListener('mouseup', upHandle);
        };
        canvas.addEventListener('mouseup', upHandle);
    }
}
exports.default = Input;


/***/ }),

/***/ "./src/OptionsManager.ts":
/*!*******************************!*\
  !*** ./src/OptionsManager.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __webpack_require__(/*! ./Subject */ "./src/Subject.ts");
const objectPath = __webpack_require__(/*! object-path */ "./node_modules/object-path/index.js");
const inputFieldIds = ['mass', 'pause', /*'speed',*/ 'force', 'velocity', 'paths'];
const optObjectPaths = ['particles.mass', 'playback.pause',
    /*'playback.speed', */ 'display.forceVectors', 'display.velocityVectors', 'display.paths'];
class OptionsManager extends Subject_1.default {
    constructor() {
        super();
        this.currentOptions = {
            particles: { mass: 50 },
            playback: { pause: false, speed: 1 },
            display: { forceVectors: false, velocityVectors: false, paths: false }
        };
    }
    createEventListener(path) {
        let self = this;
        return function onchange(event) {
            let target = (event.target);
            let value;
            switch (target.type) {
                case 'number':
                    value = Number(target.value);
                    break;
                case 'checkbox':
                    value = target.checked;
                    break;
            }
            objectPath.set(self.currentOptions, path, value);
            self.emit(self.currentOptions);
        };
    }
    registerHandlers() {
        this.addButtons();
        inputFieldIds.forEach((id, idx) => {
            let inputEl = document.getElementById(id);
            inputEl.onchange = this.createEventListener(optObjectPaths[idx]);
        });
    }
    addButtons() {
        let massControl = document.getElementById('mass-control');
        function button([val, label]) {
            let button = document.createElement('button');
            button.textContent = String(label);
            massControl.appendChild(button);
            massControl.appendChild(document.createElement("br"));
            button.addEventListener('click', () => {
                let massEl = document.getElementById('mass');
                massEl.value = String(val);
                massEl.onchange({
                    AT_TARGET: 0,
                    BUBBLING_PHASE: 0,
                    CAPTURING_PHASE: 0,
                    NONE: 0,
                    bubbles: false,
                    cancelBubble: false,
                    cancelable: false,
                    composed: false,
                    currentTarget: undefined,
                    defaultPrevented: false,
                    eventPhase: 0,
                    isTrusted: false,
                    returnValue: false,
                    srcElement: undefined,
                    timeStamp: 0,
                    type: "",
                    deepPath() {
                        return [];
                    },
                    initEvent(type, bubbles, cancelable) {
                    },
                    preventDefault() {
                    },
                    stopImmediatePropagation() {
                    },
                    stopPropagation() {
                    },
                    target: massEl
                });
            });
        }
        [[1, 'Tiny'],
            [10, 'Small'],
            [100, 'Medium'],
            [500, 'Large'],
            [2500, 'Huge'],
            [10000, 'Gigantic']
        ].map(button);
    }
}
exports.default = OptionsManager;


/***/ }),

/***/ "./src/ProjectileFactory.ts":
/*!**********************************!*\
  !*** ./src/ProjectileFactory.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Projectile_1 = __webpack_require__(/*! ./worker/Projectile */ "./src/worker/Projectile.ts");
class ProjectileFactory {
    constructor(defaultMass) {
        this.mass = defaultMass;
    }
    setMass(mass) {
        this.mass = mass;
    }
    create({ start, delta }) {
        return new Projectile_1.default(start, delta.times(1 / 2), this.mass);
    }
}
exports.default = ProjectileFactory;


/***/ }),

/***/ "./src/Simulator.ts":
/*!**************************!*\
  !*** ./src/Simulator.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __webpack_require__(/*! ./Subject */ "./src/Subject.ts");
const Message_1 = __webpack_require__(/*! ./worker/Message */ "./src/worker/Message.ts");
// wrapper for the physics simulation web worker
class Simulator extends Subject_1.default {
    constructor() {
        super();
        this.worker = new Worker('worker.js');
        this.worker.onmessage = this.onMessage.bind(this);
        this.play();
    }
    onMessage({ data }) {
        if (data.type == Message_1.MessageType.PHYSICS_STEP) {
            this.emit(data.payload);
        }
    }
    play() {
        this.worker.postMessage(Message_1.createMessage(Message_1.MessageType.PLAY));
        this.paused = false;
    }
    pause() {
        this.worker.postMessage(Message_1.createMessage(Message_1.MessageType.PAUSE));
        this.paused = true;
    }
    // TODO: Implement function that passes entire state to engine
    /*
    updateData() {
        this.worker.postMessage(createMessage(

        ))
    }
     */
    addProjectile(projectile) {
        this.worker.postMessage(Message_1.createMessage(Message_1.MessageType.NEW_PROJECTILE, projectile));
    }
}
exports.default = Simulator;


/***/ }),

/***/ "./src/StartMenu.ts":
/*!**************************!*\
  !*** ./src/StartMenu.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __webpack_require__(/*! ./Subject */ "./src/Subject.ts");
const Projectile_1 = __webpack_require__(/*! ./worker/Projectile */ "./src/worker/Projectile.ts");
const Vec_1 = __webpack_require__(/*! ./lib/Vec */ "./src/lib/Vec.ts");
const configs = {
    'Simple Orbit': [
        [[400, 400], [0, 0], 10000],
        [[500, 400], [0, 80], 10],
    ],
    'Binary System': [
        [[375, 400], [0, 62], 5000],
        [[425, 400], [0, -62], 5000],
        [[500, 400], [0, 80], 50],
        [[300, 400], [0, -80], 50],
        [[150, 300], [0, 50], 1],
    ],
    'Flower Pattern': [
        [[350, 350], [0, 50], 2500],
        [[350, 450], [50, 0], 2500],
        [[450, 350], [-50, 0], 2500],
        [[450, 450], [0, -50], 2500],
    ],
    'Orbit cloud': [[[283, 380], [0, -1], 10018], [[328, 386], [-41, 125], 57], [[325, 456], [-78, 40], 13], [[339, 215], [55, -1], 3], [[286, 175], [45, -15], 2], [[332, 308], [85, 25], 8], [[191, 540], [-61, -9], 2], [[329, 323], [24, 55], 3], [[230, 302], [14, -102], 2], [[1001, -717], [19, -14], 1], [[419, 258], [17, 62], 2], [[998, 1096], [-2, 24], 1], [[222, 177], [23, -58], 1], [[369, 150], [47, 6], 1], [[706, 70], [9, 27], 1], [[1071, 1130], [8, 20], 1], [[-119, 802], [-20, -17], 1], [[530, 957], [-24, 10], 1], [[631, 220], [11, 22], 1], [[392, 335], [-11, 74], 5], [[234, 318], [73, -104], 1], [[559, 420], [-5, 25], 1], [[384, -835], [14, -40], 1], [[126, 276], [36, -40], 2], [[246, 138], [36, -1], 2], [[398, 368], [-11, 87], 2], [[497, 77], [27, 16], 1], [[51, 41], [25, -30], 1], [[-159, 1242], [-37, 21], 1], [[635, -84], [27, 0], 1], [[-1952, 265], [-109, -18], 1], [[252, 478], [-91, -39], 3], [[665, 500], [-11, 35], 1], [[134, 140], [29, -13], 1], [[373, 830], [-34, 20], 1], [[406, 140], [14, 31], 1], [[471, 433], [-36, 28], 1], [[165, 471], [-27, -59], 3], [[236, 300], [100, -45], 1], [[164, 678], [-40, -12], 1], [[440, 434], [-55, 37], 2], [[298, 502], [-62, -55], 1], [[322, 578], [-54, 21], 1], [[300, 437], [-121, 61], 2], [[328, 555], [-68, 13], 1], [[229, 251], [53, -62], 1], [[-38, 373], [-46, -48], 1], [[-9, 226], [-8, -56], 1], [[131, 360], [3, -35], 1], [[260, 413], [-179, -7], 1], [[192, 252], [-8, -74], 1], [[401, 405], [-48, 72], 1], [[344, 345], [-84, 94], 1]],
    // 'Dense cloud': [[[456,200],[-16,9],1],[[439,210],[-6,0],1],[[410,236],[0,2],1],[[409,240],[0,2],1],[[409,243],[0,9],1],[[408,260],[0,2],1],[[408,264],[0,3],1],[[408,269],[0,15],1],[[408,299],[0,0],1],[[408,299],[0,15],1],[[408,328],[0,7],1],[[408,342],[0,2],1],[[408,346],[5,6],1],[[418,358],[1,10],1],[[419,378],[3,1],1],[[424,379],[9,5],1],[[442,389],[2,3],1],[[445,395],[0,12],1],[[445,419],[2,1],1],[[451,421],[6,5],1],[[464,430],[1,0],1],[[465,430],[28,12],1],[[520,454],[4,0],1],[[542,454],[8,0],1],[[558,454],[12,0],1],[[587,454],[4,0],1],[[595,454],[2,0],1],[[599,454],[2,-6],1],[[602,442],[6,-4],1],[[614,434],[0,-8],1],[[614,416],[0,-21],1],[[614,374],[0,-13],1],[[614,348],[0,-9],1],[[614,330],[0,-17],1],[[614,295],[0,-6],1],[[614,277],[-5,-3],1],[[604,265],[-8,-9],1],[[586,244],[-13,-1],1],[[551,242],[-5,0],1],[[540,242],[-21,0],1],[[497,242],[0,-14],1],[[497,213],[-24,0],1],[[448,213],[0,6],1],[[448,233],[0,5],1],[[448,243],[0,7],1],[[448,257],[0,19],1],[[448,298],[0,11],1],[[448,323],[-2,0],1],[[443,333],[2,5],1],[[458,345],[19,0],1],[[498,345],[0,25],1],[[498,397],[-4,11],1],[[460,416],[0,-11],1],[[460,388],[0,-12],1],[[460,364],[62,0],1],[[619,364],[0,3],1],[[615,389],[-31,8],1],[[547,404],[0,0],1],[[547,404],[-10,-2],1],[[527,390],[0,-50],1],[[527,286],[9,0],1],[[616,286],[0,27],1],[[616,385],[-25,-2],1],[[498,314],[0,0],1],[[528,314],[5,0],1],[[537,314],[26,0],1],[[590,314],[0,1],1],[[621,344],[0,10],1],[[620,363],[-21,0],1],[[572,363],[0,0],1],[[572,363],[0,52],1],[[569,500],[0,0],1],[[258,478],[-2,-1],1],[[410,273],[2,-1],1],[[452,352],[-2,4],1],[[446,359],[-4,1],1],[[445,361],[1,0],1],[[449,370],[23,23],1],[[515,416],[9,-1],1],[[552,379],[0,-12],1],[[552,349],[-58,-3],1],[[426,343],[-3,-22],1],[[419,282],[43,-4],1],[[512,274],[15,10],1],[[565,307],[0,5],1],[[559,329],[-10,1],1],[[537,330],[-21,0],1],[[494,330],[3,-16],1],[[525,257],[7,0],1],[[675,277],[0,1],1],[[675,283],[-24,19],1],[[596,337],[-8,0],1],[[571,330],[0,-11],1],[[571,264],[0,0],1],[[571,264],[-6,-5],1],[[558,254],[-45,0],1],[[466,254],[-4,0],1],[[455,259],[0,20],1],[[455,313],[0,3],1],[[471,336],[0,0],1],[[471,336],[0,0],1],[[430,316],[6,-51],1],[[442,214],[0,10],1],[[442,247],[0,16],1],[[442,281],[0,14],1],[[442,314],[0,10],1],[[442,342],[0,9],1],[[442,366],[0,20],1],[[442,408],[-1,0],1],[[439,408],[0,13],1],[[439,434],[43,6],1],[[532,446],[39,0],1],[[616,446],[4,0],1],[[628,446],[4,-14],1],[[636,417],[0,-19],1],[[636,374],[3,-14],1],[[641,345],[1,-29],1],[[643,283],[10,-6],1],[[703,455],[0,-12],1],[[732,309],[0,-6],1],[[732,297],[-23,-36],1],[[686,225],[-31,0],1],[[624,225],[-20,0],1],[[584,225],[-7,-5],1],[[570,214],[-20,0],1],[[529,214],[-19,0],1],[[490,214],[-2,-23],1],[[485,169],[-20,0],1],[[444,169],[-26,0],1],[[391,169],[-5,22],1],[[380,214],[-1,25],1],[[377,264],[-11,14],1],[[355,291],[-2,10],1],[[350,310],[0,8],1],[[350,326],[0,20],1],[[351,365],[1,10],1],[[356,385],[19,0],1],[[396,385],[3,21],1],[[402,427],[0,11],1],[[402,449],[18,0],1],[[438,449],[0,15],1],[[438,479],[16,0],1],[[479,479],[2,1],1],[[483,482],[40,0],1],[[563,482],[0,8],1],[[563,498],[11,0],1],[[585,498],[28,0],1],[[659,496],[1,-5],1],[[664,481],[0,-15],1],[[664,451],[6,-35],1],[[676,381],[0,-31],1],[[676,318],[0,-32],1],[[676,253],[-1,-14],1],[[674,224],[-31,-3],1],[[611,218],[-10,-13],1],[[590,190],[-65,0],1],[[459,190],[-20,0],1],[[416,190],[-69,0],1],[[278,190],[0,30],1],[[278,257],[0,28],1],[[278,314],[0,30],1],[[278,373],[0,11],1],[[279,395],[7,5],1],[[293,405],[10,9],1],[[312,423],[15,12],1],[[342,446],[7,11],1],[[356,468],[12,19],1],[[380,506],[40,0],1],[[462,506],[41,0],1],[[545,506],[26,0],1],[[597,506],[9,-2],1],[[617,497],[16,-19],1],[[648,459],[7,-28],1],[[662,402],[0,-35],1],[[662,330],[0,-63],1],[[662,197],[-10,-17],1],[[639,162],[-85,0],1],[[468,162],[-18,0],1],[[432,162],[-36,0],1],[[359,162],[-3,19],1],[[353,199],[-1,15],1],[[350,229],[-12,10],1],[[325,248],[-1,37],1],[[323,327],[0,39],1],[[323,408],[-24,19],1],[[274,446],[0,11],1],[[274,470],[13,3],1],[[305,476],[12,28],1],[[330,533],[7,7],1],[[344,547],[43,0],1],[[432,547],[19,5],1],[[471,557],[44,0],1],[[565,557],[32,0],1],[[632,557],[11,0],1],[[655,557],[12,-17],1],[[679,523],[8,-29],1],[[694,465],[8,-40],1],[[709,378],[0,-7],1],[[709,363],[0,-28],1],[[709,307],[0,-27],1],[[709,242],[-27,-9],1],[[654,223],[-28,-1],1],[[594,220],[-20,-13],1],[[552,191],[-24,-3],1],[[500,185],[-15,0],1],[[470,185],[-42,0],1],[[371,186],[-16,15],1],[[339,216],[-2,22],1],[[334,264],[0,13],1],[[334,291],[0,41],1],[[334,374],[0,8],1],[[334,390],[1,31],1],[[339,452],[29,10],1],[[399,472],[28,26],1],[[457,523],[40,0],1],[[540,523],[40,0],1],[[622,523],[27,-3],1],[[688,504],[0,-52],1],[[688,395],[0,-49],1],[[688,291],[-65,-28],1],[[549,233],[-43,0],1],[[450,233],[-15,0],1],[[420,234],[-17,24],1],[[386,282],[0,26],1],[[386,333],[0,26],1],[[386,385],[12,21],1],[[412,428],[38,0],1],[[491,428],[49,0],1],[[589,428],[14,-24],1],[[636,360],[0,-53],1],[[636,238],[-46,-26],1],[[539,185],[-44,35],1],[[450,256],[0,1],1],[[450,263],[-8,26],1],[[434,315],[-1,30],1],[[431,375],[-4,48],1],[[423,471],[0,14],1],[[423,499],[46,10],1],[[517,519],[79,0],1],[[697,519],[0,-39],1],[[697,431],[0,-50],1],[[697,315],[-4,-30],1],[[683,233],[-124,-7],1],[[432,219],[-10,0],1],[[395,219],[-25,43],1],[[345,308],[0,48],1],[[345,408],[0,48],1],[[345,505],[14,20],1],[[375,545],[95,0],1],[[569,545],[42,0],1],[[674,545],[12,-27],1],[[712,480],[0,-46],1],[[712,352],[0,-46],1],[[712,250],[-18,-19],1],[[668,210],[-116,0],1],[[425,210],[-16,0],1],[[370,211],[-1,43],1],[[367,296],[0,59],1],[[367,413],[0,19],1],[[367,460],[53,0],1],[[484,460],[30,0],1],[[546,460],[18,-25],1],[[588,391],[0,-59],1],[[588,272],[-33,-29],1],[[493,213],[-16,19],1],[[459,261],[-12,35],1],[[434,331],[0,49],1],[[434,430],[9,9],1],[[505,462],[32,0],1],[[604,462],[6,-7],1],[[711,318],[0,-68],1],[[711,164],[-217,0],1],[[276,164],[0,1],1],[[276,169],[0,66],1],[[276,301],[0,29],1],[[276,360],[19,0],1],[[319,360],[5,19],1],[[333,398],[48,14],1],[[434,427],[14,-17],1],[[472,391],[0,-15],1],[[474,359],[0,-44],1],[[474,260],[-50,0],1],[[373,265],[0,1],1],[[371,275],[16,70],1],[[406,414],[14,35],1],[[437,484],[130,0],1],[[701,484],[0,-44],1],[[701,390],[-18,-26],1],[[664,336],[-29,-14],1],[[596,305],[-42,0],1],[[504,305],[-14,0],1],[[460,305],[0,0],1],[[435,308],[0,0],50],[[378,351],[-1,2],50],[[438,455],[1,1],50],[[577,435],[1,0],50],[[576,369],[0,0],50],[[486,368],[0,0],50],[[463,418],[0,0],50],[[560,418],[0,0],50],[[568,330],[0,0],50],[[544,250],[0,0],50],[[336,264],[0,0],50],[[335,347],[0,1],50],[[376,489],[0,1],50],[[546,488],[1,0],50],[[660,484],[1,0],50],[[683,343],[1,0],50],[[520,275],[-1,0],50],[[459,376],[0,0],50]],
    'Stationary cloud': [[[42, 96], [0, 0], 1], [[65, 99], [1, 0], 1], [[66, 125], [0, 0], 1], [[55, 125], [0, 0], 1], [[104, 134], [0, 0], 1], [[108, 203], [0, 0], 1], [[69, 166], [0, 0], 1], [[148, 166], [0, 0], 1], [[118, 281], [0, 1], 1], [[229, 177], [1, 0], 1], [[134, 147], [0, 0], 1], [[107, 211], [0, 0], 1], [[231, 236], [0, 0], 1], [[205, 151], [0, 0], 1], [[172, 243], [0, 0], 1], [[273, 267], [0, 0], 1], [[293, 159], [0, 0], 1], [[237, 216], [-3, 1], 1], [[283, 317], [0, 1], 1], [[196, 316], [0, 0], 1], [[257, 276], [0, 0], 1], [[451, 224], [1, 0], 1], [[282, 327], [0, 1], 1], [[306, 220], [0, 0], 1], [[310, 295], [0, 1], 1], [[259, 296], [0, 0], 1], [[309, 283], [0, 0], 1], [[189, 273], [0, 0], 1], [[249, 142], [0, 0], 1], [[201, 288], [-1, 1], 1], [[136, 211], [0, 0], 1], [[206, 211], [0, 0], 1], [[61, 301], [0, 0], 1], [[147, 301], [0, 0], 1], [[120, 236], [0, 0], 1], [[77, 240], [0, 0], 1], [[103, 291], [0, 1], 1], [[193, 299], [0, 1], 1], [[190, 312], [0, 0], 1], [[134, 329], [0, 1], 1], [[133, 330], [0, 0], 1], [[160, 332], [0, 1], 1], [[161, 376], [0, 1], 1], [[208, 377], [1, 0], 1], [[209, 323], [0, 0], 1], [[307, 319], [1, 0], 1], [[297, 368], [0, 1], 1], [[245, 355], [0, 0], 1], [[244, 260], [0, 0], 1], [[343, 259], [1, 0], 1], [[343, 333], [0, 1], 1], [[315, 283], [-1, -1], 1], [[313, 280], [0, 0], 1], [[348, 235], [0, 0], 1], [[312, 214], [0, 0], 1], [[328, 209], [0, 0], 1], [[328, 159], [0, 0], 1], [[291, 158], [0, 0], 1], [[266, 188], [0, 1], 1], [[323, 189], [1, 0], 1], [[324, 71], [0, 0], 1], [[214, 136], [-1, 1], 1], [[282, 118], [1, 0], 1], [[234, 111], [0, 0], 1], [[183, 111], [0, 0], 1], [[152, 86], [0, 0], 1], [[178, 128], [0, 1], 1], [[82, 131], [0, 0], 1], [[139, 125], [0, 0], 1], [[114, 186], [0, 0], 1], [[34, 186], [0, 0], 1], [[35, 189], [1, 1], 1], [[58, 211], [0, 0], 1], [[5, 301], [-1, 2], 1], [[39, 314], [0, 0], 1], [[34, 247], [0, 0], 1], [[70, 249], [0, 0], 1], [[70, 281], [0, 1], 1], [[67, 305], [0, 1], 1], [[67, 308], [0, 0], 1], [[72, 315], [0, 0], 1], [[36, 364], [0, 1], 1], [[84, 365], [1, 0], 1], [[151, 329], [0, 0], 1], [[146, 254], [0, 0], 1], [[206, 248], [0, 0], 1], [[190, 185], [0, 0], 1], [[163, 195], [0, 1], 1], [[180, 230], [0, 0], 1], [[302, 230], [1, 1], 1], [[295, 288], [0, 1], 1], [[281, 241], [0, 0], 1], [[248, 241], [0, 0], 1], [[154, 337], [0, 1], 1], [[251, 366], [1, 0], 1], [[231, 323], [0, 0], 1], [[170, 334], [0, 0], 1], [[181, 383], [0, 2], 1], [[100, 394], [-1, 0], 1], [[124, 385], [0, 0], 1], [[162, 417], [1, 0], 1], [[220, 392], [0, 0], 1], [[202, 369], [0, 0], 1], [[137, 392], [0, 0], 1], [[185, 412], [1, 0], 1], [[217, 401], [1, 0], 1], [[227, 382], [0, 0], 1], [[331, 403], [1, 1], 1], [[185, 433], [-1, 0], 1], [[244, 391], [1, 0], 1], [[245, 391], [0, 0], 1], [[278, 391], [1, 0], 1], [[197, 457], [-1, 1], 1], [[124, 426], [0, 0], 1], [[122, 349], [0, 0], 1], [[233, 352], [1, 1], 1], [[243, 432], [0, 2], 1], [[121, 448], [0, 0], 1], [[293, 448], [2, 0], 1], [[297, 373], [0, 0], 1], [[244, 384], [0, 0], 1], [[274, 412], [1, 0], 1], [[286, 412], [0, 1], 1], [[213, 433], [-2, 1], 1], [[219, 527], [0, 0], 1], [[94, 485], [-1, -1], 1], [[174, 483], [1, 0], 1], [[344, 468], [1, 0], 1], [[322, 398], [0, 0], 1], [[392, 393], [0, 0], 1], [[374, 355], [0, -1], 1], [[438, 267], [1, 0], 1], [[407, 248], [0, 0], 1], [[364, 264], [-1, 1], 1], [[373, 306], [1, 1], 1], [[401, 308], [1, 0], 1], [[402, 207], [0, 0], 1], [[370, 185], [0, 0], 1], [[382, 114], [0, 0], 1], [[345, 113], [-1, 0], 1], [[297, 124], [-2, 1], 1], [[194, 119], [0, 0], 1], [[193, 195], [0, 2], 1], [[97, 327], [-1, 2], 1], [[128, 385], [1, 1], 1], [[65, 430], [-1, 1], 1], [[93, 473], [1, 1], 1], [[139, 478], [1, 0], 1], [[123, 569], [0, 0], 1], [[195, 552], [2, 0], 1], [[244, 476], [0, 0], 1], [[341, 498], [0, 0], 1], [[361, 411], [0, 0], 1], [[361, 410], [0, 0], 1], [[421, 410], [0, 0], 1], [[359, 514], [0, 0], 1], [[282, 493], [-2, -1], 1], [[377, 439], [0, 0], 1], [[385, 357], [0, -1], 1], [[438, 353], [0, 0], 1], [[408, 281], [0, -1], 1], [[352, 282], [-1, 0], 1], [[316, 373], [-1, 1], 1], [[437, 343], [1, 0], 1], [[462, 216], [0, 0], 1], [[391, 201], [-2, 0], 1], [[419, 90], [0, 0], 1], [[469, 197], [1, 2], 1], [[457, 201], [-2, 0], 1], [[485, 139], [1, 0], 1], [[550, 170], [1, 1], 1], [[497, 252], [-1, 1], 1], [[592, 220], [1, 0], 1], [[535, 203], [-1, 0], 1], [[533, 121], [0, -1], 1], [[428, 129], [-1, 0], 1], [[499, 187], [1, 1], 1], [[473, 189], [-4, 1], 1], [[402, 157], [0, 0], 1], [[508, 173], [1, 1], 1], [[488, 237], [-1, 2], 1], [[457, 302], [-1, 3], 1], [[510, 307], [1, 0], 1], [[514, 254], [0, 0], 1], [[579, 254], [1, 0], 1], [[490, 351], [0, 0], 1], [[587, 331], [1, 0], 1], [[473, 441], [-1, 1], 1], [[523, 443], [1, 0], 1], [[483, 467], [-1, 0], 1], [[691, 396], [0, 0], 1], [[545, 375], [-2, 0], 1], [[479, 385], [-2, 0], 1], [[438, 465], [0, 1], 1], [[412, 469], [0, 0], 1], [[411, 483], [0, 0], 1], [[397, 555], [0, 1], 1], [[397, 556], [0, 0], 1], [[356, 461], [0, 0], 1], [[459, 465], [1, 0], 1], [[378, 539], [-1, 1], 1], [[245, 544], [-1, 0], 1], [[244, 485], [0, 0], 1], [[258, 522], [-1, 1], 1], [[135, 538], [0, 0], 1], [[230, 591], [1, 1], 1], [[231, 592], [0, 0], 1], [[88, 536], [0, 0], 1], [[83, 625], [-1, 1], 1], [[242, 602], [1, 0], 1], [[360, 522], [0, 0], 1], [[273, 629], [0, 0], 1], [[319, 523], [0, 0], 1], [[420, 533], [1, 1], 1], [[543, 439], [0, 0], 1], [[497, 525], [0, 1], 1], [[562, 465], [0, 0], 1], [[520, 388], [0, 0], 1], [[469, 401], [0, 0], 1], [[559, 306], [1, 0], 1], [[501, 295], [-1, 0], 1], [[474, 314], [0, 1], 1], [[504, 232], [0, 0], 1], [[552, 232], [0, 0], 1], [[505, 146], [-1, 0], 1], [[405, 180], [0, 1], 1], [[485, 128], [1, 0], 1], [[483, 74], [0, 0], 1], [[393, 74], [0, 0], 1], [[384, 90], [0, 1], 1], [[317, 91], [0, 0], 1], [[281, 108], [-1, 0], 1], [[240, 69], [0, 0], 1], [[255, 106], [0, 1], 1], [[242, 149], [0, 0], 1], [[173, 98], [0, 0], 1], [[221, 98], [0, 0], 1], [[62, 389], [0, 1], 1], [[36, 435], [0, 0], 1], [[91, 515], [0, 1], 1], [[45, 491], [0, 0], 1], [[105, 467], [1, 0], 1], [[107, 501], [0, 1], 1], [[18, 502], [0, 0], 1], [[54, 557], [0, 1], 1], [[45, 520], [0, 0], 1], [[39, 541], [0, 0], 1], [[141, 561], [0, 0], 1], [[102, 578], [0, 0], 1], [[202, 587], [2, 0], 1], [[203, 516], [0, 0], 1], [[299, 545], [1, 1], 1], [[262, 574], [0, 1], 1], [[347, 582], [1, 0], 1], [[334, 535], [0, 0], 1], [[449, 540], [1, 0], 1], [[415, 503], [0, 0], 1], [[499, 503], [1, 0], 1], [[502, 549], [0, 0], 1], [[556, 537], [1, 0], 1], [[558, 464], [0, 0], 1], [[657, 459], [1, 0], 1], [[646, 422], [0, -1], 1], [[584, 425], [0, 0], 1], [[629, 309], [1, 0], 1], [[683, 325], [0, 1], 1], [[686, 342], [0, 1], 1], [[643, 347], [0, 0], 1], [[766, 312], [1, 0], 1], [[831, 304], [1, 1], 1], [[705, 436], [0, 1], 1], [[733, 261], [0, 0], 1], [[694, 233], [-2, 0], 1], [[646, 267], [-1, 1], 1], [[632, 183], [0, 0], 1], [[663, 182], [0, 0], 1], [[659, 199], [0, 0], 1], [[630, 199], [0, 0], 1], [[625, 236], [0, 1], 1], [[693, 237], [1, 0], 1], [[614, 81], [0, 0], 1], [[593, 119], [0, 0], 1], [[651, 119], [1, 0], 1], [[600, 131], [0, 0], 1], [[619, 101], [0, 0], 1], [[568, 128], [0, 0], 1], [[597, 165], [0, 0], 1], [[587, 89], [0, 0], 1], [[539, 89], [0, 0], 1], [[562, 128], [0, 1], 1], [[470, 86], [0, 0], 1], [[562, 86], [1, 0], 1], [[477, 102], [0, 0], 1], [[473, 117], [0, 0], 1], [[532, 109], [1, 0], 1], [[393, 171], [0, 0], 1], [[462, 175], [0, 0], 1], [[396, 160], [0, 0], 1], [[356, 139], [0, 0], 1], [[524, 139], [1, 0], 1], [[694, 142], [1, 1], 1], [[588, 173], [0, 0], 1], [[545, 296], [0, 1], 1], [[564, 238], [0, 0], 1], [[496, 299], [0, 0], 1], [[576, 289], [1, 0], 1], [[501, 286], [0, 0], 1], [[472, 285], [0, 0], 1], [[475, 364], [0, 1], 1], [[578, 351], [0, 0], 1], [[522, 356], [-1, 0], 1], [[518, 396], [0, 1], 1], [[530, 401], [0, 0], 1], [[439, 387], [0, 0], 1], [[437, 455], [0, 0], 1], [[377, 460], [0, 0], 1], [[471, 520], [1, 0], 1], [[430, 564], [0, 0], 1], [[380, 564], [-1, 0], 1], [[449, 568], [2, 1], 1], [[513, 578], [1, 1], 1], [[530, 494], [0, 0], 1], [[567, 542], [0, 0], 1], [[507, 571], [0, 0], 1], [[589, 492], [0, 0], 1], [[519, 545], [0, 0], 1], [[609, 547], [1, 0], 1], [[617, 469], [0, 0], 1], [[533, 511], [0, 0], 1], [[673, 529], [2, 1], 1], [[677, 463], [0, 0], 1], [[607, 503], [-1, 1], 1], [[703, 525], [1, 1], 1], [[671, 499], [0, 0], 1], [[779, 495], [1, 0], 1], [[768, 433], [0, 0], 1], [[744, 433], [-1, 0], 1], [[736, 449], [0, 1], 1], [[781, 310], [0, 0], 1], [[737, 351], [0, 0], 1], [[777, 361], [0, 0], 1], [[777, 405], [0, 2], 1], [[739, 461], [-1, 2], 1], [[675, 527], [0, 1], 1]],
    'Colliding galaxies': [[[475, 508], [-3, 3], 2500], [[210, 177], [3, -3], 2502], [[276, 148], [7, 26], 1], [[276, 212], [-10, 25], 1], [[225, 259], [0, 0], 1], [[224, 259], [-26, -5], 1], [[171, 249], [-5, -28], 1], [[142, 199], [0, -10], 1], [[155, 117], [19, -13], 1], [[192, 90], [20, 0], 1], [[231, 90], [10, 0], 1], [[250, 90], [10, 2], 1], [[270, 94], [0, 20], 1], [[270, 134], [0, 34], 1], [[270, 202], [-27, 17], 1], [[215, 236], [-32, -1], 1], [[150, 233], [-1, -32], 1], [[147, 169], [3, -16], 1], [[155, 137], [26, -8], 1], [[207, 120], [18, 0], 1], [[243, 120], [4, 1], 1], [[251, 122], [3, 14], 1], [[256, 149], [3, 5], 1], [[262, 158], [0, 26], 1], [[262, 210], [-14, 13], 1], [[233, 236], [-26, 0], 1], [[181, 235], [0, -31], 1], [[181, 173], [9, -20], 1], [[200, 130], [14, -1], 1], [[229, 127], [7, 0], 1], [[242, 127], [11, 6], 1], [[263, 139], [5, 20], 1], [[273, 179], [-6, 35], 1], [[226, 189], [-14, 23], 1], [[242, 215], [-23, 1], 1], [[195, 216], [-20, -15], 1], [[194, 189], [-12, -26], 1], [[163, 189], [4, -46], 1], [[213, 144], [23, 1], 1], [[224, 157], [11, 15], 1], [[245, 187], [0, 35], 1], [[232, 257], [-43, 4], 1], [[145, 265], [-10, -45], 1], [[124, 175], [8, -45], 1], [[140, 87], [33, -4], 1], [[205, 79], [24, 0], 1], [[251, 79], [23, 2], 1], [[294, 83], [12, 31], 1], [[317, 143], [0, 30], 1], [[317, 203], [-12, 38], 1], [[293, 279], [-60, -1], 1], [[172, 276], [-25, -16], 1], [[121, 244], [2, -32], 1], [[127, 178], [0, -34], 1], [[127, 110], [39, -9], 1], [[205, 92], [29, 0], 1], [[263, 92], [22, 0], 1], [[307, 92], [6, 16], 1], [[319, 124], [0, 24], 1], [[319, 172], [0, 37], 1], [[319, 245], [-30, 9], 1], [[259, 263], [-14, 0], 1], [[231, 263], [-41, 7], 1], [[160, 268], [-3, -11], 1], [[153, 246], [-20, -46], 1], [[113, 153], [22, -46], 1], [[157, 61], [25, 0], 1], [[207, 60], [23, 0], 1], [[252, 60], [27, 6], 1], [[306, 72], [4, 27], 1], [[457, 484], [35, -4], 1], [[490, 460], [54, 9], 1], [[500, 490], [9, 24], 1], [[530, 482], [0, 25], 1], [[505, 548], [-31, 13], 1], [[443, 574], [-28, -29], 1], [[445, 519], [0, -38], 1], [[478, 446], [20, -5], 1], [[517, 436], [25, 3], 1], [[566, 441], [1, 35], 1], [[568, 510], [-2, 29], 1], [[564, 568], [-35, 0], 1], [[493, 568], [-32, 0], 1], [[428, 568], [0, -24], 1], [[427, 520], [0, -13], 1], [[427, 493], [0, -32], 1], [[428, 428], [25, 0], 1], [[477, 428], [22, 0], 1], [[519, 428], [24, 0], 1], [[566, 428], [0, 38], 1], [[566, 504], [-4, 26], 1], [[558, 555], [-19, 2], 1], [[519, 559], [-48, 1], 1], [[423, 560], [-6, -19], 1], [[410, 521], [0, -28], 1], [[410, 464], [7, -23], 1], [[426, 418], [31, 0], 1], [[488, 418], [22, 0], 1], [[532, 418], [16, 19], 1], [[563, 456], [13, 19], 1], [[588, 493], [0, 14], 1], [[588, 520], [-7, 29], 1], [[506, 536], [-23, 7], 1], [[459, 550], [-19, -20], 1], [[420, 510], [0, -29], 1], [[419, 452], [7, -25], 1], [[446, 462], [24, -10], 1], [[449, 441], [36, 0], 1], [[511, 403], [24, 3], 1], [[559, 409], [5, 37], 1], [[516, 504], [3, 19], 1], [[537, 526], [-5, 42], 1], [[423, 563], [-26, -21], 1], [[431, 511], [0, 0], 1], [[431, 511], [-5, -22], 1], [[396, 462], [5, -27], 1], [[405, 407], [32, -7], 1], [[469, 392], [18, 0], 1], [[504, 392], [18, 0], 1], [[534, 392], [16, 3], 1], [[564, 398], [1, 30], 1], [[566, 458], [5, 19], 1], [[575, 495], [-3, 18], 1], [[568, 530], [-4, 21], 1], [[559, 572], [-35, 0], 1], [[489, 572], [-36, -3], 1], [[417, 565], [-1, -22], 1], [[415, 520], [-1, -58], 1], [[413, 403], [46, -14], 1], [[464, 392], [30, 0], 1], [[492, 411], [26, 0], 1], [[543, 411], [13, 27], 1], [[568, 464], [0, 39], 1], [[524, 486], [1, 12], 1], [[582, 469], [0, 54], 1], [[524, 553], [-36, 2], 1], [[351, 514], [-1, -22], 1], [[450, 473], [0, -34], 1], [[450, 405], [26, -7], 1], [[548, 311], [0, 0], 1], [[664, 344], [1, 1], 1], [[637, 437], [0, 1], 1], [[664, 591], [0, 2], 1], [[559, 590], [-1, 0], 1], [[434, 621], [-1, 0], 1], [[319, 536], [-1, -1], 1], [[322, 436], [0, 0], 1], [[453, 342], [0, 0], 1], [[534, 286], [0, 0], 1], [[645, 219], [0, 0], 1], [[508, 184], [-2, 0], 1], [[360, 202], [-3, 0], 1], [[292, 304], [0, 1], 1], [[155, 300], [0, 0], 1], [[109, 195], [0, 0], 1], [[172, 87], [0, 0], 1], [[306, 87], [1, 0], 1], [[370, 87], [1, 0], 1], [[362, 224], [0, 1], 1], [[190, 397], [-1, 1], 1], [[55, 248], [0, -1], 1], [[88, 127], [0, 0], 1], [[63, 221], [0, 0], 1], [[63, 114], [0, 0], 1], [[114, 70], [1, 0], 1], [[208, 43], [1, 0], 1], [[310, 55], [5, 0], 1], [[455, 43], [1, 0], 1], [[372, 56], [1, 0], 1], [[418, 151], [0, 1], 1], [[253, 206], [0, 1], 1], [[138, 354], [0, 1], 1], [[51, 172], [0, -1], 1], [[55, 151], [19, -22], 1], [[92, 107], [17, -22], 1], [[127, 63], [33, -8], 1], [[192, 46], [36, 0], 1], [[270, 46], [27, 0], 1], [[332, 46], [14, 0], 1], [[368, 46], [12, 0], 1], [[392, 46], [0, 15], 1], [[392, 80], [5, 2], 1], [[412, 83], [14, 2], 1], [[448, 87], [33, 11], 1], [[516, 109], [10, 6], 1], [[547, 127], [15, 12], 1], [[583, 155], [16, 20], 1], [[619, 196], [11, 21], 1], [[646, 241], [10, 39], 1], [[667, 319], [1, 28], 1], [[670, 380], [0, 22], 1], [[670, 428], [0, 32], 1], [[670, 504], [-2, 32], 1], [[666, 576], [-27, 33], 1], [[611, 641], [-25, 13], 1], [[544, 670], [-98, 0], 1], [[343, 670], [-68, 0], 1], [[203, 668], [-17, -24], 1], [[166, 612], [0, -28], 1], [[165, 539], [-6, -27], 1], [[153, 472], [-1, -31], 1], [[150, 374], [-16, -27], 1], [[118, 286], [-1, -23], 1], [[116, 200], [0, -56], 1], [[119, 84], [26, -21], 1], [[239, 16], [32, 0], 1], [[339, 40], [21, 3], 1], [[380, 45], [46, 39], 1], [[471, 122], [0, 17], 1], [[172, 727], [-32, -10], 1], [[108, 706], [0, -6], 1], [[140, 645], [-21, -18], 1], [[97, 607], [-8, -17], 1], [[80, 564], [-4, -44], 1], [[72, 475], [0, -27], 1], [[72, 415], [0, -18], 1], [[342, 675], [-33, 0], 1], [[245, 566], [-45, 0], 1], [[284, 452], [-24, 0], 1], [[215, 445], [-13, -4], 1], [[188, 436], [-30, -22], 1], [[127, 391], [-7, -22], 1], [[112, 345], [-3, -51], 1], [[106, 233], [0, -31], 1], [[106, 160], [18, -19], 1], [[209, 78], [17, -13], 1], [[412, 31], [63, 0], 1], [[538, 31], [13, 1], 1], [[566, 33], [12, 13], 1], [[590, 59], [6, 13], 1], [[604, 87], [1, 7], 1], [[605, 103], [6, 14], 1], [[620, 133], [21, 20], 1], [[663, 172], [1, 29], 1], [[664, 230], [0, 7], 1], [[664, 250], [0, 5], 1], [[452, 233], [59, 0], 1], [[421, 257], [23, 1], 1], [[369, 256], [2, 11], 1], [[373, 277], [-2, 22], 1], [[367, 322], [-5, 0], 1], [[245, 342], [-1, 0], 1], [[402, 347], [1, 1], 1], [[423, 231], [1, 0], 1], [[337, 284], [-3, 3], 1], [[322, 369], [0, 0], 1], [[466, 128], [0, 0], 1], [[492, 239], [1, 1], 1], [[608, 261], [0, 0], 1]],
    'Blank (No Particles)': []
};
const makeProj = ([pos, vel, mass]) => new Projectile_1.default(Vec_1.default(...pos), Vec_1.default(...vel), mass);
class StartMenu extends Subject_1.default {
    constructor() {
        super();
        const els = Object.entries(configs).map(([name, particles]) => {
            let button = document.createElement('button');
            button.textContent = String(name);
            button.addEventListener('click', () => {
                this.startSim(particles);
            });
            return button;
        });
        els.forEach(el => {
            document.querySelector('#startingConfigs').appendChild(el);
        });
        // (document.querySelector('#startingConfigs') as ParentNode).append(...els);
    }
    startSim(config) {
        document.querySelector('#start').remove();
        this.emit(config.map(makeProj));
    }
}
exports.default = StartMenu;


/***/ }),

/***/ "./src/Store.ts":
/*!**********************!*\
  !*** ./src/Store.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Subject_1 = __webpack_require__(/*! ./Subject */ "./src/Subject.ts");
class Store extends Subject_1.default {
    constructor(defaultState) {
        super();
        this.state = defaultState;
    }
    propagate() {
        this.emit(this.state);
    }
}
exports.default = Store;


/***/ }),

/***/ "./src/Subject.ts":
/*!************************!*\
  !*** ./src/Subject.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor() {
        this.callbacks = [];
    }
    subscribe(...fn) {
        this.callbacks.push(...fn);
    }
    emit(e) {
        this.callbacks.forEach(fn => fn(e));
    }
}
exports.default = Subject;


/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vec_1 = __webpack_require__(/*! ./lib/Vec */ "./src/lib/Vec.ts");
const Projectile_1 = __webpack_require__(/*! ./worker/Projectile */ "./src/worker/Projectile.ts");
const interpolate = __webpack_require__(/*! color-interpolate */ "./node_modules/color-interpolate/index.js");
class Renderer {
    constructor(canvas, background) {
        this.canvas = canvas;
        this.background = background;
        this.cx = this.canvas.getContext('2d');
        this.cx.lineWidth = 1;
        this.bgx = this.background.getContext('2d');
        this.rules = {
            forceVectors: false,
            velocityVectors: false,
            paths: false,
            cameraOrigin: Vec_1.default(0, 0)
        };
    }
    setRules(rules) {
        this.rules = rules;
    }
    render(itemsToRender) {
        requestAnimationFrame(() => this._render(itemsToRender));
    }
    clearBackground() {
        requestAnimationFrame(() => {
            this.bgx.fillRect(0, 0, this.background.width, this.background.height);
        });
    }
    _render(itemsToRender) {
        let cx = this.cx;
        let bgx = this.bgx;
        cx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        cx.save();
        bgx.save();
        cx.translate(0.5, 0.5);
        bgx.translate(0.5, 0.5);
        if (!this.rules.cameraOrigin.equals(Vec_1.default(0, 0))) {
            // TODO: Update camera position
            let { x, y } = this.rules.cameraOrigin;
            cx.translate(x, y);
            bgx.translate(x, y);
        }
        if (itemsToRender.inputArrow) {
            let { start, delta } = itemsToRender.inputArrow;
            let end = start.plus(delta);
            cx.save();
            cx.strokeStyle = 'blue';
            cx.beginPath();
            cx.moveTo(start.x, start.y);
            cx.lineTo(end.x, end.y);
            cx.stroke();
            cx.restore();
        }
        const drawProjectileAndPath = (projectile) => {
            /*
            if (this.rules.paths) {
                let path: Vector[] = itemsToRender.pathHistory.get(projectile.id);
                drawProjectilePath(this.bgx, path, projectile.mass);
            }
             */
            if (this.rules.paths) {
                drawDot(this.bgx, projectile.position, projectile.mass);
            }
            drawProjectile(this.cx, projectile, this.rules);
        };
        itemsToRender.projectiles.forEach(drawProjectileAndPath);
        cx.restore();
        bgx.restore();
    }
}
const drawDot = (cx, point, mass) => {
    cx.fillStyle = cx.strokeStyle = colorMap(Math.log10(Math.max(mass, 1)) / 4);
    cx.beginPath();
    cx.fillRect(point.x, point.y, 0.7, 0.7);
    cx.stroke();
};
const drawProjectilePath = (cx, path, mass) => {
    cx.fillStyle = cx.strokeStyle = colorMap(Math.log10(Math.max(mass, 1)) / 4);
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
    if (options.velocityVectors) {
        drawArrow(cx, pos, pos.plus(vel));
    }
    if (options.forceVectors) {
        drawArrow(cx, pos, pos.plus(accel));
    }
};
const drawInput = (cx, arrow) => {
    let start = arrow.start;
    let end = arrow.start.plus(arrow.delta);
    cx.strokeStyle = 'blue';
    cx.beginPath();
    cx.moveTo(start.x, start.y);
    cx.lineTo(end.x, end.y);
    cx.stroke();
};
let colorMap = interpolate(['white', 'brown', 'orange', 'red']);
function computeProjectileColor(proj) {
    return colorMap(Math.log10(Math.max(proj.mass, 1)) / 4);
}
let drawArrow = (cx, s, e) => {
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
exports.default = Renderer;
/*
function render(canvas: HTMLCanvasElement, itemsToRender, rules) {
    if (!cx) cx = canvas.getContext('2d');
    cx.clearRect(0, 0, canvas.width, canvas.height);
    cx.save();

    if (rules.transform) {
        let {x, y} = rules.transform;
        cx.translate(x, y);
    }

    if (<Map<number, {number, Array }> >itemsToRender.history) {
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
    })

    if (itemsToRender.inputLine) {
        let inputLine = itemsToRender.inputLine;
        cx.save();
        drawInput(cx, inputLine);
        cx.restore();
    }

    cx.restore();
}

 */


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const OptionsManager_1 = __webpack_require__(/*! ./OptionsManager */ "./src/OptionsManager.ts");
const Input_1 = __webpack_require__(/*! ./Input */ "./src/Input.ts");
const View_1 = __webpack_require__(/*! ./View */ "./src/View.ts");
const fitToContainer_1 = __webpack_require__(/*! ./lib/fitToContainer */ "./src/lib/fitToContainer.ts");
const Store_1 = __webpack_require__(/*! ./Store */ "./src/Store.ts");
const Vec_1 = __webpack_require__(/*! ./lib/Vec */ "./src/lib/Vec.ts");
const ProjectileFactory_1 = __webpack_require__(/*! ./ProjectileFactory */ "./src/ProjectileFactory.ts");
const Simulator_1 = __webpack_require__(/*! ./Simulator */ "./src/Simulator.ts");
const StartMenu_1 = __webpack_require__(/*! ./StartMenu */ "./src/StartMenu.ts");
let fg = document.querySelector('#fg');
let bg = document.querySelector('#bg');
document.querySelector('#graphics').insertBefore(fg, bg);
let stats;
function setup() {
    fitToContainer_1.default(fg);
    fitToContainer_1.default(bg);
    let bgx = bg.getContext('2d');
    bgx.fillStyle = 'black';
    bgx.fillRect(0, 0, bg.width, bg.height);
}
function init() {
    // set up backwards: output, state, input
    let renderer = new View_1.default(fg, bg);
    // TODO: Use filtering to set up functionalities like workflows
    // Stores --> View
    let itemsToRenderStore = new Store_1.default({ projectiles: [] });
    itemsToRenderStore.subscribe(renderer.render.bind(renderer));
    let renderingRulesStore = new Store_1.default({
        velocityVectors: false,
        forceVectors: false,
        paths: false,
        cameraOrigin: Vec_1.default(0, 0)
    });
    renderingRulesStore.subscribe(rules => {
        renderer.setRules(rules);
        renderer.render(itemsToRenderStore.state);
    });
    let projectileStore = new Store_1.default([]);
    projectileStore.subscribe(data => {
        //paths.addStep(data);
        itemsToRenderStore.state.projectiles = data;
        //itemsToRenderStore.state.pathHistory = paths.getFullHistory();
        itemsToRenderStore.propagate();
        if (false) {}
    });
    // Controllers --> Middleware --> Stores
    let projectileFactory = new ProjectileFactory_1.default(50);
    let simulator = new Simulator_1.default();
    simulator.subscribe(data => {
        projectileStore.state = data;
        projectileStore.propagate();
    });
    let optionsManager = new OptionsManager_1.default();
    optionsManager.registerHandlers();
    optionsManager.subscribe(options => {
        Object.assign(renderingRulesStore.state, options.display);
        renderingRulesStore.propagate();
        projectileFactory.setMass(options.particles.mass);
        if (!options.display.paths)
            renderer.clearBackground();
        if (options.playback.pause)
            simulator.pause();
        else
            simulator.play();
    });
    let input = new Input_1.default(fg);
    input.subscribe((data) => {
        if (data.inputArrow) {
            itemsToRenderStore.state.inputArrow = data.inputArrow;
            itemsToRenderStore.propagate();
        }
        if (data.cameraUpdate) {
            renderer.clearBackground();
            renderingRulesStore.state.cameraOrigin = data.cameraUpdate;
            renderingRulesStore.propagate();
        }
        if (data.newProjectileArrow) {
            let newProjectile = projectileFactory.create(data.newProjectileArrow);
            simulator.addProjectile(newProjectile);
            projectileStore.state.push(newProjectile);
            projectileStore.propagate();
            itemsToRenderStore.state.inputArrow = null;
            itemsToRenderStore.propagate();
        }
    });
    let startMenu = new StartMenu_1.default();
    startMenu.subscribe((projectiles) => {
        projectiles.forEach(proj => {
            simulator.addProjectile(proj);
            projectileStore.state.push(proj);
        });
        projectileStore.propagate();
    });
}
/*
function initOld() {
  let worker = new Worker('worker.js');
  input = new Input(fg);



  options = Options((newOptions) => {
    worker.postMessage({
      type: 'set-engine-rules',
      rules: newOptions, //NOTE: CURRENTLY SENDING ENTIRE OPTIONS OBJECT
    });
  });

  let bgx = bg.getContext('2d');
  bgx.fillStyle = 'black';
  bgx.fillRect(0, 0, bg.width, bg.height);

  //pathHistory = new Paths();

  function handleSimulationStep(e) {
    //pathHistory.addStep(e.data.projectiles, options);
    stats.begin();
    requestAnimationFrame(() => {
      stats.end();
      
      render(fg, {
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
 */
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
setup();
init();


/***/ }),

/***/ "./src/lib/Vec.ts":
/*!************************!*\
  !*** ./src/lib/Vec.ts ***!
  \************************/
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
    equals(other) {
        return this.x == other.x && this.y == other.y;
    }
}
exports.Vector = Vector;
let Vec = function (x, y, isPolar) { return new Vector(x, y, isPolar); };
exports.default = Vec;


/***/ }),

/***/ "./src/lib/fitToContainer.ts":
/*!***********************************!*\
  !*** ./src/lib/fitToContainer.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function fitToContainer(canvas) {
    // Make it visually fill the positioned parent
    let parent = canvas.parentElement;
    //canvas.style.width ='100%';
    //canvas.style.height='100%';
    // ...then set the internal size to match
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
}
function resizeAsNeeded(canvas) {
    fitToContainer(canvas);
}
exports.default = resizeAsNeeded;


/***/ }),

/***/ "./src/worker/Message.ts":
/*!*******************************!*\
  !*** ./src/worker/Message.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MessageType;
(function (MessageType) {
    MessageType[MessageType["PLAY"] = 0] = "PLAY";
    MessageType[MessageType["PAUSE"] = 1] = "PAUSE";
    MessageType[MessageType["NEW_PROJECTILE"] = 2] = "NEW_PROJECTILE";
    MessageType[MessageType["SET_ENGINE_RULES"] = 3] = "SET_ENGINE_RULES";
    MessageType[MessageType["PHYSICS_STEP"] = 4] = "PHYSICS_STEP";
})(MessageType || (MessageType = {}));
exports.MessageType = MessageType;
function createMessage(type, payload) {
    return ({ type, payload: payload || null });
}
exports.createMessage = createMessage;


/***/ }),

/***/ "./src/worker/Projectile.ts":
/*!**********************************!*\
  !*** ./src/worker/Projectile.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vec_1 = __webpack_require__(/*! ../lib/Vec */ "./src/lib/Vec.ts");
const uuid_1 = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
// import constants from '../Unused/Options'
// // declare let require;
// import * as interpolate from 'color-interpolate';
// import { arrow } from '../View';
class Projectile {
    constructor(position, velocity, mass) {
        this.position = position;
        this.velocity = velocity;
        this.acceleration = Vec_1.default(0, 0);
        this.mass = mass || 50;
        this.id = uuid_1.v4();
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


/***/ })

/******/ });
//# sourceMappingURL=main.js.map