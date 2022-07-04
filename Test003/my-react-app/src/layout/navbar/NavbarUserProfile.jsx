import React from "react";
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

export const NavbarUserProfile = (props) => {
  return (
    <Box>
      <Avatar
        alt="Remy Sharp"
        src="favicon.ico"
        onClick={(_e) => props.profileMenu.setOpenProfileMenu(true)}
      />
      <Typography variant="span"></Typography>

      <Menu
        open={props.profileMenu.openProfileMenu}
        onClose={(_e) => props.profileMenu.setOpenProfileMenu(false)}
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
