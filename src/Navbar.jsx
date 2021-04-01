import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/user/Shan/Khan" exact activeClassName="active_class">
        User
      </NavLink>
      <NavLink to="/about" exact activeClassName="active_class">
        About
      </NavLink>
      <NavLink to="/" exact activeClassName="active_class">
        Search
      </NavLink>
      <NavLink to="/compc" exact activeClassName="active_class">
        CompC
      </NavLink>
      <NavLink to="/compc/compd" exact activeClassName="active_class">
        CompD
      </NavLink>
      <NavLink to="/compc/compf" exact activeClassName="active_class">
        CompF
      </NavLink>
    </div>
  );
};
export default Navbar;
