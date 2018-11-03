import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import Directions from './Directions';
import WalkHomeScreen from './WalkHomeScreen'
import NewWalk from './NewWalk'

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Directions: Directions,
    WalkHome: WalkHomeScreen,
    New: NewWalk,
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
