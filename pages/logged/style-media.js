

import * as React from 'react'
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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

export default styles;