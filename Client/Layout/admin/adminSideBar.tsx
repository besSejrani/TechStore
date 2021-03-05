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
  Divider,
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

          <Divider />
          <List subheader={<ListSubheader>Products</ListSubheader>}>
            <Link href="/admin/products/">
              <ListItem button>
                <ListItemIcon>
                  <FormatListNumberedIcon />
                </ListItemIcon>
                <ListItemText primary="Products" />
              </ListItem>
            </Link>
          </List>
          <Divider />

          <List subheader={<ListSubheader>Management</ListSubheader>}>
            <Link href="/admin/users">
              <ListItem button>
                <ListItemIcon>
                  <GroupIcon />
                </ListItemIcon>
                <ListItemText primary="Users" />
              </ListItem>
            </Link>

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

          <Divider />

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

          <Divider />

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
          <Divider />
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
