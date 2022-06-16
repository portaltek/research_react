import React, {useContext} from 'react'
import {ThemeContext} from './HomeContext'

export const Home = () => {
    const {name} = useContext(ThemeContext)

    return (
        <div>
            <div>Home: {name}</div>
        </div>
    )
}
