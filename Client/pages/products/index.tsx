import React, { useEffect } from "react";

// Next
import { useRouter } from "next/router";

// Redux
import { IAppState } from "../../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { setProducts, getItemCart } from "../../Redux/product/productAction";

// Apollo
import { useGetProductsQuery } from "../../Graphql/index";

// Material-Ui
import { Container, Box, TextField, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

// Components
import ProductCard from "../../Components/ProductCard/ProductCard";
import ProductFilter from "../../Components/ProductFilter/ProductFilter";

// Data
import { items } from "../../Data/productData";

// ========================================================================================================

const Products = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const selectProducts = useSelector((state: IAppState) => state.product.storeProducts);

  const router = useRouter();

  const { loading, data } = useGetProductsQuery();

  console.log(loading);

  useEffect(() => {
    // Prefetch the products page
    dispatch(setProducts(items));
    dispatch(getItemCart());
    router.prefetch("/products");
  }, []);

  return (
    <Container>
      <form noValidate autoComplete="off">
        <Box className={classes.search}>
          <TextField fullWidth id="outlined-basic" label="Search Product" variant="outlined" />
          <Select labelId="demo-simple-select-label" id="demo-simple-select" value="Best Match" variant="outlined">
            <MenuItem value={"Best Match"}>Best Match</MenuItem>
            <MenuItem value={"Ascending Price"}>Ascending Price</MenuItem>
            <MenuItem value={"Descending Price"}>Descending Price</MenuItem>
          </Select>
        </Box>
      </form>

      <Box className={classes.products}>
        <ProductFilter />
        <Box className={classes.grid}>
          {data?.getProducts.map((product) => {
            return <ProductCard key={product._id} product={product} loading={loading} />;
          })}
        </Box>
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
    grid: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gridGap: "1.5rem",
    },
    search: {
      margin: "80px 0px 50px 0px",
      display: "flex",
    },
    products: {
      height: "100%",
      display: "flex",
      margin: "70px 0px 80px 0px",
      justifyContent: "start",
    },
    pagination: {
      "& > *": {
        marginTop: theme.spacing(2),
        margin: "0px 0px 50px 0rem",
        display: "flex",
        justifyContent: "center",
      },
    },
  })
);
