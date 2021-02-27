import React, { useState } from "react";

// Next
import Image from "next/image";

// React-Hook-Form
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// Material-UI
import { Card, Box, TextField, Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// Apollo
import { useSignupMutation } from "../../Graphql";

// ========================================================================================================

type FormValues = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const SignIn = () => {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { register, errors, handleSubmit } = useForm<FormValues>({
    criteriaMode: "all",
  });

  const [signUp] = useSignupMutation();

  const onSubmit = async (form) => {
    if (password !== confirmPassword) {
      await alert("passwords don't match");
      return;
    }

    const { data } = await signUp({
      variables: { email: form.email, password: form.password, username: form.username },
    });

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Box>
      <Card elevation={0} className={classes.signin}>
        <Image
          width={700}
          height={520}
          src={"/static/Water24.png"}
          // title={product.title}
        />

        <Box className={classes.content}>
          <Box>
            <Typography variant="h4" style={{ fontSize: "1.85rem" }}>
              I do not have an account
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              Register a new account
            </Typography>
          </Box>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="text"
              name="username"
              id="signupUsername"
              label="Username"
              inputRef={register({
                required: "This field is required",
                minLength: { value: 3, message: "Your username should contain minimum 3 characters" },
                maxLength: { value: 20, message: "Your username should contain maximum 20 characters" },
              })}
              value={username}
              onChange={(text) => setUsername(text.target.value)}
            />
            <ErrorMessage errors={errors} name="username" as={<Typography variant="body2" />}>
              {({ messages }) =>
                messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
              }
            </ErrorMessage>

            <TextField
              type="email"
              name="email"
              id="signupEmail"
              label="Email"
              inputRef={register({
                required: "This field is required",
                minLength: { value: 8, message: "Your email should contain minimum 8 characters" },
              })}
              value={email}
              onChange={(text) => setEmail(text.target.value)}
            />
            <ErrorMessage errors={errors} name="email" as={<Typography variant="body2" />}>
              {({ messages }) =>
                messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
              }
            </ErrorMessage>

            <TextField
              type="password"
              name="password"
              id="signupPassword"
              label="Password"
              inputRef={register({
                required: "This field is required",
                minLength: { value: 8, message: "Your password should contain minimum 8 characters" },
              })}
              value={password}
              onChange={(text) => setPassword(text.target.value)}
            />
            <ErrorMessage errors={errors} name="password" as={<Typography variant="body2" />}>
              {({ messages }) =>
                messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
              }
            </ErrorMessage>

            <TextField
              type="password"
              name="confirmPassword"
              id="signupConfirmPassword"
              label="Confirm Password"
              inputRef={register({
                required: "This field is required",
                minLength: { value: 8, message: "Your confirm password should contain minimum 8 characters" },
              })}
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text.target.value)}
            />
            <ErrorMessage errors={errors} name="confirmPassword" as={<Typography variant="body2" />}>
              {({ messages }) =>
                messages && Object.entries(messages).map(([type, message]) => <p key={type}>{message}</p>)
              }
            </ErrorMessage>

            <Box className={classes.actionButtons}>
              <Button type="submit" variant="outlined" color="secondary">
                Sign up
              </Button>
            </Box>
          </form>
        </Box>
      </Card>
    </Box>
  );
};

export default SignIn;

// ========================================================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    signin: {
      display: "flex",
      height: 520,
      justifyContent: "space-between",
    },

    content: {
      display: "flex",
      flexDirection: "column",
      padding: "20px 30px",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      margin: "30px 0px 0px 0px",
    },

    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      marginTop: "30px",
    },
  })
);
