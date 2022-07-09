import React, { useContext } from "react";
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
import { AppContext } from "../AppContext";

export default function SidebarList() {
  const { app, setApp } = useContext(AppContext);
  const toggleThemeMode = () => {
    app.theme.mode = app.theme.mode === "light" ? "dark" : "light";
    setApp({
      ...app,
    });
  };

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
        <ListItemButton component="a" href="/product">
          <ListItemIcon>
            <Settings></Settings>
          </ListItemIcon>
          <ListItemText primary="Products"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <ModeNight></ModeNight>
          </ListItemIcon>
          <Switch onChange={() => toggleThemeMode()} />
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
