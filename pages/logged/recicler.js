
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Platform, Image, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../modules/header';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import AuthContext from '../routes/auth';

import styles from './style-recicler';

import ReciclerMensal from './reciclerMensal';
import ReciclerGeral from './reciclerGeral';
import ReciclerGrafico from './reciclerGrafico';
import ReciclerPCI from './reciclerPCI';
import ReciclerMensalPDF from './reciclerMensalPDF';

function ReciclerMain({ navigation }) {

    const { user } = useContext(AuthContext);

    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >

                <Header click={navigation.openDrawer} />

                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Recolhimento</Text>

                        <View style={styles.containerRecolhimento}>
                            <View style={styles.boxIcones}>
                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('BSC Mensal')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/individual.png')} />
                                    <Text style={styles.textIcons}>BSC Mensal</Text>
                                </Pressable>

                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('BSC Geral')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/geral.png')} />
                                    <Text style={styles.textIcons}>BSC Geral</Text>
                                </Pressable>

                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('Gráfico')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/graficos.png')} />
                                    <Text style={styles.textIcons}>Gráfico</Text>
                                </Pressable>

                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('PCI')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/pcis.png')} />
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

const Recicler = () => {
    return (
        <Stack.Navigator initialRouteName="Recolhimento"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Recolhimento" component={ReciclerMain} />
            <Stack.Screen name="BSC Mensal" component={ReciclerMensal} />
            <Stack.Screen name="BSC Mensal PDF" component={ReciclerMensalPDF} />
            <Stack.Screen name="BSC Geral" component={ReciclerGeral} />
            <Stack.Screen name="Gráfico" component={ReciclerGrafico} />
            <Stack.Screen name="PCI" component={ReciclerPCI} />
        </Stack.Navigator>
    );
}
export default Recicler;




