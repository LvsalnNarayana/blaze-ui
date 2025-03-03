import React, { useEffect } from "react";
import SignupForm from "../../components/auth/SignupForm";

const Signup = () => {
  useEffect(() => {
    document.title = "Blaze Algo | Signup";
  }, []);
  return <SignupForm />;
};

export default Signup;
