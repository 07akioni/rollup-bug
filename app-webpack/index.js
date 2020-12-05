/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app-src/index.js":
/*!**************************!*
  !*** ./app-src/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _package_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../package/index.js */ \"./package/index.js\");\n\n\nconsole.log(_package_index_js__WEBPACK_IMPORTED_MODULE_0__.default)\n\n//# sourceURL=webpack://rollup-bug/./app-src/index.js?");

/***/ }),

/***/ "./package/a/a.js":
/*!************************!*
  !*** ./package/a/a.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar a = 'a';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (a);\n\n\n//# sourceURL=webpack://rollup-bug/./package/a/a.js?");

/***/ }),

/***/ "./package/a/index.js":
/*!****************************!*
  !*** ./package/a/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => /* reexport safe */ _a_js__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ \"./package/a/a.js\");\n\n\n\n//# sourceURL=webpack://rollup-bug/./package/a/index.js?");

/***/ }),

/***/ "./package/ab.js":
/*!***********************!*
  !*** ./package/ab.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => /* reexport safe */ _a_a_js__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"b\": () => /* reexport safe */ _b_b_js__WEBPACK_IMPORTED_MODULE_2__.default\n/* harmony export */ });\n/* harmony import */ var _a_a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a/a.js */ \"./package/a/a.js\");\n/* harmony import */ var _a_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a/index.js */ \"./package/a/index.js\");\n/* harmony import */ var _b_b_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./b/b.js */ \"./package/b/b.js\");\n/* harmony import */ var _b_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./b/index.js */ \"./package/b/index.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://rollup-bug/./package/ab.js?");

/***/ }),

/***/ "./package/b/b.js":
/*!************************!*
  !*** ./package/b/b.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _a_a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../a/a.js */ \"./package/a/a.js\");\n/* harmony import */ var _ab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ab.js */ \"./package/ab.js\");\n\n\n\nvar b = ['b', _a_a_js__WEBPACK_IMPORTED_MODULE_0__.default];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (b);\n\n\n//# sourceURL=webpack://rollup-bug/./package/b/b.js?");

/***/ }),

/***/ "./package/b/index.js":
/*!****************************!*
  !*** ./package/b/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"b\": () => /* reexport safe */ _b_js__WEBPACK_IMPORTED_MODULE_0__.default\n/* harmony export */ });\n/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b.js */ \"./package/b/b.js\");\n\n\n\n//# sourceURL=webpack://rollup-bug/./package/b/index.js?");

/***/ }),

/***/ "./package/index.js":
/*!**************************!*
  !*** ./package/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"a\": () => /* reexport safe */ _a_a_js__WEBPACK_IMPORTED_MODULE_0__.default,\n/* harmony export */   \"b\": () => /* reexport safe */ _b_b_js__WEBPACK_IMPORTED_MODULE_1__.default,\n/* harmony export */   \"default\": () => /* reexport safe */ _preset_js__WEBPACK_IMPORTED_MODULE_3__.default\n/* harmony export */ });\n/* harmony import */ var _a_a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a/a.js */ \"./package/a/a.js\");\n/* harmony import */ var _b_b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b/b.js */ \"./package/b/b.js\");\n/* harmony import */ var _ab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ab.js */ \"./package/ab.js\");\n/* harmony import */ var _preset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preset.js */ \"./package/preset.js\");\n\n\n\n\n\n\n//# sourceURL=webpack://rollup-bug/./package/index.js?");

/***/ }),

/***/ "./package/preset.js":
/*!***************************!*
  !*** ./package/preset.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _ab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ab.js */ \"./package/ab.js\");\n\n\nconsole.log({ ..._ab_js__WEBPACK_IMPORTED_MODULE_0__ });\n\nvar preset = 'wow';\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (preset);\n\n\n//# sourceURL=webpack://rollup-bug/./package/preset.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./app-src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;