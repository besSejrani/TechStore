import React from "react";

//Next
import Link from "next/link";
import Image from "next/image";

// Material-UI
import { AppBar, Toolbar, Typography, Box } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// ========================================================================================================

const adminHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Link href="/">
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <Image width={60} height={40} src={"/raspberry.svg"} alt="Raspberry Pi Logo" />
            <Typography variant="h6">BlueberryShop</Typography>
          </Box>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default adminHeader;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);
