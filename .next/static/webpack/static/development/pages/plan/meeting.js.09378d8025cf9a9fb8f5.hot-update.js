webpackHotUpdate("static\\development\\pages\\plan\\meeting.js",{

/***/ "./components/Date_FreeText.js":
/*!*************************************!*\
  !*** ./components/Date_FreeText.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ahmet Bugra Cakici\\Desktop\\MeetingPlaner-client\\components\\Date_FreeText.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var getPossibleDates = _ref.getPossibleDates;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(['test', 'lol']),
      possibleDates = _useState[0],
      setPossibleDates = _useState[1];

  var handleDelete = function handleDelete(e) {
    e.target.parentElement.remove();
  };

  var generateField = function generateField() {
    console.log('qoqq');
    var x = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('h1', {
      id: 'abc'
    }, 'asd');
    react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(x, document.getElementById('generatetohere')); // React.createElement('h1');
  };

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "column is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "box",
    style: {
      backgroundColor: '#C8E4FF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    className: "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("label", {
    className: "label has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Enter possible dates below"), __jsx("div", {
    className: "field-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: "field is-expanded",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, possibleDates.map(function (item) {
    return __jsx("div", {
      className: "field has-addons possible-dates-field",
      onClick: generateField,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("p", {
      className: "control is-expanded",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("input", {
      className: "input possible-dates-input",
      type: "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx("p", {
      className: "control",
      onClick: handleDelete,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx("a", {
      className: "button is-static",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("i", {
      className: "fas fa-trash-alt",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }))));
  }), __jsx("div", {
    id: "generatetohere",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("a", {
    className: "button is-small is-link",
    onClick: function onClick() {
      getPossibleDates(possibleDates);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Next"))), __jsx("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  })), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }));
});

/***/ })

})
//# sourceMappingURL=meeting.js.09378d8025cf9a9fb8f5.hot-update.js.map