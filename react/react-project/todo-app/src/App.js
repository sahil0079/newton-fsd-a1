import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile'


let isLoggedIn = false;
let content;

// if (isLoggedIn) {
//   content = <Profile />
// } else {
//   content = <h1>User is not logged in</h1>
// }

// content = isLoggedIn ? <Profile /> : <h1>User is not logged in</h1>
// content = isLoggedIn && <Profile />


let Profile2 = Profile;
function App() {
  return (
    <div style={{
      display: 'grid',
      placeItems: 'center',
      marginTop: '10px'
    }} >
      {/* {content} */}

      {/* {
        content
      } */}
      {/* {isLoggedIn && <Profile />} */}
      {<Profile2 />}
    </div>
  )
}

export default App