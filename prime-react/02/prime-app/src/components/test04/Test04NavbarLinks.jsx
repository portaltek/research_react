import React from "react";
import {Link} from "react-router-dom";

export const Test04NavbarLinks = () => {

    return (
        <div>
            <div>NavBar</div>
            <nav>
                <Link to="/">Test04CompA</Link>
                {"  "}|{"  "}
                <Link to="/b">Test04CompB</Link>
                {"  "}|{"  "}
                <Link to="/c">Test04CompC</Link>
                {"  "}|{"  "}
                <Link to="/d">Test04CompD</Link>
                {"  "}|{"  "}
                <Link to="/d/1">/d/1</Link>
            </nav>
        </div>
    );
};
