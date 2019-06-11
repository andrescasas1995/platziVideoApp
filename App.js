/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/home';
import SuggestionList from './src/videos/containers/suggestion-list';
import CategoryList from './src/videos/containers/category-list';
import Header from './src/sections/components/header';
import Player from './src/player/containers/player';
import API from './utils/api';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store,persistor} from './store';

type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: []
  }
  async componentDidMount(){
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    });
    
    const suggestionList = await API.getSuggestion(1);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    });
  }
  render() {
    return (
      <Provider
      store={store}>
        <PersistGate 
        loading={<Text>Cargando...</Text>}
        persistor={persistor}
        >
          <Home>
            <Header>
              <Text>AC</Text>
            </Header>
            <Text>Buscador</Text>
            <Player></Player>
            <CategoryList/>
            <SuggestionList/>
          </Home>
        </PersistGate>
      </Provider>   
    );
  }
}