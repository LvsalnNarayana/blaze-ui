import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

const Loader = () => {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <CircularProgress size={30} />
      <Box component={"img"} src="/Blaze_logo.svg" width={"100px"} />
    </Stack>
  );
};

export default Loader;
