import * as React from 'react';
import 'react-native-gesture-handler';

import MainLogged from './pages/logged/main';

import HomeLogin from './pages/login/Home';

var logged = true;
export default function App() {
  if (logged) {
    return (
      <MainLogged />
    )
  }
  else {
    return(
      <HomeLogin />
    );
  }                    
}