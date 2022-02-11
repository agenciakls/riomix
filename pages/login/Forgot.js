import React, { Component, useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import PropTypes from 'prop-types';

import api from '../routes/api';


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import styles from './style-forgot';

export const sucessPassword = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.boxForm}>
                <Text style={styles.titleFormCenter}>Senha alterada com sucesso.</Text>
                <Text style={styles.titleFormCenter}>Clique abaixo para voltar ao início.</Text>
                <View style={styles.areaCenterButton}>
                    <Pressable style={styles.buttonMain} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.buttonMainTitle}>Voltar ao Início</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

export const modifyPassword = ({navigation, route}) => {
    const [senha, setSenha] = useState('');
    const [repete, setRepete] = useState('');
    const [error, setError] = useState('');

    async function sendForgot() {
        setError('Aguarde...'); 
        if (senha.length < 6) { setError('A senha precisa ter no mínimo 6 caracteres'); } else { 
            if (senha !== repete) { setError('As senhas estão diferentes, verifique e tente novamente.'); } else {
                const response = await api.get('/forgotpassword', {
                    params: {
                        password: senha,
                        email: route.params
                    }
                });
                if (response.data.status) {
                    navigation.navigate('Sucesso');
                }
                else {
                    setError(response.data.message);
                }
            }
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.boxForm}>
                <Text style={styles.titleForm}>Recuperar Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite a nova senha"
                    value={senha}
                    onChangeText={setSenha}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Confirme a senha"
                    value={repete}
                    onChangeText={setRepete}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <View style={styles.areaCenterButton}>
                    <Pressable style={styles.buttonMain} onPress={sendForgot}>
                        <Text style={styles.buttonMainTitle}>Alterar Senha</Text>
                    </Pressable>
                </View>
                {error.length !== 0 && <Text style={styles.messageErro}>{error}</Text>}
            </View>
            <View style={styles.contentConta}>
                <Text style={styles.textCadastre} onPress={() => navigation.navigate('Login')}>&lt; Voltar ao Login</Text>
            </View>
        </SafeAreaView>
    );
}

export const verifyForgot = ({navigation, route}) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    async function sendForgot() {
        setError('Aguarde...');
        if (code.length !== 6) {
            setError('Insira o código de 6 dígitos para continuar');
        } else {
            const response = await api.get('/forgotverify', {
                params: {
                    code: code,
                    email: route.params
                }
            });
            if (response.data.status) {
                navigation.navigate('Alterar Senha', route.params);
            }
            else {
                
                setError(response.data.message);
            }
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.boxForm}>
                <Text style={styles.titleForm}>Digite o código de 6 digitos enviado para o seu e-mail</Text>
                <TextInput
                    style={styles.input}
                    placeholder="CÓDIGO DE 6 DIGITOS"
                    value={code}
                    onChangeText={setCode}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.areaCenterButton}>
                    <Pressable style={styles.buttonMain} onPress={sendForgot}>
                        <Text style={styles.buttonMainTitle}>Confirmar</Text>
                    </Pressable>
                </View>
                {error.length !== 0 && <Text style={styles.messageErro}>{error}</Text>}
            </View>
            <View style={styles.contentConta}>
                <Text style={styles.textCadastre} onPress={() => navigation.navigate('Login')}>&lt; Voltar ao Login</Text>
            </View>
        </SafeAreaView>
    );
}

const sendEmail = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    async function sendForgot() {
        setError('Aguarde...');
        if (email.length === 0) {
            setError('Preencha usuário e senha para continuar!');
        } else {
            const response = await api.get('/forgot', {
                params: {
                    email: email,
                }
            });
            if (response.data.status) {
                
                navigation.navigate('Confirmar', email);
            }
            else {
                setError(response.data.message);
            }
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.boxForm}>
                <Text style={styles.titleForm}>Recuperar Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.areaCenterButton}>
                    <Pressable style={styles.buttonMain} onPress={sendForgot}>
                        <Text style={styles.buttonMainTitle}>Recuperar</Text>
                    </Pressable>
                </View>
                {error.length !== 0 && <Text style={styles.messageErro}>{error}</Text>}
            </View>
            <View style={styles.contentConta}>
                <Text style={styles.textCadastre} onPress={() => navigation.navigate('Login')}>&lt; Voltar ao Login</Text>
            </View>
        </SafeAreaView>
    );
}

const ForgotPassword = () => {
    return(
        
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Email" component={sendEmail} />
            <Stack.Screen name="Confirmar" component={verifyForgot} />
            <Stack.Screen name="Alterar Senha" component={modifyPassword} />
            <Stack.Screen name="Sucesso" component={sucessPassword} />
        </Stack.Navigator>
    )
}
export default ForgotPassword;
