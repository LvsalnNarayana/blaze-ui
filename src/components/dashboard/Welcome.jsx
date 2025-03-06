import { useUser } from "@clerk/clerk-react";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      spacing={3}
      width={"70%"}
    >
      <Box component={"img"} src="/check.svg" />
      <Typography
        variant="body1"
        fontSize={44}
        fontWeight={500}
        letterSpacing={0.5}
        lineHeight={1.5}
      >
        Welcome to Blaze!
      </Typography>
      <Typography
        variant="body1"
        textAlign={"center"}
        color="#656C7B"
        lineHeight={1.5}
        letterSpacing={0.72}
        fontSize={18}
        fontWeight={400}
      >
        Account created successfully! Want to start trading? Connect your MT5
        now or skip for later.
      </Typography>
      <Button
        fullWidth
        variant={"contained"}
        sx={{
          px: 2,
          py: 1,
          backgroundColor: "#1058DF",
          color: "#fff",
          borderRadius: "100px",
          fontSize: 14,
          fontWeight: 400,
          letterSpacing: 0.72,
          textTransform: "none",
        }}
        disabled={user?.publicMetadata?.mt5_account_connected}
        onClick={() => {
          navigate("/connect-mt5");
        }}
      >
        {user?.publicMetadata?.mt5_account_connected
          ? "MT5 Connected Successfully"
          : "Connect to MT5"}
      </Button>
      <Typography variant="body1" sx={{ mt: 2 }} fontSize={14} fontWeight={400}>
        Dashboard coming soon...
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }} color="#1058DF">
        <Link style={{ color: "#1058DF" }} to="/">
          Go back to website
        </Link>
      </Typography>
    </Stack>
  );
};

export default Welcome;
