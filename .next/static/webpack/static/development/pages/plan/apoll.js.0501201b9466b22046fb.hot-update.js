webpackHotUpdate("static\\development\\pages\\plan\\apoll.js",{

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
      type = _ref.type;

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
      lineNumber: 25
    },
    __self: this
  }, type, " ? ", __jsx("h1", {
    className: "jsx-521910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "sadds"), " : (", options.map(function (item) {
    return __jsx("label", {
      style: {
        paddingBottom: '.5rem'
      },
      className: "jsx-521910976" + " " + "checkbox is-block",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, "\u2003", __jsx("input", {
      type: "checkbox",
      className: "jsx-521910976",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), "\xA0", item);
  }), ")")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "521910976",
    __self: this
  }, ".passive.jsx-521910976{visibility:hidden;opacity:0;height:0px;}.active.jsx-521910976{visibility:visible;opacity:1;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWhtZXQgQnVncmEgQ2FraWNpXFxEZXNrdG9wXFxNZWV0aW5nUGxhbmVyLWNsaWVudFxcY29tcG9uZW50c1xcTW9yZU9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NlLEFBR3dCLEFBTUMsa0JBTFQsQ0FNQSxTQUxDLENBTUMsVUFMYixFQU1BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWhtZXQgQnVncmEgQ2FraWNpXFxEZXNrdG9wXFxNZWV0aW5nUGxhbmVyLWNsaWVudFxcY29tcG9uZW50c1xcTW9yZU9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG9wdGlvbnMsdHlwZSB9KSA9PiB7XHJcblx0Y29uc3QgaGFuZGxlTW9yZU9wdGlvbnMgPSAoKSA9PiB7XHJcblx0XHRzdHlsZUNsYXNzID09PSAncGFzc2l2ZScgPyBzZXRTdHlsZUNsYXNzKCdhY3RpdmUnKSA6IHNldFN0eWxlQ2xhc3MoJ3Bhc3NpdmUnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBbc3R5bGVDbGFzcywgc2V0U3R5bGVDbGFzc10gPSB1c2VTdGF0ZSgncGFzc2l2ZScpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnMXJlbScgfX0+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cclxuXHRcdFx0XHQ8bGFiZWxcclxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImxhYmVsIGhhcy10ZXh0LXdlaWdodC1ub3JtYWwgaGFzLXRleHQtbGlua1wiXHJcblx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJywgdXNlclNlbGVjdDogJ25vbmUnIH19XHJcblx0XHRcdFx0XHRpZD1cImZpcnN0TW9yZU9wdGlvbnNcIlxyXG5cdFx0XHRcdFx0b25DbGljaz17aGFuZGxlTW9yZU9wdGlvbnN9PlxyXG5cdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtzdHlsZUNsYXNzID09PSAncGFzc2l2ZScgPyAnZmFzIGZhLWNhcmV0LXJpZ2h0JyA6ICdmYXMgZmEtY2FyZXQtZG93bid9PjwvaT5cclxuXHRcdFx0XHRcdCZuYnNwOyBNb3JlIG9wdGlvbnM6XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDxkaXYgc3R5bGU9e3sgdHJhbnNpdGlvbjogJzI1MG1zJyB9fSBjbGFzc05hbWU9e3N0eWxlQ2xhc3N9PlxyXG5cdFx0XHRcdFx0e3R5cGV9ID8gPGgxPnNhZGRzPC9oMT4gOiAoXHJcblxyXG5cdFx0XHRcdFx0e29wdGlvbnMubWFwKGl0ZW0gPT4gKFxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggaXMtYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnLjVyZW0nIH19PlxyXG5cdFx0XHRcdFx0XHRcdCZlbXNwO1xyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdCZuYnNwO3tpdGVtfVxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0KSl9XHJcblxyXG5cdFx0XHRcdFx0KVxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblx0XHRcdFx0LnBhc3NpdmUge1xyXG5cdFx0XHRcdFx0dmlzaWJpbGl0eTogaGlkZGVuO1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMDtcclxuXHRcdFx0XHRcdGhlaWdodDogMHB4O1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmFjdGl2ZSB7XHJcblx0XHRcdFx0XHR2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG5cdFx0XHRcdFx0b3BhY2l0eTogMTtcclxuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdGB9PC9zdHlsZT5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Ahmet Bugra Cakici\\\\Desktop\\\\MeetingPlaner-client\\\\components\\\\MoreOptions.js */"));
});

/***/ })

})
//# sourceMappingURL=apoll.js.0501201b9466b22046fb.hot-update.js.map