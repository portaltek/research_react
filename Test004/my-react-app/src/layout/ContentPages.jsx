import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { sideMenuWidth } from "./SideMenu";

export const ContentPages = () => {
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
      <Typography paragraph>ContentPages</Typography>
    </Box>
  );
};
