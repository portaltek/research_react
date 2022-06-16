import React, {createContext, useState} from "react";

export const Test04Ctx = createContext();

const Test04CtxProvider = (props) => {
    const [test04Data, setTest04Data] = useState({"isLoggedIn": false});

    const myFunction = (d) => {
        console.log("old data: ", test04Data);
        console.log("new data: ", d);
        setTest04Data(d);
    };

    return (
        <Test04Ctx.Provider value={
            {myFunction, test04Data, setTest04Data}
        }>
            {
            props.children
        } </Test04Ctx.Provider>
    );
};

export default Test04CtxProvider;
