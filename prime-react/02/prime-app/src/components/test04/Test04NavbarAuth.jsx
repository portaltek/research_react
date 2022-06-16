import React, {useContext} from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {Test04Ctx} from './Test04Ctx';

export const Test04NavbarAuth = () => {
    const {test04Data} = useContext(Test04Ctx);
    const location = useLocation()


    return test04Data.isLoggedIn ? <Outlet/>: (
        <Navigate to="/login" replace
            state={
                {from: location}
            }/>
    )
};
