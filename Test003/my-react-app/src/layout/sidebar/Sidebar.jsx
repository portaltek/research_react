import React, { useContext } from "react";
import { Box, Toolbar, Drawer, CssBaseline } from "@mui/material";

import SidebarList from "./SidebarList";
import { AppContext } from "../AppContext";

const defaultDrawerWidth = 200; //60

export const Sidebar = ({ displayDrawer, themeMode, setThemeMode }) => {
  const { config, setConfig } = useContext(AppContext);
  const drawerWidth = config.sidebar.display ? defaultDrawerWidth : 0;
  //const drawerWidth = displayDrawer ? defaultDrawerWidth : 0;

  return (
    <Box flex={1} p={2} sx={{ display: "flex" }}>
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
        <SidebarList
          themeMode={themeMode}
          setThemeMode={setThemeMode}
          displayDrawer={displayDrawer}
        />
      </Drawer>
    </Box>
  );
};
