import React, {useContext} from 'react'
import {useNavigate} from "react-router-dom";
import {Test04Ctx} from './Test04Ctx';


export const Test04CompLogout = () => {

    const {setTest04Data} = useContext(Test04Ctx);

    const navigate = useNavigate();

    const doLogout = () => {
        setTest04Data({isLoggedIn: false})
        navigate("/login")
    }

    return (
        <div>
            <h2>LOGOUT</h2>
            <button onClick={
                () => doLogout()
            }>DO LOGOUT</button>
        </div>
    )
}
