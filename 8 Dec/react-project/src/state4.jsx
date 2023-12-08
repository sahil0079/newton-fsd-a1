import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);

    console.log(`Counter component rendered`)


    return (
        <div>
            <h1>Count : {count}</h1>
            <button style={{
                marginRight: 20
            }} onClick={() => {
                // setCount(count + 1);
                // setCount(count + 1);
                // setCount(count + 1);

                setCount((prevCount) => prevCount + 1);
                setCount((prevCount) => prevCount + 1);
                setCount((prevCount) => prevCount + 1);

            }} >+</button>
            <button onClick={() => setCount(count - 1)}>-</button>

        </div>
    )
}


function App() {
    const [showCounter, setShowCounter] = useState(false);
    console.log(`App component rendered`)
    return (
        <div style={{
            marginTop: 100,
            marginLeft: 100
        }}>
            <Counter />
            <hr />
            {/* <Counter />
      <hr />
      <Counter /> */}
            <hr />
            <button onClick={() => setShowCounter(true)} >mount</button>
            <button onClick={() => setShowCounter(false)} >unmount</button>


        </div>
    )
}

export default App