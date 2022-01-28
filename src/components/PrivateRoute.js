import React from "react";
import { Route } from "react-router-dom";

const PrivateRoute = (props) => {
  const {component:Component, ...rest} = props;  
  return (<Route {...rest} render={()=> {
   if(localStorage.getItem("token")){
     return <Component />
   } else { 
     return <Redirect to="/" />
   }
  }}/>);
}

export default PrivateRoute;

