
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Platform, Image, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../modules/header';
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

import AuthContext from '../routes/auth';

import api from '../routes/api'



function reciclerCertificados({ navigation }) {


    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadRecicler() {
            const recicler = await api.get('/reciclerindividual', {
                params: {
                    client_id: user.client_id
                }
            });
            setData(recicler.data);
        }
        loadRecicler();
    }, []);
    return (
        <View
            style={individual.container}
        >
            <SafeAreaView
                style={individual.safearea}
            >

                <Header click={navigation.openDrawer} />
                <ScrollView>
                    <View style={individual.boxContainer}>
                        <Text style={individual.titlePage}>Certificados</Text>

                        {data.map((singleData) => {
                            return (
                                <View style={individual.boxSingle} key={singleData.id}>
                                    <Text style={individual.titleSingle}>{singleData.client_name}</Text>
                                    <View style={individual.areaData}>
                                        <Text style={individual.singleData}>Data da Compra: {singleData.date_buy}</Text>
                                        <Text style={individual.singleData}>Data da Devolução: {singleData.date_devolution}</Text>
                                    </View>
                                </View>
                            )
                        })

                        }

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
function reciclerGeral({ navigation }) {



    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadRecicler() {
            const recicler = await api.get('/reciclergeral', {
                params: {
                    client_id: user.client_id
                }
            });
            setData(recicler.data);
        }
        loadRecicler();
    }, []);
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
                        <View>
                            <View style={geral.boxSingle}>
                                <View style={geral.InfoBoxArea}>
                                    <Text style={geral.titleSingle}>Julho de 2021</Text>
                                    <View style={geral.areaData}>
                                        <Text style={geral.singleData}>{data.devolucoes}</Text>
                                        <Text style={geral.singleData}>Devoluções</Text>
                                    </View>


                                    <View style={geral.listDados}>
                                        <View style={geral.singleDados}>
                                            <Text style={geral.infoDados}>{data.devolucoes}</Text>
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
                                        <Text style={geral.singleData}>{data.economia}</Text>
                                        <Text style={geral.singleData}>Economia no canteiro</Text>
                                    </View>


                                    <View style={geral.listDados}>
                                        <View style={geral.singleDados}>
                                            <Text style={geral.infoDados}>{data.economia}</Text>
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
                                        <Text style={geral.singleData}>{data.familias}</Text>
                                        <Text style={geral.singleData}>Famílias Beneficiadas</Text>
                                    </View>


                                    <View style={geral.listDados}>
                                        <View style={geral.singleDados}>
                                            <Text style={geral.infoDados}>{data.familias}</Text>
                                            <Text style={geral.infoDados}>desde Abril de 2017</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={geral.infoBoxImg}>
                                    <Image source={require('../../assets/icons/home-cinza.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
function reciclerGrafico({ navigation }) {
    const dataGraphic = {
        labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"],
        datasets: [
            {
                data: [0, 0, 0, 0, 0, 0]
            }
        ]
    };

    const { user } = useContext(AuthContext);
    const [graphic, setGraphic] = useState(dataGraphic);
    const [data, setData] = useState({});

    useEffect(() => {
        async function loadRecicler() {
            const recicler = await api.get('/reciclergrafico', {
                params: {
                    client_id: user.client_id
                }
            });

            const graphicCurrent = {
                labels: recicler.data.meses,
                datasets: [
                    {
                        data: recicler.data.recolhimento
                    }
                ]
            };
            if (recicler.data.meses) {

                setGraphic(graphicCurrent);
                setData(recicler.data);
            }
        }
        loadRecicler();
    }, []);
    return (
        <View
            style={grafico.container}
        >
            <SafeAreaView
                style={grafico.safearea}
            >

                <Header click={navigation.openDrawer} />
                <ScrollView>
                    <View style={grafico.boxContainer}>
                        <Text style={grafico.titlePage}>Gráfico de Recolhimento</Text>
                        {/* <BarChart
                        style={{
                        marginVertical: 8,
                        borderRadius: 5,
                        }}
                        data={data}
                        width={Dimensions.get("window").width - 30}
                        height={220}
                        yAxisLabel=""
                        yAxisSuffix=""
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
                        /> */}


                        <LineChart
                            data={graphic}
                            width={Dimensions.get("window").width - 30} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix=""
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

                        <View>
                            <View style={grafico.areaDados}>
                                <View style={grafico.viewImage}>
                                    <Image style={grafico.imagesIcones} source={require('../../assets/icons/geral-gray.png')} />
                                </View>
                                <View>
                                    <Text style={grafico.titleData}>{(data.devolucoes) ? data.devolucoes : 0}</Text>
                                    <Text style={grafico.subtitleData}>Embalagens Recolhidas</Text>
                                </View>
                            </View>
                            <View style={grafico.areaDados}>
                                <View style={grafico.viewImage}>
                                    <Image style={grafico.imagesIcones} source={require('../../assets/icons/home-gray.png')} />
                                </View>
                                <View>
                                    <Text style={grafico.titleData}>{(data.economia) ? data.economia : 0}</Text>
                                    <Text style={grafico.subtitleData}>Economia</Text>
                                </View>
                            </View>
                            <View style={grafico.areaDados}>
                                <View style={grafico.viewImage}>
                                    <Image style={grafico.imagesIcones} source={require('../../assets/icons/carteira-gray.png')} />
                                </View>
                                <View>
                                    <Text style={grafico.titleData}>{(data.familias) ? data.familias : 0} casas</Text>
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
function reciclerPCI({ navigation }) {

    return (
        <View
            style={pci.container}
        >
            <SafeAreaView
                style={pci.safearea}
            >

                <Header click={navigation.openDrawer} />
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
                            <Pressable style={pci.buttonMain} onPress={() => navigation.navigate('Contato')}>
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
                                    <Text style={styles.textIcons}>Certificados</Text>
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
            <Stack.Screen name="Recolhimento" component={reciclerMain} />
            <Stack.Screen name="BSC Mensal" component={reciclerCertificados} />
            <Stack.Screen name="BSC Geral" component={reciclerGeral} />
            <Stack.Screen name="Gráfico" component={reciclerGrafico} />
            <Stack.Screen name="PCI" component={reciclerPCI} />
        </Stack.Navigator>
    );
}
export default Recicler;

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