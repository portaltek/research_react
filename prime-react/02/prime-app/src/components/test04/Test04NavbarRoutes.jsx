import React from "react";
import {Routes, Route} from "react-router-dom";
import {Test04CompA} from './Test04CompA';
import {Test04CompB} from './Test04CompB';
import {Test04CompC} from './Test04CompC';
import {Test04CompD} from './Test04CompD';
import {Test04CompError} from './Test04CompError';

export const Test04CompNavbarRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path="/"
                    element={<Test04CompA/>}></Route>
                <Route path="/b"
                    element={<Test04CompB/>}></Route>
                <Route path="/c"
                    element={<Test04CompC/>}></Route>
                <Route path="/d"
                    element={<Test04CompD/>}></Route>
                <Route path="/d/:id"
                    element={<Test04CompD/>}></Route>
                <Route path="*"
                    element={<Test04CompError/>}></Route>
            </Routes>
        </div>
    );
};
