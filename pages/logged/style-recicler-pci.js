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

    areaCenterButton: {
        display: 'flex',
    },
    buttonMain: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#1F265B',
        borderRadius: 7,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonMainTitle: {
        textAlign: 'center',
        color: '#efefef',
        fontSize: 17,
    },


    titleSection: {
        fontSize: 18,
        color: '#1F265B',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subtitleSection: {
        fontSize: 16,
        color: '#1F265B',
        marginBottom: 10,
    },
    infoContact: {
        fontSize: 16,
        color: '#808080',
        marginBottom: 15,
    },
    textContact: {
        fontSize: 16,
        color: '#808080',
    },
});


export default styles;