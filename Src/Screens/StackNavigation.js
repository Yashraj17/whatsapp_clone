import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopTabNavigaton from './TopTabNavigaton';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
   <Stack.Navigator>

    {/* ///top navigation */}
    <Stack.Screen name="Home" component={TopTabNavigaton} />

   </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})