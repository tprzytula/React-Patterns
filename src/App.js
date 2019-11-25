import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import CompoundComponents from './patterns/compoundComponents/classComponents';
import CompoundComponentsHooks from './patterns/compoundComponents/hooks';
import RenderProps from './patterns/renderProps/classComponents';
import RenderPropsHooks from './patterns/renderProps/hooks';
import StateReducer from './patterns/stateReducer/classComponents';
import StateReducerHooks from './patterns/stateReducer/hooks';

class App extends Component {
  render() {
    return (
      <Router>
          <div>
              <ul>
                  <li>
                      <Link to="/compoundComponents">Compound components</Link>
                      <ul>
                          <li>
                              <Link to="/compoundComponentsHooks">example recreated using hooks</Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <Link to="/renderProps">Render props</Link>
                      <ul>
                          <li>
                              <Link to="/renderPropsHooks">example recreated using hooks</Link>
                          </li>
                      </ul>
                  </li>
                  <li>
                      <Link to="/stateReducer">State reducer</Link>
                      <ul>
                          <li>
                              <Link to="/stateReducerHooks">example recreated using hooks</Link>
                          </li>
                      </ul>
                  </li>
              </ul>

              <hr/>

              <Route exact path="/compoundComponents" component={CompoundComponents}/>
              <Route exact path="/compoundComponentsHooks" component={CompoundComponentsHooks}/>
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
