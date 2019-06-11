import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

function Header(props){
    return (
        <View>
            <SafeAreaView>
                <View style={styles.container}>
                    <Image 
                        source={{uri:'https://wambamzamzam.weebly.com/uploads/4/9/5/2/49522507/873167751.png'}}
                        style={styles.logo} />
                    <View style={styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 90,
        height: 50,
        resizeMode: 'contain'
    },
    container: {
        padding:5,
        backgroundColor: '#E8E8E8',
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
})

export default Header;