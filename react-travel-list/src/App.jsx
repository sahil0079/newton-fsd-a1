import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {

    setItems((items) => [...items, item]);

  }

  return (
    <div className='app'>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      {/* <Stats/> */}
    </div>
  )
}

export default App