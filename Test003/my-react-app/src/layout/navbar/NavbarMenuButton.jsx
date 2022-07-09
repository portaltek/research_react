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
    <IconButton component="span" onClick={toggleDisplaySidebar}>
      <MenuIcon fontSize="large" />
    </IconButton>
  );
};
