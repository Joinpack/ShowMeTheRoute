/*
Gives the user option to take recommended WALK or create new WALK.
*/

import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';

class RecommendedOptionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Recommended',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> {"\n"} {"\n"} {"\n"} </Text>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Recommendation 1 {"\n"} {"\n"}
            Memorial to South Side {"\n"} Departure: 3:00 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Recommendation 2 {"\n"} {"\n"}
            Memorial to Unit 3 {"\n"} Departure: 3:30 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Recommendation 3 {"\n"} {"\n"}
            Create Walk {"\n"} Departure: TBD pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
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
    width: 250,
    height: 100,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
  },
  createWalkStyle: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});

export default RecommendedOptionsScreen;
