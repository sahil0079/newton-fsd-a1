

import React from 'react'
import FlyOutMenu from './FlyOutMenu'

const sources = [
    "https://images.unsplash.com/photo-1677441564461-1b3e5bff781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1707193748912-b030cd48fba2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1707307006036-22663ea0c88d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"
]

function Image({ source }) {

    return (
        <div className='image-item'>
            <img width={400} height={400} src={source} alt='image' />
            <FlyOutMenu />

        </div>
    )
}
function ImageList() {
    return sources.map((source, i) => <Image source={source} key={i} />)
}

export default ImageList