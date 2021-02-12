import React from "react";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useSelector } from "react-redux";

import Product from "../Components/Card/Card";

// Material-Ui
import { Container } from "@material-ui/core";
import { makeStyles, createStyles,Theme } from '@material-ui/core/styles';
import { Pagination} from '@material-ui/lab';

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

      <div className={classes.pagination}>
        <Pagination count={10} color="primary" />
    </div>
    </Container>
  );
};

export default Products;

// =================================================================
const useStyles = makeStyles((theme:Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      margin: "120px 0px 50px 0px",
    },
    pagination: {
      '& > *': {
        marginTop: theme.spacing(2),
        margin: "50px 0px",
        display:"flex",
        justifyContent: "center"
      },
    },
  }),
);
