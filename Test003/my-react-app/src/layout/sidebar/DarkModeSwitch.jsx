import React, { useContext } from "react";
import { ListItemIcon, Switch } from "@mui/material";
import { AppContext, setLocal } from "../AppContext";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function DarkModeSwitch() {
  const { app, setApp } = useContext(AppContext);
  const isLight = app.theme.mode === "light";

  const toggleThemeMode = () => {
    app.theme.mode = app.theme.mode === "light" ? "dark" : "light";
    setApp({
      ...app,
    });
    setLocal("app", app);
  };

  return (
    <>
      <ListItemIcon>{isLight ? <DarkMode /> : <LightMode />}</ListItemIcon>
      <Switch checked={isLight} onChange={toggleThemeMode} />
    </>
  );
}
