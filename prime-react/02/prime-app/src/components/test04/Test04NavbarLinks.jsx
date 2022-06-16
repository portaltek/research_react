import React from "react";
import {Link} from "react-router-dom";

export const Test04NavbarLinks = () => {

    return (
        <div>
            <h3>NavBar
            </h3>
            <nav>
                <Link to="/public">Public</Link>
                {"  "}|{"  "}
                <Link to="/login">Login</Link>
            </nav>
            <nav>
                <Link to="/home">Home</Link>
                {"  "}|{"  "}
                <Link to="/params">Params</Link>
                {"  "}|{"  "}
                <Link to="/params/1">Params/1</Link>
                {"  "}|{"  "}
                <Link to="/logout">Logout</Link>
            </nav>
        </div>
    );
};
