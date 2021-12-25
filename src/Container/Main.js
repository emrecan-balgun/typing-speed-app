import React from 'react'
import EnterText from './EnterText'
import GenerateText from './GenerateText'
import Header from './Header'

function Main() {
    return (
        <div className="main">
            <Header />
            <GenerateText />
            <EnterText />
        </div>
    )
}

export default Main
