import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  styled,
  Typography,
  InputBase,
} from "@mui/material";
import { Pets } from "@mui/icons-material";
import { NavbarIcons } from "./NavbarIcons";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            MUI TOOLBAR
          </Typography>
          <Pets
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          />
          <Search>
            <InputBase placeholder="search..."></InputBase>
          </Search>
          <NavbarIcons value={{ open, setOpen }}></NavbarIcons>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
