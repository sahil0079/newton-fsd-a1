import React, { useState } from 'react'


//render props

//another wy of making components is using render prop pattern
//render prop is a prop on a component which value is a function that returns jsx
//the component does not render anything itself
//render props renders 
//component calls the tender prop instead of its own rendering logic

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent render={(count) => <p>Counter: {count}</p>} />
      <Title render={() => <h2>This is Title 1</h2>} />
      <Title render={() => <h2>This is Title 2</h2>} />

      <Title render={() => <h2>This is Title 3</h2>} />

    </div>
  )
}
const Title = (props) => props.render();


function ChildComponent({ render }) {

  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(c => c + 1);
  }
  return (
    <div>
      <h2>Child Component</h2>
      {/* rendering logic */}
      {render(count)}
      <button onClick={incrementCount} >Increment</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <ParentComponent />
    </div>
  )
}

export default App