import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading, NativeBaseProvider, HStack } from 'native-base'

const Message = () => {
  return (
    <View style={{flex:1,backgroundColor:'#111b21'}}>
        <NativeBaseProvider>
            <HStack style={{position:'absolute',bottom:0}} bgColor='red.100'>
                    <Heading color='white'>hello</Heading>
            </HStack>
        </NativeBaseProvider>
     
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})