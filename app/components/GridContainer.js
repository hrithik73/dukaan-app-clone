import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { FlatGrid } from 'react-native-super-grid'

import { OrderData } from '../Data/Data'
import colors from '../config/colors';
import PickerContainer from './PickerContainer';

const GridContainer = () => {

    return (
        <View style={styles.container} >
            <PickerContainer
                iconName="chevron-down"
                title="Overview"
                timeInterval="Last Week"
            />
            <FlatGrid
                scrollEnabled={false}
                itemDimension={130}
                data={OrderData}
                style={styles.gridView}
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
        // backgroundColor: "red",
        // paddingTop: 100
        marginTop: 10,
        marginBottom: 90
    },
    gridView: {
        // backgroundColor: "blue",
        flex: 1,
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

})
export default GridContainer