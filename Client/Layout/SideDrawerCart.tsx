import React from "react";
import Link from "next/link";

import { Drawer, Divider, Button, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Redux
import { IAppState } from "../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCart, increment, remove, decrement, clearCart } from "../Redux/product/productAction";

import { Typography } from "@material-ui/core";

type Anchor = "right";

const SideDrawerCart: React.FC<any> = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const selectCartOpen = useSelector((state: IAppState) => state.product.cartOpen);
  const selectCart = useSelector((state: IAppState) => state.product.cart);
  const selectCartTotal = useSelector((state: IAppState) => state.product.cartTotal);

  const isSideDrawerOpen = useSelector((state: IAppState) => state.product.sidebarOpen);

  const list = (anchor: Anchor) => (
    <div className={classes.list}>
      <div className={classes.listProduct}>
        {selectCart.map((item) => {
          return (
            <div key={item.id} className={classes.product}>
              <Link href={`/products/${item.id}`}>
                <CardMedia className={classes.media} image={`../${item.image}`} title={item.title} />
              </Link>

              <div className={classes.information}>
                <Typography variant="body1">{item.title}</Typography>
                <Button
                  variant="outlined"
                  className={classes.actionButton}
                  onClick={() => dispatch(decrement(item.id))}
                >
                  -
                </Button>
                <Button variant="outlined" className={classes.actionButton}>
                  {item.count}
                </Button>
                <Button
                  variant="outlined"
                  className={classes.actionButton}
                  onClick={() => dispatch(increment(item.id))}
                >
                  +
                </Button>
                <Typography variant="body2" color="secondary" className={classes.priceProduct}>
                  {item.total}.-
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <div className={classes.amount}>
          <Typography variant="body1">Cart Total </Typography>
          <Typography variant="subtitle2" color="secondary">
            {selectCartTotal}.-
          </Typography>
        </div>

        <Divider />
        <Link href="/checkout">
          <Button variant="contained" size="large" color="secondary" className={classes.checkout}>
            Checkout
          </Button>
        </Link>

        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.clearCart}
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </Button>

        <Divider />
      </div>
    </div>
  );

  return (
    <div>
      {(["right"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={selectCartOpen} onClose={() => dispatch(sidebarCart())}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideDrawerCart;

// =================================================================

const useStyles = makeStyles((theme) => ({
  list: {
    width: 380,
    overflow: "auto",
    overflowX: "hidden",
  },
  listProduct: {
    maxHeight: "75%",
    overflow: "auto",
  },
  product: {
    display: "flex",
    alignItems: "center",
    margin: "30px 20px",
  },
  information: {
    marginLeft: 20,
    width: "60%",
    position: "relative",
  },
  priceProduct: {
    position: "absolute",
    top: "42px",
    right: "-7px",
  },
  actionButton: {
    minWidth: "40px",
    marginTop: "10px",
    padding: 5,
  },
  media: {
    height: "110px",
    width: "110px",
  },
  amount: {
    margin: "50px 20px 10px 20px",
    display: "flex",
    justifyContent: "space-between",
  },
  checkout: {
    margin: "20px 20px 10px 20px",
    width: "90%",
  },

  clearCart: {
    margin: "10px 20px 20px 20px",
    width: "90%",
  },
}));
