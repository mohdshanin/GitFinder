import React, { Fragment } from 'react';
import Search from '../layout/Search';
import Users from '../users/Users';

const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <Search />
        <Users />
      </div>
    </Fragment>
  );
};

export default Home;
