import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
    },
    boxContainer: {
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    singleBoxLinha: {
        paddingVertical: 30,
    },
    titlePage: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#198942',
        marginBottom: 10,
    },
    titleBox: {
        fontSize: 16,
        textTransform: 'uppercase',
        textAlign: 'center',
        fontWeight: '700',
        color: '#1F265B',
        marginBottom: 10,
        paddingVertical: 15,
    },
    productParagraph: {
        fontSize: 15,
        marginBottom: 15,
        color: '#808080',
    },
    imgProduct: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerLinhas: {
        backgroundColor: '#1F265B',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
    },
    linhasBox: {
        flexBasis: '50%'
    },
    areaButtons: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        marginVertical: 10,
    },

    buttonSingle: {
        flex: 1,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 3,
        borderRadius: 3,
        backgroundColor: '#198942',
        width: 100,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonSingleTitle: {
        textAlign: 'center',
        color: '#efefef',
        fontSize: 13,
        textTransform: 'uppercase',
    },

    buttonSingleSecondary: {
        flex: 1,
        paddingVertical: 7,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginHorizontal: 3,
        borderRadius: 3,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#1F265B',
        width: 100,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonSingleSecondaryTitle: {
        textAlign: 'center',
        color: '#1F265B',
        textTransform: 'uppercase',
        fontSize: 13,
    },

    linhasTitle: {
        color: '#efefef',
        fontSize: 18,
        fontWeight: '700',
        paddingVertical: 2,
    },
    linhasText: {
        color: '#efefef',
        fontSize: 12
    },

    hrLinha: {
        borderBottomColor: '#E1E1E1',
        borderBottomWidth: 2,
        marginVertical: 10,
    },

    buttonProduct: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 3,
        backgroundColor: '#198942',
        width: 100,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonProductTitle: {
        textAlign: 'center',
        color: '#efefef',
        fontSize: 10,
    },
    linhasBoxImage: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linhasImage: {
        height: 93,
        width: 150,
    },
});

export default styles;