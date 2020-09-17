import React from 'react';
import Square from './Square';

const Grid = ({grid, markSquare, winningLine}) => {
  const squares = grid.map(function(letter, index){
    return (
      <Square
        key={index}
        location={index}
        markSquare={markSquare}
        player={letter}
        winningLine={winningLine}
      />
    )
  })

  return(
    <div className="grid">
      {squares}
    </div>
  )
}

export default Grid;
