import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Feather } from "@expo/vector-icons"
import { TouchableOpacity } from 'react-native-gesture-handler';

import colors from "../config/colors"
import AccoutFeature from '../components/AccoutFeature';

const AccountScreen = () => {
    return (
        <View style={styles.container} >

            <View style={styles.header} >
                <Text style={styles.headerText} >Account</Text>
                <TouchableOpacity style={styles.supportButton} >
                    <Feather name="info" size={20} color={colors.primary} />
                    <Text style={{ left: 5, fontSize: 15, color: colors.primary }} >Support</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.profileContainer}>
                <Image style={styles.imgae} source={require("../assets/sample-image.jpg")} />
                <View style={styles.titleContainer}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }} >Mano Super Market</Text>
                    <Text style={{ fontSize: 15, color: colors.primary, top: 5 }} >Edit bussiness details</Text>
                </View>
            </View>

            <View style={styles.instructionContainer} >
                <AccoutFeature
                    icon="youtube"
                    title="How to Use Dukaan App"
                    rightArrow={true}
                    switchFlag={false}
                />
                <AccoutFeature
                    icon="truck"
                    title="Delevery Charges"
                    rightArrow={true}
                    switchFlag={false}
                />
                <AccoutFeature
                    icon="whatsapp"
                    title="WhatsApp ChatSupport"
                    rightArrow={false}
                    switchFlag={true}
                />
                <AccoutFeature
                    icon="smartphone"
                    title="Share Own App"
                    rightArrow={true}
                    switchFlag={false}
                />
                <AccoutFeature
                    icon="code"
                    title="Get Your QR Code"
                    rightArrow={true}
                    switchFlag={false}
                />
                <AccoutFeature
                    icon="more-horizontal"
                    title="Additional Information "
                    rightArrow={true}
                    switchFlag={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        backgroundColor: colors.primary
    },
    headerText: {
        paddingLeft: 80,
        top: 10,
        fontSize: 20,
        color: colors.white
    },
    imgae: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    instructionContainer: {
        borderTopWidth: 2,
        borderTopColor: colors.tabcolor,
        margin: 15
    },
    supportButton: {
        left: 50,
        top: 10,
        flexDirection: "row",
        borderRadius: 5,
        right: 10,
        backgroundColor: "white",
        height: 35,
        width: 100,
        justifyContent: "center",
        alignItems: "center"
    },
    profileContainer: {
        // top: 15,
        margin: 15,
        flexDirection: "row",
        // backgroundColor: "red"
    },
    titleContainer: {
        left: 10,
        marginVertical: 20
    }
})
export default AccountScreen