/*
ExistingWalksScreens displays walks that have NOT departed yet.
*/

import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';


class ExistingWalksScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text> {"\n"} {"\n"} {"\n"} </Text>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk #1 {"\n"} {"\n"}
            Kresge to South Side {"\n"} Departure: 9:45 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk #2 {"\n"} {"\n"}
            Moffitt to Down Town {"\n"} Departure: 10:00 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk #1 {"\n"} {"\n"}
            Kresge to South Side {"\n"} Departure: 9:45 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk #2 {"\n"} {"\n"}
            Moffitt to Down Town {"\n"} Departure: 10:00 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
      </ScrollView>
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

export default ExistingWalksScreen;
