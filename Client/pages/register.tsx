import React, { useState } from "react";

// React-Hook-Form
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// Material-UI
import { Card, Box, TextField, Button, Typography, Divider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// Icons
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";

// Apollo
import { useSignupMutation } from "../Graphql/index";

const register = () => {
  const classes = useStyles();

  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [signUp] = useSignupMutation();

  const onSubmitSignup = async (form) => {
    if (password !== confirmPassword) {
      await alert("passwords don't match");
      return;
    }

    console.log(form);

    await signUp({
      variables: { email: form.email, password: form.password, username: form.username },
    });
  };

  return (
    <Box className={classes.root}>
      <Card style={{ width: "400px", padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h5">Sign In</Typography>
        <form className={classes.form} onSubmit={handleSubmit((d) => console.log(d))}>
          <TextField type="email" name="emailSignIn" id="outlined-basic" label="Email" inputRef={register} />
          <TextField type="password" name="passwordSignIn" id="outlined-basic" label="Password" inputRef={register} />
          <Button style={{ marginTop: "20px" }} type="submit" variant="outlined" color="secondary">
            Submit
          </Button>
        </form>
        <Divider />

        <Button variant="contained" color="secondary" startIcon={<TwitterIcon />}>
          Twitter
        </Button>
        <a href="http://localhost:4000/auth/github">
          <Button variant="contained" color="primary" startIcon={<GithubIcon />}>
            Github
          </Button>
        </a>
      </Card>

      {/* <Card style={{ width: "400px", padding: "20px", borderRadius: "10px" }}>
        <Typography variant="h5">Sign Up</Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmitSignup)}>
          <TextField
            type="text"
            name="username"
            id="outlined-basic"
            label="Username"
            inputRef={register}
            value={username}
            onChange={(text) => setUsername(text.target.value)}
          />

          <TextField
            type="email"
            name="email"
            id="outlined-basic"
            label="Email"
            inputRef={register}
            value={email}
            onChange={(text) => setEmail(text.target.value)}
          />

          <TextField
            type="password"
            name="password"
            id="outlined-basic"
            label="Password"
            inputRef={register}
            value={password}
            onChange={(text) => setPassword(text.target.value)}
          />

          <TextField
            type="password"
            name="confirmPassword"
            id="outlined-basic"
            label="Confirm Password"
            inputRef={register}
            value={confirmPassword}
            onChange={(text) => setConfirmPassword(text.target.value)}
          />
          <Button style={{ marginTop: "20px" }} type="submit" variant="outlined" color="secondary">
            Submit
          </Button>
        </form>
      </Card> */}

      <DevTool control={control} />
    </Box>
  );
};

export default register;

// =================================================================

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
    },
  })
);
