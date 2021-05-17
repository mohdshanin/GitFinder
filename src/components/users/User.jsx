import React, { useEffect, useContext } from 'react';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import RemoveCircleOutlinedIcon from '@material-ui/icons/RemoveCircleOutlined';
import { Link } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getUserRepos(match.params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {
    login,
    avatar_url,
    html_url,
    name,
    company,
    blog,
    location,
    email,
    hireable,
    bio,
    twitter_username,
    public_repos,
    public_gists,
    followers,
    following,
  } = githubContext.user;

  if (githubContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div className="user">
        <button style={{ backgroundColor: '#aaa' }}>
          <Link to="/GitFinder/">Back To Search</Link>
        </button>
        <span>
          Hireable:
          {hireable ? (
            <DoneOutlineRoundedIcon
              className="icon"
              style={{ color: 'green' }}
            />
          ) : (
            <RemoveCircleOutlinedIcon
              className="icon"
              style={{ color: 'red' }}
            />
          )}
        </span>
        <div className="user_grid">
          <div className="left">
            <a href={avatar_url} target="blank">
              <img src={avatar_url} alt="" />
            </a>
            <h2>{login} </h2>
            <p>
              Location: {location ? <span> {location}</span> : ' Not Available'}
            </p>
            {email && (
              <p>
                <span>Email:</span> {email}
              </p>
            )}
          </div>
          <div className="right">
            {bio && (
              <p>
                <span>Bio:</span> {bio}
              </p>
            )}
            <button>
              <a href={html_url} target="blank">
                Go To Github
              </a>
            </button>
            {name && (
              <p>
                Name: <span>{name}</span>
              </p>
            )}
            {company && (
              <p>
                Company: <span>{company}</span>
              </p>
            )}

            {twitter_username && (
              <p>
                Twitter: <span>{twitter_username}</span>
              </p>
            )}

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>Website:</span>
              {blog ? (
                <a href={blog} target="blank" className="web">
                  <p> {blog} </p>
                </a>
              ) : (
                ' Not Available'
              )}
            </div>
          </div>
        </div>
        <div className="container">
          <span className="card_1">Repos: {public_repos}</span>
          <span className="card_2">Gists: {public_gists}</span>
          <span className="card_3">Followers: {followers}</span>
          <span className="card_4">Following: {following}</span>
        </div>
        <Repos />
      </div>
    );
  }
};

export default User;
