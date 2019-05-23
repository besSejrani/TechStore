import {
  SIDE_BAR_TOGGLE,
  SIDE_CART_TOGGLE,
  ADD_TO_CART,
  ADD_TOTALS,
  SET_ITEM,
  GET_ITEM,
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
  return [{ type: SET_PRODUCTS, payload: products }, { type: GET_ITEM }];
};

export const addToCart = id => {
  console.log(`add to cart${id}`);

  return [
    { type: SET_ITEM },
    { type: ADD_TO_CART, payload: id },
    { type: ADD_TOTALS }
  ];
};

export const addTotals = () => {
  return { type: ADD_TOTALS };
};

export const setItem = () => {
  return { type: SET_ITEM };
};

export const getItem = () => {
  return { type: GET_ITEM };
};

export const setSingleProduct = id => {
  console.log(`set single product ${id}`);

  return { type: SET_SINGLE_PRODUCT, payload: id };
};
