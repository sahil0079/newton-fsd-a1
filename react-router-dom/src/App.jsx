import React, { createContext, useContext } from 'react'


const UserContext = createContext();



console.log(UserContext)

function App() {
  return (
    <UserContext.Provider value='john' >
      <div>App</div>
      <User />
    </UserContext.Provider>
  )
}

function User() {

  return (
    <>
      <h1>User</h1>
      <User1 />
    </>

  )
}

function User1() {

  return (
    <>
      <h1>User1</h1>
      <User2 />

    </>

  )
}

function User2() {
  const contextValue = useContext(UserContext);
  return (
    <>

      <h1>User2</h1>
      {/* <UserContext.Consumer>
        {(value) => <h2>{value} </h2>}
      </UserContext.Consumer> */}
      name: {contextValue}

    </>

  )
}



export default App