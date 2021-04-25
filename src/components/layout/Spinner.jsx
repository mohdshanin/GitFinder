import React from 'react';
import Spiner from './Ripple.gif';

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={Spiner} alt="Loading" />
    </div>
  );
};

export default Spinner;
