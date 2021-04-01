import React from 'react';
import ComponentD from './ComponentD';

const ComponentC = ({ name }) => {
  return (
    <>
      <h1>{name} This is component C </h1>

      <ComponentD />
    </>
  );
};

export default ComponentC;
