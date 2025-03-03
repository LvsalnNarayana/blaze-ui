import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const TempLayout = ({ children }) => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      minHeight={"100vh"}
      sx={{
        overflow: { xs: "auto", md: "hidden" },
      }}
    >
      <Stack
        flex={1}
        minHeight={"100vh"}
        bgcolor={"#f1f1f1"}
        position={"relative"}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
      >
        <Box
          component={"img"}
          src={"_bg.png"}
          width={"100%"}
          sx={{
            objectFit: "cover",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            borderRadius: "0px 40px 40px 0px",
          }}
        />

        <Box
          component={"img"}
          src={"blaze_white.svg"}
          width={"140px"}
          sx={{
            objectFit: "cover",
            position: "absolute",
            top: 30,
            left: 30,
            zIndex: 2,
          }}
        />

        <Typography
          variant={"body1"}
          sx={{
            position: "absolute",
            bottom: 30,
            left: 30,
            zIndex: 2,
            color: "white",
            fontSize: {
              mobile: "42px",
              tablet: "42px",
              laptop: "48px",
              desktop: "48px",
            },
          }}
        >
          Effortless <b>Trading</b>
          <br /> Starts Here
        </Typography>
      </Stack>

      <Stack
        flex={1}
        minHeight={"100vh"}
        bgcolor={"#f1f1f3"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          overflowY: "auto",
          padding: { xs: 2, md: 4 },
        }}
      >
        {children}
      </Stack>
    </Stack>
  );
};

export default TempLayout;
