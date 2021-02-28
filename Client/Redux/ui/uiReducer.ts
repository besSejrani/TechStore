import { UiType } from "./uiType";

interface UiState {
  isAdmin: boolean;
  isUser: boolean;
  sidebarOpen: boolean;
  cartOpen: boolean;
}

const initialState = {
  isAdmin: true,
  isUser: false,
  sidebarOpen: false,
  cartOpen: false,
};

interface Action {
  type: string;
  payload: any;
}

const reducer = (state: UiState = initialState, action: Action): UiState => {
  const { type, payload } = action;

  switch (type) {
    case UiType.SIDE_BAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };

    case UiType.SIDE_CART_TOGGLE:
      return { ...state, cartOpen: !state.cartOpen };

    default:
      return state;
  }
};

export default reducer;
