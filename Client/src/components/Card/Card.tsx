import React from "react";

// React-Router-Dom
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { addToCart, setSingleProduct } from "../../Redux/product/actions";

// Styles
import PlusIcon from "@material-ui/icons/Add";

import {
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
      <CardActionArea>
        <CardMedia
          component={Link}
          to={`/products/${product.id}`}
          className={classes.media}
          onClick={() => dispatch(setSingleProduct(product.id))}
          image={product.image}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>

      <CardActions>
        <PlusIcon
          className="icon"
          onClick={() => dispatch(addToCart(product.id))}
        />
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

    width: "340px",
    height: "560px",
    marginRight: "20px",
    marginBottom: "20px",
  },
  media: {
    height: "320px",
  },
  actions: {},
});
