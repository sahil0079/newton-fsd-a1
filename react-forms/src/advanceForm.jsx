
import React, { useState } from 'react';
import './App.css';

function App() {
    //top level management
    //inside a react function
    const [formData, setFormData] = useState({
        name: '',
        count: 0,
        gift: '',
        'gift-wrap': false,
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

        const isCheckbox = event.target.type == 'checkbox';

        setFormData((form) => ({
            ...form, [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        }))

    }

    console.log({ formData })




    return (
        <div className='wrapper'>
            <h1>Gift Items</h1>
            {submitting && (
                <div>
                    You have submitted the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li> <strong>{name}</strong> : {value.toString()} </li>
                        ))}
                    </ul>
                </div>
            )}


            <form onSubmit={handleSubmit}>
                <fieldset disabled={submitting} >
                    <label>
                        <p>Name</p>
                        <input name='name' value={formData.name} onChange={handleFormChange} />
                    </label>

                </fieldset>
                <fieldset disabled={submitting}>
                    <label>
                        <p>Gifts</p>
                        <select name='gift' value={formData.gift} onChange={handleFormChange}>

                            <option value=''>--Please choose an option--</option>
                            <option value='iphone'>Iphone</option>
                            <option value='ipods'>Ipods</option>
                            <option value='mac'>Mac</option>
                            <option value='pc'>Pc</option>
                        </select>
                    </label>

                    <label>
                        <p>Count</p>
                        <input type='number' name='count' step='1' value={formData.count} onChange={handleFormChange} />
                    </label>

                    <label>
                        <p>Gift wrap</p>
                        <input type='checkbox' name='gift-wrap' disabled={formData.gift !== 'iphone'} checked={formData['gift-wrap']} onChange={handleFormChange} />


                    </label>

                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App