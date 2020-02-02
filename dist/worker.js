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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/worker/Worker.ts");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/worker/Physics.ts":
/*!*******************************!*\
  !*** ./src/worker/Physics.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/worker/Projectile.ts");
const Vec_1 = __webpack_require__(/*! ../lib/Vec */ "./src/lib/Vec.ts");
class Physics {
    constructor(rules = {}) {
        this.bigG = 80;
        this.projs = [];
        this.rules = rules;
    }
    setRules(rules) {
        Object.assign(this.rules, rules);
    }
    addProj(proj) {
        this.projs.push(proj);
    }
    calcForce(proj, other) {
        //Get force exerted on proj by other projectile.
        let displacement = other.position.minus(proj.position);
        let dist = displacement.magnitude;
        //Note: no mention of inversedegree here
        let force = displacement.normalize().times_((this.rules.bigG || this.bigG) * proj.mass * other.mass / Math.pow(dist, this.rules.inverseDegree || 2));
        return force;
    }
    integrateSemiImplicitEuler(h) {
        this.projs.forEach((proj, _, arr) => {
            let totalForce = arr
                .filter(other => other.id !== proj.id)
                .map(other => this.calcForce(proj, other))
                .reduce((acc, cur) => acc.plus_(cur), Vec_1.default(0, 0));
            proj.acceleration = totalForce.times(1 / proj.mass);
        });
        this.projs.forEach(proj => { proj.velocity.plus_(proj.acceleration.times(h)); });
        this.projs.forEach(proj => { proj.position.plus_(proj.velocity.times(h)); });
    }
    step(h) {
        this.computeCollisions();
        this.integrateSemiImplicitEuler(h);
        return this.projs;
    }
    collide(p1, p2) {
        let mass = +p1.mass + +p2.mass;
        let position = p1.position.times(p1.mass).plus(p2.position.times(p2.mass)).times(1 / mass);
        let velocity = p1.momentum.plus(p2.momentum).times(1 / mass);
        return new Projectile_1.default(position, velocity, mass);
    }
    computeCollisions() {
        return this.projs = this.projs.reduce((projectiles, cur) => {
            let idx = projectiles.findIndex(other => cur.position.minus(other.position).magnitude < cur.radius + other.radius);
            if (idx === -1) {
                projectiles.push(cur);
                return projectiles;
            }
            projectiles[idx] = this.collide(projectiles[idx], cur);
            return projectiles;
        }, []);
    }
}
exports.default = Physics;


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


/***/ }),

/***/ "./src/worker/Worker.ts":
/*!******************************!*\
  !*** ./src/worker/Worker.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Physics_1 = __webpack_require__(/*! ./Physics */ "./src/worker/Physics.ts");
const Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/worker/Projectile.ts");
const Vec_1 = __webpack_require__(/*! ../lib/Vec */ "./src/lib/Vec.ts");
const Message_1 = __webpack_require__(/*! ./Message */ "./src/worker/Message.ts");
let physics = new Physics_1.default();
let play = false;
function parseAsProjectile({ position, velocity, mass }) {
    let projectile = new Projectile_1.default(Vec_1.default(), Vec_1.default(), 0);
    Object.assign(projectile.position, position);
    Object.assign(projectile.velocity, velocity);
    projectile.mass = mass;
    return projectile;
}
onmessage = (e) => {
    let data = e.data;
    switch (data.type) {
        case Message_1.MessageType.PLAY:
            if (!play) {
                play = true;
                loop();
            }
            break;
        case Message_1.MessageType.PAUSE:
            console.log('pause');
            play = false;
            break;
        case Message_1.MessageType.NEW_PROJECTILE:
            handleNewProjectile(parseAsProjectile(data.payload));
            break;
        case Message_1.MessageType.SET_ENGINE_RULES:
            if (!e.data.rules)
                throw Error('No such rules');
            physics.setRules(e.data.rules);
            break;
        default:
            throw Error('Unhandled message to worker');
    }
};
function handleNewProjectile(projectile) {
    physics.addProj(projectile);
}
function loop() {
    if (!play)
        return;
    let start = performance.now();
    let projectiles = physics.step(1 / 60);
    postMessage(Message_1.createMessage(Message_1.MessageType.PHYSICS_STEP, projectiles));
    setTimeout(loop, 1000 / 60 - (performance.now() - start));
}


/***/ })

/******/ });
//# sourceMappingURL=worker.js.map