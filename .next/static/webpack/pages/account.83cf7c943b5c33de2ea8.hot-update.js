webpackHotUpdate_N_E("pages/account",{

/***/ "./pages/account.js":
/*!**************************!*\
  !*** ./pages/account.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Account; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/AuthContext */ \"./context/AuthContext.js\");\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/urls */ \"./utils/urls.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/pages/account.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\n\nvar useOrders = function useOrders(user, getToken) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      orders = _useState[0],\n      setOrders = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var fetchOrders = /*#__PURE__*/function () {\n      var _ref = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var token, order_res, data;\n        return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                if (!user) {\n                  _context.next = 17;\n                  break;\n                }\n\n                _context.prev = 1;\n                _context.next = 4;\n                return getToken();\n\n              case 4:\n                token = _context.sent;\n                _context.next = 7;\n                return fetch(\"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_7__[\"API_URL\"], \"/orders\"), {\n                  headers: {\n                    'Authorization': \"Bearer \".concat(token)\n                  }\n                });\n\n              case 7:\n                order_res = _context.sent;\n                _context.next = 10;\n                return order_res.json();\n\n              case 10:\n                data = _context.sent;\n                setOrders(data);\n                _context.next = 17;\n                break;\n\n              case 14:\n                _context.prev = 14;\n                _context.t0 = _context[\"catch\"](1);\n                setOrders([]);\n\n              case 17:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 14]]);\n      }));\n\n      return function fetchOrders() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchOrders();\n  }, [user]);\n  return orders;\n};\n\n_s(useOrders, \"FvMuVccH6DXI6fqfhJiN/VsjZaw=\");\n\nfunction Account() {\n  _s2();\n\n  var _this = this;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useContext\"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__[\"default\"]),\n      user = _useContext.user,\n      logoutUser = _useContext.logoutUser,\n      getToken = _useContext.getToken;\n\n  var orders = useOrders(user, getToken);\n  console.log(\"Account.render orders\", orders);\n\n  if (!user) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Please Login or Register First\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        href: \"/\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"Go back\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 32\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Account Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"halaman account, melihat order yang kamu buat dan logout\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Account Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Your Orders\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, this), orders.map(function (order) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [order.bs - product.name, \" $\", order.total, \" \", order.status]\n      }, order.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 17\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Logged in as: \", user.email]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: \"#\",\n      onClick: logoutUser,\n      children: \"Logout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 9\n  }, this);\n}\n\n_s2(Account, \"ryZ9lE+m9lYeSlkL1xE/YoeuAvw=\", false, function () {\n  return [useOrders];\n});\n\n_c = Account;\n\nvar _c;\n\n$RefreshReg$(_c, \"Account\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWNjb3VudC5qcz83MWQ2Il0sIm5hbWVzIjpbInVzZU9yZGVycyIsInVzZXIiLCJnZXRUb2tlbiIsInVzZVN0YXRlIiwib3JkZXJzIiwic2V0T3JkZXJzIiwidXNlRWZmZWN0IiwiZmV0Y2hPcmRlcnMiLCJ0b2tlbiIsImZldGNoIiwiQVBJX1VSTCIsImhlYWRlcnMiLCJvcmRlcl9yZXMiLCJqc29uIiwiZGF0YSIsIkFjY291bnQiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJsb2dvdXRVc2VyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm9yZGVyIiwiYnMiLCJwcm9kdWN0IiwibmFtZSIsInRvdGFsIiwic3RhdHVzIiwiaWQiLCJlbWFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUFBOztBQUFBLGtCQUNOQyxzREFBUSxDQUFDLEVBQUQsQ0FERjtBQUFBLE1BQzNCQyxNQUQyQjtBQUFBLE1BQ25CQyxTQURtQjs7QUFHbENDLHlEQUFTLENBQUMsWUFBSztBQUNYLFFBQU1DLFdBQVc7QUFBQSxzVUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDYk4sSUFEYTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsdUJBR1lDLFFBQVEsRUFIcEI7O0FBQUE7QUFHRk0scUJBSEU7QUFBQTtBQUFBLHVCQUlnQkMsS0FBSyxXQUFJQyxtREFBSixjQUFxQjtBQUM5Q0MseUJBQU8sRUFBRTtBQUNMLHNEQUEyQkgsS0FBM0I7QUFESztBQURxQyxpQkFBckIsQ0FKckI7O0FBQUE7QUFJRkkseUJBSkU7QUFBQTtBQUFBLHVCQVNXQSxTQUFTLENBQUNDLElBQVYsRUFUWDs7QUFBQTtBQVNGQyxvQkFURTtBQVVSVCx5QkFBUyxDQUFDUyxJQUFELENBQVQ7QUFWUTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWFSVCx5QkFBUyxDQUFDLEVBQUQsQ0FBVDs7QUFiUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFYRSxXQUFXO0FBQUE7QUFBQTtBQUFBLE9BQWpCOztBQWlCQUEsZUFBVztBQUNWLEdBbkJJLEVBbUJILENBQUNOLElBQUQsQ0FuQkcsQ0FBVDtBQW9CQSxTQUFPRyxNQUFQO0FBQ0gsQ0F4QkQ7O0dBQU1KLFM7O0FBMEJTLFNBQVNlLE9BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxvQkFFUUMsd0RBQVUsQ0FBQ0MsNERBQUQsQ0FGbEI7QUFBQSxNQUV0QmhCLElBRnNCLGVBRXRCQSxJQUZzQjtBQUFBLE1BRWhCaUIsVUFGZ0IsZUFFaEJBLFVBRmdCO0FBQUEsTUFFSmhCLFFBRkksZUFFSkEsUUFGSTs7QUFJN0IsTUFBTUUsTUFBTSxHQUFHSixTQUFTLENBQUNDLElBQUQsRUFBT0MsUUFBUCxDQUF4QjtBQUNBaUIsU0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNoQixNQUFyQzs7QUFFQSxNQUFHLENBQUNILElBQUosRUFBUztBQUNMLHdCQUNJO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLEdBQVg7QUFBQSwrQkFBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESjtBQU1IOztBQUVELHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosRUFRS0csTUFBTSxDQUFDaUIsR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSwwQkFDYjtBQUFBLG1CQUNLQSxLQUFLLENBQUNDLEVBQU4sR0FBU0MsT0FBTyxDQUFDQyxJQUR0QixRQUM4QkgsS0FBSyxDQUFDSSxLQURwQyxPQUM0Q0osS0FBSyxDQUFDSyxNQURsRDtBQUFBLFNBQVVMLEtBQUssQ0FBQ00sRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURhO0FBQUEsS0FBaEIsQ0FSTCxlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFiSixlQWNJO0FBQUEsbUNBQWtCM0IsSUFBSSxDQUFDNEIsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEosZUFlSTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQVksYUFBTyxFQUFFWCxVQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBbUJIOztJQW5DdUJILE87VUFJTGYsUzs7O0tBSktlLE8iLCJmaWxlIjoiLi9wYWdlcy9hY2NvdW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHt1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tIFwiLi4vY29udGV4dC9BdXRoQ29udGV4dFwiO1xuaW1wb3J0IHtBUElfVVJMfSBmcm9tIFwiLi4vdXRpbHMvdXJsc1wiO1xuXG5jb25zdCB1c2VPcmRlcnMgPSAodXNlciwgZ2V0VG9rZW4pID0+IHtcbiAgICBjb25zdCBbb3JkZXJzLCBzZXRPcmRlcnNdID0gdXNlU3RhdGUoW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnN0IGZldGNoT3JkZXJzID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGlmKHVzZXIpe1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmRlcl9yZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9vcmRlcnNgLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBvcmRlcl9yZXMuanNvbigpXG4gICAgICAgICAgICAgICAgICAgIHNldE9yZGVycyhkYXRhKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKXtcbiAgICAgICAgICAgICAgICAgICAgc2V0T3JkZXJzKFtdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmZXRjaE9yZGVycygpXG4gICAgICAgIH0sW3VzZXJdKVxuICAgIHJldHVybiBvcmRlcnNcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudCgpe1xuXG4gICAgY29uc3Qge3VzZXIsIGxvZ291dFVzZXIsIGdldFRva2VufSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpXG5cbiAgICBjb25zdCBvcmRlcnMgPSB1c2VPcmRlcnModXNlciwgZ2V0VG9rZW4pXG4gICAgY29uc29sZS5sb2coXCJBY2NvdW50LnJlbmRlciBvcmRlcnNcIiwgb3JkZXJzKVxuXG4gICAgaWYoIXVzZXIpe1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD5QbGVhc2UgTG9naW4gb3IgUmVnaXN0ZXIgRmlyc3Q8L3A+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5HbyBiYWNrPC9hPjwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkFjY291bnQgUGFnZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cImhhbGFtYW4gYWNjb3VudCwgbWVsaWhhdCBvcmRlciB5YW5nIGthbXUgYnVhdCBkYW4gbG9nb3V0XCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8aDI+QWNjb3VudCBQYWdlPC9oMj5cbiAgICAgICAgICAgIDxoMz5Zb3VyIE9yZGVyczwvaDM+XG4gICAgICAgICAgICB7b3JkZXJzLm1hcChvcmRlcj0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtvcmRlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgIHtvcmRlci5icy1wcm9kdWN0Lm5hbWV9ICR7b3JkZXIudG90YWx9IHtvcmRlci5zdGF0dXN9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxoci8+XG4gICAgICAgICAgICA8cD5Mb2dnZWQgaW4gYXM6IHt1c2VyLmVtYWlsfTwvcD5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17bG9nb3V0VXNlcn0+TG9nb3V0PC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/account.js\n");

/***/ })

})