webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/AuthContext.js":
/*!********************************!*\
  !*** ./context/AuthContext.js ***!
  \********************************/
/*! exports provided: AuthProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AuthProvider\", function() { return AuthProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/context/AuthContext.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nvar AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])();\nvar AuthProvider = function AuthProvider(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  /**\n   * Add email user\n   * @param {string} email\n   */\n\n  var loginUser = /*#__PURE__*/function () {\n    var _ref = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(email) {\n      return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setUser({\n                email: email\n              });\n              router.push('/');\n\n            case 2:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function loginUser(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n  /**\n   *Set user null\n   */\n\n\n  var logoutUser = /*#__PURE__*/function () {\n    var _ref2 = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {\n      return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              setUser(null);\n              router.push('/');\n\n            case 2:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function logoutUser() {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(AuthContext.Provider, {\n    value: {\n      user: user,\n      loginUser: loginUser,\n      logoutUser: logoutUser\n    },\n    children: props.children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 29,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(AuthProvider, \"zefM1Knqb/9oUSAMqz/jv6nTK4c=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = AuthProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC5qcz80ZjRkIl0sIm5hbWVzIjpbIkF1dGhDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkF1dGhQcm92aWRlciIsInByb3BzIiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsImxvZ2luVXNlciIsImVtYWlsIiwicHVzaCIsImxvZ291dFVzZXIiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxFQUFqQztBQUVPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUVYQyxzREFBUSxDQUFDLElBQUQsQ0FGRztBQUFBLE1BRTVCQyxJQUY0QjtBQUFBLE1BRXRCQyxPQUZzQjs7QUFHbkMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBO0FBQ0o7QUFDQTtBQUNBOztBQUNJLE1BQU1DLFNBQVM7QUFBQSxvVUFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RKLHFCQUFPLENBQUM7QUFBQ0kscUJBQUssRUFBTEE7QUFBRCxlQUFELENBQVA7QUFDQUgsb0JBQU0sQ0FBQ0ksSUFBUCxDQUFZLEdBQVo7O0FBRmM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVEYsU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmO0FBS0E7QUFDSjtBQUNBOzs7QUFDSSxNQUFNRyxVQUFVO0FBQUEscVVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNmTixxQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBQyxvQkFBTSxDQUFDSSxJQUFQLENBQVksR0FBWjs7QUFGZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWQyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUtBLHNCQUNJLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUFFUCxVQUFJLEVBQUpBLElBQUY7QUFBUUksZUFBUyxFQUFUQSxTQUFSO0FBQW1CRyxnQkFBVSxFQUFWQTtBQUFuQixLQUE3QjtBQUFBLGNBQ0tULEtBQUssQ0FBQ1U7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFNSCxDQTVCTTs7R0FBTVgsWTtVQUdNTSxxRDs7O0tBSE5OLFk7QUE4QkVGLDBFQUFmIiwiZmlsZSI6Ii4vY29udGV4dC9BdXRoQ29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxuXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XG5cbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgICAvKipcbiAgICAgKiBBZGQgZW1haWwgdXNlclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbWFpbFxuICAgICAqL1xuICAgIGNvbnN0IGxvZ2luVXNlciA9IGFzeW5jIChlbWFpbCkgPT57XG4gICAgICAgIHNldFVzZXIoe2VtYWlsfSlcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqU2V0IHVzZXIgbnVsbFxuICAgICAqL1xuICAgIGNvbnN0IGxvZ291dFVzZXIgPSBhc3luYygpPT57XG4gICAgICAgIHNldFVzZXIobnVsbClcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvZ2luVXNlciwgbG9nb3V0VXNlcn19PlxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/AuthContext.js\n");

/***/ })

})