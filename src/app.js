import React, { Component } from 'react';
import {Text, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import API from '../utils/api';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import Search from './sections/containers/search';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Movie from './screens/containers/movie';

class AppLayout extends Component {
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
        if(this.props.selectedMovie)
        {
            return <Movie />
        }
        return (
            <ScrollView>
                <Home>
                <Header>
                    <Text>AC</Text>
                </Header>
                <Search></Search>
                <CategoryList/>
                <SuggestionList/>
                </Home>
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(AppLayout);