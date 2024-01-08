import React from 'react';
import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <h1>React Router</h1>

            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>

            </nav>

            <Routes>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </>
    )
}

function Home() {
    return (
        <>
            <h2>Home</h2>
        </>
    )
}

function About() {
    return (
        <>
            <h2>About</h2>
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