##############################################################################
# Source Tutorial:


##############################################################################

export APP_NAME=my-react-app
export PROJECT_DIR=$RESEARCH_HOME/reactjs/Test004
cd "$PROJECT_DIR"
npx create-react-app $APP_NAME; cd $PROJECT_DIR/$APP_NAME; npm start;

# IN ANOTHER TERMINAL, DOWNLOAD DEPENDENCIES AND FILE CLEAN UP
export APP_NAME=my-react-app
export PROJECT_DIR=$RESEARCH_HOME/reactjs/Test004
cd  $PROJECT_DIR/$APP_NAME
npm i @mui/material @emotion/react @emotion/styled @mui/icons-material react-router-dom
mkdir src/pages src/_utils
mkdir src/layout;
rm src/logo.svg public/logo192.png public/logo512.png
rm src/App.js
echo "function App() {  return <>APP</>; } export default App;" >  src/App.js







const TopBarProfile = ({ handleProfileMenuOpen, handleMobileMenuOpen }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={42} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          size="large"
          edge="end"
          onClick={handleProfileMenuOpen}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit">
          <MoreVertIcon />
        </IconButton>
      </Box>
    </>
  );
};

const TopBarProfileMenu = ({ anchorEl, isMenuOpen, handleMenuClose }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

function TobBarProfileMenuMobile(
  mobileMoreAnchorEl,
  isMobileMenuOpen,
  handleMobileMenuClose,
  handleProfileMenuOpen
) {
  return (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
}
