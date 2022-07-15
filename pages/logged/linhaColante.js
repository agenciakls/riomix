
import * as React from 'react'
import { View, SafeAreaView, Text, Pressable, Image, ScrollView } from 'react-native';
import Header from '../modules/header';

import styles from './style-products';

function LinhaColante({ navigation }) {
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
                        <Text style={styles.titlePage}>LINHA COLANTE</Text>

                        <View style={styles.singleBoxLinha}>
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/colante/colante-interno-aci.jpg')} /></View>
                            <Text style={styles.titleBox}>COLANTE INTERNO (ACI)</Text>
                            <Text style={styles.productParagraph}>Produto indicado para assentamento de revestimentos cerâmicos em pisos e paredes internas (cor cinza).</Text>
                            <Text style={styles.productParagraph}>Aplicando somente na base (piso), cobre uma área de até 4,5 m². Aplicando na base (piso) e no tardoz (verso da cerâmica), cobre uma área de até 2,5 m².</Text>
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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/colante/colante-flexivel-acii.jpg')} /></View>
                            <Text style={styles.titleBox}>COLANTE FLEXÍVEL (ACII)</Text>
                            <Text style={styles.productParagraph}>Produto indicado para assentamento de revestimentos cerâmicos, inclusive em piscinas, pastilhas, pisos, paredes internas e externas e porcelanatos de até 60 x 60 (cor cinza).</Text>
                            <Text style={styles.productParagraph}>Aplicando somente na base (piso), cobre uma área de até 4,5 m². Aplicando na base (piso) e no tardoz (verso da cerâmica), cobre uma área de até 2,5 m².</Text>
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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/colante/colante-flexivel-aciii.jpg')} /></View>
                            <Text style={styles.titleBox}>COLANTE FLEXÍVEL (ACIII)</Text>
                            <Text style={styles.productParagraph}>Produto indicado para assentamento de revestimentos cerâmicos, inclusive em piscinas, pastilhas, pisos, paredes internas e externas, porcelanatos e pisos sobre pisos (cor cinza).</Text>
                            <Text style={styles.productParagraph}>Aplicando somente na base (piso), cobre uma área de até 4,5 m². Aplicando na base (piso) e no tardoz (verso da cerâmica), cobre uma área de até 2,5 m².</Text>
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
export default LinhaColante;