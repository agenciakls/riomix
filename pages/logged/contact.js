
import React, { useState } from 'react'
import { View, SafeAreaView, ScrollView, Text, Pressable, TextInput, Linking } from 'react-native'
import Header from '../modules/header';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { FontAwesome } from '@expo/vector-icons';
import styles from './style-contact';

import AuthContext from '../routes/auth';
import api from '../routes/api';

const Contact = ({navigation}) => {
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');

    async function sendMessage () {
        setError('Aguarde...');
        if (name.length === 0 || email.length === 0 || phone.length === 0 || message.length === 0) {
            setError('Preencha todos os campos para continuar!');
        } else {
            const responseMessage = await api.get('/contact', {
                params: {
                    name: name,
                    email: email,
                    phone: phone,
                    message: message,
                }
            });
            if (responseMessage.data.status) { setError('Mensagem enviada com sucesso, em breve entraremos em contato.'); }
            else { setError(responseMessage.data.message); }
                
        }
    };
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
                                value={name}
                                onChangeText={setName}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="E-mail"
                                value={email}
                                onChangeText={setEmail}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Telefone"
                                value={phone}
                                onChangeText={setPhone}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <TextInput
                                style={styles.textarea}
                                placeholder="Mensagem"
                                value={message}
                                onChangeText={setMessage}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                            <View style={styles.areaCenterButton}>
                                <Pressable style={styles.buttonMain} onPress={sendMessage}>
                                    <Text style={styles.buttonMainTitle}>Envia Mensagem</Text>
                                </Pressable>
                            </View>
                            {error.length !== 0 && <Text style={styles.messageErro}>{error}</Text>}
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="phone" /> Telefones (Vendas)</Text>
                            <Text style={styles.infoContact} onPress={() => Linking.openURL('tel:+552124421050')}> (21) 2442-1050</Text>
                            <Text style={styles.infoContact} onPress={() => Linking.openURL('tel:+552121969940')}> (21) 2196-9940</Text>
                            <Text style={styles.infoContact} onPress={() => Linking.openURL('tel:+552121969944')}> (21) 2196-9944</Text>
                            <Text style={styles.infoContact} onPress={() => Linking.openURL('tel:+552121969942')}> (21) 2196-9942</Text>
                            <Text style={styles.infoContact} onPress={() => Linking.openURL('tel:+5521998886044')}> (21) 99888-6044</Text>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="phone" /> Telefones (Administração)</Text>
                            <Text style={styles.infoContact} onPress={() => Linking.openURL('tel:+552136373247')}> (21) 3637-3247</Text>
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
                                    <Text style={styles.buttonMainTitle} onPress={() => Linking.openURL('https://goo.gl/maps/Xf1JYn9rTHoCcwFKA')}>Ver no mapa</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxContainer}>
                        <View>
                            <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="envelope" /> Endereço</Text>
                            <Text style={styles.infoContact} onPress={() => Linking.openURL('mailto:contato@riomix.com.br')}> contato@riomix.com.br</Text>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default Contact;