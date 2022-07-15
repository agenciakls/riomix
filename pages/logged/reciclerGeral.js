
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../modules/header';

import styles from './style-recicler-geral';

import AuthContext from '../routes/auth';
import api from '../routes/api'

function ReciclerGeral({ navigation }) {
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
                            <View style={styles.boxSingle}>
                                <View style={styles.InfoBoxArea}>
                                    <Text style={styles.titleSingle}>Julho de 2021</Text>
                                    <View style={styles.areaData}>
                                        <Text style={styles.singleData}>{data.devolucoes}</Text>
                                        <Text style={styles.singleData}>Devoluções</Text>
                                    </View>


                                    <View style={styles.listDados}>
                                        <View style={styles.singleDados}>
                                            <Text style={styles.infoDados}>{data.devolucoes}</Text>
                                            <Text style={styles.infoDados}>desde Abril de 2017</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.infoBoxImg}>
                                    <Image source={require('../../assets/icons/riomix-cinza.png')} />
                                </View>
                            </View>


                            <View style={styles.boxSingle}>
                                <View style={styles.InfoBoxArea}>
                                    <Text style={styles.titleSingle}>Julho de 2021</Text>
                                    <View style={styles.areaData}>
                                        <Text style={styles.singleData}>{data.economia}</Text>
                                        <Text style={styles.singleData}>Economia no canteiro</Text>
                                    </View>


                                    <View style={styles.listDados}>
                                        <View style={styles.singleDados}>
                                            <Text style={styles.infoDados}>{data.economia}</Text>
                                            <Text style={styles.infoDados}>desde Abril de 2017</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.infoBoxImg}>
                                    <Image source={require('../../assets/icons/carteira-cinza.png')} />
                                </View>
                            </View>


                            <View style={styles.boxSingle}>
                                <View style={styles.InfoBoxArea}>
                                    <Text style={styles.titleSingle}>Julho de 2021</Text>
                                    <View style={styles.areaData}>
                                        <Text style={styles.singleData}>{data.familias}</Text>
                                        <Text style={styles.singleData}>Famílias Beneficiadas</Text>
                                    </View>


                                    <View style={styles.listDados}>
                                        <View style={styles.singleDados}>
                                            <Text style={styles.infoDados}>{data.familias}</Text>
                                            <Text style={styles.infoDados}>desde Abril de 2017</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.infoBoxImg}>
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

export default ReciclerGeral;