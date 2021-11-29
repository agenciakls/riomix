import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class Home extends React.Component {
    render() {
        return(
            <View style={styles.topBar} >
                <Image source={require('./../../assets/logo-white.png')} style={styles.logoImg} />
                <TouchableOpacity style={styles.touchable} onPress={this.props.click}>
                    <FontAwesome5 name="bars" size={26} color="#198942" /> 
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 5,
        backgroundColor: '#1F265B',
    },
    logoImg: {
        width: 70,
        height: 14,
        margin: 10
    },
    touchable: {
        padding: 10
    },
});