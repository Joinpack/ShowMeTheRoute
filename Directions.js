import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function getDirections(instance) {
  fetch('https://route.api.here.com/routing/7.2/calculateroute.json?app_id=sfb5BL0QpbQkDkFxN5Gz&app_code=FNFEHF7nm_XpcuxUzkg98A&mode=fastest;pedestrian;traffic:disabled', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: 'waypoint0=geo!37.872574,-122.2629367&waypoint1=geo!37.8755939,-122.2609752',
  }).then(function(data) {
    instance.setState({
      instructions: JSON.parse(data._bodyInit).response.route[0].leg[0].maneuver
    });
  });
};

class Directions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructions: [],
      destination: ''
    };
  }
  componentDidMount() {
    getDirections(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> Directions to {this.state.destination} </Text>
        <View>
          {this.state.instructions.map(function(item) {
            var instr = item.instruction.replace(/<\/?[^>]+(>|$)/g, '');
            return (<Text key={item.id}> { instr } </Text>);
          })}
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
    justifyContent: 'center',
  },
});

export default Directions;
