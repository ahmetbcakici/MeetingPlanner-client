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
      lineNumber: 24
    },
    __self: this
  }, type ? __jsx("h1", {
    className: "jsx-521910976",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "sadds") : options.map(function (item) {
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
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "521910976",
    __self: this
  }, ".passive.jsx-521910976{visibility:hidden;opacity:0;height:0px;}.active.jsx-521910976{visibility:visible;opacity:1;height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQWhtZXQgQnVncmEgQ2FraWNpXFxEZXNrdG9wXFxNZWV0aW5nUGxhbmVyLWNsaWVudFxcY29tcG9uZW50c1xcTW9yZU9wdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENlLEFBR3dCLEFBTUMsa0JBTFQsQ0FNQSxTQUxDLENBTUMsVUFMYixFQU1BIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQWhtZXQgQnVncmEgQ2FraWNpXFxEZXNrdG9wXFxNZWV0aW5nUGxhbmVyLWNsaWVudFxcY29tcG9uZW50c1xcTW9yZU9wdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG9wdGlvbnMsIHR5cGUgfSkgPT4ge1xyXG5cdGNvbnN0IGhhbmRsZU1vcmVPcHRpb25zID0gKCkgPT4ge1xyXG5cdFx0c3R5bGVDbGFzcyA9PT0gJ3Bhc3NpdmUnID8gc2V0U3R5bGVDbGFzcygnYWN0aXZlJykgOiBzZXRTdHlsZUNsYXNzKCdwYXNzaXZlJyk7XHJcblx0fTtcclxuXHJcblx0Y29uc3QgW3N0eWxlQ2xhc3MsIHNldFN0eWxlQ2xhc3NdID0gdXNlU3RhdGUoJ3Bhc3NpdmUnKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXYgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzFyZW0nIH19PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XHJcblx0XHRcdFx0PGxhYmVsXHJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJsYWJlbCBoYXMtdGV4dC13ZWlnaHQtbm9ybWFsIGhhcy10ZXh0LWxpbmtcIlxyXG5cdFx0XHRcdFx0c3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicsIHVzZXJTZWxlY3Q6ICdub25lJyB9fVxyXG5cdFx0XHRcdFx0aWQ9XCJmaXJzdE1vcmVPcHRpb25zXCJcclxuXHRcdFx0XHRcdG9uQ2xpY2s9e2hhbmRsZU1vcmVPcHRpb25zfT5cclxuXHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17c3R5bGVDbGFzcyA9PT0gJ3Bhc3NpdmUnID8gJ2ZhcyBmYS1jYXJldC1yaWdodCcgOiAnZmFzIGZhLWNhcmV0LWRvd24nfT48L2k+XHJcblx0XHRcdFx0XHQmbmJzcDsgTW9yZSBvcHRpb25zOlxyXG5cdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7IHRyYW5zaXRpb246ICcyNTBtcycgfX0gY2xhc3NOYW1lPXtzdHlsZUNsYXNzfT5cclxuXHRcdFx0XHRcdHt0eXBlID8gKFxyXG5cdFx0XHRcdFx0XHQ8aDE+c2FkZHM8L2gxPlxyXG5cdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0b3B0aW9ucy5tYXAoaXRlbSA9PiAoXHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cImNoZWNrYm94IGlzLWJsb2NrXCIgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJy41cmVtJyB9fT5cclxuXHRcdFx0XHRcdFx0XHRcdCZlbXNwO1xyXG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQmbmJzcDt7aXRlbX1cclxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHQpKVxyXG5cdFx0XHRcdFx0KX1cclxuXHJcblx0XHRcdFx0XHR7Lyoge29wdGlvbnMubWFwKGl0ZW0gPT4gKFxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwiY2hlY2tib3ggaXMtYmxvY2tcIiBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnLjVyZW0nIH19PlxyXG5cdFx0XHRcdFx0XHRcdCZlbXNwO1xyXG5cdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG5cdFx0XHRcdFx0XHRcdCZuYnNwO3tpdGVtfVxyXG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdFx0KSl9ICovfVxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0XHQucGFzc2l2ZSB7XHJcblx0XHRcdFx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAwO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAwcHg7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuYWN0aXZlIHtcclxuXHRcdFx0XHRcdHZpc2liaWxpdHk6IHZpc2libGU7XHJcblx0XHRcdFx0XHRvcGFjaXR5OiAxO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0YH08L3N0eWxlPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Ahmet Bugra Cakici\\\\Desktop\\\\MeetingPlaner-client\\\\components\\\\MoreOptions.js */"));
});

/***/ })

})
//# sourceMappingURL=opoll.js.df110027095c795b7c83.hot-update.js.map