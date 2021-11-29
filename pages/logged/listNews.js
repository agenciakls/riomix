
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, FlatList, ScrollView, Text, Image, TouchableHighlight } from 'react-native'
import Header from '../modules/header';

import {StatusBar} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DATA = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: '58694a0f-3da1-471f-bd96-145571e29d76', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
    { id: '58694a0f-3da1-471f-bd96-145571e29d79', title: 'Parceria entre o Programa Emboço Social e o Conleste', content: 'O ano de 2021 começou proporcionando grandes avanços para o Programa Emboço Social – PES...',},
];

function singleNoticias() {
    return(
        <View
            style={styleSingle.container}
        >
            <SafeAreaView
                style={styleSingle.safearea}
            >
                <ScrollView>
                    <View style={styleSingle.boxContainer}>
                        <Text style={styleSingle.titlePage}>Notícias</Text>
                        <Text style={styleSingle.titleNew}>Parceria entre o Programa Emboço Social e o Conleste</Text>
                        <View>
                            <Text style={styleSingle.aboutParagraph}>Ao longo de sua história, a marca solidificou a posição no mercado de fabricação de argamassas industrializadas, atendendo a grandes construtoras e lojas de materiais de construção no Rio de Janeiro e Grande Rio, tendo sempre o compromisso de preservar o meio-ambiente.</Text>
                            <Text style={styleSingle.aboutParagraph}>Oferecemos uma vasta linha de argamassas, formuladas para atender as necessidades de cada fase da obra: assentamento, emboço, revestimento, contrapiso, chapisco e argamassas colantes.</Text>
                            <Text style={styleSingle.aboutParagraph}>Nossa produção conta com matérias-primas de alta qualidade e um eficiente processo de fabricação automatizado, além de acompanhamento laboriatorial contínuo. Tudo para garantir a excelência que você precisa.</Text>
                            <Text style={styleSingle.aboutParagraph}>As principais vantagens de nossos produtos são a economia, a qualidade e a praticidade: eles vêm prontos para uso, basta adicionar água.</Text>
                        </View>
                        <Image source={require('../../assets/example/example-multimedia.png')} style={styleSingle.imageText} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

function listaNoticias({navigation}) {
    return(
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                <View style={styles.boxContainer}>
                    <Text style={styles.titlePage}>Notícias</Text>
                    <FlatList
                        data={DATA}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableHighlight onPress={() => navigation.navigate('Notícia')}>
                                <View style={styleNoticiaSingle.item}>
                                    <View>
                                        <Image style={styleNoticiaSingle.imgNoticias} source={require('../../assets/example/example-new-list.png')} />
                                    </View>
                                    <View style={styleNoticiaSingle.boxText}>
                                        <Text style={styleNoticiaSingle.title}>{item.title}</Text>
                                        <Text style={styleNoticiaSingle.content}>{item.content}</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )}
                    />
                </View>
                    
            </SafeAreaView>
        </View>
    )
}

export default class listProducts extends React.Component {
    render() {
        return (
            <Stack.Navigator initialRouteName="Todas as Notícias">
                <Stack.Screen name="Todas as Notícias" component={listaNoticias} />
                <Stack.Screen name="Notícia" component={singleNoticias} />
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
        color: '#198942',
        marginVertical: 15,
    },
    safearea: {
        width: "100%",
        color: 'white'
    },
    text: {
        color: "#161924",
        fontSize: 16,
        fontWeight: "500"
    },
    BoxContent: {
        color: 'black'
    }
});

const styleSingle = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        display: "flex",
    },
    boxContainer: {
        padding: 15
    },
    aboutVideo: {
        flex: 1,
        height: 220,
    },
    titlePage: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#198942',
        marginVertical: 15,
    },
    titleNew: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F265B',
    },
    imageText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },
    aboutParagraph: {
        paddingVertical: 5,
        textAlign: 'justify',
        fontSize: 16,
        color: '#565656'
    },
    aboutParagraphStrong: {
        paddingVertical: 5,
        textAlign: 'justify',
        fontSize: 16,
        color: '#565656',
        fontWeight: '700'
    }
    

});

const styleNoticiaSingle = StyleSheet.create({
    item: {
        backgroundColor: '#dedede',        
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5,
        
    },
    boxText: {
        flex: 1,
        padding: 10,
    },
    imgNoticias: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
        title: {
            fontSize: 14,
            color: '#1F265B'
        },
        content: {
            fontSize: 12,
            color: '#565656'
        }
});