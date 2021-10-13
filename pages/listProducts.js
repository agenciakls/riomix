
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text, Pressable, Image, ScrollView } from 'react-native'
import Header from '../src/modules/header';

import {StatusBar} from 'react-native';

export default class Products extends React.Component {
    
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
                        <Text style={styles.titlePage}>Nossas linhas</Text>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonLinhas}>
                                    <Text style={styles.buttonLinhasTitle}>VER MAIS</Text>
                                </Pressable>
                            
                            </View>
                        </View>
                        
                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonLinhas}>
                                    <Text style={styles.buttonLinhasTitle}>VER MAIS</Text>
                                </Pressable>
                            
                            </View>
                        </View>
                        
                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonLinhas}>
                                    <Text style={styles.buttonLinhasTitle}>VER MAIS</Text>
                                </Pressable>
                            
                            </View>
                        </View>
                        
                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonLinhas}>
                                    <Text style={styles.buttonLinhasTitle}>VER MAIS</Text>
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
        flex: 1,
        display: "flex",
        paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    boxContainer: {
        padding: 15
    },
    titlePage: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#198942',
        marginBottom: 10,
    },

    containerLinhas: {
        backgroundColor: '#1F265B',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
    },
        linhasBox: {
            flexBasis: '50%'
        },
            linhasTitle: {
                color: '#efefef',
                fontSize: 18,
                fontWeight: '700',
                paddingVertical: 2,
            },
            linhasText: {
                color: '#efefef',
                fontSize: 12
            },
            buttonLinhas: {
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginVertical: 10,
                borderRadius: 3,
                backgroundColor: '#198942',
                width: 100,
                display: 'flex',
                justifyContent: 'center',
            },
                buttonLinhasTitle: {
                    textAlign: 'center',
                    color: '#efefef',
                    fontSize: 10,
                },
        linhasBoxImage: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
            linhasImage: {
                height: 93,
                width: 150,
            },
});