import React from 'react'
import {useParams} from 'react-router-dom'

export const Test04CompParams = () => {
    let {id} = useParams()
    return (
        <div>
            <h2>PARAM.ID : {id}</h2>
        </div>
    )
}
