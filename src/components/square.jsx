import React from 'react';

const Square = ({location, markSquare, player, winningLine}) => {

  const handleClick = () => {
    markSquare(location);
  }

  let id = "yellow";

  if (winningLine.includes(location)) {
    id = "red";
  }

  return (<div className="square" id={id} onClick={handleClick}>{player}</div>)
}

export default Square;
