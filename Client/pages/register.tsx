import React from "react";

// Components
import SigninSignup from "../Components/SigninSignup/SigninSignup";

// SSR
import withApollo from "../Apollo/ssr";
import { getDataFromTree } from "@apollo/react-ssr";

// ========================================================================================================

const register = () => {
  return <SigninSignup />;
};

export default withApollo(register, { getDataFromTree });
