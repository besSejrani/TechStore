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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Card/Card.tsx":
/*!**********************************!*\
  !*** ./Components/Card/Card.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Redux_product_productAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Redux/product/productAction */ "./Redux/product/productAction.ts");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Rating */ "@material-ui/lab/Rating");
/* harmony import */ var _material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Add */ "@material-ui/icons/Add");
/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\Components\\Card\\Card.tsx";
 // Redux


 // Styles


 // Icon




const Product = ({
  product
}) => {
  const classes = useStyles();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardActionArea"], {
      className: classes.area,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardMedia"] // component={Link}
      // to={`/products/${product.id}`}
      , {
        className: classes.media,
        onClick: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_3__["setSingleProduct"])(product.id)),
        image: product.image,
        title: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardContent"], {
      className: classes.content,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        gutterBottom: true,
        variant: "body1",
        color: "secondary",
        children: [product.price, ".-"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        gutterBottom: true,
        variant: "h6",
        component: "h2",
        children: product.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Typography"], {
        gutterBottom: true,
        variant: "body2",
        children: product.description.split("", 114).concat("...")
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["CardActions"], {
      className: classes.actions,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(StyledRating, {
        value: 2,
        readOnly: true,
        size: "small",
        name: "customized-color",
        defaultValue: 2,
        precision: 0.5
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        size: "small",
        onClick: () => dispatch(Object(_Redux_product_productAction__WEBPACK_IMPORTED_MODULE_3__["addToCart"])(product.id)),
        title: "Add to cart",
        color: "secondary",
        variant: "outlined",
        startIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_6___default.a, {
          fontSize: "small"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 22
        }, undefined),
        children: "Add to Cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Product); // =================================================================

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "320px",
    height: "440px",
    marginRight: "20px",
    marginBottom: "20px"
  },
  area: {},
  content: {
    padding: "20px"
  },
  media: {
    height: "200px",
    width: "200px",
    margin: "10px auto"
  },
  actions: {
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-between"
  }
}); // =================================================================

const StyledRating = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])({
  iconFilled: {// color: 'blue',
  },
  iconHover: {
    color: "#ff3d47"
  }
})(_material_ui_lab_Rating__WEBPACK_IMPORTED_MODULE_5___default.a);

/***/ }),

/***/ "./Components/Promotions/Promotions.tsx":
/*!**********************************************!*\
  !*** ./Components/Promotions/Promotions.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card/Card */ "./Components/Card/Card.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\Components\\Promotions\\Promotions.tsx";
 // Redux





const Promotions = () => {
  const classes = useStyles();
  const selectFeature = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.product.featuredProducts);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
      className: classes.root,
      children: selectFeature.map(product => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
          product: product
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 20
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"] // component={Link}
      // to="/products"
      , {
        variant: "outlined",
        className: "main-link",
        style: {
          marginTop: "30px"
        },
        children: "Our products"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Promotions); // =================================================================

const useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "200px 0px 50px 0px"
  }
});

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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Promotions_Promotions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Promotions/Promotions */ "./Components/Promotions/Promotions.tsx");


var _jsxFileName = "C:\\Users\\Besjan.SEJRANI\\Desktop\\ecommerce-tech\\Client\\pages\\index.tsx";



const Home = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Promotions_Promotions__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), "hi"]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (Home); // =================================================================

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Add");

/***/ }),

/***/ "@material-ui/lab/Rating":
/*!******************************************!*\
  !*** external "@material-ui/lab/Rating" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Rating");

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9DYXJkL0NhcmQudHN4Iiwid2VicGFjazovLy8uL0NvbXBvbmVudHMvUHJvbW90aW9ucy9Qcm9tb3Rpb25zLnRzeCIsIndlYnBhY2s6Ly8vLi9SZWR1eC9wcm9kdWN0L3Byb2R1Y3RBY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vUmVkdXgvcHJvZHVjdC9wcm9kdWN0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9SYXRpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiUHJvZHVjdCIsInByb2R1Y3QiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvb3QiLCJhcmVhIiwibWVkaWEiLCJzZXRTaW5nbGVQcm9kdWN0IiwiaWQiLCJpbWFnZSIsInRpdGxlIiwiY29udGVudCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJzcGxpdCIsImNvbmNhdCIsImFjdGlvbnMiLCJhZGRUb0NhcnQiLCJtYWtlU3R5bGVzIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJmbGV4V3JhcCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luUmlnaHQiLCJtYXJnaW5Cb3R0b20iLCJwYWRkaW5nIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJTdHlsZWRSYXRpbmciLCJ3aXRoU3R5bGVzIiwiaWNvbkZpbGxlZCIsImljb25Ib3ZlciIsImNvbG9yIiwiUmF0aW5nIiwiUHJvbW90aW9ucyIsInNlbGVjdEZlYXR1cmUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZmVhdHVyZWRQcm9kdWN0cyIsIm1hcCIsIm1hcmdpblRvcCIsInNpZGViYXJUb2dnbGUiLCJ0eXBlIiwiUHJvZHVjdFR5cGUiLCJTSURFX0JBUl9UT0dHTEUiLCJzaWRlYmFyQ2FydCIsIlNJREVfQ0FSVF9UT0dHTEUiLCJzZXRQcm9kdWN0cyIsInByb2R1Y3RzIiwiU0VUX1BST0RVQ1RTIiwicGF5bG9hZCIsIkdFVF9JVEVNX0NBUlQiLCJBRERfVE9fQ0FSVCIsIkFERF9UT1RBTFMiLCJTRVRfSVRFTV9DQVJUIiwiYWRkVG90YWxzIiwiU0VUX1NJTkdMRV9QUk9EVUNUIiwiZ2V0U2luZ2xlUHJvZHVjdCIsIkdFVF9TSU5HTEVfUFJPRFVDVCIsImdldEl0ZW1DYXJ0IiwiaW5jcmVtZW50IiwiSU5DUkVNRU5UIiwiZGVjcmVtZW50IiwiREVDUkVNRU5UIiwicmVtb3ZlIiwiUkVNT1ZFIiwiY2xlYXJDYXJ0IiwibG9jYWxTdG9yYWdlIiwiY2xlYXIiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsIkNMRUFSIiwiSG9tZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMv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QUFBRVosUUFBSSxFQUFFQyx3REFBVyxDQUFDVTtBQUFwQixHQUpLLEVBS0w7QUFBRVgsUUFBSSxFQUFFQyx3REFBVyxDQUFDUTtBQUFwQixHQUxLLENBQVA7QUFPRCxDQVJNO0FBVUEsTUFBTWUsU0FBUyxHQUFHLE1BQU0sWUFBWTtBQUN6QyxRQUFNQyxZQUFZLENBQUNDLEtBQWIsRUFBTjtBQUNBLFFBQU1DLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsRUFBTjtBQUVBLFNBQU8sQ0FBQztBQUFFN0IsUUFBSSxFQUFFQyx3REFBVyxDQUFDNkI7QUFBcEIsR0FBRCxDQUFQO0FBQ0QsQ0FMTSxDOzs7Ozs7Ozs7Ozs7QUN0RVA7QUFBQTtBQUFPLElBQUs3QixXQUFaOztXQUFZQSxXO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0FBQUFBLGE7QUFBQUEsYTtBQUFBQSxhO0FBQUFBLGE7R0FBQUEsVyxLQUFBQSxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBWjtBQUVBOztBQUlBLE1BQU04QixJQUFjLEdBQUcsTUFBTTtBQUMzQixzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFBQSxrQkFERjtBQU1ELENBUEQ7O0FBU2VBLG1FQUFmLEUsQ0FFQSxvRTs7Ozs7Ozs7Ozs7QUNqQkEsOEM7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFJlZHV4XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGFkZFRvQ2FydCwgc2V0U2luZ2xlUHJvZHVjdCB9IGZyb20gXCIuLi8uLi9SZWR1eC9wcm9kdWN0L3Byb2R1Y3RBY3Rpb25cIjtcclxuXHJcbi8vIFN0eWxlc1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5cclxuaW1wb3J0IHsgSWNvbkJ1dHRvbiB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL1JhdGluZ1wiO1xyXG5cclxuLy8gSWNvblxyXG5pbXBvcnQgU2hvcHBpbmdDYXJ0SWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL1Nob3BwaW5nQ2FydFwiO1xyXG5pbXBvcnQgQWRkSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0FkZFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQ2FyZCxcclxuICBDYXJkQWN0aW9uQXJlYSxcclxuICBDYXJkQWN0aW9ucyxcclxuICBDYXJkTWVkaWEsXHJcbiAgQ2FyZENvbnRlbnQsXHJcbiAgbWFrZVN0eWxlcyxcclxuICBUeXBvZ3JhcGh5LFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuaW50ZXJmYWNlIElQcm9kdWN0IHtcclxuICBwcm9kdWN0OiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIHByaWNlOiBudW1iZXI7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gICAgaW1hZ2U6IGFueTtcclxuICAgIGZlYXR1cmVkPzogYm9vbGVhbjtcclxuICAgIGNvbXBhbnk/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuY29uc3QgUHJvZHVjdDogUmVhY3QuRkM8SVByb2R1Y3Q+ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENhcmRBY3Rpb25BcmVhIGNsYXNzTmFtZT17Y2xhc3Nlcy5hcmVhfT5cclxuICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAvLyBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAvLyB0bz17YC9wcm9kdWN0cy8ke3Byb2R1Y3QuaWR9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHNldFNpbmdsZVByb2R1Y3QocHJvZHVjdC5pZCkpfVxyXG4gICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QuaW1hZ2V9XHJcbiAgICAgICAgICB0aXRsZT17cHJvZHVjdC50aXRsZX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICA8Q2FyZENvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiYm9keTFcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxyXG4gICAgICAgICAge3Byb2R1Y3QucHJpY2V9Li1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAge3Byb2R1Y3QudGl0bGV9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImJvZHkyXCI+XHJcbiAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbi5zcGxpdChcIlwiLCAxMTQpLmNvbmNhdChcIi4uLlwiKX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcblxyXG4gICAgICA8Q2FyZEFjdGlvbnMgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgIDxTdHlsZWRSYXRpbmcgdmFsdWU9ezJ9IHJlYWRPbmx5IHNpemU9XCJzbWFsbFwiIG5hbWU9XCJjdXN0b21pemVkLWNvbG9yXCIgZGVmYXVsdFZhbHVlPXsyfSBwcmVjaXNpb249ezAuNX0gLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZFRvQ2FydChwcm9kdWN0LmlkKSl9XHJcbiAgICAgICAgICB0aXRsZT1cIkFkZCB0byBjYXJ0XCJcclxuICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICBzdGFydEljb249ezxBZGRJY29uIGZvbnRTaXplPXtcInNtYWxsXCJ9IC8+fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEFkZCB0byBDYXJ0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgZmxleFdyYXA6IFwid3JhcFwiLFxyXG5cclxuICAgIHdpZHRoOiBcIjMyMHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiNDQwcHhcIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjIwcHhcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXHJcbiAgfSxcclxuICBhcmVhOiB7fSxcclxuICBjb250ZW50OiB7XHJcbiAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IFwiMjAwcHhcIixcclxuICAgIHdpZHRoOiBcIjIwMHB4XCIsXHJcbiAgICBtYXJnaW46IFwiMTBweCBhdXRvXCIsXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBwYWRkaW5nOiBcIjBweCAyMHB4XCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICB9LFxyXG59KTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5jb25zdCBTdHlsZWRSYXRpbmcgPSB3aXRoU3R5bGVzKHtcclxuICBpY29uRmlsbGVkOiB7XHJcbiAgICAvLyBjb2xvcjogJ2JsdWUnLFxyXG4gIH0sXHJcbiAgaWNvbkhvdmVyOiB7XHJcbiAgICBjb2xvcjogXCIjZmYzZDQ3XCIsXHJcbiAgfSxcclxufSkoUmF0aW5nKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuXHJcbi8vIFJlZHV4XHJcbmltcG9ydCB7IElBcHBTdGF0ZSB9IGZyb20gXCIuLi8uLi9SZWR1eC9yb290UmVkdWNlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL0NhcmQvQ2FyZFwiO1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uLCBDb250YWluZXIsIG1ha2VTdHlsZXN9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5cclxuY29uc3QgUHJvbW90aW9ucyA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBzZWxlY3RGZWF0dXJlID0gdXNlU2VsZWN0b3IoKHN0YXRlOiBJQXBwU3RhdGUpID0+IHN0YXRlLnByb2R1Y3QuZmVhdHVyZWRQcm9kdWN0cyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIHtzZWxlY3RGZWF0dXJlLm1hcCgocHJvZHVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPENhcmQga2V5PXtwcm9kdWN0LmlkfSBwcm9kdWN0PXtwcm9kdWN0fSAvPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgLy8gY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIC8vIHRvPVwiL3Byb2R1Y3RzXCJcclxuICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4tbGlua1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgT3VyIHByb2R1Y3RzXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9tb3Rpb25zO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xyXG4gIHJvb3Q6e1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXHJcbiAgICBtYXJnaW46IFwiMjAwcHggMHB4IDUwcHggMHB4XCJcclxuICB9XHJcbn0pIiwiaW1wb3J0IHsgUHJvZHVjdFR5cGUgfSBmcm9tIFwiLi9wcm9kdWN0VHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZGViYXJUb2dnbGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuU0lERV9CQVJfVE9HR0xFIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2lkZWJhckNhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuU0lERV9DQVJUX1RPR0dMRSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFByb2R1Y3RzID0gKHByb2R1Y3RzKSA9PiB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IFByb2R1Y3RUeXBlLlNFVF9QUk9EVUNUUywgcGF5bG9hZDogcHJvZHVjdHMgfSwgeyB0eXBlOiBQcm9kdWN0VHlwZS5HRVRfSVRFTV9DQVJUIH1dO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFRvQ2FydCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT19DQVJULCBwYXlsb2FkOiBpZCB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5BRERfVE9UQUxTIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLlNFVF9JVEVNX0NBUlQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPVEFMUyB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG90YWxzID0gKCkgPT4ge1xyXG4gIHJldHVybiB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT1RBTFMgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTaW5nbGVQcm9kdWN0ID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuU0VUX1NJTkdMRV9QUk9EVUNULCBwYXlsb2FkOiBpZCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNpbmdsZVByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuR0VUX1NJTkdMRV9QUk9EVUNUIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SXRlbUNhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHsgdHlwZTogUHJvZHVjdFR5cGUuR0VUX0lURU1fQ0FSVCB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluY3JlbWVudCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLklOQ1JFTUVOVCwgcGF5bG9hZDogaWQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPX0NBUlQsIHBheWxvYWQ6IGlkIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT1RBTFMgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuU0VUX0lURU1fQ0FSVCB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5BRERfVE9UQUxTIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkdFVF9JVEVNX0NBUlQgfSxcclxuICBdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlbWVudCA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkRFQ1JFTUVOVCwgcGF5bG9hZDogaWQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPVEFMUyB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5TRVRfSVRFTV9DQVJUIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLkFERF9UT1RBTFMgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuR0VUX0lURU1fQ0FSVCB9LFxyXG4gIF07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlID0gKGlkKSA9PiB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuUkVNT1ZFLCBwYXlsb2FkOiBpZCB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5BRERfVE9UQUxTIH0sXHJcbiAgICB7IHR5cGU6IFByb2R1Y3RUeXBlLlNFVF9JVEVNX0NBUlQgfSxcclxuICAgIHsgdHlwZTogUHJvZHVjdFR5cGUuQUREX1RPVEFMUyB9LFxyXG4gICAgeyB0eXBlOiBQcm9kdWN0VHlwZS5HRVRfSVRFTV9DQVJUIH0sXHJcbiAgXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjbGVhckNhcnQgPSAoKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgYXdhaXQgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG5cclxuICByZXR1cm4gW3sgdHlwZTogUHJvZHVjdFR5cGUuQ0xFQVIgfV07XHJcbn07XHJcbiIsImV4cG9ydCBlbnVtIFByb2R1Y3RUeXBlIHtcclxuICBTSURFX0JBUl9UT0dHTEUgPSBcIlNJREVfQkFSX1RPR0dMRVwiLFxyXG4gIFNJREVfQ0FSVF9UT0dHTEUgPSBcIlNJREVfQ0FSVF9UT0dHTEVcIixcclxuXHJcbiAgU0VUX1BST0RVQ1RTID0gXCJTRVRfUFJPRFVDVFNcIixcclxuICBBRERfVE9fQ0FSVCA9IFwiQUREX1RPX0NBUlRcIixcclxuICBBRERfVE9UQUxTID0gXCJBRERfVE9UQUxTXCIsXHJcbiAgU0VUX0lURU1fQ0FSVCA9IFwiU0VUX0lURU1fQ0FSVFwiLFxyXG4gIEdFVF9JVEVNX0NBUlQgPSBcIkdFVF9JVEVNX0NBUlRcIixcclxuXHJcbiAgU0VUX1NJTkdMRV9QUk9EVUNUID0gXCJTRVRfU0lOR0xFX1BST0RVQ1RcIixcclxuICBHRVRfU0lOR0xFX1BST0RVQ1QgPSBcIkdFVF9TSU5HTEVfUFJPRFVDVFwiLFxyXG5cclxuICBJTkNSRU1FTlQgPSBcIklOQ1JFTUVOVFwiLFxyXG4gIERFQ1JFTUVOVCA9IFwiREVDUkVNRU5UXCIsXHJcbiAgUkVNT1ZFID0gXCJSRU1PVkVcIixcclxuICBDTEVBUiA9IFwiQ0xFQVJcIixcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUHJvbW90aW9ucyBmcm9tIFwiLi4vQ29tcG9uZW50cy9Qcm9tb3Rpb25zL1Byb21vdGlvbnNcIjtcclxuXHJcblxyXG5cclxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcm9tb3Rpb25zIC8+XHJcbiAgICAgIGhpXHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQWRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvUmF0aW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9