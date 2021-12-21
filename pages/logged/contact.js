
import React, {useContext} from 'react'
import { View, SafeAreaView, ScrollView, Text, Pressable, TextInput } from 'react-native'
import Header from '../modules/header';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesome } from '@expo/vector-icons';
import styles from './style-contact';

import AuthContext from '../routes/auth';

const Contact = ({navigation}) => {
    const { signed } = useContext(AuthContext);
    return(
        <View
            style={styles.container}
        >
            <SafeAreaView
            >
                <Header click={navigation.openDrawer} />
                <ScrollView>
                    <View style={styles.boxContainer}>
                        <Text style={styles.titlePage}>CONTATO</Text>
                        <View></View>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="comments-o" /> Entrar em sua conta</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Nome"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Telefone"
                            />
                            <TextInput
                                style={styles.textarea}
                                placeholder="Mensagem"
                            />
                            <View style={styles.areaCenterButton}>
                                <Pressable style={styles.buttonMain}>
                                    <Text style={styles.buttonMainTitle}>Envia Mensagem</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="phone" /> Telefones (Vendas)</Text>
                            <Text style={styles.infoContact}> (21) 2442-1050</Text>
                            <Text style={styles.infoContact}> (21) 2196-9940</Text>
                            <Text style={styles.infoContact}> (21) 2196-9944</Text>
                            <Text style={styles.infoContact}> (21) 2196-9942</Text>
                            <Text style={styles.infoContact}> (21) 99888-6044</Text>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="phone" /> Telefones (Administração)</Text>
                            <Text style={styles.infoContact}> (21) 3637-3247</Text>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="map-marker" /> Endereço</Text>
                            <Text style={styles.textContact}>Rod. BR 101, km 285, s/n</Text>
                            <Text style={styles.textContact}>Trecho Manilha-Duques, Itaboraí-RJ</Text>
                            <Text style={styles.textContact}>CEP: 24.800-971</Text>
                            <Text style={styles.textContact}>Caixa Postal: 112409</Text>
                            <View style={styles.areaCenterButton}>
                                <Pressable style={styles.buttonMain}>
                                    <Text style={styles.buttonMainTitle}>Ver no mapa</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="envelope" /> Endereço</Text>
                            <Text style={styles.infoContact}> contato@riomix.com.br</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default Contact;