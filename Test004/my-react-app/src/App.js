import Navbar from "./layout/navbar/Navbar";
import { Box, CssBaseline } from "@mui/material";
import Sidemenu from "./layout/sidemenu/Sidemenu";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar />
      <CssBaseline />
      <Sidemenu />
    </Box>
  );
}
export default App;
