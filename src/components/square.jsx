import React from 'react';

const Square = ({location, markSquare, player}) => {

  const handleClick = () => {
    markSquare(location);
  }

  return (<div classname="square" onClick={handleClick}>{player}</div>)
}

export default Square;
