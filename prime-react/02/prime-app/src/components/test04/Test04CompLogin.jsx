import React, {useContext} from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import {Test04Ctx} from './Test04Ctx';

export const Test04CompLogin = () => {

    const {test04Data, setTest04Data} = useContext(Test04Ctx);

    const navigate = useNavigate();
    const location = useLocation();

    const doLogin = () => {

        if (test04Data.isLoggedIn) {
            return;
        }

        // Check credentials in BACKEND HERE
        setTest04Data({isLoggedIn: true})


        if (location.state) {
            if (location.state.from) {
                navigate(location.state.from)
            }
        }
    };


    return (
        <div>
            <h2>LOGIN: {
                test04Data.isLoggedIn + ""
            }</h2>
            <button onClick={
                () => doLogin()
            }>DO LOGIN</button>

        </div>
    )
}
