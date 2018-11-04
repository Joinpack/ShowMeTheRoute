import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class PurpleScreen extends React.Component {
  static navigationOptions = {
    title: 'Pack Sequoia',
  };

  constructor(props) {
    super(props);
    this.state = {username: ''};
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default PurpleScreen;
