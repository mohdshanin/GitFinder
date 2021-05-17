import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink exact to="/GitFinder/">
        <h2>
          <GitHubIcon className="icon" /> Git Finder
        </h2>
      </NavLink>
      <div className="">
        <NavLink exact to="/GitFinder/" activeClassName="active_nav">
          Home
        </NavLink>
        <NavLink exact to="/GitFinder/about" activeClassName="active_nav">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
