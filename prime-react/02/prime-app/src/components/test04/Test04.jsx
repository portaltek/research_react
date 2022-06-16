import React from 'react'
import {BrowserRouter} from "react-router-dom";

import {Test04CompNavbar} from './Test04NavbarLinks';
import {Test04CompNavbarRoutes} from './Test04NavbarRoutes';

import Test04CtxProvider from './Test04Ctx'


export const Test04 = () => {
    return (
        <Test04CtxProvider>
            <div>Test04</div>
            <BrowserRouter>
                <Test04CompNavbar/>
                <Test04CompNavbarRoutes/>
            </BrowserRouter>
        </Test04CtxProvider>
    )
}
