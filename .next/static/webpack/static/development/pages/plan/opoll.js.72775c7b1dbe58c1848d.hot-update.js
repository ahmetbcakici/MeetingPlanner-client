webpackHotUpdate("static\\development\\pages\\plan\\opoll.js",{

/***/ "./components/MoreOptions.js":
/*!***********************************!*\
  !*** ./components/MoreOptions.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ahmet Bugra Cakici\\Desktop\\MeetingPlaner-client\\components\\MoreOptions.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var options = _ref.options,
      apoll = _ref.apoll;

  var handleMoreOptions = function handleMoreOptions() {
    styleClass === 'passive' ? setStyleClass('active') : setStyleClass('passive');
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('passive'),
      styleClass = _useState[0],
      setStyleClass = _useState[1];

  return __jsx("div", {
    style: {
      paddingBottom: '1rem'
    },
    className: "jsx-521910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-521910976" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("label", {
    style: {
      cursor: 'pointer',
      userSelect: 'none'
    },
    id: "firstMoreOptions",
    onClick: handleMoreOptions,
    className: "jsx-521910976" + " " + "label has-text-weight-normal has-text-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-521910976" + " " + ((styleClass === 'passive' ? 'fas fa-caret-right' : 'fas fa-caret-down') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), "\xA0 More options:")), __jsx("div", {
    className: "jsx-521910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    style: {
      transition: '250ms'
    },
    className: "jsx-521910976" + " " + (styleClass || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, apoll ? __jsx("div", {
    className: "jsx-521910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-521910976" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-521910976" + " " + "label has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, " General subject of your polls: "), __jsx("div", {
    className: "jsx-521910976" + " " + "control",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    className: "jsx-521910976" + " " + "input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-521910976" + " " + "field",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-521910976" + " " + "label has-text-weight-normal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Additional descriptions"), __jsx("div", {
    className: "jsx-521910976" + " " + "control has-icons-left has-icons-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("textarea", {
    rows: "2",
    className: "jsx-521910976" + " " + "textarea",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }))), __jsx("label", {
    style: {
      paddingBottom: '.5rem'
    },
    className: "jsx-521910976" + " " + "checkbox is-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\u2003", __jsx("input", {
    type: "checkbox",
    className: "jsx-521910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), "\xA0", item)) : options.map(function (item) {
    return __jsx("label", {
      style: {
        paddingBottom: '.5rem'
      },
      className: "jsx-521910976" + " " + "checkbox is-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "\u2003", __jsx("input", {
      type: "checkbox",
      className: "jsx-521910976",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), "\xA0", item);
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "521910976",
    __self: this
  }, ".passive.jsx-521910976{visibility:hidden;opacity:0;height:0px;}.active.jsx-521910976{visibility:visible;opacity:1;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWhtZXQgQnVncmEgQ2FraWNpXFxEZXNrdG9wXFxNZWV0aW5nUGxhbmVyLWNsaWVudFxcY29tcG9uZW50c1xcTW9yZU9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0VlLEFBR3dCLEFBTUMsa0JBTFQsQ0FNQSxTQUxDLENBTUMsVUFMYixFQU1BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWhtZXQgQnVncmEgQ2FraWNpXFxEZXNrdG9wXFxNZWV0aW5nUGxhbmVyLWNsaWVudFxcY29tcG9uZW50c1xcTW9yZU9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG9wdGlvbnMsIGFwb2xsIH0pID0+IHtcclxuXHRjb25zdCBoYW5kbGVNb3JlT3B0aW9ucyA9ICgpID0+IHtcclxuXHRcdHN0eWxlQ2xhc3MgPT09ICdwYXNzaXZlJyA/IHNldFN0eWxlQ2xhc3MoJ2FjdGl2ZScpIDogc2V0U3R5bGVDbGFzcygncGFzc2l2ZScpO1xyXG5cdH07XHJcblxyXG5cdGNvbnN0IFtzdHlsZUNsYXNzLCBzZXRTdHlsZUNsYXNzXSA9IHVzZVN0YXRlKCdwYXNzaXZlJyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICcxcmVtJyB9fT5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG5cdFx0XHRcdDxsYWJlbFxyXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibGFiZWwgaGFzLXRleHQtd2VpZ2h0LW5vcm1hbCBoYXMtdGV4dC1saW5rXCJcclxuXHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInLCB1c2VyU2VsZWN0OiAnbm9uZScgfX1cclxuXHRcdFx0XHRcdGlkPVwiZmlyc3RNb3JlT3B0aW9uc1wiXHJcblx0XHRcdFx0XHRvbkNsaWNrPXtoYW5kbGVNb3JlT3B0aW9uc30+XHJcblx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e3N0eWxlQ2xhc3MgPT09ICdwYXNzaXZlJyA/ICdmYXMgZmEtY2FyZXQtcmlnaHQnIDogJ2ZhcyBmYS1jYXJldC1kb3duJ30+PC9pPlxyXG5cdFx0XHRcdFx0Jm5ic3A7IE1vcmUgb3B0aW9uczpcclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGRpdiBzdHlsZT17eyB0cmFuc2l0aW9uOiAnMjUwbXMnIH19IGNsYXNzTmFtZT17c3R5bGVDbGFzc30+XHJcblx0XHRcdFx0XHR7YXBvbGwgPyAoXHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaWVsZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImxhYmVsIGhhcy10ZXh0LXdlaWdodC1ub3JtYWxcIj4gR2VuZXJhbCBzdWJqZWN0IG9mIHlvdXIgcG9sbHM6IDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRyb2xcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cImlucHV0XCIgdHlwZT1cInRleHRcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJsYWJlbCBoYXMtdGV4dC13ZWlnaHQtbm9ybWFsXCI+QWRkaXRpb25hbCBkZXNjcmlwdGlvbnM8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0IGhhcy1pY29ucy1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dGFyZWEgY2xhc3NOYW1lPVwidGV4dGFyZWFcIiByb3dzPVwiMlwiPjwvdGV4dGFyZWE+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGlzLWJsb2NrXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJy41cmVtJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdCZlbXNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQmbmJzcDt7aXRlbX1cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdG9wdGlvbnMubWFwKGl0ZW0gPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJjaGVja2JveCBpcy1ibG9ja1wiIHN0eWxlPXt7IHBhZGRpbmdCb3R0b206ICcuNXJlbScgfX0+XHJcblx0XHRcdFx0XHRcdFx0XHQmZW1zcDtcclxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0Jm5ic3A7e2l0ZW19XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0KSlcclxuXHRcdFx0XHRcdCl9XHJcblxyXG5cdFx0XHRcdFx0ey8qIHtvcHRpb25zLm1hcChpdGVtID0+IChcclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGlzLWJsb2NrXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJy41cmVtJyB9fT5cclxuXHRcdFx0XHRcdFx0XHQmZW1zcDtcclxuXHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuXHRcdFx0XHRcdFx0XHQmbmJzcDt7aXRlbX1cclxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdCkpfSAqL31cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LnBhc3NpdmUge1xyXG5cdFx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdFx0XHRcdGhlaWdodDogMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmFjdGl2ZSB7XHJcblx0XHRcdFx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Ahmet Bugra Cakici\\\\Desktop\\\\MeetingPlaner-client\\\\components\\\\MoreOptions.js */"));
});

/***/ })

})
//# sourceMappingURL=opoll.js.72775c7b1dbe58c1848d.hot-update.js.map