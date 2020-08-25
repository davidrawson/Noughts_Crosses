import React from 'react';
import Square from './Square';

const Grid = ({grid, markSquare}) => {
  const squares = grid.map(function(letter, index){
    return (
      <Square
        id={index}
        location={index}
        markSquare={markSquare}
        player={letter}
      />
    )
  })

  return(
    <div id="grid">
      {squares}
    </div>
  )

  // return (
  //   <div>
  //     <Grid
  //       grid={this.state.grid}
  //     />
  //   </div>
  //
  // )
}

export default Grid;
