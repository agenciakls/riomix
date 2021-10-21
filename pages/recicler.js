
import React from 'react'
import { View, StyleSheet, Platform, Image, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../src/modules/header';

import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function reciclerIndividual() {

    return (
        <View
            style={individual.container}
        >
            <SafeAreaView
                style={individual.safearea}
            >
                
                <ScrollView>
                    <View style={individual.boxContainer}>
                        <Text style={individual.titlePage}>Recolhimento</Text>
                        


                        
                        <View style={individual.boxSingle}>
                            <Text style={individual.titleSingle}>MP CONSTRUTORA - Jardim Bougainville</Text> 
                            <View style={individual.areaData}>
                                <Text style={individual.singleData}>Data da Compra: 15/05/21</Text> 
                                <Text style={individual.singleData}>Data da Devolução: 22/05/21</Text> 
                            </View>

                            
                            <View style={individual.listDados}>
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>20.705</Text> 
                                    <Text style={individual.infoDados}>Acumulado de Vendas</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>15.185</Text> 
                                    <Text style={individual.infoDados}>Acumulado Retorno</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>0,733</Text> 
                                    <Text style={individual.infoDados}>Coeficiente de Devolução</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>3,04</Text> 
                                    <Text style={individual.infoDados}>Protetômetro</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDadosVerde}> R$ 754,60 </Text> 
                                    <Text style={individual.infoDadosVerde}>Economia no Mês</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDadosVerde}> R$ 10.629,50</Text> 
                                    <Text style={individual.infoDadosVerde}>Acumulado de Vendas</Text> 
                                </View> 
                            </View>
                        </View>

                        <View style={individual.boxSingle}>
                            <Text style={individual.titleSingle}>MP CONSTRUTORA - Jardim Bougainville</Text> 
                            <View style={individual.areaData}>
                                <Text style={individual.singleData}>Data da Compra: 15/05/21</Text> 
                                <Text style={individual.singleData}>Data da Devolução: 22/05/21</Text> 
                            </View>

                            
                            <View style={individual.listDados}>
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>20.705</Text> 
                                    <Text style={individual.infoDados}>Acumulado de Vendas</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>15.185</Text> 
                                    <Text style={individual.infoDados}>Acumulado Retorno</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>0,733</Text> 
                                    <Text style={individual.infoDados}>Coeficiente de Devolução</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>3,04</Text> 
                                    <Text style={individual.infoDados}>Protetômetro</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDadosVerde}> R$ 754,60 </Text> 
                                    <Text style={individual.infoDadosVerde}>Economia no Mês</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDadosVerde}> R$ 10.629,50</Text> 
                                    <Text style={individual.infoDadosVerde}>Acumulado de Vendas</Text> 
                                </View> 
                            </View>
                        </View>

                        <View style={individual.boxSingle}>
                            <Text style={individual.titleSingle}>MP CONSTRUTORA - Jardim Bougainville</Text> 
                            <View style={individual.areaData}>
                                <Text style={individual.singleData}>Data da Compra: 15/05/21</Text> 
                                <Text style={individual.singleData}>Data da Devolução: 22/05/21</Text> 
                            </View>

                            
                            <View style={individual.listDados}>
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>20.705</Text> 
                                    <Text style={individual.infoDados}>Acumulado de Vendas</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>15.185</Text> 
                                    <Text style={individual.infoDados}>Acumulado Retorno</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>0,733</Text> 
                                    <Text style={individual.infoDados}>Coeficiente de Devolução</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDados}>3,04</Text> 
                                    <Text style={individual.infoDados}>Protetômetro</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDadosVerde}> R$ 754,60 </Text> 
                                    <Text style={individual.infoDadosVerde}>Economia no Mês</Text> 
                                </View> 
                                <View style={individual.singleDados}>
                                    <Text style={individual.infoDadosVerde}> R$ 10.629,50</Text> 
                                    <Text style={individual.infoDadosVerde}>Acumulado de Vendas</Text> 
                                </View> 
                            </View>
                        </View>



                        
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
                        

                        <View style={geral.boxSingle}>
                            <Text style={geral.titleSingle}>Julho de 2021</Text> 
                            <View style={geral.areaData}>
                                <Text style={geral.singleData}>300</Text> 
                                <Text style={geral.singleData}>Devoluções</Text> 
                            </View>

                            
                            <View style={geral.listDados}>
                                <View style={geral.singleDados}>
                                    <Text style={geral.infoDados}>156115</Text> 
                                    <Text style={geral.infoDados}>desde Abril de 2017</Text> 
                                </View> 
                            </View>
                        </View>
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


const individual = StyleSheet.create({
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
    boxSingle: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
    },
    
    titleSingle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F265B'
    },
    areaData: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'flex-start',
    },
        singleData: {
            fontSize: 11,
            paddingRight: 10,
        },

    listDados: {
        marginVertical: 15,
        
    },
        singleDados: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomColor: '#D2D2D2',
            borderBottomWidth: 2,
            paddingVertical: 5,
        },
            infoDados: {
                fontWeight: 'bold',
                color: '#808080',
            },
            infoDadosVerde: {
                fontWeight: 'bold',
                color: '#198942',
            },

});


const geral = StyleSheet.create({
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
    boxSingle: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
    },
    
    titleSingle: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F265B'
    },
    areaData: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'flex-start',
    },
        singleData: {
            fontSize: 11,
            paddingRight: 10,
        },

    listDados: {
        marginVertical: 15,
        
    },
        singleDados: {
            justifyContent: 'space-between',
            flexDirection: 'row',
            borderBottomColor: '#D2D2D2',
            borderBottomWidth: 2,
            paddingVertical: 5,
        },
            infoDados: {
                fontWeight: 'bold',
                color: '#808080',
            },
            infoDadosVerde: {
                fontWeight: 'bold',
                color: '#198942',
            },

});