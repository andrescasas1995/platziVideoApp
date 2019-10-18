import React, { Component } from 'react';
import {Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import API from '../../../utils/api';
import Header from '../../sections/components/header';
import Search from '../../sections/components/search';
import SuggestionList from '../../videos/containers/suggestion-list';
import CategoryList from '../../videos/containers/category-list';
import Movie from '../../screens/containers/movie';

class Home extends Component {
    static navigationOptions = () => {
        return {
            //header: Header
            title: "Inicio"
        }
    }
    async componentDidMount(){
        const categoryList = await API.getMovies();
        this.props.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        });
        
        const suggestionList = await API.getSuggestion(1);
        this.props.dispatch({
            type: 'SET_SUGGESTION_LIST',
            payload: {
                suggestionList
            }
        });
    }
    render() {
        return (
            <ScrollView>
                <Search></Search>
                <CategoryList/>
                <SuggestionList/>
            </ScrollView>
        )
    }
}

export default connect(null)(Home);