import { SIDE_BAR_TOGGLE, SIDE_CART_TOGGLE } from "./types";

export const sidebarToggle = () => {
  return { type: SIDE_BAR_TOGGLE };
};

export const sidebarCart = () => {
  return { type: SIDE_CART_TOGGLE };
};
