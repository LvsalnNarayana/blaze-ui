import { useUser } from "@clerk/clerk-react";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  const { user } = useUser();
  return (
    <Stack spacing={2} sx={{ bgcolor: "#eee", py: 1, color: "white" }}>
      <Container>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box component={"img"} src="/Blaze_logo.svg" width={"60px"} />
          <Avatar
            sx={{
              width: 32,
              height: 32,
              bgcolor: "primary.main",
              fontSize: "14px",
            }}
          >
            {user.firstName.toString()?.[0]}
          </Avatar>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
