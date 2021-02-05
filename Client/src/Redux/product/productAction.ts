import { ProductType } from "./productType";

export const sidebarToggle = () => {
  return { type: ProductType.SIDE_BAR_TOGGLE };
};

export const sidebarCart = () => {
  return { type: ProductType.SIDE_CART_TOGGLE };
};

export const setProducts = (products) => {
  return [
    { type: ProductType.SET_PRODUCTS, payload: products },
    { type: ProductType.GET_ITEM_CART },
  ];
};

export const addToCart = (id) => {
  return [
    { type: ProductType.ADD_TO_CART, payload: id },
    { type: ProductType.ADD_TOTALS },
    { type: ProductType.SET_ITEM_CART },
    { type: ProductType.ADD_TOTALS },
  ];
};

export const addTotals = () => {
  return { type: ProductType.ADD_TOTALS };
};

export const setSingleProduct = (id) => {
  return { type: ProductType.SET_SINGLE_PRODUCT, payload: id };
};

export const getSingleProduct = () => {
  return { type: ProductType.GET_SINGLE_PRODUCT };
};

export const getItemCart = () => {
  return { type: ProductType.GET_ITEM_CART };
};

export const increment = (id) => {
  return [
    { type: ProductType.INCREMENT, payload: id },
    { type: ProductType.ADD_TO_CART, payload: id },
    { type: ProductType.ADD_TOTALS },
    { type: ProductType.SET_ITEM_CART },
    { type: ProductType.ADD_TOTALS },
    { type: ProductType.GET_ITEM_CART },
  ];
};

export const decrement = (id) => {
  return [
    { type: ProductType.DECREMENT, payload: id },
    { type: ProductType.ADD_TOTALS },
    { type: ProductType.SET_ITEM_CART },
    { type: ProductType.ADD_TOTALS },
    { type: ProductType.GET_ITEM_CART },
  ];
};

export const remove = (id) => {
  return [
    { type: ProductType.REMOVE, payload: id },
    { type: ProductType.ADD_TOTALS },
    { type: ProductType.SET_ITEM_CART },
    { type: ProductType.ADD_TOTALS },
    { type: ProductType.GET_ITEM_CART },
  ];
};

export const clearCart = (history) => async () => {
  await localStorage.clear();
  await history.push("/products");
  await window.location.reload();

  return [{ type: ProductType.CLEAR }];
};
