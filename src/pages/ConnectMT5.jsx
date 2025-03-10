import React, { useEffect } from "react";
import Mt5ConnectionForm from "../components/mt5Connection/Mt5ConnectionForm";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import UserMenu from "../components/shared/UserMenu";
import { Link } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ConnectMT5 = () => {
  const { user } = useUser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));

  useEffect(() => {
    document.title = "Blaze Algo | Connect MT5";
  }, []);
  return (
    <Stack flexGrow={1} p={2} width={"100%"} alignItems={"flex-end"}>
      <Stack
        width={"100%"}
        justifyContent={isMobile ? "flex-end" : "space-between"}
        direction={"row"}
      >
        {!isMobile && (
          <Typography
            variant="body1"
            fontSize={15}
            fontWeight={300}
            sx={{
              mt: 2,
              ml: 4,
              textDecoration: "none",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Link style={{ textDecoration: "none", color: "#1058DF" }} to={"/"}>
              &#x2190;&nbsp;Back to website
            </Link>
          </Typography>
        )}
        <UserMenu />
      </Stack>
      <Stack
        flexGrow={1}
        p={2}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {!user?.publicMetadata?.mt5_account_connected ? (
          <Mt5ConnectionForm />
        ) : (
          <Typography
            variant="body1"
            fontSize={20}
            color="#00000070"
            textAlign={"center"}
            sx={
              isMobile && {
                py: 6,
                px: 4,
                backgroundColor: "#fff",
                borderRadius: 6,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }
            }
          >
            Your MT5 account is already connected.
            <br /> Please visit the dashboard to manage your MT5 account.
          </Typography>
        )}
      </Stack>
    </Stack>
  );
};

export default ConnectMT5;
