import React from 'react'
import {useParams} from 'react-router-dom'

export const Test04CompD = () => {
    let {id} = useParams()
    return (
        <div>
            <div>Test04CompD : {id}</div>

        </div>
    )
}
