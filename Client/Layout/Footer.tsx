import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Material-UI
import { Box, Container, Typography, TextField, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Icons
import GithubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  const classes = useStyles();
  return (
    <Box component={"footer"} boxShadow={3} className={classes.root}>
      <Container>
        <Box className={classes.footer}>
          <Box className={classes.logo}>
            <Link href="/">
              <Image width={40} height={40} src={"/raspberry.svg"} alt="Raspberry Pi Logo" />
            </Link>
            <Link href="/">
              <Typography variant="h6" style={{ color: "white", marginLeft: "10px" }}>
                BlueberryShop
              </Typography>
            </Link>
          </Box>

          <TextField
            id="outlined-basic"
            label="Email List"
            variant="outlined"
            style={{ color: "white", border: "1px solid white" }}
          />
        </Box>
        <Box className={classes.footerCredentials}>
          <Typography variant="body2" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()} BlueberryShop. All rights reserved
          </Typography>

          <IconButton>
            <GithubIcon style={{ color: "white" }} />
          </IconButton>
        </Box>
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

      backgroundColor: "#212121",
      boxShadow: "rgb(0 0 0 / 50%) 0px 0px 10px 0px",
    },
    logo: {
      display: "flex",
      alignItems: "center",
    },
    footer: {
      height: "130px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      margin: "20px 0px",
    },
    footerCredentials: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);
