import { Box, styled, Toolbar } from "@mui/material";

export const NavbarBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.backgroundColor,
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

export const NavbarBoxSM = styled(NavbarBox)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

export const NavbarStyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const NavbarSearch = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "50%",
}));
