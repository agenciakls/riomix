import React, { useContext } from 'react';
import RouteLogin from './RouteLogin'
import RouteLogged from './RouteLogged'

import AuthContext from './auth';

const Routes = () => {
  const { signed } = useContext(AuthContext);
  return (signed) ? <RouteLogged />: <RouteLogin />;
  
};

export default Routes;