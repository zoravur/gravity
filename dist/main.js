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
'use strict';
class Input {
    constructor(canvas, state, massField) {
        this.drawInput = () => { };
        this.massField = massField;
        this.canvas = canvas;
        this.cx = canvas.getContext('2d');
        this.addProjectile = this.bindState(state);
        this.camera = {
            delta: Vec_1.default(),
            position: Vec_1.default()
        };
        canvas.addEventListener("mousedown", this.handleMouseDown.bind(this));
    }
    bindState(state) {
        return function addProjectile(proj) {
            state.add(proj);
        };
    }
    getTransform() {
        return this.camera.position.plus(this.camera.delta);
    }
    setTransform(reverse) {
        let { x, y } = this.getTransform();
        if (reverse)
            this.cx.translate(-x, -y);
        else
            this.cx.translate(x, y);
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
        };
        canvas.addEventListener('mousemove', moveHandle);
        let upHandle = event => {
            let end = Vec_1.default(event.offsetX, event.offsetY);
            end = end.minus(this.camera.position);
            this.drawInput = () => { };
            let delta = end.minus(startVec);
            this.addProjectile(new Projectile_1.default(startVec, delta, +this.massField.value));
            canvas.removeEventListener('mousemove', moveHandle);
            canvas.removeEventListener('mouseup', upHandle);
        };
        canvas.addEventListener('mouseup', upHandle);
    }
}
exports.default = Input;


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
const interpolate = __webpack_require__(/*! color-interpolate */ "./node_modules/color-interpolate/index.js");
const bigG = -1;
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
    computeColor() {
        let colormap = interpolate(['white', 'orange', 'red']);
        return colormap(Math.log10(this.mass) / 4);
    }
    updateAcceleration(projectiles) {
        return this.acceleration = projectiles
            .filter(({ id }) => (id != this.id))
            .map(proj => ({
            displacement: this.position.minus(proj.position),
            mass: proj.mass
        }))
            .map(({ displacement, mass }) => Vec_1.default(
        /* Gmm/r^2 */
        bigG * mass * this.mass / displacement.magnitude, displacement.angle, true // Is polar
        ))
            .reduce((total, cur) => total.plus(cur), Vec_1.default())
            .times(1 / this.mass);
    }
    //The new and improved updateVelocity & updatePosition
    integrate(elapsedTime, projectiles) {
        let a_0 = this.acceleration.plus(Vec_1.default(0, 0));
        // d = v1*t + 1/2at^2
        let delta = this.velocity.times(elapsedTime).plus(a_0.times(0.5 * elapsedTime * elapsedTime));
        this.position = this.position.plus(delta);
        this.updateAcceleration(projectiles);
        let avgAcceleration = a_0.plus(this.acceleration).times(0.5);
        // a = (v2 - v1) / t => v2 = v1 + at
        this.velocity = this.velocity.plus(avgAcceleration.times(elapsedTime));
    }
    draw(cx, C) {
        cx.save();
        //cx.translate(0.5, 0.5);
        cx.fillStyle = cx.strokeStyle = this.computeColor();
        cx.beginPath();
        cx.arc(this.position.x + C.x, this.position.y + C.y, (Math.log(Math.abs(this.mass)) + 2) / 1.5, 0, 2 * Math.PI);
        cx.fill();
        cx.beginPath();
        cx.moveTo(this.position.x + C.x, this.position.y + C.y);
        let endPoint = this.position.plus(this.velocity);
        cx.lineTo(endPoint.x + C.x, endPoint.y + C.y);
        cx.stroke();
        cx.restore();
    }
    static computeCollision(p1, p2) {
        let mass = +p1.mass + +p2.mass;
        let position = p1.position.plus(p2.position).times(0.5);
        let velocity = p1.momentum.plus(p2.momentum).times(1 / mass);
        return new Projectile(position, velocity, mass);
    }
}
exports.default = Projectile;


/***/ }),

/***/ "./src/State.ts":
/*!**********************!*\
  !*** ./src/State.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/Projectile.ts");
const Vec_1 = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
class State {
    constructor(projectiles) {
        this.projectiles = projectiles;
    }
    update(elapsedTime) {
        let projs = JSON.parse(JSON.stringify(this.projectiles));
        this.projectiles.forEach((proj, index) => {
            proj.integrate(elapsedTime, projs);
        });
        this.computeCollisions();
        return new State(this.projectiles);
    }
    draw(cx, cameraPosition) {
        this.projectiles.forEach(proj => {
            proj.draw(cx, cameraPosition);
        });
    }
    add(proj) {
        this.projectiles.push(proj);
    }
    addProjectile(x1, y1, deltaX, deltaY) {
        this.projectiles
            .push(new Projectile_1.default(Vec_1.default(x1, y1), Vec_1.default(deltaX, deltaY)));
    }
    computeCollisions() {
        let newProjectiles = [];
        let visited = new Set();
        this.projectiles.forEach((cur, index) => {
            //See if this particle has already been processed
            if (!visited.has(index)) {
                //Attempt to find a second particle to collide with
                let idx = this.projectiles.findIndex(target => (cur.position.minus(target.position)
                    .toPolar()
                    .magnitude < 5
                    &&
                        cur != target));
                let target = this.projectiles[idx];
                //Merge both particles, or simply add the first 
                //if no second is found
                if (idx == -1) {
                    newProjectiles.push(cur);
                }
                else {
                    newProjectiles.push(Projectile_1.default.computeCollision(cur, target)
                    /*
                    new Projectile(
                      cur.position,
                      Vec(0,0),
                      +target.mass + +cur.mass
                    )
                    */
                    );
                    visited.add(idx);
                }
                visited.add(index);
            }
        });
        // fuck javascript
        this.projectiles.length = 0;
        this.projectiles.push(...newProjectiles);
    }
}
exports.default = State;


/***/ }),

/***/ "./src/Vec.ts":
/*!********************!*\
  !*** ./src/Vec.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// export default class Vec {
//   x: number;
//   y: number;
//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }
Object.defineProperty(exports, "__esModule", { value: true });
//   toPolar() {
//     return {
//       magnitude: Math.hypot(this.x, this.y),
//       angle: Math.atan2(this.y, this.x)
//     };
//   }
//   static fromPolar(mag: number, angle: number) {
//     return new Vec(
//       mag * Math.cos(angle),
//       mag * Math.sin(angle)
//     );
//   }
//   static plus(vec1: Vec, vec2: Vec) {
//     return new Vec(
//       vec1.x + vec2.x,
//       vec1.y + vec2.y
//     );
//   }
//   static minus(vec1: Vec, vec2: Vec) {
//     return new Vec(
//       vec1.x - vec2.x,
//       vec1.y - vec2.y
//     );
//   }
//   static times(vec: Vec, scalar: number) {
//     return new Vec(
//       vec.x * scalar,
//       vec.y * scalar
//     );
//   }
// }
class Vec {
    constructor(x, y, isPolar) {
        if (!(this instanceof Vec)) {
            return new Vec(...arguments);
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
        return this.toPolar().magnitude;
    }
    get angle() {
        return this.toPolar().angle;
    }
    get degrees() {
        return this.angle / Math.PI * 180;
    }
    //TODO: Rewrite this so it's not its own method... 
    //It should be part of the constructor.
    /*
    static fromPolar(mag, angle) {
      return new Vec(
        mag * Math.cos(angle),
        mag * Math.sin(angle)
      );
    }
    */
    normalize() {
        return this.times(1 / this.magnitude);
    }
    plus(v) {
        return new Vec(this.x + v.x, this.y + v.y);
    }
    minus(v) {
        return new Vec(this.x - v.x, this.y - v.y);
    }
    times(scalar) {
        return new Vec(this.x * scalar, this.y * scalar);
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
        return (new Vec(magnitude, angle, true)).plus(point);
    }
    rotate(a) {
        if (Math.abs(a) > 2 * Math.PI)
            console.log('Check to see if your rotations are in radians');
        let { magnitude, angle } = this.toPolar();
        angle += a;
        return new Vec(magnitude, angle, true);
    }
    proj(v) {
        let vhat = v.normalize();
        return vhat.times(this.dot(vhat));
    }
}
let Vector = function (...args) { return new Vec(...args); };
exports.default = Vector;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*jshint globalstrict:false */

Object.defineProperty(exports, "__esModule", { value: true });
const Vec_1 = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
const ui_1 = __webpack_require__(/*! ./ui */ "./src/ui.ts");
const State_1 = __webpack_require__(/*! ./State */ "./src/State.ts");
const Input_1 = __webpack_require__(/*! ./Input */ "./src/Input.ts");
let state;
let canvas = document.querySelector('#canvas');
let input;
ui_1.addButtons();
function animate() {
    state = new State_1.default([]);
    input = new Input_1.default(canvas, state, document.querySelector('#mass'));
    let cx = canvas.getContext('2d');
    function draw(_timestamp) {
        canvas.height = canvas.height;
        cx.save();
        input.setTransform();
        let { x, y } = input.getTransform();
        cx.fillRect(-x, -y, canvas.width, canvas.height);
        let elapsedTime = 1 / 60;
        //Draw blue input line
        input.drawInput();
        //Updating state more granularly allows for better physics.
        state = state.update(elapsedTime / 4);
        state = state.update(elapsedTime / 4);
        state = state.update(elapsedTime / 4);
        state = state.update(elapsedTime / 4);
        state.draw(cx, Vec_1.default());
        cx.restore();
        requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
}
animate();


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
        button.textContent = val;
        massControl.appendChild(button);
        button.addEventListener('click', () => {
            document.querySelector('#mass').value = val;
        });
    }
    button("10");
    button("50");
    button("100");
    button("200");
    button("500");
    button("750");
    button("1000");
}
exports.addButtons = addButtons;
function translate(cx) {
    document.addEventListener('mousedown', function (event) {
        let startX = event.offsetX;
        let startY = event.offsetY;
        function handleTranslate(event) {
            if (event.ctrlKey /*ctrl key is pressed*/) {
                let curX = event.offsetX;
                let curY = event.offsetY;
                //translate page
                cx.transform(0, 0, 0, 0, curX - startX, curY - startY);
            }
        }
        document.addEventListener('mousemove', handleTranslate);
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleTranslate);
        });
    });
}
exports.translate = translate;


/***/ })

/******/ });
//# sourceMappingURL=main.js.map