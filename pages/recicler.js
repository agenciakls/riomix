
import React from 'react'
import { View, StyleSheet, Platform, Image, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../src/modules/header';

import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function reciclerIndividual() {

    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Recolhimento</Text>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
function reciclerGeral() {

    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Recolhimento</Text>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
function reciclerGrafico() {

    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Recolhimento</Text>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
function reciclerPCI() {

    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Recolhimento</Text>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
function reciclerMain({ navigation }) {
    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Recolhimento</Text>

                        <View style={styles.containerRecolhimento}>
                            <View style={styles.boxIcones}>
                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('Recolhimento Individual')}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/individual.png')} />
                                    <Text style={styles.textIcons}>BSC Individual</Text>
                                </Pressable>

                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('BSC Geral')}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/geral.png')} />
                                    <Text style={styles.textIcons}>BSC Geral</Text>
                                </Pressable>

                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('Gráfico')}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/graficos.png')} />
                                    <Text style={styles.textIcons}>Gráfico</Text>
                                </Pressable>

                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('PCI')}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/pcis.png')} />
                                    <Text style={styles.textIcons}>PCIs</Text>
                                </Pressable>
                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default class Recicler extends React.Component {

    render() {
        return (
            <Stack.Navigator initialRouteName="Recolhimento">
                <Stack.Screen name="Recolhimento" component={reciclerMain}  />
                <Stack.Screen name="Recolhimento Individual" component={reciclerIndividual}  />
                <Stack.Screen name="BSC Geral" component={reciclerGeral}  />
                <Stack.Screen name="Gráfico" component={reciclerGrafico}  />
                <Stack.Screen name="PCI" component={reciclerPCI}  />
            </Stack.Navigator>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
    boxContainer: {
        padding: 15
    },
    titlePage: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#198942'
    },

    containerRecolhimento: {
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
    },
    boxIcones: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxIconesRecolhimento: {
        flexBasis: '45%',
        backgroundColor: '#1F265B',
        margin: 5,
        paddingVertical: 10,
        borderRadius: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imagesIcones: {
        marginVertical: 10,
        width: 50,
        height: 50,
    },
    textIcons: {
        fontSize: 16,
        textAlign: 'center',
        color: '#efefef',
        paddingVertical: 3,
    },

});