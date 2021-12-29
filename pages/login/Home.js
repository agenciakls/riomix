import React, { useContext, useState } from 'react';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import styles from './style-home';
import AuthContext from '../routes/auth';

const HomeLogin = ({navigation}) => {
    const { login, loginAnonymous } = useContext(AuthContext);
    const [username, handleUsernameChange] = useState('');
    const [password, handlePasswordChange] = useState('');
    const [error, handleErrorChange] = useState('');

    async function handleSignInPress () {
        handleErrorChange('Aguarde...');
        if (username.length === 0 || password.length === 0) {
            handleErrorChange('Preencha usuário e senha para continuar!');
        } else {
            await login(username, password);
        }
    };
    async function HandleLoginAnonymous() {
        await loginAnonymous();
    }
    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('../../assets/logotipo.png')} />
            <View style={styles.boxForm}>
                <Text style={styles.titleForm}>Entrar em sua conta</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={handleUsernameChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={handlePasswordChange}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Text style={styles.textForgot} onPress={() => navigation.navigate('Recuperar')}>Esqueci minha senha</Text>
                {error.length !== 0 && <Text style={styles.messageErro}>{error}</Text>}
                <View style={styles.areaCenterButton}>
                    <Pressable style={styles.buttonMain} onPress={handleSignInPress}>
                        <Text style={styles.buttonMainTitle}>Entrar</Text>
                    </Pressable>

                    <Pressable style={styles.buttonSecundary} onPress={HandleLoginAnonymous}>
                        <Text style={styles.buttonSecundaryTitle}>Entrar sem cadastro</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.contentConta}>
                <Text style={styles.textConta}>Ainda não tem conta?</Text><Text style={styles.textCadastre} onPress={() => navigation.navigate('Registrar')}>Cadastre-se</Text>
            </View>
        </SafeAreaView>
    );
}
export default HomeLogin;