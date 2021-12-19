import React, { Component, useContext } from 'react';
import { CommonActions } from '@react-navigation/native';

import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import PropTypes from 'prop-types';

import api from '../routes/api';
import signed from '../routes/auth';
import styles from './style-home';


export default class HomeLogin extends Component {

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };

    state = {
        username: 'fabiofreistasbr',
        password: '5s2w9s2v',
        error: '',
    };
    
    handleUsernameChange = (username) => {
        this.setState({ username });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('Conta')
    };

    handleSignInPress = async () => {
        console.log(signed);
        this.setState({ error: 'Aguarde...' });
        if (this.state.username.length === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        } else {
            await api.post('/login', {
                username: this.state.username,
                password: this.state.password,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).then(response => {
            if (response.data.status) {
                const CommonAction = CommonActions.reset({
                    index: 1,
                    routes: [
                        {name: 'Conta', params: { token: '093j2f-2309fj-h54k' }}
                    ],
                });
                this.props.navigation.dispatch(CommonAction);
            }
            else { this.setState({ error: response.data.message }); }
            })
        }
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/logotipo.png')} />
                <View style={styles.boxForm}>
                    <Text style={styles.titleForm}>Entrar em sua conta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuário"
                        value={this.state.username}
                        onChangeText={this.handleUsernameChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={this.handlePasswordChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <Text style={styles.textForgot} onPress={() => this.props.navigation.navigate('Recuperar')}>Esqueci minha senha</Text>
                    {this.state.error.length !== 0 && <Text style={styles.messageErro}>{this.state.error}</Text>}
                    <View style={styles.areaCenterButton}>
                        <Pressable style={styles.buttonMain} onPress={this.handleSignInPress}>
                            <Text style={styles.buttonMainTitle}>Entrar</Text>
                        </Pressable>

                        <Pressable style={styles.buttonSecundary} onPress={this.handleCreateAccountPress}>
                            <Text style={styles.buttonSecundaryTitle}>Entrar sem cadastro</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.contentConta}>
                    <Text style={styles.textConta}>Ainda não tem conta?</Text><Text style={styles.textCadastre} onPress={() => this.props.navigation.navigate('Registrar')}>Cadastre-se</Text>
                </View>
            </SafeAreaView>
        );
    }
}
