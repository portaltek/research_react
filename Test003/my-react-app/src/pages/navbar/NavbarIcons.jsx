import React from "react";
import {
  Box,
  Badge,
  Avatar,
  styled,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const IconsSM = styled(Box)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const NavbarIcons = (props) => {
  return (
    <Box>
      <Icons>
        <Badge badgeContent={2} color="error">
          <Mail></Mail>
        </Badge>
        <Badge badgeContent={4} color="error">
          <Notifications></Notifications>
        </Badge>
        <Avatar
          alt="Remy Sharp"
          src="favicon.ico"
          onClick={(_e) => props.value.setOpen(true)}
        />
      </Icons>
      <IconsSM>
        <Avatar
          alt="Remy Sharp"
          src="favicon.ico"
          onClick={(_e) => props.value.setOpen(true)}
        />
        <Typography variant="span"></Typography>
      </IconsSM>
      <Menu
        open={props.value.open}
        onClose={(_e) => props.value.setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
