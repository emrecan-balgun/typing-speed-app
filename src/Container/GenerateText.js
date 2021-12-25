import React from 'react'

function GenerateText() {
    const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum minus tempore dolor quaerat, doloribus beatae tenetur at? Sit quia necessitatibus labore, exercitationem laborum voluptas accusantium itaque nulla. Adipisci dicta quis pariatur assumenda ullam, sed deserunt in excepturi aperiam alias consequatur cumque mollitia ad dolores dolore aut quidem molestias soluta corporis.";

    return (
        <div className="generateText">
            <input className="generateText__input" type="text" value={text} />
        </div>
    )
}

export default GenerateText
