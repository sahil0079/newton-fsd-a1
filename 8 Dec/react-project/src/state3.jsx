import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);

    console.log(`Counter component rendered`)


    return (
        <div>
            <h1>Count : {count}</h1>
            <button style={{
                marginRight: 20
            }} onClick={() => setCount(count + 1)} >+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

        </div>
    )
}

function Greetings() {
    console.log('Greetings rendered')
    return <h4>Greetings</h4>
}

function App() {
    const [showCounter, setShowCounter] = useState(false);
    console.log(`App component rendered`)
    return (
        <div style={{
            marginTop: 100,
            marginLeft: 100
        }}>
            {showCounter && <Counter />}
            <Greetings />

            <button onClick={() => setShowCounter(true)} >mount</button>
            <button onClick={() => setShowCounter(false)} >unmount</button>


        </div>
    )
}

export default App