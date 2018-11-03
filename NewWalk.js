/*
NewWalk solicits user input in order to create a NEW WALK.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class NewWalkScreen extends React.Component {
  constructor(props) {
     super(props);
     this.state = { text: '' };
  }

  render() {
     return (
       <TextInput
         style={{height: 40}}
         placeholder="What is your current location?"
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
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
    width: 225,
    height: 125,
    backgroundColor: 'black',
    flexDirection: 'row',
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

export default NewWalkScreen;
