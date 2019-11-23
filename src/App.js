import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import CompoundComponents from './patterns/compoundComponents';
import RenderProps from './patterns/renderProps';
import RenderPropsHooks from './patterns/renderPropsHooks';
import StateReducer from './patterns/stateReducer';
import StateReducerHooks from './patterns/stateReducerHooks';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <ul>
                  <li><Link to="/compoundComponents">Compound components</Link></li>
                  <li><Link to="/renderProps">Render props</Link></li>
                  <li><Link to="/renderPropsHooks">Render props (recreated with hooks)</Link></li>
                  <li><Link to="/stateReducer">State reducer</Link></li>
                  <li><Link to="/stateReducerHooks">State reducer (recreated with hooks)</Link></li>
              </ul>

              <hr/>

              <Route exact path="/compoundComponents" component={CompoundComponents}/>
              <Route exact path="/renderProps" component={RenderProps}/>
              <Route exact path="/renderPropsHooks" component={RenderPropsHooks}/>
              <Route exact path="/stateReducer" component={StateReducer}/>
              <Route exact path="/stateReducerHooks" component={StateReducerHooks}/>
          </div>
      </Router>
    );
  }
}

export default App;
