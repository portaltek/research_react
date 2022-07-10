import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import { sideMenuWidth, SideMenu } from "./SideMenu";
import { TopBar } from "./TopBar";

export const AppLayout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const handleMobileDrawerToggle = () => {
    setOpen(false);
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
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
      <MainBody />
    </Box>
  );
};

AppLayout.propTypes = {
  window: PropTypes.func,
};

const MainBody = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 1,
        width: { sm: `calc(100% - ${sideMenuWidth}px)` },
      }}
    >
      <Toolbar variant="dense" />
      <Typography paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do
      </Typography>
    </Box>
  );
};
