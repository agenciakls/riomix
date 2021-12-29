
import React, { useEffect, useState, useContext } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, ScrollView, Text, Image, TouchableHighlight } from 'react-native'
import Header from '../modules/header';
import api from '../routes/api'
import AuthContext from '../routes/auth';

import {StatusBar} from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function listaNoticias({navigation, route}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadNews() {
            const noticias = await api.get('/news');
            setData(noticias.data);
        }
        loadNews();
    }, []);
    return(
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                <Header click={navigation.openDrawer} />
                <View style={styles.boxContainer}>
                    <Text style={styles.titlePage}>Notícias</Text>
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <TouchableHighlight onPress={() => navigation.navigate('Notícia', item)}>
                                <View style={styleNoticiaSingle.item}>
                                    <View>
                                        <Image style={styleNoticiaSingle.imgNoticias} source={require('../../assets/example/example-new-list.png')} />
                                    </View>
                                    <View style={styleNoticiaSingle.boxText}>
                                        <Text style={styleNoticiaSingle.title}>{item.title}</Text>
                                        <Text style={styleNoticiaSingle.content}>{item.excerpt}</Text>
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

export function singleNoticias({navigation, route}) {
    return(
        <View
            style={styleSingle.container}
        >
            <SafeAreaView
                style={styleSingle.safearea}
            >
                <Header click={navigation.openDrawer} />
                <ScrollView>
                    <View style={styleSingle.boxContainer}>
                    <Text style={styleSingle.titleNew} onPress={() => navigation.goBack(null)}>VOLTAR </Text>
                    <Text style={styleSingle.titlePage}>Notícias</Text>
                        <Text style={styleSingle.titleNew}>{route.params.title} </Text>
                        <View>
                            <Text style={styleSingle.aboutParagraph}>
                                {route.params.content}
                            </Text>
                        </View>
                        <Image source={require('../../assets/example/example-multimedia.png')} style={styleSingle.imageText} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const News = ({navigation, route}) => {
    useEffect(() => {
        
        if (route.params) {
            navigation.navigate('Notícia', route.params);
        }
    }, [route.params]);
    return (
        <Stack.Navigator initialRouteName="Todas as Notícias" screenOptions={{
          headerShown: false
        }}>
            <Stack.Screen name="Todas as Notícias" component={listaNoticias} route={
                route.params
            } />
            <Stack.Screen name="Notícia" component={singleNoticias} />
        </Stack.Navigator>
    );
}
export default News;

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