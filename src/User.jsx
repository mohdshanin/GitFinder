import React from 'react';
import { useParams, useLocation, NavLink, useHistory } from 'react-router-dom';

// passing Params with ReactJS Hooks

const User = () => {
  const location = useLocation();
  const history = useHistory();

  const { fname, lname } = useParams();
  return (
    <div>
      <h1>
        That is User {fname} {lname}'s Page
      </h1>
      <h2>
        And current path is <span className="red">{location.pathname}</span>
      </h2>
      {location.pathname === `/user/Shan/Khan` ? (
        <button>
          <NavLink to="/about" exact activeClassName="">
            Click for About
          </NavLink>
        </button>
      ) : (
        <button onClick={() => history.push(`/user/Shan/Khan`)}>
          Prev User
        </button>
      )}
    </div>
  );
};

// passing Params with JavaScript

// const User = ({ match }) => {
//   return (
//     <div>
//       <h1>That is User {match.params.name}'s Page</h1>
//     </div>
//   );
// };

export default User;
