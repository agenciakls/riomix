
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, ScrollView, Text, Pressable, TextInput } from 'react-native'
import Header from '../src/modules/header';

import {StatusBar} from 'react-native';
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';

export default class Contact extends React.Component {
    
    render() {
        return(
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.safearea}
                >
                    <Header click={this.props.navigation.openDrawer} />
                    <ScrollView>
                        <View style={styles.boxContainer}>
                            <Text style={styles.titlePage}>CONTATO</Text>
                            <View></View>
                            <View style={styles.boxForm}>
                                <Text style={styles.titleForm}>Entrar em sua conta</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nome"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-mail"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Telefone"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Mensagem"
                                />
                                <View style={styles.areaCenterButton}>
                                    <Pressable style={styles.buttonMain}>
                                        <Text style={styles.buttonMainTitle}>Envia Mensagem</Text>
                                    </Pressable>
                                </View>
                            </View>
                        
                        </View>
                    </ScrollView>
                    
                </SafeAreaView>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        display: "flex",
        paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    boxContainer: {
        padding: 15
    },
    aboutVideo: {
        flex: 1,
        height: 220,
    },
    titlePage: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#198942',
        marginBottom: 10,
    },
    
    input: {
        marginVertical: 10,
        borderColor: '#efefef',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    textForgot: {
        color: '#1F265B',
        textAlign: 'right',
        marginVertical: 15,
        fontSize: 13,
    },
    areaCenterButton: {
        display: 'flex',
    },
    buttonMain: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#1F265B',
        borderRadius: 7,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
    },
        buttonMainTitle: {
            textAlign: 'center',
            color: '#efefef',
            fontSize: 17,
        },
        
});