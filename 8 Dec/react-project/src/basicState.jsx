import React, { useState } from 'react';
import './App.css';

function App() {
    let [counter, setCounter] = useState(0);

    let count = 0;
    console.log(`App component rendered`);

    function incrementCount() {
        // count = count + 1;
        // console.log('count', count)
        // counter = counter + 1;
        // console.log('counter', counter)
        setCounter(counter + 1);
    };
    return (
        <div style={{
            marginLeft: 100,
            marginTop: 200
        }}>
            <h1>This is app component</h1>
            {/* <h2>Count:{count}</h2> */}
            <h2>Count:{counter}</h2>

            <button onClick={incrementCount} >increment</button>
        </div>
    )
}

export default App