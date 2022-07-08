import React, { useContext } from "react";
import { Box, Toolbar, Drawer, CssBaseline } from "@mui/material";

import SidebarList from "./SidebarList";
import { AppContext } from "../AppContext";

const defaultDrawerWidth = 200; //60

export const Sidebar = ({ themeMode, setThemeMode }) => {
  const { config } = useContext(AppContext);
  const drawerWidth = config.sidebar.display ? defaultDrawerWidth : 0;

  return (
    // <Box flex={1} p={2} sx={{ display: "flex" }}>
    <>
      <CssBaseline />
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <SidebarList themeMode={themeMode} setThemeMode={setThemeMode} />
      </Drawer>
    </>
  );
};
