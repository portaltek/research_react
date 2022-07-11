import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import { sideMenuWidth } from "./SideMenu";
import { Route, Routes } from "react-router-dom";
import { Product } from "../pages/product/Product";
import { User } from "../pages/user/User";
import { HomePage } from "../pages/HomePage";

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

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Box>
  );
};
