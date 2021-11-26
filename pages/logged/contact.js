
import * as React from 'react'
import { View, StyleSheet, SafeAreaView, Platform, ScrollView, Text, Pressable, TextInput } from 'react-native'
import Header from '../../src/modules/header';

import {StatusBar} from 'react-native';
import { faBezierCurve } from '@fortawesome/free-solid-svg-icons';
import { FontAwesome } from '@expo/vector-icons';

export default class Contact extends React.Component {
    
    render() {
        return(
            <View
                style={styles.container}
            >
                <SafeAreaView
                    style={styles.safearea}
                >
                    <Header click={this.props.navigation.openDrawer} />
                    <ScrollView>
                        <View style={styles.boxContainer}>
                            <Text style={styles.titlePage}>CONTATO</Text>
                            <View></View>
                            <View style={styles.boxForm}>
                                <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="comments-o" /> Entrar em sua conta</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Nome"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="E-mail"
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Telefone"
                                />
                                <TextInput
                                    style={styles.textarea}
                                    placeholder="Mensagem"
                                />
                                <View style={styles.areaCenterButton}>
                                    <Pressable style={styles.buttonMain}>
                                        <Text style={styles.buttonMainTitle}>Envia Mensagem</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <View style={styles.boxContainer}>
                            <View style={styles.boxForm}>
                                <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="phone" /> Telefones (Vendas)</Text>
                                <Text style={styles.infoContact}> (21) 2442-1050</Text>
                                <Text style={styles.infoContact}> (21) 2196-9940</Text>
                                <Text style={styles.infoContact}> (21) 2196-9944</Text>
                                <Text style={styles.infoContact}> (21) 2196-9942</Text>
                                <Text style={styles.infoContact}> (21) 99888-6044</Text>
                            </View>
                        </View>
                        <View style={styles.boxContainer}>
                            <View style={styles.boxForm}>
                                <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="phone" /> Telefones (Administração)</Text>
                                <Text style={styles.infoContact}> (21) 3637-3247</Text>
                            </View>
                        </View>
                        <View style={styles.boxContainer}>
                            <View style={styles.boxForm}>
                                <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="map-marker" /> Endereço</Text>
                                <Text style={styles.textContact}>Rod. BR 101, km 285, s/n</Text>
                                <Text style={styles.textContact}>Trecho Manilha-Duques, Itaboraí-RJ</Text>
                                <Text style={styles.textContact}>CEP: 24.800-971</Text>
                                <Text style={styles.textContact}>Caixa Postal: 112409</Text>
                                <View style={styles.areaCenterButton}>
                                    <Pressable style={styles.buttonMain}>
                                        <Text style={styles.buttonMainTitle}>Ver no mapa</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                        <View style={styles.boxContainer}>
                            <View style={styles.boxForm}>
                                <Text style={styles.titleSection}><FontAwesome style={styles.iconContact} name="envelope" /> Endereço</Text>
                                <Text style={styles.infoContact}> contato@riomix.com.br</Text>
                            </View>
                        </View>
                    </ScrollView>
                    
                </SafeAreaView>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        display: "flex",
        paddingVertical: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        },
        boxContainer: {
            padding: 15
        },
    aboutVideo: {
        flex: 1,
        height: 220,
    },
    titlePage: {
        fontSize: 16,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: '#198942',
        marginBottom: 10,
    },
    titleSection: {
        fontSize: 18,
        color: '#1F265B',
        marginBottom: 10,
    },
    iconContact: {
        fontSize: 20
    },
    infoContact: {
        fontSize: 16,
        marginLeft: 15,
        color: '#198942',
    },
    textContact: {
        fontSize: 16,
        marginLeft: 15,
        color: '#808080',
    },
    input: {
        marginVertical: 10,
        borderColor: '#cdcdcd',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
    },
    textarea: {
        marginVertical: 10,
        borderColor: '#cdcdcd',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
        height: 250,
        display: 'flex',
        alignItems: 'flex-start',
        flex: 1,
        textAlignVertical: 'top',
    },
    textForgot: {
        color: '#1F265B',
        textAlign: 'right',
        marginVertical: 15,
        fontSize: 13,
    },
    areaCenterButton: {
        display: 'flex',
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
        
});