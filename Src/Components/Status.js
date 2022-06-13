import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, HStack,VStack,Avatar, Heading, Spacer, ScrollView,Fab } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useRoute } from '@react-navigation/native';

const Status = () => {
  const [showMuted,setShowMuted] = React.useState(false)
    
  return (

    <View style={{backgroundColor:'#111b21' ,flex:1}}>
      <VStack padding={2}>

        {/* //////My status  */}
       <HStack>
       <Box padding={3}>
          <HStack space={4} >
          <Avatar size="50px" source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
        <VStack top={1}>
          <Heading  color='white'fontSize={15} fontWeight='700'>My Status</Heading>
          <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>Tap to add status update </Text>
        </VStack>
          </HStack>
        </Box>
       </HStack>
       
       {/* //// recent updates */}
       <HStack padding={2}>
          <Text color="coolGray.600"
          style={{fontWeight:'500',marginLeft:5}}
          _dark={{
                color: "warmGray.200"
              }}> Recent updates </Text>
        </HStack>

           <Box padding={3}>
          <HStack space={4} >
            <Box borderWidth={2} justifyContent='center' height='55px' width='55px' style={{borderColor:'#01a985',borderRadius:40}} >
            <Avatar size="46px"
          style={{ alignSelf:'center'}}
          source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
            </Box>
        <VStack top={1} space={1}>
          <Heading  color='white'fontSize={15} fontWeight='600'>Shivam kumar</Heading>
          <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>Today, 12:45 pm </Text>
        </VStack>
          </HStack>
           </Box>


          {/* ////////////// viewed updates */}

           <HStack padding={2}>
          <Text color="coolGray.600"
          style={{fontWeight:'500',marginLeft:5}}
          _dark={{
                color: "warmGray.200"
              }}> Viewed updates </Text>
        </HStack>
        <Box padding={3}>
          <HStack space={4} >
            <Box borderWidth={2} justifyContent='center' height='55px' width='55px' style={{borderColor:'gray',borderRadius:40}} >
            <Avatar size="46px"
          style={{ alignSelf:'center'}}
          source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
            </Box>
        <VStack top={1} space={1}>
          <Heading  color='white'fontSize={15} fontWeight='600'>Shivam kumar</Heading>
          <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>Today, 12:45 pm </Text>
        </VStack>
          </HStack>
        </Box>
        <Box padding={3}>
          <HStack space={4} >
            <Box borderWidth={2} justifyContent='center' height='55px' width='55px' style={{borderColor:'gray',borderRadius:40}} >
            <Avatar size="46px"
          style={{ alignSelf:'center'}}
          source={{
            uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
        }} />
            </Box>
        <VStack top={1} space={1}>
          <Heading  color='white'fontSize={15} fontWeight='600'>Shivam kumar</Heading>
          <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>Today, 12:45 pm </Text>
        </VStack>
          </HStack>
        </Box>
      
          {/* ////// mutted updates */}
          <Pressable onPress={()=>setShowMuted(!showMuted)}>
              <HStack padding={2} justifyContent='space-between' >
              
                <Text color="coolGray.600"
                style={{fontWeight:'500',marginLeft:5}}
                _dark={{
                      color: "warmGray.200"
                    }}> Muted updates </Text>
                {
                  (showMuted)?  <MaterialIcons color="#01a985" name="keyboard-arrow-up"  size={25} />:
                  <MaterialIcons color="#01a985" name="keyboard-arrow-down"  size={25} />
                }
             
              </HStack>
              
              {
                (showMuted) && 
                <>
                  <Box padding={3}>
                <HStack space={4} >
                  <Box justifyContent='center' height='55px' width='55px' style={{borderColor:'gray',borderRadius:40}} >
                  <Avatar size="48px"
                style={{ alignSelf:'center'}}
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
                  </Box>
              <VStack top={1} space={1}>
                <Heading  color='white'fontSize={15} fontWeight='600'>Shivam kumar</Heading>
                <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>Today, 12:45 pm </Text>
              </VStack>
                </HStack>
                  </Box>
                  <Box padding={3}>
                <HStack space={4} >
                  <Box justifyContent='center' height='55px' width='55px' style={{borderColor:'gray',borderRadius:40}} >
                  <Avatar size="48px"
                style={{ alignSelf:'center'}}
                source={{
                  uri: 'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
              }} />
                  </Box>
              <VStack top={1} space={1}>
                <Heading  color='white'fontSize={15} fontWeight='600'>Shivam kumar</Heading>
                <Text color="coolGray.600" _dark={{
                  color: "warmGray.200"
                }}>Today, 12:45 pm </Text>
              </VStack>
                </HStack>
                  </Box>
                </>
               
              }

        </Pressable>

      </VStack>
     
    
    </View>
  )
}

export default Status

const styles = StyleSheet.create({})