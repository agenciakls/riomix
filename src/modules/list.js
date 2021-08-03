
import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

export const Item = ({ title }) => (
<View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
</View>
);
export const renderItem = ({ item }) => (
    <Item title={item.title} />
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#dedede',        
        padding: 50,
        margin: 15,
        borderRadius: 10
    },
    title: {
        
    }
});