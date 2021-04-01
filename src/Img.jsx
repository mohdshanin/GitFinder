import React from 'react';

const Img = ({ Simg }) => {
  const img = `https://source.unsplash.com/400x500/?${Simg}`;
  return (
    <div className="img">
      {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
      <img src={img} alt="Searched Image" />
    </div>
  );
};

export default Img;
