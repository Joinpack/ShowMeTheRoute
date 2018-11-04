/*
NewWalkDeparture solicits user input departure data in order to create a NEW WALK.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class NewWalkScreenDeparture extends React.Component {
  static navigationOptions = {
    title: 'Select Time',
  };

  constructor(props) {
     super(props);
     this.state = { when: '' };
  }

  render() {
     return (
       <View style = {styles.container}>
         <TextInput
           style={{height: 500, width: 1000, textAlign: 'center', fontSize: 30}}
           placeholder="When are you leaving?"
           onChangeText={(when) => this.setState({when})}
           value={this.state.when}
         />
         <View style = {styles.buttonContainer}>
           <Button
             title="Submit"
             color="white"
             onPress={() => this.props.navigation.navigate('Existing')}
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
    backgroundColor: 'grey',
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

export default NewWalkScreenDeparture;
