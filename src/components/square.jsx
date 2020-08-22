import React from 'react;

const square = ({location, markSquare, player}) => {

  const handleClick = () => {
    markSquare(location);
  }

  return (<div classname="square" onClick={handleClick}>{player}</div>)
  )
}

export default square;
