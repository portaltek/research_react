import React, { useContext } from "react";
import {
  createTheme,
  ThemeProvider,
  Box,
  alpha,
  CssBaseline,
} from "@mui/material";
import PropTypes from "prop-types";
import { ContentPages } from "./ContentPages";
import { SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";
import { AppContext } from "./AppContext";

export const AppLayout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const { app } = useContext(AppContext);
  console.log(app);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleMobileDrawerToggle = () => {
    setOpen(false);
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const getThemeMode = () => {
    if (app.theme.mode === "light") return lightTheme();
    if (app.theme.mode === "dark") return darkTheme();
    return darkTheme();
  };

  return (
    <ThemeProvider theme={getThemeMode()}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <TopBar
          {...{
            handleMobileDrawerToggle,
            handleDrawerToggle,
          }}
        />
        <SideMenu
          {...{
            open,
            handleDrawerToggle,
            container,
            mobileOpen,
            handleMobileDrawerToggle,
          }}
        />
        <ContentPages />
      </Box>
    </ThemeProvider>
  );
};

AppLayout.propTypes = {
  window: PropTypes.func,
};

function darkTheme() {
  return createTheme({
    palette: {
      mode: "dark",
      table: {
        header: {
          backgroundColor: "#444",
          color: "#eee",
        },
        selectedRow: {
          backgroundColor: alpha("#fff", 0.2),
          color: "#111",
        },
        oddRow: {
          backgroundColor: "#202020",
          color: "#111",
        },
        evenRow: {
          backgroundColor: "#232323",
          color: "#111",
        },
      },
    },
  });
}

function lightTheme() {
  return createTheme({
    palette: {
      mode: "light",
      table: {
        header: {
          backgroundColor: "#eee",
          color: "#444",
        },
        selectedRow: {
          backgroundColor: "#eee",
          color: "#444",
        },
        oddRow: {
          backgroundColor: "#eee",
          color: "#444",
        },
        evenRow: {
          backgroundColor: "#eee",
          color: "#444",
        },
      },
    },
  });
}
