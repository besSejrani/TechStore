import React from "react";

// Material-UI
import { Box, TextField } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const register = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box>
        <form className={classes.form}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
        </form>
      </Box>

      <Box>
        <form className={classes.form}>
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
        </form>
      </Box>
    </Box>
  );
};

export default register;

// =================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
  })
);
