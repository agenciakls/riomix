

import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text, Image, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../src/modules/header';
import {StatusBar} from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export default class Home extends React.Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.safearea}
                >
                    <Header click={this.props.navigation.openDrawer} />
                    <ScrollView>
                            <View style={styles.boxContainer}>
                            <View style={styles.boxWelcome}>
                                <Text style={styles.messageWelcome}>Olá, Bem vindo</Text>
                                <Text style={styles.messageName}>Fábio Freitas</Text>
                            </View>

                            <View style={styles.containerRecolhimento}>
                                <View>
                                    <Text style={styles.titleRecolhimento}>Recolhimento Geral</Text>

                                    <View style={styles.detailRecolhimento}>
                                        <View style={styles.valueRecolhimento} >
                                            <Text style={styles.valueTextRecolhimento}>300</Text>
                                        </View>
                                        <View style={styles.nameRecolhimento}>
                                            <Text style={styles.nameTextRecolhimento}>Devoluções</Text>
                                        </View>
                                    </View>
                                    

                                    <View style={styles.detailRecolhimento}>
                                        <View style={styles.valueRecolhimento} >
                                            <Text style={styles.valueTextRecolhimento}>1.500</Text>
                                        </View>
                                        <View style={styles.nameRecolhimento}>
                                            <Text style={styles.nameTextRecolhimento}>Economia</Text>
                                        </View>
                                    </View>
                                    

                                    <View style={styles.detailRecolhimento}>
                                        <View style={styles.valueRecolhimento} >
                                            <Text style={styles.valueTextRecolhimento}>150</Text>
                                        </View>
                                        <View style={styles.nameRecolhimento}>
                                            <Text style={styles.nameTextRecolhimento}>Famílias Beneficiadas</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.boxIcones}>
                                    <View style={styles.boxIconesRecolhimento}>
                                        <Image style={styles.imagesIcones} source={require('../assets/icons/individual.png')} />
                                        <Text style={styles.textIcons}>BSC Individual</Text>
                                    </View>
                                    
                                    <View style={styles.boxIconesRecolhimento}>
                                        <Image style={styles.imagesIcones} source={require('../assets/icons/geral.png')} />
                                        <Text style={styles.textIcons}>BSC Geral</Text>
                                    </View>
                                    
                                    <View style={styles.boxIconesRecolhimento}>
                                        <Image style={styles.imagesIcones} source={require('../assets/icons/graficos.png')} />
                                        <Text style={styles.textIcons}>Gráfico</Text>
                                    </View>
                                    
                                    <View style={styles.boxIconesRecolhimento}>
                                        <Image style={styles.imagesIcones} source={require('../assets/icons/pcis.png')} />
                                        <Text style={styles.textIcons}>PCIs</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.containerLinhas}>
                                <View style={styles.linhasBox}>
                                    <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                    <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                    <Pressable style={styles.buttonLinhas}>
                                        <Text style={styles.buttonLinhasTitle}>VER MAIS</Text>
                                    </Pressable>
                                
                                </View>
                                <View style={styles.linhasBoxImage}>
                                    <Image style={styles.linhasImage} source={require('../assets/img/linha-tradicional.png')} />
                                </View>
                            </View>

                            <View style={styles.containerNoticias}>
                                <Text style={styles.titleNoticias}>Últimas Notícias</Text>
                                <View style={styles.singleNoticias}>
                                    <Text style={styles.newsText}>Webinar com nosso diretor Rafael Vieira na Semana do Meio Ambiente da MP Incorporadora</Text>
                                </View>
                                <View style={styles.singleNoticias}>
                                    <Image style={styles.newsImg} source={require('../assets/example/example-news-1.png')} />
                                    <Text style={styles.newsText}>Riomix presente em Programa de Capacitação dos Objetivos de Desenvolvimento Sustentável da ONU</Text>
                                </View>
                                <View style={styles.singleNoticias}>
                                    <Image style={styles.newsImg} source={require('../assets/example/example-news-2.png')} />
                                    <Text style={styles.newsText}>A Riomix-Celumassa recebe o Prêmio Firjan Ambiental 2019</Text>
                                </View>
                                <View style={styles.areaButtonNoticias}>
                                    <Pressable style={styles.buttonNoticias}>
                                        <Text style={styles.buttonNoticiasTitle}>VER MAIS</Text>
                                    </Pressable>
                                </View>
                            </View>
                            
                            <View style={styles.buttonsInfo}>
                                <View style={styles.linkAbout}>
                                    <FontAwesome style={styles.aboutContactIcon} name="book" />
                                    <Text style={styles.aboutContactText}>Quem Somos</Text>
                                </View>
                                <View style={styles.linkContact}>
                                    <FontAwesome style={styles.aboutContactIcon} name="phone" />
                                    <Text style={styles.aboutContactText}>Contato</Text>
                                </View>
                            </View>

                            <View style={styles.socialsLinks}>
                                <View style={styles.singleSocial}>
                                    <FontAwesome style={styles.iconSocial} name="facebook" />
                                </View>
                                <View style={styles.singleSocial}>
                                    <FontAwesome style={styles.iconSocial} name="instagram" />
                                </View>
                                <View style={styles.singleSocial}>
                                    <FontAwesome style={styles.iconSocial} name="youtube" />
                                </View>
                                <View style={styles.singleSocial}>
                                    <FontAwesome style={styles.iconSocial} name="globe" />
                                </View>
                            </View>
                            
                        </View>
                    </ScrollView>
                </SafeAreaView>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    boxContainer: {
        padding: 15
    },
    boxWelcome: {
        flexDirection: 'row',
        marginBottom: 10,
    },
        messageWelcome: {
            fontSize: 14,
            color: '#198942'
        },
        messageName: {
            paddingHorizontal: 5,
            color: '#1F265B',
            fontSize: 14
        },

    containerRecolhimento: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        marginVertical: 5,
        flexDirection: 'row',
    },
        titleRecolhimento: {
            color: '#1F265B',
            fontWeight: '700'
        },
        detailRecolhimento: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
        },
            valueRecolhimento: {
                width: 60,
                backgroundColor: '#efefef',
                paddingVertical: 7,
                paddingHorizontal: 10,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
            },
                valueTextRecolhimento: {
                    color: '#1F265B',
                    fontSize: 10,
                },
            nameRecolhimento: {
                width: 120,
                backgroundColor: '#198942',
                paddingVertical: 7,
                paddingHorizontal: 10,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
            },
                nameTextRecolhimento: {
                    color: '#efefef',
                    fontSize: 10,
                },
        boxIcones: {
            flex: 1,
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingLeft: 15,
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
            boxIconesRecolhimento: {
                flexBasis: '45%',
                backgroundColor: '#1F265B',
                margin: 3,
                padding: 5,
                borderRadius: 5,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',

            },
                imagesIcones: {
                    width: 30,
                    height: 30,
                },
                textIcons: {
                    fontSize: 6,
                    textAlign: 'center',
                    color: '#efefef',
                    paddingVertical: 3,
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
            buttonLinhas: {
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginVertical: 10,
                borderRadius: 3,
                backgroundColor: '#198942',
                width: 100,
                display: 'flex',
                justifyContent: 'center',
            },
                buttonLinhasTitle: {
                    textAlign: 'center',
                    color: '#efefef',
                    fontSize: 10,
                },
        linhasBoxImage: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
            linhasImage: {
                height: 93,
                width: 150,
            },
    containerNoticias: {
        backgroundColor: '#dedede',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
    },
        titleNoticias: {
            textAlign: 'center',
            textTransform: 'uppercase',
            paddingBottom: 10,
            fontWeight: '700',
            color: '#198942',
            fontSize: 15
        },
        singleNoticias: {
            paddingVertical: 10,
            borderTopColor: '#cdcdcd',
            borderTopWidth: 1,
            flexDirection: 'row',
        },
            newsImg: {
                marginRight: 15,
            },
            newsText: {
                flex: 1,
                color: '#1F265B',
                fontWeight: '700'
            },
            areaButtonNoticias: {
                flex: 1,
                borderTopColor: '#cdcdcd',
                borderTopWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
            },
            buttonNoticias: {
                paddingVertical: 5,
                paddingHorizontal: 10,
                marginVertical: 10,
                borderRadius: 3,
                backgroundColor: '#198942',
                width: 100,
                display: 'flex',
                justifyContent: 'center',
            },
                buttonNoticiasTitle: {
                    textAlign: 'center',
                    color: '#efefef',
                    fontSize: 12,
                },

    buttonsInfo: {
        flexDirection: 'row',
    },
    linkAbout: {
        flex: 1,
        backgroundColor: '#1F265B',
        padding: 15,
        marginRight: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linkContact: {
        flex: 1,
        backgroundColor: '#198942',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
        aboutContactIcon: {
            fontSize: 40,
            color: '#efefef',
            paddingVertical: 5,
        },
        aboutContactText: {
            color: '#efefef',
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: '700',
            fontSize: 15,
            paddingVertical: 5,
        },
    

    socialsLinks: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    singleSocial: {
        padding: 15,
    },
    iconSocial: {
        color: '#1F265B',
        fontSize: 30,
    },
});