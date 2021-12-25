import React from 'react'
import Timer from './Timer'

function Header() {
    return (
        <div className="header">
            <h1 className="header__title">Typing Speed App</h1>
            <Timer />
        </div>
    )
}

export default Header
