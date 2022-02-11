

import React, { useContext, useEffect, useState } from 'react'
import { View, SafeAreaView, Text, Image, Pressable, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

import Header from '../modules/header';
import styles from '../logged/style-home';
import AuthContext from '../routes/auth';

import api from '../routes/api'


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export const NewsResume = ({navigation}) => {

    const { user } = useContext(AuthContext);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function loadNews() {
            const noticias = await api.get('/news');
            setData(noticias.data);
        }
        loadNews();
    }, []);
    return (
        <View style={styles.containerNoticias}>
            <Text style={styles.titleNoticias}>Últimas Notícias</Text>
            {
                data.map((singleData) => {
                    return(
                        <Pressable key={singleData.id} style={styles.singleNoticias} onPress={() => navigation.navigate('Notícias', singleData)}>
                            <Image style={styles.newsImg} source={require('../../assets/example/example-news-1.png')} />
                            <Text style={styles.newsText}>{singleData.title}</Text>
                        </Pressable>
                    )
                })
            }
            <View style={styles.areaButtonNoticias}>
                <Pressable style={styles.buttonNoticias} onPress={() => navigation.navigate('Notícias')}>
                    <Text style={styles.buttonNoticiasTitle}>VER MAIS</Text>
                </Pressable>
            </View>
        </View>
    )
};
export const ContentResume = () => {
    const { user } = useContext(AuthContext);
    
    const [resume, setResume] = useState(null);
    useEffect(() => {
        async function loadResume() {
            if (user.client_id) {
                const responseResume = await api.get('/resume', {
                    params: {
                        client_id: user.client_id
                    }
                });
                setResume(responseResume.data);
            }
        }
        loadResume();
    }, [user]);
    return(
        <View>
            <Text style={styles.titleRecolhimento}>Recolhimento Geral</Text>

            <View style={styles.detailRecolhimento}>
                <View style={styles.valueRecolhimento} >
                    <Text style={styles.valueTextRecolhimento}>{(resume) ? resume.devolucoes : 0}</Text>
                </View>
                <View style={styles.nameRecolhimento}>
                    <Text style={styles.nameTextRecolhimento}>Devoluções</Text>
                </View>
            </View>
            

            <View style={styles.detailRecolhimento}>
                <View style={styles.valueRecolhimento} >
                    <Text style={styles.valueTextRecolhimento}>{(resume) ? resume.economia : 0}</Text>
                </View>
                <View style={styles.nameRecolhimento}>
                    <Text style={styles.nameTextRecolhimento}>Economia</Text>
                </View>
            </View>
            

            <View style={styles.detailRecolhimento}>
                <View style={styles.valueRecolhimento} >
                    <Text style={styles.valueTextRecolhimento}>{(resume) ? resume.familias : 0}</Text>
                </View>
                <View style={styles.nameRecolhimento}>
                    <Text style={styles.nameTextRecolhimento}>Famílias Beneficiadas</Text>
                </View>
            </View>
            

            <View style={styles.detailRecolhimento}>
                <View style={styles.valueRecolhimento} >
                    <Text style={styles.valueTextRecolhimento}>{(resume) ? resume.coeficiente : 0}</Text>
                </View>
                <View style={styles.nameRecolhimento}>
                    <Text style={styles.nameTextRecolhimento}>Coeficiente</Text>
                </View>
            </View>
        </View>
    );
}

const Home = ({navigation}) => {
    const { user } = useContext(AuthContext);
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
                            {(user) ? <Text style={styles.messageName}>{user.name}</Text>: null}
                        </View>
                    
                        {(user) ? 
                                <View style={styles.containerRecolhimento}>
                                    <ContentResume />
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
                            : null
                                
                        }

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
                        
                        <NewsResume navigation={navigation} />

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