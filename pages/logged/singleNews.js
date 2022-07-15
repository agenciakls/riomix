
import React from 'react'
import { View, StyleSheet, SafeAreaView, ScrollView, Text, Image } from 'react-native'
import Header from '../modules/header';

import styleSingle from './style-news-single';

function SingleNoticias({navigation, route}) {
    return(
        <View
            style={styleSingle.container}
        >
            <SafeAreaView
                style={styleSingle.safearea}
            >
                <Header click={navigation.openDrawer} />
                <ScrollView>
                    <View style={styleSingle.boxContainer}>
                    <Text style={styleSingle.titleNew} onPress={() => navigation.goBack(null)}>VOLTAR </Text>
                    <Text style={styleSingle.titlePage}>Notícias</Text>
                        <Text style={styleSingle.titleNew}>{route.params.title} </Text>
                        <View>
                            <Text style={styleSingle.aboutParagraph}>
                                {route.params.content}
                            </Text>
                        </View>
                        <Image source={require('../../assets/example/example-multimedia.png')} style={styleSingle.imageText} />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
export default SingleNoticias;
