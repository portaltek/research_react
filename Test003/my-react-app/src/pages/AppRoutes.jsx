import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feed } from "../layout/feed/Feed";
import { Page0 } from "./Page0";
import { Page1 } from "./Page1";
import { Page2 } from "./Page2";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Feed />} />
      <Route path="/Page0" element={<Page0 />} />
      <Route path="/Page1" element={<Page1 />} />
      <Route path="/Page2" element={<Page2 />} />
    </Routes>
  );
};
