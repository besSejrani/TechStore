import React from "react";

import {Box} from "@material-ui/core"
import {makeStyles, createStyles, Theme} from "@material-ui/core/styles"

// ========================================================================================================

const index = () => {

  const classes = useStyles()

  return <Box className={classes.root}>
    <Box>

    Dashboard
    </Box>
  </Box>;
};

export default index;

// ========================================================================================================

const useStyles = makeStyles((theme:Theme)=>createStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}))