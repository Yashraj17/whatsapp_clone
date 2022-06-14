import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import TopTabNavigaton from './TopTabNavigaton';
import Message from '../Components/Message';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import FabComponent from '../Components/FabComponent';


const Stack = createStackNavigator();

const StackNavigation = () => {
  const [page, setPage] = useState('')
  return (
    <NativeBaseProvider>
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}
      >

        {/* ///top navigation */}
        <Stack.Screen name="Home" component={TopTabNavigaton}
          // get routename
          options={({ route }) => ({
            headerShown: false,
            tabBarStyle: ((route) => {
              const routename = getFocusedRouteNameFromRoute(route)
              if (routename === undefined || routename === 'Chats') {
                useEffect(() => {
                  setPage('Chats')
                }, [routename])
              }
              else if (routename === 'Status') {
                useEffect(() => {
                  setPage('Status')
                }, [routename])
              }
              else if (routename === 'Camera') {
                useEffect(() => {
                  setPage('Camera')
                }, [routename])
              }
              else {
                useEffect(() => {
                  setPage('Calls')
                }, [routename])
              }
            })(route),

          })}
        />

        <Stack.Screen name='Message' component={Message} />

        {/* Fab Component */}
      </Stack.Navigator>
      <FabComponent page={page} />
    </NativeBaseProvider>
 
  )
}

export default StackNavigation

const styles = StyleSheet.create({})