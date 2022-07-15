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

    containerRecolhimento: {
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
    },
    boxIcones: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxIconesRecolhimento: {
        flexBasis: '45%',
        backgroundColor: '#1F265B',
        margin: 5,
        paddingVertical: 10,
        borderRadius: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    imagesIcones: {
        marginVertical: 10,
        width: 50,
        height: 50,
    },
    textIcons: {
        fontSize: 16,
        textAlign: 'center',
        color: '#efefef',
        paddingVertical: 3,
    },

});
export default styles;