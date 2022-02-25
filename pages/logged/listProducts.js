
import * as React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text, Pressable, Image, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import Header from '../modules/header';

import { StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function LinhaClassica({ navigation }) {
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
                        <Text style={styles.titlePage}>LINHA CLÁSSICA</Text>

                        <View style={styles.singleBoxLinha}>
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-revestimento-externo.jpg')} /></View>
                            <Text style={styles.titleBox}>REVESTIMENTO EXTERNO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes externas e tetos, sendo base para tintas, pastilhas, cerâmicas e laminados. Pode ser utilizado para assentamento de tijolos e blocos em geral, para contrapiso e reparos.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-revestimento-interno.jpg')} /></View>
                            <Text style={styles.titleBox}>REVESTIMENTO INTERNO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes internas e tetos, sendo base para tintas, pastilhas, cerâmicas e laminados. Pode ser utilizado para assentamento de tijolos e blocos em geral, para contrapiso e reparos.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-revestimento-projetavel.jpg')} /></View>
                            <Text style={styles.titleBox}>REVESTIMENTO PROJETÁVEL</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes externas, sendo base para tintas, pastilhas, cerâmicas e laminados. Para aplicação por meio de bomba de projeção ou sistema mecânico soprado (canequinha), inclusive bombeável até 30 metros na vertical.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-contrapiso.jpg')} /></View>
                            <Text style={styles.titleBox}>CONTRAPISO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para regular pisos de concreto e reparos em contrapisos. Pode ser usado como base para revestimentos cerâmicos, pedras e pastilhas, além de revestimentos de madeiras e laminados.</Text>
                            <Text style={styles.productParagraph}>Prepara, no mínimo, um contrapiso de 2,7 m² para uma espessura de 1 cm.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-assentamento.jpg')} /></View>
                            <Text style={styles.titleBox}>ASSENTAMENTO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para assentamento de tijolos, blocos cerâmicos, de concreto (até 5Mpa) e sílico-calcários.</Text>
                            <Text style={styles.productParagraph}>Assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-assentamento-estrutural.jpg')} /></View>
                            <Text style={styles.titleBox}>ASSENTAMENTO ESTRUTURAL</Text>
                            <Text style={styles.productParagraph}>Produto indicado para assentamento de blocos de concreto nas seguintes resistências à compressão: 5Mpa, 6Mpa, 8Mpa, 10Mpa, 12Mpa, 14Mpa, 16Mpa, 18Mpa e 20Mpa.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-multiuso.jpg')} /></View>
                            <Text style={styles.titleBox}>MULTIUSO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes internas e externas em concreto, tijolos cerâmicos e blocos de concreto, assentamento de tijolos e blocos de alvenaria, contrapiso e reparos em geral. Excelente base para tintas, pastilhas, cerâmicas e pisos laminados.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-colante-interno-aci.jpg')} /></View>
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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-colante-flexivel-acii.jpg')} /></View>
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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-colante-flexivel-aciii.jpg')} /></View>
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



                        <View style={styles.singleBoxLinha}>
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-chapisco-de-alvenaria.jpg')} /></View>
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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/classica/linha-classica-chapisco-de-estruturas-de-concreto.jpg')} /></View>
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
function LinhaTradicional({ navigation }) {
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
                        <Text style={styles.titlePage}>LINHA TRADICIONAL</Text>

                        <View style={styles.singleBoxLinha}>
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/tradicional/revestimento-externo.jpg')} /></View>
                            <Text style={styles.titleBox}>REVESTIMENTO EXTERNO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes externas e tetos, sendo base para tintas, pastilhas, cerâmicas e laminados. Pode ser utilizado para assentamento de tijolos e blocos em geral, para contrapiso e reparos.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/tradicional/revestimento-interno.jpg')} /></View>
                            <Text style={styles.titleBox}>REVESTIMENTO INTERNO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes internas e tetos, sendo base para tintas, pastilhas, cerâmicas e laminados. Pode ser utilizado para assentamento de tijolos e blocos em geral, para contrapiso e reparos.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/tradicional/revestimento-projetavel.jpg')} /></View>
                            <Text style={styles.titleBox}>REVESTIMENTO PROJETÁVEL</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes externas, sendo base para tintas, pastilhas, cerâmicas e laminados. Para aplicação por meio de bomba de projeção ou sistema mecânico soprado (canequinha), inclusive bombeável até 30 metros na vertical.</Text>
                            <Text style={styles.productParagraph}>Emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/tradicional/contrapiso.jpg')} /></View>
                            <Text style={styles.titleBox}>CONTRAPISO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para regular pisos de concreto e reparos em contrapisos. Pode ser usado como base para revestimentos cerâmicos, pedras e pastilhas, além de revestimentos de madeiras e laminados.</Text>
                            <Text style={styles.productParagraph}>Prepara, no mínimo, um contrapiso de 2,7 m² para uma espessura de 1 cm.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/tradicional/assentamento.jpg')} /></View>
                            <Text style={styles.titleBox}>ASSENTAMENTO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para assentamento de tijolos, blocos cerâmicos, de concreto (até 5Mpa) e sílico-calcários.</Text>
                            <Text style={styles.productParagraph}>Assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/tradicional/assentamento-estrutural.jpg')} /></View>
                            <Text style={styles.titleBox}>ASSENTAMENTO ESTRUTURAL</Text>
                            <Text style={styles.productParagraph}>Produto indicado para assentamento de blocos de concreto nas seguintes resistências à compressão: 5Mpa, 6Mpa, 8Mpa, 10Mpa, 12Mpa, 14Mpa, 16Mpa, 18Mpa e 20Mpa.</Text>
                            <Text style={styles.productParagraph}>Embalagem: 50 kg.</Text>

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
                            <View style={styles.imgProduct}><Image source={require('../../assets/img/tradicional/multiuso.jpg')} /></View>
                            <Text style={styles.titleBox}>MULTIUSO</Text>
                            <Text style={styles.productParagraph}>Produto indicado para revestimento de paredes internas e externas em concreto, tijolos cerâmicos e blocos de concreto, assentamento de tijolos e blocos de alvenaria, contrapiso e reparos em geral. Excelente base para tintas, pastilhas, cerâmicas e pisos laminados.</Text>
                            <Text style={styles.productParagraph}>Embalagem de 50 kg: emboça uma área de, no mínimo, 2,7 m² para uma espessura de 1 cm e assenta, no mínimo, 45 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>
                            <Text style={styles.productParagraph}>Embalagem de 20 kg: emboça uma área de, no mínimo, 1,1 m² para uma espessura de 1 cm e assenta, no mínimo, 18 blocos cerâmicos (20x20x10 cm) para uma espessura de 1,5 cm e com emboço lateral.</Text>

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


function HomeProducts({ navigation }) {
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
                        <Text style={styles.titlePage}>Nossas linhas</Text>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-classica.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA CLÁSSICA</Text>
                                <Text style={styles.linhasText}>Nossos primeiros lançamentos, de qualidade que o mercado conhece e aprova há anos.</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Clássica')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-tradicional.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA TRADICIONAL </Text>
                                <Text style={styles.linhasText}>A principal família da Riomix. Todo nosso know-how e excelência você encontra aqui.</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Tradicional')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-colante.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA COLANTE </Text>
                                <Text style={styles.linhasText}>Assentamentos de revestimenos de máxima eficiência: escolha entre o Colante Interno ou Flexível.</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Clássica')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBoxImage}>
                                <Image style={styles.linhasImage} source={require('../../assets/img/linha-chapisco.png')} />
                            </View>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>LINHA CHAPISCO</Text>
                                <Text style={styles.linhasText}>Chapiscos com a qualidade Riomix: de Alvenaria, para áreas externas, ou de Estruturas de Concreto</Text>
                                <Pressable style={styles.buttonProduct} onPress={() => navigation.navigate('Linha Clássica')}>
                                    <Text style={styles.buttonProductTitle}>VER MAIS</Text>
                                </Pressable>

                            </View>
                        </View>

                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>
    );
}

const listProducts = () => {
    return (
        <Stack.Navigator initialRouteName="Nossas Linhas"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Nossas Linhas" component={HomeProducts} />
            <Stack.Screen name="Linha Tradicional" component={LinhaTradicional} />
            <Stack.Screen name="Linha Clássica" component={LinhaClassica} />
            <Stack.Screen name="Linha Colante" component={LinhaColante} />
            <Stack.Screen name="Linha Chapisco" component={LinhaChapisco} />
        </Stack.Navigator>
    )
}
export default listProducts;


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