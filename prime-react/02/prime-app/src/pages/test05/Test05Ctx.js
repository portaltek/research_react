import { createContext, useState } from "react";

const Test05Ctx = createContext({});

export const Test05CtxProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <Test05Ctx.Provider value={{ auth, setAuth }}>
      {children}{" "}
    </Test05Ctx.Provider>
  );
};

export default Test05Ctx;
