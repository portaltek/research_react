import React, { useState } from "react";
import { AppBar, Typography, InputBase } from "@mui/material";
import { School } from "@mui/icons-material";

import {
  NavbarBox,
  NavbarBoxSM,
  NavbarSearch,
  NavbarStyledToolbar,
} from "./NavbarStyled";
import { NavbarNotifications } from "./NavbarNotifications";
import { NavbarUserProfile } from "./NavbarUserProfile";

export const Navbar = ({ displayDrawer, setDisplayDrawer }) => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <NavbarStyledToolbar>
        <NavbarBox>
          <School
            onClick={() => {
              setDisplayDrawer(!displayDrawer);
            }}
          />
          <NavbarBoxSM>
            <Typography variant="h6">MUI</Typography>
          </NavbarBoxSM>
        </NavbarBox>

        <NavbarSearch>
          <InputBase placeholder="search..."></InputBase>
        </NavbarSearch>

        <NavbarBox>
          <NavbarNotifications />
          <NavbarUserProfile
            profileMenu={{ openProfileMenu, setOpenProfileMenu }}
          />
        </NavbarBox>
      </NavbarStyledToolbar>
    </AppBar>
  );
};
