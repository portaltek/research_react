import React from "react";
import { Badge } from "@mui/material";
import { Mail, Notifications } from "@mui/icons-material";
import { NavbarBoxSM } from "./NavbarStyled";

export const NavbarNotifications = () => {
  return (
    <NavbarBoxSM>
      <Badge badgeContent={2} color="error">
        <Mail></Mail>
      </Badge>
      <Badge badgeContent={4} color="error">
        <Notifications></Notifications>
      </Badge>
    </NavbarBoxSM>
  );
};
