import React from "react";

// Material-Ui
import { Box, Paper, TextField, Typography, Checkbox, FormControlLabel } from "@material-ui/core";
import { Skeleton, Rating } from "@material-ui/lab";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import styled from "styled-components";

const ProductFilter = () => {
  const classes = useStyles();

  return (
    <Category>
      <Paper style={{ height: "675px", borderRadius: "10px", maxWidth: "215px" }} elevation={3}>
        <Box className={classes.filter}>
          <Typography variant="h6" id="price-slider" gutterBottom>
            Product Filters
          </Typography>
        </Box>

        <Box className={classes.filter}>
          <Typography variant="body2" id="price-slider" gutterBottom>
            Categories
          </Typography>

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" disableRipple />}
            label="Raspberry Pi"
            labelPlacement="end"
          />

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" disableRipple />}
            label="Accessories"
            labelPlacement="end"
          />

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" disableRipple />}
            label="Subscriptions"
            labelPlacement="end"
          />
        </Box>

        <Box className={classes.filter}>
          <Typography variant="body2" id="price-slider" gutterBottom>
            Shipping
          </Typography>

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" disableRipple />}
            label="Free Shipping"
            labelPlacement="end"
          />
        </Box>

        <Box className={classes.filter}>
          <Typography variant="body2" id="price-slider" gutterBottom>
            Promotions
          </Typography>
          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" disableRipple />}
            label="Sales"
            labelPlacement="end"
          />
        </Box>

        <Box className={classes.filter}>
          <Typography variant="body2" id="price-slider" gutterBottom>
            Stock
          </Typography>

          <FormControlLabel
            value="end"
            control={<Checkbox color="primary" disableRipple />}
            label="In Stock"
            labelPlacement="end"
          />
        </Box>

        <Box className={classes.filter}>
          <Typography variant="body2" id="price-slider" gutterBottom>
            Rating
          </Typography>

          <Box className={classes.filterRatings}>
            <Rating value={4} name="customized-color" defaultValue={2} precision={0.5} />
          </Box>
        </Box>

        <Box className={classes.filter}>
          <Typography variant="body2" id="price-slider" gutterBottom>
            Price
          </Typography>
          <Box className={classes.price}>
            <TextField
              variant="outlined"
              id="standard-basic"
              placeholder="Min"
              size="small"
              className={classes.priceInput}
            />
            <TextField
              variant="outlined"
              id="standard-basic"
              placeholder="Max"
              size="small"
              className={classes.priceInput}
            />
          </Box>
        </Box>
      </Paper>
    </Category>
  );
};

export default ProductFilter;

// =================================================================
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filter: {
      padding: "20px 20px 0px 20px",
    },
    filterRatings: {
      display: "flex",
      margin: "10px 0px 0px 0px",
    },
    price: {
      display: "flex",
    },
    priceInput: {
      margin: "10px 10px 0px 0px",
      padding: "0px 0px",
    },
  })
);

// =================================================================

const Category = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  max-width: 215px;
  height: 100%;
  margin-right: 1.5rem;
`;
