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

export function setLocal(key, value) {
  const valueString = JSON.stringify(value);
  localStorage.setItem(key, valueString);
}

export function getLocal(key) {
  const saved = localStorage.getItem(key);
  return JSON.parse(saved);
}

export const AppContextProvider = ({ children }) => {
  const [app, setApp] = useState(getLocal("app") || defaultConfig);

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
