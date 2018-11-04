/*
Memorial Stadium detected!
*/

import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


class MemorialStadiumScreen extends React.Component {
  static navigationOptions = {
    title: 'Location Detected',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.idStyle}> [ Memorial Stadium ] </Text>
          <Image
            borderColor = "black"
            borderWidth = "10"
            borderRadius = "5"
            style={{width: 250, height: 250}}
            source={{uri: 'http://3.bp.blogspot.com/-EMHguk1Eu80/UqCasx5KnJI/AAAAAAAAHDA/9RAQOiV0q_I/s1600/5555.jpg'}}
          />
        <View style={styles.buttonContainer}>
          <Text style = {styles.optionStyle}> View Recommended </Text>
            <Button
              title="Recommendationed Walks"
              color="transparent"
              onPress={() => this.props.navigation.navigate('RecommendedOptions')}
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

export default MemorialStadiumScreen;
