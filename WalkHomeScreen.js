/*

WalkHomeScreen displays two buttons:
  CREATE NEW WALK: Allows user to create a NEW WALK.
  JOIN EXISTING WALKS: Allows a user to join an EXISTING WALK.

*/

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class WalkHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> New {"\n"} Walk </Text>
          <Button
            title="Create a New Walk"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Existing {"\n"} Walks </Text>
          <Button
            title="Join Existing Walks"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
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
    marginBottom: 100,
    width: 225,
    height: 125,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  createWalkStyle: {
    fontSize: 50,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});

export default WalkHomeScreen;
