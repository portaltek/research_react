import React from 'react'
import {TestContextA1} from './TestContextA1'
import {TestContextA2} from './TestContextA2'
import TestContextProvider from './TestContext'

export const TestContextA = () => {
    return (
        <TestContextProvider>
            <TestContextA1/>
            <TestContextA2/>
        </TestContextProvider>
    )
}
