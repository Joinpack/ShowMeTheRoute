/*
Gives the user option to take recommended WALK or create new WALK.
*/

import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Alert, TouchableHighlight } from 'react-native';

class RecommendedOptionsScreen extends React.Component {
  static navigationOptions = {
    title: 'Recommended Options',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={() => Alert.alert("You've joined Pack Sequoia!")}
          onLongPress={() => this.props.navigation.navigate('PurpleScreen')}>
          <View style={styles.buttonContainer}>
            <Text style = {styles.createWalkStyle}> Pack Sequoia {"\n"} {"\n"}
              Memorial to Unit 3 {"\n"} Departure: 8:45 pm </Text>
          </View>
          </TouchableHighlight>
        <TouchableHighlight
          onPress={() => Alert.alert("You've joined Pack Honey!")}
          onLongPress={() => this.props.navigation.navigate('GoldScreen')}>
            <View style={styles.buttonContainer}>
            <Text style = {styles.createWalkStyle}> Pack Honey {"\n"} {"\n"}
              Memorial to Unit 3 {"\n"} Departure: 9:15 pm </Text>
          </View>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Create a Pack {"\n"} {"\n"}
            Memorial to Unit 3  {"\n"} Departure: 9:00 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('NewAndExistingWalks')}
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
    width: 200,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});

export default RecommendedOptionsScreen;
