import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Badge } from 'react-native-elements'

const DeleveryStatus = ({ title }) => {

    let status = ""
    if (title === "Pending") {
        status = "warning"
    }
    else if (title === "Shipped") {
        status = "primary"
    }
    else {
        status = "success"
    }
    return (
        <View style={styles.container} >
            <Badge status={status} badgeStyle={styles.badgeStyle} />
            <Text>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    badgeStyle: {
        height: 12,
        width: 12,
        borderRadius: 6,
        margin: 2
    }
})
export default DeleveryStatus