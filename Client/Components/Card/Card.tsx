import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// Redux
import { useDispatch } from "react-redux";
import { addToCart, setSingleProduct } from "../../Redux/product/productAction";

// Material-Ui
import { Skeleton, Rating } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";

// Icons
import AddIcon from "@material-ui/icons/Add";

import { Button, Card, CardActionArea, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";

interface IProduct {
  product: {
    id: string;
    title: string;
    price: number;
    description: string;
    rating: number;
    reviews: [];
    imageUrl: any;
    featured?: boolean;
    company?: string;
  };
}

const Product: React.FC<IProduct> = ({ product }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <Card className={classes.root}>
      {product ? (
        <CardActionArea className={classes.area}>
          <Link href={`/products/${product.id}`}>
            <Image
              width={300}
              height={250}
              className={classes.media}
              onClick={() => dispatch(setSingleProduct(product.id))}
              src={`/${product.imageUrl}`}
              title={product.title}
            />
          </Link>
        </CardActionArea>
      ) : (
        <Skeleton variant="rect" animation="wave" width={320} height={273} />
      )}

      <CardContent className={classes.content}>
        <div className={classes.titlePrice}>
          <Typography variant="h6" component="h2" className={classes.title}>
            {product.title}
          </Typography>

          <Typography variant="h6" color="secondary" className={classes.price}>
            {product.price}.-
          </Typography>
        </div>

        {product ? (
          <Typography variant="body2">{product.description.split("", 114).concat("...")}</Typography>
        ) : (
          <Skeleton variant="rect" animation="wave" width={280} height={60} style={{ marginTop: "5px" }} />
        )}
      </CardContent>

      <CardActions className={classes.actions}>
        {product ? (
          <div className={classes.rating}>
            <StyledRating
              value={product.rating}
              readOnly
              size="small"
              name="customized-color"
              defaultValue={2}
              precision={0.5}
            />
            <Typography variant="body2" className={classes.ratingReview}>
              {product.reviews.length}
            </Typography>
          </div>
        ) : (
          <Skeleton variant="rect" animation="wave" width={90} height={18} />
        )}

        {product ? (
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
        ) : (
          <Skeleton variant="rect" animation="wave" width={130} height={30} />
        )}
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
    height: "445px",

    borderRadius: 10,
  },
  area: {
    display: "flex",
    padding: "20px 20px 0px 20px",
    backgroundColor: "#fafafa",
  },
  media: {
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.05)",
      transition: "0.3s",
    },
  },
  content: {
    padding: "20px",
  },
  titlePrice: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    width: "100%",
    minHeight: "45px",
    fontSize: "1.15rem",
  },
  price: {
    fontSize: "1.15rem",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  ratingReview: {
    margin: "0px 0px 0px 3px",
    fontSize: "0.85rem",
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
