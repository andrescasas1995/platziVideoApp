import React from 'react';
import {
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Text
} from 'react-native'

function FullScreen(props) {
    return (
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor="#33AEFF"
            hitSlop={{
                left: 5,
                top: 5,
                bottom: 5,
                right: 5
            }}>
            {
                props.fullScreen ? <Text style={styles.button}>Normal</Text>
                    :
                    <Text style={styles.button}>Full</Text>
            }
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 25,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }
})

export default FullScreen