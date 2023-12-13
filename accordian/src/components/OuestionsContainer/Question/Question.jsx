import React, { useState } from 'react'
import './Question.css'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

function Question({ title, answer }) {

    const [showAnswer, setShowAnswer] = useState(false);

    function handleClick() {
        setShowAnswer(!showAnswer);
    }
    return (
        <article className='question'>
            <header>
                <h4>{title} </h4>
                <button onClick={handleClick} className='btn'>
                    {showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            <p>{showAnswer && answer} </p>
        </article>
    )
}

export default Question