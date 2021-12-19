

import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text, Image, Pressable } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../modules/header';
import {StatusBar} from 'react-native';





import { FontAwesome } from '@expo/vector-icons';

import styles from './style-home';

export default class Home extends React.Component {
    showName() {
        return (this.user) ? <Text style={styles.messageName}>Fábio Freitas</Text>: <Text style={styles.messageName}></Text>; 
    }
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
                                <this.showName />
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
                                        <Image style={styles.imagesIcones} source={require('../../assets/icons/individual.png')} />
                                        <Text style={styles.textIcons}>BSC Individual</Text>
                                    </View>
                                    
                                    <View style={styles.boxIconesRecolhimento}>
                                        <Image style={styles.imagesIcones} source={require('../../assets/icons/geral.png')} />
                                        <Text style={styles.textIcons}>BSC Geral</Text>
                                    </View>
                                    
                                    <View style={styles.boxIconesRecolhimento}>
                                        <Image style={styles.imagesIcones} source={require('../../assets/icons/graficos.png')} />
                                        <Text style={styles.textIcons}>Gráfico</Text>
                                    </View>
                                    
                                    <View style={styles.boxIconesRecolhimento}>
                                        <Image style={styles.imagesIcones} source={require('../../assets/icons/pcis.png')} />
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
                                    <Image style={styles.linhasImage} source={require('../../assets/img/linha-tradicional.png')} />
                                </View>
                            </View>

                            <View style={styles.containerNoticias}>
                                <Text style={styles.titleNoticias}>Últimas Notícias</Text>
                                <View style={styles.singleNoticias}>
                                    <Text style={styles.newsText}>Webinar com nosso diretor Rafael Vieira na Semana do Meio Ambiente da MP Incorporadora</Text>
                                </View>
                                <View style={styles.singleNoticias}>
                                    <Image style={styles.newsImg} source={require('../../assets/example/example-news-1.png')} />
                                    <Text style={styles.newsText}>Riomix presente em Programa de Capacitação dos Objetivos de Desenvolvimento Sustentável da ONU</Text>
                                </View>
                                <View style={styles.singleNoticias}>
                                    <Image style={styles.newsImg} source={require('../../assets/example/example-news-2.png')} />
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

