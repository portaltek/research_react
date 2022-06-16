import React, {useContext} from 'react'
import {AppContext} from '../../App3';

export const ComponentA2 = () => {
    const [app, setApp] = useContext(AppContext);
    const updateAppValue = () => {
        console.log("UpdatedFrom A2")
        setApp("UpdatedFrom A2");
    }

    return (
        <div>
            <div>A2: {app} </div>
            <div>
                <button onClick={
                    () => updateAppValue()
                }>CLICK_A2</button>
            </div>
        </div>
    )
}
