import { Box, Container, Stack } from "@mui/material";
import UserMenu from "./UserMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Stack spacing={2} sx={{ bgcolor: "#eee", py: 1 }}>
      <Container
        disableGutters
        maxWidth={"desktop"}
        sx={{
          mx: "auto !important",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Link to={"/"}>
            <Box component={"img"} src="/Blaze_logo.svg" width={"100px"} />
          </Link>
          <UserMenu />
        </Stack>
      </Container>
    </Stack>
  );
};

export default Header;
