import React from "react";
import { AppBar, Typography, InputBase, IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

import {
  NavbarBox,
  NavbarBoxSM,
  NavbarSearch,
  NavbarStyledToolbar,
} from "./NavbarStyled";
import { NavbarProfileNotifications } from "./NavbarProfileNotification";
import { NavbarProfile } from "./NavbarProfile";
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
          <IconButton>
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
          <NavbarProfileNotifications />
          <NavbarProfile />
        </NavbarBox>
      </NavbarStyledToolbar>
    </AppBar>
  );
};
