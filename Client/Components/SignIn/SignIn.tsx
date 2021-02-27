import React, { useState } from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// React-Hook-Form
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

// Material-UI
import { Card, Box, TextField, Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// Icons
import GoogleIcon from "@material-ui/icons/Apple";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";

// Apollo
import { useSigninMutation } from "../../Graphql/index";

// ========================================================================================================

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const classes = useStyles();

  const { register, errors, handleSubmit } = useForm<FormValues>({
    criteriaMode: "all",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signIn] = useSigninMutation();

  const onSubmit = async (form) => {
    const { data } = await signIn({
      variables: { email: form.email, password: form.password },
    });

    localStorage.setItem("token", data?.signin.token!);

    setEmail("");
    setPassword("");
  };

  return (
    <Box>
      <Card elevation={0} className={classes.signin}>
        <Image
          width={790}
          height={520}
          src={"/static/Sand2.png"}
          // title={product.title}
        />

        <Box className={classes.content}>
          <Box>
            <Typography variant="h4" style={{ fontSize: "1.85rem" }}>
              I already have an account
            </Typography>
            <Typography variant="body1" style={{ marginTop: 5 }}>
              Sign in with social media or your email and password
            </Typography>

            <Box className={classes.socialbuttons}>
              <a href="http://localhost:4000/auth/google">
                <Button variant="outlined" color="primary" startIcon={<GoogleIcon />}>
                  Google
                </Button>
              </a>

              <a href="http://localhost:4000/auth/github">
                <Button variant="contained" color="primary" startIcon={<GithubIcon />}>
                  Github
                </Button>
              </a>
              <a href="#">
                <Button variant="contained" color="secondary" startIcon={<TwitterIcon />}>
                  Twitter
                </Button>
              </a>
            </Box>
          </Box>

          <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="email"
              name="email"
              id="signinEmail"
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
              id="signinPassword"
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

            <Box className={classes.actionButtons}>
              <Button type="submit" variant="outlined" color="secondary">
                Signin
              </Button>

              <Link href="/reset-password">
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Forgot Password ?
                </Typography>
              </Link>
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
      flexDirection: "column",
      padding: "20px 30px",
    },

    form: {
      display: "flex",
      flexDirection: "column",
      margin: "45px 0px 0px 0px",
    },

    socialbuttons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "30px",
    },

    actionButtons: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      marginTop: "30px",
    },
  })
);
