
import React from 'react'
import { View, StyleSheet, Platform, Image, Text, ScrollView, SafeAreaView } from 'react-native'
import Header from '../src/modules/header';

import {StatusBar} from 'react-native';


export default class Recicler extends React.Component {
    
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
                        <Text style={styles.titlePage}>Recolhimento</Text>

                        <View style={styles.containerRecolhimento}>
                            <View style={styles.boxIcones}>
                                <View style={styles.boxIconesRecolhimento}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/individual.png')} />
                                    <Text style={styles.textIcons}>BSC Individual</Text>
                                </View>
                                
                                <View style={styles.boxIconesRecolhimento}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/geral.png')} />
                                    <Text style={styles.textIcons}>BSC Geral</Text>
                                </View>
                                
                                <View style={styles.boxIconesRecolhimento}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/graficos.png')} />
                                    <Text style={styles.textIcons}>Gráfico</Text>
                                </View>
                                
                                <View style={styles.boxIconesRecolhimento}>
                                    <Image style={styles.imagesIcones} source={require('../assets/icons/pcis.png')} />
                                    <Text style={styles.textIcons}>PCIs</Text>
                                </View>
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