import React, { useContext } from 'react';
import RouteLogin from './pages/routes/RouteLogin'
import RouteLogged from './pages/routes/RouteLogged'

import AuthProvider from './pages/routes/auth';

const App = () => {
  const { signed } = useContext(AuthProvider);
  return (signed) ? <RouteLogged />: <RouteLogin />;
};

export default App;