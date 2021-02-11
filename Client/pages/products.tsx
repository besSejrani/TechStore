import React from "react";

// Reduxx
import { IAppState } from "../Redux/rootReducer";
import { useSelector } from "react-redux";

import Product from "../Components/Card/Card";
import { Container, makeStyles } from "@material-ui/core";

const Products = () => {
  const classes = useStyles();
  const selectProducts = useSelector((state: IAppState) => state.product.storeProducts);

  return (
    <Container>
      <section className={classes.root}>
        {selectProducts.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </section>
    </Container>
  );
};

export default Products;

// =================================================================

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "200px 0px 50px 0px",
  },
});
