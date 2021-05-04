import React from 'react';
import { Link } from 'react-router-dom';

const UserItems = ({ user: { avatar_url, login } }) => {
  return (
    <div className="container">
      <img src={avatar_url} alt="img" />
      <h3>{login} </h3>
      <button>
        <Link to={`/user/${login}`}>More</Link>
      </button>
    </div>
  );
};

export default UserItems;
