/*
Final screen before uploading to Firebase. Redirects to Existing Walks screen once
user hits confirm.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class Confirmation extends React.Component {
  static navigationOptions = {
    title: 'Confirmation',
  };

  render() {
     return (
       <View style = {styles.container}>
       <Text>Please confirm the fields below</Text>
         <View style = {styles.buttonContainer}>
           <Button
             title="Confirm"
             color="white"
             onPress={() => this.props.navigation.navigate('Home')}
           />
         </View>
      </View>

     );
   }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonContainer: {
    marginBottom: 100,
    width: 75,
    height: 40,
    backgroundColor: 'black',
    flexDirection: 'row',
    borderRadius: 25,
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

export default Confirmation;
