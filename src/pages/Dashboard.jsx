import React, { useEffect } from "react";
import UserMenu from "../components/shared/UserMenu";
import { Stack } from "@mui/material";
import Welcome from "../components/dashboard/Welcome";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  useEffect(() => {
    document.title = "Blaze Algo | Dashboard";
  }, []);
  return (
    <>
      <Stack flexGrow={1} p={2} width={"100%"} alignItems={"flex-end"}>
        <Stack>
          <UserMenu />
        </Stack>
        <Stack
          flexGrow={1}
          p={2}
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Welcome />
        </Stack>
      </Stack>
    </>
  );
};

export default Dashboard;
