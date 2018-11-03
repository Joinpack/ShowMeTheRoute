import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import Directions from './Directions';
import Login from './Login';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Directions: Directions,
    Authentication: Login,
  },
  {
    initialRouteName: 'Home',
  }
);

class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

export default App;
