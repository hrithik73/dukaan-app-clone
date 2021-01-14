import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


import colors from '../config/colors'
import Button from "../components/Button"
// Linking.openURL("https://google.com")

const HeaderCard = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.header}>Share More to Earn More</Text>
            <Text style={styles.text}>Your Custumers can visit your online store and place the order from this link </Text>
            <View style={styles.linkContainer} >
                <Text style={styles.link}>sellplus.com/mano</Text>
                <Button title="Share" color="whatsapp" width="40%" height={40} />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 155,
        width: "93%",
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    header: {
        top: 10,
        left: 10,
        fontSize: 20,
        fontWeight: "bold"
    },
    link: {
        left: 10,
        color: "#D1933F",
        fontSize: 18,
        textDecorationLine: "underline"
    },
    linkContainer: {
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // margin: 10
        // backgroundColor: "red"
    },
    text: {
        fontSize: 20,
        padding: 10,
        paddingTop: 20,
        color: colors.text
    }

})
export default HeaderCard