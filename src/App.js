import React from 'react';
import Search from './Search';
import About from './About';
import ComponentC from './ComponentC';
import ComponentD from './ComponentD';
import User from './User';
import Navbar from './Navbar';
import Error from './Error';
import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

const App = () => {
  const CompF = () => {
    return <h1>This is a Component F</h1>;
  };
  return (
    <>
      <Navbar />
      <div className="center">
        <Switch>
          <Route exact path="/user/:fname/:lname" component={User} />
          <Route exact path="/about" component={About} />
          <Route exact path="/" component={Search} />
          <Route
            exact
            path="/compc"
            component={() => <ComponentC name="Shan" />}
          />
          <Route exact path="/compc/compd" component={ComponentD} />
          <Route exact path="/compc/compf" component={CompF} />

          {/* You Can Use Error Page  */}
          <Route component={Error} />

          {/* Use Redirect for not showing Error Page */}
          {/* <Redirect to="/" /> */}

          {/* You Can Also use Serch(Home) instead of Error Page  */}
          {/* <Route component={Search} /> */}
        </Switch>
      </div>
    </>
  );
};

export default App;
