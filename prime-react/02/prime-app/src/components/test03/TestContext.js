import React, { createContext, useState } from "react";

export const TestContext = createContext();

const TestContextProvider = (props) => {
  const [data, setData] = useState("from A");

  const myFunction = (d) => {
    console.log("old data: ", data);
    console.log("new data: ", d);
    setData(d);
  };

  return (
    <TestContext.Provider
      value={{
        myFunction,
        data,
        setData,
      }}
    >
      {props.children}
    </TestContext.Provider>
  );
};

export default TestContextProvider;
