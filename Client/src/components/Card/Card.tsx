import React from "react";

// React-Router-Dom
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { addToCart, setSingleProduct } from "../../Redux/product/productAction";

// Styles
import PlusIcon from "@material-ui/icons/Add";

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
        <CardMedia
          component={Link}
          to={`/products/${product.id}`}
          className={classes.media}
          onClick={() => dispatch(setSingleProduct(product.id))}
          image={product.image}
          title={product.title}
        />
      </CardActionArea>
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button
          variant="outlined"
          startIcon={<PlusIcon />}
          color="secondary"
          onClick={() => dispatch(addToCart(product.id))}
          title="hi"
        >
          Add To Cart
        </Button>
        {product.price} CHF
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

    width: "360px",
    height: "585px",
    marginRight: "20px",
    marginBottom: "20px",

    padding: "20px",
  },
  area: {},
  content: {
    padding: "20px 0px",
  },
  media: {
    height: "320px",
  },
  actions: {
    padding: "2px 0px",
    display: "flex",
    justifyContent: "space-between",
  },
});
