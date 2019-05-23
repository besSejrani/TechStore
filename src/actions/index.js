import {
  SIDE_BAR_TOGGLE,
  SIDE_CART_TOGGLE,
  ADD_TO_CART,
  ADD_TOTALS,
  SET_ITEM_CART,
  GET_ITEM_CART,
  SET_PRODUCTS,
  SET_SINGLE_PRODUCT,
  GET_SINGLE_PRODUCT
} from "./types";

export const sidebarToggle = () => {
  return { type: SIDE_BAR_TOGGLE };
};

export const sidebarCart = () => {
  return { type: SIDE_CART_TOGGLE };
};

export const setProducts = products => {
  return [{ type: SET_PRODUCTS, payload: products }, { type: GET_ITEM_CART }];
};

export const addToCart = id => {
  console.log(`add to cart${id}`);

  return [
    { type: SET_ITEM_CART },
    { type: ADD_TO_CART, payload: id },
    { type: ADD_TOTALS }
  ];
};

export const addTotals = () => {
  return { type: ADD_TOTALS };
};

export const setSingleProduct = id => {
  console.log(`set single product ${id}`);

  return { type: SET_SINGLE_PRODUCT, payload: id };
};

export const getSingleProduct = () => {
  console.log(`get single product`);

  return { type: GET_SINGLE_PRODUCT };
};
