import React, {useContext} from 'react'
import {TestContext} from './TestContext'

export const TestContextA1 = () => {
    const {data, myFunction} = useContext(TestContext);
    const fromA1 = () => {
        myFunction("from A1");
    }
    return (
        <div>
            <div>A1: {data}
                <button onClick={
                    () => fromA1()
                }>CLICK_A1</button>
            </div>
        </div>
    )
}
