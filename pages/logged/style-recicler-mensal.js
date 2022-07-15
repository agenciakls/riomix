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
        paddingBottom: 15
    },
    boxSingle: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 5,
        paddingHorizontal: 15,
        marginVertical: 6,
    },

    titleSingle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1F265B',
        marginBottom: 5
    },
    areaData: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'flex-start',
    },
    singleData: {
        width: '50%',
        flexDirection: 'column',
        paddingRight: 20,
    },
    strongData: {
        fontWeight: 'bold',
        fontSize: 12,
        paddingVertical: 4,
    },
    contentData: {
        
        fontSize: 14,
    },

    listDados: {
        marginVertical: 15,

    },
    singleDados: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderBottomColor: '#D2D2D2',
        borderBottomWidth: 2,
        paddingVertical: 5,
    },
    infoDados: {
        fontWeight: 'bold',
        color: '#808080',
    },
    infoDadosVerde: {
        fontWeight: 'bold',
        color: '#198942',
    },

    buttonLinhas: {
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 3,
        backgroundColor: '#198942',
        width: 140
    },
    buttonLinhasTitle: {
        textAlign: 'center',
        color: '#efefef',
        fontSize: 14,
    },
    messageLoad: {
        backgroundColor: '#dedede',
        color: '#121212',
        paddingVertical: 15,
        fontSize: 16,
        textAlign: 'center',
    }
});

export default styles;