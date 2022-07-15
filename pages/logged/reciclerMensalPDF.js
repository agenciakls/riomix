
import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import WebView from 'react-native-webview';
import Header from '../modules/header';

const PdfReader = ({ url: uri }) => <WebView style={{ flex: 1, height: 500 }} source={{ uri }} />

import styles from './style-recicler-mensal';

import AuthContext from '../routes/auth';
import api from '../routes/api'

function ReciclerMensalPDF({ navigation, route }) {

    const { user } = useContext(AuthContext);
    const [ data, setData ] = useState('');
    const [ namefile, setNamefile ] = useState('');
    const [ saveload, setSaveload ] = useState(false);

    useEffect(() => {
        async function loadRecicler() {
            const recicler = await api.get('/gerarpdf', {
                params: {
                    client_id: user.client_id,
                    date_end: route.params.date_end,
                    location_id: route.params.location_id
                }
            });
            setData(recicler.data[0].file_url);
            setNamefile(recicler.data[0].file_name);
        }
        loadRecicler();
    }, []);
    
    function downloadFile() {
        if (!saveload) {
            setSaveload(true);
            const uri = data;
            const nameFile = namefile;
            let fileUri = FileSystem.documentDirectory + nameFile;
            FileSystem.downloadAsync(uri, fileUri)
            .then(({ uri }) => { saveFile(uri); })
            .catch(error => { console.error(error); })
        }
    }

    async function saveFile (fileUri) {
        const asset = await Sharing.shareAsync(fileUri);
        setSaveload(false);
    }

    return (
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                <Header click={navigation.openDrawer} />
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>CERTIFICADO ({route.params.name})</Text>
                        
                        {(data !== '') ? 
                            <>
                                <PdfReader url={data} />
                                <Pressable style={styles.buttonLinhas} onPress={downloadFile}>
                                    <Text style={styles.buttonLinhasTitle}>{ (saveload) ? 'Salvando...': 'Salvar BSC'}</Text>
                                </Pressable>
                            </>
                        : <Text style={styles.messageLoad}>Aguarde enquanto buscamos os dados!</Text>}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )

}
export default ReciclerMensalPDF;