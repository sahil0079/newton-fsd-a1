import React from 'react'
import ContainerComponent from './components/ContainerComponent'

//Container/Presentational Pattern

//we can use Container/Presentational Pattern to enforce separation of concerns

//Container Components(Smart Components)

//responsible for managing state, handling data fetching and interactiong with external services

//focus on logic and behaviour of applciation
//little or no ui markup

//Presentational Components
//consider how things look
//they recieve data and callbacks via props and render ui
//stateless function components
//they dont manage any state or any side effects






function App() {


  return (
    <ContainerComponent />
  )
}

export default App