import React, {useContext} from 'react'
import {AppContext} from '../../App3';

export const ComponentA1 = () => {
    const app = useContext(AppContext);
    return (
        <div>
            <div>A1: {app} </div>
        </div>
    )
}
