
import * as React from 'react'
import { StyleSheet, StatusBar } from 'react-native';

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
    },
    
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

export default styles;