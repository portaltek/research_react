import React from "react";
import {useNavigate} from "react-router-dom";

export const Test04Auth = ({authenticate}) => {
    const navigate = useNavigate();
    const onClick = () => {
        authenticate();
        navigate("/b")
    }

    return (
        <div>
            <div>Test04Auth</div>
            <h2>Please Authenticate</h2>
            <button onClick={onClick}>Authenticate</button>
        </div>
    );
};
