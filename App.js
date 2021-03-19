import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Catering from './Screen/Catering';
import Decorator from './Screen/Decorator';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import { createSwitchNavigator, createAppContainer } from 'react-navigation';
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const AppNavigator = createBottomTabNavigator({
 CateringScreen : {screen:Catering},
 DecoratorScreen : {screen : Decorator}
});
const AppContainer = createAppContainer(AppNavigator);
