import * as React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import MainPage from '@pages/main';
import About from '@pages/about';

import Header from '@components/layout/header';

const App = () => (
  <Router>
    <Header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Header>

    <Route exact path="/" component={MainPage} />
    <Route path="/about" component={About} />
  </Router>
);

export default App;
