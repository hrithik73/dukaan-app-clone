import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Feather } from "@expo/vector-icons"


import { productData } from "../Data/Data"
import colors from "../config/colors"
import ProductCard from '../components/ProductCard';


const ProductsScreen = () => {
    return (
        <View style={styles.container} >
            <View style={styles.header} >
                <Text style={styles.headerText} >Catalogue</Text>
                <Feather name="search" color="white" size={25} style={styles.icons} />
            </View>

            <View style={{ flex: 1 }} >
                <FlatList
                    data={productData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return (<ProductCard Data={item} />)
                    }}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center"
    },
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        backgroundColor: colors.primary
    },
    headerText: {
        top: 10,
        fontSize: 20,
        color: colors.white
    },
    icons: {
        // alignSelf: "center",
        // justifyContent: "center",
        top: 10,
        left: 120
    }
})
export default ProductsScreen