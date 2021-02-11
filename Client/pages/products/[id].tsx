import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Redux
import { IAppState } from "../../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, addToCart } from "../../Redux/product/productAction";

import { Button, Card, CardMedia, makeStyles, Typography, Container } from "@material-ui/core";

const SingleProduct = () => {
  const classes = useStyles();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const dispatch = useDispatch();
  const selectProduct = useSelector((state: IAppState) => state.product.singleProduct);

  useEffect(() => {
    dispatch(getSingleProduct());
  }, []);

  return (
    <section className={classes.root}>
      <Container>
        <div className={classes.product}>
          <div>
            <CardMedia className={classes.media} image={`../${selectProduct.image}`} title={selectProduct.title} />
          </div>
          <Card className={classes.content}>
            <Typography variant="h5">
              <b>{selectProduct.company}</b> {selectProduct.title}
            </Typography>

            <Typography variant="h6" color="secondary">
              {selectProduct.price} CHF
            </Typography>

            <Typography variant="body2">{selectProduct.description}</Typography>

            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => dispatch(addToCart(selectProduct.id))}
              style={{ marginTop: "30px" }}
            >
              Add to Cart
            </Button>

            <Link href="/products">
              <Button variant="outlined" className={classes.button} style={{ marginTop: "30px" }}>
                Back to Products
              </Button>
            </Link>
          </Card>
        </div>
      </Container>
    </section>
  );
};

export default SingleProduct;

// =================================================================

const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  product: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    height: "320px",
    width: "320px",
    marginRight: "100px",
  },
  content: {
    width: "600px",
    padding: "20px",
  },
  button: {
    marginRight: "5px",
  },
});
