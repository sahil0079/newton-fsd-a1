import React, { useState, memo } from 'react'


function Square({ items }) {

    console.log(`Square rendered ${items.color}`)

    return (
        <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: items.color
        }}>

        </div>
    )
}

const MemoizedSquare = memo(Square, (prevProps, nextProps) => {
    // console.log({ prevProps, nextProps });

    return prevProps.items.color === nextProps.items.color
});

function App() {
    const [appRenderCount, setAppRenderCount] = useState(0);
    const [color, setColor] = useState('tomato')

    console.log(`App rendered ${appRenderCount}`)
    return (
        <div className='app'>

            <div>
                <button onClick={() => setAppRenderCount(appRenderCount + 1)} >
                    Re-Render App
                </button>
                <button onClick={() => setColor(color == 'tomato' ? 'green' : 'tomato')}>
                    Change Color
                </button>
            </div>
            <div>
                {/* <MemoizedSquare color={color} /> */}

                <MemoizedSquare items={{ color }} />

            </div>

        </div>
    )
}

export default App