import React, { useContext, useEffect } from 'react';
import UserItems from './UserItems';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
  const githubContext = useContext(GithubContext);
  useEffect(() => {
    // if (githubContext.users && githubContext.users.length === 0) {
    //   githubContext.FirstUsers();
    // }

    // OR

    if (Object.keys(githubContext.users).length === 0) {
      githubContext.FirstUsers();
    }
    // eslint-disable-next-line
  }, []);
  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div className="users_grid">
        {githubContext.users.map((user) => (
          <UserItems key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

export default Users;
