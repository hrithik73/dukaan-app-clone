import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

import { Feather } from "@expo/vector-icons"
import { tabData, Data } from "../Data/Data"
import OrderCardsContainer from '../components/OrderCardsContainer'
import TabContainer from '../components/TabContainer'
import colors from '../config/colors';


const OrdersScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.headerText} >All orders (102)</Text>
                <Feather name="sliders" size={20} color="white" style={styles.filterIcon} />
            </View>
            <TabContainer Data={tabData} />
            <OrderCardsContainer Data={Data} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
        // padding: 10
    },
    filterIcon: {
        left: 110,
        transform: [{ rotate: '90deg' }]
    },
    header: {
        flexDirection: "row",
        paddingTop: 50,
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        backgroundColor: colors.primary
    },
    headerText: {
        color: colors.white,
        fontSize: 20
    }
})
export default OrdersScreen