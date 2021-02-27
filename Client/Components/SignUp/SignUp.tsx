import React from "react";

// Next
import Link from "next/link";
import Image from "next/image";

// React-Hook-Form
import { useForm } from "react-hook-form";

// Material-UI
import { Card, Box, TextField, Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

// ========================================================================================================

const SignIn = () => {
  const classes = useStyles();

  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <Box>
      <Card elevation={0} className={classes.signin}>
        <Image
          width={700}
          height={400}
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

          <form className={classes.form} onSubmit={handleSubmit((d) => console.log(d))}>
            <TextField type="text" name="username" id="outlined-basic" label="Username" inputRef={register} />

            <TextField type="email" name="email" id="outlined-basic" label="Email" inputRef={register} />

            <TextField type="password" name="password" id="outlined-basic" label="Password" inputRef={register} />

            <TextField
              type="password"
              name="confirmPassword"
              id="outlined-basic"
              label="Confirm Password"
              inputRef={register}
            />
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
      height: 480,
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

      marginTop: "50px",
    },
  })
);
