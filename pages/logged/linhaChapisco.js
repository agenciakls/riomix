
import * as React from 'react'
import { View, SafeAreaView, Text, Pressable, Image, ScrollView } from 'react-native';
import Header from '../modules/header';

import styles from './style-products';

function LinhaChapisco({ navigation }) {
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
                        <Text style={styles.titlePage}>LINHA CHAPISCO</Text>

                        <View style={styles.singleBoxLinha}>
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/chapisco/chapisco-de-alvenaria.jpg')} /></View>
                            <Text style={styles.titleBox}>CHAPISCO DE ALVENARIA</Text>
                            <Text style={styles.productParagraph}>Produto indicado indicado para áreas externas: tijolos, blocos cerâmicos, de concreto e sílico-calcários. Melhora a aderência na interface base-revestimento.</Text>
                            <Text style={styles.productParagraph}>Reveste uma área de, no mínimo, 6 m².</Text>
                            <Text style={styles.productParagraph}>Embalagem: 20 kg.</Text>

                            <View style={styles.areaButtons}>
                                <Pressable style={styles.buttonSingle}>
                                    <Text style={styles.buttonSingleTitle}>Quero saber mais</Text>
                                </Pressable>

                                <Pressable style={styles.buttonSingleSecondary}>
                                    <Text style={styles.buttonSingleSecondaryTitle}>Assistir vídeo</Text>
                                </Pressable>
                            </View>
                            <View style={styles.hrLinha} />
                        </View>



                        <View style={styles.singleBoxLinha}>
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/chapisco/chapisco-de-estruturas-de-concreto.jpg')} /></View>
                            <Text style={styles.titleBox}>CHAPISCO DE ESTRUTURAS DE CONCRETO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para chapisco em estruturas de concreto: tetos, pilares e vigas. Melhora a aderência na interface base-revestimento.</Text>
                            <Text style={styles.productParagraph}>Reveste uma área de, no mínimo, 5 m².</Text>
                            <Text style={styles.productParagraph}>Embalagem: 20 kg.</Text>

                            <View style={styles.areaButtons}>
                                <Pressable style={styles.buttonSingle}>
                                    <Text style={styles.buttonSingleTitle}>Quero saber mais</Text>
                                </Pressable>

                                <Pressable style={styles.buttonSingleSecondary}>
                                    <Text style={styles.buttonSingleSecondaryTitle}>Assistir vídeo</Text>
                                </Pressable>
                            </View>
                            <View style={styles.hrLinha} />
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}
export default LinhaChapisco;