import React from 'react'
import { useStateValue } from './context/StateProvider';




function App() {

  const [_, dispatch] = useStateValue();

  const removeFromCart = () => {

    dispatch({
      type: 'REMOVE_FROM_CART',
      id
    });
  }
  return (
    <div>App</div>
  )
}

export default App