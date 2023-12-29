
import React, { useState } from 'react';
import './App.css';

function App() {
    //top level management
    //inside a react function
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    })

    const [submitting, setSubmitting] = useState(false);



    function handleSubmit(e) {
        e.preventDefault();
        setSubmitting(true);
        console.log(formData);


        setTimeout(() => {
            //request is successfull
            setSubmitting(false);
        }, 3000)

    };

    function handleFormChange(event) {
        console.log(event.target.name)
    }


    return (
        <div className='wrapper'>
            <h1>Gift Items</h1>
            {submitting && <div>Submitting Form... </div>}

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name='name' type='text' value={formData.name} onChange={handleFormChange} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input name='email' type='email' value={formData.email} onChange={handleFormChange} />
                    </label>

                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App