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

/***/ "./components/BuyButton.js":
/*!*********************************!*\
  !*** ./components/BuyButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BuyButton; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _stripe_stripe_js___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stripe/stripe-js/ */ \"@stripe/stripe-js/\");\n/* harmony import */ var _stripe_stripe_js___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_BuyButton_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/BuyButton.module.css */ \"./styles/BuyButton.module.css\");\n/* harmony import */ var _styles_BuyButton_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_BuyButton_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/urls */ \"./utils/urls.js\");\n\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/components/BuyButton.js\";\n\n\n\n\n\n\nconst stripePromise = Object(_stripe_stripe_js___WEBPACK_IMPORTED_MODULE_3__[\"loadStripe\"])(_utils_urls__WEBPACK_IMPORTED_MODULE_6__[\"STRIPE_PK\"]);\nfunction BuyButton({\n  product\n}) {\n  const {\n    user,\n    getToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const redirectToLogin = () => {\n    router.push('/login');\n  };\n\n  const handleBuy = async () => {\n    const stripe = await stripePromise;\n    const token = await getToken();\n    const res = await fetch(`${_utils_urls__WEBPACK_IMPORTED_MODULE_6__[\"API_URL\"]}/orders`, {\n      method: 'POST',\n      body: JSON.stringify({\n        product\n      }),\n      headers: {\n        'Content-type': 'application/json',\n        'Authorization': `Bearer ${token}`\n      }\n    });\n    const session = await res.json();\n    const result = await stripe.redirectToCheckout({\n      sessionId: session.id\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [!user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_BuyButton_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buy,\n      onClick: redirectToLogin,\n      children: \"Login to Buy\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _styles_BuyButton_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.buy,\n      onClick: handleBuy,\n      children: \"BUY\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1eUJ1dHRvbi5qcz85YmFkIl0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwiU1RSSVBFX1BLIiwiQnV5QnV0dG9uIiwicHJvZHVjdCIsInVzZXIiLCJnZXRUb2tlbiIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInJvdXRlciIsInVzZVJvdXRlciIsInJlZGlyZWN0VG9Mb2dpbiIsInB1c2giLCJoYW5kbGVCdXkiLCJzdHJpcGUiLCJ0b2tlbiIsInJlcyIsImZldGNoIiwiQVBJX1VSTCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInNlc3Npb24iLCJqc29uIiwicmVzdWx0IiwicmVkaXJlY3RUb0NoZWNrb3V0Iiwic2Vzc2lvbklkIiwiaWQiLCJzdHlsZXMiLCJidXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTUEsYUFBYSxHQUFHQyxxRUFBVSxDQUFDQyxxREFBRCxDQUFoQztBQUVlLFNBQVNDLFNBQVQsQ0FBbUI7QUFBQ0M7QUFBRCxDQUFuQixFQUE2QjtBQUV4QyxRQUFNO0FBQUVDLFFBQUY7QUFBUUM7QUFBUixNQUFxQkMsd0RBQVUsQ0FBQ0MsNERBQUQsQ0FBckM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFFBQU1DLGVBQWUsR0FBRyxNQUFNO0FBQzFCRixVQUFNLENBQUNHLElBQVAsQ0FBWSxRQUFaO0FBQ0gsR0FGRDs7QUFJQSxRQUFNQyxTQUFTLEdBQUcsWUFBWTtBQUMxQixVQUFNQyxNQUFNLEdBQUcsTUFBTWQsYUFBckI7QUFDQSxVQUFNZSxLQUFLLEdBQUcsTUFBTVQsUUFBUSxFQUE1QjtBQUVBLFVBQU1VLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsbURBQVEsU0FBWixFQUFxQjtBQUN4Q0MsWUFBTSxFQUFFLE1BRGdDO0FBRXhDQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUVsQjtBQUFGLE9BQWYsQ0FGa0M7QUFHeENtQixhQUFPLEVBQUU7QUFDTCx3QkFBZ0Isa0JBRFg7QUFFTCx5QkFBa0IsVUFBU1IsS0FBTTtBQUY1QjtBQUgrQixLQUFyQixDQUF2QjtBQVFBLFVBQU1TLE9BQU8sR0FBRyxNQUFNUixHQUFHLENBQUNTLElBQUosRUFBdEI7QUFFQSxVQUFNQyxNQUFNLEdBQUcsTUFBTVosTUFBTSxDQUFDYSxrQkFBUCxDQUEwQjtBQUMzQ0MsZUFBUyxFQUFFSixPQUFPLENBQUNLO0FBRHdCLEtBQTFCLENBQXJCO0FBR0gsR0FqQkQ7O0FBbUJBLHNCQUNJO0FBQUEsZUFDSyxDQUFDeEIsSUFBRCxpQkFDRDtBQUNJLGVBQVMsRUFBRXlCLG1FQUFNLENBQUNDLEdBRHRCO0FBRUksYUFBTyxFQUFFcEIsZUFGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLEVBU0tOLElBQUksaUJBQ0w7QUFDSSxlQUFTLEVBQUV5QixtRUFBTSxDQUFDQyxHQUR0QjtBQUVJLGFBQU8sRUFBRWxCLFNBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWSjtBQUFBLGtCQURKO0FBb0JIIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9CdXlCdXR0b24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanMvXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0J1eUJ1dHRvbi5tb2R1bGUuY3NzJ1xuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gXCIuLi9jb250ZXh0L0F1dGhDb250ZXh0XCI7XG5pbXBvcnQgeyBTVFJJUEVfUEssIEFQSV9VUkwgfSBmcm9tIFwiLi4vdXRpbHMvdXJsc1wiO1xuXG5jb25zdCBzdHJpcGVQcm9taXNlID0gbG9hZFN0cmlwZShTVFJJUEVfUEspXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1eUJ1dHRvbih7cHJvZHVjdH0pe1xuXG4gICAgY29uc3QgeyB1c2VyLCBnZXRUb2tlbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgY29uc3QgcmVkaXJlY3RUb0xvZ2luID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVCdXkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2VcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbigpXG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vb3JkZXJzYCx7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcHJvZHVjdCB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtcbiAgICAgICAgICAgIHNlc3Npb25JZDogc2Vzc2lvbi5pZFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHshdXNlciYmXG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV5fVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3JlZGlyZWN0VG9Mb2dpbn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBMb2dpbiB0byBCdXlcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3VzZXIgJiZcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXl9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQnV5fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEJVWVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICB9XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BuyButton.js\n");

/***/ }),

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: AuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! magic-sdk */ \"magic-sdk\");\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(magic_sdk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/urls */ \"./utils/urls.js\");\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/context/AuthContext.js\";\n\n\n\n\nconst AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])();\nlet magic;\nconst AuthProvider = props => {\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  /**\n   * Add email user\n   * @param {string} email\n   */\n\n  const loginUser = async email => {\n    try {\n      await magic.auth.loginWithMagicLink({\n        email\n      });\n      setUser({\n        email\n      });\n      router.push('/');\n    } catch (err) {\n      setUser(null);\n    }\n  };\n  /**\n   *Set user null\n   */\n\n\n  const logoutUser = async () => {\n    try {\n      await magic.user.logout();\n      setUser(null);\n      router.push('/');\n    } catch (err) {}\n  };\n\n  const checkUserLoggedIn = async () => {\n    try {\n      const isLoggedIn = await magic.user.isLoggedIn();\n\n      if (isLoggedIn) {\n        const {\n          email\n        } = await magic.user.getMetadata();\n        setUser({\n          email\n        }); //test consolo log\n\n        const token = await getToken();\n        console.log(\"checkUserLoggedIn token\", token);\n      }\n    } catch (err) {}\n  };\n  /**\n   * retriev the magic issues bearer token\n   * this allow user to make otentkasi request\n   */\n\n\n  const getToken = async () => {\n    try {\n      const token = await magic.user.getIdToken();\n      return token;\n    } catch (err) {}\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_3__[\"Magic\"](_utils_urls__WEBPACK_IMPORTED_MODULE_4__[\"MAGIC_PUBLIC_KEY\"]);\n    checkUserLoggedIn();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      user,\n      loginUser,\n      logoutUser,\n      getToken\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250ZXh0L0F1dGhDb250ZXh0LmpzPzRmNGQiXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwibWFnaWMiLCJBdXRoUHJvdmlkZXIiLCJwcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2dpblVzZXIiLCJlbWFpbCIsImF1dGgiLCJsb2dpbldpdGhNYWdpY0xpbmsiLCJwdXNoIiwiZXJyIiwibG9nb3V0VXNlciIsImxvZ291dCIsImNoZWNrVXNlckxvZ2dlZEluIiwiaXNMb2dnZWRJbiIsImdldE1ldGFkYXRhIiwidG9rZW4iLCJnZXRUb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRJZFRva2VuIiwidXNlRWZmZWN0IiwiTWFnaWMiLCJNQUdJQ19QVUJMSUNfS0VZIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRUEsSUFBSUMsS0FBSjtBQUNPLE1BQU1DLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBRW5DLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsc0RBQVEsQ0FBQyxJQUFELENBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLFFBQU1DLFNBQVMsR0FBRyxNQUFPQyxLQUFQLElBQWdCO0FBQzlCLFFBQUk7QUFDQSxZQUFNVCxLQUFLLENBQUNVLElBQU4sQ0FBV0Msa0JBQVgsQ0FBOEI7QUFBQ0Y7QUFBRCxPQUE5QixDQUFOO0FBQ0FMLGFBQU8sQ0FBQztBQUFDSztBQUFELE9BQUQsQ0FBUDtBQUNBSCxZQUFNLENBQUNNLElBQVAsQ0FBWSxHQUFaO0FBQ0gsS0FKRCxDQUtBLE9BQU9DLEdBQVAsRUFBVztBQUNQVCxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0g7QUFDSixHQVREO0FBV0E7QUFDSjtBQUNBOzs7QUFDSSxRQUFNVSxVQUFVLEdBQUcsWUFBUztBQUN4QixRQUFJO0FBQ0EsWUFBTWQsS0FBSyxDQUFDRyxJQUFOLENBQVdZLE1BQVgsRUFBTjtBQUNBWCxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FFLFlBQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7QUFDSCxLQUpELENBS0EsT0FBT0MsR0FBUCxFQUFXLENBRVY7QUFDSixHQVREOztBQVdBLFFBQU1HLGlCQUFpQixHQUFHLFlBQVc7QUFDakMsUUFBSTtBQUNBLFlBQU1DLFVBQVUsR0FBRyxNQUFNakIsS0FBSyxDQUFDRyxJQUFOLENBQVdjLFVBQVgsRUFBekI7O0FBQ0EsVUFBR0EsVUFBSCxFQUFjO0FBQ1YsY0FBTTtBQUFDUjtBQUFELFlBQVUsTUFBTVQsS0FBSyxDQUFDRyxJQUFOLENBQVdlLFdBQVgsRUFBdEI7QUFDQWQsZUFBTyxDQUFDO0FBQUNLO0FBQUQsU0FBRCxDQUFQLENBRlUsQ0FJVjs7QUFDQSxjQUFNVSxLQUFLLEdBQUcsTUFBT0MsUUFBUSxFQUE3QjtBQUNBQyxlQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0gsS0FBdkM7QUFDSDtBQUNKLEtBVkQsQ0FXQSxPQUFPTixHQUFQLEVBQVcsQ0FFVjtBQUNKLEdBZkQ7QUFpQkE7QUFDSjtBQUNBO0FBQ0E7OztBQUVJLFFBQU1PLFFBQVEsR0FBRyxZQUFZO0FBQ3pCLFFBQUk7QUFDQSxZQUFNRCxLQUFLLEdBQUcsTUFBTW5CLEtBQUssQ0FBQ0csSUFBTixDQUFXb0IsVUFBWCxFQUFwQjtBQUNBLGFBQU9KLEtBQVA7QUFDSCxLQUhELENBSUEsT0FBT04sR0FBUCxFQUFXLENBRVY7QUFDSixHQVJEOztBQVVBVyx5REFBUyxDQUFDLE1BQU07QUFDWnhCLFNBQUssR0FBRyxJQUFJeUIsK0NBQUosQ0FBVUMsNERBQVYsQ0FBUjtBQUNBVixxQkFBaUI7QUFDaEIsR0FISSxFQUdGLEVBSEUsQ0FBVDtBQU1BLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFYixVQUFGO0FBQVFLLGVBQVI7QUFBbUJNLGdCQUFuQjtBQUErQk07QUFBL0IsS0FBN0I7QUFBQSxjQUNLbEIsS0FBSyxDQUFDeUI7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFNSCxDQTlFTTtBQWdGUTdCLDBFQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge01hZ2ljfSBmcm9tICdtYWdpYy1zZGsnXG5pbXBvcnQge01BR0lDX1BVQkxJQ19LRVl9IGZyb20gXCIuLi91dGlscy91cmxzXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmxldCBtYWdpY1xuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYWlsIHVzZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxcbiAgICAgKi9cbiAgICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoZW1haWwpID0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbWFnaWMuYXV0aC5sb2dpbldpdGhNYWdpY0xpbmsoe2VtYWlsfSlcbiAgICAgICAgICAgIHNldFVzZXIoe2VtYWlsfSlcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKXtcbiAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0IHVzZXIgbnVsbFxuICAgICAqL1xuICAgIGNvbnN0IGxvZ291dFVzZXIgPSBhc3luYygpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpXG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycil7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gYXdhaXQgbWFnaWMudXNlci5pc0xvZ2dlZEluKClcbiAgICAgICAgICAgIGlmKGlzTG9nZ2VkSW4pe1xuICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbH0gPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHtlbWFpbH0pXG5cbiAgICAgICAgICAgICAgICAvL3Rlc3QgY29uc29sbyBsb2dcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0ICBnZXRUb2tlbigpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VzZXJMb2dnZWRJbiB0b2tlblwiLCB0b2tlbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKXtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0cmlldiB0aGUgbWFnaWMgaXNzdWVzIGJlYXJlciB0b2tlblxuICAgICAqIHRoaXMgYWxsb3cgdXNlciB0byBtYWtlIG90ZW50a2FzaSByZXF1ZXN0XG4gICAgICovXG5cbiAgICBjb25zdCBnZXRUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgbWFnaWMudXNlci5nZXRJZFRva2VuKClcbiAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpe1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBtYWdpYyA9IG5ldyBNYWdpYyhNQUdJQ19QVUJMSUNfS0VZKVxuICAgICAgICBjaGVja1VzZXJMb2dnZWRJbigpXG4gICAgICAgIH0sIFtdXG4gICAgKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW5Vc2VyLCBsb2dvdXRVc2VyLCBnZXRUb2tlbn19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ }),

/***/ "./pages/products/[slug].js":
/*!**********************************!*\
  !*** ./pages/products/[slug].js ***!
  \**********************************/
/*! exports provided: getStaticProps, getStaticPaths, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/urls */ \"./utils/urls.js\");\n/* harmony import */ var _utils_format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/format */ \"./utils/format.js\");\n/* harmony import */ var _components_BuyButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/BuyButton */ \"./components/BuyButton.js\");\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/pages/products/[slug].js\";\n\n\n\n\n\nconst Product = ({\n  product\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [product.meta_title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: product.meta_title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 21\n      }, undefined), product.meta_description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: product.meta_description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 21\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: Object(_utils_urls__WEBPACK_IMPORTED_MODULE_2__[\"fromImageToUrl\"])(product.image)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: product.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"IDR \", Object(_utils_format__WEBPACK_IMPORTED_MODULE_3__[\"twoDecimals\"])(product.price), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_BuyButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        product: product\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 49\n      }, undefined), \"  \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: product.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, undefined);\n};\n\nasync function getStaticProps({\n  params: {\n    slug\n  }\n}) {\n  const product_res = await fetch(`${_utils_urls__WEBPACK_IMPORTED_MODULE_2__[\"API_URL\"]}/binasejahteras/?slug=${slug}`);\n  const found = await product_res.json();\n  return {\n    props: {\n      product: found[0] //Karena respon filter dari API nya berupa array\n\n    }\n  };\n}\nasync function getStaticPaths() {\n  //Retrieve all the posible paths\n  const products_res = await fetch(`${_utils_urls__WEBPACK_IMPORTED_MODULE_2__[\"API_URL\"]}/binasejahteras/`);\n  const products = await products_res.json(); //Return ke NextJS context\n\n  return {\n    paths: products.map(product => ({\n      params: {\n        slug: String(product.slug)\n      }\n    })),\n    fallback: false //Kasih tau nextJS untuk tunjukkan 404 jika params tidak cocok\n\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0cy9bc2x1Z10uanM/Yjk0ZiJdLCJuYW1lcyI6WyJQcm9kdWN0IiwicHJvZHVjdCIsIm1ldGFfdGl0bGUiLCJtZXRhX2Rlc2NyaXB0aW9uIiwibmFtZSIsImZyb21JbWFnZVRvVXJsIiwiaW1hZ2UiLCJ0d29EZWNpbWFscyIsInByaWNlIiwiY29udGVudCIsImdldFN0YXRpY1Byb3BzIiwicGFyYW1zIiwic2x1ZyIsInByb2R1Y3RfcmVzIiwiZmV0Y2giLCJBUElfVVJMIiwiZm91bmQiLCJqc29uIiwicHJvcHMiLCJnZXRTdGF0aWNQYXRocyIsInByb2R1Y3RzX3JlcyIsInByb2R1Y3RzIiwicGF0aHMiLCJtYXAiLCJTdHJpbmciLCJmYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWU7QUFDM0Isc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLGlCQUVRQSxPQUFPLENBQUNDLFVBQVIsaUJBQ0E7QUFBQSxrQkFBUUQsT0FBTyxDQUFDQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhSLEVBTVFELE9BQU8sQ0FBQ0UsZ0JBQVIsaUJBQ0E7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUVGLE9BQU8sQ0FBQ0U7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFXSTtBQUFBLGdCQUFLRixPQUFPLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFYSixlQVlJO0FBQUssU0FBRyxFQUFFQyxrRUFBYyxDQUFDSixPQUFPLENBQUNLLEtBQVQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaSixlQWFJO0FBQUEsZ0JBQUtMLE9BQU8sQ0FBQ0c7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJKLGVBY0k7QUFBQSx5QkFBUUcsaUVBQVcsQ0FBQ04sT0FBTyxDQUFDTyxLQUFULENBQW5CLG9CQUFvQyxxRUFBQyw2REFBRDtBQUFXLGVBQU8sRUFBRVA7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKLGVBZ0JJO0FBQUEsZ0JBQ0tBLE9BQU8sQ0FBQ1E7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXNCSCxDQXZCRDs7QUF5Qk8sZUFBZUMsY0FBZixDQUE4QjtBQUFDQyxRQUFNLEVBQUM7QUFBQ0M7QUFBRDtBQUFSLENBQTlCLEVBQThDO0FBQ2pELFFBQU1DLFdBQVcsR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsbURBQVEseUJBQXdCSCxJQUFLLEVBQXpDLENBQS9CO0FBQ0EsUUFBTUksS0FBSyxHQUFHLE1BQU1ILFdBQVcsQ0FBQ0ksSUFBWixFQUFwQjtBQUVBLFNBQU07QUFDRkMsU0FBSyxFQUFDO0FBQ0ZqQixhQUFPLEVBQUVlLEtBQUssQ0FBQyxDQUFELENBRFosQ0FDZ0I7O0FBRGhCO0FBREosR0FBTjtBQUtIO0FBRU0sZUFBZUcsY0FBZixHQUErQjtBQUNsQztBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNTixLQUFLLENBQUUsR0FBRUMsbURBQVEsa0JBQVosQ0FBaEM7QUFDQSxRQUFNTSxRQUFRLEdBQUcsTUFBTUQsWUFBWSxDQUFDSCxJQUFiLEVBQXZCLENBSGtDLENBS2xDOztBQUNBLFNBQU07QUFDRkssU0FBSyxFQUFFRCxRQUFRLENBQUNFLEdBQVQsQ0FBYXRCLE9BQU8sS0FBSTtBQUMzQlUsWUFBTSxFQUFFO0FBQUNDLFlBQUksRUFBRVksTUFBTSxDQUFDdkIsT0FBTyxDQUFDVyxJQUFUO0FBQWI7QUFEbUIsS0FBSixDQUFwQixDQURMO0FBSUZhLFlBQVEsRUFBRSxLQUpSLENBSWM7O0FBSmQsR0FBTjtBQU1IO0FBQ2N6QixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL1tzbHVnXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuaW1wb3J0IHtmcm9tSW1hZ2VUb1VybCwgQVBJX1VSTH0gZnJvbSBcIi4uLy4uL3V0aWxzL3VybHNcIjtcbmltcG9ydCB7dHdvRGVjaW1hbHN9IGZyb20gXCIuLi8uLi91dGlscy9mb3JtYXRcIjtcbmltcG9ydCBCdXlCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV5QnV0dG9uXCI7XG5cbmNvbnN0IFByb2R1Y3QgPSAoe3Byb2R1Y3R9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5tZXRhX3RpdGxlICYmXG4gICAgICAgICAgICAgICAgICAgIDx0aXRsZT57cHJvZHVjdC5tZXRhX3RpdGxlfTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdC5tZXRhX2Rlc2NyaXB0aW9uICYmXG4gICAgICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb2R1Y3QubWV0YV9kZXNjcmlwdGlvbn0vPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZnJvbUltYWdlVG9VcmwocHJvZHVjdC5pbWFnZSl9Lz5cbiAgICAgICAgICAgIDxoMz57cHJvZHVjdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICA8cD5JRFIge3R3b0RlY2ltYWxzKHByb2R1Y3QucHJpY2UpfSA8QnV5QnV0dG9uIHByb2R1Y3Q9e3Byb2R1Y3R9Lz4gIDwvcD5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3QuY29udGVudH1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtczp7c2x1Z319KXtcbiAgICBjb25zdCBwcm9kdWN0X3JlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2JpbmFzZWphaHRlcmFzLz9zbHVnPSR7c2x1Z31gKVxuICAgIGNvbnN0IGZvdW5kID0gYXdhaXQgcHJvZHVjdF9yZXMuanNvbigpXG5cbiAgICByZXR1cm57XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIHByb2R1Y3Q6IGZvdW5kWzBdIC8vS2FyZW5hIHJlc3BvbiBmaWx0ZXIgZGFyaSBBUEkgbnlhIGJlcnVwYSBhcnJheVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKXtcbiAgICAvL1JldHJpZXZlIGFsbCB0aGUgcG9zaWJsZSBwYXRoc1xuICAgIGNvbnN0IHByb2R1Y3RzX3JlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2JpbmFzZWphaHRlcmFzL2ApXG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBwcm9kdWN0c19yZXMuanNvbigpXG5cbiAgICAvL1JldHVybiBrZSBOZXh0SlMgY29udGV4dFxuICAgIHJldHVybntcbiAgICAgICAgcGF0aHM6IHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+KHtcbiAgICAgICAgICAgIHBhcmFtczoge3NsdWc6IFN0cmluZyhwcm9kdWN0LnNsdWcpfVxuICAgICAgICB9KSksXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSAvL0thc2loIHRhdSBuZXh0SlMgdW50dWsgdHVuanVra2FuIDQwNCBqaWthIHBhcmFtcyB0aWRhayBjb2Nva1xuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/products/[slug].js\n");

/***/ }),

/***/ "./styles/BuyButton.module.css":
/*!*************************************!*\
  !*** ./styles/BuyButton.module.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"buy\": \"BuyButton_buy__2kfVO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvQnV5QnV0dG9uLm1vZHVsZS5jc3M/ODk2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy9CdXlCdXR0b24ubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1eVwiOiBcIkJ1eUJ1dHRvbl9idXlfXzJrZlZPXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/BuyButton.module.css\n");

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
/*! exports provided: API_URL, MAGIC_PUBLIC_KEY, STRIPE_PK, fromImageToUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"API_URL\", function() { return API_URL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MAGIC_PUBLIC_KEY\", function() { return MAGIC_PUBLIC_KEY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"STRIPE_PK\", function() { return STRIPE_PK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fromImageToUrl\", function() { return fromImageToUrl; });\nconst API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337';\nconst MAGIC_PUBLIC_KEY = process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || 'pk_test_3878CF7501A0EF1B';\nconst STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK || 'pk_test_51IN9QUKYmL2aqhTu5WZzf91nffslgTnz2fLZLZw1miirb5BG4HBr9YxjwlGeoXCO6rcdEqidkplJauDvr3ipcio000ufZPtJBQ';\n/**\n * Given image return the url\n * Works for local and deployed strapis\n * @param {any} image\n */\n\nconst fromImageToUrl = image => {\n  if (!image) {\n    return \"/vercel.svg\";\n  }\n\n  if (image.url.indexOf(\"/\") === 0) {\n    return `${API_URL}${image.url}`;\n  }\n\n  return image.url;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy91cmxzLmpzP2EyY2YiXSwibmFtZXMiOlsiQVBJX1VSTCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiTUFHSUNfUFVCTElDX0tFWSIsIk5FWFRfUFVCTElDX01BR0lDX1BVQkxJQ19LRVkiLCJTVFJJUEVfUEsiLCJORVhUX1BVQkxJQ19TVFJJUEVfUEsiLCJmcm9tSW1hZ2VUb1VybCIsImltYWdlIiwidXJsIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLG1CQUFaLElBQW1DLHVCQUFuRDtBQUVBLE1BQU1DLGdCQUFnQixHQUFHSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsNEJBQVosSUFBNEMsMEJBQXJFO0FBRUEsTUFBTUMsU0FBUyxHQUFHTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUsscUJBQVosSUFBcUMsNkdBQXZEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxNQUFNQyxjQUFjLEdBQUdDLEtBQUQsSUFBVztBQUNwQyxNQUFHLENBQUNBLEtBQUosRUFBVTtBQUNOLFdBQU8sYUFBUDtBQUNIOztBQUVELE1BQUlBLEtBQUssQ0FBQ0MsR0FBTixDQUFVQyxPQUFWLENBQWtCLEdBQWxCLE1BQTJCLENBQS9CLEVBQWlDO0FBQzdCLFdBQVEsR0FBRVgsT0FBUSxHQUFFUyxLQUFLLENBQUNDLEdBQUksRUFBOUI7QUFDSDs7QUFFRCxTQUFPRCxLQUFLLENBQUNDLEdBQWI7QUFDSCxDQVZNIiwiZmlsZSI6Ii4vdXRpbHMvdXJscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUElfVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTCB8fCAnaHR0cDovL2xvY2FsaG9zdDoxMzM3J1xuXG5leHBvcnQgY29uc3QgTUFHSUNfUFVCTElDX0tFWSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BR0lDX1BVQkxJQ19LRVkgfHwgJ3BrX3Rlc3RfMzg3OENGNzUwMUEwRUYxQidcblxuZXhwb3J0IGNvbnN0IFNUUklQRV9QSyA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QSyB8fCAncGtfdGVzdF81MUlOOVFVS1ltTDJhcWhUdTVXWnpmOTFuZmZzbGdUbnoyZkxaTFp3MW1paXJiNUJHNEhCcjlZeGp3bEdlb1hDTzZyY2RFcWlka3BsSmF1RHZyM2lwY2lvMDAwdWZaUHRKQlEnXG4vKipcbiAqIEdpdmVuIGltYWdlIHJldHVybiB0aGUgdXJsXG4gKiBXb3JrcyBmb3IgbG9jYWwgYW5kIGRlcGxveWVkIHN0cmFwaXNcbiAqIEBwYXJhbSB7YW55fSBpbWFnZVxuICovXG5cbmV4cG9ydCBjb25zdCBmcm9tSW1hZ2VUb1VybD0gKGltYWdlKSA9PiB7XG4gICAgaWYoIWltYWdlKXtcbiAgICAgICAgcmV0dXJuIFwiL3ZlcmNlbC5zdmdcIlxuICAgIH1cblxuICAgIGlmIChpbWFnZS51cmwuaW5kZXhPZihcIi9cIikgPT09IDApe1xuICAgICAgICByZXR1cm4gYCR7QVBJX1VSTH0ke2ltYWdlLnVybH1gXG4gICAgfVxuXG4gICAgcmV0dXJuIGltYWdlLnVybFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/urls.js\n");

/***/ }),

/***/ "@stripe/stripe-js/":
/*!*************************************!*\
  !*** external "@stripe/stripe-js/" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@stripe/stripe-js/\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAc3RyaXBlL3N0cmlwZS1qcy9cIj9iMDIxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBzdHJpcGUvc3RyaXBlLWpzLy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzdHJpcGUvc3RyaXBlLWpzL1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@stripe/stripe-js/\n");

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