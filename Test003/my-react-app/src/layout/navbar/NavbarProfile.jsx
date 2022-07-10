import React, { useState } from "react";

import { Box, Menu, MenuItem, IconButton, Badge } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

import { NavbarProfileMenu } from "./NavbarProfileMenu";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NavbarProfileMenuMobile } from "./NavbarProfileMenuMobile";

export const NavbarProfile = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <>
      {/* <Avatar
        alt="#USERNAME"
        src="favicon.ico"
        p={1}
        onClick={handleProfileMenuOpen}
      /> */}
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
      {
        <NavbarProfileMenuMobile
          {...{
            mobileMenuId,
            mobileMoreAnchorEl,
            isMobileMenuOpen,
            handleMobileMenuClose,
            handleProfileMenuOpen,
          }}
        />
      }
      {
        <NavbarProfileMenu
          {...{
            menuId,
            anchorEl,
            isMenuOpen,
            handleMenuClose,
          }}
        />
      }
    </>
  );
};
