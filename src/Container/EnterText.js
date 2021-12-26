

function EnterText() {
    function handleKeyDown(event) {
        console.log(event.key);
    }

    return (
        <div className="enterText">
            <input
                type="text"
                className="enterText__input"
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default EnterText
