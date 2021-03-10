webpackHotUpdate_N_E("pages/login",{

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: AuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var magic_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! magic-sdk */ \"./node_modules/magic-sdk/dist/module/index.js\");\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/urls */ \"./utils/urls.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/context/AuthContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nvar magic;\nvar AuthProvider = function AuthProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  /**\n   * Add email user\n   * @param {string} email\n   */\n\n  var loginUser = /*#__PURE__*/function () {\n    var _ref = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(email) {\n      return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return magic.auth.loginWithMagicLink({\n                email: email\n              });\n\n            case 3:\n              setUser({\n                email: email\n              });\n              router.push('/');\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              setUser(null);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function loginUser(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  /**\n   *Set user null\n   */\n\n\n  var logoutUser = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.prev = 0;\n              _context2.next = 3;\n              return magic.user.logout();\n\n            case 3:\n              setUser(null);\n              router.push('/');\n              _context2.next = 9;\n              break;\n\n            case 7:\n              _context2.prev = 7;\n              _context2.t0 = _context2[\"catch\"](0);\n\n            case 9:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2, null, [[0, 7]]);\n    }));\n\n    return function logoutUser() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var checkUserLoggedIn = /*#__PURE__*/function () {\n    var _ref3 = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {\n      var isLoggedIn, _yield$magic$user$get, email, token;\n\n      return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              _context3.prev = 0;\n              _context3.next = 3;\n              return magic.user.isLoggedIn();\n\n            case 3:\n              isLoggedIn = _context3.sent;\n\n              if (!isLoggedIn) {\n                _context3.next = 14;\n                break;\n              }\n\n              _context3.next = 7;\n              return magic.user.getMetadata();\n\n            case 7:\n              _yield$magic$user$get = _context3.sent;\n              email = _yield$magic$user$get.email;\n              setUser({\n                email: email\n              }); //test consolo log\n\n              _context3.next = 12;\n              return getToken();\n\n            case 12:\n              token = _context3.sent;\n              console.log(\"checkUserLoggedIn token\", token);\n\n            case 14:\n              _context3.next = 18;\n              break;\n\n            case 16:\n              _context3.prev = 16;\n              _context3.t0 = _context3[\"catch\"](0);\n\n            case 18:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3, null, [[0, 16]]);\n    }));\n\n    return function checkUserLoggedIn() {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n  /**\n   * retriev the magic issues bearer token\n   * this allow user to make otentkasi request\n   */\n\n\n  var getToken = /*#__PURE__*/function () {\n    var _ref4 = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {\n      var token;\n      return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              _context4.prev = 0;\n              _context4.next = 3;\n              return magic.user.getIdToken();\n\n            case 3:\n              token = _context4.sent;\n              return _context4.abrupt(\"return\", token);\n\n            case 7:\n              _context4.prev = 7;\n              _context4.t0 = _context4[\"catch\"](0);\n\n            case 9:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4, null, [[0, 7]]);\n    }));\n\n    return function getToken() {\n      return _ref4.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    magic = new magic_sdk__WEBPACK_IMPORTED_MODULE_5__[\"Magic\"](_utils_urls__WEBPACK_IMPORTED_MODULE_6__[\"MAGIC_PUBLIC_KEY\"]);\n    checkUserLoggedIn();\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      user: user,\n      loginUser: loginUser,\n      logoutUser: logoutUser,\n      getToken: getToken\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AuthProvider, \"ocZTZ8m72GkfgAfkTHk7sW+OJyw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = AuthProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz80ZjRkIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm1hZ2ljIiwiQXV0aFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW5Vc2VyIiwiZW1haWwiLCJhdXRoIiwibG9naW5XaXRoTWFnaWNMaW5rIiwicHVzaCIsImxvZ291dFVzZXIiLCJsb2dvdXQiLCJjaGVja1VzZXJMb2dnZWRJbiIsImlzTG9nZ2VkSW4iLCJnZXRNZXRhZGF0YSIsImdldFRva2VuIiwidG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0SWRUb2tlbiIsInVzZUVmZmVjdCIsIk1hZ2ljIiwiTUFHSUNfUFVCTElDX0tFWSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLEVBQWpDO0FBRUEsSUFBSUMsS0FBSjtBQUNPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDLElBQUQsQ0FGRztBQUFBLE1BRTVCQyxJQUY0QjtBQUFBLE1BRXRCQyxPQUZzQjs7QUFHbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLE1BQU1DLFNBQVM7QUFBQSxvVUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVKVCxLQUFLLENBQUNVLElBQU4sQ0FBV0Msa0JBQVgsQ0FBOEI7QUFBQ0YscUJBQUssRUFBTEE7QUFBRCxlQUE5QixDQUZJOztBQUFBO0FBR1ZKLHFCQUFPLENBQUM7QUFBQ0kscUJBQUssRUFBTEE7QUFBRCxlQUFELENBQVA7QUFDQUgsb0JBQU0sQ0FBQ00sSUFBUCxDQUFZLEdBQVo7QUFKVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU9WUCxxQkFBTyxDQUFDLElBQUQsQ0FBUDs7QUFQVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFURyxTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7QUFXQTtBQUNKO0FBQ0E7OztBQUNJLE1BQU1LLFVBQVU7QUFBQSxxVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVMYixLQUFLLENBQUNJLElBQU4sQ0FBV1UsTUFBWCxFQUZLOztBQUFBO0FBR1hULHFCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FDLG9CQUFNLENBQUNNLElBQVAsQ0FBWSxHQUFaO0FBSlc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkMsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFXQSxNQUFNRSxpQkFBaUI7QUFBQSxxVUFBRztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVPZixLQUFLLENBQUNJLElBQU4sQ0FBV1ksVUFBWCxFQUZQOztBQUFBO0FBRVpBLHdCQUZZOztBQUFBLG1CQUdmQSxVQUhlO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBSVFoQixLQUFLLENBQUNJLElBQU4sQ0FBV2EsV0FBWCxFQUpSOztBQUFBO0FBQUE7QUFJUFIsbUJBSk8seUJBSVBBLEtBSk87QUFLZEoscUJBQU8sQ0FBQztBQUFDSSxxQkFBSyxFQUFMQTtBQUFELGVBQUQsQ0FBUCxDQUxjLENBT2Q7O0FBUGM7QUFBQSxxQkFRT1MsUUFBUSxFQVJmOztBQUFBO0FBUVJDLG1CQVJRO0FBU2RDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWixFQUF1Q0YsS0FBdkM7O0FBVGM7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFqQkosaUJBQWlCO0FBQUE7QUFBQTtBQUFBLEtBQXZCO0FBaUJBO0FBQ0o7QUFDQTtBQUNBOzs7QUFFSSxNQUFNRyxRQUFRO0FBQUEscVVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVXbEIsS0FBSyxDQUFDSSxJQUFOLENBQVdrQixVQUFYLEVBRlg7O0FBQUE7QUFFSEgsbUJBRkc7QUFBQSxnREFHRkEsS0FIRTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkQsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQVVBSyx5REFBUyxDQUFDLFlBQU07QUFDWnZCLFNBQUssR0FBRyxJQUFJd0IsK0NBQUosQ0FBVUMsNERBQVYsQ0FBUjtBQUNBVixxQkFBaUI7QUFDaEIsR0FISSxFQUdGLEVBSEUsQ0FBVDtBQU1BLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFWCxVQUFJLEVBQUpBLElBQUY7QUFBUUksZUFBUyxFQUFUQSxTQUFSO0FBQW1CSyxnQkFBVSxFQUFWQSxVQUFuQjtBQUErQkssY0FBUSxFQUFSQTtBQUEvQixLQUE3QjtBQUFBLGNBQ0toQixLQUFLLENBQUN3QjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQU1ILENBOUVNOztHQUFNekIsWTtVQUdNTSxxRDs7O0tBSE5OLFk7QUFnRkVILDBFQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQge01hZ2ljfSBmcm9tICdtYWdpYy1zZGsnXG5pbXBvcnQge01BR0lDX1BVQkxJQ19LRVl9IGZyb20gXCIuLi91dGlscy91cmxzXCI7XG5cbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXG5cbmxldCBtYWdpY1xuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9IChwcm9wcykgPT4ge1xuXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gICAgLyoqXG4gICAgICogQWRkIGVtYWlsIHVzZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZW1haWxcbiAgICAgKi9cbiAgICBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoZW1haWwpID0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbWFnaWMuYXV0aC5sb2dpbldpdGhNYWdpY0xpbmsoe2VtYWlsfSlcbiAgICAgICAgICAgIHNldFVzZXIoe2VtYWlsfSlcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJylcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKXtcbiAgICAgICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0IHVzZXIgbnVsbFxuICAgICAqL1xuICAgIGNvbnN0IGxvZ291dFVzZXIgPSBhc3luYygpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBtYWdpYy51c2VyLmxvZ291dCgpXG4gICAgICAgICAgICBzZXRVc2VyKG51bGwpXG4gICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpXG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycil7XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrVXNlckxvZ2dlZEluID0gYXN5bmMgKCkgPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpc0xvZ2dlZEluID0gYXdhaXQgbWFnaWMudXNlci5pc0xvZ2dlZEluKClcbiAgICAgICAgICAgIGlmKGlzTG9nZ2VkSW4pe1xuICAgICAgICAgICAgICAgIGNvbnN0IHtlbWFpbH0gPSBhd2FpdCBtYWdpYy51c2VyLmdldE1ldGFkYXRhKClcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHtlbWFpbH0pXG5cbiAgICAgICAgICAgICAgICAvL3Rlc3QgY29uc29sbyBsb2dcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0ICBnZXRUb2tlbigpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1VzZXJMb2dnZWRJbiB0b2tlblwiLCB0b2tlbilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKXtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcmV0cmlldiB0aGUgbWFnaWMgaXNzdWVzIGJlYXJlciB0b2tlblxuICAgICAqIHRoaXMgYWxsb3cgdXNlciB0byBtYWtlIG90ZW50a2FzaSByZXF1ZXN0XG4gICAgICovXG5cbiAgICBjb25zdCBnZXRUb2tlbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgbWFnaWMudXNlci5nZXRJZFRva2VuKClcbiAgICAgICAgICAgIHJldHVybiB0b2tlblxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpe1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBtYWdpYyA9IG5ldyBNYWdpYyhNQUdJQ19QVUJMSUNfS0VZKVxuICAgICAgICBjaGVja1VzZXJMb2dnZWRJbigpXG4gICAgICAgIH0sIFtdXG4gICAgKVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgbG9naW5Vc2VyLCBsb2dvdXRVc2VyLCBnZXRUb2tlbn19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ })

})