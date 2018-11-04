/*
NewWalkLocation solicits user input location data in order to create a NEW WALK.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


class NewWalkScreenLocation extends React.Component {
  static navigationOptions = {
    title: 'Select Location',
  };

  constructor(props) {
     super(props);
     this.state = { location: '' };
  }

  render() {
     return (
       <View style = {styles.container}>
         <TextInput
           placeholder="Where are you?"
           style={{height: 500, width: 1000, textAlign: 'center', fontSize: 30}}
           onChangeText={(location) => this.setState({location})}
           value={this.state.location}
         />
         <View style = {styles.buttonContainer}>
           <Button
             title="Next"
             color="white"
             onPress={() => this.props.navigation.navigate('Destination')}
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

export default NewWalkScreenLocation;
