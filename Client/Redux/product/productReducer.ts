/* eslint-disable no-unused-vars */
/* eslint-disable no-fallthrough */
import { ProductType } from "./productType";

interface ProductState {
  sidebarOpen: boolean;
  cartOpen: boolean;
  cartItems: number;
  cart: any[];
  cartSubTotal: number;
  cartTax: number;
  cartTotal: number;
  storeProducts: any[];
  filteredProducts: any[];
  featuredProducts: any[];
  singleProduct: any;
}

const initialState = {
  sidebarOpen: false,
  cartOpen: false,
  cartItems: 0,
  cart: [],
  cartSubTotal: 0,
  cartTax: 0,
  cartTotal: 0,
  storeProducts: [],
  filteredProducts: [],
  featuredProducts: [],
  singleProduct: {},
};

interface Action {
  type: string;
  payload?: any;
}

export default (state: ProductState = initialState, action: Action): ProductState => {
  const { payload, type } = action;

  switch (type) {
    case ProductType.SIDE_BAR_TOGGLE:
      return { ...state, sidebarOpen: !state.sidebarOpen };

    // =================================================================

    case ProductType.SIDE_CART_TOGGLE:
      return { ...state, cartOpen: !state.cartOpen };

    // =================================================================

    case ProductType.SET_PRODUCTS:
      let storeProducts = payload.map((item) => {
        const { id } = item;
        const image = item.url;
        const product = { id, ...item.fields, image };
        return product;
      });

      let featuredProducts = storeProducts.filter((item) => item.featured === true);

      return {
        ...state,
        storeProducts: storeProducts,
        filteredProducts: storeProducts,
        featuredProducts: featuredProducts,
      };

    // =================================================================

    case ProductType.ADD_TO_CART:
      let tempCart = [...state.cart];
      let tempProducts = [...state.storeProducts];

      let tempItem = tempCart.find((item) => item.id === payload);

      if (!tempItem) {
        tempItem = tempProducts.find((item) => item.id === payload);
        let total = tempItem.price;
        let cartItem = { ...tempItem, count: 1, total };
        tempCart = [...tempCart, cartItem];
      } else {
        tempItem.count++;

        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2));
      }

      return { ...state, cart: tempCart };

    // =================================================================

    case ProductType.ADD_TOTALS:
      let subTotal: any = 0;
      let cartItems: any = 0;
      state.cart.forEach((item) => {
        subTotal += item.total;
        cartItems += item.count;
      });

      subTotal = parseFloat(subTotal).toFixed(2);
      let tax = parseFloat((subTotal * 0.2) as any).toFixed(2);
      let total = subTotal + tax;
      total = parseFloat(total).toFixed(2);

      return {
        ...state,
        cartItems: cartItems,
        cartSubTotal: subTotal,
        cartTax: tax as any,
        cartTotal: total as any,
      };

    // =================================================================

    case ProductType.SET_ITEM_CART:
      let obj: any = {};
      let cartStringify;
      let cartSubTotalStringify;
      let cartTaxStringify;

      obj.cartStringify = state.cart;
      obj.cartSubTotalStringify = Number(state.cartSubTotal);
      obj.cartTaxStringify = Number(state.cartTax);

      localStorage.setItem("cart", JSON.stringify(obj));

      return {
        ...state,
      };

    // =================================================================

    case ProductType.GET_ITEM_CART:
      let cart: any = [];
      let count: any = 0;
      let cartTotal: any = 0;
      let cartSubTotal: any = 0;
      let cartTax: any = 0;

      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart")!);

        cart.cartStringify.map((item) => {
          return (count += item.count);
        });

        cart.cartStringify.map((item) => {
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
        cartTax: cart.cartTaxStringify,
      };

    // =================================================================

    case ProductType.SET_SINGLE_PRODUCT:
      let product = state.storeProducts.find((item) => item.id === payload);
      localStorage.setItem("singleProduct", JSON.stringify(product));

      return { ...state, singleProduct: { ...product } };

    // =================================================================

    case ProductType.GET_SINGLE_PRODUCT:
      let singleProduct;

      if (localStorage.getItem("singleProduct")) {
        singleProduct = JSON.parse(localStorage.getItem("singleProduct")!);
      } else if (!localStorage.getItem("singleProduct")) {
        singleProduct = {};
      } else {
        return singleProduct;
      }

      return { ...state, singleProduct: { ...singleProduct } };

    // =================================================================

    case ProductType.REMOVE:
      let removeCart = [...state.cart];
      removeCart = removeCart.filter((item) => item.id !== payload);

      return { ...state, cart: removeCart };

    // =================================================================

    case ProductType.CLEAR:
      return { ...state, cart: [] };

    case ProductType.INCREMENT:
      let incCart = [...state.cart];

      return { ...state, ...incCart };

    // =================================================================

    case ProductType.DECREMENT:
      let decCart = [...state.cart];
      const cartItem = decCart.find((item) => item.id === payload);

      if (cartItem.count <= 1) {
        let removeCart = [...state.cart];
        removeCart = removeCart.filter((item) => item.id !== payload);

        return { ...state, cart: removeCart };
      }

      cartItem.count = cartItem.count - 1;
      cartItem.total = cartItem.count * cartItem.price;

      return { ...state, cart: decCart };

    // =================================================================

    default:
      return state;
  }
};
