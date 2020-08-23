import React from 'react';
import Square from './Square';

const Grid = ({grid, markSquare}) => {
  const squares = grid.map(function(mark, index){
    return (
      <Square
        id={index}
        location={index}
        markSquare={markSquare}
        player={}
      />
    )
  })

  return (
    <div id="grid">
      {squares}
    </div>
  )
}

export default Grid;
