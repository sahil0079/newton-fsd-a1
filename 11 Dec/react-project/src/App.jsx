import React, { useState } from 'react';
import './App.css';


function Square({ value, onSquareClick }) {
  return (
    <button onClick={onSquareClick} className='square'>{value} </button>
  )
}
// let xIsNext = true;

function calculateWinner(squares) {

  const patterns = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < patterns.length; i++) {
    const singlePattern = patterns[i];
    const [a, b, c] = singlePattern;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Board({ squares, onHandleSquares }) {
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // console.log('Board rendered')
  // console.log(squares)


  function handleClick(i) {
    // console.log(i)
    const isSquareFilled = Boolean(squares[i]);
    if (isSquareFilled || calculateWinner(squares)) {
      return;
    };

    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = 'X';

    } else {
      nextSquares[i] = 'O';
    }
    onHandleSquares(nextSquares);
    // setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }


  return (
    <>
      <div className='status'>{status} </div>
      <div className='board-row'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

      </div>
      <div className='board-row'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

      </div>
      <div className='board-row'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />

      </div>
    </>
  )
}

function TicTacToe() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentStep, setCurrentStep] = useState(0);
  const currentSquares = history[Boolean(currentStep) ? currentStep : history.length - 1];

  function handleSquares(nextSquares) {
    setHistory([...history, nextSquares]);

  }
  console.log('history', { history, currentStep })

  let moves = history.map((squares, index) => {
    let description;

    if (index > 0) {
      description = `Go to the step: ${index}`
    } else {
      description = 'Go to starting of the game'
    }

    function jumToStep(index) {
      setCurrentStep(index);
    }

    return (
      <li key={index}>
        <button onClick={() => jumToStep(index)} >
          {description}
        </button>
      </li>
    )
  })
  return (
    <div className='game'>
      <div className='game-board'>
        <Board squares={currentSquares} onHandleSquares={handleSquares} />
      </div>
      <div className='game-info'>
        <ul>
          {moves}
        </ul>
      </div>
    </div>
  )
}

//track history of moves
//history array 
// [
//   ['X', 'O', null, null, 'X', null, null, null, null],
//   ['X', 'O', 'O', null, 'X', null, null, null, null],
//   ['X', 'O', 'O', null, 'X', null, null, null, 'X'],
// ]

function App() {
  return (
    <div className='app'>
      <TicTacToe />

    </div>
  )
}

export default App