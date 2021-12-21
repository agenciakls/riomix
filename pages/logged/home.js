

import React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, Text, Image, Pressable, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../modules/header';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesome } from '@expo/vector-icons';

import styles from '../logged/style-home';

const Home = ({navigation}) => {
    const showName = () => {
        return (user) ? <Text style={styles.messageName}>Fábio Freitas</Text>: <Text style={styles.messageName}></Text>; 
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
                        <View style={styles.boxWelcome}>
                            <Text style={styles.messageWelcome}>Olá, Bem vindo</Text>
                            {showName}
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
                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('Recolhimentos')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/individual.png')} />
                                    <Text style={styles.textIcons}>BSC Individual</Text>
                                </Pressable>
                                
                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('Recolhimentos')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/geral.png')} />
                                    <Text style={styles.textIcons}>BSC Geral</Text>
                                </Pressable>
                                
                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('Recolhimentos')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/graficos.png')} />
                                    <Text style={styles.textIcons}>Gráfico</Text>
                                </Pressable>
                                
                                <Pressable style={styles.boxIconesRecolhimento} onPress={() => navigation.navigate('Recolhimentos')}>
                                    <Image style={styles.imagesIcones} source={require('../../assets/icons/pcis.png')} />
                                    <Text style={styles.textIcons}>PCIs</Text>
                                </Pressable>
                            </View>
                        </View>

                        <View style={styles.containerLinhas}>
                            <View style={styles.linhasBox}>
                                <Text style={styles.linhasTitle}>Nossas Linhas</Text>
                                <Text style={styles.linhasText}>A Riomix tem a argamassa perfeita para a necessidade de cada fase da sua obra. </Text>
                                <Pressable style={styles.buttonLinhas}>
                                    <Text style={styles.buttonLinhasTitle} onPress={() => navigation.navigate('Produtos')}>VER MAIS</Text>
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
                                <Pressable style={styles.buttonNoticias} onPress={() => navigation.navigate('Notícias')}>
                                    <Text style={styles.buttonNoticiasTitle}>VER MAIS</Text>
                                </Pressable>
                            </View>
                        </View>
                        
                        <View style={styles.buttonsInfo}>
                            <Pressable style={styles.linkAbout} onPress={() => navigation.navigate('Quem Somos')}>
                                <FontAwesome style={styles.aboutContactIcon} name="book" />
                                <Text style={styles.aboutContactText}>Quem Somos</Text>
                            </Pressable>
                            <Pressable style={styles.linkContact} onPress={() => navigation.navigate('Contato')}>
                                <FontAwesome style={styles.aboutContactIcon} name="phone" />
                                <Text style={styles.aboutContactText}>Contato</Text>
                            </Pressable>
                        </View>

                        <View style={styles.socialsLinks}>
                            <View style={styles.singleSocial}>
                                <FontAwesome style={styles.iconSocial} name="facebook" onPress={() => Linking.openURL('https://www.facebook.com/riomixcelumassa')} />
                            </View>
                            <View style={styles.singleSocial}>
                                <FontAwesome style={styles.iconSocial} name="instagram" onPress={() => Linking.openURL('https://www.instagram.com/riomixcelumassa/')} />
                            </View>
                            <View style={styles.singleSocial}>
                                <FontAwesome style={styles.iconSocial} name="youtube" onPress={() => Linking.openURL('https://www.youtube.com/channel/UC9xtKwbC_zbTl6ZijJ9eyAQ')} />
                            </View>
                            <View style={styles.singleSocial}>
                                <FontAwesome style={styles.iconSocial} name="globe" onPress={() => Linking.openURL('http://riomix.com.br/')} />
                            </View>
                        </View>
                        
                    </View>
                </ScrollView>
            </SafeAreaView>


        </View>
    );
}

export default Home;