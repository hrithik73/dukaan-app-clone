import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { LogBox } from 'react-native'


import { tabData, Data } from "../Data/Data"
import Screen from "../components/Screen"
import Header from "../components/Header"
import colors from '../config/colors';
import GridContainer from '../components/GridContainer';
import TabContainer from '../components/TabContainer';
import OrderCardsContainer from '../components/OrderCardsContainer'
import { ScrollView } from 'react-native';
import PickerContainer from '../components/PickerContainer';


const HomeScreen = () => {

    return (
        <Screen style={styles.container} >
            <ScrollView style={{ flex: 1 }}  >
                <Header />
                <GridContainer />
                <PickerContainer
                    title="Active Orders"
                    timeInterval="View All"
                    iconName="chevron-right"
                    style={styles.pickerStyle}
                />
                <TabContainer Data={tabData} />
                <OrderCardsContainer Data={Data} />
                <StatusBar backgroundColor={colors.primary} />
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
        // flexDirection: "column",
        // backgroundColor: colors.platinum
    },
    pickerStyle: {
        // backgroundColor: "red",
        bottom: 20
    }
})
export default HomeScreen