import React, { useEffect } from "react";

// Next
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Redux
import { IAppState } from "../../Redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct, addToCart } from "../../Redux/product/productAction";

// Material-Ui
import theme from "../../Layout/Theme";
import {
  Button,
  Card,
  makeStyles,
  Typography,
  Container,
  Box,
  IconButton,
  MobileStepper,
  CardActionArea,
  Divider,
} from "@material-ui/core";

// Icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

// Libraries
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SingleProduct = () => {
  const classes = useStyles();
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const dispatch = useDispatch();
  const selectProduct = useSelector((state: IAppState) => state.product.singleProduct);
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = selectProduct?.images?.length;

  useEffect(() => {
    dispatch(getSingleProduct());
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container component="section">
      <Link href="/products">
        <IconButton style={{ marginTop: "50px" }}>
          <ArrowBackIcon color="primary" />
        </IconButton>
      </Link>
      <Box className={classes.root}>
        <Card style={{ borderRadius: "10px" }}>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ width: "100%" }}
          >
            {selectProduct.images.map((product) => {
              return (
                <CardActionArea className={classes.area} key={product.label} disableRipple>
                  <Image
                    width={500}
                    height={400}
                    className={classes.media}
                    src={`/${product}`}
                    title={product.title}
                    alt={product.label}
                  />
                </CardActionArea>
              );
            })}
          </AutoPlaySwipeableViews>
          <MobileStepper
            style={{ background: "none" }}
            steps={maxSteps}
            position="static"
            variant="dots"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                Next
                {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            }
          />
        </Card>

        <Box className={classes.product}>
          <Card className={classes.content}>
            <Typography variant="h5">{selectProduct.title}</Typography>

            <Typography variant="h6" color="secondary">
              {selectProduct.price} CHF
            </Typography>

            <Typography variant="h6" color="secondary">
              {selectProduct.rating}
            </Typography>

            <Typography variant="h6" color="secondary">
              {selectProduct.stock}
            </Typography>

            <Typography variant="h6" color="secondary">
              {selectProduct.options.map((option) => {
                return <Button variant="outlined">{option}</Button>;
              })}
            </Typography>

            <Button
              variant="outlined"
              color="primary"
              fullWidth
              onClick={() => dispatch(addToCart(selectProduct.id))}
              style={{ marginTop: "10px" }}
            >
              Add to Cart
            </Button>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => dispatch(addToCart(selectProduct.id))}
              style={{ marginTop: "10px" }}
            >
              Buy Now
            </Button>
          </Card>
        </Box>
      </Box>

      <Divider />

      <Box>
        <Typography variant="h6" color="secondary">
          Description
        </Typography>
        <Typography variant="body1">{selectProduct.description}</Typography>
      </Box>

      <Box>
        <Typography variant="h6" color="secondary">
          Specifications
        </Typography>
        <Typography variant="body1">{selectProduct.description}</Typography>
      </Box>

      <Box>
        <Typography variant="h6" color="secondary">
          Returns & Waranty
        </Typography>
        <Typography variant="body1">{selectProduct.description}</Typography>
      </Box>

      <Box>
        <Typography variant="h6" color="secondary">
          Share On Social Media
        </Typography>
        <Typography variant="body1">{selectProduct.description}</Typography>
      </Box>
    </Container>
  );
};

export default SingleProduct;

// =================================================================

const useStyles = makeStyles({
  root: {
    display: "grid",
    gridTemplateColumns: "35% 1fr",
    gridGap: "2rem",
    margin: "10px 0px 100px 0px",
  },
  product: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  media: {
    height: "320px",
    width: "320px",
    marginRight: "100px",
  },
  area: {
    display: "flex",
    padding: "20px 20px 0px 20px",
    backgroundColor: "#fafafa",
  },
  content: {
    width: "600px",
    padding: "20px",
    borderRadius: "10px",
  },
});
