
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

export const Item = ({ item }) => (
    <View style={styles.item} onPress={() => navigation.navigate('Notícia')}>
        <View>
            <Image style={StyleSheet.imgNoticias} source={require('../../assets/example/example-new-list.png')} />
        </View>
        <View style={styles.boxText}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.content}>{item.content}</Text>
        </View>
    </View>
);
export const renderItem = ({ item }) => (
    <Item item={item} />
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#dedede',        
        borderRadius: 10,
        flexDirection: 'row',
        marginVertical: 5,
        
    },
    boxText: {
        flex: 1,
        padding: 10,
    },
    imgNoticias: {
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
        title: {
            fontSize: 14,
            color: '#1F265B'
        },
        content: {
            fontSize: 12,
            color: '#565656'
        }
});