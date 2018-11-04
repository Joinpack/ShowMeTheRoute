import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import logIn from './Login';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.homeScreenText}> Start or Join a Walk </Text>
          <View style = {styles.buttonSpace}>
            <Button
              title="Authentication"
              color ='black'
              onPress={() => this.props.navigation.navigate('WalkHome')}
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
  homeScreenText: {
    backgroundColor: 'gray',
    width: 375,
    height: 40,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonSpace: {
    marginTop: 20,
    color: 'black',
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,

  },
});

export default HomeScreen;
