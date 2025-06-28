/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/common/extend'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/common/components/Page'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/components/UserCard'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\n\n\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).add(\"tunna-user-points\", function () {\n  // Đăng ký route mới: /ranking\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).ranking = {\n    path: \"/ranking\",\n    component: RankingPage\n  };\n\n  // Thêm link vào menu\n  Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/common/extend'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), \"items\", function (items) {\n    items.add(\"ranking\", {\n      title: \"Xếp hạng\",\n      href: Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(\"ranking\"),\n      icon: \"fas fa-trophy\"\n    });\n  });\n});\n\n// Component trang xếp hạng\nvar RankingPage = {\n  view: function view() {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"RankingPage\"\n    }, /*#__PURE__*/React.createElement(\"h2\", null, \"\\uD83C\\uDF96 X\\u1EBFp h\\u1EA1ng th\\xE0nh vi\\xEAn\"), /*#__PURE__*/React.createElement(\"ul\", {\n      style: {\n        listStyle: \"none\",\n        padding: 0\n      }\n    }, Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/app'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).all(\"users\").filter(function (user) {\n      return typeof user.points === \"function\";\n    }) // tránh lỗi undefined\n    .sort(function (a, b) {\n      return b.points() - a.points();\n    }).map(function (user) {\n      var _user$data$attributes;\n      return /*#__PURE__*/React.createElement(\"li\", {\n        style: {\n          marginBottom: \"1em\",\n          borderBottom: \"1px solid #ddd\",\n          paddingBottom: \"1em\"\n        }\n      }, /*#__PURE__*/React.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'flarum/forum/components/UserCard'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n        user: user\n      }), /*#__PURE__*/React.createElement(\"span\", {\n        style: {\n          \"float\": \"right\",\n          fontWeight: \"bold\"\n        }\n      }, (_user$data$attributes = user.data.attributes.points) !== null && _user$data$attributes !== void 0 ? _user$data$attributes : 0, \" \\u0111i\\u1EC3m\"));\n    })));\n  }\n};\n\n//# sourceURL=webpack://flarum-ext-user-points/./src/forum/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/forum/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;