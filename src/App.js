import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home';
import Company from './pages/Company';
import Product from './pages/Product';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/company" exact component={Company} />
              <Route path="/product" exact component={Product} />
            </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App;

