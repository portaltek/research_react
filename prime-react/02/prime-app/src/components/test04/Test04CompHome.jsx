import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Test04CompHome = () => {
    let nav = useNavigate()
    return (
        <div>
            <h2>HOME</h2>
            <button onClick={
                () => nav("/params/3")
            }>GO TO: /params/3</button>
        </div>
    )
}
