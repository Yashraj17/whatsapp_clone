import { HStack, Text, View } from 'native-base'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'
const Header = ({handleSearch}) => {
  return (
    <>
        <View padding={4} backgroundColor='#1f2c34' >
        <HStack style={{ alignItems:'center' }}>
            <Text flexGrow={1} fontSize={21} ml={2} fontWeight={'medium'} color='#88969f'>WhatsApp</Text>
            <TouchableOpacity onPress={handleSearch}>
            <Fontisto name='search' style={{ marginRight:17 }} size={20} color='#88969f'/>
            </TouchableOpacity>
            <Feather name='more-vertical'  size={23} color='#88969f'/>
        </HStack>
        </View>
    </>
  )
}

export default Header