
import React, { useState } from 'react';
import './App.css';

function App() {
  //top level management
  //inside a react function
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);



  function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    console.log({ name, email });
    setName('');
    setEmail('');

    setTimeout(() => {
      //request is successfull
      setSubmitting(false);
    }, 3000)

  }


  return (
    <div className='wrapper'>
      <h1>Gift Items</h1>
      {submitting && <div>Submitting Form... </div>}

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Name</p>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            <p>Email</p>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default App