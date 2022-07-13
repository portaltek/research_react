import { DarkMode, LightMode } from "@mui/icons-material";
import { ListItemIcon, Switch } from "@mui/material";
import React, { useContext } from "react";
import { AppContext, setLocal } from "../AppContext";

export default function ThemeModeSwitch() {
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
