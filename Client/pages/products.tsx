import React from "react";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useSelector } from "react-redux";

// Material-Ui
import { Container, Box, TextField, Select, MenuItem } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";

// Components
import Card from "../Components/Card/Card";
import ProductFilter from "../Components/ProductFilter/ProductFilter";

const Products = () => {
  const classes = useStyles();
  const selectProducts = useSelector((state: IAppState) => state.product.storeProducts);

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
          {selectProducts.map((product) => {
            return <Card key={product.id} product={product} />;
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
      gridGap: "1rem",
    },
    search: {
      margin: "80px 0px 50px 0px",
      display: "flex",
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
