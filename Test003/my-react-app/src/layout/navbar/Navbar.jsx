import React, { useContext } from "react";
import { AppBar, Typography, InputBase } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";

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
          <SchoolIcon onClick={toggleDisplaySidebar} />
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
