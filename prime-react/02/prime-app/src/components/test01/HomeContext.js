import React, { useState } from "react";
export const ThemeContext = React.createContext();

export const HomeContext = (props) => {
  const [name, setName] = useState("MyName");
  const [lastname, setLastname] = useState("MyLastname");
  return (
    <ThemeContext.Provider value={{ name, lastname }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
