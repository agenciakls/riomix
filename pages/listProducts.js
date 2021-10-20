
import * as React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text, Pressable, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import Header from '../src/modules/header';

import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SingleProduct() {
    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>LINHA TRADICIONAL</Text>
                        <View style={styles.imgProduct}><Image source={require('../assets/files/contrapiso.png')} /></View>
                        <View>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes externas e tetos, sendo base para tintas, pastilhas, cerâmicas e laminados. Pode ser utilizado para assentamento de tijolos e blocos em geral, para contrapiso e reparos.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>
                            
                            <View style={styles.areaButtons}>
                                <Pressable style={styles.buttonSingle}>
                                    <Text style={styles.buttonSingleTitle}>Quero saber mais</Text>
                                </Pressable>
                                
                                <Pressable style={styles.buttonSingle}>
                                    <Text style={styles.buttonSingleTitle}>Assistir vídeo</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                
            </SafeAreaView>


        </View>
    );
}


function HomeProducts({navigation}) {
    return (

        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Nossas linhas</Text>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonProductTitle} onPress={() => navigation.navigate('Produto')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonProductTitle}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonProductTitle}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonProductTitle}>
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

export default class listProducts extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Produtos">
                <Stack.Screen name="Produtos" component={HomeProducts} />
                <Stack.Screen name="Produto" component={SingleProduct} />
            </Stack.Navigator>
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
        color: '#198942',
        marginBottom: 10,
    },

    containerLinhas: {
        backgroundColor: '#1F265B',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
    },
    linhasBox: {
        flexBasis: '50%'
    },
    areaButtons: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center', 
        flexDirection: 'row'
    },
    
    buttonProductTitle: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 3,
        backgroundColor: '#198942',
        width: 100,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonProductTitle: {
        textAlign: 'center',
        color: '#efefef',
        fontSize: 10,
    },

    linhasTitle: {
        color: '#efefef',
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 2,
    },
    linhasText: {
        color: '#efefef',
        fontSize: 12
    },
    buttonLinhasTitle: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 3,
        backgroundColor: '#198942',
        width: 100,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonLinhasTitle: {
        textAlign: 'center',
        color: '#efefef',
        fontSize: 10,
    },
    linhasBoxImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linhasImage: {
        height: 93,
        width: 150,
    },
});