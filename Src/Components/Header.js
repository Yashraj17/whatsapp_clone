import { HStack, Input, Modal, Pressable, Text, View, VStack } from 'native-base'
import React, { useState } from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'

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
            <TouchableOpacity onPress={handleSearch}>
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
                <AntDesign name='arrowleft' size={23} color='#88969f' />
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

            <HStack>
              <View style={{ width:'auto',height:30,borderRadius:15,backgroundColor:'red',padding:2 }}>
                  <HStack padding={1} space={1} >
                    <MaterialIcons name='photo' size={20}/>
                    <Text color={'white'} fontSize='15'>Photos</Text>
                  </HStack>
              </View>
            </HStack>
          </VStack>
        </View>
      }
    </>
  )
}

export default Header