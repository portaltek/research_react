/* eslint-disable no-whitespace-before-property */
import React, {useRef, useState, useEffect, useContext} from "react";

import axios from './Test05SpiService';
import Test05Ctx from "./Test05Ctx"
const LOGIN_URL = '/auth';

export const Test05Login = () => {
    const {setAuth} = useContext(Test05Ctx);
    const userRef = useRef();
    const errorRef = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrorMsg('')
    }, [username, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({username, password}), {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log(JSON.stringify(response ?. data));
            const accessToken = response ?. data ?. accessToken;
            const roles = response ?. data ?. roles;
            setAuth({username, password, roles, accessToken});
            setUsername('');
            setPassword('');
            setSuccess(true);
        } catch (err) {
            if (!err ?. response) {
                setErrorMsg('No Server Response');
            } else if (err.response ?. status === 400) {
                setErrorMsg('Missing Username or Password');
            } else if (err.response ?. status === 401) {
                setErrorMsg('Unauthorized');
            } else {
                setErrorMsg('Login Failed');
            }
            err.current.focus();
        }
    }

    return (
        <section>
            <p ref={errorRef}
                className={
                    errorMsg ? "errorMsg" : "offscreen"
                }
                aria-live="assertive">
                {errorMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input type="text" name="" id="username" required
                    ref={userRef}
                    autoComplete="off"
                    onChange={
                        (e) => setUsername(e.target.value)
                    }
                    value={username}/>
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" required autoComplete="off"
                    onChange={
                        (e) => setPassword(e.target.value)
                    }
                    value={password}/>
                <button>Sign In</button>
                <p>
                    Need an Account?<br/>
                    <span className="line">
                        {/*put router link here*/}
                        <a href="/register">Register</a>
                    </span>
                </p>
            </form>
        </section>
    );
};
