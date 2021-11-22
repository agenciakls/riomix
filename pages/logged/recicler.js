
import * as React from 'react'
import { View, StyleSheet, Platform, Image, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../../src/modules/header';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

import { StatusBar, Dimensions } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const dataGraphic = {
labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
datasets: [
    {
    data: [20, 45, 28, 80, 99, 43]
    }
]
};

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
                            <View style={geral.InfoBoxArea}>
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
                            <View style={geral.infoBoxImg}>
                                <Image source={require('../../assets/icons/riomix-cinza.png')} />
                            </View>
                        </View>

                        
                        <View style={geral.boxSingle}>
                            <View style={geral.InfoBoxArea}>
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
                            <View style={geral.infoBoxImg}>
                                <Image source={require('../../assets/icons/carteira-cinza.png')} />
                            </View>
                        </View>

                        
                        <View style={geral.boxSingle}>
                            <View style={geral.InfoBoxArea}>
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
                            <View style={geral.infoBoxImg}>
                                <Image source={require('../../assets/icons/home-cinza.png')} />
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
            style={grafico.container}
        >
            <SafeAreaView
                style={grafico.safearea}
            >
                
                <ScrollView>
                    <View style={grafico.boxContainer}>
                        <Text style={grafico.titlePage}>Recolhimento</Text>
                        <BarChart
                        style={{
                        marginVertical: 8,
                        borderRadius: 5,
                        }}
                        data={dataGraphic}
                        width={Dimensions.get("window").width - 30}
                        height={220}
                        yAxisLabel="R$ "
                        yAxisSuffix="k"
                        chartConfig={{
                            backgroundColor: "#1F265B",
                            backgroundGradientFrom: "#1F265B",
                            backgroundGradientTo: "#3F467B",
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 5
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#198942"
                            }
                        }}
                        />
                        

                        {/* <LineChart
                            data={dataGraphic}
                            width={Dimensions.get("window").width - 30} // from react-native
                            height={220}
                            yAxisLabel="R$ "
                            yAxisSuffix="k"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: "#1F265B",
                                backgroundGradientFrom: "#1F265B",
                                backgroundGradientTo: "#3F467B",
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 5
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#198942"
                                }
                            }}
                            bezier
                            style={{
                            marginVertical: 8,
                            borderRadius: 5,
                            }}
                        />
                        */}
                        <View>
                            <View style={grafico.areaDados}>                               
                                <View style={grafico.viewImage}>
                                    <Image style={grafico.imagesIcones} source={require('../../assets/icons/geral-gray.png')} />
                                </View>
                                <View>
                                    <Text style={grafico.titleData}>150 casas</Text>
                                    <Text style={grafico.subtitleData}>Casas Protegidas</Text>
                                </View>
                            </View>
                            <View style={grafico.areaDados}>                           
                                <View style={grafico.viewImage}>
                                    <Image style={grafico.imagesIcones} source={require('../../assets/icons/home-gray.png')} />
                                </View>
                                <View>
                                    <Text style={grafico.titleData}>150 casas</Text>
                                    <Text style={grafico.subtitleData}>Casas Protegidas</Text>
                                </View>
                            </View>
                            <View style={grafico.areaDados}>                           
                                <View style={grafico.viewImage}>
                                    <Image style={grafico.imagesIcones} source={require('../../assets/icons/carteira-gray.png')} />
                                </View>
                                <View>
                                    <Text style={grafico.titleData}>150 casas</Text>
                                    <Text style={grafico.subtitleData}>Casas Protegidas</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
function reciclerPCI() {

    return (
        <View
            style={pci.container}
        >
            <SafeAreaView
                style={pci.safearea}
            >
                
                <ScrollView>
                    <View style={pci.boxContainer}>
                        <Text style={pci.titlePage}>Recolhimento</Text>
                        <View style={pci.areaPci}>
                            <Text style={pci.titleSection}>Riomix Celumassa</Text>
                            <Text style={pci.subtitleSection}>Palestras de Conscientização e Incentivo</Text>
                            <Text style={pci.infoContact}>Palestra na Sede da Riomix, no dia 20 de Agosto de 2021, com o tema "PES - PROGRAMA DE EMBOÇO SOCIAL". </Text>
                            <Text style={pci.infoContact}>INSCREVA-SE AGORA!</Text>
                        </View>             
                        <View style={pci.areaCenterButton}>
                            <Pressable style={pci.buttonMain}>
                                <Text style={pci.buttonMainTitle}>Envia Mensagem</Text>
                            </Pressable>
                        </View>
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
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/individual.png')} />
                                    <Text style={styles.textIcons}>BSC Individual</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
        infoBoxImg: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
    titleSingle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F265B'
    },
    areaData: {
        marginVertical: 5,
        justifyContent: 'flex-start',
        marginVertical: 30,
    },
        singleData: {
            fontSize: 30,
            paddingRight: 10,
            color: '#198942',
        },

    listDados: {
        marginVertical: 15,
        
    },
        singleDados: {
            justifyContent: 'flex-start',
            flexDirection: 'row',
            paddingVertical: 5,
        },
            infoDados: {
                fontWeight: 'bold',
                color: '#808080',
                marginRight: 15,
            },
            infoDadosVerde: {
                fontWeight: 'bold',
                color: '#198942',
            },

});

const pci = StyleSheet.create({
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
    areaPci: {
        marginVertical: 15
    },
    boxSingle: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
        infoBoxImg: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
    titleSingle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F265B'
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

                
    titleSection: {
        fontSize: 18,
        color: '#1F265B',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subtitleSection: {
        fontSize: 16,
        color: '#1F265B',
        marginBottom: 10,
    },
    infoContact: {
        fontSize: 16,
        color: '#808080',
        marginBottom: 15, 
    },
    textContact: {
        fontSize: 16,
        color: '#808080',
    },
});



const grafico = StyleSheet.create({
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
    areaPci: {
        marginVertical: 15
    },
    boxSingle: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
        infoBoxImg: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
    titleSingle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F265B'
    },
    areaDados: {
        marginVertical: 15,
        flexDirection: 'row',
    },
    viewImage: {
        marginRight: 15,
        marginBottom: 10,
    },
    imagesIcones: {

    },
    titleData: {
        fontSize: 18,
        color: '#808080',
        fontWeight: 'bold',
    },
    subtitleData: {
        fontSize: 14,
        color: '#808080',
    },
});