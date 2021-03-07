import React from "react";

// Next
import Image from "next/image";

// Material-UI
import theme from "../../Layout/Theme";
import { Button, Card, Box, MobileStepper, CardActionArea, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Libraries
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

// Icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// ========================================================================================================

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const PreviewProduct = ({ product }) => {
  const classes = useStyles();

  const [activeStep, setActiveStep] = React.useState(0);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  let maxSteps = product.images.length;

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
    <Box className={classes.root}>
      <Card style={{ borderRadius: "10px" }}>
        <AutoPlaySwipeableViews
          interval={3500}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          style={{ width: "100%" }}
        >
          {product.images.map((product) => {
            return (
              <CardActionArea className={classes.area} key={product.label} disableRipple>
                <Image width={400} height={300} src={`/${product}`} title={product.title} alt={product.label} />
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

      <Box className={classes.content}>
        <Box className={classes.item}>
          <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
            Title
          </Typography>
          <Typography variant="body1"> {product.title}</Typography>
        </Box>

        <Box className={classes.item}>
          <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
            Price
          </Typography>
          <Typography variant="body1"> {product.price}.-</Typography>
        </Box>

        <Box className={classes.item}>
          <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
            Description
          </Typography>
          <Typography className={classes.description} variant="body1">
            {product.description}
          </Typography>
        </Box>

        <Box className={classes.item}>
          <Typography variant="h6" style={{ fontSize: "1.2rem" }}>
            Stock
          </Typography>
          <Typography variant="body1"> {product.stock}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PreviewProduct;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "column",
      overflowY: "scroll",
      padding: "0px 20px 0px 0px",
    },

    media: {
      height: "50%",
    },
    area: {
      display: "flex",
      backgroundColor: "#fafafa",
      height: "100%",
      width: "100%",
    },
    content: {
      margin: "50px 0px 0px 0px",
    },
    item: {
      display: "flex",
      justifyContent: "space-between",
      margin: "20px 0px",
    },
    description: {
      wordWrap: "break-word",
      width: "300px",
    },
  })
);
