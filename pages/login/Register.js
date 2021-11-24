import React, { useEffect }  from 'react';

import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, Pressable, BackHandler, Alert } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const backAction = () => {
    var entrar = true;
    if (entrar) {
        Alert.alert("Entrar", "Verifique os dados para continuar", [
            {
              text: "Ok",
              onPress: () => null,
              style: "cancel"
            }
          ]);
    }
  };

  export default function Register({navigation}) {
        return (
            <SafeAreaView style={styles.container}>
                <Image source={require('../../assets/logotipo.png')} />
                <View style={styles.boxForm}>
                    <Text style={styles.titleForm}>Entrar em sua conta</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuário ou E-mail"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        secureTextEntry={true}
                    />
                    <Text style={styles.textForgot}>Esqueci minha senha</Text>
                    <View style={styles.areaCenterButton}>
                        <Pressable style={styles.buttonMain} onPress={() => navigation.navigate('Conta')}>
                            <Text style={styles.buttonMainTitle}>Entrar</Text>
                        </Pressable>
                        
                        <Pressable style={styles.buttonSecundary}>
                            <Text style={styles.buttonSecundaryTitle}>Entrar sem cadastro</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.contentConta}>
                    <Text style={styles.textConta}>Ainda não tem conta?</Text><Text style={styles.textCadastre}>Cadastre-se</Text>
                </View>
            </SafeAreaView>
        );
}   


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
        borderColor: '#efefef',
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