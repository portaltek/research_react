import * as React from "react";
import {
  ListItem,
  ListItemButton,
  List,
  ListItemIcon,
  Switch,
  ListItemText,
} from "@mui/material";
import { Home, Settings, ModeNight } from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";

export default function SidebarList({
  displayDrawer,
  themeMode,
  setThemeMode,
}) {
  return (
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
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <ModeNight></ModeNight>
          </ListItemIcon>
          <Switch
            onChange={() =>
              setThemeMode(themeMode === "light" ? "dark" : "light")
            }
          />
        </ListItemButton>
      </ListItem>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, _index) => (
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
      ))}
    </List>
  );
}
