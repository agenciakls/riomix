
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';

export const Item = ({ item }) => (
<View style={styles.item}>
    <View style={styles.boxText}>
        <View style={styles.singleMedia}>
            <FontAwesome style={styles.iconMedia} name="globe" />
            <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
            <Image style={styles.imgMedia} source={require('../../assets/example/example-multimedia.png')} />
        </View>
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
        flexDirection: 'row',
        marginVertical: 10,
    },
    boxText: {
        flex: 1,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    singleMedia: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
        iconMedia: {
            paddingVertical: 1,
            paddingRight: 4,
            fontSize: 20,
            color: '#1F265B',
        },
    imgMedia: {
        flex: 1,
        width: '100%',
    },
        title: {
            fontSize: 16,
            color: '#1F265B',
            fontWeight: '700',
        },
        content: {
            fontSize: 12,
            color: '#565656'
        }
});