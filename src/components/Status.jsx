import React from 'react';

const Status = ({winner}) => {
  if (!winner) return null;

  return (
    <h1>
      {winner === "DRAW" ? "Cat's Game! Meow." : `${winner} wins!`}
    </h1>
  )
}

export default Status;
