import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import React, { useContext } from "react";
import { AppContext, setLocal } from "../AppContext";

export default function ThemeModeButtons() {
  const { app, setApp } = useContext(AppContext);

  const setThemeMode = (mode) => {
    app.theme.mode = mode;
    setApp({
      ...app,
    });
    setLocal("app", app);
  };

  return (
    <Box pl={2} pr={2}>
      <ButtonGroup size="small" variant="outlined">
        <Button>
          <DarkModeIcon onClick={() => setThemeMode("dark")} />
        </Button>
        <Button>
          <LightModeIcon onClick={() => setThemeMode("light")} />
        </Button>
        {/* <Button>
          <Brightness4Icon onClick={() => setThemeMode("auto")} />
        </Button> */}
      </ButtonGroup>
    </Box>
  );
}
