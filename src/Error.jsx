import React from 'react';
import { useHistory } from 'react-router-dom';

const Error = () => {
  const history = useHistory();

  const stl = {
    letterSpacing: '3px',
    width: 'fit-content',
    padding: '0',
    background: 'ransparent',
    textShadow: "'5px' '5px' '5px' 'rgba(0, 0, 0, 0.5)'",
    boxShadow: 'none',
  };

  return (
    <div>
      <h1>Oops! 404 Error Page Not Found</h1>
      <h3>Click Go Back to the Home Page</h3>
      <button style={stl} onClick={() => history.push(`/`)}>
        <span>Go to Home</span>
      </button>
    </div>
  );
};

export default Error;
