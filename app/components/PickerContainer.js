import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Feather } from '@expo/vector-icons'
import colors from '../config/colors';

const PickerContainer = ({ title, timeInterval, iconName, style }) => {
    return (
        <View style={[styles.pickerContainer, style]} >
            <Text style={styles.header} >{title}</Text>
            <View style={styles.iconContainer} >
                <Text style={styles.itemName} >{timeInterval}</Text>
                <Feather name={iconName} size={24} color={colors.text} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        // backgroundColor: "red",
        marginRight: 20,
        height: 50,
        left: 12,
        top: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        fontSize: 20,
        fontWeight: "bold"
    }, iconContainer: {
        justifyContent: "center",
        flexDirection: "row"
    },
    itemName: {
        fontSize: 18,
        color: colors.text,
        fontWeight: '600',
    },
})
export default PickerContainer