import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

//Redux
import { IAppState } from "../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { sidebarCart } from "../Redux/product/productAction";

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
      <ul>
        {selectCart.map((item) => {
          return (
            <li key={item.id} className="cart-item mb-4">
              <img width="70" src={`../${item.image}`} alt="cart item" />
              <div className="mt-3">
                <h6 className="text-uppercase">{item.title}</h6>
                <h6 className="text-title text-capitalize">Amount: {item.count}</h6>
              </div>
            </li>
          );
        })}
      </ul>
      <h4 className="text-capitalize text-main">cart total: {selectCartTotal} CHF</h4>
      <div className="text-center my-5">
        <Button component={Link} to="/cart" variant="outlined" className="main-link" style={{ marginTop: "30px" }}>
          Cart Page
        </Button>
      </div>

      <Divider />
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

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  imdb: {
    height: "53px",
    width: "50%",
    margin: "30px 20px",
  },
}));
