module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: AuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/urls */ \"./utils/urls.js\");\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/context/AuthContext.js\";\n\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nlet magic;\nconst AuthProvider = props => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  /**\n   * Add email user\n   * @param {string} email\n   */\n\n  const loginUser = async email => {\n    try {\n      await magic.auth.loginWithMagicLink({\n        email\n      });\n      setUser({\n        email\n      });\n      router.push('/');\n    } catch (err) {\n      setUser(null);\n    }\n  };\n  /**\n   *Set user null\n   */\n\n\n  const logoutUser = async () => {\n    try {\n      await magic.user.logout();\n      setUser(null);\n      router.push('/');\n    } catch (err) {}\n  };\n\n  const checkUserLoggedIn = async () => {\n    try {\n      const isLoggedIn = await magic.user.isLoggedIn();\n\n      if (isLoggedIn) {\n        const {\n          email\n        } = await magic.user.getMetadata();\n        setUser({\n          email\n        });\n      }\n    } catch (err) {}\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Magic\"](_utils_urls__WEBPACK_IMPORTED_MODULE_4__[\"MAGIC_PUBLIC_KEY\"]);\n    checkUserLoggedIn();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      user,\n      loginUser,\n      logoutUser\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 9\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRmNGQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibWFnaWMiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpblVzZXIiLCJlbWFpbCIsImF1dGgiLCJsb2dpbldpdGhNYWdpY0xpbmsiLCJwdXNoIiwiZXJyIiwibG9nb3V0VXNlciIsImxvZ291dCIsImNoZWNrVXNlckxvZ2dlZEluIiwiaXNMb2dnZWRJbiIsImdldE1ldGFkYXRhIiwidXNlRWZmZWN0IiwiTWFnaWMiLCJNQUdJQ19QVUJMSUNfS0VZIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRUEsSUFBSUMsS0FBSjtBQUNPLE1BQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBRW5DLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxJQUFELENBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFFBQU1DLFNBQVMsR0FBRyxNQUFPQyxLQUFQLElBQWdCO0FBQzlCLFFBQUk7QUFDQSxZQUFNVCxLQUFLLENBQUNVLElBQU4sQ0FBV0Msa0JBQVgsQ0FBOEI7QUFBQ0Y7QUFBRCxPQUE5QixDQUFOO0FBQ0FMLGFBQU8sQ0FBQztBQUFDSztBQUFELE9BQUQsQ0FBUDtBQUNBSCxZQUFNLENBQUNNLElBQVAsQ0FBWSxHQUFaO0FBQ0gsS0FKRCxDQUtBLE9BQU9DLEdBQVAsRUFBVztBQUNQVCxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0g7QUFDSixHQVREO0FBV0E7QUFDSjtBQUNBOzs7QUFDSSxRQUFNVSxVQUFVLEdBQUcsWUFBUztBQUN4QixRQUFJO0FBQ0EsWUFBTWQsS0FBSyxDQUFDRyxJQUFOLENBQVdZLE1BQVgsRUFBTjtBQUNBWCxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FFLFlBQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7QUFDSCxLQUpELENBS0EsT0FBT0MsR0FBUCxFQUFXLENBRVY7QUFDSixHQVREOztBQVdBLFFBQU1HLGlCQUFpQixHQUFHLFlBQVc7QUFDakMsUUFBSTtBQUNBLFlBQU1DLFVBQVUsR0FBRyxNQUFNakIsS0FBSyxDQUFDRyxJQUFOLENBQVdjLFVBQVgsRUFBekI7O0FBQ0EsVUFBR0EsVUFBSCxFQUFjO0FBQ1YsY0FBTTtBQUFDUjtBQUFELFlBQVUsTUFBTVQsS0FBSyxDQUFDRyxJQUFOLENBQVdlLFdBQVgsRUFBdEI7QUFDQWQsZUFBTyxDQUFDO0FBQUNLO0FBQUQsU0FBRCxDQUFQO0FBQ0g7QUFDSixLQU5ELENBT0EsT0FBT0ksR0FBUCxFQUFXLENBRVY7QUFDSixHQVhEOztBQWFBTSx5REFBUyxDQUFDLE1BQU07QUFDWm5CLFNBQUssR0FBRyxJQUFJb0IsK0NBQUosQ0FBVUMsNERBQVYsQ0FBUjtBQUNBTCxxQkFBaUI7QUFDaEIsR0FISSxFQUdGLEVBSEUsQ0FBVDtBQU1BLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFYixVQUFGO0FBQVFLLGVBQVI7QUFBbUJNO0FBQW5CLEtBQTdCO0FBQUEsY0FDS1osS0FBSyxDQUFDb0I7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFNSCxDQTNETTtBQTZEUXhCLDBFQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge01hZ2ljfSBmcm9tICdtYWdpYy1zZGsnXG5pbXBvcnQge01BR0lDX1BVQkxJQ19LRVl9IGZyb20gXCIuLi91dGlscy91cmxzXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmxldCBtYWdpY1xuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYWlsIHVzZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxcbiAgICAgKi9cbiAgICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoZW1haWwpID0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbWFnaWMuYXV0aC5sb2dpbldpdGhNYWdpY0xpbmsoe2VtYWlsfSlcbiAgICAgICAgICAgIHNldFVzZXIoe2VtYWlsfSlcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKXtcbiAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0IHVzZXIgbnVsbFxuICAgICAqL1xuICAgIGNvbnN0IGxvZ291dFVzZXIgPSBhc3luYygpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpXG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycil7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gYXdhaXQgbWFnaWMudXNlci5pc0xvZ2dlZEluKClcbiAgICAgICAgICAgIGlmKGlzTG9nZ2VkSW4pe1xuICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbH0gPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHtlbWFpbH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycil7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIG1hZ2ljID0gbmV3IE1hZ2ljKE1BR0lDX1BVQkxJQ19LRVkpXG4gICAgICAgIGNoZWNrVXNlckxvZ2dlZEluKClcbiAgICAgICAgfSwgW11cbiAgICApXG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBsb2dpblVzZXIsIGxvZ291dFVzZXJ9fT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cblxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Login.module.css */ \"./styles/Login.module.css\");\n/* harmony import */ var _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/pages/login.js\";\n\n\n\n\nfunction Login() {\n  const {\n    0: email,\n    1: setEmail\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"\");\n  const {\n    loginUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useContext\"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n\n  const handleSubmit = event => {\n    event.preventDefault();\n    loginUser(email);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Login disini untuk melakukan pembelian\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Login\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n      onSubmit: handleSubmit,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.input,\n        type: \"email\",\n        value: email,\n        onChange: event => setEmail(event.target.value),\n        placeholder: \"Email Address\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _styles_Login_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button,\n        type: \"submit\",\n        children: \"Login\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcz8zYjY5Il0sIm5hbWVzIjpbIkxvZ2luIiwiZW1haWwiLCJzZXRFbWFpbCIsInVzZVN0YXRlIiwibG9naW5Vc2VyIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInN0eWxlcyIsImlucHV0IiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBZ0I7QUFFM0IsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUNDO0FBQUQsTUFBY0Msd0RBQVUsQ0FBQ0MsNERBQUQsQ0FBOUI7O0FBQ0EsUUFBTUMsWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDNUJBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBTCxhQUFTLENBQUNILEtBQUQsQ0FBVDtBQUNILEdBSEQ7O0FBS0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBT0k7QUFBTSxjQUFRLEVBQUVNLFlBQWhCO0FBQUEsOEJBQ0k7QUFDSSxpQkFBUyxFQUFFRywrREFBTSxDQUFDQyxLQUR0QjtBQUVJLFlBQUksRUFBQyxPQUZUO0FBR0ksYUFBSyxFQUFFVixLQUhYO0FBSUksZ0JBQVEsRUFBR08sS0FBRCxJQUFXTixRQUFRLENBQUNNLEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUFkLENBSmpDO0FBS0ksbUJBQVcsRUFBQztBQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFRSTtBQUNJLGlCQUFTLEVBQUVILCtEQUFNLENBQUNJLE1BRHRCO0FBRUksWUFBSSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXlCSCIsImZpbGUiOiIuL3BhZ2VzL2xvZ2luLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSBcIi4uL2NvbnRleHQvQXV0aENvbnRleHRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0xvZ2luLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCl7XG5cbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpXG4gICAgY29uc3Qge2xvZ2luVXNlcn0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KVxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIGxvZ2luVXNlcihlbWFpbClcbiAgICB9XG5cbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TG9naW48L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJMb2dpbiBkaXNpbmkgdW50dWsgbWVsYWt1a2FuIHBlbWJlbGlhblwiLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGgyPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRFbWFpbChldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.js\n");

/***/ }),

/***/ "./styles/Login.module.css":
/*!*********************************!*\
  !*** ./styles/Login.module.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"input\": \"Login_input__CDy2q\",\n\t\"button\": \"Login_button__Xqm24\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzcz9iZTg1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zdHlsZXMvTG9naW4ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImlucHV0XCI6IFwiTG9naW5faW5wdXRfX0NEeTJxXCIsXG5cdFwiYnV0dG9uXCI6IFwiTG9naW5fYnV0dG9uX19YcW0yNFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Login.module.css\n");

/***/ }),

/***/ "./utils/urls.js":
/*!***********************!*\
  !*** ./utils/urls.js ***!
  \***********************/
/*! exports provided: API_URL, MAGIC_PUBLIC_KEY, fromImageToUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAGIC_PUBLIC_KEY\", function() { return MAGIC_PUBLIC_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromImageToUrl\", function() { return fromImageToUrl; });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';\nconst MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_3878CF7501A0EF1B';\n/**\n * Given image return the url\n * Works for local and deployed strapis\n * @param {any} image\n */\n\nconst fromImageToUrl = image => {\n  if (!image) {\n    return \"/vervel.svg\";\n  }\n\n  if (image.url.indexOf(\"/\") === 0) {\n    return `${API_URL}${image.url}`;\n  }\n\n  return image.url;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91cmxzLmpzP2EyY2YiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTUFHSUNfUFVCTElDX0tFWSIsIk5FWFRfUFVCTElDX01BR0lDX1BVQkxJQ19LRVkiLCJmcm9tSW1hZ2VUb1VybCIsImltYWdlIiwidXJsIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWixJQUFtQyx1QkFBbkQ7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBR0gsT0FBTyxDQUFDQyxHQUFSLENBQVlHLDRCQUFaLElBQTRDLDBCQUFyRTtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sTUFBTUMsY0FBYyxHQUFHQyxLQUFELElBQVc7QUFDcEMsTUFBRyxDQUFDQSxLQUFKLEVBQVU7QUFDTixXQUFPLGFBQVA7QUFDSDs7QUFFRCxNQUFJQSxLQUFLLENBQUNDLEdBQU4sQ0FBVUMsT0FBVixDQUFrQixHQUFsQixNQUEyQixDQUEvQixFQUFpQztBQUM3QixXQUFRLEdBQUVULE9BQVEsR0FBRU8sS0FBSyxDQUFDQyxHQUFJLEVBQTlCO0FBQ0g7O0FBRUQsU0FBT0QsS0FBSyxDQUFDQyxHQUFiO0FBQ0gsQ0FWTSIsImZpbGUiOiIuL3V0aWxzL3VybHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQVBJX1VSTCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9VUkwgfHwgJ2h0dHA6Ly9sb2NhbGhvc3Q6MTMzNydcblxuZXhwb3J0IGNvbnN0IE1BR0lDX1BVQkxJQ19LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQUdJQ19QVUJMSUNfS0VZIHx8ICdwa190ZXN0XzM4NzhDRjc1MDFBMEVGMUInXG5cbi8qKlxuICogR2l2ZW4gaW1hZ2UgcmV0dXJuIHRoZSB1cmxcbiAqIFdvcmtzIGZvciBsb2NhbCBhbmQgZGVwbG95ZWQgc3RyYXBpc1xuICogQHBhcmFtIHthbnl9IGltYWdlXG4gKi9cblxuZXhwb3J0IGNvbnN0IGZyb21JbWFnZVRvVXJsPSAoaW1hZ2UpID0+IHtcbiAgICBpZighaW1hZ2Upe1xuICAgICAgICByZXR1cm4gXCIvdmVydmVsLnN2Z1wiXG4gICAgfVxuXG4gICAgaWYgKGltYWdlLnVybC5pbmRleE9mKFwiL1wiKSA9PT0gMCl7XG4gICAgICAgIHJldHVybiBgJHtBUElfVVJMfSR7aW1hZ2UudXJsfWBcbiAgICB9XG5cbiAgICByZXR1cm4gaW1hZ2UudXJsXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/urls.js\n");

/***/ }),

/***/ "magic-sdk":
/*!****************************!*\
  !*** external "magic-sdk" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"magic-sdk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYWdpYy1zZGtcIj9iYWI5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im1hZ2ljLXNkay5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hZ2ljLXNka1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///magic-sdk\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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