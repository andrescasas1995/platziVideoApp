import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ActivityIndicator
} from 'react-native';

function Loading(props) {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../assest/angelic.png')}
                style={styles.logo}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginBottom: 10,
        width: 200,
        height:150,
        resizeMode: 'contain'
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Loading;