import React, { useContext } from "react";
import { AppBar, Typography, InputBase, IconButton } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import MenuIcon from "@mui/icons-material/Menu";

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
  const { app, setApp } = useContext(AppContext);
  const toggleDisplaySidebar = () => {
    app.sidebar.display = !app.sidebar.display;
    setApp({
      ...app,
    });
  };
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <NavbarStyledToolbar>
        <NavbarBox>
          <IconButton component="span">
            <MenuIcon fontSize="large" onClick={toggleDisplaySidebar} />
          </IconButton>
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
