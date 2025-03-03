import React, { useEffect } from "react";
import SigninForm from "../../components/auth/SigninForm";
import { useAuth } from "@clerk/clerk-react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Signin = () => {
  const { isLoaded, isSignedIn } = useAuth();
  useEffect(() => {
    document.title = "Blaze Algo | Signin";
  }, []);
  return (
    <>
      {isLoaded && !isSignedIn && <SigninForm />}
      {isLoaded && isSignedIn && (
        <Stack spacing={2} alignItems="center" justifyContent="center">
          <Typography variant="body1" fontSize={18}>
            You are already signed in
          </Typography>
          <Typography variant="body1" fontSize={18}>
            <Link to="/">Go to Dashboard</Link>
          </Typography>
        </Stack>
      )}
    </>
  );
};

export default Signin;
