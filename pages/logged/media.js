
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, FlatList } from 'react-native'
import Header from '../modules/header';
import {StatusBar} from 'react-native';
import styles from './style-media';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const DATA = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1', title: 'Conhecendo a Família Riomix', },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Conhecendo a Família Riomix', },
    { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Conhecendo a Família Riomix', },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4', title: 'Conhecendo a Família Riomix', },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65', title: 'Conhecendo a Família Riomix', },
    { id: '58694a0f-3da1-471f-bd96-145571e29d76', title: 'Conhecendo a Família Riomix', },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7', title: 'Conhecendo a Família Riomix', },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68', title: 'Conhecendo a Família Riomix', },
    { id: '58694a0f-3da1-471f-bd96-145571e29d79', title: 'Conhecendo a Família Riomix', },
];

import { renderItem } from '../modules/multiMedia';

const Media = ({navigation}) => {
    
    return(
        <View 
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                <Header click={navigation.openDrawer} />
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>
    );
}

export default Media;