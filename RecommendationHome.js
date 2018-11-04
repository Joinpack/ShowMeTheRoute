/*
Recommendation generates a WALK recommendation based
upon current location and general departure time.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, Animated } from 'react-native';


class RecommendationHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Generate Location',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}>[ Identify {"\n"} Location ]</Text>
          <Button
            title="Identify Location"
            color="transparent"
            onPress={{Animated.spring(0.3)}, => this.props.navigation.navigate('MemorialStadium')}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 300,
    height: 150,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
  },
  createWalkStyle: {
    fontSize: 60,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});

export default RecommendationHomeScreen;
