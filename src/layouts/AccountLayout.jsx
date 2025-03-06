import {
  MenuList,
  MenuItem,
  Stack,
  Container,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/shared/Header";
import PersonIcon from "@mui/icons-material/Person";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SettingsIcon from "@mui/icons-material/Settings";
import DevicesIcon from "@mui/icons-material/Devices";
import ReceiptIcon from "@mui/icons-material/Receipt";
const AccountLayout = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Stack height={"100vh"}>
      <Header />
      <Container
        disableGutters
        maxWidth={"desktop"}
        sx={{
          display: "flex",
          flexDirection: "column",
          mx: "auto !important",
          flexGrow: 1,
        }}
      >
        <Stack
          flexGrow={1}
          direction={"row"}
          justifyContent={"space-between"}
          spacing={2}
          alignItems={"flex-start"}
        >
          <Stack width={200} py={2}>
            <MenuList
              disablePadding
              sx={{
                "& .MuiMenuItem-root": {
                  mb: 1.5,
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  navigate("./profile");
                }}
                sx={{
                  borderRadius: 2,
                }}
                selected={pathname?.includes("/profile")}
              >
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 300,
                    },
                  }}
                >
                  Profile
                </ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("./referrals");
                }}
                sx={{
                  borderRadius: 2,
                }}
                selected={pathname?.includes("/referrals")}
              >
                <ListItemIcon>
                  <AccountTreeIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 300,
                    },
                  }}
                >
                  Referrals
                </ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("./settings");
                }}
                sx={{
                  borderRadius: 2,
                }}
                selected={pathname?.includes("/settings")}
              >
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 300,
                    },
                  }}
                >
                  Settings
                </ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("./invoices");
                }}
                sx={{
                  borderRadius: 2,
                }}
                selected={pathname?.includes("/invoices")}
              >
                <ListItemIcon>
                  <ReceiptIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 300,
                    },
                  }}
                >
                  Invoices
                </ListItemText>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  navigate("./sessions");
                }}
                sx={{
                  borderRadius: 2,
                }}
                selected={pathname?.includes("/sessions")}
              >
                <ListItemIcon>
                  <DevicesIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiTypography-root": {
                      fontWeight: 300,
                    },
                  }}
                >
                  Sessions
                </ListItemText>
              </MenuItem>
            </MenuList>
          </Stack>
          <Stack
            flexGrow={1}
            p={2}
            width={"100%"}
            height={"100%"}
            justifyContent={"flex-start"}
            alignItems={"flex-start"}
          >
            <Outlet />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default AccountLayout;
