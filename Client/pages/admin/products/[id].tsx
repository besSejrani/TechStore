import React, { useState } from "react";

//Next
import { useRouter } from "next/router";

// React-Hook-Form
import { useForm } from "react-hook-form";

// Material-UI
import { Button, Box, Card, Typography, Tabs, Tab } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Components
import InputForm from "../../../Components/InputForm/InputForm";
import UploadFile from "../../../Components/UploadFile/UploadFile";
import PreviewProduct from "../../../Components/PreviewProduct/PreviewProduct";
import PreviewProductCard from "../../../Components/PreviewProductCard/PreviewProductCard";

// Apollo
import { useUpdateProductMutation, useGetProductQuery } from "../../../Graphql/index";

// ========================================================================================================

type FormValues = {
  productName: string;
  productPrice: number;
  productDescription: string;
  productStock: number;
};

const ModifyProductAdmin = ({ query }) => {
  const classes = useStyles();

  const [updateProduct] = useUpdateProductMutation();
  const { data } = useGetProductQuery({ variables: { productId: query.id } });

  const router = useRouter();

  const [productName, setProductName] = useState(data?.getProduct.name);
  const [productPrice, setProductPrice] = useState<number>(data?.getProduct.price);
  const [productDescription, setProductDescription] = useState(data?.getProduct.description);
  const [productStock, setProductStock] = useState<number>(data?.getProduct.stock);

  const { register, errors, handleSubmit } = useForm<FormValues>({
    criteriaMode: "all",
  });

  const [value, setValue] = React.useState(0);
  const [cardDetails, setcardDetails] = useState(true);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const onSubmit = async (form) => {
    await updateProduct({
      variables: {
        productId: query.id,
        name: form.productName,
        price: parseFloat(form.productPrice),
        description: form.productDescription,
        stock: parseInt(form.productStock),
      },
    });

    await router.push("/admin/products");
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
              Update Product
            </Typography>
          </Box>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <Box>
              <UploadFile name="Update images" filesLimit={4} />
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
                Update Product
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

export default ModifyProductAdmin;

ModifyProductAdmin.getInitialProps = async ({ query }) => {
  return { query };
};

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
