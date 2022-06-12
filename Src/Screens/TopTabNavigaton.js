import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chats from '../Components/Chats';
import Status from '../Components/Status';
import Calls from '../Components/Calls';
import { NativeBaseProvider } from 'native-base';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigaton = () => {
  return (
    <NativeBaseProvider>
   <Tab.Navigator>
        <Tab.Screen name='Chats' component={Chats} />
        <Tab.Screen name='Status' component={Status} />
        <Tab.Screen name='Calls' component={Calls} />
   </Tab.Navigator>
   </NativeBaseProvider>
  )
}

export default TopTabNavigaton

const styles = StyleSheet.create({})