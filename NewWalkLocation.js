/*
NewWalkLocation solicits user input location data in order to create a NEW WALK.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, PickerIOS } from 'react-native';


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
           placeholder="Where are you closest to?"
           style={{height: 500, width: 1000, textAlign: 'center', fontSize: 30}}
           onChangeText={(location) => this.setState({location})}
           value={this.state.location}
         />
         <View style={{width: 300, height: 500, marginBottom: 10}}>
           <Picker selectedValue={this.state.location}
                      onValueChange={(location) => this.setState({location})}>
              <Picker.Item key="Dwinelle Hall" label="Dwinelle Hall" value="Dwinelle Hall" />
              <Picker.Item key="VLSB" label="VLSB" value="VLSB" />
              <Picker.Item key="Li Ka Shing Center" label="Li Ka Shing Center" value="Li Ka Shing Center" />
              <Picker.Item key="Soda Hall" label="Soda Hall" value="Soda Hall" />
              <Picker.Item key="Doe Library" label="Doe Library" value="Doe Library" />
              <Picker.Item key="Moffitt Library" label="Moffitt Library" value="Moffitt Library" />
              <Picker.Item key="Engineering Library" label="Engineering Library" value="Engineering Library" />
              <Picker.Item key="Business Library" label="Business Library" value="Business Library" />
              <Picker.Item key="Chemistry Library" label="Chemistry Library" value="Chemistry Library" />
              <Picker.Item key="California Memorial Stadium" label="California Memorial Stadium" value="California Memorial Stadium" />

            </Picker>
          </View>
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
