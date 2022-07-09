import React from "react";
import { AppBar, Typography, InputBase, IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

import {
  NavbarBox,
  NavbarBoxSM,
  NavbarSearch,
  NavbarStyledToolbar,
} from "./NavbarStyled";
import { NavbarNotifications } from "./NavbarNotifications";
import { NavbarUserProfile } from "./NavbarUserProfile";
import { NavbarMenuButton } from "./NavbarMenuButton";

export const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <NavbarStyledToolbar>
        <NavbarBox>
          <NavbarMenuButton />
          <IconButton component="span">
            <SchoolIcon fontSize="Large" />
          </IconButton>
          <NavbarBoxSM>
            <Typography variant="h6">MUI</Typography>
          </NavbarBoxSM>
        </NavbarBox>

        <NavbarSearch>
          <InputBase placeholder="search..."></InputBase>
        </NavbarSearch>

        <NavbarBox>
          <NavbarNotifications />
          <NavbarUserProfile />
        </NavbarBox>
      </NavbarStyledToolbar>
    </AppBar>
  );
};
