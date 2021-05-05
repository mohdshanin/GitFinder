import React from 'react';
import InfoIcon from '@material-ui/icons/Info';

const NotFound = () => {
  return (
    <div className="not_found">
      <span className="alert">
        <InfoIcon className="icon" /> Error
      </span>
      <h1>Sorry, Page Not Found !</h1>
    </div>
  );
};

export default NotFound;
