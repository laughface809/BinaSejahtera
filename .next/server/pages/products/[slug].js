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

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/urls */ \"./utils/urls.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/format */ \"./utils/format.js\");\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/pages/products/[slug].js\";\n\n\n\n\nconst Product = ({\n  product\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [product.meta_title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: product.meta_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 21\n      }, undefined), product.meta_description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: product.meta_description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: Object(_utils_urls__WEBPACK_IMPORTED_MODULE_2__[\"fromImageToUrl\"])(product.image)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"IDR \", Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__[\"twoDecimals\"])(product.price)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: product.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 9\n  }, undefined);\n};\n\nasync function getStaticProps({\n  params: {\n    slug\n  }\n}) {\n  const product_res = await fetch(`${_utils_urls__WEBPACK_IMPORTED_MODULE_2__[\"API_URL\"]}/bs-products/?slug=${slug}`);\n  const found = await product_res.json();\n  return {\n    props: {\n      product: found[0] //Karena respon filter dari API nya berupa array\n\n    }\n  };\n}\nasync function getStaticPaths() {\n  //Retrieve all the posible paths\n  const products_res = await fetch(`${_utils_urls__WEBPACK_IMPORTED_MODULE_2__[\"API_URL\"]}/bs-products/`);\n  const products = await products_res.json(); //Return ke NextJS context\n\n  return {\n    paths: products.map(product => ({\n      params: {\n        slug: String(product.slug)\n      }\n    })),\n    fallback: false //Kasih tau nextJS untuk tunjukkan 404 jika params tidak cocok\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanM/Yjk0ZiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwibmFtZSIsImZyb21JbWFnZVRvVXJsIiwiaW1hZ2UiLCJ0d29EZWNpbWFscyIsInByaWNlIiwiY29udGVudCIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwic2x1ZyIsInByb2R1Y3RfcmVzIiwiZmV0Y2giLCJBUElfVVJMIiwiZm91bmQiLCJqc29uIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInByb2R1Y3RzX3JlcyIsInByb2R1Y3RzIiwicGF0aHMiLCJtYXAiLCJTdHJpbmciLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFDM0Isc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLGlCQUVRQSxPQUFPLENBQUNDLFVBQVIsaUJBQ0E7QUFBQSxrQkFBUUQsT0FBTyxDQUFDQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhSLEVBTVFELE9BQU8sQ0FBQ0UsZ0JBQVIsaUJBQ0E7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVGLE9BQU8sQ0FBQ0U7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFXSTtBQUFBLGdCQUFLRixPQUFPLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQVlJO0FBQUssU0FBRyxFQUFFQyxrRUFBYyxDQUFDSixPQUFPLENBQUNLLEtBQVQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixlQWFJO0FBQUEsZ0JBQUtMLE9BQU8sQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBY0k7QUFBQSx5QkFBUUcsaUVBQVcsQ0FBQ04sT0FBTyxDQUFDTyxLQUFULENBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkSixlQWdCSTtBQUFBLGdCQUNLUCxPQUFPLENBQUNRO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFzQkgsQ0F2QkQ7O0FBeUJPLGVBQWVDLGNBQWYsQ0FBOEI7QUFBQ0MsUUFBTSxFQUFDO0FBQUNDO0FBQUQ7QUFBUixDQUE5QixFQUE4QztBQUNqRCxRQUFNQyxXQUFXLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLG1EQUFRLHNCQUFxQkgsSUFBSyxFQUF0QyxDQUEvQjtBQUNBLFFBQU1JLEtBQUssR0FBRyxNQUFNSCxXQUFXLENBQUNJLElBQVosRUFBcEI7QUFFQSxTQUFNO0FBQ0ZDLFNBQUssRUFBQztBQUNGakIsYUFBTyxFQUFFZSxLQUFLLENBQUMsQ0FBRCxDQURaLENBQ2dCOztBQURoQjtBQURKLEdBQU47QUFLSDtBQUVNLGVBQWVHLGNBQWYsR0FBK0I7QUFDbEM7QUFDQSxRQUFNQyxZQUFZLEdBQUcsTUFBTU4sS0FBSyxDQUFFLEdBQUVDLG1EQUFRLGVBQVosQ0FBaEM7QUFDQSxRQUFNTSxRQUFRLEdBQUcsTUFBTUQsWUFBWSxDQUFDSCxJQUFiLEVBQXZCLENBSGtDLENBS2xDOztBQUNBLFNBQU07QUFDRkssU0FBSyxFQUFFRCxRQUFRLENBQUNFLEdBQVQsQ0FBYXRCLE9BQU8sS0FBSTtBQUMzQlUsWUFBTSxFQUFFO0FBQUNDLFlBQUksRUFBRVksTUFBTSxDQUFDdkIsT0FBTyxDQUFDVyxJQUFUO0FBQWI7QUFEbUIsS0FBSixDQUFwQixDQURMO0FBSUZhLFlBQVEsRUFBRSxLQUpSLENBSWM7O0FBSmQsR0FBTjtBQU1IO0FBQ2N6QixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHtmcm9tSW1hZ2VUb1VybCwgQVBJX1VSTH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VybHNcIjtcbmltcG9ydCB7dHdvRGVjaW1hbHN9IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXRcIjtcblxuY29uc3QgUHJvZHVjdCA9ICh7cHJvZHVjdH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm1ldGFfdGl0bGUgJiZcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPntwcm9kdWN0Lm1ldGFfdGl0bGV9PC90aXRsZT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0Lm1ldGFfZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvZHVjdC5tZXRhX2Rlc2NyaXB0aW9ufS8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtmcm9tSW1hZ2VUb1VybChwcm9kdWN0LmltYWdlKX0vPlxuICAgICAgICAgICAgPGgzPntwcm9kdWN0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxwPklEUiB7dHdvRGVjaW1hbHMocHJvZHVjdC5wcmljZSl9PC9wPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5jb250ZW50fVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zOntzbHVnfX0pe1xuICAgIGNvbnN0IHByb2R1Y3RfcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYnMtcHJvZHVjdHMvP3NsdWc9JHtzbHVnfWApXG4gICAgY29uc3QgZm91bmQgPSBhd2FpdCBwcm9kdWN0X3Jlcy5qc29uKClcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgcHJvZHVjdDogZm91bmRbMF0gLy9LYXJlbmEgcmVzcG9uIGZpbHRlciBkYXJpIEFQSSBueWEgYmVydXBhIGFycmF5XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xuICAgIC8vUmV0cmlldmUgYWxsIHRoZSBwb3NpYmxlIHBhdGhzXG4gICAgY29uc3QgcHJvZHVjdHNfcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYnMtcHJvZHVjdHMvYClcbiAgICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IHByb2R1Y3RzX3Jlcy5qc29uKClcblxuICAgIC8vUmV0dXJuIGtlIE5leHRKUyBjb250ZXh0XG4gICAgcmV0dXJue1xuICAgICAgICBwYXRoczogcHJvZHVjdHMubWFwKHByb2R1Y3QgPT4oe1xuICAgICAgICAgICAgcGFyYW1zOiB7c2x1ZzogU3RyaW5nKHByb2R1Y3Quc2x1Zyl9XG4gICAgICAgIH0pKSxcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlIC8vS2FzaWggdGF1IG5leHRKUyB1bnR1ayB0dW5qdWtrYW4gNDA0IGppa2EgcGFyYW1zIHRpZGFrIGNvY29rXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

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