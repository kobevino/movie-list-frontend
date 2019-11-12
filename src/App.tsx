import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, MyList } from './pages';
import Header from 'components/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/mylist" component={MyList} />
    </Router>
  )
}

export default App;
