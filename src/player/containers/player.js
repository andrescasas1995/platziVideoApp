import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Text} from 'react-native';
import Video from 'react-native-video';
import Layout from '../components/layout';
import ControlLayout from '../components/control-layout';
import PlayPause from '../components/play-pause';
import FullScreen from '../components/full-screen';

class Player extends Component {
    state = {
        loading: true,
        paused: false,
        fullScreen: false
    }
    onBuffer = (isBuffering) => {
        this.setState({
            loading: isBuffering
        })
    }
    onLoad = () => {
        this.setState({
            loading: false
        })
    }
    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }
    putFullScreen = () => {
        if (this.state.fullScreen) {
            this.player.dismissFullscreenPlayer();
        }
        else{
            this.player.presentFullscreenPlayer();
        }
        this.setState({
            fullScreen: !this.state.fullScreen
        })
    }
    render(){
        return (
            <Layout 
            loading={this.state.loading} 
            video={
                <Video 
                ref={(ref) => {
                    this.player = ref
                }}
                source={{uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                style={styles.video}
                resizeMode="contain"
                onBuffer={this.onBuffer}
                onLoad={this.onLoad}
                paused={this.state.paused} />                
            }
            loader={
                <ActivityIndicator color="red" />
            }
            controls={
                <ControlLayout>
                    <PlayPause onPress={this.playPause} paused={this.state.paused} />
                    <Text>Progress bar |</Text>
                    <Text>Time left |</Text>
                    <FullScreen onPress={this.putFullScreen} fullScreen={this.state.fullScreen} />
                </ControlLayout>
            }>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0
    }
})

export default Player