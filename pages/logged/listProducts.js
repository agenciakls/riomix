
import * as React from 'react'
import { View, SafeAreaView, Text, Pressable, Image, ScrollView } from 'react-native';
import Header from '../modules/header';
import { createStackNavigator } from '@react-navigation/stack';

import styles from './style-products';

const Stack = createStackNavigator();

import LinhaClassica from './linhaClassica';
import LinhaChapisco from './linhaChapisco';
import LinhaColante from './linhaColante';
import LinhaTradicional from './linhaTradicional';

function HomeProducts({ navigation }) {
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
                        <Text style={styles.titlePage}>Nossas linhas</Text>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-classica.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA CLÁSSICA</Text>
                                <Text style={styles.linhasText}>Nossos primeiros lançamentos, de qualidade que o mercado conhece e aprova há anos.</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Clássica')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA TRADICIONAL </Text>
                                <Text style={styles.linhasText}>A principal família da Riomix. Todo nosso know-how e excelência você encontra aqui.</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Tradicional')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-colante.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA COLANTE </Text>
                                <Text style={styles.linhasText}>Assentamentos de revestimenos de máxima eficiência: escolha entre o Colante Interno ou Flexível.</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Colante')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-chapisco.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA CHAPISCO</Text>
                                <Text style={styles.linhasText}>Chapiscos com a qualidade Riomix: de Alvenaria, para áreas externas, ou de Estruturas de Concreto</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Chapisco')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>
    );
}

const ListProducts = () => {
    return (
        <Stack.Navigator initialRouteName="Nossas Linhas"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Nossas Linhas" component={HomeProducts} />
            <Stack.Screen name="Linha Tradicional" component={LinhaTradicional} />
            <Stack.Screen name="Linha Clássica" component={LinhaClassica} />
            <Stack.Screen name="Linha Colante" component={LinhaColante} />
            <Stack.Screen name="Linha Chapisco" component={LinhaChapisco} />
        </Stack.Navigator>
    )
}
export default ListProducts;


