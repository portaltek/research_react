import React from 'react'

import './Test05.css'
import {Test05Register} from './Test05Register'
import {Test05SpiServiceLocal} from './Test05SpiServiceLocal'


export const Test05 = () => {
    const service = new Test05SpiServiceLocal();
    service.createFile()

    return (
        <div>
            <h4>Test05</h4>

            {/* <Test05Login></Test05Login> */}
            <Test05Register></Test05Register>
        </div>
    )
}
