module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/abugra/Desktop/MeetingPlanner-client/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("footer", {
    className: "has-background-grey-lighter has-text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("section", {
    className: "section has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("b", {
    className: "has-text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Get started:"), "\xA0\xA0 Home\xA0\xA0 \xB7 \xA0\xA0Meeting polls\xA0\xA0 \xB7 \xA0\xA0Opinion polls\xA0\xA0 \xB7 \xA0\xA0Anonymous polls\xA0\xA0 \xB7 \xA0\xA0Message boards"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("b", {
    className: "has-text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Support:"), "\xA0\xA0 FAQ\xA0\xA0 \xB7 \xA0\xA0Blog\xA0\xA0 \xB7 \xA0\xA0Lost admin link\xA0\xA0 \xB7 \xA0\xA0Meeting planner\xA0\xA0 \xB7 \xA0\xA0Polling app"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("b", {
    className: "has-text-grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, "About us:"), "\xA0\xA0 Contact\xA0\xA0 \xB7 \xA0\xA0Impressum\xA0\xA0 \xB7 \xA0\xA0Privacy policy\xA0\xA0 \xB7 \xA0\xA0Terms"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("i", {
    className: "fab fa-facebook-square is-size-4 has-text-grey-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })), "\xA0\xA0", __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("i", {
    className: "fab fa-twitter-square is-size-4 has-text-grey-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })))))), __jsx("section", {
    className: "has-background-dark has-text-centered has-text-grey-lighter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), "\xA9 2020 Xoyondo", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "/home/abugra/Desktop/MeetingPlanner-client/components/Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("title", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "Meeting Planner"), __jsx("script", {
  src: "https://kit.fontawesome.com/5ee609cd40.js",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.css",
  integrity: "sha256-XF2msWsEjJwE8ORQ0exG5nFk8jDTntTMbUZKtvPRkgU=",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.css.map",
  integrity: "undefined",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.8.0/css/bulma.min.css",
  integrity: "sha256-D9M5yrVDqFlla7nlELDaYZIpXfFWDytQtiV+TaH6F1I=",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
})), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), props.children, __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/abugra/Desktop/MeetingPlanner-client/components/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (() => {
  return __jsx("nav", {
    className: "navbar is-info",
    role: "navigation",
    "aria-label": "main navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("a", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://bulma.io/images/bulma-logo.png",
    width: "112",
    height: "28",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }))), __jsx("a", {
    role: "button",
    className: "navbar-burger burger",
    "aria-label": "menu",
    "aria-expanded": "false",
    "data-target": "navbarBasicExample",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }))), __jsx("div", {
    id: "navbarBasicExample",
    className: "navbar-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "navbar-end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("div", {
    className: "navbar-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("div", {
    className: "buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown is-hoverable",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-trigger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("button", {
    className: "button is-light is-rounded is-outlined",
    "aria-haspopup": "true",
    "aria-controls": "dropdown-menu4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Let's Plan!"), __jsx("span", {
    className: "icon is-small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-angle-down",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })))), __jsx("div", {
    className: "dropdown-menu",
    id: "dropdown-menu4",
    role: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "dropdown-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/plan/meeting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("a", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-calendar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), "\xA0 Schedule a meeting")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/plan/opoll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("a", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), "\xA0 Generate opinion poll")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/plan/apoll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("a", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-bar-chart-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), "\xA0 Generate anonymous poll")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/plan/message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("a", {
    className: "dropdown-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-comments-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), "\xA0 Generate message board")))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("a", {
    className: "button is-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("i", {
    className: "fas fa-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  })))))))));
});

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:8080/'
});
/* harmony default export */ __webpack_exports__["default"] = (axiosInstance);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    })).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/plan/[itemID].js":
/*!********************************!*\
  !*** ./pages/plan/[itemID].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "/home/abugra/Desktop/MeetingPlanner-client/pages/plan/[itemID].js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const ItemDetailsPage = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    itemID
  } = router.query;
  const {
    0: itemDetails,
    1: setItemDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: isThereParticipant,
    1: setIsThereParticipant
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: participantName,
    1: setParticipantName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: optionsSelected,
    1: setOptionsSelected
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: senderName,
    1: setSenderName
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: comment,
    1: setComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  const {
    0: sendCommentSectionDisplay,
    1: setSendCommentSectionDisplay
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (itemID) getPlan(itemID);
  }, [itemID]);

  const getPlan = async itemID => {
    const doc = await _config__WEBPACK_IMPORTED_MODULE_4__["default"].get('api/freeone', {
      params: {
        itemID
      }
    });
    setItemDetails(doc.data);

    if (doc.data && doc.data.participants.length > 0) {
      setIsThereParticipant(true);
    }
  };

  const postParticipant = async () => {
    const res = await _config__WEBPACK_IMPORTED_MODULE_4__["default"].post('api/participant', {
      participantName,
      optionsSelected
    }, {
      params: {
        itemID
      }
    });
    getPlan(itemID);
    setParticipantName('');
    const checkboxes = document.getElementsByClassName('checkbox-vote');
    checkboxes.forEach(element => console.log(element));
  };

  const postComment = async () => {
    const res = await _config__WEBPACK_IMPORTED_MODULE_4__["default"].post('api/comment', {
      senderName,
      comment
    }, {
      params: {
        itemID
      }
    });
    getPlan(itemID);
  };

  const handleCheckboxVote = async e => {
    if (e.target.checked) {
      setOptionsSelected([...optionsSelected, e.target.id]);
      return;
    }

    let tempOptionsSelected = [...optionsSelected];
    const check = tempOptionsSelected.indexOf(e.target.id);
    if (check > -1) tempOptionsSelected.splice(check, 1);
    setOptionsSelected(tempOptionsSelected);
  };

  const returnVotes = item => {
    if (Array.isArray(itemDetails.possibleDates)) {
      const {
        possibleDates
      } = itemDetails;
      return possibleDates.map((option, index) => {
        const isContainIndex = item.optionsSelected.includes(index);
        if (isContainIndex) return __jsx("td", {
          key: index,
          className: "has-text-centered",
          style: {
            backgroundColor: '#b8eba4'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: undefined
        }, __jsx("i", {
          className: "fas fa-check",
          style: {
            color: '#008623'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: undefined
        }));else return __jsx("td", {
          key: index,
          className: "has-text-centered",
          style: {
            backgroundColor: '#EDB7B7'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: undefined
        }, __jsx("i", {
          className: "fas fa-times",
          style: {
            color: '#FF0000'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: undefined
        }));
      });
    }
  };

  const handleClickSendComment = () => {
    let displayValue = sendCommentSectionDisplay === '' ? 'none' : '';
    setSendCommentSectionDisplay(displayValue);
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("br", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1136153575" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1136153575" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      padding: '.5rem'
    },
    className: "jsx-1136153575" + " " + "is-fullwidth has-background-special-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "Poll by ", __jsx("strong", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, itemDetails.ownerName))), __jsx("br", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }), __jsx("p", {
    className: "jsx-1136153575" + " " + "title has-text-info has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, itemDetails.boardTitle), __jsx("p", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, itemDetails.description ? itemDetails.description : "Please indicate when you are available. Then click 'Save'."), __jsx("br", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1136153575" + " " + "votes-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("table", {
    className: "jsx-1136153575" + " " + "table is-bordered is-striped is-narrow is-hoverable is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, __jsx("thead", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("th", {
    className: "jsx-1136153575" + " " + "border-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), itemDetails.possibleDates ? itemDetails.possibleDates.map((element, index) => __jsx("th", {
    key: index,
    className: "jsx-1136153575" + " " + "has-background-grey-lighter has-text-centered border-color-white possible-dates-cell",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, element)) : null)), __jsx("tbody", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, __jsx("tr", {
    style: {
      display: !isThereParticipant ? '' : 'none'
    },
    className: "jsx-1136153575" + " " + "be-first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx("td", {
    colSpan: "100%",
    className: "jsx-1136153575" + " " + "has-background-primary has-text-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, "Be the first to vote in this poll!")), itemDetails.participants ? itemDetails.participants.map((item, index) => {
    return __jsx("tr", {
      key: index,
      className: "jsx-1136153575",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162
      },
      __self: undefined
    }, __jsx("td", {
      className: "jsx-1136153575" + " " + "has-background-special-blue border-color-white",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: undefined
    }, item.participantName), returnVotes(item));
  }) : null, __jsx("tr", {
    className: "jsx-1136153575" + " " + "has-background-special-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx("td", {
    className: "jsx-1136153575" + " " + "participant-name-cell border-color-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "Your name",
    maxLength: 20,
    value: participantName,
    onChange: e => setParticipantName(e.target.value),
    className: "jsx-1136153575" + " " + "input is-primary is-size-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: undefined
  })))), itemDetails.possibleDates ? itemDetails.possibleDates.map((element, index) => __jsx("td", {
    key: index,
    className: "jsx-1136153575" + " " + "has-text-centered border-color-white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, __jsx("label", {
    className: "jsx-1136153575" + " " + "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: undefined
  }, __jsx("input", {
    id: index,
    type: "checkbox",
    style: {
      transform: 'scale(1.5)',
      border: 'none'
    },
    onChange: handleCheckboxVote,
    className: "jsx-1136153575" + " " + "checkbox-vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: undefined
  })))) : null)))), __jsx("p", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx("a", {
    onClick: postParticipant,
    className: "jsx-1136153575" + " " + "button is-link has-text-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "Save")), __jsx("br", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }), __jsx("p", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-1136153575" + " " + "fas fa-eye",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }), " CHANGE VIEW")), __jsx("div", {
    className: "jsx-1136153575" + " " + "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-1136153575" + " " + "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1136153575" + " " + "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1136153575" + " " + "title has-text-info has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }, "Comments \xA0", __jsx("a", {
    onClick: handleClickSendComment,
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, __jsx("i", {
    className: "jsx-1136153575" + " " + "fas fa-plus-circle has-text-success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }))), __jsx("div", {
    style: {
      display: sendCommentSectionDisplay
    },
    className: "jsx-1136153575" + " " + "columns has-background-special-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "column is-11",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "field is-inline-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "Your name",
    onChange: e => setSenderName(e.target.value),
    className: "jsx-1136153575" + " " + "input is-primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }))), __jsx("div", {
    className: "jsx-1136153575" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: undefined
  }, __jsx("textarea", {
    rows: 2,
    placeholder: "Your message",
    onChange: e => setComment(e.target.value),
    className: "jsx-1136153575" + " " + "textarea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: undefined
  })))), __jsx("div", {
    className: "jsx-1136153575" + " " + "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx("button", {
    onClick: postComment,
    className: "jsx-1136153575" + " " + "button is-link has-text-white is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, "Submit"))), __jsx("br", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }, itemDetails ? itemDetails.comments.map(data => __jsx("div", {
    className: "jsx-1136153575" + " " + "columns p-1-rem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1136153575" + " " + "column is-1 has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1136153575" + " " + "dot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }, data.senderName[0])), __jsx("div", {
    className: "jsx-1136153575" + " " + "column has-background-white-ter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }, __jsx("p", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1136153575" + " " + "is-size-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }, __jsx("strong", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  }, data.senderName), " \xA0 \xB7 \xA0", ' ', __jsx("span", {
    className: "jsx-1136153575" + " " + "text-muted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }, "19 hours ago"))), __jsx("p", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }, data.comment)))) : null)), __jsx("div", {
    className: "jsx-1136153575" + " " + "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  })), __jsx("br", {
    className: "jsx-1136153575",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1136153575",
    __self: undefined
  }, ".dot.jsx-1136153575{color:white;font-size:1.5rem;height:2.5rem;width:2.5rem;background-color:#007fff;border-radius:50%;display:inline-block;}.has-background-special-blue.jsx-1136153575{background-color:#c8e4ff !important;}.has-background-special-green.jsx-1136153575{background-color:#b8eba4 !important;}.has-text-special-green.jsx-1136153575{color:#008623 !important;}.border-none.jsx-1136153575{border:none !important;}.border-color-white.jsx-1136153575{border-color:white !important;}.text-muted.jsx-1136153575{color:#868e96 !important;}.p-1-rem.jsx-1136153575{padding-bottom:1rem !important;}.votes-area.jsx-1136153575{max-width:65% !important;}.possible-dates-cell.jsx-1136153575{min-width:1rem;max-width:3rem;}.participant-name-cell.jsx-1136153575{max-width:4rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FidWdyYS9EZXNrdG9wL01lZXRpbmdQbGFubmVyLWNsaWVudC9wYWdlcy9wbGFuL1tpdGVtSURdLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1UUyxBQUd5QixBQVN3QixBQUdBLEFBR1gsQUFHRixBQUdPLEFBR0wsQUFHTSxBQUdOLEFBR1YsQUFJQSxZQXBDRSxHQWlDRixBQUlqQixRQW5CQSxFQUhBLEFBU0EsQUFNQSxJQTdCZ0IsQ0FvQmhCLEFBYUEsQ0FQQSxLQWxCQSxBQUdBLE9BVmUsYUFDWSx5QkFDUCxrQkFDRyxxQkFDdkIiLCJmaWxlIjoiL2hvbWUvYWJ1Z3JhL0Rlc2t0b3AvTWVldGluZ1BsYW5uZXItY2xpZW50L3BhZ2VzL3BsYW4vW2l0ZW1JRF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBheGlvc0luc3RhbmNlIGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmNvbnN0IEl0ZW1EZXRhaWxzUGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHtpdGVtSUR9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbaXRlbURldGFpbHMsIHNldEl0ZW1EZXRhaWxzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2lzVGhlcmVQYXJ0aWNpcGFudCwgc2V0SXNUaGVyZVBhcnRpY2lwYW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3BhcnRpY2lwYW50TmFtZSwgc2V0UGFydGljaXBhbnROYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW29wdGlvbnNTZWxlY3RlZCwgc2V0T3B0aW9uc1NlbGVjdGVkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NlbmRlck5hbWUsIHNldFNlbmRlck5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtzZW5kQ29tbWVudFNlY3Rpb25EaXNwbGF5LCBzZXRTZW5kQ29tbWVudFNlY3Rpb25EaXNwbGF5XSA9IHVzZVN0YXRlKFxuICAgICdub25lJ1xuICApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGl0ZW1JRCkgZ2V0UGxhbihpdGVtSUQpO1xuICB9LCBbaXRlbUlEXSk7XG5cbiAgY29uc3QgZ2V0UGxhbiA9IGFzeW5jIGl0ZW1JRCA9PiB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5nZXQoJ2FwaS9mcmVlb25lJywge3BhcmFtczoge2l0ZW1JRH19KTtcbiAgICBzZXRJdGVtRGV0YWlscyhkb2MuZGF0YSk7XG4gICAgaWYgKGRvYy5kYXRhICYmIGRvYy5kYXRhLnBhcnRpY2lwYW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBzZXRJc1RoZXJlUGFydGljaXBhbnQodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHBvc3RQYXJ0aWNpcGFudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QoXG4gICAgICAnYXBpL3BhcnRpY2lwYW50JyxcbiAgICAgIHtwYXJ0aWNpcGFudE5hbWUsIG9wdGlvbnNTZWxlY3RlZH0sXG4gICAgICB7cGFyYW1zOiB7aXRlbUlEfX1cbiAgICApO1xuICAgIGdldFBsYW4oaXRlbUlEKTtcbiAgICBzZXRQYXJ0aWNpcGFudE5hbWUoJycpO1xuICAgIGNvbnN0IGNoZWNrYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjaGVja2JveC12b3RlJyk7XG4gICAgY2hlY2tib3hlcy5mb3JFYWNoKGVsZW1lbnQgPT4gY29uc29sZS5sb2coZWxlbWVudCkpXG5cbiAgfTtcblxuICBjb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBvc3QoXG4gICAgICAnYXBpL2NvbW1lbnQnLFxuICAgICAge3NlbmRlck5hbWUsIGNvbW1lbnR9LFxuICAgICAge3BhcmFtczoge2l0ZW1JRH19XG4gICAgKTtcbiAgICBnZXRQbGFuKGl0ZW1JRCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hWb3RlID0gYXN5bmMgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgIHNldE9wdGlvbnNTZWxlY3RlZChbLi4ub3B0aW9uc1NlbGVjdGVkLCBlLnRhcmdldC5pZF0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgdGVtcE9wdGlvbnNTZWxlY3RlZCA9IFsuLi5vcHRpb25zU2VsZWN0ZWRdO1xuICAgIGNvbnN0IGNoZWNrID0gdGVtcE9wdGlvbnNTZWxlY3RlZC5pbmRleE9mKGUudGFyZ2V0LmlkKTtcbiAgICBpZiAoY2hlY2sgPiAtMSkgdGVtcE9wdGlvbnNTZWxlY3RlZC5zcGxpY2UoY2hlY2ssIDEpO1xuICAgIHNldE9wdGlvbnNTZWxlY3RlZCh0ZW1wT3B0aW9uc1NlbGVjdGVkKTtcbiAgfTtcblxuICBjb25zdCByZXR1cm5Wb3RlcyA9IGl0ZW0gPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW1EZXRhaWxzLnBvc3NpYmxlRGF0ZXMpKSB7XG4gICAgICBjb25zdCB7cG9zc2libGVEYXRlc30gPSBpdGVtRGV0YWlscztcbiAgICAgIHJldHVybiBwb3NzaWJsZURhdGVzLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc0NvbnRhaW5JbmRleCA9IGl0ZW0ub3B0aW9uc1NlbGVjdGVkLmluY2x1ZGVzKGluZGV4KTtcbiAgICAgICAgaWYgKGlzQ29udGFpbkluZGV4KVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGFzLXRleHQtY2VudGVyZWRcIlxuICAgICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJyNiOGViYTQnfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrXCIgc3R5bGU9e3tjb2xvcjogJyMwMDg2MjMnfX0+PC9pPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtdGV4dC1jZW50ZXJlZFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiAnI0VEQjdCNyd9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXNcIiBzdHlsZT17e2NvbG9yOiAnI0ZGMDAwMCd9fT48L2k+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tTZW5kQ29tbWVudCA9ICgpID0+IHtcbiAgICBsZXQgZGlzcGxheVZhbHVlID0gc2VuZENvbW1lbnRTZWN0aW9uRGlzcGxheSA9PT0gJycgPyAnbm9uZScgOiAnJztcbiAgICBzZXRTZW5kQ29tbWVudFNlY3Rpb25EaXNwbGF5KGRpc3BsYXlWYWx1ZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTFcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlzLWZ1bGx3aWR0aCBoYXMtYmFja2dyb3VuZC1zcGVjaWFsLWJsdWVcIlxuICAgICAgICAgICAgICBzdHlsZT17e3BhZGRpbmc6ICcuNXJlbSd9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7LyogT3duZXIgbmFtZSBvZiB0aGUgcG9sbCAqL31cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgUG9sbCBieSA8c3Ryb25nPntpdGVtRGV0YWlscy5vd25lck5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICB7LyogVGl0bGUgb2YgdGhlIHBvbGwgKi99XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBoYXMtdGV4dC1pbmZvIGhhcy10ZXh0LXdlaWdodC1ub3JtYWxcIj5cbiAgICAgICAgICAgICAge2l0ZW1EZXRhaWxzLmJvYXJkVGl0bGV9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICB7LyogRGVzY3JpcHRpb24gb2YgdGhlIHBvbGwgKi99XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2l0ZW1EZXRhaWxzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgPyBpdGVtRGV0YWlscy5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIDogXCJQbGVhc2UgaW5kaWNhdGUgd2hlbiB5b3UgYXJlIGF2YWlsYWJsZS4gVGhlbiBjbGljayAnU2F2ZScuXCJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIHsvKiBMaXN0IGV4aXN0aW5nIHZvdGVzICYgZ2l2ZSBuZXcgdm90ZXMgYXJlYSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZXMtYXJlYVwiPlxuICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgaXMtYm9yZGVyZWQgaXMtc3RyaXBlZCBpcy1uYXJyb3cgaXMtaG92ZXJhYmxlIGlzLWZ1bGx3aWR0aFwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJvcmRlci1ub25lXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICB7LyogUHV0IHBvc3NpYmxlIGRhdGVzIGFzIHRhYmxlIGhlYWRlcnMgKi99XG4gICAgICAgICAgICAgICAgICAgIHtpdGVtRGV0YWlscy5wb3NzaWJsZURhdGVzXG4gICAgICAgICAgICAgICAgICAgICAgPyBpdGVtRGV0YWlscy5wb3NzaWJsZURhdGVzLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoYXMtYmFja2dyb3VuZC1ncmV5LWxpZ2h0ZXIgaGFzLXRleHQtY2VudGVyZWQgYm9yZGVyLWNvbG9yLXdoaXRlIHBvc3NpYmxlLWRhdGVzLWNlbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZW1lbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmUtZmlyc3RcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6ICFpc1RoZXJlUGFydGljaXBhbnQgPyAnJyA6ICdub25lJ319XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy1iYWNrZ3JvdW5kLXByaW1hcnkgaGFzLXRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIGNvbFNwYW49XCIxMDAlXCJcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEJlIHRoZSBmaXJzdCB0byB2b3RlIGluIHRoaXMgcG9sbCFcbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG5cbiAgICAgICAgICAgICAgICAgIHtpdGVtRGV0YWlscy5wYXJ0aWNpcGFudHNcbiAgICAgICAgICAgICAgICAgICAgPyBpdGVtRGV0YWlscy5wYXJ0aWNpcGFudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJoYXMtYmFja2dyb3VuZC1zcGVjaWFsLWJsdWUgYm9yZGVyLWNvbG9yLXdoaXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wYXJ0aWNpcGFudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmV0dXJuVm90ZXMoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgPHRyIGNsYXNzTmFtZT1cImhhcy1iYWNrZ3JvdW5kLXNwZWNpYWwtYmx1ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicGFydGljaXBhbnQtbmFtZS1jZWxsIGJvcmRlci1jb2xvci13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dCBpcy1wcmltYXJ5IGlzLXNpemUtNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9ezIwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXJ0aWNpcGFudE5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFydGljaXBhbnROYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb2x1bW5zIHdoaWNoIGhhcyBjaGVja2JveCB0byBjaGVjayBwb3NzaWJsZSBkYXRlcyAqL31cbiAgICAgICAgICAgICAgICAgICAge2l0ZW1EZXRhaWxzLnBvc3NpYmxlRGF0ZXNcbiAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW1EZXRhaWxzLnBvc3NpYmxlRGF0ZXMubWFwKChlbGVtZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhhcy10ZXh0LWNlbnRlcmVkIGJvcmRlci1jb2xvci13aGl0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNoZWNrYm94LXZvdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEuNSknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hlY2tib3hWb3RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1saW5rIGhhcy10ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtwb3N0UGFydGljaXBhbnR9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTYXZlXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leWVcIj48L2k+IENIQU5HRSBWSUVXXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtMVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogQ29tbWVudHMgQXJlYSAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtMVwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpdGxlIGhhcy10ZXh0LWluZm8gaGFzLXRleHQtd2VpZ2h0LW5vcm1hbFwiPlxuICAgICAgICAgICAgICBDb21tZW50cyAmbmJzcDtcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17aGFuZGxlQ2xpY2tTZW5kQ29tbWVudH0+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBsdXMtY2lyY2xlIGhhcy10ZXh0LXN1Y2Nlc3NcIj48L2k+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgey8qIFNlbmQgY29tbWVudHMgYXJlYSAqL31cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1ucyBoYXMtYmFja2dyb3VuZC1zcGVjaWFsLWJsdWVcIlxuICAgICAgICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IHNlbmRDb21tZW50U2VjdGlvbkRpc3BsYXl9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy0xMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGQgaXMtaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZW5kZXJOYW1lKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBtZXNzYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRDb21tZW50KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTFcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gaXMtbGluayBoYXMtdGV4dC13aGl0ZSBpcy1mdWxsd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17cG9zdENvbW1lbnR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxiciAvPlxuXG4gICAgICAgICAgICB7LyogTGlzdCBhdmFpbGFibGUgY29tbWVudHMgYXJlYSAqL31cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIHtpdGVtRGV0YWlsc1xuICAgICAgICAgICAgICAgID8gaXRlbURldGFpbHMuY29tbWVudHMubWFwKGRhdGEgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgcC0xLXJlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLTEgaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvdFwiPntkYXRhLnNlbmRlck5hbWVbMF19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGhhcy1iYWNrZ3JvdW5kLXdoaXRlLXRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlzLXNpemUtN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2RhdGEuc2VuZGVyTmFtZX08L3N0cm9uZz4gJm5ic3A7IMK3ICZuYnNwO3snICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPjE5IGhvdXJzIGFnbzwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2RhdGEuY29tbWVudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy0xXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxiciAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgLmRvdCB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYXMtYmFja2dyb3VuZC1zcGVjaWFsLWJsdWUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZTRmZiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaGFzLWJhY2tncm91bmQtc3BlY2lhbC1ncmVlbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhlYmE0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5oYXMtdGV4dC1zcGVjaWFsLWdyZWVuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4NjIzICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ib3JkZXItbm9uZSB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmJvcmRlci1jb2xvci13aGl0ZSB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50ZXh0LW11dGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODY4ZTk2ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wLTEtcmVtIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC52b3Rlcy1hcmVhIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNjUlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb3NzaWJsZS1kYXRlcy1jZWxsIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMXJlbTtcbiAgICAgICAgICAgIG1heC13aWR0aDogM3JlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBhcnRpY2lwYW50LW5hbWUtY2VsbCB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDRyZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWxzUGFnZTtcbi8vIDVlNzA4ZGNlNzkwYTQ5MzkyOGFhYzZmMFxuIl19 */\n/*@ sourceURL=/home/abugra/Desktop/MeetingPlanner-client/pages/plan/[itemID].js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDetailsPage); // 5e708dce790a493928aac6f0

/***/ }),

/***/ 3:
/*!**************************************!*\
  !*** multi ./pages/plan/[itemID].js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abugra/Desktop/MeetingPlanner-client/pages/plan/[itemID].js */"./pages/plan/[itemID].js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=[itemID].js.map