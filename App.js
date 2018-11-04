import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import RecommendationHomeScreen from './RecommendationHome';
import MemorialStadiumScreen from './MemorialStadium';
import Unit3Screen from './Unit3';
import DepartureTimesScreen from './DepartureTimes'
import RecommendedOptionsScreen from './RecommendedOptions';
import Directions from './Directions';
import ExistingWalksScreen from './ExistingWalks';
import NewAndExistingWalksScreen from './NewAndExistingWalks';
import WalkHomeScreen from './WalkHomeScreen';
import NewWalkScreenLocation from './NewWalkLocation';
import NewWalkScreenDestination from './NewWalkDestination';
import NewWalkScreenDeparture from './NewWalkDeparture';
import Confirmation from './Confirmation';
import TransitionScreen from './Transition';

import PurpleScreen from './PurpleScreen';
import GoldScreen from './GoldScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    RecommendationHome: RecommendationHomeScreen,
    MemorialStadium: MemorialStadiumScreen,
    Unit3: Unit3Screen,
    DepartureTimes: DepartureTimesScreen,
    Transition: TransitionScreen,
    RecommendedOptions: RecommendedOptionsScreen,
    Directions: Directions,
    WalkHome: WalkHomeScreen,
    New: NewWalkScreenLocation,
    Destination: NewWalkScreenDestination,
    Departure: NewWalkScreenDeparture,
    Existing: ExistingWalksScreen,
    NewAndExistingWalks: NewAndExistingWalksScreen,
    Confirmation: Confirmation,
    PurpleScreen: PurpleScreen,
    GoldScreen: GoldScreen,
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
