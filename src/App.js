import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { routes, redirects } from 'routes';
import Header from 'components/Header/header.component';
import Navbar from 'components/Navbar/navbar.component';

import './App.css';

const App = () => (
  <div>
    <Header />
    <div className='main'>
      <div className='sidebar'>
        <Navbar />
      </div>
      <div className='content'>
        <div className="content-container paper">
          <div className='paper-container'>
            <Switch>
              {
                routes
                  .map((route, index) => (
                    <Route key={index} exact={route.exact} path={route.path} component={route.component}/>
                  ))
              }
              {
                redirects
                  .map((redirect, index) => (
                    <Redirect key={index} from={redirect.from} to={redirect.to} />
                  ))
              }
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default App;