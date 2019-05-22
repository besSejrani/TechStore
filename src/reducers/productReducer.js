/* eslint-disable no-fallthrough */
import {
  SIDE_BAR_TOGGLE,
  SIDE_CART_TOGGLE,
  ADD_TO_CART,
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
        featuredProducts: featuredProducts
      };

    case ADD_TO_CART:
      return { ...state };

    case SET_SINGLE_PRODUCT:
      return { ...state };

    default:
      return state;
  }
};
