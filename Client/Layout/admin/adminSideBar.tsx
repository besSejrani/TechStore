import React, { useState } from "react";

// Next
import Link from "next/link";

// Material-UI
import {
  Drawer,
  Toolbar,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

//Icons
import HomeIcon from "@material-ui/icons/Home";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import GroupIcon from "@material-ui/icons/Group";
import MailIcon from "@material-ui/icons/Mail";
import ShowChartIcon from "@material-ui/icons/ShowChart";

// ========================================================================================================

const drawerWidth = 240;

const adminSideDrawer = () => {
  const classes = useStyles();

  const [customerExpand, setCustomerExpand] = useState(false);
  const [productExpand, setProductExpand] = useState(false);
  const [orderExpand, setOrderExpand] = useState(false);

  const handleExpandClick = (setExpanded, expand) => {
    setExpanded(!expand);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List subheader={<ListSubheader>Dashboards</ListSubheader>}>
            <Link href="/admin/dashboards/">
              <ListItem button>
                <ListItemIcon>
                  <ShowChartIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </Link>
          </List>

          <List subheader={<ListSubheader>Management</ListSubheader>}>
            <ListItem
              button
              onClick={() => handleExpandClick(setCustomerExpand, customerExpand)}
              aria-expanded={customerExpand}
            >
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Customers" />
              <ExpandMoreIcon
                className={clsx(classes.expand, {
                  [classes.expandOpen]: customerExpand,
                })}
              />
            </ListItem>

            <Collapse in={customerExpand} timeout="auto" unmountOnExit>
              <Link href="/admin/customers">
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="List Customers" />
                </ListItem>
              </Link>
            </Collapse>

            <ListItem
              button
              onClick={() => handleExpandClick(setProductExpand, productExpand)}
              aria-expanded={productExpand}
            >
              <ListItemIcon>
                <FormatListNumberedIcon />
              </ListItemIcon>
              <ListItemText primary="Products" />
              <ExpandMoreIcon
                className={clsx(classes.expand, {
                  [classes.expandOpen]: productExpand,
                })}
              />
            </ListItem>

            <Collapse in={productExpand} timeout="auto" unmountOnExit>
              <Link href="/admin/products/">
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="List Products" />
                </ListItem>
              </Link>

              <Link href="/admin/products/create-product">
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Create Product" />
                </ListItem>
              </Link>
            </Collapse>

            <ListItem button onClick={() => handleExpandClick(setOrderExpand, orderExpand)} aria-expanded={orderExpand}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Orders" />
              <ExpandMoreIcon
                className={clsx(classes.expand, {
                  [classes.expandOpen]: orderExpand,
                })}
              />
            </ListItem>

            <Collapse in={orderExpand} timeout="auto" unmountOnExit>
              <Link href="/admin/orders">
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="List Orders" />
                </ListItem>
              </Link>
            </Collapse>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default adminSideDrawer;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  })
);
