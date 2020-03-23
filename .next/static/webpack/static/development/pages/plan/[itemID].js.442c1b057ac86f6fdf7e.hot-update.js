webpackHotUpdate("static/development/pages/plan/[itemID].js",{

/***/ "./pages/plan/[itemID].js":
/*!********************************!*\
  !*** ./pages/plan/[itemID].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/home/abugra/Desktop/MeetingPlanner-client/pages/plan/[itemID].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var ItemDetailsPage = function ItemDetailsPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var itemID = router.query.itemID;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      itemDetails = _useState[0],
      setItemDetails = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      partipicantName = _useState2[0],
      setPartipicantName = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      optionsSelected = _useState3[0],
      setOptionsSelected = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log("bug test");
    getPlan();
  }, []); // use getinitialprops instead useeffect

  var getPlan = function getPlan() {
    var doc;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function getPlan$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_config__WEBPACK_IMPORTED_MODULE_5__["default"].get("api/freeone", {
              params: {
                itemID: itemID
              }
            }));

          case 2:
            doc = _context.sent;
            setItemDetails(doc.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  var postParticipant = function postParticipant() {
    var doc;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function postParticipant$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.awrap(_config__WEBPACK_IMPORTED_MODULE_5__["default"].post("api/participant", {
              partipicantName: partipicantName,
              optionsSelected: optionsSelected
            }, {
              params: {
                itemID: itemID
              }
            }));

          case 2:
            doc = _context2.sent;
            // const doc = await axiosInstance.post('api/participant', { params: { itemID } });
            console.log(doc);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };

  var checkboxTest = function checkboxTest(e) {
    var tempOptionsSelected, check;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.async(function checkboxTest$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!e.target.checked) {
              _context3.next = 3;
              break;
            }

            setOptionsSelected([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(optionsSelected), [e.target.id]));
            return _context3.abrupt("return");

          case 3:
            tempOptionsSelected = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(optionsSelected);
            check = tempOptionsSelected.indexOf(e.target.id);
            if (check > -1) tempOptionsSelected.splice(check, 1);
            setOptionsSelected(tempOptionsSelected);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    className: "is-fullwidth",
    style: {
      padding: ".5rem",
      backgroundColor: "#C8E4FF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("p", {
    onClick: function onClick() {
      console.log(optionsSelected);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Poll by ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, itemDetails.nameGenerater))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("div", {
    className: "column is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("p", {
    className: "title has-text-info has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, itemDetails.boardTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, itemDetails.description ? itemDetails.description : "Please indicate when you are available. Then click 'Save'."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx("table", {
    className: "table is-bordered is-striped is-narrow is-hoverable is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("th", {
    style: {
      border: "none"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), itemDetails.possibleDates ? itemDetails.possibleDates.map(function (element, index) {
    return __jsx("th", {
      className: "has-background-grey-lighter has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, element);
  }) : null), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("tr", {
    className: "be-first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx("td", {
    className: "has-background-primary has-text-white",
    colSpan: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Be the first to vote in this poll!")), __jsx("tr", {
    style: {
      backgroundColor: "#C8E4FF"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx("td", {
    style: {
      borderColor: "white"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx("div", {
    "class": "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("div", {
    "class": "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("input", {
    "class": "input is-primary",
    type: "text",
    placeholder: "Your name",
    onChange: function onChange(e) {
      setPartipicantName(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  })))), itemDetails.possibleDates ? itemDetails.possibleDates.map(function (element, index) {
    return __jsx("td", {
      style: {
        borderColor: "white"
      },
      className: "has-text-centered",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("label", {
      "class": "checkbox",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("input", {
      type: "checkbox",
      id: index,
      onChange: checkboxTest,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    })));
  }) : null))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx("a", {
    className: "button is-link has-text-right",
    onClick: postParticipant,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Save")), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx("div", {
    className: "column is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("div", {
    className: "column is-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "x"))), __jsx("div", {
    className: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDetailsPage); // 5e708dce790a493928aac6f0

/***/ })

})
//# sourceMappingURL=[itemID].js.442c1b057ac86f6fdf7e.hot-update.js.map