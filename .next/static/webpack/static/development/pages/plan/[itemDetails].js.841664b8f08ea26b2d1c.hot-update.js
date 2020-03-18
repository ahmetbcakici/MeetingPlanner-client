webpackHotUpdate("static\\development\\pages\\plan\\[itemDetails].js",{

/***/ "./pages/plan/[itemDetails].js":
/*!*************************************!*\
  !*** ./pages/plan/[itemDetails].js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");

var _jsxFileName = "C:\\Users\\Ahmet Bugra Cakici\\Desktop\\MeetingPlaner-client\\pages\\plan\\[itemDetails].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var ItemDetailsPage = function ItemDetailsPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var itemDetails = router.query.itemDetails;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      itemDetailsObject = _useState[0],
      setItemDetailsObject = _useState[1];

  return __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, itemDetails);

  var getPlan = function getPlan() {
    var doc;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPlan$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(router.query.id);
            console.log(router.query);
            console.log(router);
            console.log(router);
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_config__WEBPACK_IMPORTED_MODULE_4__["default"].get('api', {
              params: {
                itemID: router.query.id
              }
            }));

          case 6:
            doc = _context.sent;
            setItemDetails(doc.data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getPlan();
  }, []);

  var tester = function tester() {
    itemDetailsObject.possibleDates.forEach(function (element) {
      console.log(element);
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    className: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "is-fullwidth",
    style: {
      padding: '.5rem',
      backgroundColor: '#C8E4FF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("p", {
    onClick: tester,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Poll by ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, itemDetailsObject.nameGenerater))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "column is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("p", {
    className: "title has-text-info has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, itemDetailsObject.boardTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, itemDetailsObject.description ? itemDetailsObject.description : "Please indicate when you are available. Then click 'Save'."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("table", {
    className: "table is-bordered is-striped is-narrow is-hoverable is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("th", {
    style: {
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("th", {
    className: "has-background-grey-lighter has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "12 Mart")), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("tr", {
    className: "be-first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("td", {
    className: "has-background-primary has-text-white",
    colSpan: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Be the first to vote in this poll!")), __jsx("tr", {
    style: {
      backgroundColor: '#C8E4FF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("td", {
    style: {
      borderColor: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    "class": "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    "class": "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("input", {
    "class": "input is-primary",
    type: "text",
    placeholder: "Your name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })))), __jsx("td", {
    style: {
      borderColor: 'white'
    },
    className: "has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("label", {
    "class": "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))))))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), __jsx("div", {
    className: "column is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), __jsx("div", {
    className: "column is-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "x"))), __jsx("div", {
    className: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDetailsPage); // 5e708dce790a493928aac6f0

/***/ })

})
//# sourceMappingURL=[itemDetails].js.841664b8f08ea26b2d1c.hot-update.js.map