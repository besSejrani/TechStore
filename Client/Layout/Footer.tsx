import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component={"footer"} boxShadow={3} className={classes.root}>
      <Container>
        <Link href="/">
          <Image width={40} height={40} src={"/raspberry.svg"} alt="Raspberry Pi Logo" />
        </Link>
        <Link href="/">
          <Typography variant="h6" style={{ color: "white" }}>
            BlueberryShop
          </Typography>
        </Link>
      </Container>
    </Box>
  );
};

export default Footer;

// =================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "calc(5% + 60px)",
      bottom: 0,

      backgroundColor: "#191919",
      boxShadow: "rgb(0 0 0 / 50%) 0px 0px 10px 0px",
    },
  })
);
