import React from "react";
import {
  AppBar,
  Typography,
  InputBase,
  IconButton,
  Toolbar,
} from "@mui/material";
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
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Navbar = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <NavbarStyledToolbar variant="dense">
          <NavbarMenuButton />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            MUI
          </Typography>

          <NavbarBox>
            {/* <NavbarProfileNotifications /> */}
            <NavbarProfile />
          </NavbarBox>
        </NavbarStyledToolbar>
      </AppBar>
      <Toolbar variant="dense" />
    </>
  );
};
