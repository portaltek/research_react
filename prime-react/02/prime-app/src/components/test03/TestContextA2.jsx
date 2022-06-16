import React, {useContext} from 'react'
import {TestContext} from './TestContext'

export const TestContextA2 = () => {

    const {data, myFunction} = useContext(TestContext);
    const fromA2 = () => {
        myFunction("from A2");
    }

    return (
        <div>
            <div>A2:{data}
                <button onClick={
                    () => fromA2()
                }>CLICK_A2</button>
            </div>
        </div>
    )
}
