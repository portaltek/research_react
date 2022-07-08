import React, { useContext } from "react";
import { Toolbar, Drawer, CssBaseline, Box } from "@mui/material";

import SidebarList from "./SidebarList";
import { AppContext } from "../AppContext";

const defaultDrawerWidth = 200; //60

export const Sidebar = () => {
  const { config } = useContext(AppContext);

  const sidebarVisible = config.sidebar.display ? 1 : 0;
  const sidebarPadding = config.sidebar.display ? 2 : 0;
  const sidebarWidth = config.sidebar.display ? defaultDrawerWidth : 0;

  return (
    <Box flex={sidebarVisible} p={sidebarPadding}>
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
        <Toolbar />
        <SidebarList />
      </Drawer>
    </Box>
  );
};
