webpackHotUpdate_N_E("pages/success",{

/***/ "./pages/success.js":
/*!**************************!*\
  !*** ./pages/success.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Success; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _utils_urls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/urls */ \"./utils/urls.js\");\n\n\n\n\nvar _jsxFileName = \"/home/ubuntux44baseserver/belajar/binasejahtera/front/pages/success.js\",\n    _s = $RefreshSig$(),\n    _s2 = $RefreshSig$();\n\n\n\n\n\n\nvar useOrder = function useOrder(session_id) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(null),\n      order = _useState[0],\n      setOrder = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    var fetchOrder = /*#__PURE__*/function () {\n      var _ref = Object(_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n        var res, data;\n        return _home_ubuntux44baseserver_belajar_binasejahtera_front_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                setLoading(true);\n                _context.prev = 1;\n                _context.next = 4;\n                return fetch(\"\".concat(_utils_urls__WEBPACK_IMPORTED_MODULE_6__[\"API_URL\"] / orders / confirm), {\n                  method: 'POST',\n                  headers: {\n                    'Content-type': 'application/json'\n                  },\n                  body: JSON.stringify({\n                    checkout_session: session_id\n                  })\n                });\n\n              case 4:\n                res = _context.sent;\n                _context.next = 7;\n                return res.json();\n\n              case 7:\n                data = _context.sent;\n                setOrder(data);\n                _context.next = 14;\n                break;\n\n              case 11:\n                _context.prev = 11;\n                _context.t0 = _context[\"catch\"](1);\n                setOrder(null);\n\n              case 14:\n                setLoading(false);\n\n              case 15:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[1, 11]]);\n      }));\n\n      return function fetchOrder() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    fetchOrder();\n  }, [session_id]);\n  return {\n    order: order,\n    loading: loading\n  };\n};\n\n_s(useOrder, \"y1nj2tn63/TJ+P8jAW7/xrvFBlc=\");\n\nfunction Success() {\n  _s2();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n  var session_id = router.query.session_id;\n\n  var _useOrder = useOrder(session_id),\n      order = _useOrder.order,\n      loading = _useOrder.loading;\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Terima kasih atas pembayarannya!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 13\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"Terima Kasih atas pembayaran\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Success!\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 25\n    }, this), order && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Order sudah dikonfirmasi dengan nomor order: \", order.id]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 23\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 9\n  }, this);\n}\n\n_s2(Success, \"Rtsk9bB9GRWLrIW6bdmHZC45B8Q=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"], useOrder];\n});\n\n_c = Success;\n\nvar _c;\n\n$RefreshReg$(_c, \"Success\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3VjY2Vzcy5qcz9hZjczIl0sIm5hbWVzIjpbInVzZU9yZGVyIiwic2Vzc2lvbl9pZCIsInVzZVN0YXRlIiwib3JkZXIiLCJzZXRPcmRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hPcmRlciIsImZldGNoIiwiQVBJX1VSTCIsIm9yZGVycyIsImNvbmZpcm0iLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjaGVja291dF9zZXNzaW9uIiwicmVzIiwianNvbiIsImRhdGEiLCJTdWNjZXNzIiwicm91dGVyIiwidXNlUm91dGVyIiwicXVlcnkiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLFVBQUQsRUFBZ0I7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxJQUFELENBREw7QUFBQSxNQUN0QkMsS0FEc0I7QUFBQSxNQUNmQyxRQURlOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBSTdCQyx5REFBUyxDQUFDLFlBQUs7QUFDWCxRQUFNQyxVQUFVO0FBQUEsc1VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2ZGLDBCQUFVLENBQUMsSUFBRCxDQUFWO0FBRGU7QUFBQTtBQUFBLHVCQUdPRyxLQUFLLFdBQUlDLG1EQUFPLEdBQUNDLE1BQVIsR0FBZUMsT0FBbkIsR0FBOEI7QUFDakRDLHdCQUFNLEVBQUUsTUFEeUM7QUFFakRDLHlCQUFPLEVBQUU7QUFDTCxvQ0FBZ0I7QUFEWCxtQkFGd0M7QUFLakRDLHNCQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQUNDLG9DQUFnQixFQUFFakI7QUFBbkIsbUJBQWY7QUFMMkMsaUJBQTlCLENBSFo7O0FBQUE7QUFHTGtCLG1CQUhLO0FBQUE7QUFBQSx1QkFVUUEsR0FBRyxDQUFDQyxJQUFKLEVBVlI7O0FBQUE7QUFVTEMsb0JBVks7QUFXWGpCLHdCQUFRLENBQUNpQixJQUFELENBQVI7QUFYVztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWNkakIsd0JBQVEsQ0FBQyxJQUFELENBQVI7O0FBZGM7QUFnQmZFLDBCQUFVLENBQUMsS0FBRCxDQUFWOztBQWhCZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFWRSxVQUFVO0FBQUE7QUFBQTtBQUFBLE9BQWhCOztBQWtCQUEsY0FBVTtBQUNiLEdBcEJRLEVBb0JOLENBQUNQLFVBQUQsQ0FwQk0sQ0FBVDtBQXNCQSxTQUFPO0FBQUVFLFNBQUssRUFBTEEsS0FBRjtBQUFTRSxXQUFPLEVBQVBBO0FBQVQsR0FBUDtBQUNILENBM0JEOztHQUFNTCxROztBQTZCUyxTQUFTc0IsT0FBVCxHQUFrQjtBQUFBOztBQUU3QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRjZCLE1BR3JCdkIsVUFIcUIsR0FHTnNCLE1BQU0sQ0FBQ0UsS0FIRCxDQUdyQnhCLFVBSHFCOztBQUFBLGtCQUtGRCxRQUFRLENBQUNDLFVBQUQsQ0FMTjtBQUFBLE1BS3JCRSxLQUxxQixhQUtyQkEsS0FMcUI7QUFBQSxNQUtkRSxPQUxjLGFBS2RBLE9BTGM7O0FBTzdCLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUE7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixFQU1LQSxPQUFPLGlCQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTmhCLEVBT0tGLEtBQUssaUJBQUk7QUFBQSxrRUFBaURBLEtBQUssQ0FBQ3VCLEVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBV0g7O0lBbEJ1QkosTztVQUVMRSxxRCxFQUdZeEIsUTs7O0tBTFBzQixPIiwiZmlsZSI6Ii4vcGFnZXMvc3VjY2Vzcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gXCIuLi91dGlscy91cmxzXCI7XG5cbmNvbnN0IHVzZU9yZGVyID0gKHNlc3Npb25faWQpID0+IHtcbiAgICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT57XG4gICAgICAgIGNvbnN0IGZldGNoT3JkZXIgPSBhc3luYyAoKSA9PntcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTC9vcmRlcnMvY29uZmlybX1gLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtjaGVja291dF9zZXNzaW9uOiBzZXNzaW9uX2lkfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgICAgICAgICAgc2V0T3JkZXIoZGF0YSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhdGNoIChlcnIpe1xuICAgICAgICAgICAgIHNldE9yZGVyKG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICB9XG4gICAgICAgIGZldGNoT3JkZXIoKVxuICAgIH0sIFtzZXNzaW9uX2lkXSlcblxuICAgIHJldHVybiB7IG9yZGVyLCBsb2FkaW5nIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VjY2Vzcygpe1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCB7IHNlc3Npb25faWQgfSA9IHJvdXRlci5xdWVyeVxuXG4gICAgY29uc3QgeyBvcmRlciwgbG9hZGluZyB9ID0gdXNlT3JkZXIoc2Vzc2lvbl9pZClcblxuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPHRpdGxlPlRlcmltYSBrYXNpaCBhdGFzIHBlbWJheWFyYW5ueWEhPC90aXRsZT5cbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUZXJpbWEgS2FzaWggYXRhcyBwZW1iYXlhcmFuXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPGgyPlN1Y2Nlc3MhPC9oMj5cbiAgICAgICAgICAgIHtsb2FkaW5nICYmIDxwPkxvYWRpbmc8L3A+fVxuICAgICAgICAgICAge29yZGVyICYmIDxwPk9yZGVyIHN1ZGFoIGRpa29uZmlybWFzaSBkZW5nYW4gbm9tb3Igb3JkZXI6IHtvcmRlci5pZH08L3A+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/success.js\n");

/***/ })

})