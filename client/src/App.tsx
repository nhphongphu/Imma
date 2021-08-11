import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { LandingPage } from './pages/landingpage/landing'
import { NewsfeedPage } from './pages/newsfeed/newsfeed'

function App() {
  return (
    <Router>
      <>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/newsfeed' component={NewsfeedPage} />

      </>
    </Router>
  );
}

export default App;
