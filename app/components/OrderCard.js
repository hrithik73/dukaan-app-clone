import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native';
import { Badge } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import colors from '../config/colors'
import DeleveryStatus from "../components/DeleveryStatus"


const OrderCard = ({ Data }) => {

    // console.log(Data)

    // const Data = {
    //     id: "1",
    //     orderId: "#28121",
    //     time: "Today,11:11 PM",
    //     price: "₹10,012",
    //     deleveryStatus: "Pending",
    //     noOfItem: "1 ITEM",
    //     modeOfPayment: "COD",
    //     url: "https://picsum.photos/200",
    //     newStatus: true
    // }
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

                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    <Image style={styles.image} source={require("../assets/sample-image.jpg")} />
                    <View style={styles.priceContainer} >
                        <Text style={styles.date} >{Data.noOfItem}</Text>
                        <Text style={styles.priceText}>{Data.price}</Text>
                    </View>
                </View>


                {Data.modeOfPayment === "PAID" &&
                    <View style={[styles.paidBadgeStyle, { backgroundColor: "#FADDE1" }]} >
                        <Text style={{ color: "red", fontWeight: "bold" }}>PAID</Text>
                    </View>
                }
                {Data.modeOfPayment === "COD" &&
                    <View style={[styles.paidBadgeStyle, { backgroundColor: "#FFEAE2" }]} >
                        <Text style={{ color: "#DC9769", fontWeight: "bold" }}>COD</Text>
                    </View>
                }

            </View>

            <View style={styles.bottomConatiner} >
                {Data.deleveryStatus === "Pending" &&
                    <DeleveryStatus title="Pending" />
                }
                {Data.deleveryStatus === "Shipped" &&
                    <DeleveryStatus title="Shipped" />
                }
                {Data.deleveryStatus === "Accepted" &&
                    <DeleveryStatus title="Accepted" />
                }
                <TouchableOpacity style={styles.detailsButton} >
                    <Text style={{ fontWeight: "800" }} >Details</Text>
                    <Feather name="chevron-right" size={15} color="black" />
                </TouchableOpacity>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    bottomConatiner: {
        // flex: 1,
        borderTopWidth: 1,
        borderTopColor: colors.tabcolor,
        marginHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    container: {
        flex: 1,
        borderRadius: 10,
        height: "23%",
        marginHorizontal: 15,
        marginVertical: 10,
        backgroundColor: colors.white
    },
    date: {
        fontSize: 18,
        color: colors.text
    },
    detailsButton: {
        height: 30,
        width: 90,
        padding: 5,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.tabcolor
    },
    firstlineContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    },
    imageContainer: {
        // flex: 1,
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "red"
    },
    image: {
        borderRadius: 10,
        height: 70,
        width: 70
    },
    newBadgeStyle: {
        borderRadius: 5,
        height: 20,
        width: 50
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
        borderRadius: 5,
        height: 25,
        width: 50,
        justifyContent: "center",
        alignItems: "center"
    }

})
export default OrderCard