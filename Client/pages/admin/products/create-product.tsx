import React, { useState } from "react";

// React-Hook-Form
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// Material-UI
import { Button, Box, Card, TextField, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

// Components
// import UploadFile from "../../../Components/UploadFile/UploadFile";
// import CardProduct from "../../../Components/Card/Card";

// Apollo
import { useCreateProductMutation } from "../../../Graphql/index";

// ========================================================================================================

type FormValues = {
  productName: string;
  productPrice: number;
  productDescription: string;
  productStock: number;
};

const CreateProduct = () => {
  const classes = useStyles();

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productStock, setProductStock] = useState("");

  const { register, errors, handleSubmit } = useForm<FormValues>({
    criteriaMode: "all",
  });

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
    setProductPrice("");
    setProductDescription("");
    setProductStock("");
  };

  return (
    <Box className={classes.root}>
      {/* <CardProduct product={}/> */}
      <Card elevation={1} className={classes.content}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          {/* <Box>
            <UploadFile name="Add main image" filesLimit={1} />

            <UploadFile name="Add images" filesLimit={4} />
          </Box> */}

          <TextField
            type="text"
            name="productName"
            id="productName"
            label="Product Name"
            inputRef={register({
              required: "This field is required",
              minLength: { value: 2, message: "Your password should contain minimum 2 characters" },
              maxLength: { value: 20, message: "Your password should contain maximum 20 characters" },
            })}
            value={productName}
            onChange={(text) => setProductName(text.target.value)}
          />
          <ErrorMessage errors={errors} name="productName" as={<Typography variant="body2" />}>
            {({ messages }) =>
              messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            }
          </ErrorMessage>

          <TextField
            type="number"
            name="productPrice"
            id="productPrice"
            label="Product Price"
            inputRef={register({
              required: "This field is required",
            })}
            value={productPrice}
            onChange={(text) => setProductPrice(text.target.value)}
          />
          <ErrorMessage errors={errors} name="productPrice" as={<Typography variant="body2" />}>
            {({ messages }) =>
              messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            }
          </ErrorMessage>

          <TextField
            type="text"
            name="productDescription"
            id="productDescription"
            label="Product Description"
            inputRef={register({
              required: "This field is required",
              minLength: { value: 20, message: "Your password should contain minimum 20 characters" },
              maxLength: { value: 250, message: "Your password should contain maximum 250 characters" },
            })}
            value={productDescription}
            onChange={(text) => setProductDescription(text.target.value)}
          />
          <ErrorMessage errors={errors} name="productDescription" as={<Typography variant="body2" />}>
            {({ messages }) =>
              messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            }
          </ErrorMessage>

          {/* <TextField
            type="text"
            name="productPromotion"
            id="productPromotion"
            label="Product Promotion"
            inputRef={register({
              required: "This field is required",
              minLength: { value: 8, message: "Your password should contain minimum 8 characters" },
            })}
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          /> */}

          {/* <ErrorMessage errors={errors} name="productPromotion" as={<Typography variant="body2" />}>
            {({ messages }) =>
              messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            }
          </ErrorMessage> */}

          <TextField
            type="number"
            name="productStock"
            id="productStock"
            label="Product Stock"
            inputRef={register({
              required: "This field is required",
            })}
            value={productStock}
            onChange={(text) => setProductStock(text.target.value)}
          />
          <ErrorMessage errors={errors} name="productStock" as={<Typography variant="body2" />}>
            {({ messages }) =>
              messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
            }
          </ErrorMessage>

          <Button variant="outlined" color="secondary" type="submit">
            Create Product
          </Button>
        </form>
      </Card>
    </Box>
  );
};

export default CreateProduct;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    content: {
      padding: "30px",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      margin: "45px 0px 0px 0px",
      width: "600px",
    },
  })
);

// ========================================================================================================

//   @Field()
//   @Property({ default: false })
//   promotion?: boolean;

//   @Property({ default: Date.now() })
//   createdAt?: Date;
