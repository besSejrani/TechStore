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
  Typography,
  Container,
  Box,
  IconButton,
  MobileStepper,
  CardActionArea,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Skeleton, Rating, Pagination} from "@material-ui/lab";

// Icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

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
  const [expanded, setExpanded] = React.useState<string | false>(false);
  let maxSteps =  selectProduct.images.length;

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

  const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  
  const reviews = [
    {
      name: "hello",
      rating: 2,
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deserunt assumenda, exercitationem accusamus debitis repellat est ipsam, nostrum culpa id cum deleniti illo facilis rerum quisquam ipsum praesentium sunt! Eos.",
    },
    {
      name: "hello2",
      rating: 3,
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deserunt assumenda, exercitationem accusamus debitis repellat est ipsam, nostrum culpa id cum deleniti illo facilis rerum quisquam ipsum praesentium sunt! Eos.",
    },
    {
      name: "hello3",
      rating: 4,
      review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium deserunt assumenda, exercitationem accusamus debitis repellat est ipsam, nostrum culpa id cum deleniti illo facilis rerum quisquam ipsum praesentium sunt! Eos.",
    }
  ]

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
                    width={550}
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
            <Rating
              value={selectProduct.rating}
              readOnly
              size="medium"
              name="customized-color"
              defaultValue={2}
              precision={0.5}
            />
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


      <Accordion  square  defaultExpanded={true} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="body1">Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          {selectProduct.description}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="body1">Specifications</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion  onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant="body1">Returns & Waranty</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
            maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Box className={classes.social}>
        <Typography variant="h5">
          Share On Social Media
        </Typography>
        
        <IconButton><FacebookIcon /></IconButton>
        <IconButton><TwitterIcon /></IconButton>
        <IconButton><WhatsAppIcon /></IconButton>
      </Box>

      <Box className={classes.social}>
        <Typography variant="h5">
          Recommendations
        </Typography>
      </Box>

  <Box className={classes.social}>
        <Typography variant="h5">
          Reviews
        </Typography>
        {reviews.map(review =>{

  return    <Box className={classes.review}>

           <Image
            width={50}
            height={50}
            className={classes.user}
            src={`/static/images/unknown.png`}
            title={"tes"}
            alt={"test"}
            />
          <Typography variant="body1">
            {review.name}
          </Typography>

          <Rating
            value={review.rating}
            readOnly
            size="small"
            name="customized-color"
            defaultValue={2}
            precision={0.5}
            />

          <Typography variant="body1">
            {review.review}
          </Typography>
          </Box>
        })}
        </Box>

        <div className={classes.pagination}>
          <Pagination count={10} color="primary" />
        </div>

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
    width: "500px",
    padding: "20px",
    borderRadius: "10px",
  },
  social:{
    margin: "50px 0px"
  },
  user:{
    borderRadius: "99px"
  },
  review:{
    margin: "30px 0px"
  },
  pagination: {
    "& > *": {
      marginTop: theme.spacing(2),
      margin: "0px 0px 50px 0px",
      display: "flex",
      justifyContent: "center",
    },
  },
});
