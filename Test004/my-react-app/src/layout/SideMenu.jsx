import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import HomeIcon from "@mui/icons-material/Home";
import ThemeModeButtons from "./theme/ThemeModeButtons";

export const sideMenuWidth = 180;
export const sideMenuWidthMobile = 240;

export const SideMenu = ({
  open,
  handleDrawerToggle,
  container,
  mobileOpen,
  handleMobileDrawerToggle,
}) => {
  const width = open ? sideMenuWidth : 0;

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
      <Box p={1}>
        <ThemeModeButtons />
      </Box>

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
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText primary="Products"></ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/user">
            <ListItemIcon>
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText primary="Users"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
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
        width: sideMenuWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: sideMenuWidth,
          boxSizing: "border-box",
        },
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
          width: sideMenuWidthMobile,
        },
      }}
    >
      <SideMenuDrawerContent />
    </Drawer>
  );
};
