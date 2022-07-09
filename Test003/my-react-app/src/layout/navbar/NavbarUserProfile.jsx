import React, { useState } from "react";
import {
  Box,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Person, Logout } from "@mui/icons-material";

export const NavbarUserProfile = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  return (
    <Box>
      <Avatar
        alt="Remy Sharp"
        src="favicon.ico"
        onClick={(_e) => setOpenProfileMenu(true)}
      />
      <Typography variant="span"></Typography>

      <Menu
        open={openProfileMenu}
        onClose={(_e) => setOpenProfileMenu(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>
          <ListItemIcon>
            <Person fontSize="small" />
          </ListItemIcon>
          <ListItemText>My profile</ListItemText>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
};
