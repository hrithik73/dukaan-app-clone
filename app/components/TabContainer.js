import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';

import Tab from '../components/Tab'

const TabContainer = ({ Data }) => {
    // console.log(Data[0].title)
    return (
        <View style={styles.container} >
            {/* <Text style={{ color: "red" }} >{Data[0].title}</Text> */}
            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
                horizontal
                data={Data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Tab item={item} />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        left: 10,
        // flex: 1,
        height: 60,
        // backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },
    list: {
        justifyContent: "center",
        alignItems: "center"
    }
})
export default TabContainer