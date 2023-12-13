import React, { useState } from 'react';
import './OuestionsContainer.css';
import data from '../../data.js';
import Question from './Question/Question.jsx';


function OuestionsContainer() {
    const [questions, setQuestions] = useState(data);

    console.log(questions);

    // const questionsArray = questions?.map(function (question) {

    //     return (
    //         <div key={question.id}>
    //             <h2>{question.id} </h2>
    //             <h2>{question.title} </h2>
    //             <h2>{question.answer} </h2>

    //         </div>
    //     )
    // })

    // function renderQuestions(questions) {
    //     const questionsArray = questions?.map(function (question) {

    //         return (
    //             <div key={question.id}>
    //                 <h2>{question.id} </h2>
    //                 <h2>{question.title} </h2>
    //                 <h2>{question.answer} </h2>

    //             </div>
    //         )
    //     })

    //     return questionsArray;
    // }

    return (
        <main>
            <div className='container'>
                <h1>Frequently asked questions</h1>
                <p>Below are some common questions from our customers that will give you the answer you are looking for</p>

                <section className='answer'>
                    {/* list of all acordion components */}

                    {questions.map(question => (
                        // <Question key={question.id} question={question} />
                        // <Question key={question.id} title={question.title} answer={question.answer} />
                        <Question key={question.id} {...question} />

                    ))}


                </section>
            </div>
        </main>
    )
}

export default OuestionsContainer