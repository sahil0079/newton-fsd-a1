import React from 'react'
import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {

    // setSelectedFriend(function (prevSelectedFriend) {
    //   console.log({ prevSelectedFriend, friend })

    //   if (prevSelectedFriend?.id === friend?.id) {
    //     return null
    //   }

    //   return friend;
    // })

    setSelectedFriend(prev => (prev?.id === friend?.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    console.log('value', value)

    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);


  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList friends={friends} onSelection={handleSelection} selectedFriend={selectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend} > {showAddFriend ? "Close" : "Add friend"} </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>
  )
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  // const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelection={onSelection} selectedFriend={selectedFriend} />
      ))}
    </ul>
  )
}

function Friend({ friend, onSelection, selectedFriend }) {

  const isSelected = selectedFriend?.id === friend.id;

  return <li className={isSelected ? 'selected' : ''} >
    <img src={friend.image} alt={friend.name} />
    <h3>{friend.name}</h3>

    {friend.balance > 0 && (
      <p className='red'> You owe {friend.name} {Math.abs(friend.balance)}₹</p>
    )}


    {friend.balance < 0 && (
      <p className='green'> {friend.name} owes you {Math.abs(friend.balance)}₹</p>
    )}


    {friend.balance === 0 && (
      <p > You and  {friend.name} are even.</p>
    )}

    {/* <Button buttonText='Select' /> */}
    <Button onClick={() => onSelection(friend)} >
      {/* children */}
      {isSelected ? 'Close' : 'Select'}
    </Button>
  </li>
}

// function Button({ buttonText, prop2, prop3, prop4 }) {
//   return <button className='button'>{buttonText}</button>

// }

function Button({ children, onClick }) {

  return <button onClick={onClick} className='button'>{children}</button>
}
function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/42");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    console.log('newFriend', newFriend);
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/42");
  }

  return (
    <form onSubmit={handleSubmit} className='form-add-friend'>
      <label>🐰 Friend name</label>
      <input value={name} type='text' onChange={(e) => setName(e.target.value)} />

      <label>🏞 Image URL</label>
      <input value={image} type='text' onChange={(e) => setImage(e.target.value)} />

      {/* <Button buttonText='Add' /> */}
      <Button>
        {/* children */}
        Add
      </Button>


    </form>
  )
}

function FormSplitBill({ selectedFriend, onSplitBill }) {

  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');


  console.log({ bill, paidByUser, whoIsPaying });

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === 'user' ? paidByFriend : paidByUser);
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit} >
      <h2>Split bill with {selectedFriend.name}</h2>

      <label>💰 Bill value</label>
      <input type='text' value={bill} onChange={(e) => setBill(Number(e.target.value))} />

      <label>🙎 Your Expenses</label>
      <input type='text' value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />

      <label>👬 {selectedFriend.name}'s Expenses</label>
      <input type='text' disabled value={paidByFriend} />


      <label>🤑 Who will pay the bill?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)} >
        <option>You</option>
        <option>{selectedFriend.name}</option>

      </select>

      <Button>Split Bill</Button>
    </form>
  )
}


