import * as React from "react";
import {
  Box,
  Toolbar,
  ListItem,
  Drawer,
  ListItemButton,
  List,
  ListItemIcon,
  ListItemText,
  CssBaseline,
} from "@mui/material";
import { Home, Settings } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";

const defaultDrawerWidth = 200;

export default function ClippedDrawer({ displayDrawer }) {
  const drawerWidth = displayDrawer ? defaultDrawerWidth : 0;
  return (
    <Box sx={{ display: "flex" }}>
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
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/">
                <ListItemIcon>
                  <Home></Home>
                </ListItemIcon>
                <ListItemText primary="Homepage"></ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/Page0">
                <ListItemIcon>
                  <Settings></Settings>
                </ListItemIcon>
                <ListItemText primary="Page0"></ListItemText>
              </ListItemButton>
            </ListItem>
            {["Inbox", "Starred", "Send email", "Drafts"].map(
              (text, _index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{ opacity: displayDrawer ? 1 : 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
