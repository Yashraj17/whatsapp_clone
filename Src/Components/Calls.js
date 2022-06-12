import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, HStack, NativeBaseProvider, ScrollView, Spacer, VStack,Avatar,Heading } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Calls = () => {
  return (
    <View style={{flex:1,backgroundColor:'#111b21'}}>
      <VStack space={1} padding={2}>
          <ScrollView>

            <Box padding={3}>
              <HStack space={4}>
              <Avatar size="50px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
              <VStack space={1}>
             <Heading  color='white'fontSize={15} fontWeight='600'>Uttsav Kumar</Heading>

              <HStack space={2}>
              <MaterialCommunityIcons name='arrow-top-right' size={18} color='#39ff14' />
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>7 June, 9:51 pm </Text>
              </HStack>

            </VStack>
            <Spacer/>
            <MaterialIcons name='phone' color='#01a985' style={{top:8}} size={25} />
              </HStack>
            </Box>
            
            <Box padding={3}>
              <HStack space={4}>
              <Avatar size="50px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
              <VStack space={1}>
             <Heading  color='white'fontSize={15} fontWeight='600'>Uttsav Kumar</Heading>

              <HStack space={2}>
              <MaterialCommunityIcons name='arrow-bottom-left' size={18} color='red' />
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>7 June, 9:51 pm </Text>
              </HStack>

            </VStack>
            <Spacer/>
            <Ionicons name='videocam' color='#01a985' style={{top:8}} size={25} />
              </HStack>
            </Box>
            
            <Box padding={3}>
              <HStack space={4}>
              <Avatar size="50px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
              <VStack space={1}>
             <Heading  color='white'fontSize={15} fontWeight='600'>Uttsav Kumar</Heading>

              <HStack space={2}>
              <MaterialCommunityIcons name='arrow-bottom-left' size={18} color='red' />
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>7 June, 9:51 pm </Text>
              </HStack>

            </VStack>
            <Spacer/>
            <Ionicons name='videocam' color='#01a985' style={{top:8}} size={25} />
              </HStack>
            </Box>
            <Box padding={3}>
              <HStack space={4}>
              <Avatar size="50px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
              <VStack space={1}>
             <Heading  color='white'fontSize={15} fontWeight='600'>Uttsav Kumar</Heading>

              <HStack space={2}>
              <MaterialCommunityIcons name='arrow-bottom-left' size={18} color='red' />
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>7 June, 9:51 pm </Text>
              </HStack>

            </VStack>
            <Spacer/>
            <Ionicons name='videocam' color='#01a985' style={{top:8}} size={25} />
              </HStack>
            </Box>
            <Box padding={3}>
              <HStack space={4}>
              <Avatar size="50px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
              <VStack space={1}>
             <Heading  color='white'fontSize={15} fontWeight='600'>Uttsav Kumar</Heading>

              <HStack space={2}>
              <MaterialCommunityIcons name='arrow-bottom-left' size={18} color='red' />
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>7 June, 9:51 pm </Text>
              </HStack>

            </VStack>
            <Spacer/>
            <Ionicons name='videocam' color='#01a985' style={{top:8}} size={25} />
              </HStack>
            </Box>

          </ScrollView>
      </VStack>
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({})