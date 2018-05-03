import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Guestbook from './components/Guestbook';
import FormExample from './components/FormExample';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/guestbook" component={Guestbook} />
          <Route path="/FormExample" component={FormExample} />
        </div>
      </Router>
    );
  }
}

export default App;
