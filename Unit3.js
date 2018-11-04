/*
Unit 3 confirmation!
*/

import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


class Unit3Screen extends React.Component {
  static navigationOptions = {
    title: 'Location Detected',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.idStyle}> [ Destination: {"\n"}
                                          Unit 3 Dorms ] </Text>
          <Image
            borderColor = "black"
            borderWidth = "10"
            borderRadius = "5"
            style={{width: 250, height: 250}}
            source={{uri: 'http://www.inspectionservices.net/wp-content/uploads/2016/07/UCB-Unit-3.jpg'}}
          />
        <View style={styles.buttonContainer}>
          <Text style = {styles.optionStyle}> Select Departure Time </Text>
            <Button
              title="Select Departure Time"
              color="transparent"
              onPress={() => this.props.navigation.navigate('DepartureTimes')}
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
    height: 35,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
    margin: 30,
  },
  idStyle: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 20
  },
  optionStyle: {
    fontSize: 25,
    fontWeight: "bold",
    position: "absolute",
    textAlign: "center",
    justifyContent: "center",
    color: "white",
  },
});

export default Unit3Screen;
