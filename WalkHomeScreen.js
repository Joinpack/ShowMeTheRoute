/*
WalkHomeScreen displays two buttons:
  CREATE NEW WALK: Allows user to create a NEW WALK.
  JOIN EXISTING WALKS: Allows a user to join an EXISTING WALK.
*/

import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class WalkHomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.homeScreenText}> Start or Join a Walk </Text>
        <Button
          title="Go to Authentication"
          onPress={() => this.props.navigation.navigate('Authentication')}
        />
      </View>
    );
  }
};

export default WalkHomeScreen;
