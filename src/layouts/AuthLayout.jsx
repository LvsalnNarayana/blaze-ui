import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import { Stack } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import Loader from "../components/shared/Loader";

const AuthLayout = () => {
  const navigate = useNavigate();
  const { userId, isLoaded } = useAuth();

  useEffect(() => {
    if (isLoaded) {
      if (!userId) {
        navigate("/signin");
      }
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return (
      <Stack
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Loader />
      </Stack>
    );
  }

  return <Outlet />;
};

export default AuthLayout;
