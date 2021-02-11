import React from "react";

import { Typography, makeStyles } from "@material-ui/core";

const PageNotFound: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">Page not found</Typography>
    </div>
  );
};

export default PageNotFound;

// =================================================================

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
});
