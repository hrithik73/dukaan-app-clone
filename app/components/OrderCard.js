import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'

import colors from '../config/colors';


const OrderCard = () => {

    const Data = {
        id: "1",
        orderId: "#28121",
        time: "Today,11:11 PM",
        price: "₹10,012",
        deleveryStatus: "Pending",
        noOfItem: "1 ITEM",
        modeOfPayment: "PAID",
        url: "https://picsum.photos/200",
        newStatus: true
    }
    return (
        <View style={styles.container} >

            <View style={styles.firstlineContainer}>
                <View style={styles.orderIdContainer} >
                    <Text style={styles.orderIdText} >Order {Data.orderId}</Text>
                    {Data.newStatus && < Badge status="success" value="NEW" badgeStyle={styles.newBadgeStyle} />}
                </View>
                <Text style={styles.date} >{Data.time}</Text>
            </View>

            <View style={styles.imageContainer} >
                <Image style={styles.image} source={require("../assets/sample-image.jpg")} />

                <View style={styles.priceContainer} >
                    <Text style={styles.date} >{Data.noOfItem}</Text>
                    <Text style={styles.priceText}>{Data.price}</Text>
                </View>

                {Data.modeOfPayment === "PAID" &&
                    <Badge status="error" value={Data.modeOfPayment} badgeStyle={styles.paidBadgeStyle} />
                }

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    newBadgeStyle: {
        borderRadius: 5,
        height: 20,
        width: 50
    },
    container: {
        // flex: 1,
        borderRadius: 10,
        height: "23%",
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: colors.white
    },
    date: {
        fontSize: 20,
        color: colors.text
    },
    firstlineContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    imageContainer: {
        flex: 1,
        flexDirection: "row",
        // justifyContent: "center"
        // alignItems: "center"
        // backgroundColor: "red"
    },
    image: {
        borderRadius: 10,
        height: 70,
        width: 70
    },
    orderIdContainer: {
        flexDirection: "row",
        // backgroundColor: "red",
        justifyContent: "center",
        // alignItems: "center"
    },
    orderIdText: {
        fontSize: 20,
        fontWeight: "bold",
        right: 10,
    },
    priceText: {
        fontSize: 20,
        color: colors.primary,
        fontWeight: "bold"
    },
    priceContainer: {
        left: 10,
        justifyContent: "center"
    },
    paidBadgeStyle: {
        height: 30,
        width: 60
    }

})
export default OrderCard