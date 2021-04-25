import React, { useContext } from 'react';
import RepoItems from './RepoItems';
import GithubContext from '../../context/github/githubContext';

const Repos = ({ userRepos }) => {
  const githubContext = useContext(GithubContext);

  return (
    <div className="repos">
      {githubContext.userRepos.map((repo) => (
        <RepoItems key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
