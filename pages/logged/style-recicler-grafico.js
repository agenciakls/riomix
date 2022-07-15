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
    areaPci: {
        marginVertical: 15
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
    areaDados: {
        marginVertical: 15,
        flexDirection: 'row',
    },
    viewImage: {
        marginRight: 15,
        marginBottom: 10,
    },
    imagesIcones: {

    },
    titleData: {
        fontSize: 18,
        color: '#808080',
        fontWeight: 'bold',
    },
    subtitleData: {
        fontSize: 14,
        color: '#808080',
    },
});

export default styles;