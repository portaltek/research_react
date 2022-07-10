import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Menu,
  MenuItem,
  IconButton,
  Badge,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Person, Logout, AccountCircle } from "@mui/icons-material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { NavbarBox, NavbarBoxSM } from "./NavbarStyled";
import { NavbarProfileMenu } from "./NavbarProfileMenuMobile";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/More";

export const NavbarProfileNotifications = ({
  menuId,
  handleProfileMenuOpen,
}) => {
  return (
    <>
      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
        <Badge badgeContent={4} color="error">
          <MailIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        aria-label="show 17 new notifications"
        color="inherit"
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="account of current user"
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleProfileMenuOpen}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </>
  );
};
