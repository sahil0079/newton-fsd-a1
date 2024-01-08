import React from 'react';
import './App.css';
import { Link, Outlet, Route, Routes } from 'react-router-dom';

function App() {
    return (
        <>
            <h1>React Router Nested Example</h1>

            <nav style={{ marginTop: '10px' }}>
                &nbsp;&nbsp;<Link to='/home'>Home</Link>&nbsp;&nbsp;
                <Link to='/user'>User</Link>

            </nav>

            <Routes>

                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='user' element={<User />}>
                    <Route index element={<Profile />} />
                    {/*http://localhost:5173/user/profile  */}
                    <Route path='profile' element={<Profile />} />
                    {/*http://localhost:5173/user/account  */}
                    <Route path='account' element={<Account />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </>
    )
}

function Home() {

    return (
        <h3>Home</h3>
    )
}
function User() {

    return (
        <>
            <h1>User</h1>

            <nav style={{ marginTop: '10px' }}>
                &nbsp;&nbsp;<Link to='profile'>Profile</Link>&nbsp;&nbsp;
                <Link to='account'>Account</Link>
            </nav>
            <Outlet />
        </>
    )
}

function Profile() {

    return (
        <h3>Profile</h3>
    )
}

function Account() {

    return (
        <h3>Account</h3>
    )
}

function NoMatch() {
    return (
        <>
            <p>There's nothing here: 404 notfound !</p>
            <Link to='/home'>back to home</Link>
        </>
    )

}

export default App