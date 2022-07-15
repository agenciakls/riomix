
import React from 'react';
import { View, StyleSheet, Text, ScrollView, SafeAreaView, Pressable } from 'react-native'
import Header from '../modules/header';

import styles from './style-recicler-pci';

function ReciclerPCI({ navigation }) {

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
                        <Text style={styles.titlePage}>Recolhimento</Text>
                        <View style={styles.areaPci}>
                            <Text style={styles.titleSection}>Riomix Celumassa</Text>
                            <Text style={styles.subtitleSection}>Palestras de Conscientização e Incentivo</Text>
                            <Text style={styles.infoContact}>Palestra na Sede da Riomix, no dia 20 de Agosto de 2021, com o tema "PES - PROGRAMA DE EMBOÇO SOCIAL". </Text>
                            <Text style={styles.infoContact}>INSCREVA-SE AGORA!</Text>
                        </View>
                        <View style={styles.areaCenterButton}>
                            <Pressable style={styles.buttonMain} onPress={() => navigation.navigate('Contato')}>
                                <Text style={styles.buttonMainTitle}>Envia Mensagem</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default ReciclerPCI;