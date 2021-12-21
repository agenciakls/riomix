import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { CommonActions } from '@react-navigation/native';

import api from '../routes/api';

import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import styles from './style-register';
import { render } from 'react-dom';
const Stack = createStackNavigator();

const Register = ({navigation}) => {
    const [nome, handleNomeChange] = useState('');
    const [email, handleEmailChange] = useState('');
    const [telefone, handleTelefoneChange] = useState('');
    const [usuario, handleUsuarioChange] = useState('');
    const [senha, handleSenhaChange] = useState('');
    const [repetesenha, handleRepeteSenhaChange] = useState('');
    const [error, handleErrorChange] = useState('');

    handleCreateAccountPress = () => {
        navigation.navigate('Home')
    };
    async function handleSignInPress () {
        handleErrorChange('Aguarde...');
        if (email.length === 0 || password.length === 0) {
            handleErrorChange('Preencha usuário e senha para continuar!');
        } else {
            const response = await api.post('/register', {
                nome: nome,
                email: email,
                telefone: telefone,
                usuario: usuario,
                senha: senha,
                repetenha: repetesenha,
            });
            if (!response.data.status) {
                const CommonAction = CommonActions.reset({
                    index: 1,
                    routes: [
                        {name: 'Conta', params: { token: '093j2f-2309fj-h54k' }}
                    ],
                });
                navigation.dispatch(CommonAction);
            }
            else { handleErrorChange('Verifique a senha para continuar'); }
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.boxForm}>
                <Text style={styles.titleArea}>Cadastre-se para receber informações!</Text>
                <Text style={styles.titleForm}>Informações de contato</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={nome}
                    onChangeText={handleNomeChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    value={email}
                    onChangeText={handleEmailChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Telefone"
                    value={telefone}
                    onChangeText={handleTelefoneChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.titleForm}>Dados de acesso</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={usuario}
                    onChangeText={handleUsuarioChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={handleSenhaChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar a senha"
                    value={repetesenha}
                    onChangeText={handleRepeteSenhaChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={true}
                />
                <View style={styles.areaCenterButton}>
                    <Pressable style={styles.buttonMain} onPress={handleSignInPress}>
                        <Text style={styles.buttonMainTitle}>Cadastrar</Text>
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

export default Register;