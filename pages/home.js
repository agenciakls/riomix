
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, FlatList } from 'react-native'
import Header from '../src/modules/header';



export default class Home extends React.Component {
    
    render() {
        return(
            <View 
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.safearea}
                >
                    <Header click={this.props.navigation.openDrawer} />
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