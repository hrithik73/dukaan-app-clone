import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native';
import { Switch } from 'react-native-switch';
import { Feather } from '@expo/vector-icons';

import colors from '../config/colors';

const ProductCard = ({ Data }) => {

    console.log(Data)
    // const Data = {
    //     id: "1",
    //     title: "Capachino",
    //     quntity: "1",
    //     price: "₹399",
    //     inStock: true,
    // }

    return (
        <View style={styles.container} >
            <View style={{ flexDirection: "row" }} >
                <Image source={require("../assets/sample-image.jpg")} style={styles.image} />

                <View style={styles.priceContainer}>
                    <Text style={{ fontSize: 18 }}>{Data.title}</Text>
                    <Text style={{ padding: 1 }}>{Data.quntity} Unit</Text>
                    <Text style={styles.priceText} >{Data.price}</Text>

                    <View style={styles.swicthContainer} >
                        {Data.inStock ? <Text style={{ color: "#63c181" }}>In Stock</Text> : <Text style={{ color: "red" }}>Out Of Stock</Text>}
                        <Switch
                            value={true}
                            disabled={false}
                            backgroundActive={colors.primary}
                            activeText={''}
                            barHeight={20}
                            circleSize={20}
                            circleBorderWidth={0.6}
                        />
                    </View>

                </View>
            </View>

            <View style={styles.shareContainer} >
                <View style={{ flexDirection: "row" }} >
                    <Feather name="share-2" size={24} color="black" />
                    <Text style={{ left: 5, fontSize: 18 }} >Share Product</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "row",
        // justifyContent: "center",
        // alignItems: "center",
        borderRadius: 10,
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        height: 170,
        backgroundColor: colors.white
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 10,
    },
    priceText: {
        top: 4,
        fontSize: 20,
        fontWeight: "bold"
    },
    priceContainer: {
        flex: 1,
        left: 10,
        marginRight: 10,
        paddingRight: 10

    },
    swicthContainer: {
        top: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    shareContainer: {
        paddingTop: 10,
        alignItems: "center",
        top: 10,
        borderTopWidth: 1.5,
        borderTopColor: colors.tabcolor,

    }

})
export default ProductCard