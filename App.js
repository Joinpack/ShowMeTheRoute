import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import RecommendationHomeScreen from './RecommendationHome';
import MemorialStadiumScreen from './MemorialStadium';
import RecommendedOptionsScreen from './RecommendedOptions';
import Directions from './Directions';
import WalkHomeScreen from './WalkHomeScreen'
import NewWalkScreenLocation from './NewWalkLocation'
import NewWalkScreenDestination from './NewWalkDestination'
import NewWalkScreenDeparture from './NewWalkDeparture'
import ExistingWalksScreen from './ExistingWalks'


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    RecommendationHome: RecommendationHomeScreen,
    MemorialStadium: MemorialStadiumScreen,
    RecommendedOptions: RecommendedOptionsScreen,
    Directions: Directions,
    WalkHome: WalkHomeScreen,
    New: NewWalkScreenLocation,
    Destination: NewWalkScreenDestination,
    Departure: NewWalkScreenDeparture,
    Existing: ExistingWalksScreen,
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
