import { createContext, useState } from "react";

export const AppContext = createContext({});
const defaultConfig = {
  theme: {
    mode: "dark",
  },
  sidebar: {
    display: true,
  },
};

export const AppContextProvider = ({ children }) => {
  const [config, setConfig] = useState(defaultConfig);

  return (
    <AppContext.Provider
      value={{
        config,
        setConfig,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
