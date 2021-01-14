import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

import colors from '../config/colors'

const AppButton = ({ title, onPress, color = "primary", icon = "whatsapp", width = "100%", height }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: colors[color], width, height }]} onPress={onPress}  >
            { icon && <FontAwesome name={icon} size={30} color="white" style={styles.icon} />}
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>

    )
}
const styles = StyleSheet.create({
    button: {
        //flex: 1,
        flexDirection: "row",
        backgroundColor: colors.primary,
        borderRadius: 10,
        alignItems: 'center',
        // justifyContent: "",
        padding: 10,
        marginVertical: 10,

    },
    buttonText: {
        color: colors.white,
        fontSize: 20,
        // textTransform: 'uppercase'.
    },
    icon: {
        left: 10,
        marginRight: 20,
    }
})

export default AppButton;