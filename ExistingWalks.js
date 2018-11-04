/*
ExistingWalksScreens displays walks that have NOT departed yet.
*/

import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button } from 'react-native';

class ExistingWalksScreen extends React.Component {
  static navigationOptions = {
    title: 'Existing Walks',
  };

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text> {"\n"} {"\n"} {"\n"} </Text>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> - Pack Salmon - {"\n"}
            Unit 1 to Bowles Hall {"\n"} Departure: 7:30 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> - Pack Sierra - {"\n"}
            Moffitt to Down Town {"\n"} Departure: 7:45 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> - Pack Redwood - {"\n"}
            Doe to North Side {"\n"} Departure: 8:15 pm </Text>
          <Button
            title="Walk #1"
            color="transparent"
            onPress={() => this.props.navigation.navigate('New')}
          />
          </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> - Pack Sequoia - {"\n"}
            Memorial to Unit 3 {"\n"} Departure: 8:45 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.specialButtonContainer}>
          <Text style = {styles.createWalkStyle}> - Pack Honey - {"\n"}
            Memorial to Unit 3 {"\n"} Departure: 9:15 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> - Pack Yosemite - {"\n"}
            Clark Kerr to Down Town {"\n"} Departure: 10:00 pm </Text>
          <Button
            title="Walk #2"
            color="transparent"
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Text style = {styles.createWalkStyle}> - Pack Hibernation - {"\n"}
            Cory to South Side {"\n"} Departure: 10:15 pm </Text>
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
    margin: 20,
    width: 240,
    height: 80,
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
    margin: 20,
    width: 240,
    height: 80,
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
