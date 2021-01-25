import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native';

import OrderCard from './OrderCard';

const OrderCardsContainer = ({ Data }) => {
    // console.log(Data)
    return (
        <View style={styles.container} >
            <FlatList
                style={styles.list}
                data={Data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    return (<OrderCard Data={item} />)
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "red"
    },
    list: {
        flex: 1
    }
})
export default OrderCardsContainer