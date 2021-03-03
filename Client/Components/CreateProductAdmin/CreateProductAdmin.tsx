import React, { useState } from "react";

// React-Hook-Form
import { useForm } from "react-hook-form";

// Material-UI
import { Button, Box, Card, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Components
import InputForm from "../InputForm/InputForm";
import UploadFile from "../../Components/UploadFile/UploadFile";
import PreviewProduct from "../PreviewProduct/PreviewProduct";
import PreviewProductCard from "../PreviewProductCard/PreviewProductCard";

// Apollo
import { useCreateProductMutation } from "../../Graphql/index";

// ========================================================================================================

type FormValues = {
  productName: string;
  productPrice: number;
  productDescription: string;
  productStock: number;
};

const CreateProductAdmin = () => {
  const classes = useStyles();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productDescription, setProductDescription] = useState("");
  const [productStock, setProductStock] = useState<number>(0);

  const { register, errors, handleSubmit } = useForm<FormValues>({
    criteriaMode: "all",
  });

  const [value, setValue] = React.useState(0);

  const [cardDetails, setcardDetails] = useState(true);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const [createProduct] = useCreateProductMutation();

  const onSubmit = async (form) => {
    await createProduct({
      variables: {
        name: form.productName,
        price: parseFloat(form.productPrice),
        description: form.productDescription,
        stock: parseInt(form.productStock),
      },
    });

    setProductName("");
    setProductPrice(0);
    setProductDescription("");
    setProductStock(0);
  };

  const product = {
    id: 0,
    title: productName,
    price: productPrice,
    company: "Raspberry Foundation",
    description: productDescription,
    featured: false,
    options: [],
    imageUrl: "static/images/computeModule3+/1.webp",
    images: [
      "static/images/computeModule3+/1.webp",
      "static/images/computeModule3+/2.webp",
      "static/images/computeModule3+/3.webp",
    ],
    stock: productStock,
    rating: 4,
    reviews: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  };

  const renderForm = () => {
    if (cardDetails) {
      return <PreviewProduct product={product} />;
    } else {
      return <PreviewProductCard product={product} />;
    }
  };

  return (
    <Box className={classes.root}>
      <Card elevation={1} className={classes.card}>
        <Box className={classes.preview}>{renderForm()}</Box>
        <Box className={classes.content}>
          <Box>
            <Typography variant="h4" style={{ fontSize: "1.85rem" }}>
              Create a product
            </Typography>
          </Box>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <UploadFile name="Add images" filesLimit={4} />
            </Box>

            <InputForm
              type="text"
              name="productName"
              id="productName"
              label="Name"
              inputRef={register({
                required: "This field is required",
                minLength: { value: 2, message: "The product name should contain minimum 2 characters" },
                maxLength: { value: 22, message: "The product name should contain maximum 22 characters" },
              })}
              value={productName}
              onChange={setProductName}
              errors={errors}
            />

            <InputForm
              type="number"
              name="productPrice"
              id="productPrice"
              label="Price"
              inputRef={register({
                required: "This field is required",
              })}
              value={productPrice}
              onChange={setProductPrice}
              errors={errors}
            />

            <InputForm
              type="text"
              name="productDescription"
              id="productDescription"
              label="Description"
              multiline
              rowsMax={"4"}
              inputRef={register({
                required: "This field is required",
                minLength: { value: 20, message: "The product description should contain minimum 20 characters" },
                maxLength: { value: 250, message: "The product description should contain maximum 250 characters" },
              })}
              value={productDescription}
              onChange={setProductDescription}
              errors={errors}
            />

            <InputForm
              type="number"
              name="productStock"
              id="productStock"
              label="Stock"
              inputRef={register({
                required: "This field is required",
              })}
              value={productStock}
              onChange={setProductStock}
              errors={errors}
            />

            <Box style={{ flexDirection: "row", marginTop: "25px" }}>
              <Button variant="contained" color="secondary" type="submit">
                Create Product
              </Button>
            </Box>
          </form>
        </Box>
        <Box className={classes.tabsContainer}>
          <Tabs
            className={classes.tabs}
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Details" className={classes.tab} disabled={cardDetails} onClick={() => setcardDetails(true)} />
            <Tab label="Card" className={classes.tab} disabled={!cardDetails} onClick={() => setcardDetails(false)} />
          </Tabs>
        </Box>
      </Card>
    </Box>
  );
};

export default CreateProductAdmin;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    card: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      width: "1100px",
      height: 600,
      borderRadius: "10px",
    },

    preview: {
      display: "flex",
      justifyContent: "center",
      width: "50%",
      padding: "20px 30px",
    },

    content: {
      flexDirection: "column",
      padding: "20px 20px",
      width: "50%",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      margin: "45px 0px 0px 0px",
    },
    tabsContainer: {
      position: "absolute",
      bottom: "0px",
      right: "0px",
      display: "flex",
      width: "100%",
      justifyContent: "flex-end",
    },
    tabs: {
      width: "50%",
      display: "flex",
      justifyContent: "space-between",
    },
    tab: {
      width: "50%",
    },
  })
);
