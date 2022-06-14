import React, { useEffect, useState } from 'react'
import { Fab } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterailCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const FabComponent = ({ page }) => {
  const [data, setData] = useState('')
  useEffect(() => {
    setData(page)
    console.log(page)
  }, [page])
  return (
    <>
      {data === 'Chats' ?
        <Fab shadow={2} boxSize='57px' mb={2} mr={.4} bgColor='#01a985' icon={<MaterialIcons color="white" name="message" size={21.5} />} />
        : data === 'Status' ?
          <>
            <Fab shadow={2} boxSize='45px' mb={20} mr={1.5} p={0} justifyContent="flex-start" bgColor='#233238' icon={<MaterailCommunityIcon color="white" name="pencil" style={{ fontSize: 23 }} />} />
            <Fab shadow={2} boxSize='57px' mb={2} mr={.4} bgColor='#01a985' icon={<FontAwesome color="white" name="camera" size={20} />} />
          </>
          : data === 'Calls' ?
            <Fab shadow={2} boxSize='57px' mb={2} mr={.4} bgColor='#01a985' icon={<MaterialIcons color="white" name="add-ic-call" size={25} />} />
            : null
      }
    </>
  )
}

export default FabComponent