import React, { useContext } from "react";
import { Toolbar, Drawer, CssBaseline, Box } from "@mui/material";

import SidebarList from "./SidebarList";
import { AppContext } from "../AppContext";

const defaultDrawerWidth = 180; //60

export const Sidebar = () => {
  const { app } = useContext(AppContext);

  const sidebarFlex = app.sidebar.display ? 1 : 0;
  const sidebarWidth = app.sidebar.display ? defaultDrawerWidth : 0;

  return (
    <Box flex={sidebarFlex} p={0}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: sidebarWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar variant="dense" />
        <SidebarList />
      </Drawer>
    </Box>
  );
};
