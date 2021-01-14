import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Feather } from '@expo/vector-icons';

import HomeScreen from "../screens/HomeScreen"
import OrdersScreen from '../screens/OrdersScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MarketingScreen from '../screens/MarketingScreen';
import AccountScreen from '../screens/AccountScreen';
import BatchedBridge from 'react-native/Libraries/BatchedBridge/BatchedBridge';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />

                }}
            />

            <Tab.Screen
                name="Orders"
                component={OrdersScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="shopping-bag" size={size} color={color} />,
                    tabBarBadge: 3
                }}
            />

            <Tab.Screen
                name="Products"
                component={ProductsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="grid" size={size} color={color} />
                }}
            />

            <Tab.Screen
                name="Marketing"
                component={MarketingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="layers" size={size} color={color} />
                }}
            />

            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />
                }}
            />


        </Tab.Navigator>
    )
}

export default TabNavigator