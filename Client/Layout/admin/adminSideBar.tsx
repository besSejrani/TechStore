import React, { useState } from "react";

// Next
import Link from "next/link";

// Material-UI
import {
  Box,
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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import GroupIcon from "@material-ui/icons/Group";
import MailIcon from "@material-ui/icons/Mail";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import SubjectIcon from "@material-ui/icons/Subject";
import DescriptionIcon from "@material-ui/icons/Description";

// ========================================================================================================

const drawerWidth = 240;

const adminSideDrawer = () => {
  const classes = useStyles();

  const [customerExpand, setCustomerExpand] = useState(false);
  const [productExpand, setProductExpand] = useState(false);
  const [orderExpand, setOrderExpand] = useState(false);
  const [articleExpand, setArticleExpand] = useState(false);

  const handleExpandClick = (setExpanded, expand) => {
    setExpanded(!expand);
  };

  return (
    <Box className={classes.root}>
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
              <ListItemText primary="Users" />
              <ExpandMoreIcon
                className={clsx(classes.expand, {
                  [classes.expandOpen]: customerExpand,
                })}
              />
            </ListItem>

            <Collapse in={customerExpand} timeout="auto" unmountOnExit>
              <Link href="/admin/users">
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="List Users" />
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

          <List subheader={<ListSubheader>Blog</ListSubheader>}>
            <ListItem
              button
              onClick={() => handleExpandClick(setArticleExpand, articleExpand)}
              aria-expanded={articleExpand}
            >
              <ListItemIcon>
                <SubjectIcon />
              </ListItemIcon>
              <ListItemText primary="Articles" />
              <ExpandMoreIcon
                className={clsx(classes.expand, {
                  [classes.expandOpen]: articleExpand,
                })}
              />
            </ListItem>

            <Collapse in={articleExpand} timeout="auto" unmountOnExit>
              <Link href="/admin/articles/">
                <ListItem button>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="List Articles" />
                </ListItem>
              </Link>
            </Collapse>
          </List>

          <List subheader={<ListSubheader>Documentation</ListSubheader>}>
            <a href="https://bessejrani.github.io/BlueberryShop/" target="_blank">
              <ListItem button>
                <ListItemIcon>
                  <DescriptionIcon />
                </ListItemIcon>
                <ListItemText primary="Documentation" />
              </ListItem>
            </a>
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default adminSideDrawer;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      position: "relative",
      width: 240,
    },

    drawer: {
      width: drawerWidth,
      position: "fixed",
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
