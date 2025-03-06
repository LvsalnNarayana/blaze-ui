import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Header from "../components/shared/Header";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Stack>
      <Header />
      <Container
        maxWidth={"desktop"}
        sx={{
          mx: "auto !important",
        }}
      >
        <Stack
          gap={2}
          width={"100%"}
          height={"100vh"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            gap={3}
            direction={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Box
              component={"img"}
              src="/cancel.png"
              sx={{
                width: "70px",
                objectFit: "cover",
              }}
            />
            <Typography variant="h2">Page Not Found</Typography>
            <Link to={"/"}>
              <Typography variant="body1">Back to home</Typography>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default NotFound;
