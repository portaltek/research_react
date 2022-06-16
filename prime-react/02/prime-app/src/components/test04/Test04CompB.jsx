import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Test04CompB = () => {
    let nav = useNavigate()
    return (
        <div>
            <div>Test04CompB</div>
            <button onClick={
                () => nav("/c")
            }>Go to C</button>

        </div>
    )
}
