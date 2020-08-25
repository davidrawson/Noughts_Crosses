import React from 'react';

const ReplayButton = ({isVisible, callback, text, className}) => {
  const button = <button onClick={callback} className={className}>{text}</button>

  return isVisible ? button : null
}

export default ReplayButton
