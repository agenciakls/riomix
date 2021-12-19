import React, { Component } from 'react';
import { CommonActions } from '@react-navigation/native';
import { Text, View, Image, SafeAreaView, TextInput, Pressable } from 'react-native';

import PropTypes from 'prop-types';

import api from '../routes/api';


import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import styles from './style-forgot';

class ForgotPassword extends Component {
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
        email: '',
        error: '',
    };

    handleEmailChange = (email) => {
        this.setState({ email });
    };

    handleSignInPress = async () => {
        this.setState({ error: 'Aguarde...' });
        if (this.state.email.length === 0) {
            this.setState({ error: 'Preencha usuário e senha para continuar!' }, () => false);
        } else {
            const response = await api.post('/recuperar', {
                email: this.state.email,
            });
            if (!response.data.status) {
                const CommonAction = CommonActions.reset({
                    index: 1,
                    routes: [
                        { name: 'Conta', params: { token: '093j2f-2309fj-h54k' } }
                    ],
                });
                this.props.navigation.dispatch(CommonAction);
            }
            else {
                this.setaState({ error: 'Verifique a senha para continuar' });
            }
        }
    };
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/logo.png')} />
                <View style={styles.boxForm}>
                    <Text style={styles.titleForm}>Recuperar Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={this.handleEmailChange}
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <View style={styles.areaCenterButton}>
                        <Pressable style={styles.buttonMain} onPress={() => this.props.navigation.navigate('Conta')}>
                            <Text style={styles.buttonMainTitle}>Recuperar</Text>
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

export default ForgotPassword;
