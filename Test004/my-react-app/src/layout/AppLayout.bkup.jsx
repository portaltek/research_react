import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SchoolIcon from "@mui/icons-material/School";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";

const drawerWidth = 180;
const drawerWidthMobile = 240;

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

const TopBar = ({ handleMobileDrawerToggle, handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar variant="dense">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleMobileDrawerToggle}
          sx={{ mr: 2, display: { xs: "block", sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { xs: "none", sm: "block" } }}
        >
          <SchoolIcon />
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          MUI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const SideMenu = ({
  open,
  handleDrawerToggle,
  container,
  mobileOpen,
  handleMobileDrawerToggle,
}) => {
  const width = open ? drawerWidth : 0;
  return (
    <Box component="nav" sx={{ width: { sm: width }, flexShrink: { sm: 0 } }}>
      <SideMenuDrawer
        {...{
          open,
          handleDrawerToggle,
        }}
      />
      <SideMenuDrawerMobile
        {...{
          container,
          mobileOpen,
          handleMobileDrawerToggle,
        }}
      />
    </Box>
  );
};

const SideMenuDrawerContent = () => {
  return (
    <>
      <Toolbar variant="dense" />
      <Divider />
      <List>
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
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, _index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};

const SideMenuDrawer = ({ open, handleDrawerToggle }) => {
  const displayDrawer = open ? "block" : "none";
  return (
    <Drawer
      variant="permanent"
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: "none", sm: displayDrawer },
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <SideMenuDrawerContent />
    </Drawer>
  );
};

const SideMenuDrawerMobile = ({
  container,
  mobileOpen,
  handleMobileDrawerToggle,
}) => {
  return (
    <Drawer
      container={container}
      variant="temporary"
      open={mobileOpen}
      onClose={handleMobileDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidthMobile,
        },
      }}
    >
      <SideMenuDrawerContent />
    </Drawer>
  );
};

const MainBody = () => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        p: 1,
        width: { sm: `calc(100% - ${drawerWidth}px)` },
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
