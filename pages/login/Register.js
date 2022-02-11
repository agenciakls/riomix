import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

import { CommonActions } from '@react-navigation/native';

import api from '../routes/api';

import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import styles from './style-register';
import { render } from 'react-dom';
const Stack = createStackNavigator();

export const registerSucess = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.boxForm}>
                <Text style={styles.titleFormCenter}>Cadastro realizado com sucesso.</Text>
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


export const registerVerify = ({navigation, route}) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');

    async function sendForgot() {
        setError('Aguarde...');
        if (code.length !== 6) {
            setError('Insira o código de 6 dígitos para continuar');
        } else {
            const response = await api.get('/registerverify', {
                params: {
                    code: code,
                    username: route.params
                }
            });
            if (response.data.status) {
                navigation.navigate('Cadastro Realizado');
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

export const registerData = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const [error, handleErrorChange] = useState('');
    
    async function handleSignInPress () {
        handleErrorChange('Aguarde...');
        if (name.length === 0 || email.length === 0 || phone.length === 0 || username.length === 0 || password.length === 0 || confirm.length === 0) {
            handleErrorChange('Preencha todos os dados para continuar!');
        } 
        else if (password !== confirm) { handleErrorChange('As senhas são diferentes, tente novamente'); }
        else {
            const response = await api.get('/register', { params: { name: name, email: email, phone: phone, username: username, password: password, confirm: confirm, }});
            if (response.data.status) { navigation.navigate('Confirmar', username); }
            else { handleErrorChange(response.data.message); }
        }
    };
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logo.png')} />
            <View style={styles.boxForm}>   
                <Text style={styles.titleArea}>Cadastre-se para receber informações!</Text>
                <Text style={styles.titleForm}>Informações de contato</Text>
                <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} autoCapitalize="none" autoCorrect={false} />
                <TextInput style={styles.input} placeholder="E-mail" value={email} onChangeText={setEmail} autoCapitalize="none" autoCorrect={false} />
                <TextInput style={styles.input} placeholder="phone" value={phone} onChangeText={setPhone} autoCapitalize="none" autoCorrect={false} />
                <Text style={styles.titleForm}>Dados de acesso</Text>
                <TextInput style={styles.input} placeholder="Usuário" value={username} onChangeText={setUsername} autoCapitalize="none" autoCorrect={false} />
                <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} />
                <TextInput style={styles.input} placeholder="Confirmar a senha" value={confirm} onChangeText={setConfirm} autoCapitalize="none" autoCorrect={false} secureTextEntry={true} />
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


const Register = () => {
    return(
        
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Cadastro" component={registerData} />
            <Stack.Screen name="Confirmar" component={registerVerify} />
            <Stack.Screen name="Cadastro Realizado" component={registerSucess} />
        </Stack.Navigator>
    )
}

export default Register;