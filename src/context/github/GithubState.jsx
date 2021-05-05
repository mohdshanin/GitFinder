import React, { useReducer } from 'react';
import axios from 'axios';
import GithubReducer from './githubReducer';
import GithubContext from './githubContext';

import {
  FIRST_USERS,
  SEARCH_USERS,
  REMOVE_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
} from '../types';

const GithubState = (props) => {
  const istate = {
    user: {},
    userRepos: [],
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, istate);

  let githubClientId;
  let githubClientSecret;

  if (process.env.NODE_ENV === 'production') {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  }

  //todo First 30 Users
  const FirstUsers = async () => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: FIRST_USERS,
      payload: res.data,
    });
  };

  //* Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`
    );
    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  //* Clear users
  const clearuser = () => {
    dispatch({
      type: REMOVE_USERS,
    });
  };

  //* Search Single User
  const getUser = async (login) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //* User Repos
  const getUserRepos = async (login) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //*Set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        user: state.user,
        userRepos: state.userRepos,
        FirstUsers,
        searchUsers,
        clearuser,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
