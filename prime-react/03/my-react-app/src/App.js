import { Button, styled, Typography } from "@mui/material";
import { Add, Settings } from "@mui/icons-material";

import "./App.css";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: "5",
    "&hover": {
      backgroundColor: "lightblue",
    },
  });
  return (
    <div className="App">
      <div>APP</div>
      <Button variant="text">text</Button>
      <Button startIcon={<Settings />} variant="contained">
        contained
      </Button>
      <Button startIcon={<Settings />} variant="contained" color="primary">
        contained
      </Button>
      <Button startIcon={<Settings />} variant="contained" color="secondary">
        contained
      </Button>
      <Button startIcon={<Settings />} variant="contained" color="otherColor">
        contained
      </Button>
      <Button startIcon={<Add />} variant="outlined">
        outlined
      </Button>
      <Typography variant="h1" component="p">
        It uses h1 style but is a p tag
      </Typography>
      <BlueButton>My Unique button</BlueButton>
    </div>
  );
}
export default App;
