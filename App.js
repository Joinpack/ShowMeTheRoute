import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import Directions from './Directions';
import WalkHomeScreen from './WalkHomeScreen';
import NewWalkScreenLocation from './NewWalkLocation';
import NewWalkScreenDestination from './NewWalkDestination';
import NewWalkScreenDeparture from './NewWalkDeparture';
import Confirmation from './Confirmation';



const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Directions: Directions,
    WalkHome: WalkHomeScreen,
    New: NewWalkScreenLocation,
    Destination: NewWalkScreenDestination,
    Departure: NewWalkScreenDeparture,
    Confirmation: Confirmation
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
