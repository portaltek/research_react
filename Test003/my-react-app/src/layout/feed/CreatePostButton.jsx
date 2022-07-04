import { Fab, Tooltip } from "@mui/material";
import React, { useState } from "react";
import { Add as AddIcon } from "@mui/icons-material";

import { CreatePostForm } from "./CreatePostForm";

export const CreatePostButton = () => {
  const [openCreatePostModalForm, setOpenCreatePostModalForm] = useState(false);
  return (
    <div>
      <Tooltip
        onClick={(_e) => setOpenCreatePostModalForm(true)}
        title="Create new Post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <CreatePostForm
        value={{ openCreatePostModalForm, setOpenCreatePostModalForm }}
      />
    </div>
  );
};
