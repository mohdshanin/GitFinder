import React, { useState, Fragment, useContext, useEffect } from 'react';
import Alert from './Alert';

import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState('');

  useEffect(() => {
    githubContext.FirstUsers();
    // eslint-disable-next-line
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert();
      setTimeout(() => {
        alertContext.clearAlert();
      }, 3000);
    } else {
      githubContext.searchUsers(text);
      setText(text);
    }
  };
  return (
    <Fragment>
      {alertContext.alert && <Alert />}
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          value={text}
          onChange={onChange}
          placeholder="Search User..."
        />
        <input type="submit" value="Search" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          onClick={githubContext.clearuser}
          style={{ width: '50%', backgroundColor: '#aaa' }}
        >
          Clear
        </button>
      )}
    </Fragment>
  );
};

export default Search;
