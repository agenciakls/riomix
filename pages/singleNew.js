
import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text, Pressable, Image, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview';
import Header from '../src/modules/header';

import {StatusBar} from 'react-native';
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';

export default class SingleNew extends React.Component {
    render() {
        return(
        <View
            style={styles.container}
        >
            <SafeAreaView
                style={styles.safearea}
            >
                <Header click={this.props.navigation.openDrawer} />
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>QUEM SOMOS</Text>
                        <View style={styles.imgAbout}><Image source={require('../assets/logo-sobre.png')} /></View>
                        <View>

                        

                            <Text style={styles.aboutParagraph}>Ao longo de sua história, a marca solidificou a posição no mercado de fabricação de argamassas industrializadas, atendendo a grandes construtoras e lojas de materiais de construção no Rio de Janeiro e Grande Rio, tendo sempre o compromisso de preservar o meio-ambiente.</Text>

                            <Text style={styles.aboutParagraph}>Oferecemos uma vasta linha de argamassas, formuladas para atender as necessidades de cada fase da obra: assentamento, emboço, revestimento, contrapiso, chapisco e argamassas colantes.</Text>

                            <Text style={styles.aboutParagraph}>Nossa produção conta com matérias-primas de alta qualidade e um eficiente processo de fabricação automatizado, além de acompanhamento laboriatorial contínuo. Tudo para garantir a excelência que você precisa.</Text>

                            <Text style={styles.aboutParagraph}>As principais vantagens de nossos produtos são a economia, a qualidade e a praticidade: eles vêm prontos para uso, basta adicionar água.</Text>

                            
                        </View>
                    </View>
                    <Image source={require('../assets/quem-somos.jpg')} />
                    
                    <View style={styles.boxContainer}>
                        <View>

                        
                            <Text style={styles.aboutParagraphStrong}>VALORES DA MARCA</Text>
                            <Text style={styles.aboutParagraph}>• Dedicação e entusiasmo</Text>
                            <Text style={styles.aboutParagraph}>• Simplicidade</Text>
                            <Text style={styles.aboutParagraph}>• Respeito aos compromissos</Text>

                            <Text style={styles.aboutParagraphStrong}>POLÍTICA DA QUALIDADE</Text>
                            <Text style={styles.aboutParagraph}>A RioBrita Ltda. é uma empresa que atua no mercado de argamassas prontas para a Construção Civil empenhando-se,  cada dia, em melhor servir aos nossos clientes, sempre atentos às suas necessidades, buscando assim merecer a sua constante preferência e procurando uma posição de destaque no mercado, através das seguintes diretrizes:</Text>

                            <Text style={styles.aboutParagraph}>• Atendimento respeitoso ao cliente: Fazer do atendimento um dos fatores de destaque na comercialização de nossos produtos em todos os contatos com o cliente, com o atendimento personalizado.</Text>
                            <Text style={styles.aboutParagraph}>• Conformidade com normas e requisitos: Fabricamos e fornecemos produtos que atendem às Normas Técnicas (ABNT) em vigor, assim como as nossas Normas Internas da Qualidade com constantes verificações ao longo de todo o processo de fabricação, através de indicadores, permitindo-nos assim garantir desempenho e regularidade de todos os nossos produtos.</Text>
                            <Text style={styles.aboutParagraph}>• Aprimoramento contínuo da qualidade: O aprimoramento contínuo da Qualidade de nossos produtos, processos e sistema de gestão.</Text>

                            
                        </View>
                    </View>
                    <WebView 
                        style={styles.aboutVideo}
                        automaticallyAdjustContentInsets={false}
                        source={{ uri: 'https://www.youtube.com/embed/ajyUtDJ-4C4' }}
                    />
                    <View style={styles.imgAbout}><Image source={require('../assets/timeline.png')} /></View>
                </ScrollView>
                
            </SafeAreaView>


        </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        display: "flex",
        paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
        marginBottom: 10,
        textAlign: 'center'
    },
    imgAbout: {
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