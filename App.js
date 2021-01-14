import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import TabNavigator from './app/navigation/TabNavigator';
import NavigationTheme from "./app/navigation/NavigationTheme"
import GridContainer from './app/components/GridContainer';

const App = () => {
  return (
    < NavigationContainer theme={NavigationTheme} >
      <TabNavigator />
    </NavigationContainer >

  )
}

export default App