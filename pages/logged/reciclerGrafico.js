
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../modules/header';

import styles from './style-recicler-grafico';

import { LineChart } from "react-native-chart-kit";

import { Dimensions } from 'react-native';

import AuthContext from '../routes/auth';
import api from '../routes/api'

function ReciclerGrafico({ navigation }) {
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
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >

                <Header click={navigation.openDrawer} />
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Gráfico de Recolhimento</Text>
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
                            <View style={styles.areaDados}>
                                <View style={styles.viewImage}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/geral-gray.png')} />
                                </View>
                                <View>
                                    <Text style={styles.titleData}>{(data.devolucoes) ? data.devolucoes : 0}</Text>
                                    <Text style={styles.subtitleData}>Embalagens Recolhidas</Text>
                                </View>
                            </View>
                            <View style={styles.areaDados}>
                                <View style={styles.viewImage}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/home-gray.png')} />
                                </View>
                                <View>
                                    <Text style={styles.titleData}>{(data.economia) ? data.economia : 0}</Text>
                                    <Text style={styles.subtitleData}>Economia</Text>
                                </View>
                            </View>
                            <View style={styles.areaDados}>
                                <View style={styles.viewImage}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/carteira-gray.png')} />
                                </View>
                                <View>
                                    <Text style={styles.titleData}>{(data.familias) ? data.familias : 0} casas</Text>
                                    <Text style={styles.subtitleData}>Casas Protegidas</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
export default ReciclerGrafico;