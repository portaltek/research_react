import { Box } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../layout/feed/Feed";
import { Product } from "./product/Product";

export const AppPages = () => {
  return (
    <Box flex={8} p={2}>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Box>
  );
};
