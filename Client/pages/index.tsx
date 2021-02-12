import React, { useEffect } from "react";

// Redux
import { useDispatch } from "react-redux";
import { setProducts, getItemCart } from "../Redux/product/productAction";

// Data
import { items } from "../Data/productData";



// Components
import Promotions from "../Components/Promotions/Promotions";

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

