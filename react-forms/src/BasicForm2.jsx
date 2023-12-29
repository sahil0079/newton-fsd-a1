
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

    // function handleFormChange(event) {
    //     console.log(event.target.name)

    //     if (event.target.name == 'name') {
    //         setFormData({ ...formData, name: event.target.value })
    //     } else if (event.target.name == 'email') {
    //         setFormData({ ...formData, email: event.target.value })
    //     }
    // }

    // function handleFormChange(event) {
    //     console.log(event.target.name)


    //     setFormData((prevFormData) => {
    //         if (event.target.name == 'name') {
    //             return { ...prevFormData, name: event.target.value }
    //         } else if (event.target.name == 'email') {
    //             return { ...prevFormData, email: event.target.value }
    //         }
    //     })
    // }

    // function handleFormChange(event) {
    //     // console.log(event.target.name)
    //     setFormData((prevFormData) => {
    //         return {
    //             ...prevFormData,
    //             [event.target.name]: event.target.value
    //         }
    //     })
    // };
    // function handleFormChange(event, field) {
    //     // console.log(event.target.name)
    //     setFormData((prevFormData) => {
    //         return {
    //             ...prevFormData,
    //             [field]: event.target.value
    //         }
    //     })
    // };



    return (
        <div className='wrapper'>
            <h1>Gift Items</h1>
            {submitting && <div>Submitting Form... </div>}

            {/* <form onSubmit={handleSubmit}>
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
            </form> */}

            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input type='text' value={formData.name} onChange={(e) => handleFormChange(e, 'name')} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input name='email' type='email' value={formData.email} onChange={(e) => handleFormChange(e, 'email')} />
                    </label>

                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App