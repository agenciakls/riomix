
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, FlatList, ScrollView, Text } from 'react-native'
import Header from '../src/modules/header';

import {StatusBar} from 'react-native';

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

import { renderItem } from '../src/modules/list';


export default class News extends React.Component {
    
    render() {
        return(
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.safearea}
                >
                    <Header click={this.props.navigation.openDrawer} />
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>Notícias</Text>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>
                        
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