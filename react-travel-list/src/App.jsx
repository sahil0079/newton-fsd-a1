import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Form from './components/Form';
import PackingList from './components/PackingList';

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {

    setItems((items) => [...items, item]);

  };

  function handleClearList() {

    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );

    if (confirmed) setItems([]);

  };

  function handleDeleteItem(id) {

    setItems((items) => items.filter((item) => item.id !== id));
  };

  function handleToggleItem(id) {

    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    )
  }



  return (
    <div className='app'>
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onClearList={handleClearList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      {/* <Stats/> */}
    </div>
  )
}

export default App