import React from "react";
import Link from "next/link";

// Redux
import { useDispatch } from "react-redux";
import { addToCart, setSingleProduct } from "../../Redux/product/productAction";

// Styles
import { withStyles } from "@material-ui/core/styles";

import { IconButton } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

// Icon
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";

interface IProduct {
  product: {
    id: string;
    title: string;
    price: number;
    description: string;
    image: any;
    featured?: boolean;
    company?: string;
  };
}

const Product: React.FC<IProduct> = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.area}>
        <Link href={`/products/${product.id}`}>
          <CardMedia
            className={classes.media}
            onClick={() => dispatch(setSingleProduct(product.id))}
            image={product.image}
            title={product.title}
          />
        </Link>
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="body1" color="secondary">
          {product.price}.-
        </Typography>

        <Typography gutterBottom variant="h6" component="h2">
          {product.title}
        </Typography>

        <Typography gutterBottom variant="body2">
          {product.description.split("", 114).concat("...")}
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <StyledRating value={2} readOnly size="small" name="customized-color" defaultValue={2} precision={0.5} />

        <Button
          size="small"
          onClick={() => dispatch(addToCart(product.id))}
          title="Add to cart"
          color="secondary"
          variant="outlined"
          startIcon={<AddIcon fontSize={"small"} />}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Product;

// =================================================================

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",

    width: "320px",
    height: "440px",
    marginRight: "20px",
    marginBottom: "20px",
  },
  area: {},
  content: {
    padding: "20px",
  },
  media: {
    height: "200px",
    width: "200px",
    margin: "10px auto",
  },
  actions: {
    padding: "0px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
});

// =================================================================

const StyledRating = withStyles({
  iconFilled: {
    // color: 'blue',
  },
  iconHover: {
    color: "#ff3d47",
  },
})(Rating);
