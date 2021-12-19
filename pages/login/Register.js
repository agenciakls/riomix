import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CommonActions } from '@react-navigation/native';

import api from '../routes/api';

import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import styles from './style-register';
import { render } from 'react-dom';
const Stack = createStackNavigator();

export default class Register extends Component {
    static navigationOptions = {
        header: null,
    };

    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
            dispatch: PropTypes.func,
        }).isRequired,
    };

    state = {
        nome: '',
        email: '',
        telefone: '',
        usuario: '',
        senha: '',
        repetesenha: '',
        error: '',
    };

    handleNomeChange = (nome) => {
        this.setState({ nome });
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };
    

    handleTelefoneChange = (telefone) => {
        this.setState({ telefone });
    };
    

    handleUsernameChange = (username) => {
        this.setState({ username });
    };

    handleSenhaChange = (senha) => {
        this.setState({ senha });
    };

    handleRepeteSenhaChange = (repetesenha) => {
        this.setState({ repetesenha });
    };

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('Home')
    };

    handleSignInPress = async () => {
        this.setState({ error: 'Aguarde...' });
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        } else {
                const response = await api.post('/register', {
                    nome: this.state.nome,
                    email: this.state.email,
                    telefone: this.state.telefone,
                    usuario: this.state.usuario,
                    senha: this.state.senha,
                    repetenha: this.state.repetesenha,
                });
                if (!response.data.status) {
                    const CommonAction = CommonActions.reset({
                        index: 1,
                        routes: [
                            {name: 'Conta', params: { token: '093j2f-2309fj-h54k' }}
                        ],
                    });
                    this.props.navigation.dispatch(CommonAction);
                }
                else {
                    this.setState({ error: 'Verifique a senha para continuar' });
                }
        }
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/logo.png')} />
                <View style={styles.boxForm}>
                    <Text style={styles.titleArea}>Cadastre-se para receber informações!</Text>
                    <Text style={styles.titleForm}>Informações de contato</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={this.state.nome}
                        onChangeText={this.handleNomeChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Telefone"
                        secureTextEntry={true}
                    />
                    <Text style={styles.titleForm}>Dados de acesso</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuário"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Repetir a Senha"
                        secureTextEntry={true}
                    />
                    <View style={styles.areaCenterButton}>
                        <Pressable style={styles.buttonMain} onPress={() => navigation.navigate('Conta')}>
                            <Text style={styles.buttonMainTitle}>Entrar</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.contentConta}>
                    <Text style={styles.textCadastre} onPress={() => this.props.navigation.navigate('Login')}>&lt; Voltar ao Login</Text>
                </View>
            </SafeAreaView>
        );
    }
}   
