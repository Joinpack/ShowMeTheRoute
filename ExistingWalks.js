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
          <Text style = {styles.createWalkStyle}> Walk 1 {"\n"} {"\n"}
            Kresge to South Side {"\n"} Departure: 2:00 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk 2 {"\n"} {"\n"}
            Moffitt to Down Town {"\n"} Departure: 2:30 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk 3 {"\n"} {"\n"}
            Doe to North Side {"\n"} Departure: 2:45 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk 4 {"\n"} {"\n"}
            Memorial to South Side {"\n"} Departure: 3:00 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.specialButtonContainer}>
          <Text style = {styles.createWalkStyle}> Walk 5 {"\n"} {"\n"}
            Memorial to Unit 3 {"\n"} Departure: 3:30 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk 6 {"\n"} {"\n"}
            Clark Kerr to Down Town {"\n"} Departure: 3:45 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> Walk 7 {"\n"} {"\n"}
            Cory to South Side {"\n"} Departure: 4:00 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style = {styles.buttonSpace}>
            <Button
              title="Home"
              color ='white'
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
  buttonSpace: {
    margin: 20,
    color: 'white',
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
  },
  specialButtonContainer: {
    marginBottom: 100,
    width: 250,
    height: 100,
    backgroundColor: 'indianred',
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
