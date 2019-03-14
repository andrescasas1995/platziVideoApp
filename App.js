/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image 
          source={{uri: 'https://pl.scdn.co/images/pl/default/8d275f811aba521fe29977b97b40b9bc23efe710'}} 
          style={{width: 200, height: 180}}
        />
        {/* <Image source={require('./assest/image.png')} /> */}
        <Text style={styles.welcome}>Welcome shadow hunters!</Text>
        <Text style={styles.instructions}>Angelic Blood.</Text>
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
