import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'
import { Feather } from '@expo/vector-icons'

import colors from '../config/colors';

const GridContainer = () => {

    const [items, setItems] = useState([
        { title: 'ORDERS', value: "20" },
        { title: 'TOTAL SALES', value: '₹3,012' },
        { title: 'STORE VIEWS', value: '401' },
        { title: 'PRODUCT VIEWS', value: '19,121' },
    ]);

    return (
        <View style={styles.container} >

            <View style={styles.pickerContainer} >
                <Text style={styles.header} >Overview</Text>
                <View style={styles.iconContainer} >
                    <Text style={styles.itemName} >Last Week</Text>
                    <Feather name="chevron-down" size={24} color={colors.text} />
                </View>
            </View>

            <FlatGrid
                itemDimension={130}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <Text style={styles.itemName}>{item.title}</Text>
                        <Text style={styles.itemValue}>{item.value}</Text>
                    </View>
                )}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        top: 100,
        flex: 1,
        // paddingTop: 100
        marginTop: 10,
    },
    gridView: {
        // backgroundColor: "blue",
        flex: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: "bold"
    },
    iconContainer: {
        justifyContent: "center",
        flexDirection: "row"
    },
    itemContainer: {
        backgroundColor: colors.white,
        // alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 5,
        padding: 10,
        height: 100,
    },
    itemName: {
        fontSize: 18,
        color: colors.text,
        fontWeight: '600',
    },
    itemValue: {
        fontWeight: '600',
        fontSize: 25,
        color: 'black',
        fontWeight: "bold"
    },
    pickerContainer: {
        // backgroundColor: "red",
        marginRight: 20,
        height: 50,
        left: 12,
        top: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
export default GridContainer