import React, { useState } from "react";

// Next
import { useRouter } from "next/router";

// React-Hook-Form
import { useForm } from "react-hook-form";

// Material-UI
import {
  Button,
  Box,
  Card,
  Typography,
  RadioGroup,
  Radio,
  FormControl,
  FormLabel,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Components
import InputForm from "../../../Components/InputForm/InputForm";
import UploadFile from "../../../Components/UploadFile/UploadFile";
import PreviewProduct from "../../../Components/PreviewProduct/PreviewProduct";

// Apollo
import { useCreateProductMutation, GetProductsDocument, GetProductsQuery } from "../../../Graphql/index";

// Apollo State
import { useReactiveVar } from "@apollo/client";
import { product as imagesUrl } from "../../../Apollo/state/product/index";

// SSR
import withApollo from "../../../Apollo/ssr";
import { getDataFromTree } from "@apollo/react-ssr";

// ========================================================================================================

type FormValues = {
  productName: string;
  productPrice: number;
  productDescription: string;
  productStock: number;
  productPromotion: boolean;
};

const CreateProductAdmin = () => {
  const classes = useStyles();

  const images = useReactiveVar(imagesUrl);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState<number>(0);
  const [productDescription, setProductDescription] = useState("");
  const [productStock, setProductStock] = useState<number>(0);
  const [productPromotion, setProductPromotion] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProductPromotion(!productPromotion);
  };

  const router = useRouter();

  const { register, errors, handleSubmit } = useForm<FormValues>({
    criteriaMode: "all",
  });

  const [createProduct] = useCreateProductMutation();

  console.log(images);

  const onSubmit = async (form) => {
    console.log(form);

    await createProduct({
      variables: {
        picture: images.images[0],
        name: form.productName,
        price: form.productPrice,
        description: form.productDescription,
        stock: form.productStock,
        promotion: form.productPromotion,
        status: form.productStatus,
      },
      update(cache, { data }) {
        const newProduct = data?.createProduct;

        const products: GetProductsQuery = cache.readQuery({
          query: GetProductsDocument,
        });

        cache.writeQuery({
          query: GetProductsDocument,
          data: {
            getProducts: [...products?.getProducts, newProduct],
          },
        });
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
    images: images.preview,
    stock: productStock,
    rating: 4,
    reviews: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  };

  return (
    <Box className={classes.root}>
      <Card elevation={1} className={classes.card}>
        <Box className={classes.preview}>
          <PreviewProduct product={product} />
        </Box>

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
                maxLength: { value: 5, message: "The product price should contain maximum 5 digits" },
                min: { value: 0, message: "The product price can not be a negative number" },
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
                maxLength: { value: 5, message: "The product stock should contain maximum 5 digits" },
                min: { value: 0, message: "The product stock can not be a negative number" },
              })}
              value={productStock}
              onChange={setProductStock}
              errors={errors}
            />

            <FormControlLabel
              control={
                <Checkbox
                  color="primary"
                  inputRef={register()}
                  onChange={handleChange}
                  name="productPromotion"
                  id="productPromotion"
                  disableRipple
                  checked={productPromotion}
                />
              }
              label="Promotion"
            />

            <FormControl component="fieldset">
              <FormLabel component="legend">Status</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  control={<Radio color="secondary" value="DRAFT" name="productStatus" inputRef={register()} />}
                  label="Draft"
                  labelPlacement="end"
                />

                <FormControlLabel
                  control={<Radio color="secondary" value="PUBLISHED" name="productStatus" inputRef={register()} />}
                  label="Published"
                  labelPlacement="end"
                />

                <FormControlLabel
                  control={<Radio color="secondary" value="ARCHIVED" name="productStatus" inputRef={register()} />}
                  label="Archived"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>

            <Box style={{ flexDirection: "row", marginTop: "25px" }}>
              <Button variant="contained" color="secondary" type="submit">
                Create Product
              </Button>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};
export default withApollo(CreateProductAdmin, { getDataFromTree });

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
  })
);
