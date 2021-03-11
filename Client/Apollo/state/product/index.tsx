import { makeVar } from "@apollo/client";

const initialState = {
  products: [],
  images: [],
};

type Product = {
  products?: string[];
  images?: string[];
};

export const product = makeVar<Product>(initialState);
