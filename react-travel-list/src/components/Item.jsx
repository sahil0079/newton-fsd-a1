import React from 'react'

function Item({ item }) {
    return (
        <li>
            <input type='checkbox' />
            <span> {item.quantity} {item.description}</span>
            <button>x</button>
        </li>
    )
}

export default Item