import React, { Component, useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import PropTypes from 'prop-types';

import api from '../routes/api';


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import styles from './style-forgot';

const ForgotPassword = ({navigation}) => {
    const [email, handleEmailChange] = useState('');
    const [error, handleErrorChange] = useState('');

    async function handleSignInPress () {
        handleErrorChange('Aguarde...');
        if (email.length === 0) {
            handleErrorChange('Preencha usuário e senha para continuar!');
        } else {
            const response = await api.post('/recuperar', {
                email: email,
            });
            if (!response.data.status) {
                const CommonAction = CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Conta', params: { token: '093j2f-2309fj-h54k' } }
                    ],
                });
                navigation.dispatch(CommonAction);
            }
            else {
                handleErrorChange('Verifique a senha para continuar');
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
                    onChangeText={handleEmailChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <View style={styles.areaCenterButton}>
                    <Pressable style={styles.buttonMain} onPress={handleSignInPress}>
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

export default ForgotPassword;
