/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/home';
import SuggestionList from './src/videos/containers/suggestion-list';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Home>
        <Text>Header</Text>
        <Text>Buscador</Text>
        <Text>Categorias</Text>
        <SuggestionList></SuggestionList>
      </Home>      
    );
  }
}