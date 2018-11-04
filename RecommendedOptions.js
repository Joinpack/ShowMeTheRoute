/*
Gives the user option to take recommended WALK or create new WALK.
*/

import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Alert } from 'react-native';

class RecommendedOptionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Recommended',
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Recommendation 1 {"\n"} {"\n"}
            Memorial to South Side {"\n"} Departure: 3:00 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Existing')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Recommendation 2 {"\n"} {"\n"}
            Memorial to Unit 3 {"\n"} Departure: 3:30 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => Alert.alert("You've joined an existing walk!")}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Recommendation 3 {"\n"} {"\n"}
            Create Walk {"\n"} Departure: TBD </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
        </View>
        <View style = {styles.buttonSpace}>
            <Button
              title="Existing"
              color ='white'
              onPress={() => this.props.navigation.navigate('Existing')}
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
    margin: 20,
    width: 250,
    height: 100,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
  },
  buttonSpace: {
    margin: 20,
    color: 'white',
    backgroundColor: 'black',
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
