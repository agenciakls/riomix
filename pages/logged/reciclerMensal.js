
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../modules/header';

import styles from './style-recicler-mensal';

import AuthContext from '../routes/auth';
import api from '../routes/api'

function ReciclerMensal({ navigation }) {


    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadRecicler() {
            const recicler = await api.get('/reciclermensal', {
                params: {
                    client_id: user.client_id
                }
            });
            setData(recicler.data[0]);
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
                        <Text style={styles.titlePage}>BSC</Text>
                        {data.map((singleData) => {
                            return (
                                <View style={styles.boxSingle} key={singleData.name}>
                                    <Text style={styles.titleSingle}>{singleData.name}</Text>
                                    <View style={styles.areaData}>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Compra:</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.vendas_mes}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Compra (Acumulado):</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.vendas_acumulado}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.areaData}>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Devolução:</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.devolucoes_mes}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Devolução (Acumulado):</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.devolucoes_acumulado}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.areaData}>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Economia (Mês):</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.economia_mes}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Economia (Acumulado):</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.economia_acumulado}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.areaData}>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Família(s):</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.familias}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Protetometro:</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.protetometro}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View style={styles.areaData}>
                                        <View style={styles.singleData}>
                                            <View>
                                                <Text style={styles.strongData}>Coeficiente:</Text>
                                            </View>
                                            <View>
                                                <Text style={styles.contentData}>{singleData.coeficiente}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <Pressable style={styles.buttonLinhas} onPress={() => navigation.navigate('BSC Mensal PDF', singleData)}>
                                        <Text style={styles.buttonLinhasTitle}>GERAR BSC</Text>
                                    </Pressable>
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
export default ReciclerMensal;