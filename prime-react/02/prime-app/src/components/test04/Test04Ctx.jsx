import React, {createContext, useState} from "react";

export const Test04Ctx = createContext();

const Test04CtxProvider = (props) => {
    const [data, setData] = useState("from A");

    const myFunction = (d) => {
        console.log("old data: ", data);
        console.log("new data: ", d);
        setData(d);
    };

    return (
        <Test04Ctx.Provider value={
            {myFunction, data, setData}
        }>
            {
            props.children
        } </Test04Ctx.Provider>
    );
};

export default Test04CtxProvider;
