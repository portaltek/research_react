import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";

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
