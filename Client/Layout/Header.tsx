// Next
import Link from "next/link";
import Image from "next/image";

// Material-UI
import {
  AppBar,
  Toolbar,
  Badge,
  IconButton,
  Typography,
  Button,
  makeStyles,
  createStyles,
  Theme,
  Container,
  useScrollTrigger,
  Slide,
  Box,
  Hidden,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

// Icons
import MenuIcon from "@material-ui/icons/Menu";
import CartIcon from "@material-ui/icons/ShoppingCart";
import SearchIcon from "@material-ui/icons/Search";

// Redux
import { IAppState } from "../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";

// Apollo State
import { useReactiveVar } from "@apollo/client";
import { ui } from "../Apollo/state/ui/index";

// ========================================================================================================

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Header = () => {
  const classes = useStyles();
  const selectProducts = useSelector((state: IAppState) => state.product.cartItems);

  const changeAdmin = () => {
    ui({ isAdmin: true });
  };

  const changeCart = () => {
    ui({ isCartOpen: true });
  };

  const changeSideBar = () => {
    ui({ isSideBarOpen: true });
  };

  return (
    <header className={classes.root}>
      <HideOnScroll>
        <AppBar position="fixed">
          <Container>
            <Toolbar disableGutters style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Hidden smUp>
                  <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={changeSideBar}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>

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
                    <Typography variant="h6" className={classes.title}>
                      BlueberryShop
                    </Typography>
                  </Box>
                </Link>

                <Hidden smDown>
                  <Link href="/products">
                    <Typography variant="body1" className={classes.link}>
                      products
                    </Typography>
                  </Link>
                  <Link href="/blog">
                    <Typography variant="body1" className={classes.link}>
                      Blog
                    </Typography>
                  </Link>
                  <Button variant="outlined" color="secondary" onClick={changeAdmin}>
                    toggle admin
                  </Button>
                </Hidden>
              </Box>

              <Box>
                <IconButton color="inherit">
                  <SearchIcon className="nav-icon" />
                </IconButton>

                <IconButton color="inherit" onClick={changeCart}>
                  <StyledBadge badgeContent={selectProducts} color="secondary" overlap="circle">
                    <CartIcon className="nav-icon" />
                  </StyledBadge>
                </IconButton>
                <Link href="/register" passHref>
                  <Button color="inherit">Login</Button>
                </Link>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </header>
  );
};

export default Header;

// =================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: "64px",
      position: "relative",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
      color: "white",
      marginRight: "20px",
    },
    link: {
      cursor: "pointer",
      marginLeft: "15px",
      fontWeight: 500,
      textTransform: "capitalize",
    },
  })
);

// =================================================================

const StyledBadge = withStyles((theme: Theme) =>
  createStyles({
    badge: {
      right: 0,
      width: 20,
      height: 18,
      padding: "0px 11px",
    },
  })
)(Badge);
