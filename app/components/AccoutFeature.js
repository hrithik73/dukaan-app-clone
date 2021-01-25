import React from 'react'
import { View, StyleSheet, Text } from 'react-native';
import { Switch } from 'react-native-switch';
import { Feather, FontAwesome } from "@expo/vector-icons"
import colors from "../config/colors"

const AccoutFeature = ({ icon, title, rightArrow, switchFlag }) => {
    return (
        <View style={styles.container} >
            <View style={styles.titleContainer} >
                {icon === "whatsapp" ? <FontAwesome name={icon} color="black" size={30} /> : <Feather name={icon} color="black" size={30} />}

                <Text style={styles.title} >{title}</Text>
            </View>
            {rightArrow && <Feather name="chevron-right" size={25} />}
            {switchFlag && <Switch
                value={true}
                disabled={false}
                backgroundActive={colors.primary}
                activeText={''}
                barHeight={20}
                circleSize={20}
                circleBorderWidth={0.6}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        alignSelf: 'center',
        left: 15,
        fontSize: 20
    },
    titleContainer: {
        flexDirection: "row"
    }
})
export default AccoutFeature