import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

class Header extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: 'blue' ,marginTop:50}}>
        <Text style={styling.header}>D2C</Text>
      </View>
    );
  }
}
const styling = StyleSheet.create({
  header: {
    marginLeft: 20,
    alignItems: 'center',
    padding: 10,
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
export default Header;
