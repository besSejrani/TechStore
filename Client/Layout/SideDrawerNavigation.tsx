import React, { useState, useRef } from "react";
import Link from "next/link";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { sidebarToggle } from "../Redux/ui/uiAction";

// Material-Ui
import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Icons
import HomeIcon from "@material-ui/icons/Home";
import ShoppingIcon from "@material-ui/icons/ShoppingCart";
import QueueIcon from "@material-ui/icons/Queue";
import DocumentationIcon from "@material-ui/icons/Description";
import GithubIcon from "@material-ui/icons/GitHub";

// ========================================================================================================

type Anchor = "left";

const SideDrawer: React.FC<any> = () => {
  const classes = useStyles();
  const [installable, setInstallable] = useState(false);

  let defferedPrompt: any = useRef(null);
  const dispatch = useDispatch();

  const isSideDrawerOpen = useSelector((state: IAppState) => state.ui.sidebarOpen);

  const list = (anchor: Anchor) => (
    <div className={classes.list}>
      <List subheader={<ListSubheader>Links</ListSubheader>}>
        <Link href="/">
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>

        <Link href="/products">
          <ListItem button>
            <ListItemIcon>
              <QueueIcon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItem>
        </Link>

        <Link href="/checkout">
          <ListItem button>
            <ListItemIcon>
              <ShoppingIcon />
            </ListItemIcon>
            <ListItemText primary="Checkout" />
          </ListItem>
        </Link>
      </List>

      <Divider />

      <List subheader={<ListSubheader>Project</ListSubheader>}>
        <a href="https://bessejrani.github.io/BlueberryShop/" target="_blank">
          <ListItem button>
            <ListItemIcon>
              <DocumentationIcon />
            </ListItemIcon>
            <ListItemText primary="Documentation" />
          </ListItem>
        </a>

        <a href="https://github.com/besSejrani/BlueberryShop" target="_blank">
          <ListItem button>
            <ListItemIcon>
              <GithubIcon />
            </ListItemIcon>
            <ListItemText primary="Github" />
          </ListItem>
        </a>
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

// ========================================================================================================

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
