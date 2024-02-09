import React from 'react'
import ImageList from './ImageList'
import './App.css'

// Compound Pattern
//components belong to each other or dependant on each other
//through some state, shared logic together
//examples=> menu, select, modals etc



// HOC Pattern

// Hooks Pattern

// Container/presentational Pattern

// Render props pattern

function App() {
  return (
    <div className='App'>
      <ImageList />
    </div>
  )
}

export default App