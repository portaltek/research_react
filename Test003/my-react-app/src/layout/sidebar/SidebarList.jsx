import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import SettingsIcon from "@mui/icons-material/Settings";
import HomeIcon from "@mui/icons-material/Home";

import DarkModeSwitch from "./DarkModeSwitch";

export default function SidebarList() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton component="a" href="/">
          <ListItemIcon>
            <HomeIcon></HomeIcon>
          </ListItemIcon>
          <ListItemText primary="Homepage"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="/product">
          <ListItemIcon>
            <SettingsIcon></SettingsIcon>
          </ListItemIcon>
          <ListItemText primary="Products"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#">
          <DarkModeSwitch />
        </ListItemButton>
      </ListItem>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, _index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
