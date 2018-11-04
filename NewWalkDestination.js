/*
NewWalkDestination solicits user input destination data in order to create a NEW WALK.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Picker, PickerIOS } from 'react-native';


class NewWalkScreenDestination extends React.Component {
  static navigationOptions = {
    title: 'Select Destination',
  };

  constructor(props) {
     super(props);
     this.state = { destination: '' };
  }

  render() {
     return (
       <View style = {styles.container}>
         <TextInput
           style={{height: 500, width: 1000, textAlign: 'center', fontSize: 30}}
           placeholder="What is your closest destination?"
           onChangeText={(destination) => this.setState({destination})}
           value={this.state.destination}
         />
         <View style={{width: 300, height: 500, marginBottom: 10}}>
           <Picker selectedValue={this.state.destination}
                      onValueChange={(destination) => this.setState({destination})}>
              <Picker.Item key="Dorms: Unit 1" label="Dorms: Unit 1" value="Dorms: Unit 1" />
              <Picker.Item key="Dorms: Unit 2" label="Dorms: Unit 2" value="Dorms: Unit 2" />
              <Picker.Item key="Dorms: Unit 3/Blackwell Hall" label="Dorms: Unit 3/Blackwell Hall" value="Dorms: Unit 3/Blackwell Hall" />
              <Picker.Item key="Dorms: Foothill" label="Dorms: Foothill" value="Dorms: Foothill" />
              <Picker.Item key="Dorms: Bowles Hall" label="Dorms: Bowles Hall" value="Dorms: Bowles Hall" />
              <Picker.Item key="Dorms: Channing-Bowditch" label="Dorms: Channing-Bowditch" value="Dorms: Channing-Bowditch" />
              <Picker.Item key="Downtown Berkeley BART" label="Downtown Berkeley BART" value="Downtown Berkeley BART" />
              <Picker.Item key="Northside" label="Northside" value="Northside" />
              <Picker.Item key="Frat Row" label="Frat Row" value="Frat Row" />
              <Picker.Item key="Southside/Other" label="Southside/Other" value="Southside/Other" />

            </Picker>
          </View>
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
    justifyContent: 'space-around',
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
