import { makeVar } from "@apollo/client";

const initialState = {
  products: [],
};

type Product = {
  products?: string[];
};

export const product = makeVar<Product>(initialState);
