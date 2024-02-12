import React, { useState } from 'react';
import './MenuDropDown.css';

function MenuDropDown() {
    const [showDropDown, setShowDropDown] = useState(false);
    return (
        <div className='dropDownContainer'>
            <button
                onClick={() => setShowDropDown(!showDropDown)}
                className='dropDownButton'>Options</button>

            <ul className='dropDownItems'

                style={{
                    opacity: !showDropDown ? '0' : '1',
                    transition: '0.3s ease',
                    visibility: !showDropDown ? 'hidden' : 'visible',
                    transform: !showDropDown ? 'scale(0.9)' : 'scale(1)',
                    transformOrigin: 'top right',
                    width: '7rem',
                }}

            >
                <li className='items' onClick={() => setShowDropDown(false)} >
                    <span className='menuText'>Edit</span>
                </li>
                <li className='items' onClick={() => setShowDropDown(false)}>
                    <span className='menuText'>Duplicate</span>
                </li>
                <li className='items' onClick={() => setShowDropDown(false)}>
                    <span className='menuText'>Fav</span>
                </li>
                <li className='items' onClick={() => setShowDropDown(false)}>
                    <span className='menuText'>Delete</span>
                </li>
            </ul>
        </div>
    )
}

export default MenuDropDown