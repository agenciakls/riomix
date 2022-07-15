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
        color: '#198942'
    },
    boxSingle: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoBoxImg: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    titleSingle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F265B'
    },
    areaData: {
        marginVertical: 5,
        justifyContent: 'flex-start',
        marginVertical: 30,
    },
    singleData: {
        fontSize: 30,
        paddingRight: 10,
        color: '#198942',
    },

    listDados: {
        marginVertical: 15,

    },
    singleDados: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingVertical: 5,
    },
    infoDados: {
        fontWeight: 'bold',
        color: '#808080',
        marginRight: 15,
    },
    infoDadosVerde: {
        fontWeight: 'bold',
        color: '#198942',
    },

});

export default styles;