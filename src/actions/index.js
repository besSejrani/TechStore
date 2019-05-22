import {
  SIDE_BAR_TOGGLE,
  SIDE_CART_TOGGLE,
  ADD_TO_CART,
  SET_SINGLE_PRODUCT,
  SET_PRODUCTS
} from "./types";

export const sidebarToggle = () => {
  return { type: SIDE_BAR_TOGGLE };
};

export const sidebarCart = () => {
  return { type: SIDE_CART_TOGGLE };
};

export const setProducts = products => {
  return { type: SET_PRODUCTS, payload: products, loading: false };
};

export const addToCart = id => {
  console.log(`add to cart${id}`);

  return { type: ADD_TO_CART };
};

export const setSingleProduct = id => {
  console.log(`set single product ${id}`);

  return { type: SET_SINGLE_PRODUCT };
};
