webpackHotUpdate("static\\development\\pages\\plan\\meeting.js",{

/***/ "./pages/plan/meeting.js":
/*!*******************************!*\
  !*** ./pages/plan/meeting.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Meeting; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Date_FreeText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Date_FreeText */ "./components/Date_FreeText.js");
/* harmony import */ var _components_Date_Calendar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Date_Calendar */ "./components/Date_Calendar.js");








var _jsxFileName = "C:\\Users\\Ahmet Bugra Cakici\\Desktop\\MeetingPlaner-client\\pages\\plan\\meeting.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var Meeting = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Meeting, _Component);

  function Meeting() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Meeting);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Meeting)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      whichPage: 0,
      whichSection: 0,
      pollTitle: '',
      additionalDescriptions: '',
      userName: '',
      emailAddress: '',
      possibleDates: ''
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleNextButton", function () {
      _this.setState({
        whichPage: 1
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "postOperation", function () {
      console.log("\n\t\t".concat(_this.state.pollTitle, ",\n\n\t\t").concat(_this.state.additionalDescriptions, ",\n\n\t\t").concat(_this.state.userName, ",\n\n\t\t").concat(_this.state.emailAddress, ",\n\n\t\t").concat(_this.state.possibleDates, ",\n\n\t\t"));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setWhichSection", function (e) {
      _this.setState({
        whichSection: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(e.target.id)
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setPollTitle", function (e) {
      _this.setState({
        pollTitle: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setAdditionalDescriptions", function (e) {
      _this.setState({
        additionalDescriptions: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setUserName", function (e) {
      _this.setState({
        userName: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setEmailAddress", function (e) {
      _this.setState({
        emailAddress: e.target.value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "setPossibleDates", function (pd) {
      _this.setState({
        possibleDates: pd
      }, function () {
        _this.postOperation();
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Meeting, [{
    key: "render",
    value: function render() {
      if (this.state.whichPage === 0) {
        return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("div", {
          className: "is-fullwidth has-background-white-ter",
          style: {
            paddingTop: '1rem',
            paddingBottom: '1rem'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, __jsx("div", {
          className: "columns has-text-centered",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }), __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, "General information"), __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, __jsx("i", {
          className: "fa fa-lg fa-chevron-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        })), __jsx("div", {
          className: "column has-text-grey-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, "Choose dates and times"), __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("i", {
          className: "fa fa-lg fa-chevron-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        })), __jsx("div", {
          className: "column  has-text-grey-light",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, "Invite participants"), __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }))), __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, __jsx("div", {
          className: "has-background-white",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84
          },
          __self: this
        }), __jsx("div", {
          className: "columns",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }), __jsx("div", {
          className: "column is-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, __jsx("p", {
          className: "title has-text-link has-text-centered has-text-weight-normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88
          },
          __self: this
        }, "Schedule a meetings"), __jsx("div", {
          className: "box",
          style: {
            backgroundColor: '#C8E4FF'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, __jsx("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, __jsx("label", {
          className: "label has-text-weight-normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, "Poll title:"), __jsx("div", {
          className: "control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, __jsx("input", {
          className: "input",
          type: "text",
          value: this.state.pollTitle,
          onChange: this.setPollTitle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 95
          },
          __self: this
        }))), __jsx("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104
          },
          __self: this
        }, __jsx("label", {
          className: "label has-text-weight-normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, "Additional descriptions:"), __jsx("div", {
          className: "control has-icons-left has-icons-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108
          },
          __self: this
        }, __jsx("textarea", {
          "class": "textarea",
          rows: "3",
          value: this.state.additionalDescriptions,
          onChange: this.setAdditionalDescriptions,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }))), __jsx("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        }, __jsx("label", {
          className: "label has-text-weight-normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 118
          },
          __self: this
        }, "Your name:"), __jsx("div", {
          className: "control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, __jsx("input", {
          className: "input",
          type: "text",
          value: this.state.userName,
          onChange: this.setUserName,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }))), __jsx("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          },
          __self: this
        }, __jsx("label", {
          className: "label has-text-weight-normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          },
          __self: this
        }, "Your email address:"), __jsx("div", {
          className: "control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, __jsx("input", {
          className: "input",
          type: "email",
          value: this.state.emailAddress,
          onChange: this.setEmailAddress,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }))), __jsx("span", {
          className: "is-size-7 has-text-grey",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, "We will send you an email with the link to your poll and the admin area. That's all you will receive - we hate spam too."), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }), __jsx("div", {
          className: "field",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, __jsx("div", {
          className: "control",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }, __jsx("button", {
          className: "button is-link is-fullwidth",
          onClick: this.handleNextButton,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 150
          },
          __self: this
        }, "Next")))), __jsx("div", {
          "class": "box has-background-white-ter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, __jsx("article", {
          "class": "media",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 161
          },
          __self: this
        }, __jsx("div", {
          "class": "media-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 162
          },
          __self: this
        }, __jsx("div", {
          "class": "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 163
          },
          __self: this
        }, __jsx("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        }, __jsx("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 165
          },
          __self: this
        }, "Tip: "), " If you have multiple polls you can easily organize and manage them with a free Xoyondo account.", ' ', __jsx("a", {
          href: "/register",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 167
          },
          __self: this
        }, "Sign up!"))))))), __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }))), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 177
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 178
          },
          __self: this
        })));
      } else if (this.state.whichPage === 1) {
        return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 184
          },
          __self: this
        }, __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 185
          },
          __self: this
        }), __jsx("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 186
          },
          __self: this
        }), __jsx("p", {
          className: "title has-text-link has-text-centered has-text-weight-normal",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 187
          },
          __self: this
        }, "Choose your dates"), __jsx("div", {
          className: "columns has-text-centered",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 188
          },
          __self: this
        }, __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 189
          },
          __self: this
        }), __jsx("div", {
          className: "column is-4 has-background-white-ter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, __jsx("a", {
          className: "btn",
          onClick: this.setWhichSection,
          id: "0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: this
        }, "calendar")), __jsx("div", {
          className: "column is-4 has-background-white-ter",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, __jsx("a", {
          className: "btn",
          onClick: this.setWhichSection,
          id: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, "free text")), __jsx("div", {
          className: "column",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        })), this.state.whichSection === 0 ? __jsx(_components_Date_Calendar__WEBPACK_IMPORTED_MODULE_12__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 203
          },
          __self: this
        }) : __jsx(_components_Date_FreeText__WEBPACK_IMPORTED_MODULE_11__["default"], {
          deneme: this.setPossibleDates,
          post_func: this.postOperation,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 205
          },
          __self: this
        }));
      }
    }
  }]);

  return Meeting;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



/***/ })

})
//# sourceMappingURL=meeting.js.e94d640714c7abfe1689.hot-update.js.map