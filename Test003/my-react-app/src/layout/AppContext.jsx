import { createContext, useState } from "react";

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
  const [app, setApp] = useState(defaultConfig);

  return (
    <AppContext.Provider
      value={{
        app,
        setApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
