/* eslint-disable no-fallthrough */
import {
  SIDE_BAR_TOGGLE,
  SIDE_CART_TOGGLE,
  ADD_TO_CART,
  ADD_TOTALS,
  SET_ITEM,
  GET_ITEM,
  SET_SINGLE_PRODUCT,
  SET_PRODUCTS
} from "../actions/types";
import { LinkNav } from "../layout/LinkNav";
import { social } from "../layout/linkFooter";

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
  loading: false
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
        tempItem.total = parseFloat(tempItem.price * tempItem.count).toFixed(2);
      }

      return { ...state, cart: tempCart, cartOpen: true };

    case ADD_TOTALS:
      let subTotal = 0;
      let cartItems = 0;
      state.cart.forEach(item => {
        subTotal += item.total;
        cartItems += item.count;
      });

      subTotal = parseFloat(subTotal.toFixed(2));
      let tax = subTotal * 0.2;
      tax = parseFloat(tax.toFixed(2));
      let total = subTotal + tax;
      total = parseFloat(total.toFixed(2));

      return {
        ...state,
        cartItems: cartItems,
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };

    case SET_ITEM:
      localStorage.setItem("cart", JSON.stringify(state.cart));
      return { ...state };

    case GET_ITEM:
      let cart;

      if (!localStorage.getItem("cart")) {
        cart = [];
      } else if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart);
      } else {
        return cart;
      }

      return { ...state, cart: cart, cartItems: cart.length };

    case SET_SINGLE_PRODUCT:
      return { ...state };

    default:
      return state;
  }
};
