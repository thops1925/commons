"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"1f4d184e3794\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL2dsb2JhbHMuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvZ2xvYmFscy5jc3M/ZTQ4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjFmNGQxODRlMzc5NFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./components/AuthProviders.tsx":
/*!**************************************!*\
  !*** ./components/AuthProviders.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AuthProviders = ()=>{\n    _s();\n    const [providers, setProviders] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchProviders = async ()=>{\n            const res = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getProviders)();\n            console.log(res);\n            setProviders(res);\n        };\n        fetchProviders();\n    }, []);\n    if (providers) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: Object.values(providers).map((provider, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    handleClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                    children: provider.name\n                }, i, false, {\n                    fileName: \"C:\\\\Users\\\\THOP\\\\Desktop\\\\2023-project\\\\common\\\\components\\\\AuthProviders.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\THOP\\\\Desktop\\\\2023-project\\\\common\\\\components\\\\AuthProviders.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined);\n    }\n    return null;\n};\n_s(AuthProviders, \"5gXNFcy5yIv19+Dma8qmoZ2UKZE=\");\n_c = AuthProviders;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthProviders);\nvar _c;\n$RefreshReg$(_c, \"AuthProviders\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9BdXRoUHJvdmlkZXJzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUM0RTtBQUVoQztBQVk1QyxNQUFNSSxnQkFBZ0I7O0lBQ3BCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBbUI7SUFDN0RDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTUksaUJBQWlCO1lBQ3JCLE1BQU1DLE1BQU0sTUFBTVAsNkRBQVlBO1lBQzlCUSxRQUFRQyxJQUFJRjtZQUNaRixhQUFhRTtRQUNmO1FBQ0FEO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBSUYsV0FBVztRQUNiLHFCQUNFLDhEQUFDTTtzQkFDRUMsT0FBT0MsT0FBT1IsV0FBV1MsSUFBSSxDQUFDQyxVQUFvQkMsa0JBQ2pELDhEQUFDQztvQkFBZUMsYUFBYSxJQUFNbEIsdURBQU1BOzhCQUN0Q2UsU0FBU0k7bUJBRENIOzs7Ozs7Ozs7O0lBTXJCO0lBRUEsT0FBTztBQUNUO0dBeEJNWjtLQUFBQTtBQTBCTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0F1dGhQcm92aWRlcnMudHN4P2JlYjYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiwgZ2V0UHJvdmlkZXJzIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG50eXBlIFByb3ZpZGVyID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBzaWduaW5Vcmw6IHN0cmluZztcclxuICBjYWxsYmFja1VybDogc3RyaW5nO1xyXG4gIHNpZ25pblVybFBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCB1bmRlZmluZWQ7XHJcbn07XHJcbnR5cGUgUHJvdmlkZXJzID0gUmVjb3JkPHN0cmluZywgUHJvdmlkZXI+XHJcblxyXG5jb25zdCBBdXRoUHJvdmlkZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm92aWRlcnMsIHNldFByb3ZpZGVyc10gPSB1c2VTdGF0ZTxQcm92aWRlcnMgfCBudWxsPihudWxsKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hQcm92aWRlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldFByb3ZpZGVycygpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgc2V0UHJvdmlkZXJzKHJlcylcclxuICAgIH1cclxuICAgIGZldGNoUHJvdmlkZXJzKClcclxuICB9LCBbXSlcclxuXHJcbiAgaWYgKHByb3ZpZGVycykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXI6IFByb3ZpZGVyLCBpKSA9PiAoXHJcbiAgICAgICAgICA8YnV0dG9uIGtleT17aX0gaGFuZGxlQ2xpY2s9eygpID0+IHNpZ25JbigpfT5cclxuICAgICAgICAgICAge3Byb3ZpZGVyLm5hbWV9XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhQcm92aWRlcnM7XHJcbiJdLCJuYW1lcyI6WyJzaWduSW4iLCJnZXRQcm92aWRlcnMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dGhQcm92aWRlcnMiLCJwcm92aWRlcnMiLCJzZXRQcm92aWRlcnMiLCJmZXRjaFByb3ZpZGVycyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImkiLCJidXR0b24iLCJoYW5kbGVDbGljayIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/AuthProviders.tsx\n"));

/***/ })

});