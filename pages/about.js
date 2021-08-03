
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, FlatList } from 'react-native'
import Header from '../src/modules/header';

const DATA = [
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b1', title: 'Primeiro Item', },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Segundo Item', },
    { id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Terceiro Item', },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4', title: 'Primeiro Item', },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65', title: 'Segundo Item', },
    { id: '58694a0f-3da1-471f-bd96-145571e29d76', title: 'Terceiro Item', },
    { id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b7', title: 'Primeiro Item', },
    { id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f68', title: 'Segundo Item', },
    { id: '58694a0f-3da1-471f-bd96-145571e29d79', title: 'Terceiro Item', },
];

import { renderItem } from '../src/modules/list';

export default class About extends React.Component {
    
    render() {
        return(
            <View 
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.safearea}
                >
                    <Header click={this.props.navigation.openDrawer} />
                    <FlatList
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        paddingTop: Platform.OS === 'android' ? 40 : 0
    },
    safearea: {
        width: "100%",
        color: 'white'
    },
    text: {
        color: "#161924",
        fontSize: 20,
        fontWeight: "500"
    },
    BoxContent: {
        color: 'black'
    }
});