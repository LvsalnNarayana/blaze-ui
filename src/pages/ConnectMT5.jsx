import React, { useEffect } from "react";
import Mt5ConnectionForm from "../components/mt5Connection/Mt5ConnectionForm";
import { Stack, Typography } from "@mui/material";
import UserMenu from "../components/shared/UserMenu";
import { Link } from "react-router-dom";

const ConnectMT5 = () => {
    useEffect(() => {
      document.title = "Blaze Algo | Connect MT5";
    }, []);
  return (
    <Stack flexGrow={1} p={2} width={"100%"} alignItems={"flex-end"}>
      <Stack width={"100%"} justifyContent={"space-between"} direction={"row"}>
        <Typography
          variant="body1"
          fontSize={15}
          fontWeight={300}
          sx={{
            textDecoration: "none",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Link style={{ textDecoration: "none",color:"#1058DF" }} to={"/"}>&#x2190;&nbsp;Back to website</Link>
        </Typography>
        <UserMenu />
      </Stack>
      <Stack
        flexGrow={1}
        p={2}
        width={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Mt5ConnectionForm />
      </Stack>
    </Stack>
  );
};

export default ConnectMT5;
