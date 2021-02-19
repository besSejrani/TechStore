import React from "react";

// React-Hook-Form
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// Material-UI
import {Card, Box, TextField, Button, Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const register = () => {
  const classes = useStyles();

  const { register, control, handleSubmit } = useForm({
    mode: "onChange",
  });

  return (
    <Box className={classes.root}>
      <Card style={{width: "400px", padding: "20px"}}>
      <Typography variant="h5">Sign In</Typography>
        <form className={classes.form} onSubmit={handleSubmit(d => console.log(d))}>
          <TextField type="email" name="emailSignIn" id="outlined-basic" label="Email"  inputRef={register}/>
          <TextField type="password" name="passwordSignIn" id="outlined-basic" label="Password" inputRef={register}/>
          <Button style={{ marginTop: "20px"}} type="submit" variant="outlined" color="secondary">Submit</Button>
        </form>
      </Card>

      <Card style={{width: "400px", padding: "20px"}}>
        <Typography variant="h5">Sign Up</Typography>
        <form className={classes.form} onSubmit={handleSubmit(d => console.log(d))}>
          <TextField type="text" name="username"id="outlined-basic" label="Username"  inputRef={register}/>
          <TextField type="email" name="emailSignUp"id="outlined-basic" label="Email"  inputRef={register}/>
          <TextField type="password" name="passwordSignUp" id="outlined-basic" label="Password"  inputRef={register}/>
          <TextField type="password" name="confirm password"id="outlined-basic" label="Confirm Password"inputRef={register}/>
          <Button style={{ marginTop: "20px"}} type="submit" variant="outlined" color="secondary">Submit</Button>
        </form>
      </Card>

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



// import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";

// export default () => {
//   const { register, control, handleSubmit } = useForm({
//     mode: "onChange",
//   });

//   return (
//     <>
//       <form onSubmit={handleSubmit(d => console.log(d))}>
//         <h1>React Hook Form DevTools</h1>

//         <label>Test</label>
//         <input name="test" ref={register} />

//         <input type="submit" />
//       </form>
      
//       <DevTool control={control} /> {/* set up the dev tool */}
//     </>
//   );
// };
