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
        this.cx.lineWidth = 0.5;
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
    setup();
    let renderer = new View_1.default(fg, bg);
    // TODO: Use filtering to set up functionalities like workflows
    // Stores --> View
    //let paths = new Paths();
    let itemsToRenderStore = new Store_1.default({ projectiles: [] });
    itemsToRenderStore.subscribe(items => {
        renderer.render(items);
    });
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
    optionsManager.subscribe((options) => {
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