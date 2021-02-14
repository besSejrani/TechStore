import React from "react";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useSelector } from "react-redux";

import Card from "../Components/Card/Card";

// Material-Ui
import styled from "styled-components";
import { Container, Box, Paper, TextField } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

const Products = () => {
  const classes = useStyles();
  const selectProducts = useSelector((state: IAppState) => state.product.storeProducts);

  return (
    <Container>
      <form className={classes.search} noValidate autoComplete="off">
        <TextField fullWidth id="outlined-basic" label="Search Product" variant="outlined" />
      </form>

      <Box className={classes.products}>
        <Category>
          <Paper style={{ height: "450px" }} elevation={3}>
            Category
          </Paper>
        </Category>
        <GridProduct>
          {selectProducts.map((product) => {
            return <Card key={product.id} product={product} />;
          })}
        </GridProduct>
      </Box>

      <div className={classes.pagination}>
        <Pagination count={10} color="primary" />
      </div>
    </Container>
  );
};

export default Products;

// =================================================================
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      margin: "80px 0px 50px 0px",
    },
    products: {
      height: "100%",
      display: "flex",
      margin: "70px 0px 50px 0px",
      justifyContent: "start",
    },
    pagination: {
      "& > *": {
        marginTop: theme.spacing(2),
        margin: "0px 0px 50px 14rem",
        display: "flex",
        justifyContent: "center",
      },
    },
  })
);

// =================================================================

const GridProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1.5rem;
`;

const Category = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  width: 200px;
  height: 100%;
  margin-right: 1.5rem;
`;
