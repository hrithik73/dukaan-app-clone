import React from 'react'
import { View, StyleSheet, Text } from 'react-native';

const MarketingScreen = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.title}>To Be Implemented!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
})
export default MarketingScreen