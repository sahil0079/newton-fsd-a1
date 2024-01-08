import React from 'react'
import { Route, Routes, Link, Outlet, useParams } from 'react-router-dom'

function App() {

    const users = [
        { id: '1', firstName: 'John', lastName: 'Doe' },
        { id: '2', firstName: 'Peter', lastName: 'Finn' },

    ]
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='users/*' element={<Users users={users} />} />
                <Route path='*' element={<NoMatch />} />
            </Route>

        </Routes>
    )
}

function Layout() {
    return (
        <>
            <nav style={{
                borderBottom: 'solid 1px',
                paddingBottom: '1rem'
            }}>
                <Link to='/home'>Home</Link>
                <Link to='/users'>Users</Link>
            </nav>

            <main style={{ padding: '1rem 0' }}>
                <Outlet />
            </main>
        </>
    )
}

function Home() {
    return <h2>Home</h2>
}

function Users({ users }) {
    return <>
        <h2>Users</h2>

        <Routes>
            <Route index element={<UserList users={users} />} />

            <Route path=':userId' element={<UserItem />} />

        </Routes>

        <Outlet />
    </>
}

function UserList({ users }) {

    return (
        <>
            <h2>User List</h2>

            <ul>

                {users.map((user) => (
                    <li key={user.id}>
                        <Link to={user.id}>
                            {user.firstName}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

function UserItem() {

    const { userId } = useParams()

    // console.log('data', data)

    return (
        <>
            <h2>User Item : {userId} </h2>

            <Link to='/users'>Back to Users</Link>
        </>
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