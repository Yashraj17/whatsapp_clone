import { HStack, Input, Modal, Pressable, Text,Box, View, VStack } from 'native-base'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ModalComponent = () => {
  return (
    <>
      <Modal.Content maxWidth="400px" style={{ marginBottom: 'auto', marginTop: 0 }} >
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>
        <Modal.Body>

        </Modal.Body>

      </Modal.Content>
    </>
  )

}

const Header = ({ handleSearch, search, setSearch }) => {

  const [searchInput, setSearchInput] = useState('')
  return (
    <>
      {search === false ?
        <View padding={4} backgroundColor='#1f2c34' >
          <HStack style={{ alignItems: 'center' }}>
            <Text flexGrow={1} fontSize={21} ml={2} fontWeight={'medium'} color='#88969f'>WhatsApp</Text>
            <TouchableOpacity onPress={()=>handleSearch()}>
              <Fontisto name='search' style={{ marginRight: 17 }} size={20} color='#88969f' />
            </TouchableOpacity>
            <Feather name='more-vertical' size={23} color='#88969f' />
          </HStack>
        </View>
        :

        <View padding={4} backgroundColor='#1f2c34' >
          <VStack>
            <HStack space={3} alignItems='center'>
              <TouchableOpacity onPressOut={(prev) => setSearch(!prev)}>
                <AntDesign name='arrowleft' size={25} color='#88969f' />
              </TouchableOpacity>
              <Input value={searchInput} width={295} height={9} selectionColor={'#03a37f'} autoFocus variant="unstyled"
                placeholder="Search..." size={'lg'} color="white" onChangeText={(text) => setSearchInput(text)}
                InputRightElement={
                  searchInput !== '' && <TouchableOpacity onPress={() => setSearchInput('')}>
                    <Feather name='x' size={23} color='#88969f' />
                  </TouchableOpacity>
                }
              />
            </HStack>

           <VStack  paddingTop={5}>
            <HStack space={2} flexWrap='wrap'>
                <Box style={{ width:'auto',height:30,borderRadius:15,backgroundColor:'#2a3942',padding:2,marginBottom:8}}>
                    <HStack padding={1} space={1.5} px={2} bottom='2px' >
                      <MaterialIcons name='photo' size={20}/>
                      <Text color={'white'} fontSize='14'>Photos</Text>
                    </HStack>
                </Box>
                <Box style={{ width:'auto',height:30,borderRadius:15,backgroundColor:'#2a3942',padding:2,}}>
                    <HStack padding={1} space={1.5} px={2} bottom='2px' >
                    <Ionicons name='videocam' size={20} />
                      <Text color={'white'} fontSize='14'>Videos</Text>
                    </HStack>
                </Box>
                <Box style={{ width:'auto',height:30,borderRadius:15,backgroundColor:'#2a3942',padding:2,}}>
                    <HStack padding={1} space={1.5} px={2} bottom='2px' >
                    <Ionicons name='link-outline' size={20} />
                      <Text color={'white'} fontSize='14'>Links</Text>
                    </HStack>
                </Box>
                <Box style={{ width:'auto',height:30,borderRadius:15,backgroundColor:'#2a3942',padding:2,}}>
                    <HStack padding={1} space={1.5} px={2} bottom='2px' >
                      <MaterialIcons name='photo' size={20}/>
                      <Text color={'white'} fontSize='14'>GiFs</Text>
                    </HStack>
                </Box>
                <Box style={{ width:'auto',height:30,borderRadius:15,backgroundColor:'#2a3942',padding:2,}}>
                    <HStack padding={1} space={1.5} px={2} bottom='2px' >
                      <Fontisto name='headphone' size={20}/>
                      <Text color={'white'} fontSize='14'>Audio</Text>
                    </HStack>
                </Box>
                <Box style={{ width:'auto',height:30,borderRadius:15,backgroundColor:'#2a3942',padding:2,}}>
                    <HStack padding={1} space={1.5} px={2} bottom='2px' >
                      <Ionicons name='md-document-text' size={20} />
                      <Text color={'white'} fontSize='14'>Documents</Text>
                    </HStack>
                </Box>
              </HStack>
           </VStack>
          </VStack>
        </View>
      }
    </>
  )
}

export default Header