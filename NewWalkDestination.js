/*
NewWalkDestination solicits user input destination data in order to create a NEW WALK.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class NewWalkScreenDestination extends React.Component {
  constructor(props) {
     super(props);
     this.state = { text: '' };
  }

  render() {
     return (
       <View style = {styles.container}>
         <TextInput
           style={{height: 500, textAlign: 'center', fontSize: 30}}
           placeholder="What is your destination?"
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
         />
         <View style = {styles.buttonContainer}>
           <Button
             title="Next"
             color="white"
             onPress={() => this.props.navigation.navigate('Departure')}
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
  },
  buttonContainer: {
    marginBottom: 100,
    width: 100,
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

export default NewWalkScreenDestination;
