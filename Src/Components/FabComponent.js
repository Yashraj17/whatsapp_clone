import React, { useEffect, useState } from 'react'
import {Fab} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const FabComponent = ({page}) => {
  const[data,setData] = useState('')
  useEffect(() => {
    setData(page)
  },[page])
  return (
    <>
    {console.log(data)}
      <Fab shadow={2} boxSize='58px' bgColor='#01a985' icon={<MaterialIcons color="white" name="message"  size={28} />} />

    </>
  )
}

export default FabComponent