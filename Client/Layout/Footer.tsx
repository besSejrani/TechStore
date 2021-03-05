import React from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// Material-UI
import { Box, Container, Typography, TextField, IconButton, Divider } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Icons
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import YoutubeIcon from "@material-ui/icons/YouTube";

// ========================================================================================================

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
            style={{ color: "white", backgroundColor: "white", border: "1px solid white" }}
          />
        </Box>
        <Divider style={{ backgroundColor: "#b8b8b8" }} />

        <Box className={classes.footerContent}>
          <Box>
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px" }}>
              Category
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Products
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Accessories
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px" }}>
              Links
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Products
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Accessories
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px" }}>
              Company
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Careers
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Contact
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Legal
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              About
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" style={{ color: "white", marginBottom: "20px" }}>
              Community
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Stories
            </Typography>

            <Typography variant="body1" style={{ color: "white" }}>
              Support
            </Typography>
          </Box>
        </Box>
        <Divider style={{ backgroundColor: "#b8b8b8" }} />
        <Box className={classes.footerCredentials}>
          <Typography variant="body2" style={{ color: "white" }}>
            &copy; {new Date().getFullYear()}, all rights reserved.
          </Typography>

          <Box>
            <IconButton>
              <FacebookIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <InstagramIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <TwitterIcon style={{ color: "white" }} />
            </IconButton>
            <IconButton>
              <YoutubeIcon style={{ color: "white" }} />
            </IconButton>
          </Box>
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
      marginTop: "calc(1% + 60px)",
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
    },
    footerContent: {
      display: "flex",
      justifyContent: "space-between",
      margin: "35px 0px",
    },
    footerCredentials: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);
