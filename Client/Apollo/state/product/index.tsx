import { makeVar } from "@apollo/client";

const initialState = {
  products: [],
  images: [],
  preview: [],
};

type Product = {
  products?: string[];
  images?: string[];
  preview?: string[];
};

export const product = makeVar<Product>(initialState);
