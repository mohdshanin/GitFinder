import React from 'react';
import { useHistory } from 'react-router-dom';

const About = () => {
  const history = useHistory();
  return (
    <div>
      <h1>This is About Page</h1>
      <button onClick={() => history.goBack()}>Go Back</button>
    </div>
  );
};

export default About;
