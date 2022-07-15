
import * as React from 'react'
import { View, SafeAreaView, Text, Pressable, Image, ScrollView } from 'react-native';
import Header from '../modules/header';

import styles from './style-products';

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

export default LinhaTradicional;