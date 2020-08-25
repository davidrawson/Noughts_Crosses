import React from 'react';

const Square = ({location, markSquare, player}) => {

  const handleClick = () => {
    markSquare(location);
  }

  return (<div className="square" onClick={handleClick}>{player}</div>)
}

export default Square;
