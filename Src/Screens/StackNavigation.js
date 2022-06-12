import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopTabNavigaton from './TopTabNavigaton';
import Message from '../Components/Message';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
   <Stack.Navigator>

    {/* ///top navigation */}
    <Stack.Screen name="Home" component={TopTabNavigaton} />
    <Stack.Screen name='Message' component={Message}/>

   </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})