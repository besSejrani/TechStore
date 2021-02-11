import React, { useEffect } from "react";

import Promotions from "../Components/Promotions/Promotions";

// Redux
import { useDispatch } from "react-redux";
import { setProducts, getItemCart } from "../Redux/product/productAction";

import { items } from "../Data/productData";

const Home: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(items));
    dispatch(getItemCart());
  });

  return (
    <>
      <Promotions />
    </>
  );
};

export default Home;

// =================================================================
