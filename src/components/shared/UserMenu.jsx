import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton, ListItemIcon, Stack, Typography } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
const UserMenu = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const { signOut } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignout = () => {
    signOut();
  };
  return (
    <>
      <Stack
        direction={"row"}
        spacing={1}
        alignItems={"center"}
        justifyContent={"center"}
        onClick={handleClick}
        sx={{
          cursor: "pointer",
        }}
      >
        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          sx={{
            color: "white",
            background:
              "linear-gradient(135deg, rgba(10,5,82,1) 0%, rgba(94,0,179,1) 100%)",
            "&:hover": {
              background:
                "linear-gradient(135deg, rgba(10,5,82,1) 0%, rgba(94,0,179,1) 100%)",
            },
          }}
        >
          <PersonIcon fontSize="small" />
        </IconButton>
        <Typography variant="body2">{user?.fullName}</Typography>
      </Stack>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        disableAutoFocusItem
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1,

            overflow: "visible",
            filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.32))",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
      >
        <MenuItem
          disabled
          onClick={() => {
            navigate("/account/profile");
            handleClose();
          }}
          sx={{ fontSize: "14px", fontWeight: 400 }}
        >
          <ListItemIcon
            sx={{
              mr: 2,
              minWidth: "fit-content !important",
            }}
          >
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          Account
        </MenuItem>
        <MenuItem
          onClick={handleSignout}
          sx={{ fontSize: "14px", fontWeight: 400 }}
        >
          <ListItemIcon
            sx={{
              mr: 2,
              minWidth: "fit-content !important",
            }}
          >
            <PowerSettingsNewIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
export default UserMenu;
