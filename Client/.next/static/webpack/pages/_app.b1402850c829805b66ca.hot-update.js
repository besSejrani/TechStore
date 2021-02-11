webpackHotUpdate_N_E("pages/_app",{

/***/ "./Data/productData.ts":
false,

/***/ "./Redux/product/productReducer.ts":
/*!*****************************************!*\
  !*** ./Redux/product/productReducer.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _productType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./productType */ "./Redux/product/productType.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-unused-vars */

/* eslint-disable no-fallthrough */

var initialState = {
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
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload,
      type = action.type;

  switch (type) {
    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].SIDE_BAR_TOGGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        sidebarOpen: !state.sidebarOpen
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].SIDE_CART_TOGGLE:
      return _objectSpread(_objectSpread({}, state), {}, {
        cartOpen: !state.cartOpen
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].SET_PRODUCTS:
      var storeProducts = payload.map(function (item) {
        var id = item.sys.id;
        var image = item.fields.image.fields.file.url;

        var product = _objectSpread(_objectSpread({
          id: id
        }, item.fields), {}, {
          image: image
        });

        return product;
      });
      var featuredProducts = storeProducts.filter(function (item) {
        return item.featured === true;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        storeProducts: storeProducts,
        filteredProducts: storeProducts,
        featuredProducts: featuredProducts,
        loading: false
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].ADD_TO_CART:
      var tempCart = Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart);

      var tempProducts = Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.storeProducts);

      var tempItem = tempCart.find(function (item) {
        return item.id === payload;
      });

      if (!tempItem) {
        tempItem = tempProducts.find(function (item) {
          return item.id === payload;
        });
        var _total = tempItem.price;

        var _cartItem = _objectSpread(_objectSpread({}, tempItem), {}, {
          count: 1,
          total: _total
        });

        tempCart = [].concat(Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(tempCart), [_cartItem]);
      } else {
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        cart: tempCart
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].ADD_TOTALS:
      var subTotal = 0;
      var cartItems = 0;
      state.cart.forEach(function (item) {
        subTotal += item.total;
        cartItems += item.count;
      });
      subTotal = parseFloat(subTotal).toFixed(2);
      var tax = parseFloat(subTotal * 0.2).toFixed(2);
      var total = subTotal + tax;
      total = parseFloat(total).toFixed(2);
      return _objectSpread(_objectSpread({}, state), {}, {
        cartItems: cartItems,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].SET_ITEM_CART:
      var obj = {};
      var cartStringify;
      var cartSubTotalStringify;
      var cartTaxStringify;
      obj.cartStringify = state.cart;
      obj.cartSubTotalStringify = Number(state.cartSubTotal);
      obj.cartTaxStringify = Number(state.cartTax);
      localStorage.setItem("cart", JSON.stringify(obj));
      return _objectSpread({}, state);

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].GET_ITEM_CART:
      var cart = [];
      var count = 0;
      var cartTotal = 0;
      var cartSubTotal = 0;
      var cartTax = 0;

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        cart.cartStringify.map(function (item) {
          return count += item.count;
        });
        cart.cartStringify.map(function (item) {
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

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].SET_SINGLE_PRODUCT:
      var product = state.storeProducts.find(function (item) {
        return item.id === payload;
      });
      localStorage.setItem("singleProduct", JSON.stringify(product));
      return _objectSpread(_objectSpread({}, state), {}, {
        singleProduct: _objectSpread({}, product),
        loading: false
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].GET_SINGLE_PRODUCT:
      var singleProduct;

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

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].REMOVE:
      var removeCart = Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart);

      removeCart = removeCart.filter(function (item) {
        return item.id !== payload;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: removeCart
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].CLEAR:
      return _objectSpread(_objectSpread({}, state), {}, {
        cart: []
      });

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].INCREMENT:
      var incCart = Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart);

      return _objectSpread(_objectSpread({}, state), incCart);

    case _productType__WEBPACK_IMPORTED_MODULE_2__["ProductType"].DECREMENT:
      var decCart = Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart);

      var cartItem = decCart.find(function (item) {
        return item.id === payload;
      });

      if (cartItem.count <= 1) {
        var _removeCart = Object(C_Users_Besjan_SEJRANI_Desktop_ecommerce_tech_Client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cart);

        _removeCart = _removeCart.filter(function (item) {
          return item.id !== payload;
        });
        return _objectSpread(_objectSpread({}, state), {}, {
          cart: _removeCart
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vUmVkdXgvcHJvZHVjdC9wcm9kdWN0UmVkdWNlci50cyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJzaWRlYmFyT3BlbiIsImNhcnRPcGVuIiwiY2FydEl0ZW1zIiwiY2FydCIsImNhcnRTdWJUb3RhbCIsImNhcnRUYXgiLCJjYXJ0VG90YWwiLCJzdG9yZVByb2R1Y3RzIiwiZmlsdGVyZWRQcm9kdWN0cyIsImZlYXR1cmVkUHJvZHVjdHMiLCJzaW5nbGVQcm9kdWN0IiwibG9hZGluZyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInR5cGUiLCJQcm9kdWN0VHlwZSIsIlNJREVfQkFSX1RPR0dMRSIsIlNJREVfQ0FSVF9UT0dHTEUiLCJTRVRfUFJPRFVDVFMiLCJtYXAiLCJpdGVtIiwiaWQiLCJzeXMiLCJpbWFnZSIsImZpZWxkcyIsImZpbGUiLCJ1cmwiLCJwcm9kdWN0IiwiZmlsdGVyIiwiZmVhdHVyZWQiLCJBRERfVE9fQ0FSVCIsInRlbXBDYXJ0IiwidGVtcFByb2R1Y3RzIiwidGVtcEl0ZW0iLCJmaW5kIiwidG90YWwiLCJwcmljZSIsImNhcnRJdGVtIiwiY291bnQiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIkFERF9UT1RBTFMiLCJzdWJUb3RhbCIsImZvckVhY2giLCJ0YXgiLCJTRVRfSVRFTV9DQVJUIiwib2JqIiwiY2FydFN0cmluZ2lmeSIsImNhcnRTdWJUb3RhbFN0cmluZ2lmeSIsImNhcnRUYXhTdHJpbmdpZnkiLCJOdW1iZXIiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsIkdFVF9JVEVNX0NBUlQiLCJnZXRJdGVtIiwicGFyc2UiLCJTRVRfU0lOR0xFX1BST0RVQ1QiLCJHRVRfU0lOR0xFX1BST0RVQ1QiLCJSRU1PVkUiLCJyZW1vdmVDYXJ0IiwiQ0xFQVIiLCJJTkNSRU1FTlQiLCJpbmNDYXJ0IiwiREVDUkVNRU5UIiwiZGVjQ2FydCJdLCJtYXBwaW5ncyI6Ijs7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QUFHLDhKQUFJbEQsS0FBSyxDQUFDVCxJQUFiLENBQWQ7O0FBQ0EyRCxtQkFBVSxHQUFHQSxXQUFVLENBQUNqQyxNQUFYLENBQWtCLFVBQUNSLElBQUQ7QUFBQSxpQkFBVUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlSLE9BQXRCO0FBQUEsU0FBbEIsQ0FBYjtBQUVBLCtDQUFZRixLQUFaO0FBQW1CVCxjQUFJLEVBQUUyRDtBQUF6QjtBQUNEOztBQUVEeEIsY0FBUSxDQUFDQyxLQUFULEdBQWlCRCxRQUFRLENBQUNDLEtBQVQsR0FBaUIsQ0FBbEM7QUFDQUQsY0FBUSxDQUFDRixLQUFULEdBQWlCRSxRQUFRLENBQUNDLEtBQVQsR0FBaUJELFFBQVEsQ0FBQ0QsS0FBM0M7QUFFQSw2Q0FBWXpCLEtBQVo7QUFBbUJULFlBQUksRUFBRWdFO0FBQXpCOztBQUVGO0FBQ0UsYUFBT3ZELEtBQVA7QUF0S0o7QUF3S0QsQ0EzS0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5iMTQwMjg1MGM4Mjk4MDViNjZjYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuLyogZXNsaW50LWRpc2FibGUgbm8tZmFsbHRocm91Z2ggKi9cclxuaW1wb3J0IHsgUHJvZHVjdFR5cGUgfSBmcm9tIFwiLi9wcm9kdWN0VHlwZVwiO1xyXG5cclxuaW50ZXJmYWNlIFByb2R1Y3RTdGF0ZSB7XHJcbiAgc2lkZWJhck9wZW46IGJvb2xlYW47XHJcbiAgY2FydE9wZW46IGJvb2xlYW47XHJcbiAgY2FydEl0ZW1zOiBudW1iZXI7XHJcbiAgY2FydDogYW55W107XHJcbiAgY2FydFN1YlRvdGFsOiBudW1iZXI7XHJcbiAgY2FydFRheDogbnVtYmVyO1xyXG4gIGNhcnRUb3RhbDogbnVtYmVyO1xyXG4gIHN0b3JlUHJvZHVjdHM6IGFueVtdO1xyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IGFueVtdO1xyXG4gIGZlYXR1cmVkUHJvZHVjdHM6IGFueVtdO1xyXG4gIHNpbmdsZVByb2R1Y3Q6IGFueTtcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc2lkZWJhck9wZW46IGZhbHNlLFxyXG4gIGNhcnRPcGVuOiBmYWxzZSxcclxuICBjYXJ0SXRlbXM6IDAsXHJcbiAgY2FydDogW10sXHJcbiAgY2FydFN1YlRvdGFsOiAwLFxyXG4gIGNhcnRUYXg6IDAsXHJcbiAgY2FydFRvdGFsOiAwLFxyXG4gIHN0b3JlUHJvZHVjdHM6IFtdLFxyXG4gIGZpbHRlcmVkUHJvZHVjdHM6IFtdLFxyXG4gIGZlYXR1cmVkUHJvZHVjdHM6IFtdLFxyXG4gIHNpbmdsZVByb2R1Y3Q6IHt9LFxyXG4gIGxvYWRpbmc6IHRydWUsXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgQWN0aW9uIHtcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgcGF5bG9hZD86IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlOiBQcm9kdWN0U3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbjogQWN0aW9uKTogUHJvZHVjdFN0YXRlID0+IHtcclxuICBjb25zdCB7IHBheWxvYWQsIHR5cGUgfSA9IGFjdGlvbjtcclxuXHJcbiAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLlNJREVfQkFSX1RPR0dMRTpcclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHNpZGViYXJPcGVuOiAhc3RhdGUuc2lkZWJhck9wZW4gfTtcclxuXHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLlNJREVfQ0FSVF9UT0dHTEU6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0T3BlbjogIXN0YXRlLmNhcnRPcGVuIH07XHJcblxyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5TRVRfUFJPRFVDVFM6XHJcbiAgICAgIGxldCBzdG9yZVByb2R1Y3RzID0gcGF5bG9hZC5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCB7IGlkIH0gPSBpdGVtLnN5cztcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGl0ZW0uZmllbGRzLmltYWdlLmZpZWxkcy5maWxlLnVybDtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0geyBpZCwgLi4uaXRlbS5maWVsZHMsIGltYWdlIH07XHJcbiAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgbGV0IGZlYXR1cmVkUHJvZHVjdHMgPSBzdG9yZVByb2R1Y3RzLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5mZWF0dXJlZCA9PT0gdHJ1ZSk7XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHN0b3JlUHJvZHVjdHM6IHN0b3JlUHJvZHVjdHMsXHJcbiAgICAgICAgZmlsdGVyZWRQcm9kdWN0czogc3RvcmVQcm9kdWN0cyxcclxuICAgICAgICBmZWF0dXJlZFByb2R1Y3RzOiBmZWF0dXJlZFByb2R1Y3RzLFxyXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuQUREX1RPX0NBUlQ6XHJcbiAgICAgIGxldCB0ZW1wQ2FydCA9IFsuLi5zdGF0ZS5jYXJ0XTtcclxuICAgICAgbGV0IHRlbXBQcm9kdWN0cyA9IFsuLi5zdGF0ZS5zdG9yZVByb2R1Y3RzXTtcclxuXHJcbiAgICAgIGxldCB0ZW1wSXRlbSA9IHRlbXBDYXJ0LmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBheWxvYWQpO1xyXG5cclxuICAgICAgaWYgKCF0ZW1wSXRlbSkge1xyXG4gICAgICAgIHRlbXBJdGVtID0gdGVtcFByb2R1Y3RzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHBheWxvYWQpO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IHRlbXBJdGVtLnByaWNlO1xyXG4gICAgICAgIGxldCBjYXJ0SXRlbSA9IHsgLi4udGVtcEl0ZW0sIGNvdW50OiAxLCB0b3RhbCB9O1xyXG4gICAgICAgIHRlbXBDYXJ0ID0gWy4uLnRlbXBDYXJ0LCBjYXJ0SXRlbV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGVtcEl0ZW0uY291bnQrKztcclxuXHJcbiAgICAgICAgdGVtcEl0ZW0udG90YWwgPSB0ZW1wSXRlbS5wcmljZSAqIHRlbXBJdGVtLmNvdW50O1xyXG4gICAgICAgIHRlbXBJdGVtLnRvdGFsID0gcGFyc2VGbG9hdCh0ZW1wSXRlbS50b3RhbC50b0ZpeGVkKDIpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNhcnQ6IHRlbXBDYXJ0IH07XHJcblxyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5BRERfVE9UQUxTOlxyXG4gICAgICBsZXQgc3ViVG90YWw6IGFueSA9IDA7XHJcbiAgICAgIGxldCBjYXJ0SXRlbXM6IGFueSA9IDA7XHJcbiAgICAgIHN0YXRlLmNhcnQuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIHN1YlRvdGFsICs9IGl0ZW0udG90YWw7XHJcbiAgICAgICAgY2FydEl0ZW1zICs9IGl0ZW0uY291bnQ7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgc3ViVG90YWwgPSBwYXJzZUZsb2F0KHN1YlRvdGFsKS50b0ZpeGVkKDIpO1xyXG4gICAgICBsZXQgdGF4ID0gcGFyc2VGbG9hdCgoc3ViVG90YWwgKiAwLjIpIGFzIGFueSkudG9GaXhlZCgyKTtcclxuICAgICAgbGV0IHRvdGFsID0gc3ViVG90YWwgKyB0YXg7XHJcbiAgICAgIHRvdGFsID0gcGFyc2VGbG9hdCh0b3RhbCkudG9GaXhlZCgyKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBjYXJ0SXRlbXMsXHJcbiAgICAgICAgY2FydFN1YlRvdGFsOiBzdWJUb3RhbCxcclxuICAgICAgICBjYXJ0VGF4OiB0YXggYXMgYW55LFxyXG4gICAgICAgIGNhcnRUb3RhbDogdG90YWwgYXMgYW55LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuU0VUX0lURU1fQ0FSVDpcclxuICAgICAgbGV0IG9iajogYW55ID0ge307XHJcbiAgICAgIGxldCBjYXJ0U3RyaW5naWZ5O1xyXG4gICAgICBsZXQgY2FydFN1YlRvdGFsU3RyaW5naWZ5O1xyXG4gICAgICBsZXQgY2FydFRheFN0cmluZ2lmeTtcclxuXHJcbiAgICAgIG9iai5jYXJ0U3RyaW5naWZ5ID0gc3RhdGUuY2FydDtcclxuICAgICAgb2JqLmNhcnRTdWJUb3RhbFN0cmluZ2lmeSA9IE51bWJlcihzdGF0ZS5jYXJ0U3ViVG90YWwpO1xyXG4gICAgICBvYmouY2FydFRheFN0cmluZ2lmeSA9IE51bWJlcihzdGF0ZS5jYXJ0VGF4KTtcclxuXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydFwiLCBKU09OLnN0cmluZ2lmeShvYmopKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIH07XHJcblxyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5HRVRfSVRFTV9DQVJUOlxyXG4gICAgICBsZXQgY2FydDogYW55ID0gW107XHJcbiAgICAgIGxldCBjb3VudDogYW55ID0gMDtcclxuICAgICAgbGV0IGNhcnRUb3RhbDogYW55ID0gMDtcclxuICAgICAgbGV0IGNhcnRTdWJUb3RhbDogYW55ID0gMDtcclxuICAgICAgbGV0IGNhcnRUYXg6IGFueSA9IDA7XHJcblxyXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpKSB7XHJcbiAgICAgICAgY2FydCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0XCIpISk7XHJcblxyXG4gICAgICAgIGNhcnQuY2FydFN0cmluZ2lmeS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoY291bnQgKz0gaXRlbS5jb3VudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNhcnQuY2FydFN0cmluZ2lmeS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGNhcnRUb3RhbCArPSBpdGVtLnRvdGFsO1xyXG5cclxuICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KGNhcnRUb3RhbCkudG9GaXhlZCgyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjYXJ0LmNhcnRTdHJpbmdpZnkgPSBjYXJ0O1xyXG4gICAgICAgIGNhcnQuY2FydFN1YlRvdGFsU3RyaW5naWZ5ID0gcGFyc2VGbG9hdChjYXJ0U3ViVG90YWwpLnRvRml4ZWQoMik7XHJcbiAgICAgICAgY2FydC5jYXJ0VGF4U3RyaW5naWZ5ID0gcGFyc2VGbG9hdChjYXJ0VGF4KS50b0ZpeGVkKDIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGNhcnQ6IGNhcnQuY2FydFN0cmluZ2lmeSxcclxuICAgICAgICBjYXJ0SXRlbXM6IGNvdW50LFxyXG4gICAgICAgIGNhcnRUb3RhbDogY2FydFRvdGFsLFxyXG4gICAgICAgIGNhcnRTdWJUb3RhbDogY2FydC5jYXJ0U3ViVG90YWxTdHJpbmdpZnksXHJcbiAgICAgICAgY2FydFRheDogY2FydC5jYXJ0VGF4U3RyaW5naWZ5LFxyXG4gICAgICB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuU0VUX1NJTkdMRV9QUk9EVUNUOlxyXG4gICAgICBsZXQgcHJvZHVjdCA9IHN0YXRlLnN0b3JlUHJvZHVjdHMuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGF5bG9hZCk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2luZ2xlUHJvZHVjdFwiLCBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgc2luZ2xlUHJvZHVjdDogeyAuLi5wcm9kdWN0IH0sIGxvYWRpbmc6IGZhbHNlIH07XHJcblxyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5HRVRfU0lOR0xFX1BST0RVQ1Q6XHJcbiAgICAgIGxldCBzaW5nbGVQcm9kdWN0O1xyXG5cclxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2luZ2xlUHJvZHVjdFwiKSkge1xyXG4gICAgICAgIHNpbmdsZVByb2R1Y3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2luZ2xlUHJvZHVjdFwiKSEpO1xyXG4gICAgICB9IGVsc2UgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNpbmdsZVByb2R1Y3RcIikpIHtcclxuICAgICAgICBzaW5nbGVQcm9kdWN0ID0ge307XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNpbmdsZVByb2R1Y3Q7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBzaW5nbGVQcm9kdWN0OiB7IC4uLnNpbmdsZVByb2R1Y3QgfSwgbG9hZGluZzogZmFsc2UgfTtcclxuXHJcbiAgICBjYXNlIFByb2R1Y3RUeXBlLlJFTU9WRTpcclxuICAgICAgbGV0IHJlbW92ZUNhcnQgPSBbLi4uc3RhdGUuY2FydF07XHJcbiAgICAgIHJlbW92ZUNhcnQgPSByZW1vdmVDYXJ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcGF5bG9hZCk7XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogcmVtb3ZlQ2FydCB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuQ0xFQVI6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiBbXSB9O1xyXG5cclxuICAgIGNhc2UgUHJvZHVjdFR5cGUuSU5DUkVNRU5UOlxyXG4gICAgICBsZXQgaW5jQ2FydCA9IFsuLi5zdGF0ZS5jYXJ0XTtcclxuXHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5pbmNDYXJ0IH07XHJcblxyXG4gICAgY2FzZSBQcm9kdWN0VHlwZS5ERUNSRU1FTlQ6XHJcbiAgICAgIGxldCBkZWNDYXJ0ID0gWy4uLnN0YXRlLmNhcnRdO1xyXG4gICAgICBjb25zdCBjYXJ0SXRlbSA9IGRlY0NhcnQuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGF5bG9hZCk7XHJcblxyXG4gICAgICBpZiAoY2FydEl0ZW0uY291bnQgPD0gMSkge1xyXG4gICAgICAgIGxldCByZW1vdmVDYXJ0ID0gWy4uLnN0YXRlLmNhcnRdO1xyXG4gICAgICAgIHJlbW92ZUNhcnQgPSByZW1vdmVDYXJ0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gcGF5bG9hZCk7XHJcblxyXG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBjYXJ0OiByZW1vdmVDYXJ0IH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNhcnRJdGVtLmNvdW50ID0gY2FydEl0ZW0uY291bnQgLSAxO1xyXG4gICAgICBjYXJ0SXRlbS50b3RhbCA9IGNhcnRJdGVtLmNvdW50ICogY2FydEl0ZW0ucHJpY2U7XHJcblxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgY2FydDogZGVjQ2FydCB9O1xyXG5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=