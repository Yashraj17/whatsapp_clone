import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Heading, NativeBaseProvider, HStack, VStack,Avatar, Input, Box, FlatList } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MessageHeader from './MessageHeader'
const Message = ({navigation}) => {

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
      status:false
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      status:true
    },

    {
      id: "58694a0f-3da1-471f-bd96",
      title: "hello world is a me from dubia india is a   ",
      status:false
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbdd91aa97f63",
      title: "Second Item",
      status:true
    },

    {
      id: "58694a0f-3da1-471f-bd9d6",
      title: "hello world is a me from dubia india is a   ",
      status:false
    },
  


  ];



  return (
    <View style={{backgroundColor:'#111b21' ,flex:1}}>
   
<MessageHeader navigation={navigation}/>


<VStack marginBottom={40} height='86%'>
  <FlatList
  //  style={{paddingBottom:60}}
  data={DATA}
  renderItem={({item})=>(
    (item.status)?
    <HStack style={{paddingBottom:4,paddingTop:1,justifyContent:'flex-start'}}>
    <Box style={{backgroundColor:'#202c33',paddingHorizontal:16,paddingVertical:8,maxWidth:'60%',borderRadius:20}} >
   <HStack>
   <Heading fontSize={14} fontWeight='400' color='white' >{item.title}   <Text style={{fontSize:10}}>7:50 am</Text> </Heading>
   
   </HStack>
    </Box>
    </HStack>
    :
    <HStack style={{paddingBottom:4,paddingTop:1,justifyContent:'flex-end'}}>
    <Box style={{backgroundColor:'#06705d',paddingHorizontal:16,paddingVertical:8,maxWidth:'60%',borderRadius:20}} >
   <VStack>
   <Heading fontSize={14} fontWeight='400' flexGrow={3} color='white' >{item.title}  <Text style={{fontSize:10,flex:1}}>7:50 am</Text> </Heading>
  
   </VStack>
    </Box>
    </HStack>

  )}
  keyExtractor={(item)=>item.id}
  >

  </FlatList>

</VStack>
            <HStack style={{position:'absolute',bottom:0,paddingHorizontal:5,justifyContent:'center',paddingVertical:5}} >
              <Input variant='filled'  bgColor='#202c33' color='white' placeholder="Message" width="87%" borderRadius="30" borderWidth={0} fontSize="17"

              InputLeftElement={<MaterialIcons size={25} style={{paddingLeft:8}} name="emoji-emotions" />}
             InputRightElement={
              <HStack space={3} style={{marginRight:12 ,top:4}}>
                <>
                    <MaterialIcons size={25} name="mic" />  
                    <MaterialIcons size={25} name="mic" />  
                     <FontAwesome name='camera' size={20} />       
                </>
              </HStack>
             } />
              <Box style={{ height:46,padding:0,marginLeft:5,  backgroundColor:'#01a985',borderRadius:28}}>
                    <HStack padding={1} space={1.5} px={2} top={1} bottom='2px' >
                    <MaterialIcons size={30} name="mic" color='white' />
                    </HStack>
                </Box>
                 
            </HStack>
     
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})