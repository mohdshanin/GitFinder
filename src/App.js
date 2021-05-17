import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import User from './components/users/User';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import './sass/App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <div className="main_div">
          <Navbar />
          <Switch>
            <Route exact path="/GitFinder/user/:login" component={User} />
            <Route exact path="/GitFinder/about" component={About} />
            <Route exact path="/GitFinder/" component={Home} />
            <Route path="/GitFinder" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </AlertState>
    </GithubState>
  );
};

export default App;
