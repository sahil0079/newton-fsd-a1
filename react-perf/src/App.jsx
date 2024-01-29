import React, { useState, memo, useMemo } from 'react'


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

const MemoizedSquare = memo(Square);

function App() {
  const [appRenderCount, setAppRenderCount] = useState(0);
  const [color, setColor] = useState('tomato')

  console.log(`App rendered ${appRenderCount}`)

  const memoizedItems = useMemo(() => ({ color }), [color]);


  //bad way
  // const sum = useMemo(
  //   function(){
  //     return num1 + num2;
  //   }, [num1, num2]
  // )

  //good way
  // const sum = num1 + num2;


  //bad way

  // const fullName = useMemo(() => `${fName} ${lName}`, [fName, lName])
  //good way
  // const fullName = `${fName} ${lName}`;


  //good way
  // const sum = useMemo(() => numbers.reduce((acc, curr) => acc + curr), 0, [numbers])

  //good way
  // const transformedNums = useMemo(() => nums.map(v => v*2), [nums])

  // const person = useMemo(
  //   () => ({
  //     fName, lName, fullName: `${fName} ${lName}`
  //   }), [fName, lName]
  // )

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

        <MemoizedSquare items={memoizedItems} />

      </div>

    </div>
  )
}

export default App