import React from "react";
import {Routes, Route} from "react-router-dom";
import {Test04CompError404} from './Test04CompError404';
import {Test04CompParams} from "./Test04CompParams";
import {Test04CompHome} from "./Test04CompHome";
import {Test04CompPublic} from "./Test04CompPublic";
import {Test04CompLogin} from "./Test04CompLogin";
import {Test04CompLogout} from "./Test04CompLogout";
import {Test04NavbarAuth} from "./Test04NavbarAuth";


export const Test04NavbarRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/public"
                    element={<Test04CompPublic/>}/>
                <Route path="/login"
                    element={<Test04CompLogin/>}/>

                <Route element={<Test04NavbarAuth/>}>
                    <Route path="/home"
                        element={<Test04CompHome/>}></Route>
                    <Route path="/params"
                        element={<Test04CompParams/>}></Route>
                    <Route path="/params/:id"
                        element={<Test04CompParams/>}></Route>
                    <Route path="/logout"
                        element={<Test04CompLogout/>}></Route>
                </Route>

                <Route path="*"
                    element={<Test04CompError404/>}></Route>
            </Routes>
        </div>
    );
};
