import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chats from '../Components/Chats';
import Status from '../Components/Status';
import Calls from '../Components/Calls';
import Header from '../Components/Header';
import Camera from '../Components/Camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const Tab = createMaterialTopTabNavigator();


const TopTabNavigaton = () => {
  const [search, setSearch] = useState(false)
  const handleSearch = () => {
    setSearch(() => (!search))
    console.log(search)

  }

  return (
    <>
      <Header handleSearch={handleSearch} search={search} setSearch={setSearch} />
      <Tab.Navigator initialRouteName='Chats' screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#1f2c34',
          zIndex: 1,
        },
        tabBarLabelStyle: {
          fontWeight: '500',
          fontSize: 14,

        },
        tabBarIndicatorStyle: {
          backgroundColor: '#03a37f',
        },
        tabBarActiveTintColor: '#03a37f',
        tabBarInactiveTintColor: '#88969f',

      }
      )}
      >
        <Tab.Screen name='Camera' component={Camera} options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (focused ? <FontAwesome name='camera' size={19} color="#03a37f" /> : <FontAwesome name='camera' size={19} color='#88969f' />),
        }} />
        <Tab.Screen name='Chats' component={Chats} options={{
          tabBarStyle: {
            ...search && { display: 'none' },
            backgroundColor: '#1f2c34',
          },
        }} />
        <Tab.Screen name='Status' component={Status} />
        <Tab.Screen name='Calls' component={Calls} />
      </Tab.Navigator>
    </>

  )
}

export default TopTabNavigaton

const styles = StyleSheet.create({})