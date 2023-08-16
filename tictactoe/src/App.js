import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1);
  const [message, setMessage] = useState(null);

  function check(index) {
    
    if (player === 1) {
      const updatedBoard = [...board];
      updatedBoard[index] = 1;
      setBoard(updatedBoard);
      setPlayer(2);
    } else {
      const updatedBoard = [...board];
      updatedBoard[index] = 2;
      setBoard(updatedBoard);
      setPlayer(1);
    }
  }

  function checkForWinner(player) {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    for (const combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] === player && board[b] === player && board[c] === player) {
        return true;
      }
    }
    return false;
  }

  //Überprüfen des Gewinners

useEffect(() => {

    if (checkForWinner(1)) {
      
      console.log("player1 wins")
      setMessage("Player 1 won.")
    } else if (checkForWinner(2)) {
      
      console.log("player2 wins")
      setMessage("Player 2 won.")
    }
});

    return (

      <><div className='App'>
        {board.map((tile, index) => (
          <button
            className='tiles'
            key={index}
            value={tile}
            onClick={() => check(index)}
          >
            {tile === 1 ? 'X' : tile === 2 ? 'O' : ''}
          </button>

        ))}
      </div>
      <div>
        <p className='message'> {message}</p>
        </div>
        </>
    );
  }
export default App;
