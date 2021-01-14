import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

import colors from '../config/colors';
import HeaderCard from './HeaderCard';

const Header = ({ title = "Mano Super Market" }) => {
    return (
        // <View style={styles.container} >
        <View style={styles.headerCardContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{title}</Text>
                <Image style={styles.verificationImage} source={require("../assets/correct.png")} />

                <View style={styles.offerCard}>
                    <Text style={styles.offerHeader} >Your Plan</Text>
                    <Text style={styles.offerText}>100% FREE</Text>
                </View>
            </View>
            <HeaderCard />
        </View>

        // </View>
    );
}

const styles = StyleSheet.create({
    headerCardContainer: {
        // flex: 1,
        backgroundColor: colors.primary,
        height: 150,
        // justifyContent: "center",
        alignItems: "center",
    },
    headerContainer: {
        // backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center",
        height: 80,
        marginLeft: 10,
        top: 10,
        right: 10
    },
    headerText: {
        fontSize: 25,
        color: "white",
    },
    offerCard: {
        left: 15,
        borderWidth: 1,
        borderColor: colors.white,
        height: 60,
        width: 110,
        justifyContent: "center",
        alignItems: "center"
    },
    offerHeader: {
        fontSize: 18,
        color: colors.secondery,
    },
    offerText: {
        fontSize: 20,
        color: colors.white,
        fontWeight: "bold"
    },
    verificationImage: {
        borderRadius: 15,
        backgroundColor: "white",
        height: 30,
        width: 30,
        marginLeft: 4
    }
})
export default Header