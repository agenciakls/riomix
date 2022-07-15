
import React, { useEffect, useState } from 'react'
import { View, StyleSheet, SafeAreaView, FlatList, Text, Image, TouchableHighlight } from 'react-native'
import Header from '../modules/header';
import api from '../routes/api'

import styles from './style-news';

import SingleNoticias from './singleNews';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export function ListaNoticias({navigation, route}) {
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
                                <View style={styles.item}>
                                    <View>
                                        <Image style={styles.imgNoticias} source={require('../../assets/example/example-new-list.png')} />
                                    </View>
                                    <View style={styles.boxText}>
                                        <Text style={styles.title}>{item.title}</Text>
                                        <Text style={styles.content}>{item.excerpt}</Text>
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
            <Stack.Screen name="Todas as Notícias" component={ListaNoticias} route={
                route.params
            } />
            <Stack.Screen name="Notícia" component={SingleNoticias} />
        </Stack.Navigator>
    );
}
export default News;

