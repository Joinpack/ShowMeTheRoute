import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

class GoldScreen extends React.Component {
  static navigationOptions = {
    title: 'Pack Honey',
  };
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
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default GoldScreen;
