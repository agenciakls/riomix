import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StackActions, NavigationActions } from 'react-navigation';

import api from '../routes/api';

import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

export default class HomeLogin extends Component {
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
        email: 'fabiofreitassilvacontato@gmail.com',
        password: '5s2w9s2v',
        error: '',
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handlePasswordChange = (password) => {
        this.setState({ password });
    };

    handleCreateAccountPress = () => {
        this.props.navigation.navigate('Conta')
    };

    handleSignInPress = async () => {
        this.setState({ error: 'Aguarde...' });
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        } else {
            try {
                const response = await api.post('/login', {
                    username: this.state.email,
                    password: this.state.password,
                });
                if (!response.data.status) {
                    // this.props.navigation.navigate('Conta');
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Conta', params: { token: response.data.status } }),
                        ],
                    });
                    this.props.navigation.dispatch(resetAction);
                }
                else {
                    this.setState({ error: 'Verifique a senha para continuar' });
                }
            } catch (_err) {
                this.setState({ error: 'Houve um problema com o login, verifique suas credenciais!' });
            }
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
                        placeholder="Usuário ou E-mail"
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
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
                    <Text style={styles.textConta}>Ainda não tem conta?</Text><Text style={styles.textCadastre} onPress={() => navigation.navigate('Registrar')}>Cadastre-se</Text>
                </View>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    messageErro: {
        textAlign: 'center',
        paddingVertical: 15,
        backgroundColor: '#198942',
        color: '#ffffff'
    },
    boxForm: {
        width: '80%',
        marginTop: 50
    },
    titleForm: {
        fontSize: 18,
        fontWeight: '700',
        color: '#198942',

    },
    input: {
        marginVertical: 10,
        borderColor: '#cdcdcd',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
    },
    textForgot: {
        color: '#1F265B',
        textAlign: 'right',
        marginVertical: 15,
        fontSize: 13,
    },
    areaCenterButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonMain: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#1F265B',
        borderRadius: 7,
        width: 200,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonMainTitle: {
        textAlign: 'center',
        color: '#efefef',
        fontSize: 17,
    },
    buttonSecundary: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#808080',
        width: 200,
        display: 'flex',
        justifyContent: 'center',
    },
    buttonSecundaryTitle: {
        textAlign: 'center',
        color: '#808080',
        fontSize: 17,
    },
    contentConta: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 30,
    },
    textConta: {
        color: '#808080',
        fontSize: 14,
        paddingHorizontal: 5,
    },
    textCadastre: {
        color: '#1F265B',
        fontSize: 14,
        fontWeight: '700',
        paddingHorizontal: 5,
    },
});