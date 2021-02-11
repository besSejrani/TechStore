module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Layout/Header.tsx":
/*!***************************!*\
  !*** ./Layout/Header.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Menu */ "@material-ui/icons/Menu");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Redux_product_productAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Redux/product/productAction */ "./Redux/product/productAction.ts");

var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\Layout\\Header.tsx";



 // Redux




const Header = () => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();
  const selectProducts = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(state => state.product.cartItems);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
      position: "fixed",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
          disableGutters: true,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
            edge: "start",
            className: classes.menuButton,
            color: "inherit",
            "aria-label": "menu",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
              onClick: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_6__["sidebarToggle"])())
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
            variant: "h6",
            className: classes.title,
            children: "RaspberryShop"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            color: "inherit",
            children: "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
            color: "inherit",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Badge"], {
              badgeContent: selectProducts,
              color: "secondary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_4___default.a, {
                className: "nav-icon",
                onClick: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_6__["sidebarCart"])())
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Header); // =================================================================

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "white"
  }
}));

/***/ }),

/***/ "./Layout/SideDrawerCart.tsx":
/*!***********************************!*\
  !*** ./Layout/SideDrawerCart.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Redux_product_productAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Redux/product/productAction */ "./Redux/product/productAction.ts");

var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\Layout\\SideDrawerCart.tsx";


 //Redux





const SideDrawerCart = () => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  const selectCartOpen = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.product.cartOpen);
  const selectCart = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.product.cart);
  const selectCartTotal = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.product.cartTotal);
  const isSideDrawerOpen = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(state => state.product.sidebarOpen); // let history = useHistory();

  const list = anchor => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.list,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.listProduct,
      children: selectCart.map(item => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.product,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["CardMedia"] // component={Link}
          // to={`/products/${item.id}`}
          , {
            className: classes.media,
            image: `../${item.image}`,
            title: item.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.information,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "body1",
              children: item.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: "outlined",
              className: classes.actionButton,
              onClick: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_5__["decrement"])(item.id)),
              children: "-"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: "outlined",
              className: classes.actionButton,
              children: item.count
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              variant: "outlined",
              className: classes.actionButton,
              onClick: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_5__["increment"])(item.id)),
              children: "+"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
              variant: "body2",
              color: "secondary",
              className: classes.priceProduct,
              children: [item.total, ".-"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined)]
        }, item.id, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.amount,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "body1",
          children: "Cart Total "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
          variant: "subtitle2",
          color: "secondary",
          children: [selectCartTotal, ".-"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"] // component={Link}
      // to="/cart"
      , {
        variant: "contained",
        size: "large",
        color: "secondary",
        className: classes.checkout,
        children: "Checkout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        variant: "outlined",
        size: "large",
        color: "primary",
        className: classes.clearCart,
        onClick: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_5__["clearCart"])()),
        children: "Clear Cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["right"].map(anchor => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
        anchor: anchor,
        open: selectCartOpen,
        onClose: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_5__["sidebarCart"])()),
        children: list(anchor)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, undefined)
    }, anchor, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SideDrawerCart); // =================================================================

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  list: {
    width: 380,
    overflow: "auto",
    overflowX: "hidden"
  },
  listProduct: {
    maxHeight: "75%",
    overflow: "auto"
  },
  product: {
    display: "flex",
    alignItems: "center",
    margin: "30px 20px"
  },
  information: {
    marginLeft: 20,
    width: "60%",
    position: "relative"
  },
  priceProduct: {
    position: "absolute",
    top: "42px",
    right: "-7px"
  },
  actionButton: {
    minWidth: "40px",
    marginTop: "10px",
    padding: 5
  },
  media: {
    height: "110px",
    width: "110px"
  },
  amount: {
    margin: "50px 20px 10px 20px",
    display: "flex",
    justifyContent: "space-between"
  },
  checkout: {
    margin: "20px 20px 10px 20px",
    width: "90%"
  },
  clearCart: {
    margin: "10px 20px 20px 20px",
    width: "90%"
  }
}));

/***/ }),

/***/ "./Layout/SideDrawerNavigation.tsx":
/*!*****************************************!*\
  !*** ./Layout/SideDrawerNavigation.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Home */ "@material-ui/icons/Home");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Queue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Queue */ "@material-ui/icons/Queue");
/* harmony import */ var _material_ui_icons_Queue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Queue__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Redux_product_productAction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Redux/product/productAction */ "./Redux/product/productAction.ts");

var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\Layout\\SideDrawerNavigation.tsx";









const SideDrawer = () => {
  const classes = useStyles();
  const {
    0: installable,
    1: setInstallable
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let defferedPrompt = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  const isSideDrawerOpen = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(state => state.product.sidebarOpen);

  const list = anchor => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.list,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["List"], {
      subheader: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListSubheader"], {
        children: "Links"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 24
      }, undefined),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Queue__WEBPACK_IMPORTED_MODULE_6___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Products"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItem"], {
        button: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemIcon"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_5___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ListItemText"], {
          primary: "Cart"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Divider"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["left"].map(anchor => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Drawer"], {
        anchor: anchor,
        open: isSideDrawerOpen,
        onClose: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_8__["sidebarToggle"])()),
        children: list(anchor)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, undefined)
    }, anchor, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SideDrawer);
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  list: {
    width: 250
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150
  },
  imdb: {
    height: "53px",
    width: "50%",
    margin: "30px 20px"
  }
}));

/***/ }),

/***/ "./Layout/Theme.tsx":
/*!**************************!*\
  !*** ./Layout/Theme.tsx ***!
  \**************************/
/*! exports provided: withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "@material-ui/styles");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/colors */ "@material-ui/core/colors");
/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\Layout\\Theme.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // import { useSelector } from "react-redux";
// import { IAppState } from "../redux/rootReducer";

const Theme = props => {
  //   const isDarkTheme = useSelector((state: IAppState) => state.ui.isDarkTheme);
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])({
    palette: {
      primary: {
        main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["grey"][900]
      },
      secondary: {
        main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_3__["blue"][500]
      },
      //   type: isDarkTheme ? "dark" : "light",
      type: "light"
    }
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 10
  }, undefined);
};

const withTheme = Component => {
  return props => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Theme, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined);
  };
};

/***/ }),

/***/ "./Layout/index.tsx":
/*!**************************!*\
  !*** ./Layout/index.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./Layout/Header.tsx");
/* harmony import */ var _SideDrawerNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideDrawerNavigation */ "./Layout/SideDrawerNavigation.tsx");
/* harmony import */ var _SideDrawerCart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SideDrawerCart */ "./Layout/SideDrawerCart.tsx");
/* harmony import */ var _Theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Theme */ "./Layout/Theme.tsx");


var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\Layout\\index.tsx";






const index = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideDrawerNavigation__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideDrawerCart__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), children]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_Theme__WEBPACK_IMPORTED_MODULE_5__["withTheme"])(index)); // =================================================================

/***/ }),

/***/ "./Redux/product/productAction.ts":
/*!****************************************!*\
  !*** ./Redux/product/productAction.ts ***!
  \****************************************/
/*! exports provided: sidebarToggle, sidebarCart, setProducts, addToCart, addTotals, setSingleProduct, getSingleProduct, getItemCart, increment, decrement, remove, clearCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarToggle", function() { return sidebarToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarCart", function() { return sidebarCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProducts", function() { return setProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTotals", function() { return addTotals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSingleProduct", function() { return setSingleProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSingleProduct", function() { return getSingleProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemCart", function() { return getItemCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increment", function() { return increment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrement", function() { return decrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCart", function() { return clearCart; });
/* harmony import */ var _productType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productType */ "./Redux/product/productType.ts");

const sidebarToggle = () => {
  return {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SIDE_BAR_TOGGLE
  };
};
const sidebarCart = () => {
  return {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SIDE_CART_TOGGLE
  };
};
const setProducts = products => {
  return [{
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_PRODUCTS,
    payload: products
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_ITEM_CART
  }];
};
const addToCart = id => {
  return [{
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TO_CART,
    payload: id
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_ITEM_CART
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }];
};
const addTotals = () => {
  return {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  };
};
const setSingleProduct = id => {
  return {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_SINGLE_PRODUCT,
    payload: id
  };
};
const getSingleProduct = () => {
  return {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_SINGLE_PRODUCT
  };
};
const getItemCart = () => {
  return {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_ITEM_CART
  };
};
const increment = id => {
  return [{
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].INCREMENT,
    payload: id
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TO_CART,
    payload: id
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_ITEM_CART
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_ITEM_CART
  }];
};
const decrement = id => {
  return [{
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].DECREMENT,
    payload: id
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_ITEM_CART
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_ITEM_CART
  }];
};
const remove = id => {
  return [{
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].REMOVE,
    payload: id
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_ITEM_CART
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS
  }, {
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_ITEM_CART
  }];
};
const clearCart = () => async () => {
  await localStorage.clear();
  await window.location.reload();
  return [{
    type: _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].CLEAR
  }];
};

/***/ }),

/***/ "./Redux/product/productReducer.ts":
/*!*****************************************!*\
  !*** ./Redux/product/productReducer.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productType */ "./Redux/product/productType.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-unused-vars */

/* eslint-disable no-fallthrough */

const initialState = {
  sidebarOpen: false,
  cartOpen: false,
  cartItems: 0,
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {},
  loading: true
};
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  const {
    payload,
    type
  } = action;

  switch (type) {
    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SIDE_BAR_TOGGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        sidebarOpen: !state.sidebarOpen
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SIDE_CART_TOGGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        cartOpen: !state.cartOpen
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_PRODUCTS:
      let storeProducts = payload.map(item => {
        const {
          id
        } = item.sys;
        const image = item.fields.image.fields.file.url;

        const product = _objectSpread(_objectSpread({
          id
        }, item.fields), {}, {
          image
        });

        return product;
      });
      let featuredProducts = storeProducts.filter(item => item.featured === true);
      return _objectSpread(_objectSpread({}, state), {}, {
        storeProducts: storeProducts,
        filteredProducts: storeProducts,
        featuredProducts: featuredProducts,
        loading: false
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TO_CART:
      let tempCart = [...state.cart];
      let tempProducts = [...state.storeProducts];
      let tempItem = tempCart.find(item => item.id === payload);

      if (!tempItem) {
        tempItem = tempProducts.find(item => item.id === payload);
        let total = tempItem.price;

        let cartItem = _objectSpread(_objectSpread({}, tempItem), {}, {
          count: 1,
          total
        });

        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        cart: tempCart
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].ADD_TOTALS:
      let subTotal = 0;
      let cartItems = 0;
      state.cart.forEach(item => {
        subTotal += item.total;
        cartItems += item.count;
      });
      subTotal = parseFloat(subTotal).toFixed(2);
      let tax = parseFloat(subTotal * 0.2).toFixed(2);
      let total = subTotal + tax;
      total = parseFloat(total).toFixed(2);
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: cartItems,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_ITEM_CART:
      let obj = {};
      let cartStringify;
      let cartSubTotalStringify;
      let cartTaxStringify;
      obj.cartStringify = state.cart;
      obj.cartSubTotalStringify = Number(state.cartSubTotal);
      obj.cartTaxStringify = Number(state.cartTax);
      localStorage.setItem("cart", JSON.stringify(obj));
      return _objectSpread({}, state);

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_ITEM_CART:
      let cart = [];
      let count = 0;
      let cartTotal = 0;
      let cartSubTotal = 0;
      let cartTax = 0;

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.cartStringify.map(item => {
          return count += item.count;
        });
        cart.cartStringify.map(item => {
          cartTotal += item.total;
          return parseFloat(cartTotal).toFixed(2);
        });
      } else {
        cart.cartStringify = cart;
        cart.cartSubTotalStringify = parseFloat(cartSubTotal).toFixed(2);
        cart.cartTaxStringify = parseFloat(cartTax).toFixed(2);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        cart: cart.cartStringify,
        cartItems: count,
        cartTotal: cartTotal,
        cartSubTotal: cart.cartSubTotalStringify,
        cartTax: cart.cartTaxStringify
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].SET_SINGLE_PRODUCT:
      let product = state.storeProducts.find(item => item.id === payload);
      localStorage.setItem("singleProduct", JSON.stringify(product));
      return _objectSpread(_objectSpread({}, state), {}, {
        singleProduct: _objectSpread({}, product),
        loading: false
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].GET_SINGLE_PRODUCT:
      let singleProduct;

      if (localStorage.getItem("singleProduct")) {
        singleProduct = JSON.parse(localStorage.getItem("singleProduct"));
      } else if (!localStorage.getItem("singleProduct")) {
        singleProduct = {};
      } else {
        return singleProduct;
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        singleProduct: _objectSpread({}, singleProduct),
        loading: false
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].REMOVE:
      let removeCart = [...state.cart];
      removeCart = removeCart.filter(item => item.id !== payload);
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: removeCart
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].CLEAR:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: []
      });

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].INCREMENT:
      let incCart = [...state.cart];
      return _objectSpread(_objectSpread({}, state), incCart);

    case _productType__WEBPACK_IMPORTED_MODULE_0__["ProductType"].DECREMENT:
      let decCart = [...state.cart];
      const cartItem = decCart.find(item => item.id === payload);

      if (cartItem.count <= 1) {
        let removeCart = [...state.cart];
        removeCart = removeCart.filter(item => item.id !== payload);
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: removeCart
        });
      }

      cartItem.count = cartItem.count - 1;
      cartItem.total = cartItem.count * cartItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: decCart
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./Redux/product/productType.ts":
/*!**************************************!*\
  !*** ./Redux/product/productType.ts ***!
  \**************************************/
/*! exports provided: ProductType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductType", function() { return ProductType; });
let ProductType;

(function (ProductType) {
  ProductType["SIDE_BAR_TOGGLE"] = "SIDE_BAR_TOGGLE";
  ProductType["SIDE_CART_TOGGLE"] = "SIDE_CART_TOGGLE";
  ProductType["SET_PRODUCTS"] = "SET_PRODUCTS";
  ProductType["ADD_TO_CART"] = "ADD_TO_CART";
  ProductType["ADD_TOTALS"] = "ADD_TOTALS";
  ProductType["SET_ITEM_CART"] = "SET_ITEM_CART";
  ProductType["GET_ITEM_CART"] = "GET_ITEM_CART";
  ProductType["SET_SINGLE_PRODUCT"] = "SET_SINGLE_PRODUCT";
  ProductType["GET_SINGLE_PRODUCT"] = "GET_SINGLE_PRODUCT";
  ProductType["INCREMENT"] = "INCREMENT";
  ProductType["DECREMENT"] = "DECREMENT";
  ProductType["REMOVE"] = "REMOVE";
  ProductType["CLEAR"] = "CLEAR";
})(ProductType || (ProductType = {}));

/***/ }),

/***/ "./Redux/rootReducer.ts":
/*!******************************!*\
  !*** ./Redux/rootReducer.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_productReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/productReducer */ "./Redux/product/productReducer.ts");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);




const persistConfig = {
  key: "raspberry",
  storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default()),
  whitelist: [""]
};
const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  product: _product_productReducer__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, rootReducer));

/***/ }),

/***/ "./Redux/store.ts":
/*!************************!*\
  !*** ./Redux/store.ts ***!
  \************************/
/*! exports provided: store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootReducer */ "./Redux/rootReducer.ts");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_multi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-multi */ "redux-multi");
/* harmony import */ var redux_multi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_multi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! process */ "process");
/* harmony import */ var process__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(process__WEBPACK_IMPORTED_MODULE_5__);






/**
|--------------------------------------------------
| EXPLANATION :
| 
| Only show the redux-devtools in developpement. 
|--------------------------------------------------
*/

let composeEnhancers;

if (false) {} else {
  composeEnhancers =  false || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
}
/**
|--------------------------------------------------
| EXPLANATION :
| 
| Passing the following data to the index.js file
| in the root
|--------------------------------------------------
*/


const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_rootReducer__WEBPACK_IMPORTED_MODULE_1__["default"], composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_multi__WEBPACK_IMPORTED_MODULE_4___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistStore"])(store);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Redux/store */ "./Redux/store.ts");
/* harmony import */ var _Layout_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Layout/index */ "./Layout/index.tsx");

var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _Redux_store__WEBPACK_IMPORTED_MODULE_2__["store"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Layout_index__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, pageProps), {}, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Home");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Menu");

/***/ }),

/***/ "@material-ui/icons/Queue":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Queue" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Queue");

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/styles");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-multi":
/*!******************************!*\
  !*** external "redux-multi" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-multi");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vTGF5b3V0L0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vTGF5b3V0L1NpZGVEcmF3ZXJDYXJ0LnRzeCIsIndlYnBhY2s6Ly8vLi9MYXlvdXQvU2lkZURyYXdlck5hdmlnYXRpb24udHN4Iiwid2VicGFjazovLy8uL0xheW91dC9UaGVtZS50c3giLCJ3ZWJwYWNrOi8vLy4vTGF5b3V0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9SZWR1eC9wcm9kdWN0L3Byb2R1Y3RBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vUmVkdXgvcHJvZHVjdC9wcm9kdWN0UmVkdWNlci50cyIsIndlYnBhY2s6Ly8vLi9SZWR1eC9wcm9kdWN0L3Byb2R1Y3RUeXBlLnRzIiwid2VicGFjazovLy8uL1JlZHV4L3Jvb3RSZWR1Y2VyLnRzIiwid2VicGFjazovLy8uL1JlZHV4L3N0b3JlLnRzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9RdWV1ZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvY2Vzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LW11bHRpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIkhlYWRlciIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwic2VsZWN0UHJvZHVjdHMiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicHJvZHVjdCIsImNhcnRJdGVtcyIsInJvb3QiLCJtZW51QnV0dG9uIiwic2lkZWJhclRvZ2dsZSIsInRpdGxlIiwic2lkZWJhckNhcnQiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJjcmVhdGVTdHlsZXMiLCJmbGV4R3JvdyIsIm1hcmdpblJpZ2h0Iiwic3BhY2luZyIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJTaWRlRHJhd2VyQ2FydCIsInNlbGVjdENhcnRPcGVuIiwiY2FydE9wZW4iLCJzZWxlY3RDYXJ0IiwiY2FydCIsInNlbGVjdENhcnRUb3RhbCIsImNhcnRUb3RhbCIsImlzU2lkZURyYXdlck9wZW4iLCJzaWRlYmFyT3BlbiIsImxpc3QiLCJhbmNob3IiLCJsaXN0UHJvZHVjdCIsIm1hcCIsIml0ZW0iLCJtZWRpYSIsImltYWdlIiwiaW5mb3JtYXRpb24iLCJhY3Rpb25CdXR0b24iLCJkZWNyZW1lbnQiLCJpZCIsImNvdW50IiwiaW5jcmVtZW50IiwicHJpY2VQcm9kdWN0IiwidG90YWwiLCJhbW91bnQiLCJjaGVja291dCIsImNsZWFyQ2FydCIsIndpZHRoIiwib3ZlcmZsb3ciLCJvdmVyZmxvd1giLCJtYXhIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsIm1hcmdpbiIsIm1hcmdpbkxlZnQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwibWluV2lkdGgiLCJtYXJnaW5Ub3AiLCJwYWRkaW5nIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJTaWRlRHJhd2VyIiwiaW5zdGFsbGFibGUiLCJzZXRJbnN0YWxsYWJsZSIsInVzZVN0YXRlIiwiZGVmZmVyZWRQcm9tcHQiLCJ1c2VSZWYiLCJmb3JtQ29udHJvbCIsImltZGIiLCJUaGVtZSIsInByb3BzIiwiY3JlYXRlTXVpVGhlbWUiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJncmV5Iiwic2Vjb25kYXJ5IiwiYmx1ZSIsInR5cGUiLCJjaGlsZHJlbiIsIndpdGhUaGVtZSIsIkNvbXBvbmVudCIsImluZGV4IiwiUHJvZHVjdFR5cGUiLCJTSURFX0JBUl9UT0dHTEUiLCJTSURFX0NBUlRfVE9HR0xFIiwic2V0UHJvZHVjdHMiLCJwcm9kdWN0cyIsIlNFVF9QUk9EVUNUUyIsInBheWxvYWQiLCJHRVRfSVRFTV9DQVJUIiwiYWRkVG9DYXJ0IiwiQUREX1RPX0NBUlQiLCJBRERfVE9UQUxTIiwiU0VUX0lURU1fQ0FSVCIsImFkZFRvdGFscyIsInNldFNpbmdsZVByb2R1Y3QiLCJTRVRfU0lOR0xFX1BST0RVQ1QiLCJnZXRTaW5nbGVQcm9kdWN0IiwiR0VUX1NJTkdMRV9QUk9EVUNUIiwiZ2V0SXRlbUNhcnQiLCJJTkNSRU1FTlQiLCJERUNSRU1FTlQiLCJyZW1vdmUiLCJSRU1PVkUiLCJsb2NhbFN0b3JhZ2UiLCJjbGVhciIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiQ0xFQVIiLCJpbml0aWFsU3RhdGUiLCJjYXJ0U3ViVG90YWwiLCJjYXJ0VGF4Iiwic3RvcmVQcm9kdWN0cyIsImZpbHRlcmVkUHJvZHVjdHMiLCJmZWF0dXJlZFByb2R1Y3RzIiwic2luZ2xlUHJvZHVjdCIsImxvYWRpbmciLCJhY3Rpb24iLCJzeXMiLCJmaWVsZHMiLCJmaWxlIiwidXJsIiwiZmlsdGVyIiwiZmVhdHVyZWQiLCJ0ZW1wQ2FydCIsInRlbXBQcm9kdWN0cyIsInRlbXBJdGVtIiwiZmluZCIsInByaWNlIiwiY2FydEl0ZW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInN1YlRvdGFsIiwiZm9yRWFjaCIsInRheCIsIm9iaiIsImNhcnRTdHJpbmdpZnkiLCJjYXJ0U3ViVG90YWxTdHJpbmdpZnkiLCJjYXJ0VGF4U3RyaW5naWZ5IiwiTnVtYmVyIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJdGVtIiwicGFyc2UiLCJyZW1vdmVDYXJ0IiwiaW5jQ2FydCIsImRlY0NhcnQiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsIndoaXRlbGlzdCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicHJvZHVjdFJlZHVjZXIiLCJwZXJzaXN0UmVkdWNlciIsImNvbXBvc2VFbmhhbmNlcnMiLCJjb21wb3NlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInJlZHV4TXVsdGkiLCJ0aHVuayIsInBlcnNpc3RvciIsInBlcnNpc3RTdG9yZSIsIkFwcCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FB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LDZDQUFyRztBQUNEO0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTUMsS0FBSyxHQUFHQyx5REFBVyxDQUM5QlAsb0RBRDhCLEVBRTlCSSxnQkFBZ0IsQ0FBQ0ksNkRBQWUsQ0FBQ0Msa0RBQUQsRUFBYUMsa0RBQWIsQ0FBaEIsQ0FGYyxDQUF6QjtBQUtBLE1BQU1DLFNBQVMsR0FBR0Msa0VBQVksQ0FBQ04sS0FBRCxDQUE5QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDUDtBQUNBO0FBQ0E7QUFFZSxTQUFTTyxHQUFULENBQWE7QUFBRXRGLFdBQUY7QUFBYXVGO0FBQWIsQ0FBYixFQUF1QztBQUVwRCxzQkFDRSxxRUFBQyxvREFBRDtBQUFVLFNBQUssRUFBRVIsa0RBQWpCO0FBQUEsMkJBQ0UscUVBQUMscURBQUQsa0NBQVlRLFNBQVo7QUFBQSw2QkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiRCw4Qzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxvQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbmltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIFRvb2xiYXIsXHJcbiAgQmFkZ2UsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBUeXBvZ3JhcGh5LFxyXG4gIEJ1dHRvbixcclxuICBtYWtlU3R5bGVzLFxyXG4gIGNyZWF0ZVN0eWxlcyxcclxuICBUaGVtZSxcclxuICBDb250YWluZXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL01lbnVcIjtcclxuaW1wb3J0IENhcnRJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvU2hvcHBpbmdDYXJ0XCI7XHJcblxyXG4vLyBSZWR1eFxyXG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vUmVkdXgvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNpZGViYXJDYXJ0LCBzaWRlYmFyVG9nZ2xlIH0gZnJvbSBcIi4uL1JlZHV4L3Byb2R1Y3QvcHJvZHVjdEFjdGlvblwiO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNlbGVjdFByb2R1Y3RzID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJQXBwU3RhdGUpID0+IHN0YXRlLnByb2R1Y3QuY2FydEl0ZW1zKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGVkZ2U9XCJzdGFydFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgIDxNZW51SWNvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChzaWRlYmFyVG9nZ2xlKCkpfSAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSAgdmFyaWFudD1cImg2XCIgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cclxuICAgICAgICAgICAgICBSYXNwYmVycnlTaG9wXHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJpbmhlcml0XCI+TG9naW48L0J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e3NlbGVjdFByb2R1Y3RzfSBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPENhcnRJY29uIGNsYXNzTmFtZT1cIm5hdi1pY29uXCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goc2lkZWJhckNhcnQoKSl9IC8+XHJcbiAgICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWU6IFRoZW1lKSA9PlxyXG4gIGNyZWF0ZVN0eWxlcyh7XHJcbiAgICByb290OiB7XHJcbiAgICAgIGZsZXhHcm93OiAxLFxyXG4gICAgfSxcclxuICAgIG1lbnVCdXR0b246IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgZmxleEdyb3c6IDEsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIH0sXHJcbiAgfSlcclxuKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEcmF3ZXIsIERpdmlkZXIsIEJ1dHRvbiwgQ2FyZE1lZGlhIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5cclxuLy9SZWR1eFxyXG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vUmVkdXgvcm9vdFJlZHVjZXJcIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHNpZGViYXJDYXJ0LCBpbmNyZW1lbnQsIHJlbW92ZSwgZGVjcmVtZW50LCBjbGVhckNhcnQgfSBmcm9tIFwiLi4vUmVkdXgvcHJvZHVjdC9wcm9kdWN0QWN0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG50eXBlIEFuY2hvciA9IFwicmlnaHRcIjtcclxuXHJcbmNvbnN0IFNpZGVEcmF3ZXJDYXJ0OiBSZWFjdC5GQzxhbnk+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuXHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHNlbGVjdENhcnRPcGVuID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJQXBwU3RhdGUpID0+IHN0YXRlLnByb2R1Y3QuY2FydE9wZW4pO1xyXG4gIGNvbnN0IHNlbGVjdENhcnQgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElBcHBTdGF0ZSkgPT4gc3RhdGUucHJvZHVjdC5jYXJ0KTtcclxuICBjb25zdCBzZWxlY3RDYXJ0VG90YWwgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IElBcHBTdGF0ZSkgPT4gc3RhdGUucHJvZHVjdC5jYXJ0VG90YWwpO1xyXG5cclxuICBjb25zdCBpc1NpZGVEcmF3ZXJPcGVuID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJQXBwU3RhdGUpID0+IHN0YXRlLnByb2R1Y3Quc2lkZWJhck9wZW4pO1xyXG4gIC8vIGxldCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xyXG5cclxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fSA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RQcm9kdWN0fT5cclxuXHJcbiAgICAgIHtzZWxlY3RDYXJ0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3R9PlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgLy8gY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIC8vIHRvPXtgL3Byb2R1Y3RzLyR7aXRlbS5pZH1gfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICBpbWFnZT17YC4uLyR7aXRlbS5pbWFnZX1gfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbmZvcm1hdGlvbn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e2l0ZW0udGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkJ1dHRvbn0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goZGVjcmVtZW50KGl0ZW0uaWQpKX0+XHJcbiAgICAgICAgICAgICAgICAtXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uQnV0dG9ufT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNvdW50fVxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cIm91dGxpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbkJ1dHRvbn0gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50KGl0ZW0uaWQpKX0+XHJcbiAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMucHJpY2VQcm9kdWN0fT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRvdGFsfS4tXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYW1vdW50fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPkNhcnQgVG90YWwgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMlwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIHtzZWxlY3RDYXJ0VG90YWx9Li1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAvLyBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAvLyB0bz1cIi9jYXJ0XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGVja291dH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgIENoZWNrb3V0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbGVhckNhcnR9XHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChjbGVhckNhcnQoKSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICBDbGVhciBDYXJ0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgICAgIDxEaXZpZGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHsoW1wicmlnaHRcIl0gYXMgQW5jaG9yW10pLm1hcCgoYW5jaG9yKSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YW5jaG9yfT5cclxuICAgICAgICAgIDxEcmF3ZXIgYW5jaG9yPXthbmNob3J9IG9wZW49e3NlbGVjdENhcnRPcGVufSBvbkNsb3NlPXsoKSA9PiBkaXNwYXRjaChzaWRlYmFyQ2FydCgpKX0+XHJcbiAgICAgICAgICAgIHtsaXN0KGFuY2hvcil9XHJcbiAgICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaWRlRHJhd2VyQ2FydDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBsaXN0OiB7XHJcbiAgICB3aWR0aDogMzgwLFxyXG4gICAgb3ZlcmZsb3c6IFwiYXV0b1wiLFxyXG4gICAgb3ZlcmZsb3dYOiBcImhpZGRlblwiXHJcbiAgfSxcclxuICBsaXN0UHJvZHVjdDp7XHJcbiAgICBtYXhIZWlnaHQ6IFwiNzUlXCIsXHJcbiAgICBvdmVyZmxvdzogXCJhdXRvXCJcclxuICB9LFxyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIG1hcmdpbjogXCIzMHB4IDIwcHhcIixcclxuICB9LFxyXG4gIGluZm9ybWF0aW9uOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiAyMCxcclxuICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcclxuICB9LFxyXG4gIHByaWNlUHJvZHVjdDoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHRvcDogXCI0MnB4XCIsXHJcbiAgICByaWdodDogXCItN3B4XCIsXHJcbiAgfSxcclxuICBhY3Rpb25CdXR0b246IHtcclxuICAgIG1pbldpZHRoOiBcIjQwcHhcIixcclxuICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgICBwYWRkaW5nOiA1LFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogXCIxMTBweFwiLFxyXG4gICAgd2lkdGg6IFwiMTEwcHhcIixcclxuICB9LFxyXG4gIGFtb3VudDoge1xyXG4gICAgbWFyZ2luOiBcIjUwcHggMjBweCAxMHB4IDIwcHhcIixcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxyXG4gIH0sXHJcbiAgY2hlY2tvdXQ6IHtcclxuICAgIG1hcmdpbjogXCIyMHB4IDIwcHggMTBweCAyMHB4XCIsXHJcbiAgICB3aWR0aDogXCI5MCVcIixcclxuICB9LFxyXG5cclxuICBjbGVhckNhcnQ6IHtcclxuICAgIG1hcmdpbjogXCIxMHB4IDIwcHggMjBweCAyMHB4XCIsXHJcbiAgICB3aWR0aDogXCI5MCVcIixcclxuICB9LFxyXG59KSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IHsgRHJhd2VyLCBMaXN0LCBEaXZpZGVyLCBMaXN0SXRlbSwgTGlzdEl0ZW1JY29uLCBMaXN0SXRlbVRleHQsIExpc3RTdWJoZWFkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuXHJcbmltcG9ydCBIb21lSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0hvbWVcIjtcclxuaW1wb3J0IFNob3BwaW5nSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiO1xyXG5pbXBvcnQgUXVldWVJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUXVldWVcIjtcclxuXHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzaWRlYmFyVG9nZ2xlIH0gZnJvbSBcIi4uL1JlZHV4L3Byb2R1Y3QvcHJvZHVjdEFjdGlvblwiO1xyXG5pbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vUmVkdXgvcm9vdFJlZHVjZXJcIjtcclxuXHJcbnR5cGUgQW5jaG9yID0gXCJsZWZ0XCI7XHJcblxyXG5jb25zdCBTaWRlRHJhd2VyOiBSZWFjdC5GQzxhbnk+ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbaW5zdGFsbGFibGUsIHNldEluc3RhbGxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgbGV0IGRlZmZlcmVkUHJvbXB0OiBhbnkgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBpc1NpZGVEcmF3ZXJPcGVuID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJQXBwU3RhdGUpID0+IHN0YXRlLnByb2R1Y3Quc2lkZWJhck9wZW4pO1xyXG5cclxuICBjb25zdCBsaXN0ID0gKGFuY2hvcjogQW5jaG9yKSA9PiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0fT5cclxuICAgICAgPExpc3Qgc3ViaGVhZGVyPXs8TGlzdFN1YmhlYWRlcj5MaW5rczwvTGlzdFN1YmhlYWRlcj59PlxyXG4gICAgICAgIDxMaXN0SXRlbSBidXR0b24+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8SG9tZUljb24gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiSG9tZVwiIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuXHJcbiAgICAgICAgPExpc3RJdGVtIGJ1dHRvbiA+XHJcbiAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICA8UXVldWVJY29uIC8+XHJcbiAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2R1Y3RzXCIgLz5cclxuICAgICAgICA8L0xpc3RJdGVtPlxyXG5cclxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uID5cclxuICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgIDxTaG9wcGluZ0ljb24gLz5cclxuICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ2FydFwiIC8+XHJcbiAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG5cclxuICAgICAgPERpdmlkZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7KFtcImxlZnRcIl0gYXMgQW5jaG9yW10pLm1hcCgoYW5jaG9yKSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17YW5jaG9yfT5cclxuICAgICAgICAgIDxEcmF3ZXIgYW5jaG9yPXthbmNob3J9IG9wZW49e2lzU2lkZURyYXdlck9wZW59IG9uQ2xvc2U9eygpID0+IGRpc3BhdGNoKHNpZGViYXJUb2dnbGUoKSl9PlxyXG4gICAgICAgICAgICB7bGlzdChhbmNob3IpfVxyXG4gICAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2lkZURyYXdlcjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxpc3Q6IHtcclxuICAgIHdpZHRoOiAyNTAsXHJcbiAgfSxcclxuICBmb3JtQ29udHJvbDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWluV2lkdGg6IDE1MCxcclxuICB9LFxyXG4gIGltZGI6IHtcclxuICAgIGhlaWdodDogXCI1M3B4XCIsXHJcbiAgICB3aWR0aDogXCI1MCVcIixcclxuICAgIG1hcmdpbjogXCIzMHB4IDIwcHhcIixcclxuICB9LFxyXG59KSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZU11aVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3N0eWxlc1wiO1xyXG5pbXBvcnQgeyBncmV5LCBibHVlIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL2NvbG9yc1wiO1xyXG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG4vLyBpbXBvcnQgeyBJQXBwU3RhdGUgfSBmcm9tIFwiLi4vcmVkdXgvcm9vdFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IFRoZW1lOiBSZWFjdC5GQzxhbnk+ID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gICBjb25zdCBpc0RhcmtUaGVtZSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogSUFwcFN0YXRlKSA9PiBzdGF0ZS51aS5pc0RhcmtUaGVtZSk7XHJcblxyXG4gIGNvbnN0IHRoZW1lID0gY3JlYXRlTXVpVGhlbWUoe1xyXG4gICAgcGFsZXR0ZToge1xyXG4gICAgICBwcmltYXJ5OiB7XHJcbiAgICAgICAgbWFpbjogZ3JleVs5MDBdLFxyXG4gICAgICB9LFxyXG4gICAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgICBtYWluOiBibHVlWzUwMF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vICAgdHlwZTogaXNEYXJrVGhlbWUgPyBcImRhcmtcIiA6IFwibGlnaHRcIixcclxuICAgICAgdHlwZTogXCJsaWdodFwiLFxyXG4gICAgfSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+e3Byb3BzLmNoaWxkcmVufTwvVGhlbWVQcm92aWRlcj47XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgd2l0aFRoZW1lID0gKENvbXBvbmVudCkgPT4ge1xyXG4gIHJldHVybiAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxUaGVtZT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cclxuICAgICAgPC9UaGVtZT5cclxuICAgICk7XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IFNpZGVEcmF3ZXJOYXZpZ2F0aW9uIGZyb20gXCIuL1NpZGVEcmF3ZXJOYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBTaWRlRHJhd2VyQ2FydCBmcm9tIFwiLi9TaWRlRHJhd2VyQ2FydFwiO1xyXG5cclxuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSBcIi4vVGhlbWVcIjtcclxuXHJcbmNvbnN0IGluZGV4ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8U2lkZURyYXdlck5hdmlnYXRpb24gLz5cclxuICAgICAgPFNpZGVEcmF3ZXJDYXJ0IC8+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoaW5kZXgpO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuIiwiaW1wb3J0IHsgUHJvZHVjdFR5cGUgfSBmcm9tIFwiLi9wcm9kdWN0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGViYXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuU0lERV9CQVJfVE9HR0xFIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZWJhckNhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuU0lERV9DQVJUX1RPR0dMRSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFByb2R1Y3RzID0gKHByb2R1Y3RzKSA9PiB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IFByb2R1Y3RUeXBlLlNFVF9QUk9EVUNUUywgcGF5bG9hZDogcHJvZHVjdHMgfSwgeyB0eXBlOiBQcm9kdWN0VHlwZS5HRVRfSVRFTV9DQVJUIH1dO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT19DQVJULCBwYXlsb2FkOiBpZCB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5BRERfVE9UQUxTIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLlNFVF9JVEVNX0NBUlQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPVEFMUyB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG90YWxzID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT1RBTFMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTaW5nbGVQcm9kdWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuU0VUX1NJTkdMRV9QUk9EVUNULCBwYXlsb2FkOiBpZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuR0VUX1NJTkdMRV9QUk9EVUNUIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbUNhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuR0VUX0lURU1fQ0FSVCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLklOQ1JFTUVOVCwgcGF5bG9hZDogaWQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPX0NBUlQsIHBheWxvYWQ6IGlkIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT1RBTFMgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuU0VUX0lURU1fQ0FSVCB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5BRERfVE9UQUxTIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkdFVF9JVEVNX0NBUlQgfSxcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlbWVudCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkRFQ1JFTUVOVCwgcGF5bG9hZDogaWQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPVEFMUyB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5TRVRfSVRFTV9DQVJUIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT1RBTFMgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuR0VUX0lURU1fQ0FSVCB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuUkVNT1ZFLCBwYXlsb2FkOiBpZCB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5BRERfVE9UQUxTIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLlNFVF9JVEVNX0NBUlQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPVEFMUyB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5HRVRfSVRFTV9DQVJUIH0sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgYXdhaXQgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICByZXR1cm4gW3sgdHlwZTogUHJvZHVjdFR5cGUuQ0xFQVIgfV07XHJcbn07XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXHJcbi8qIGVzbGludC1kaXNhYmxlIG5vLWZhbGx0aHJvdWdoICovXHJcbmltcG9ydCB7IFByb2R1Y3RUeXBlIH0gZnJvbSBcIi4vcHJvZHVjdFR5cGVcIjtcclxuXHJcbmludGVyZmFjZSBQcm9kdWN0U3RhdGUge1xyXG4gIHNpZGViYXJPcGVuOiBib29sZWFuO1xyXG4gIGNhcnRPcGVuOiBib29sZWFuO1xyXG4gIGNhcnRJdGVtczogbnVtYmVyO1xyXG4gIGNhcnQ6IGFueVtdO1xyXG4gIGNhcnRTdWJUb3RhbDogbnVtYmVyO1xyXG4gIGNhcnRUYXg6IG51bWJlcjtcclxuICBjYXJ0VG90YWw6IG51bWJlcjtcclxuICBzdG9yZVByb2R1Y3RzOiBhbnlbXTtcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBhbnlbXTtcclxuICBmZWF0dXJlZFByb2R1Y3RzOiBhbnlbXTtcclxuICBzaW5nbGVQcm9kdWN0OiBhbnk7XHJcbiAgbG9hZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHNpZGViYXJPcGVuOiBmYWxzZSxcclxuICBjYXJ0T3BlbjogZmFsc2UsXHJcbiAgY2FydEl0ZW1zOiAwLFxyXG4gIGNhcnQ6IFtdLFxyXG4gIGNhcnRTdWJUb3RhbDogMCxcclxuICBjYXJ0VGF4OiAwLFxyXG4gIGNhcnRUb3RhbDogMCxcclxuICBzdG9yZVByb2R1Y3RzOiBbXSxcclxuICBmaWx0ZXJlZFByb2R1Y3RzOiBbXSxcclxuICBmZWF0dXJlZFByb2R1Y3RzOiBbXSxcclxuICBzaW5nbGVQcm9kdWN0OiB7fSxcclxuICBsb2FkaW5nOiB0cnVlLFxyXG59O1xyXG5cclxuaW50ZXJmYWNlIEFjdGlvbiB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG4gIHBheWxvYWQ/OiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZTogUHJvZHVjdFN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IEFjdGlvbik6IFByb2R1Y3RTdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBwYXlsb2FkLCB0eXBlIH0gPSBhY3Rpb247XHJcblxyXG4gIHN3aXRjaCAodHlwZSkge1xyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5TSURFX0JBUl9UT0dHTEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaWRlYmFyT3BlbjogIXN0YXRlLnNpZGViYXJPcGVuIH07XHJcblxyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5TSURFX0NBUlRfVE9HR0xFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydE9wZW46ICFzdGF0ZS5jYXJ0T3BlbiB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuU0VUX1BST0RVQ1RTOlxyXG4gICAgICBsZXQgc3RvcmVQcm9kdWN0cyA9IHBheWxvYWQubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBpZCB9ID0gaXRlbS5zeXM7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBpdGVtLmZpZWxkcy5pbWFnZS5maWVsZHMuZmlsZS51cmw7XHJcbiAgICAgICAgY29uc3QgcHJvZHVjdCA9IHsgaWQsIC4uLml0ZW0uZmllbGRzLCBpbWFnZSB9O1xyXG4gICAgICAgIHJldHVybiBwcm9kdWN0O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBmZWF0dXJlZFByb2R1Y3RzID0gc3RvcmVQcm9kdWN0cy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uZmVhdHVyZWQgPT09IHRydWUpO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzdG9yZVByb2R1Y3RzOiBzdG9yZVByb2R1Y3RzLFxyXG4gICAgICAgIGZpbHRlcmVkUHJvZHVjdHM6IHN0b3JlUHJvZHVjdHMsXHJcbiAgICAgICAgZmVhdHVyZWRQcm9kdWN0czogZmVhdHVyZWRQcm9kdWN0cyxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLkFERF9UT19DQVJUOlxyXG4gICAgICBsZXQgdGVtcENhcnQgPSBbLi4uc3RhdGUuY2FydF07XHJcbiAgICAgIGxldCB0ZW1wUHJvZHVjdHMgPSBbLi4uc3RhdGUuc3RvcmVQcm9kdWN0c107XHJcblxyXG4gICAgICBsZXQgdGVtcEl0ZW0gPSB0ZW1wQ2FydC5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwYXlsb2FkKTtcclxuXHJcbiAgICAgIGlmICghdGVtcEl0ZW0pIHtcclxuICAgICAgICB0ZW1wSXRlbSA9IHRlbXBQcm9kdWN0cy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwYXlsb2FkKTtcclxuICAgICAgICBsZXQgdG90YWwgPSB0ZW1wSXRlbS5wcmljZTtcclxuICAgICAgICBsZXQgY2FydEl0ZW0gPSB7IC4uLnRlbXBJdGVtLCBjb3VudDogMSwgdG90YWwgfTtcclxuICAgICAgICB0ZW1wQ2FydCA9IFsuLi50ZW1wQ2FydCwgY2FydEl0ZW1dO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRlbXBJdGVtLmNvdW50Kys7XHJcblxyXG4gICAgICAgIHRlbXBJdGVtLnRvdGFsID0gdGVtcEl0ZW0ucHJpY2UgKiB0ZW1wSXRlbS5jb3VudDtcclxuICAgICAgICB0ZW1wSXRlbS50b3RhbCA9IHBhcnNlRmxvYXQodGVtcEl0ZW0udG90YWwudG9GaXhlZCgyKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiB0ZW1wQ2FydCB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuQUREX1RPVEFMUzpcclxuICAgICAgbGV0IHN1YlRvdGFsOiBhbnkgPSAwO1xyXG4gICAgICBsZXQgY2FydEl0ZW1zOiBhbnkgPSAwO1xyXG4gICAgICBzdGF0ZS5jYXJ0LmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICBzdWJUb3RhbCArPSBpdGVtLnRvdGFsO1xyXG4gICAgICAgIGNhcnRJdGVtcyArPSBpdGVtLmNvdW50O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHN1YlRvdGFsID0gcGFyc2VGbG9hdChzdWJUb3RhbCkudG9GaXhlZCgyKTtcclxuICAgICAgbGV0IHRheCA9IHBhcnNlRmxvYXQoKHN1YlRvdGFsICogMC4yKSBhcyBhbnkpLnRvRml4ZWQoMik7XHJcbiAgICAgIGxldCB0b3RhbCA9IHN1YlRvdGFsICsgdGF4O1xyXG4gICAgICB0b3RhbCA9IHBhcnNlRmxvYXQodG90YWwpLnRvRml4ZWQoMik7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnRJdGVtczogY2FydEl0ZW1zLFxyXG4gICAgICAgIGNhcnRTdWJUb3RhbDogc3ViVG90YWwsXHJcbiAgICAgICAgY2FydFRheDogdGF4IGFzIGFueSxcclxuICAgICAgICBjYXJ0VG90YWw6IHRvdGFsIGFzIGFueSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLlNFVF9JVEVNX0NBUlQ6XHJcbiAgICAgIGxldCBvYmo6IGFueSA9IHt9O1xyXG4gICAgICBsZXQgY2FydFN0cmluZ2lmeTtcclxuICAgICAgbGV0IGNhcnRTdWJUb3RhbFN0cmluZ2lmeTtcclxuICAgICAgbGV0IGNhcnRUYXhTdHJpbmdpZnk7XHJcblxyXG4gICAgICBvYmouY2FydFN0cmluZ2lmeSA9IHN0YXRlLmNhcnQ7XHJcbiAgICAgIG9iai5jYXJ0U3ViVG90YWxTdHJpbmdpZnkgPSBOdW1iZXIoc3RhdGUuY2FydFN1YlRvdGFsKTtcclxuICAgICAgb2JqLmNhcnRUYXhTdHJpbmdpZnkgPSBOdW1iZXIoc3RhdGUuY2FydFRheCk7XHJcblxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRcIiwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuR0VUX0lURU1fQ0FSVDpcclxuICAgICAgbGV0IGNhcnQ6IGFueSA9IFtdO1xyXG4gICAgICBsZXQgY291bnQ6IGFueSA9IDA7XHJcbiAgICAgIGxldCBjYXJ0VG90YWw6IGFueSA9IDA7XHJcbiAgICAgIGxldCBjYXJ0U3ViVG90YWw6IGFueSA9IDA7XHJcbiAgICAgIGxldCBjYXJ0VGF4OiBhbnkgPSAwO1xyXG5cclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSkge1xyXG4gICAgICAgIGNhcnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydFwiKSEpO1xyXG5cclxuICAgICAgICBjYXJ0LmNhcnRTdHJpbmdpZnkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKGNvdW50ICs9IGl0ZW0uY291bnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjYXJ0LmNhcnRTdHJpbmdpZnkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjYXJ0VG90YWwgKz0gaXRlbS50b3RhbDtcclxuXHJcbiAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChjYXJ0VG90YWwpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FydC5jYXJ0U3RyaW5naWZ5ID0gY2FydDtcclxuICAgICAgICBjYXJ0LmNhcnRTdWJUb3RhbFN0cmluZ2lmeSA9IHBhcnNlRmxvYXQoY2FydFN1YlRvdGFsKS50b0ZpeGVkKDIpO1xyXG4gICAgICAgIGNhcnQuY2FydFRheFN0cmluZ2lmeSA9IHBhcnNlRmxvYXQoY2FydFRheCkudG9GaXhlZCgyKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjYXJ0OiBjYXJ0LmNhcnRTdHJpbmdpZnksXHJcbiAgICAgICAgY2FydEl0ZW1zOiBjb3VudCxcclxuICAgICAgICBjYXJ0VG90YWw6IGNhcnRUb3RhbCxcclxuICAgICAgICBjYXJ0U3ViVG90YWw6IGNhcnQuY2FydFN1YlRvdGFsU3RyaW5naWZ5LFxyXG4gICAgICAgIGNhcnRUYXg6IGNhcnQuY2FydFRheFN0cmluZ2lmeSxcclxuICAgICAgfTtcclxuXHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLlNFVF9TSU5HTEVfUFJPRFVDVDpcclxuICAgICAgbGV0IHByb2R1Y3QgPSBzdGF0ZS5zdG9yZVByb2R1Y3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBheWxvYWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNpbmdsZVByb2R1Y3RcIiwgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNpbmdsZVByb2R1Y3Q6IHsgLi4ucHJvZHVjdCB9LCBsb2FkaW5nOiBmYWxzZSB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuR0VUX1NJTkdMRV9QUk9EVUNUOlxyXG4gICAgICBsZXQgc2luZ2xlUHJvZHVjdDtcclxuXHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpbmdsZVByb2R1Y3RcIikpIHtcclxuICAgICAgICBzaW5nbGVQcm9kdWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpbmdsZVByb2R1Y3RcIikhKTtcclxuICAgICAgfSBlbHNlIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaW5nbGVQcm9kdWN0XCIpKSB7XHJcbiAgICAgICAgc2luZ2xlUHJvZHVjdCA9IHt9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBzaW5nbGVQcm9kdWN0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2luZ2xlUHJvZHVjdDogeyAuLi5zaW5nbGVQcm9kdWN0IH0sIGxvYWRpbmc6IGZhbHNlIH07XHJcblxyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5SRU1PVkU6XHJcbiAgICAgIGxldCByZW1vdmVDYXJ0ID0gWy4uLnN0YXRlLmNhcnRdO1xyXG4gICAgICByZW1vdmVDYXJ0ID0gcmVtb3ZlQ2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHBheWxvYWQpO1xyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHJlbW92ZUNhcnQgfTtcclxuXHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLkNMRUFSOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogW10gfTtcclxuXHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLklOQ1JFTUVOVDpcclxuICAgICAgbGV0IGluY0NhcnQgPSBbLi4uc3RhdGUuY2FydF07XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uaW5jQ2FydCB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuREVDUkVNRU5UOlxyXG4gICAgICBsZXQgZGVjQ2FydCA9IFsuLi5zdGF0ZS5jYXJ0XTtcclxuICAgICAgY29uc3QgY2FydEl0ZW0gPSBkZWNDYXJ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBheWxvYWQpO1xyXG5cclxuICAgICAgaWYgKGNhcnRJdGVtLmNvdW50IDw9IDEpIHtcclxuICAgICAgICBsZXQgcmVtb3ZlQ2FydCA9IFsuLi5zdGF0ZS5jYXJ0XTtcclxuICAgICAgICByZW1vdmVDYXJ0ID0gcmVtb3ZlQ2FydC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IHBheWxvYWQpO1xyXG5cclxuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogcmVtb3ZlQ2FydCB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjYXJ0SXRlbS5jb3VudCA9IGNhcnRJdGVtLmNvdW50IC0gMTtcclxuICAgICAgY2FydEl0ZW0udG90YWwgPSBjYXJ0SXRlbS5jb3VudCAqIGNhcnRJdGVtLnByaWNlO1xyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IGRlY0NhcnQgfTtcclxuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG4iLCJleHBvcnQgZW51bSBQcm9kdWN0VHlwZSB7XHJcbiAgU0lERV9CQVJfVE9HR0xFID0gXCJTSURFX0JBUl9UT0dHTEVcIixcclxuICBTSURFX0NBUlRfVE9HR0xFID0gXCJTSURFX0NBUlRfVE9HR0xFXCIsXHJcblxyXG4gIFNFVF9QUk9EVUNUUyA9IFwiU0VUX1BST0RVQ1RTXCIsXHJcbiAgQUREX1RPX0NBUlQgPSBcIkFERF9UT19DQVJUXCIsXHJcbiAgQUREX1RPVEFMUyA9IFwiQUREX1RPVEFMU1wiLFxyXG4gIFNFVF9JVEVNX0NBUlQgPSBcIlNFVF9JVEVNX0NBUlRcIixcclxuICBHRVRfSVRFTV9DQVJUID0gXCJHRVRfSVRFTV9DQVJUXCIsXHJcblxyXG4gIFNFVF9TSU5HTEVfUFJPRFVDVCA9IFwiU0VUX1NJTkdMRV9QUk9EVUNUXCIsXHJcbiAgR0VUX1NJTkdMRV9QUk9EVUNUID0gXCJHRVRfU0lOR0xFX1BST0RVQ1RcIixcclxuXHJcbiAgSU5DUkVNRU5UID0gXCJJTkNSRU1FTlRcIixcclxuICBERUNSRU1FTlQgPSBcIkRFQ1JFTUVOVFwiLFxyXG4gIFJFTU9WRSA9IFwiUkVNT1ZFXCIsXHJcbiAgQ0xFQVIgPSBcIkNMRUFSXCIsXHJcbn1cclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCBwcm9kdWN0UmVkdWNlciBmcm9tIFwiLi9wcm9kdWN0L3Byb2R1Y3RSZWR1Y2VyXCI7XHJcblxyXG5pbXBvcnQgeyBwZXJzaXN0UmVkdWNlciB9IGZyb20gXCJyZWR1eC1wZXJzaXN0XCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlXCI7XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogXCJyYXNwYmVycnlcIixcclxuICBzdG9yYWdlLFxyXG4gIHdoaXRlbGlzdDogW1wiXCJdLFxyXG59O1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIHByb2R1Y3Q6IHByb2R1Y3RSZWR1Y2VyLFxyXG59KTtcclxuXHJcbmV4cG9ydCB0eXBlIElBcHBTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPjtcclxuZXhwb3J0IGRlZmF1bHQgcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tIFwiLi9yb290UmVkdWNlclwiO1xyXG5cclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgcmVkdXhNdWx0aSBmcm9tIFwicmVkdXgtbXVsdGlcIjtcclxuXHJcbmltcG9ydCAqIGFzIHByb2Nlc3MgZnJvbSBcInByb2Nlc3NcIjtcclxuXHJcblxyXG4vKipcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgRVhQTEFOQVRJT04gOlxyXG58IFxyXG58IE9ubHkgc2hvdyB0aGUgcmVkdXgtZGV2dG9vbHMgaW4gZGV2ZWxvcHBlbWVudC4gXHJcbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4qL1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBXaW5kb3cge1xyXG4gICAgX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fPzogdHlwZW9mIGNvbXBvc2U7XHJcbiAgfVxyXG59XHJcblxyXG5sZXQgY29tcG9zZUVuaGFuY2VycztcclxuXHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gICAgY29tcG9zZUVuaGFuY2VycyA9IG51bGwgfHwgY29tcG9zZTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29tcG9zZUVuaGFuY2VycyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fKSB8fCBjb21wb3NlO1xyXG4gIH1cclxuXHJcblxyXG4vKipcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbnwgRVhQTEFOQVRJT04gOlxyXG58IFxyXG58IFBhc3NpbmcgdGhlIGZvbGxvd2luZyBkYXRhIHRvIHRoZSBpbmRleC5qcyBmaWxlXHJcbnwgaW4gdGhlIHJvb3RcclxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiovXHJcbmV4cG9ydCBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2VFbmhhbmNlcnMoYXBwbHlNaWRkbGV3YXJlKHJlZHV4TXVsdGksIHRodW5rKSlcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwZXJzaXN0b3IgPSBwZXJzaXN0U3RvcmUoc3RvcmUpO1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tIFwiLi4vUmVkdXgvc3RvcmVcIlxyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9MYXlvdXQvaW5kZXhcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgIDxMYXlvdXQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvSG9tZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvUXVldWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvc3R5bGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb2Nlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LW11bHRpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9