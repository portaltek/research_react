import React, { useContext } from "react";
import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import { AppContext } from "../AppContext";

export const NavbarMenuButton = () => {
  const { app, setApp } = useContext(AppContext);
  const toggleDisplaySidebar = () => {
    app.sidebar.display = !app.sidebar.display;
    setApp({
      ...app,
    });
  };
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
      onClick={toggleDisplaySidebar}
    >
      <MenuIcon />
    </IconButton>
  );
};
