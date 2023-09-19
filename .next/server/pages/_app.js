/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/next/font/google/target.css?{\"path\":\"src/theme.jsx\",\"import\":\"Roboto\",\"arguments\":[{\"weight\":[\"300\",\"400\",\"500\",\"700\"],\"subsets\":[\"latin\"],\"display\":\"swap\",\"fallback\":[\"Helvetica\",\"Arial\",\"sans-serif\"]}],\"variableName\":\"roboto\"}":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/font/google/target.css?{"path":"src/theme.jsx","import":"Roboto","arguments":[{"weight":["300","400","500","700"],"subsets":["latin"],"display":"swap","fallback":["Helvetica","Arial","sans-serif"]}],"variableName":"roboto"} ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"style\": {\"fontFamily\":\"'__Roboto_Fallback_27a9fa', '__Roboto_Fallback_Fallback_27a9fa', Helvetica, Arial, sans-serif\",\"fontStyle\":\"normal\"},\n\t\"className\": \"__className_27a9fa\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9mb250L2dvb2dsZS90YXJnZXQuY3NzP3tcInBhdGhcIjpcInNyYy90aGVtZS5qc3hcIixcImltcG9ydFwiOlwiUm9ib3RvXCIsXCJhcmd1bWVudHNcIjpbe1wid2VpZ2h0XCI6W1wiMzAwXCIsXCI0MDBcIixcIjUwMFwiLFwiNzAwXCJdLFwic3Vic2V0c1wiOltcImxhdGluXCJdLFwiZGlzcGxheVwiOlwic3dhcFwiLFwiZmFsbGJhY2tcIjpbXCJIZWx2ZXRpY2FcIixcIkFyaWFsXCIsXCJzYW5zLXNlcmlmXCJdfV0sXCJ2YXJpYWJsZU5hbWVcIjpcInJvYm90b1wifS5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0EsV0FBVyxrSUFBa0k7QUFDN0k7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21lcmlzbGFicy8uL25vZGVfbW9kdWxlcy9uZXh0L2ZvbnQvZ29vZ2xlL3RhcmdldC5jc3M/ODU5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzdHlsZVwiOiB7XCJmb250RmFtaWx5XCI6XCInX19Sb2JvdG9fRmFsbGJhY2tfMjdhOWZhJywgJ19fUm9ib3RvX0ZhbGxiYWNrX0ZhbGxiYWNrXzI3YTlmYScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWZcIixcImZvbnRTdHlsZVwiOlwibm9ybWFsXCJ9LFxuXHRcImNsYXNzTmFtZVwiOiBcIl9fY2xhc3NOYW1lXzI3YTlmYVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/font/google/target.css?{\"path\":\"src/theme.jsx\",\"import\":\"Roboto\",\"arguments\":[{\"weight\":[\"300\",\"400\",\"500\",\"700\"],\"subsets\":[\"latin\"],\"display\":\"swap\",\"fallback\":[\"Helvetica\",\"Arial\",\"sans-serif\"]}],\"variableName\":\"roboto\"}\n");

/***/ }),

/***/ "./src/createEmotionCache.tsx":
/*!************************************!*\
  !*** ./src/createEmotionCache.tsx ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_cache__WEBPACK_IMPORTED_MODULE_0__]);\n_emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst isBrowser = typeof document !== \"undefined\";\nfunction createEmotionCache() {\n    let insertionPoint;\n    if (isBrowser) {\n        const emotionInsertionPoint = document.querySelector('meta[name=\"emotion-insertion-point\"]');\n        insertionPoint = emotionInsertionPoint ?? undefined;\n    }\n    return (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n        key: \"mui-style\",\n        insertionPoint\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY3JlYXRlRW1vdGlvbkNhY2hlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF5QztBQUV6QyxNQUFNQyxZQUFZLE9BQU9DLGFBQWE7QUFFdkIsU0FBU0MscUJBQXFCO0lBQzVDLElBQUlDO0lBRUosSUFBSUgsV0FBVztRQUNkLE1BQU1JLHdCQUF3QkgsU0FBU0ksYUFBYSxDQUNuRDtRQUVERixpQkFBaUJDLHlCQUF5QkU7SUFDM0MsQ0FBQztJQUVELE9BQU9QLDBEQUFXQSxDQUFDO1FBQUVRLEtBQUs7UUFBYUo7SUFBZTtBQUN2RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVyaXNsYWJzLy4vc3JjL2NyZWF0ZUVtb3Rpb25DYWNoZS50c3g/NzY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlQ2FjaGUgZnJvbSBcIkBlbW90aW9uL2NhY2hlXCI7XG5cbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gXCJ1bmRlZmluZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuXHRsZXQgaW5zZXJ0aW9uUG9pbnQ6IEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkO1xuXG5cdGlmIChpc0Jyb3dzZXIpIHtcblx0XHRjb25zdCBlbW90aW9uSW5zZXJ0aW9uUG9pbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50Pihcblx0XHRcdCdtZXRhW25hbWU9XCJlbW90aW9uLWluc2VydGlvbi1wb2ludFwiXSdcblx0XHQpO1xuXHRcdGluc2VydGlvblBvaW50ID0gZW1vdGlvbkluc2VydGlvblBvaW50ID8/IHVuZGVmaW5lZDtcblx0fVxuXG5cdHJldHVybiBjcmVhdGVDYWNoZSh7IGtleTogXCJtdWktc3R5bGVcIiwgaW5zZXJ0aW9uUG9pbnQgfSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2FjaGUiLCJpc0Jyb3dzZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImluc2VydGlvblBvaW50IiwiZW1vdGlvbkluc2VydGlvblBvaW50IiwicXVlcnlTZWxlY3RvciIsInVuZGVmaW5lZCIsImtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/createEmotionCache.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme */ \"./src/theme.jsx\");\n/* harmony import */ var _createEmotionCache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../createEmotionCache */ \"./src/createEmotionCache.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_9__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_emotion_react__WEBPACK_IMPORTED_MODULE_6__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_8__]);\n([_emotion_react__WEBPACK_IMPORTED_MODULE_6__, _createEmotionCache__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\n\n\n// Client-side cache, shared for the whole session of the user in the browser.\nconst clientSideEmotionCache = (0,_createEmotionCache__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\nfunction App(props) {\n    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"initial-scale=1, width=device-width\"\n                }, void 0, false, {\n                    fileName: \"/Users/tadeoye/Documents/GitHub/merislabs/src/pages/_app.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/tadeoye/Documents/GitHub/merislabs/src/pages/_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n                theme: _theme__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                        fileName: \"/Users/tadeoye/Documents/GitHub/merislabs/src/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/tadeoye/Documents/GitHub/merislabs/src/pages/_app.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/tadeoye/Documents/GitHub/merislabs/src/pages/_app.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/tadeoye/Documents/GitHub/merislabs/src/pages/_app.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\nApp.propTypes = {\n    Component: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().elementType.isRequired),\n    emotionCache: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),\n    pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object.isRequired)\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNJO0FBQ047QUFDd0I7QUFDRDtBQUNMO0FBQ2xCO0FBQzBCO0FBQ3hCO0FBRS9CLDhFQUE4RTtBQUM5RSxNQUFNUSx5QkFBeUJELCtEQUFrQkE7QUFFbEMsU0FBU0UsSUFBSUMsS0FBVSxFQUFFO0lBQ3RDLE1BQU0sRUFBRUMsVUFBUyxFQUFFQyxjQUFlSix1QkFBc0IsRUFBRUssVUFBUyxFQUFFLEdBQUdIO0lBRXhFLHFCQUNFLDhEQUFDTCx5REFBYUE7UUFBQ1MsT0FBT0Y7OzBCQUNwQiw4REFBQ1Ysa0RBQUlBOzBCQUNILDRFQUFDYTtvQkFBS0MsTUFBSztvQkFBV0MsU0FBUTs7Ozs7Ozs7Ozs7MEJBRWhDLDhEQUFDZCwrREFBYUE7Z0JBQUNHLE9BQU9BLDhDQUFLQTs7a0NBRXpCLDhEQUFDRixrRUFBV0E7Ozs7O2tDQUNaLDhEQUFDTzt3QkFBVyxHQUFHRSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJaEMsQ0FBQztBQUVESixJQUFJUyxTQUFTLEdBQUc7SUFDZFAsV0FBV1YsMEVBQWdDO0lBQzNDVyxjQUFjWCwwREFBZ0I7SUFDOUJZLFdBQVdaLHFFQUEyQjtBQUN4QyIsInNvdXJjZXMiOlsid2VicGFjazovL21lcmlzbGFicy8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJAbXVpL21hdGVyaWFsL3N0eWxlc1wiO1xuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbXVpL21hdGVyaWFsL0Nzc0Jhc2VsaW5lXCI7XG5pbXBvcnQgeyBDYWNoZVByb3ZpZGVyIH0gZnJvbSBcIkBlbW90aW9uL3JlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4uL3RoZW1lXCI7XG5pbXBvcnQgY3JlYXRlRW1vdGlvbkNhY2hlIGZyb20gXCIuLi9jcmVhdGVFbW90aW9uQ2FjaGVcIjtcbmltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuXG4vLyBDbGllbnQtc2lkZSBjYWNoZSwgc2hhcmVkIGZvciB0aGUgd2hvbGUgc2Vzc2lvbiBvZiB0aGUgdXNlciBpbiB0aGUgYnJvd3Nlci5cbmNvbnN0IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUgPSBjcmVhdGVFbW90aW9uQ2FjaGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHByb3BzOiBhbnkpIHtcbiAgY29uc3QgeyBDb21wb25lbnQsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGUsIHBhZ2VQcm9wcyB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvQ2FjaGVQcm92aWRlcj5cbiAgKTtcbn1cblxuQXBwLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbiAgZW1vdGlvbkNhY2hlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBwYWdlUHJvcHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJIZWFkIiwiVGhlbWVQcm92aWRlciIsIkNzc0Jhc2VsaW5lIiwiQ2FjaGVQcm92aWRlciIsInRoZW1lIiwiY3JlYXRlRW1vdGlvbkNhY2hlIiwiY2xpZW50U2lkZUVtb3Rpb25DYWNoZSIsIkFwcCIsInByb3BzIiwiQ29tcG9uZW50IiwiZW1vdGlvbkNhY2hlIiwicGFnZVByb3BzIiwidmFsdWUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJwcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.jsx":
/*!***********************!*\
  !*** ./src/theme.jsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"roboto\": () => (/* reexport default from dynamic */ next_font_google_target_css_path_src_theme_jsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default.a)\n/* harmony export */ });\n/* harmony import */ var next_font_google_target_css_path_src_theme_jsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/theme.jsx\",\"import\":\"Roboto\",\"arguments\":[{\"weight\":[\"300\",\"400\",\"500\",\"700\"],\"subsets\":[\"latin\"],\"display\":\"swap\",\"fallback\":[\"Helvetica\",\"Arial\",\"sans-serif\"]}],\"variableName\":\"roboto\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/theme.jsx\\\",\\\"import\\\":\\\"Roboto\\\",\\\"arguments\\\":[{\\\"weight\\\":[\\\"300\\\",\\\"400\\\",\\\"500\\\",\\\"700\\\"],\\\"subsets\\\":[\\\"latin\\\"],\\\"display\\\":\\\"swap\\\",\\\"fallback\\\":[\\\"Helvetica\\\",\\\"Arial\\\",\\\"sans-serif\\\"]}],\\\"variableName\\\":\\\"roboto\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_theme_jsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_theme_jsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#fff\",\n            backgroundAccent: \"#11001D\"\n        },\n        secondary: {\n            main: \"#D97D54\"\n        },\n        background: {\n            backgroundAccent: \"#17141c\"\n        },\n        backgroundAccent: \"#17141c\",\n        error: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n        }\n    },\n    typography: {\n        fontFamily: (next_font_google_target_css_path_src_theme_jsx_import_Roboto_arguments_weight_300_400_500_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_roboto___WEBPACK_IMPORTED_MODULE_2___default().style.fontFamily),\n        h1: {\n            fontSize: \"3rem\",\n            lineHeight: 1.2\n        },\n        h2: {\n            fontSize: \"2.5rem\",\n            lineHeight: 1.2\n        },\n        h3: {\n            fontSize: \"2rem\",\n            lineHeight: 1.2\n        },\n        h4: {\n            fontSize: \"1.5rem\",\n            lineHeight: 1.2\n        },\n        h5: {\n            fontSize: \"1.2rem\",\n            lineHeight: 1.2\n        },\n        h6: {\n            fontSize: \"1rem\",\n            lineHeight: 1.2\n        },\n        body: {\n            fontSize: \"0.8rem\",\n            lineHeight: 1.5\n        },\n        body1: {\n            fontSize: \"1.2rem\",\n            lineHeight: 1.5\n        },\n        button: {\n            textTransform: \"none\",\n            fontWeight: \"bold\",\n            fontSize: \"1rem\",\n            padding: \"0.5rem 1rem\"\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBSWFBO0FBSHNDO0FBQ1I7QUFTM0MsMkJBQTJCO0FBQzNCLE1BQU1HLFFBQVFGLGlFQUFXQSxDQUFDO0lBQ3pCRyxTQUFTO1FBQ1JDLFNBQVM7WUFDUkMsTUFBTTtZQUNOQyxrQkFBa0I7UUFDbkI7UUFDQUMsV0FBVztZQUNWRixNQUFNO1FBQ1A7UUFDQUcsWUFBWTtZQUNYRixrQkFBa0I7UUFDbkI7UUFDQUEsa0JBQWtCO1FBQ2xCRyxPQUFPO1lBQ05KLE1BQU1KLDBEQUFRO1FBQ2Y7SUFDRDtJQUNBVSxZQUFZO1FBQ1hDLFlBQVliLDJPQUF1QjtRQUNuQ2UsSUFBSTtZQUNIQyxVQUFVO1lBQ1ZDLFlBQVk7UUFDYjtRQUNBQyxJQUFJO1lBQ0hGLFVBQVU7WUFDVkMsWUFBWTtRQUNiO1FBQ0FFLElBQUk7WUFDSEgsVUFBVTtZQUNWQyxZQUFZO1FBQ2I7UUFDQUcsSUFBSTtZQUNISixVQUFVO1lBQ1ZDLFlBQVk7UUFDYjtRQUVBSSxJQUFJO1lBQ0hMLFVBQVU7WUFDVkMsWUFBWTtRQUNiO1FBQ0FLLElBQUk7WUFDSE4sVUFBVTtZQUNWQyxZQUFZO1FBQ2I7UUFFQU0sTUFBTTtZQUNMUCxVQUFVO1lBQ1ZDLFlBQVk7UUFDYjtRQUVBTyxPQUFPO1lBQ05SLFVBQVU7WUFDVkMsWUFBWTtRQUNiO1FBQ0FRLFFBQVE7WUFDUEMsZUFBZTtZQUNmQyxZQUFZO1lBQ1pYLFVBQVU7WUFDVlksU0FBUztRQUNWO0lBQ0Q7QUFDRDtBQUVBLGlFQUFlekIsS0FBS0EsRUFBQztBQXZFUkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXJpc2xhYnMvLi9zcmMvdGhlbWUuanN4PzFiNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm9ib3RvLCBQb3BwaW5zIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWwvc3R5bGVzXCI7XG5pbXBvcnQgeyByZWQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbC9jb2xvcnNcIjtcblxuZXhwb3J0IGNvbnN0IHJvYm90byA9IFJvYm90byh7XG5cdHdlaWdodDogW1wiMzAwXCIsIFwiNDAwXCIsIFwiNTAwXCIsIFwiNzAwXCJdLFxuXHRzdWJzZXRzOiBbXCJsYXRpblwiXSxcblx0ZGlzcGxheTogXCJzd2FwXCIsXG5cdGZhbGxiYWNrOiBbXCJIZWx2ZXRpY2FcIiwgXCJBcmlhbFwiLCBcInNhbnMtc2VyaWZcIl0sXG59KTtcblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZVRoZW1lKHtcblx0cGFsZXR0ZToge1xuXHRcdHByaW1hcnk6IHtcblx0XHRcdG1haW46IFwiI2ZmZlwiLFxuXHRcdFx0YmFja2dyb3VuZEFjY2VudDogXCIjMTEwMDFEXCIsXG5cdFx0fSxcblx0XHRzZWNvbmRhcnk6IHtcblx0XHRcdG1haW46IFwiI0Q5N0Q1NFwiLFxuXHRcdH0sXG5cdFx0YmFja2dyb3VuZDoge1xuXHRcdFx0YmFja2dyb3VuZEFjY2VudDogXCIjMTcxNDFjXCIsXG5cdFx0fSxcblx0XHRiYWNrZ3JvdW5kQWNjZW50OiBcIiMxNzE0MWNcIixcblx0XHRlcnJvcjoge1xuXHRcdFx0bWFpbjogcmVkLkE0MDAsXG5cdFx0fSxcblx0fSxcblx0dHlwb2dyYXBoeToge1xuXHRcdGZvbnRGYW1pbHk6IHJvYm90by5zdHlsZS5mb250RmFtaWx5LFxuXHRcdGgxOiB7XG5cdFx0XHRmb250U2l6ZTogXCIzcmVtXCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiAxLjIsXG5cdFx0fSxcblx0XHRoMjoge1xuXHRcdFx0Zm9udFNpemU6IFwiMi41cmVtXCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiAxLjIsXG5cdFx0fSxcblx0XHRoMzoge1xuXHRcdFx0Zm9udFNpemU6IFwiMnJlbVwiLFxuXHRcdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdH0sXG5cdFx0aDQ6IHtcblx0XHRcdGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuXHRcdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdH0sXG5cblx0XHRoNToge1xuXHRcdFx0Zm9udFNpemU6IFwiMS4ycmVtXCIsXG5cdFx0XHRsaW5lSGVpZ2h0OiAxLjIsXG5cdFx0fSxcblx0XHRoNjoge1xuXHRcdFx0Zm9udFNpemU6IFwiMXJlbVwiLFxuXHRcdFx0bGluZUhlaWdodDogMS4yLFxuXHRcdH0sXG5cblx0XHRib2R5OiB7XG5cdFx0XHRmb250U2l6ZTogXCIwLjhyZW1cIixcblx0XHRcdGxpbmVIZWlnaHQ6IDEuNSxcblx0XHR9LFxuXG5cdFx0Ym9keTE6IHtcblx0XHRcdGZvbnRTaXplOiBcIjEuMnJlbVwiLFxuXHRcdFx0bGluZUhlaWdodDogMS41LFxuXHRcdH0sXG5cdFx0YnV0dG9uOiB7XG5cdFx0XHR0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcblx0XHRcdGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuXHRcdFx0Zm9udFNpemU6IFwiMXJlbVwiLFxuXHRcdFx0cGFkZGluZzogXCIwLjVyZW0gMXJlbVwiLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsicm9ib3RvIiwiY3JlYXRlVGhlbWUiLCJyZWQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImJhY2tncm91bmRBY2NlbnQiLCJzZWNvbmRhcnkiLCJiYWNrZ3JvdW5kIiwiZXJyb3IiLCJBNDAwIiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJzdHlsZSIsImgxIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiaDIiLCJoMyIsImg0IiwiaDUiLCJoNiIsImJvZHkiLCJib2R5MSIsImJ1dHRvbiIsInRleHRUcmFuc2Zvcm0iLCJmb250V2VpZ2h0IiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/theme.jsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/cache");;

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@emotion/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();