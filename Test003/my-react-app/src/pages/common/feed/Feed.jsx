import { Box } from "@mui/material";

import React from "react";
import { FeedCard } from "./FeedCard";

export const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <FeedCard />
      <FeedCard />
      <FeedCard />
      <FeedCard />
    </Box>
  );
};
