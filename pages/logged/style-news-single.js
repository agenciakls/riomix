import * as React from 'react'
import { StyleSheet, StatusBar } from 'react-native';

const styleSingle = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        display: "flex",
    },
    boxContainer: {
        padding: 15
    },
    aboutVideo: {
        flex: 1,
        height: 220,
    },
    titlePage: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#198942',
        marginVertical: 15,
    },
    titleNew: {
        fontSize: 16,
        fontWeight: '700',
        color: '#1F265B',
    },
    imageText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 15,
    },
    aboutParagraph: {
        paddingVertical: 5,
        textAlign: 'justify',
        fontSize: 16,
        color: '#565656'
    },
    aboutParagraphStrong: {
        paddingVertical: 5,
        textAlign: 'justify',
        fontSize: 16,
        color: '#565656',
        fontWeight: '700'
    }
    

});
export default styleSingle;