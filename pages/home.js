
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text } from 'react-native'
import Header from '../src/modules/header';

export default class Home extends React.Component {
    render() {
        return(
            <View 
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.safearea}
                >
                    <Header click={this.props.navigation.openDrawer} />
                    <View style={styles.boxContainer}>
                        <View style={styles.boxWelcome}>
                            <Text>Olá, Bem vindo</Text>
                            <Text>Fábio Freitas</Text>
                        </View>
                        
                        <View>
                            <View>
                                <Text>Recolhimento Geral</Text>
                            </View>
                            <View>
                                
                            </View>
                        </View>
                        
                        <View>
                            <Text>Olá, Bem vindo</Text>
                            <Text>Fábio Freitas</Text>
                        </View>
                    </View>
                </SafeAreaView>

                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        paddingTop: Platform.OS === 'android' ? 35 : 0,
    },
    boxContainer: {
        padding: 20
    },
    boxWelcome: {
        flexDirection: 'row',
        marginBottom: 15,
    }
});