import { createContext, useState } from "react";
import { createTheme } from "@mui/material";

export const AppContext = createContext({});
const defaultConfig = {
  theme: {
    mode: "light",
  },
  sidebar: {
    display: true,
  },
};

export const AppContextProvider = ({ children }) => {
  const [config, setConfig] = useState(defaultConfig);
  const darkTheme = createTheme({
    palette: {
      mode: config.theme.mode,
    },
  });
  return (
    <AppContext.Provider
      value={{
        config,
        setConfig,
        darkTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
