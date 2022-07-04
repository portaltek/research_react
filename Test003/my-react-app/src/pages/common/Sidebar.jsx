import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import {
  AccountBox,
  Android,
  ModeNight,
  Home,
  School,
  Settings,
} from "@mui/icons-material";

export const Sidebar = ({ mode, setMode }) => {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed">
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
              <ListItemText primary="Settings"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/Page1">
              <ListItemIcon>
                <School></School>
              </ListItemIcon>
              <ListItemText primary="School"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/Page2">
              <ListItemIcon>
                <AccountBox></AccountBox>
              </ListItemIcon>
              <ListItemText primary="AccountBox"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Android></Android>
              </ListItemIcon>
              <ListItemText primary="Android"></ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <ModeNight></ModeNight>
              </ListItemIcon>
              <Switch
                onChange={(_e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
