import { useDispatch, useSelector } from 'react-redux';
import { changeText, text } from '../app/typingSlice';

function EnterText() {
    const dispatch = useDispatch();
    const userText = useSelector(text);

    return (
        <div className="enterText">
            <input
                id="enterText"
                className="enterText__input"
                value={userText}
                onChange={(e) => dispatch(changeText(e.target.value)
                )}
            />
        </div>
    )
}

export default EnterText
