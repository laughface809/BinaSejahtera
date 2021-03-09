module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/products/[slug].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bs-products.json":
/*!**************************!*\
  !*** ./bs-products.json ***!
  \**************************/
/*! exports provided: 0, 1, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"_id\\\":\\\"60478415adcd87184bb9d66d\\\",\\\"name\\\":\\\"test\\\",\\\"slug\\\":\\\"test\\\",\\\"content\\\":\\\"test gas\\\",\\\"meta_description\\\":\\\"mantab\\\",\\\"meta_title\\\":\\\"complete gas elpiji\\\",\\\"price\\\":20,\\\"published_at\\\":\\\"2021-03-09T14:20:15.657Z\\\",\\\"createdAt\\\":\\\"2021-03-09T14:20:05.004Z\\\",\\\"updatedAt\\\":\\\"2021-03-09T14:20:15.712Z\\\",\\\"__v\\\":0,\\\"image\\\":{\\\"_id\\\":\\\"6046f05877370761f0a29c93\\\",\\\"name\\\":\\\"gas.jpg\\\",\\\"alternativeText\\\":\\\"\\\",\\\"caption\\\":\\\"\\\",\\\"hash\\\":\\\"gas_9980fba0a0\\\",\\\"ext\\\":\\\".jpg\\\",\\\"mime\\\":\\\"image/jpeg\\\",\\\"size\\\":26.73,\\\"width\\\":700,\\\"height\\\":700,\\\"url\\\":\\\"/uploads/gas_9980fba0a0.jpg\\\",\\\"formats\\\":{\\\"thumbnail\\\":{\\\"name\\\":\\\"thumbnail_gas.jpg\\\",\\\"hash\\\":\\\"thumbnail_gas_9980fba0a0\\\",\\\"ext\\\":\\\".jpg\\\",\\\"mime\\\":\\\"image/jpeg\\\",\\\"width\\\":156,\\\"height\\\":156,\\\"size\\\":3.43,\\\"path\\\":null,\\\"url\\\":\\\"/uploads/thumbnail_gas_9980fba0a0.jpg\\\"},\\\"small\\\":{\\\"name\\\":\\\"small_gas.jpg\\\",\\\"hash\\\":\\\"small_gas_9980fba0a0\\\",\\\"ext\\\":\\\".jpg\\\",\\\"mime\\\":\\\"image/jpeg\\\",\\\"width\\\":500,\\\"height\\\":500,\\\"size\\\":16.47,\\\"path\\\":null,\\\"url\\\":\\\"/uploads/small_gas_9980fba0a0.jpg\\\"}},\\\"provider\\\":\\\"local\\\",\\\"related\\\":[\\\"603c630ca9b27a7014c97dd5\\\",\\\"60478415adcd87184bb9d66d\\\"],\\\"createdAt\\\":\\\"2021-03-09T03:49:44.358Z\\\",\\\"updatedAt\\\":\\\"2021-03-09T14:20:05.020Z\\\",\\\"__v\\\":0,\\\"id\\\":\\\"6046f05877370761f0a29c93\\\"},\\\"id\\\":\\\"60478415adcd87184bb9d66d\\\"},{\\\"_id\\\":\\\"60478458adcd87184bb9d66f\\\",\\\"name\\\":\\\"test2\\\",\\\"slug\\\":\\\"test2\\\",\\\"content\\\":\\\"mantab2    \\\",\\\"meta_description\\\":\\\"mantab2\\\",\\\"meta_title\\\":\\\"okeoke\\\",\\\"price\\\":10,\\\"published_at\\\":\\\"2021-03-09T14:21:15.211Z\\\",\\\"createdAt\\\":\\\"2021-03-09T14:21:12.518Z\\\",\\\"updatedAt\\\":\\\"2021-03-09T14:21:15.256Z\\\",\\\"__v\\\":0,\\\"image\\\":{\\\"_id\\\":\\\"6046f00577370761f0a29c91\\\",\\\"name\\\":\\\"telur.jpeg\\\",\\\"alternativeText\\\":\\\"\\\",\\\"caption\\\":\\\"\\\",\\\"hash\\\":\\\"telur_1e9e6b1b99\\\",\\\"ext\\\":\\\".jpeg\\\",\\\"mime\\\":\\\"image/jpeg\\\",\\\"size\\\":26.67,\\\"width\\\":700,\\\"height\\\":700,\\\"url\\\":\\\"/uploads/telur_1e9e6b1b99.jpeg\\\",\\\"formats\\\":{\\\"thumbnail\\\":{\\\"name\\\":\\\"thumbnail_telur.jpeg\\\",\\\"hash\\\":\\\"thumbnail_telur_1e9e6b1b99\\\",\\\"ext\\\":\\\".jpeg\\\",\\\"mime\\\":\\\"image/jpeg\\\",\\\"width\\\":156,\\\"height\\\":156,\\\"size\\\":2.91,\\\"path\\\":null,\\\"url\\\":\\\"/uploads/thumbnail_telur_1e9e6b1b99.jpeg\\\"},\\\"small\\\":{\\\"name\\\":\\\"small_telur.jpeg\\\",\\\"hash\\\":\\\"small_telur_1e9e6b1b99\\\",\\\"ext\\\":\\\".jpeg\\\",\\\"mime\\\":\\\"image/jpeg\\\",\\\"width\\\":500,\\\"height\\\":500,\\\"size\\\":15.11,\\\"path\\\":null,\\\"url\\\":\\\"/uploads/small_telur_1e9e6b1b99.jpeg\\\"}},\\\"provider\\\":\\\"local\\\",\\\"related\\\":[\\\"603c8b5d5e38c17853beef55\\\",\\\"60478458adcd87184bb9d66f\\\"],\\\"createdAt\\\":\\\"2021-03-09T03:48:21.446Z\\\",\\\"updatedAt\\\":\\\"2021-03-09T14:21:12.527Z\\\",\\\"__v\\\":0,\\\"id\\\":\\\"6046f00577370761f0a29c91\\\"},\\\"id\\\":\\\"60478458adcd87184bb9d66f\\\"}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2JzLXByb2R1Y3RzLmpzb24uanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./bs-products.json\n");

/***/ }),

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _bs_products_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../bs-products.json */ \"./bs-products.json\");\nvar _bs_products_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../bs-products.json */ \"./bs-products.json\", 1);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/urls */ \"./utils/urls.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/format */ \"./utils/format.js\");\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/pages/products/[slug].js\";\n\n\n\n\nconst product = _bs_products_json__WEBPACK_IMPORTED_MODULE_2__[0];\n\nconst Product = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [product.meta_title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: product.meta_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 21\n      }, undefined), product.meta_description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: product.meta_description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 21\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: Object(_utils_urls__WEBPACK_IMPORTED_MODULE_3__[\"fromImageToUrl\"])(product.image)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"IDR \", Object(_utils_format__WEBPACK_IMPORTED_MODULE_4__[\"twoDecimals\"])(product.price)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: product.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanM/Yjk0ZiJdLCJuYW1lcyI6WyJwcm9kdWN0IiwicHJvZHVjdHMiLCJQcm9kdWN0IiwibWV0YV90aXRsZSIsIm1ldGFfZGVzY3JpcHRpb24iLCJuYW1lIiwiZnJvbUltYWdlVG9VcmwiLCJpbWFnZSIsInR3b0RlY2ltYWxzIiwicHJpY2UiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsT0FBTyxHQUFHQyw4Q0FBUSxDQUFDLENBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDbEIsc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLGlCQUVRRixPQUFPLENBQUNHLFVBQVIsaUJBQ0E7QUFBQSxrQkFBUUgsT0FBTyxDQUFDRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhSLEVBTVFILE9BQU8sQ0FBQ0ksZ0JBQVIsaUJBQ0E7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVKLE9BQU8sQ0FBQ0k7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFXSTtBQUFBLGdCQUFLSixPQUFPLENBQUNLO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQVlJO0FBQUssU0FBRyxFQUFFQyxrRUFBYyxDQUFDTixPQUFPLENBQUNPLEtBQVQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixlQWFJO0FBQUEsZ0JBQUtQLE9BQU8sQ0FBQ0s7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBY0k7QUFBQSx5QkFBUUcsaUVBQVcsQ0FBQ1IsT0FBTyxDQUFDUyxLQUFULENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQWdCSTtBQUFBLGdCQUNLVCxPQUFPLENBQUNVO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFzQkgsQ0F2QkQ7O0FBeUJlUixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4uLy4uL2JzLXByb2R1Y3RzLmpzb24nXG5pbXBvcnQge2Zyb21JbWFnZVRvVXJsLCBBUElfVVJMfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXJsc1wiO1xuaW1wb3J0IHt0d29EZWNpbWFsc30gZnJvbSBcIi4uLy4uL3V0aWxzL2Zvcm1hdFwiO1xuXG5jb25zdCBwcm9kdWN0ID0gcHJvZHVjdHNbMF1cblxuY29uc3QgUHJvZHVjdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm1ldGFfdGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntwcm9kdWN0Lm1ldGFfdGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm1ldGFfZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvZHVjdC5tZXRhX2Rlc2NyaXB0aW9ufS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtmcm9tSW1hZ2VUb1VybChwcm9kdWN0LmltYWdlKX0vPlxuICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwPklEUiB7dHdvRGVjaW1hbHMocHJvZHVjdC5wcmljZSl9PC9wPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb250ZW50fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ }),

/***/ "./utils/format.js":
/*!*************************!*\
  !*** ./utils/format.js ***!
  \*************************/
/*! exports provided: twoDecimals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"twoDecimals\", function() { return twoDecimals; });\n/**\n * Display the number with 2 digits\n * @param {string | number} number\n */\nconst twoDecimals = number => parseFloat(number).toFixed(2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXQuanM/Mjk1ZCJdLCJuYW1lcyI6WyJ0d29EZWNpbWFscyIsIm51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxNQUFNQSxXQUFXLEdBQUlDLE1BQUQsSUFBWUMsVUFBVSxDQUFDRCxNQUFELENBQVYsQ0FBbUJFLE9BQW5CLENBQTJCLENBQTNCLENBQWhDIiwiZmlsZSI6Ii4vdXRpbHMvZm9ybWF0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBEaXNwbGF5IHRoZSBudW1iZXIgd2l0aCAyIGRpZ2l0c1xuICogQHBhcmFtIHtzdHJpbmcgfCBudW1iZXJ9IG51bWJlclxuICovXG5cbmV4cG9ydCBjb25zdCB0d29EZWNpbWFscyA9IChudW1iZXIpID0+IHBhcnNlRmxvYXQobnVtYmVyKS50b0ZpeGVkKDIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/format.js\n");

/***/ }),

/***/ "./utils/urls.js":
/*!***********************!*\
  !*** ./utils/urls.js ***!
  \***********************/
/*! exports provided: API_URL, fromImageToUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromImageToUrl\", function() { return fromImageToUrl; });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';\n/**\n * Given image return the url\n * Works for local and deployed strapis\n * @param {any} image\n */\n\nconst fromImageToUrl = image => {\n  if (!image) {\n    return \"/vervel.svg\";\n  }\n\n  if (image.url.indexOf(\"/\") === 0) {\n    return `${API_URL}${image.url}`;\n  }\n\n  return image.url;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91cmxzLmpzP2EyY2YiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiZnJvbUltYWdlVG9VcmwiLCJpbWFnZSIsInVybCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUFuRDtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUMsY0FBYyxHQUFHQyxLQUFELElBQVc7QUFDcEMsTUFBRyxDQUFDQSxLQUFKLEVBQVU7QUFDTixXQUFPLGFBQVA7QUFDSDs7QUFFRCxNQUFJQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsT0FBVixDQUFrQixHQUFsQixNQUEyQixDQUEvQixFQUFpQztBQUM3QixXQUFRLEdBQUVQLE9BQVEsR0FBRUssS0FBSyxDQUFDQyxHQUFJLEVBQTlCO0FBQ0g7O0FBRUQsU0FBT0QsS0FBSyxDQUFDQyxHQUFiO0FBQ0gsQ0FWTSIsImZpbGUiOiIuL3V0aWxzL3VybHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNydcblxuLyoqXG4gKiBHaXZlbiBpbWFnZSByZXR1cm4gdGhlIHVybFxuICogV29ya3MgZm9yIGxvY2FsIGFuZCBkZXBsb3llZCBzdHJhcGlzXG4gKiBAcGFyYW0ge2FueX0gaW1hZ2VcbiAqL1xuXG5leHBvcnQgY29uc3QgZnJvbUltYWdlVG9Vcmw9IChpbWFnZSkgPT4ge1xuICAgIGlmKCFpbWFnZSl7XG4gICAgICAgIHJldHVybiBcIi92ZXJ2ZWwuc3ZnXCJcbiAgICB9XG5cbiAgICBpZiAoaW1hZ2UudXJsLmluZGV4T2YoXCIvXCIpID09PSAwKXtcbiAgICAgICAgcmV0dXJuIGAke0FQSV9VUkx9JHtpbWFnZS51cmx9YFxuICAgIH1cblxuICAgIHJldHVybiBpbWFnZS51cmxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/urls.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });