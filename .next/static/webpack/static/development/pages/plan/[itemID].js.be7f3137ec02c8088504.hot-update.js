webpackHotUpdate("static\\development\\pages\\plan\\[itemID].js",{

/***/ "./pages/plan/[itemID].js":
/*!********************************!*\
  !*** ./pages/plan/[itemID].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "C:\\Users\\Ahmet Bugra Cakici\\Desktop\\MeetingPlaner-client\\pages\\plan\\[itemID].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var ItemDetailsPage = function ItemDetailsPage() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var itemID = router.query.itemID;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      itemDetails = _useState[0],
      setItemDetails = _useState[1];

  var getPlan = function getPlan() {
    // const doc = await axiosInstance.get('api', { params: { itemID } });
    // setItemDetails(doc.data);
    _config__WEBPACK_IMPORTED_MODULE_3__["default"].get('api', {
      params: {
        itemID: itemID
      }
    }).then(function (res) {
      setItemDetails(res.data);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getPlan();
  }, []);

  var tester = function tester() {
    itemDetails.possibleDates.forEach(function (element) {
      console.log(element);
    });
  };

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, itemID), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
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
      lineNumber: 37
    },
    __self: this
  }, __jsx("p", {
    onClick: tester,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Poll by ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, itemDetails.nameGenerater))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    className: "columns",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "column is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("p", {
    className: "title has-text-info has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, itemDetails.boardTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, itemDetails.description ? itemDetails.description : "Please indicate when you are available. Then click 'Save'."), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("table", {
    className: "table is-bordered is-striped is-narrow is-hoverable is-fullwidth",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("th", {
    style: {
      border: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("th", {
    className: "has-background-grey-lighter has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "12 Mart")), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("tr", {
    className: "be-first",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("td", {
    className: "has-background-primary has-text-white",
    colSpan: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Be the first to vote in this poll!")), __jsx("tr", {
    style: {
      backgroundColor: '#C8E4FF'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("td", {
    style: {
      borderColor: 'white'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("div", {
    "class": "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    "class": "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("input", {
    "class": "input is-primary",
    type: "text",
    placeholder: "Your name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })))), __jsx("td", {
    style: {
      borderColor: 'white'
    },
    className: "has-text-centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("label", {
    "class": "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("input", {
    type: "checkbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))))))), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx("div", {
    className: "column is-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("div", {
    className: "column is-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "x"))), __jsx("div", {
    className: "column is-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemDetailsPage); // 5e708dce790a493928aac6f0

/***/ })

})
//# sourceMappingURL=[itemID].js.be7f3137ec02c8088504.hot-update.js.map