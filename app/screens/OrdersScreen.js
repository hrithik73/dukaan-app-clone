import React from 'react'
import { View, StyleSheet, Text } from 'react-native';


import OrderCard from '../components/OrderCard';
import TabContainer from '../components/TabContainer';
import colors from '../config/colors';
const OrdersScreen = () => {

    // const Data = [
    //     {
    //         id: 1,
    //         title: "Pending (50)"
    //     },
    //     {
    //         id: 2,
    //         title: "Accepted (100)"
    //     },
    //     {
    //         id: 3,
    //         title: "Shipped (200)"
    //     }]

    const CardData = [
        {
            id: "1",
            orderId: "#28121",
            time: "Today,11:11 PM",
            price: "₹10,012",
            deleveryStatus: "Pending",
            noOfItem: "1 ITEM",
            modeOfPayment: "PAID"
        },
    ]


    const Data = [
        {
            id: "0",
            title: "All"
        },
        {
            id: "1",
            title: "Today"
        },
        {
            id: "2",
            title: "Yesterday"
        },
        {
            id: "3",
            title: "This Week"
        },
        {
            id: "4",
            title: "This Month"
        },
        {
            id: "5",
            title: "Life Time"
        }
    ]


    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.headerText} >All orders (102)</Text>

            </View>
            <TabContainer Data={Data} />
            <OrderCard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
        // padding: 10
    },
    header: {
        paddingTop: 50,
        // justifyContent: "center",
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