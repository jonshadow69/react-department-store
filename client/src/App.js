import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import NoMatch from './components/NoMatch';
import Departments from './components/Departments';
import { Container, } from "semantic-ui-react";


const App = () => (
<Fragment>
  <Navbar/>
    <Container>
      <Switch>
        <Route exact path="/departments" component={Departments} />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
