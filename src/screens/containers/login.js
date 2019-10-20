import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {
    handleLogin = () => {
        const token = 'ABCDEFGHIJK';
        this.props.dispatch({
            type: 'SET_USER',
            payload: {
                token,
                username: 'AndresCasas' + Math.floor((Math.random() * 10) + 1)
            }
        })
        this.props.navigation.navigate('Loading');
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../../../assest/angelic.png')}
                    style={styles.logo}
                />
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre de usuario"
                        placeholderTextColor="white"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="white"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        onPress={this.handleLogin}
                        style={styles.button}
                    >
                        <Text style={styles.buttonLabel}>Iniciar Sesión</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    logo: {
        marginBottom: 10,
    },
    input: {
        marginBottom: 10,
        width: 250,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#838383',
        color: 'white',
    },
    button: {
        backgroundColor: '#99c84a',
        borderRadius: 5,
    },
    buttonLabel: {
        color: 'white',
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default connect(null)(Login)