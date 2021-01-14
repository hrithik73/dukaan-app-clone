import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';


import Screen from "../components/Screen"
import Header from "../components/Header"
import colors from '../config/colors';
import GridContainer from '../components/GridContainer';

const HomeScreen = () => {
    return (
        <Screen style={styles.container} >
            <Header />
            <GridContainer />
            <StatusBar backgroundColor={colors.primary} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        flex: 1,
        flexDirection: "column"
        // backgroundColor: colors.platinum
    }
})
export default HomeScreen