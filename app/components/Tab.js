import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

const Tab = ({ title, color }) => {

    return (
        <View style={styles.container} >
            <Text style={styles.text}  >{title}</Text>
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
        backgroundColor: colors.tabcolor,
        height: 40
    },
    text: {
        fontSize: 15,
        color: colors.text
    }
})
export default Tab