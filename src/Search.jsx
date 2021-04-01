import React, { useState } from 'react';
import Img from './Img';

const Search = () => {
  const [img, setImg] = useState('');
  const [giveimg, setGiveImg] = useState('');

  const change = (e) => {
    setImg(e.target.value);
  };
  const submit = () => {
    setGiveImg(img);
  };

  return (
    <div>
      <input
        type="text"
        value={img}
        onChange={change}
        placeholder="Search Anything"
      />
      <button type="submit" onClick={submit}>
        Search
      </button>
      {giveimg && <Img Simg={giveimg} />}
    </div>
  );
};

export default Search;
