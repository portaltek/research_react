import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import PropTypes from "prop-types";
import * as React from "react";
import { ContentPages } from "./ContentPages";
import { SideMenu } from "./SideMenu";
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
      <ContentPages />
    </Box>
  );
};

AppLayout.propTypes = {
  window: PropTypes.func,
};
