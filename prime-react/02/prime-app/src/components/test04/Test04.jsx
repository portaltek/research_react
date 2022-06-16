import React from 'react'
import {BrowserRouter} from "react-router-dom";

import {Test04NavbarLinks} from './Test04NavbarLinks';
import {Test04NavbarRoutes} from './Test04NavbarRoutes';

import Test04CtxProvider from './Test04Ctx'


export const Test04 = () => {


    return (
        <Test04CtxProvider>
            <h1>Test04</h1>
            <BrowserRouter>
                <Test04NavbarLinks/>
                <Test04NavbarRoutes/>
            </BrowserRouter>
        </Test04CtxProvider>
    )
}
