import React, {useContext} from 'react'
import {ComponentA1} from './ComponentA1'
import {ComponentA2} from './ComponentA2'
import {AppContext} from '../../App3'

export const ComponentA = () => {
    const [app, setApp] = useContext(AppContext);
    const updateAppValue = () => {
        console.log("UpdatedFrom A")
        setApp("UpdatedFrom A");
    }


    return (
        <div>
            <div>A: {app}
                <div>
                    <button onClick={
                        () => updateAppValue()
                    }>CLICK_A</button>
                </div>
            </div>
            <div><ComponentA1/></div>
            <div><ComponentA2/></div>

        </div>
    )
}
