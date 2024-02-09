import React, { useEffect } from 'react'


//HOC pattern

//Higher Order Component
//use same logic in multiple components
//ex=> styling , authorization, global state, logging

//HOC is a component that recieves another component
//HOC contains some logic that we want to apply in the compone passed as parameter
//after applying the logic HOC returns or the component with additional logic


function MyComponent(props) {

  return <h1>{props.text}</h1>
}

function MyComponent2(props) {

  return <h1>{props.heading}</h1>
}

function withLogger(Component) {
  //HOC

  return function WithLogger(props) {

    useEffect(() => {
      console.log(`Component ${Component.name} mounted`);

      return () => {
        console.log(`Component ${Component.name} unmounted`)
      }
    }, [])

    return <Component {...props} />
  }
}

const MyComponentWithLogger = withLogger(MyComponent);

const MyComponent2WithLogger = withLogger(MyComponent2);


function App() {
  return (
    <div>
      <MyComponentWithLogger text='Hello World !' />
      <MyComponent2WithLogger heading='This is component 2' />

    </div>
  )
}

export default App