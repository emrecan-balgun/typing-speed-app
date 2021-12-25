import React from 'react'

function GenerateText() {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus";

    return (
        <div className="generateText">
            <input className="generateText__input" type="text" value={text}
            disabled
            />
        </div>
    )
}

export default GenerateText
