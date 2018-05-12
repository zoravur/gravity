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

/***/ "./src/Projectile.js":
/*!***************************!*\
  !*** ./src/Projectile.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Vec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vec.js */ \"./src/Vec.js\");\n\n\nclass Projectile {\n  constructor(position, velocity) {\n    this.position = position;\n    this.velocity = velocity;\n  }\n\n  updateVelocity (elapsedTime) {\n    let dV = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].times(this.acceleration, elapsedTime);\n    this.velocity = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(this.velocity, dV);\n    return this.velocity;\n  }\n\n  updatePosition(elapsedTime) {\n    let v1 = this.velocity;\n    let v2 = this.updateVelocity(elapsedTime);\n    let vAvg = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].times(_Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(v1, v2), 0.5);\n\n    let d = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].times(vAvg, elapsedTime);\n    this.position = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(this.position, d);\n    return this.position;\n  }\n\n  draw(cx) {\n    cx.fillRect(this.position.x - 5, this.position.y - 5, 10, 10);\n    cx.beginPath();\n    cx.moveTo(this.position.x, this.position.y);\n    let endPoint = _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].plus(this.position, this.velocity);\n    cx.lineTo(endPoint.x, endPoint.y);\n    cx.stroke();\n  }\n}\n\nProjectile.prototype.acceleration = new _Vec_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0, 200);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projectile);\n\n\n//# sourceURL=webpack:///./src/Projectile.js?");

/***/ }),

/***/ "./src/Vec.js":
/*!********************!*\
  !*** ./src/Vec.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Vec; });\nclass Vec {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n\n  toPolar() {\n    return {\n      magnitude: Math.hypot(this.x, this.y),\n      angle: Math.atan2(this.x, this.y)\n    };\n  }\n\n  static fromPolar(mag, angle) {\n    return new Vec(\n      mag * Math.cos(angle),\n      mag * Math.sin(angle)\n    );\n  }\n\n  static plus(vec1, vec2) {\n    return new Vec(\n      vec1.x + vec2.x,\n      vec1.y + vec2.y\n    );\n  }\n\n  static minus(vec1, vec2) {\n    return new Vec(\n      vec1.x - vec2.x,\n      vec1.y - vec2.y\n    );\n  }\n\n  static times(vec, scalar) {\n    return new Vec(\n      vec.x * scalar,\n      vec.y * scalar\n    );\n  }\n}\n\n\n//# sourceURL=webpack:///./src/Vec.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Projectile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projectile.js */ \"./src/Projectile.js\");\n/* harmony import */ var _Vec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Vec.js */ \"./src/Vec.js\");\n\n\n\n\nlet projectiles = [];\n\nlet canvas = document.getElementById('canvas');\nlet cx = canvas.getContext('2d');\n\n\nfunction animate() {\n  let start;\n  let prevTime;\n\n  function draw(timestamp) {\n    cx.clearRect(0, 0, canvas.width, canvas.height);\n    if (!start) start = timestamp;\n\n    let elapsedTime = (timestamp - prevTime) / 1000;\n\n    projectiles.forEach(proj => {\n      proj.draw(cx);\n      proj.updatePosition(elapsedTime);\n    });\n    \n    prevTime = timestamp; //store time for next frame;\n    requestAnimationFrame(draw);\n  }\n\n  requestAnimationFrame(draw);\n}\n\n\nfunction handleMouseDown(event) {\n  let startX = event.offsetX;\n  let startY = event.offsetY;\n\n  function handleMouseUp(event) {\n    let endX = event.offsetX;\n    let endY = event.offsetY;\n\n    let newProj = computeProjectile(startX, startY, endX, endY);\n    console.log('newProj', newProj);\n    canvas.removeEventListener('mouseup', handleMouseUp);\n    projectiles.push(newProj);\n    console.log(projectiles);\n  }\n\n  canvas.addEventListener('mouseup', handleMouseUp);\n}\n\ncanvas.addEventListener('mousedown', handleMouseDown);\n\nanimate();\n\nfunction computeProjectile (x1, y1, x2, y2) {\n  console.log('In computeProjectile:');\n  console.log(arguments);\n\n  let startVec = new _Vec_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x1, y1);\n  let endVec = new _Vec_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x2, y2);\n  let deltaVec = _Vec_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].minus(endVec, startVec);\n  let proj = new _Projectile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](startVec, deltaVec);\n\n  console.log('startVec', startVec);\n  console.log('endVec', endVec);\n  console.log('proj', proj);\n\n  return proj;\n}\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });