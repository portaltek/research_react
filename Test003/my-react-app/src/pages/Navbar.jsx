import React from "react";
import { AppBar, Box, Toolbar, styled, Typography } from "@mui/material";
import { Pets } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
}));
const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
}));
export const Navbar = () => {
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
          <Icons>Icons</Icons>
          <Search>Search</Search>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
};
