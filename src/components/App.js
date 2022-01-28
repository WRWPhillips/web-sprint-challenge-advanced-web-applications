//npm imports
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import styled from 'styled-components';

//component imports
import Header from './Header';
import BloomHeader from './BloomHeader';
import Login from './Login';
import View from './View';
import Logout from './Logout';
import PrivateRoute from './PrivateRoute';

const App = () => {
  

  return (

    <AppContainer>
      <BloomHeader/>
      <Header/>  
      <RouteContainer>
        <Switch>
          <PrivateRoute exact path="/view" component={View} />

          <PrivateRoute exact path="/logout" component={Logout} />

          <Route path="/login" component={Login} />

          <Route path="/" component={Login} />
        </Switch>          
      </RouteContainer>
    </AppContainer>
  )
}

export default App;

//Task List
//1. Create and import PrivateRoute component.
//2. Create a Route for Login pointing to '/login.'
//3. Create a PrivateRoute for View component point to '/view.'
//4. Create a PrivateRoute for Logout component pointing to '/logout.'


const AppContainer = styled.div`
  height: 100%;
`
const RouteContainer = styled.div`
  display: flex;
  height: 85%;
  align-items: center;
  flex-direction: column;
`
