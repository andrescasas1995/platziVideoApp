import React, { Component } from 'react';
import {Animated} from 'react-native';
import MovieLayout from '../components/movie';
import Player from '../../player/containers/player';
import Header from '../../sections/components/header';
import Close from '../../sections/components/close';
import Details from '../../videos/components/details';
import {connect} from 'react-redux';

class Movie extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // header: (
            //     <Header>
            //         <Close onPress={() => {navigation.goBack()}} />
            //     </Header>
            // )
        }
    }
    state = {
        opacity: new Animated.Value(0)
    }
    closeVideo = () => {
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: null
            }
        });
    }
    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue:1,
                duration: 1000
            }
        ).start();
    }
    render() {
        return (
            <Animated.View
                style={{
                    flex: 1,
                    opacity: this.state.opacity
                }}
            >
                <MovieLayout>
                    {/* <Player></Player> */}
                    <Details
                        {...this.props.movie}
                    >                    
                    </Details>
                </MovieLayout>
            </Animated.View>
        )
    }
}

function mapStateToProps(state) {
    return {
        movie: state.videos.selectedMovie
    }
}

export default connect(mapStateToProps)(Movie);