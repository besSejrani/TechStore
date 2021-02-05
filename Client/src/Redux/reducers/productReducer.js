/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import {
  SIDE_BAR_TOGGLE,
  SIDE_CART_TOGGLE,
  ADD_TO_CART,
  ADD_TOTALS,
  SET_ITEM_CART,
  GET_ITEM_CART,
  SET_SINGLE_PRODUCT,
  SET_PRODUCTS,
  GET_SINGLE_PRODUCT,
  INCREMENT,
  DECREMENT,
  REMOVE,
  CLEAR
} from "../actions/types";
import { LinkNav } from "../../layout/LinkNav";
import { social } from "../../layout/linkFooter";

const initialState = {
  sidebarOpen: false,
  cartOpen: false,
  links: LinkNav,
  social: social,
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

export default (state = initialState, actions) => {
  const { payload, type } = actions;

  switch (type) {
    case SIDE_BAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };

    case SIDE_CART_TOGGLE:
      return { ...state, cartOpen: !state.cartOpen };

    case SET_PRODUCTS:
      let storeProducts = payload.map(item => {
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        const product = { id, ...item.fields, image };
        return product;
      });

      let featuredProducts = storeProducts.filter(
        item => item.featured === true
      );

      return {
        ...state,
        storeProducts: storeProducts,
        filteredProducts: storeProducts,
        featuredProducts: featuredProducts,
        loading: false
      };

    case ADD_TO_CART:
      let tempCart = [...state.cart];
      let tempProducts = [...state.storeProducts];

      let tempItem = tempCart.find(item => item.id === payload);

      if (!tempItem) {
        tempItem = tempProducts.find(item => item.id === payload);
        let total = tempItem.price;
        let cartItem = { ...tempItem, count: 1, total };
        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.count++;

        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
      }

      return { ...state, cart: tempCart };

    case ADD_TOTALS:
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

      return {
        ...state,
        cartItems: cartItems,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };

    case SET_ITEM_CART:
      let obj = {};
      let cartStringify;
      let cartSubTotalStringify;
      let cartTaxStringify;

      obj.cartStringify = state.cart;
      obj.cartSubTotalStringify = Number(state.cartSubTotal);
      obj.cartTaxStringify = Number(state.cartTax);

      localStorage.setItem("cart", JSON.stringify(obj));

      return {
        ...state
      };

    case GET_ITEM_CART:
      let cart = [];
      let count = 0;
      let cartTotal = 0;
      let cartSubTotal = 0;
      let cartTax = 0;

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));

        cart.cartStringify.map(item => {
          return (count += item.count);
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

      return {
        ...state,
        cart: cart.cartStringify,
        cartItems: count,
        cartTotal: cartTotal,
        cartSubTotal: cart.cartSubTotalStringify,
        cartTax: cart.cartTaxStringify
      };

    case SET_SINGLE_PRODUCT:
      let product = state.storeProducts.find(item => item.id === payload);
      localStorage.setItem("singleProduct", JSON.stringify(product));

      return { ...state, singleProduct: { ...product }, loading: false };

    case GET_SINGLE_PRODUCT:
      let singleProduct;

      if (localStorage.getItem("singleProduct")) {
        singleProduct = JSON.parse(localStorage.getItem("singleProduct"));
      } else if (!localStorage.getItem("singleProduct")) {
        singleProduct = {};
      } else {
        return singleProduct;
      }

      return { ...state, singleProduct: { ...singleProduct }, loading: false };

    case REMOVE:
      let removeCart = [...state.cart];
      removeCart = removeCart.filter(item => item.id !== payload);

      return { ...state, cart: removeCart };

    case CLEAR:
      return { ...state, cart: [] };

    case INCREMENT:
      let incCart = [...state.cart];

      return { ...state, ...incCart };

    case DECREMENT:
      let decCart = [...state.cart];
      const cartItem = decCart.find(item => item.id === payload);

      if (cartItem.count <= 1) {
        let removeCart = [...state.cart];
        removeCart = removeCart.filter(item => item.id !== payload);

        return { ...state, cart: removeCart };
      }

      cartItem.count = cartItem.count - 1;
      cartItem.total = cartItem.count * cartItem.price;

      return { ...state, cart: decCart };

    default:
      return state;
  }
};
