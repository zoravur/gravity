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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Physics.ts":
/*!************************!*\
  !*** ./src/Physics.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/Projectile.ts");
const Vec_1 = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
class Physics {
    constructor(rules = {}) {
        this.bigG = 100;
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
            let idx = projectiles.findIndex(other => cur.position.minus(other.position).magnitude < (cur.radius + other.radius / 2));
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

/***/ "./src/Worker.ts":
/*!***********************!*\
  !*** ./src/Worker.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Physics_1 = __webpack_require__(/*! ./Physics */ "./src/Physics.ts");
const Projectile_1 = __webpack_require__(/*! ./Projectile */ "./src/Projectile.ts");
//import PathHistory from './Paths';
const Vec_1 = __webpack_require__(/*! ./Vec */ "./src/Vec.ts");
let physics = new Physics_1.default();
//let pathHistory = new PathHistory();
onmessage = (e) => {
    let data = e.data;
    switch (data.type) {
        case 'new-projectile':
            handleNewProjectile(data);
            break;
        case 'set-engine-rules':
            if (!e.data.rules)
                throw Error('No such rules');
            physics.setRules(e.data.rules);
            break;
        default:
            throw Error('Unhandled message to worker');
            break;
    }
};
function handleNewProjectile(data) {
    physics.addProj(new Projectile_1.default(Vec_1.default(data.projectile.position.x, data.projectile.position.y), Vec_1.default(data.projectile.velocity.x, data.projectile.velocity.y), data.projectile.mass));
}
function loop() {
    let start = performance.now();
    let projectiles = physics.step(1 / 60);
    //pathHistory.addStep(projectiles);
    postMessage({ type: 'simulation-step', projectiles: projectiles });
    setTimeout(loop, 1000 / 60 - (performance.now() - start));
}
loop();


/***/ })

/******/ });
//# sourceMappingURL=worker.js.map