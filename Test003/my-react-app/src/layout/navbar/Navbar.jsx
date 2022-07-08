import React, { useState, useContext } from "react";
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
import { AppContext } from "../AppContext";

export const Navbar = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const { config, setConfig } = useContext(AppContext);
  const toggleDisplaySidebar = () => {
    config.sidebar.display = !config.sidebar.display;
    setConfig({
      ...config,
    });
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <NavbarStyledToolbar>
        <NavbarBox>
          <School onClick={() => toggleDisplaySidebar()} />
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