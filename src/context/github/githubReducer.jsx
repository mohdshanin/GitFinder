import {
  FIRST_USERS,
  SEARCH_USERS,
  REMOVE_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
} from '../types';

const githubReducer = (state, action) => {
  switch (action.type) {
    case FIRST_USERS:
      return { ...state, users: action.payload, loading: false };
    case SEARCH_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case GET_REPOS:
      return { ...state, userRepos: action.payload, loading: false };
    case REMOVE_USERS:
      return { ...state, users: [], loading: false };
    case SET_LOADING:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default githubReducer;
