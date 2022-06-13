import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box, HStack, VStack, Avatar, Heading, Spacer, ScrollView, Fab } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
import FabComponent from './FabComponent';

const Chats = ({ navigation }) => {

  return (

    <View style={{ backgroundColor: '#111b21', flex: 1 }}>
      {/* //// fab icon */}
      <FabComponent />
      {/* <Fab shadow={2} boxSize='58px' bgColor='#01a985' icon={<MaterialIcons color="white" name="message"  size={28} />} /> */}

      <VStack space={1} marginTop={1}>
        <ScrollView>

          {/* /////user list */}
          <TouchableOpacity onPress={() => { navigation.navigate('Message') }}>
            <Box padding={3}>
              <HStack space={4} >
                <Avatar size="50px" source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
                }} />
                <VStack top={1}>
                  <Heading color='white' fontSize={15} fontWeight='600'>Uttsav Kumar</Heading>
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                  }}>Send 13m ago </Text>
                </VStack>
                <Spacer />
                <Text color="coolGray.600" style={{ fontSize: 12 }}>7:00 am </Text>
              </HStack>
            </Box>
          </TouchableOpacity>


          <Box padding={3}>
            <HStack space={4} >
              <Avatar size="50px" source={{
                uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
              <VStack top={1}>
                <Heading color='white' fontSize={15} fontWeight='600'>Uttsav Kumar</Heading>
                <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>Send 13m ago </Text>
              </VStack>
              <Spacer />
              <Text color="coolGray.600" style={{ fontSize: 12 }}>7:00 am </Text>
            </HStack>
          </Box>

        </ScrollView>


      </VStack>


    </View>
  )
}

export default Chats

const styles = StyleSheet.create({})