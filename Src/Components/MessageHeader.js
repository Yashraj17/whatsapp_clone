import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading, HStack, VStack,Avatar } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MessageHeader = ({navigation}) => {
  return (
    <VStack backgroundColor='#1f2c34' paddingX={2} paddingY={3} >
    <HStack  justifyContent='space-between' paddingBottom={1}>
      <HStack space={2} top={1}>
        <TouchableOpacity onPress={()=>navigation.navigate('Chats')}>
        <AntDesign name='arrowleft' size={25} color='white' style={{top:4}} />
        </TouchableOpacity>
        <Avatar size="36px" source={{
              uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
            }} />
            <Heading style={{color:'white',fontSize:20,fontWeight:'500'}}>Uttsav Kumar</Heading>
      </HStack>
      <HStack space={6} marginRight={2} top={1.5}>
        <Ionicons name='videocam' color='white' size={23} />
        <MaterialIcons name='phone' color='white' size={23} />
        <Feather name='more-vertical' size={23} color='white' />
      </HStack>
    </HStack>
</VStack>
  )
}

export default MessageHeader

const styles = StyleSheet.create({})