
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chats from '../Components/Chats';
import Status from '../Components/Status';
import Calls from '../Components/Calls';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigaton = () => {
  return (
   <Tab.Navigator>
        <Tab.Screen name='Chats' component={Chats} />
        <Tab.Screen name='Status' component={Status} />
        <Tab.Screen name='Calls' component={Calls} />
   </Tab.Navigator>
  )
}

export default TopTabNavigaton

const styles = StyleSheet.create({})