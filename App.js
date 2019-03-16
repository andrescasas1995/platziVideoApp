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
import CategoryList from './src/videos/containers/category-list';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(1);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({
      suggestionList: movies,
      categoryList: categories
    })
  }
  render() {
    return (
      <Home>
        <Text>Header</Text>
        <Text>Buscador</Text>
        <CategoryList
        list= {this.state.categoryList}
        />
        <SuggestionList
        list= {this.state.suggestionList}
        />
      </Home>      
    );
  }
}