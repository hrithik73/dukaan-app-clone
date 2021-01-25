import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

const Tab = ({ item }) => {

    let color = item.id === "0" ? color = colors.primary : colors.tabcolor
    let textColor = color === colors.primary ? "white" : colors.text

    return (
        <View style={[styles.container, { backgroundColor: color }]} >
            <Text style={[styles.text, { color: textColor }]}  >{item.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        margin: 5,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
        height: 40
    },
    text: {
        fontSize: 15,
        color: colors.text
    }
})
export default Tab