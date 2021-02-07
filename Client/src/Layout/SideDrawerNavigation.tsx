import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";

import { Link } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import QueueIcon from "@material-ui/icons/Queue";

import { useDispatch, useSelector } from "react-redux";
import { sidebarToggle } from "../Redux/product/productAction";
import { IAppState } from "../Redux/rootReducer";

type Anchor = "left";

const SideDrawer: React.FC<any> = () => {
  const classes = useStyles();
  const [installable, setInstallable] = useState(false);

  let defferedPrompt: any = useRef(null);
  const dispatch = useDispatch();

  const isSideDrawerOpen = useSelector((state: IAppState) => state.product.sidebarOpen);

  const list = (anchor: Anchor) => (
    <div className={classes.list}>
      <List subheader={<ListSubheader>Links</ListSubheader>}>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        <ListItem button component={Link} to="/about">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>

        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <QueueIcon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItem>

        <ListItem button component={Link} to="/cart">
          <ListItemIcon>
            <QueueIcon />
          </ListItemIcon>
          <ListItemText primary="Cart" />
        </ListItem>
      </List>

      <Divider />
    </div>
  );

  return (
    <div>
      {(["left"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer anchor={anchor} open={isSideDrawerOpen} onClose={() => dispatch(sidebarToggle())}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default SideDrawer;

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
