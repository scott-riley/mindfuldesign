module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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

/***/ "./components/GlobalStyles.js":
/*!************************************!*\
  !*** ./components/GlobalStyles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\components\\GlobalStyles.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3594675873",
    css: "*{box-sizing:border-box;}body{background:#80E0A7;font-family:skolar-sans-latin,sans-serif;font-weight:300;margin:0;padding:0;overflow-x:hidden;}h1,h2,h3{font-family:gastromond,serif;}@-webkit-keyframes dash{1%{opacity:1;}100%{stroke-dashoffset:0;opacity:1;}}@keyframes dash{1%{opacity:1;}100%{stroke-dashoffset:0;opacity:1;}}@-webkit-keyframes hi{100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}@keyframes hi{100%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;}}[id^=scribbles] *{stroke-dasharray:1000;stroke-dashoffset:1000;-webkit-animation:dash 10s linear forwards;animation:dash 10s linear forwards;opacity:0;}[id^=leftTree]{-webkit-transform:translateY(-40px);-ms-transform:translateY(-40px);transform:translateY(-40px);opacity:.5;-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation:hi 1s ease-out forwards;animation:hi 1s ease-out forwards;}[id^=rightTree___]{-webkit-transform:translateY(40px);-ms-transform:translateY(40px);transform:translateY(40px);opacity:.5;-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation:hi 1s ease-out forwards;animation:hi 1s ease-out forwards;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2NvdHQuREVTS1RPUC0zRk9BTTMyXFxXb3JrXFxtaW5kZnVsZGVzaWduXFxjb21wb25lbnRzXFxHbG9iYWxTdHlsZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ3FCLEFBRzZCLEFBR0gsQUFRVyxBQUlsQixBQUdVLEFBTUksQUFLSixBQU1NLEFBTUQsVUF6QjNCLFNBWjBDLENBZTlCLEVBbEJkLEFBNkJ5QixPQWxCekIsQ0FRRSxlQVdtQyxlQTFCbkIsZ0JBQ1AsUUFtQkcsQ0FsQkYsUUFtQ0MsQ0FoQlgsQ0FsQmtCLENBNEJQLFFBT1EsR0FOQSxNQTVCckIsVUF1QlksVUFDWixpQkFXb0MsR0FOQSx5RUFPcEMsR0FOQSIsImZpbGUiOiJDOlxcVXNlcnNcXFNjb3R0LkRFU0tUT1AtM0ZPQU0zMlxcV29ya1xcbWluZGZ1bGRlc2lnblxcY29tcG9uZW50c1xcR2xvYmFsU3R5bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAqIHtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuICAgIGJvZHkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjODBFMEE3O1xyXG4gICAgICBmb250LWZhbWlseTogc2tvbGFyLXNhbnMtbGF0aW4sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgaDEsIGgyLCBoMyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBnYXN0cm9tb25kLCBzZXJpZjsgXHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgICAxJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIGhpIHtcclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFtpZF49c2NyaWJibGVzXSAqIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XHJcbiAgICAgIGFuaW1hdGlvbjogZGFzaCAxMHMgbGluZWFyIGZvcndhcmRzO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgW2lkXj1sZWZ0VHJlZV0ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwcHgpO1xyXG4gICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcclxuICAgICAgYW5pbWF0aW9uOiBoaSAxcyBlYXNlLW91dCBmb3J3YXJkcztcclxuICAgIH1cclxuICAgIFtpZF49cmlnaHRUcmVlX19fXSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAgIGFuaW1hdGlvbjogaGkgMXMgZWFzZS1vdXQgZm9yd2FyZHM7XHJcbiAgICB9XHJcbiAgYH08L3N0eWxlPlxyXG4pIl19 */\n/*@ sourceURL=C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\components\\GlobalStyles.js */",
    __self: this
  });
});

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\components\\Header.js";



var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3433701223" + " " + "mainHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3433701223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3433701223" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Mindful Design"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-3433701223" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3433701223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "The book")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3433701223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "The talk"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: "jsx-3433701223",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "The workshop"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3433701223",
    css: ".mainHeader.jsx-3433701223{position:fixed;top:0;width:100vw;box-shadow:0 2px 3px rgba(0,0,0,.12);background:linear-gradient(to right,#80E0A7,#5DDFB3);z-index:999;}nav.jsx-3433701223{max-width:1020px;margin:auto;display:grid;grid-template-columns:200px 1fr;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.links.jsx-3433701223{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;list-style:none;}.links.jsx-3433701223 li.jsx-3433701223{margin-left:20px;font-family:skolar-sans-latin-compressed,sans-serif;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;font-size:.8rem;}.links.jsx-3433701223 li.jsx-3433701223 a{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.logo.jsx-3433701223{font-family:gastromond,serif;font-size:1.2rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2NvdHQuREVTS1RPUC0zRk9BTTMyXFxXb3JrXFxtaW5kZnVsZGVzaWduXFxjb21wb25lbnRzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JnQixBQUd3QixBQVFFLEFBT0osQUFLSSxBQU9ILEFBSWdCLGNBSFQsQ0EzQmYsRUFRTSxBQVl5QyxJQW5CekMsUUFRQyxBQXNCSSxJQTdCb0IsU0FRTCxJQXNCbEMsa0JBSkEsS0FQMkIsQ0FsQjhCLElBUXBDLEFBSU0sb0JBT04sNkJBbEJQLFlBQ2QsZ0NBT0EsSUFJa0IsZ0JBQ2xCLEFBTWtCLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXFNjb3R0LkRFU0tUT1AtM0ZPQU0zMlxcV29ya1xcbWluZGZ1bGRlc2lnblxcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbGlua1N0eWxlID0ge1xyXG4gIG1hcmdpblJpZ2h0OiAxNVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJtYWluSGVhZGVyXCI+XHJcbiAgICA8bmF2PlxyXG4gICAgICA8YSBjbGFzc05hbWU9XCJsb2dvXCI+TWluZGZ1bCBEZXNpZ248L2E+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIFRoZSBib29rXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgICA8bGk+VGhlIHRhbGs8L2xpPlxyXG4gICAgICAgIDxsaT5UaGUgd29ya3Nob3A8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5tYWluSGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzgwRTBBNywgIzVEREZCMyk7XHJcbiAgICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICB9XHJcbiAgICAgIG5hdiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICAubGlua3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5saW5rcyBsaSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNrb2xhci1zYW5zLWxhdGluLWNvbXByZXNzZWQsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmxpbmtzIGxpIDpnbG9iYWwoYSkge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAubG9nbyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IGdhc3Ryb21vbmQsIHNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\components\\Header.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Illo.js":
/*!****************************!*\
  !*** ./components/Illo.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GlobalStyles */ "./components/GlobalStyles.js");
var _jsxFileName = "C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\components\\Layout.js";





var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/wjd0jax.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_GlobalStyles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Panel.js":
/*!*****************************!*\
  !*** ./components/Panel.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\components\\Panel.js";


/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1912714946" + " " + "panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1912714946" + " " + "panelImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: props.image,
    className: "jsx-1912714946",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1912714946" + " " + "panelContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "jsx-1912714946" + " " + "subTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Chapter ", props.c), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-1912714946" + " " + "panelTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1912714946",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1912714946" + " " + "chapterNo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "0", props.c), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1912714946",
    css: ".panel.jsx-1912714946{background:white;border-radius:5px;display:grid;grid-template-columns:4fr 5fr;grid-gap:60px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;padding-right:40px;}img.jsx-1912714946{width:100%;border-top-left-radius:5px;border-bottom-left-radius:5px;display:block;}.subTitle.jsx-1912714946{color:#F655A8;font-family:skolar-sans-latin,sans-serif;font-weight:900;font-style:italic;font-size:.8rem;text-transform:uppercase;-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;}h2.jsx-1912714946{margin-top:0;padding-top:0;font-size:2.1rem;}.chapterNo.jsx-1912714946{position:absolute;right:20px;bottom:20px;color:#F655A8;font-family:gastromond,serif;font-size:3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2NvdHQuREVTS1RPUC0zRk9BTTMyXFxXb3JrXFxtaW5kZnVsZGVzaWduXFxjb21wb25lbnRzXFxQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXZ0IsQUFHMEIsQUFVTixBQU1HLEFBU0QsQUFLSyxXQW5CUyxFQWViLENBVDRCLEdBaEJ4QixDQThCUCxTQUpNLEVBS0wsTUE5QkMsR0FVaUIsR0FxQmhCLEdBTGhCLElBekJnQyxPQWVkLEFBZ0JjLGFBckJoQixHQU1JLE9BZkosSUFVaEIsRUFxQmlCLEtBZkMsR0FmRyxPQStCckIsTUFmMkIseUJBQ04sdURBaEJELGtCQUNDLG1CQUNyQixDQWVBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcU2NvdHQuREVTS1RPUC0zRk9BTTMyXFxXb3JrXFxtaW5kZnVsZGVzaWduXFxjb21wb25lbnRzXFxQYW5lbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxJbWdcIj5cclxuICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsQ29udGVudFwiPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzdWJUaXRsZVwiPkNoYXB0ZXIge3Byb3BzLmN9PC9zcGFuPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwicGFuZWxUaXRsZVwiPntwcm9wcy50aXRsZX08L2gyPlxyXG4gICAgICA8cD57cHJvcHMuY2hpbGRyZW59PC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXB0ZXJOb1wiPjB7cHJvcHMuY308L2Rpdj5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLnBhbmVsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciA1ZnI7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDYwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgICAgLnN1YlRpdGxlIHtcclxuICAgICAgICBjb2xvcjogI0Y2NTVBODtcclxuICAgICAgICBmb250LWZhbWlseTogc2tvbGFyLXNhbnMtbGF0aW4sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XHJcbiAgICAgIH1cclxuICAgICAgLmNoYXB0ZXJObyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMjBweDtcclxuICAgICAgICBjb2xvcjogI0Y2NTVBODtcclxuICAgICAgICBmb250LWZhbWlseTogZ2FzdHJvbW9uZCwgc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbikiXX0= */\n/*@ sourceURL=C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\components\\Panel.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout.js */ "./components/Layout.js");
/* harmony import */ var _components_Illo_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Illo.js */ "./components/Illo.js");
/* harmony import */ var _components_Illo_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_Illo_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Panel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Panel */ "./components/Panel.js");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-inlinesvg */ "react-inlinesvg");
/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\pages\\index.js";






/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-93644836" + " " + "homepage",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-93644836" + " " + "hero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-93644836" + " " + "heroWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-93644836" + " " + "heroImg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_inlinesvg__WEBPACK_IMPORTED_MODULE_5___default.a, {
    src: '/static/mindfulDesignFinal.svg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-93644836" + " " + "heroContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Design for", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), "Real Humans"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    href: "https://geni.us/mindful",
    className: "jsx-93644836" + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Pre-order the book"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-93644836" + " " + "cta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/#learn",
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "What You'll Learn", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    role: "presentation",
    alt: "",
    src: "/static/down-arrow.svg",
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    id: "learn",
    className: "jsx-93644836" + " " + "learn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Attention & Distraction",
    c: "1",
    image: "/static/ch1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Vision, Perception & Aesthetics",
    c: "2",
    image: "/static/ch1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Learning & Memory",
    c: "3",
    image: "/static/ch1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Harmony & Dissonance",
    c: "4",
    image: "/static/ch1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Panel__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Reward & Motiviation",
    c: "5",
    image: "/static/ch1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-93644836",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "A book, a talk and a series of workshops designed to infuse your design process with the understanding and appreciation the human mind deserves. If you want to start integrating into lifestyles instead of interrupting them, Mindful Design is for you.")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "93644836",
    css: ".hero.jsx-93644836{background:linear-gradient(-22deg,#80E0A7,#2BC0C4);box-shadow:0 3px 57px rgba(0,0,0,.12);border-bottom-left-radius:50%;border-bottom-right-radius:50%;-webkit-transform:scaleX(1.5);-ms-transform:scaleX(1.5);transform:scaleX(1.5);width:100vw;background-repeat:no-repeat;position:relative;padding-top:3rem;}.heroWrapper.jsx-93644836{-webkit-transform:scaleX(.7);-ms-transform:scaleX(.7);transform:scaleX(.7);width:100vw;margin:auto;max-width:1440px;margin:auto;padding-top:8rem;display:grid;grid-template-columns:5fr 4fr;grid-gap:7vw;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:8rem 5vw 10vh;}h1.jsx-93644836{color:white;font-size:3.25rem;margin-bottom:.5rem;}p.jsx-93644836{margin-top:0;padding-right:1rem;padding-bottom:1.5rem;max-width:420px;}.button.jsx-93644836{padding:1rem;background:black;border-radius:4px;color:#BEFFD8;-webkit-text-decoration:none;text-decoration:none;font-family:gastromond,serif;font-size:1.2rem;}.cta.jsx-93644836{text-align:center;width:100%;-webkit-transform:scaleX(.7);-ms-transform:scaleX(.7);transform:scaleX(.7);}.cta.jsx-93644836 a.jsx-93644836{padding:1rem 2rem;border-radius:999px;font-family:skolar-sans-latin-compressed,sans-serif;background:black;color:#80E0A7;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;font-size:.8rem;margin-top:.2rem;}.cta.jsx-93644836 img.jsx-93644836{margin-left:.5rem;height:.5rem;}.learn.jsx-93644836{max-width:1080px;margin:auto;margin-top:20vh;padding-bottom:40vh;}.learn.jsx-93644836 .panel{margin-bottom:20rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcU2NvdHQuREVTS1RPUC0zRk9BTTMyXFxXb3JrXFxtaW5kZnVsZGVzaWduXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZjLEFBRzBELEFBV2hDLEFBYVQsQUFLQyxBQU1BLEFBU0ssQUFLQSxBQVdBLEFBSUQsQUFNRyxZQTdDRixDQUtDLEFBTUYsSUE2QkwsQ0FwQkQsQUFLUyxBQVdQLEVBVWQsU0F6QnNCLEFBb0JMLENBeENJLEFBV0YsQ0F5Qm5CLENBL0J1QixNQW9CK0IsT0FnQmpDLEdBN0JOLEVBWGYsQ0ExQnVDLEdBK0J0QixRQU9LLEdBNkJ0QixLQW5DQSxLQXJCYSxZQUNBLEVBWGtCLENBa0RiLFNBdENBLEtBaUNsQixHQU1lLEtBYmdCLElBekJsQixHQVptQixFQW1EVixPQXRDSixhQXlCQSxJQXhCSixLQWJTLFFBY1EsQUF3Qi9CLGFBYTBCLGlCQXBDWixRQXFDRyxLQXBDRyxXQXFDRixnQkFwREwsQ0FxRGIsV0FwRDZCLDRCQUNWLGtCQUNELFFBYUssU0FadkIsYUFhQSIsImZpbGUiOiJDOlxcVXNlcnNcXFNjb3R0LkRFU0tUT1AtM0ZPQU0zMlxcV29ya1xcbWluZGZ1bGRlc2lnblxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQuanMnXHJcbmltcG9ydCBJbGxvIGZyb20gJy4uL2NvbXBvbmVudHMvSWxsby5qcydcclxuaW1wb3J0IFBhbmVsIGZyb20gJy4uL2NvbXBvbmVudHMvUGFuZWwnXHJcbmltcG9ydCBTVkcgZnJvbSAncmVhY3QtaW5saW5lc3ZnJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG5cdDxMYXlvdXQ+XHJcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJob21lcGFnZVwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlcm9XcmFwcGVyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlcm9JbWdcIj5cclxuXHRcdFx0XHRcdFx0PFNWR1xyXG5cdFx0XHRcdFx0XHRcdHNyYz17Jy9zdGF0aWMvbWluZGZ1bERlc2lnbkZpbmFsLnN2Zyd9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVyb0NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGgxPkRlc2lnbiBmb3I8YnIgLz5SZWFsIEh1bWFuczwvaDE+XHJcblx0XHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRcdEEgYm9vaywgYSB0YWxrIGFuZCBhIHNlcmllcyBvZiB3b3Jrc2hvcHMgZGVzaWduZWQgdG8gaW5mdXNlIHlvdXIgZGVzaWduIHByb2Nlc3Mgd2l0aCB0aGUgdW5kZXJzdGFuZGluZyBhbmQgYXBwcmVjaWF0aW9uIHRoZSBodW1hbiBtaW5kIGRlc2VydmVzLiBJZiB5b3Ugd2FudCB0byBzdGFydCBpbnRlZ3JhdGluZyBpbnRvIGxpZmVzdHlsZXMgaW5zdGVhZCBvZiBpbnRlcnJ1cHRpbmcgdGhlbSwgTWluZGZ1bCBEZXNpZ24gaXMgZm9yIHlvdS5cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidXR0b25cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9nZW5pLnVzL21pbmRmdWxcIj5cclxuXHRcdFx0XHRcdFx0XHRQcmUtb3JkZXIgdGhlIGJvb2tcclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdGFcIj5cclxuXHRcdFx0XHRcdDxhIGhyZWY9XCIvI2xlYXJuXCI+XHJcblx0XHRcdFx0XHRcdFdoYXQgWW91J2xsIExlYXJuXHJcblx0XHRcdFx0XHRcdDxpbWcgcm9sZT1cInByZXNlbnRhdGlvblwiIGFsdD1cIlwiIHNyYz1cIi9zdGF0aWMvZG93bi1hcnJvdy5zdmdcIiAvPlxyXG5cdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsZWFyblwiIGlkPVwibGVhcm5cIj5cclxuXHRcdFx0XHQ8UGFuZWxcclxuXHRcdFx0XHRcdHRpdGxlPVwiQXR0ZW50aW9uICYgRGlzdHJhY3Rpb25cIlxyXG5cdFx0XHRcdFx0Yz1cIjFcIlxyXG5cdFx0XHRcdFx0aW1hZ2U9XCIvc3RhdGljL2NoMS5qcGdcIlxyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdDxwPlxyXG5cdFx0XHRcdFx0XHRBIGJvb2ssIGEgdGFsayBhbmQgYSBzZXJpZXMgb2Ygd29ya3Nob3BzIGRlc2lnbmVkIHRvIGluZnVzZSB5b3VyIGRlc2lnbiBwcm9jZXNzIHdpdGggdGhlIHVuZGVyc3RhbmRpbmcgYW5kIGFwcHJlY2lhdGlvbiB0aGUgaHVtYW4gbWluZCBkZXNlcnZlcy4gSWYgeW91IHdhbnQgdG8gc3RhcnQgaW50ZWdyYXRpbmcgaW50byBsaWZlc3R5bGVzIGluc3RlYWQgb2YgaW50ZXJydXB0aW5nIHRoZW0sIE1pbmRmdWwgRGVzaWduIGlzIGZvciB5b3UuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9QYW5lbD5cclxuXHRcdFx0XHQ8UGFuZWxcclxuXHRcdFx0XHRcdHRpdGxlPVwiVmlzaW9uLCBQZXJjZXB0aW9uICYgQWVzdGhldGljc1wiXHJcblx0XHRcdFx0XHRjPVwiMlwiXHJcblx0XHRcdFx0XHRpbWFnZT1cIi9zdGF0aWMvY2gxLmpwZ1wiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdEEgYm9vaywgYSB0YWxrIGFuZCBhIHNlcmllcyBvZiB3b3Jrc2hvcHMgZGVzaWduZWQgdG8gaW5mdXNlIHlvdXIgZGVzaWduIHByb2Nlc3Mgd2l0aCB0aGUgdW5kZXJzdGFuZGluZyBhbmQgYXBwcmVjaWF0aW9uIHRoZSBodW1hbiBtaW5kIGRlc2VydmVzLiBJZiB5b3Ugd2FudCB0byBzdGFydCBpbnRlZ3JhdGluZyBpbnRvIGxpZmVzdHlsZXMgaW5zdGVhZCBvZiBpbnRlcnJ1cHRpbmcgdGhlbSwgTWluZGZ1bCBEZXNpZ24gaXMgZm9yIHlvdS5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L1BhbmVsPlxyXG5cdFx0XHRcdDxQYW5lbFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJMZWFybmluZyAmIE1lbW9yeVwiXHJcblx0XHRcdFx0XHRjPVwiM1wiXHJcblx0XHRcdFx0XHRpbWFnZT1cIi9zdGF0aWMvY2gxLmpwZ1wiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdEEgYm9vaywgYSB0YWxrIGFuZCBhIHNlcmllcyBvZiB3b3Jrc2hvcHMgZGVzaWduZWQgdG8gaW5mdXNlIHlvdXIgZGVzaWduIHByb2Nlc3Mgd2l0aCB0aGUgdW5kZXJzdGFuZGluZyBhbmQgYXBwcmVjaWF0aW9uIHRoZSBodW1hbiBtaW5kIGRlc2VydmVzLiBJZiB5b3Ugd2FudCB0byBzdGFydCBpbnRlZ3JhdGluZyBpbnRvIGxpZmVzdHlsZXMgaW5zdGVhZCBvZiBpbnRlcnJ1cHRpbmcgdGhlbSwgTWluZGZ1bCBEZXNpZ24gaXMgZm9yIHlvdS5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L1BhbmVsPlxyXG5cdFx0XHRcdDxQYW5lbFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJIYXJtb255ICYgRGlzc29uYW5jZVwiXHJcblx0XHRcdFx0XHRjPVwiNFwiXHJcblx0XHRcdFx0XHRpbWFnZT1cIi9zdGF0aWMvY2gxLmpwZ1wiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdEEgYm9vaywgYSB0YWxrIGFuZCBhIHNlcmllcyBvZiB3b3Jrc2hvcHMgZGVzaWduZWQgdG8gaW5mdXNlIHlvdXIgZGVzaWduIHByb2Nlc3Mgd2l0aCB0aGUgdW5kZXJzdGFuZGluZyBhbmQgYXBwcmVjaWF0aW9uIHRoZSBodW1hbiBtaW5kIGRlc2VydmVzLiBJZiB5b3Ugd2FudCB0byBzdGFydCBpbnRlZ3JhdGluZyBpbnRvIGxpZmVzdHlsZXMgaW5zdGVhZCBvZiBpbnRlcnJ1cHRpbmcgdGhlbSwgTWluZGZ1bCBEZXNpZ24gaXMgZm9yIHlvdS5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L1BhbmVsPlxyXG5cdFx0XHRcdDxQYW5lbFxyXG5cdFx0XHRcdFx0dGl0bGU9XCJSZXdhcmQgJiBNb3RpdmlhdGlvblwiXHJcblx0XHRcdFx0XHRjPVwiNVwiXHJcblx0XHRcdFx0XHRpbWFnZT1cIi9zdGF0aWMvY2gxLmpwZ1wiXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0PHA+XHJcblx0XHRcdFx0XHRcdEEgYm9vaywgYSB0YWxrIGFuZCBhIHNlcmllcyBvZiB3b3Jrc2hvcHMgZGVzaWduZWQgdG8gaW5mdXNlIHlvdXIgZGVzaWduIHByb2Nlc3Mgd2l0aCB0aGUgdW5kZXJzdGFuZGluZyBhbmQgYXBwcmVjaWF0aW9uIHRoZSBodW1hbiBtaW5kIGRlc2VydmVzLiBJZiB5b3Ugd2FudCB0byBzdGFydCBpbnRlZ3JhdGluZyBpbnRvIGxpZmVzdHlsZXMgaW5zdGVhZCBvZiBpbnRlcnJ1cHRpbmcgdGhlbSwgTWluZGZ1bCBEZXNpZ24gaXMgZm9yIHlvdS5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L1BhbmVsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbWFpbj5cclxuXHRcdDxzdHlsZSBqc3g+e2BcclxuXHRcdFx0Lmhlcm8ge1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtMjJkZWcsICM4MEUwQTcsICMyQkMwQzQpO1xyXG5cdFx0XHRcdGJveC1zaGFkb3c6IDAgM3B4IDU3cHggcmdiYSgwLDAsMCwuMTIpO1xyXG5cdFx0XHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdHRyYW5zZm9ybTogc2NhbGVYKDEuNSk7XHJcblx0XHRcdFx0d2lkdGg6IDEwMHZ3O1xyXG5cdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAzcmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdC5oZXJvV3JhcHBlciB7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZVgoLjcpO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDB2dztcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0bWF4LXdpZHRoOiAxNDQwcHg7XHJcblx0XHRcdFx0bWFyZ2luOiBhdXRvO1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiA4cmVtO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGdyaWQ7XHJcblx0XHRcdFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgNGZyO1xyXG5cdFx0XHRcdGdyaWQtZ2FwOiA3dnc7XHJcblx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRwYWRkaW5nOiA4cmVtIDV2dyAxMHZoO1xyXG5cdFx0XHR9XHJcblx0XHRcdGgxIHtcclxuXHRcdFx0XHRjb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAzLjI1cmVtO1xyXG5cdFx0XHRcdG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG5cdFx0XHR9XHJcblx0XHRcdHAge1xyXG5cdFx0XHRcdG1hcmdpbi10b3A6IDA7XHJcblx0XHRcdFx0cGFkZGluZy1yaWdodDogMXJlbTtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xyXG5cdFx0XHRcdG1heC13aWR0aDogNDIwcHg7XHJcblx0XHRcdH1cclxuXHRcdFx0LmJ1dHRvbiB7XHJcblx0XHRcdFx0cGFkZGluZzogMXJlbTtcclxuXHRcdFx0XHRiYWNrZ3JvdW5kOiBibGFjaztcclxuXHRcdFx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHRcdFx0Y29sb3I6ICNCRUZGRDg7XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdGZvbnQtZmFtaWx5OiBnYXN0cm9tb25kLCBzZXJpZjtcclxuXHRcdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuY3RhIHtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0dHJhbnNmb3JtOiBzY2FsZVgoLjcpO1x0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdFx0LmN0YSBhIHtcclxuXHRcdFx0XHRwYWRkaW5nOiAxcmVtIDJyZW07XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogOTk5cHg7XHJcblx0XHRcdFx0Zm9udC1mYW1pbHk6IHNrb2xhci1zYW5zLWxhdGluLWNvbXByZXNzZWQsIHNhbnMtc2VyaWY7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogYmxhY2s7XHJcblx0XHRcdFx0Y29sb3I6ICM4MEUwQTc7XHJcblx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAuOHJlbTtcclxuXHRcdFx0XHRtYXJnaW4tdG9wOiAuMnJlbTtcclxuXHRcdFx0fVxyXG5cdFx0XHQuY3RhIGltZyB7XHJcblx0XHRcdFx0bWFyZ2luLWxlZnQ6IC41cmVtO1xyXG5cdFx0XHRcdGhlaWdodDogLjVyZW07XHJcblx0XHRcdH1cclxuXHRcdFx0LmxlYXJuIHtcclxuXHRcdFx0XHRtYXgtd2lkdGg6IDEwODBweDtcclxuXHRcdFx0XHRtYXJnaW46IGF1dG87XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMjB2aDtcclxuXHRcdFx0XHRwYWRkaW5nLWJvdHRvbTogNDB2aDtcclxuXHRcdFx0fVxyXG5cdFx0XHQubGVhcm4gOmdsb2JhbCgucGFuZWwpIHtcclxuXHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHJlbTtcclxuXHRcdFx0fVxyXG5cdFx0YH08L3N0eWxlPlxyXG5cdDwvTGF5b3V0PlxyXG4pIl19 */\n/*@ sourceURL=C:\\Users\\Scott.DESKTOP-3FOAM32\\Work\\mindfuldesign\\pages\\index.js */",
    __self: this
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-inlinesvg":
/*!**********************************!*\
  !*** external "react-inlinesvg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map