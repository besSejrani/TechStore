import { SIDE_BAR_TOGGLE, SIDE_CART_TOGGLE } from "../actions/types";
import { LinkNav } from "../layout/LinkNav";

const initialState = {
  sidebarOpen: false,
  cartOpen: false,
  cartItems: 0,
  links: LinkNav
};

export default (state = initialState, actions) => {
  const { payload, type } = actions;

  switch (type) {
    case SIDE_BAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };

    case SIDE_CART_TOGGLE:
      return { ...state, cartOpen: !state.cartOpen };

    default:
      return state;
  }
};
