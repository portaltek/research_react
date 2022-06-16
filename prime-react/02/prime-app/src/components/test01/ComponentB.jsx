import React, {useState} from 'react'

import {ComponentC} from './ComponentC'

export const ComponentB = (props) => {


    return (
        <div>
            <div>ComponentB: {
                props.name
            } </div>
            <ComponentC name={
                props.name
            }></ComponentC>
        </div>
    )
}
