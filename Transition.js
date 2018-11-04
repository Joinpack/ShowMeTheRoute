/*
Recommendation generates a WALK recommendation based
upon current location and general departure time.
*/

import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';


class TransitionScreen extends React.Component {
  static navigationOptions = {
    title: 'Generate Location',
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="grey" />
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
});

export default TransitionScreen;
