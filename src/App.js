import React, { Component } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/projects/" component={Projects} />
          <Route path="/services/" component={Services} />
          <Route path="/contact/" component={Contact} />
        </Switch>
        
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
