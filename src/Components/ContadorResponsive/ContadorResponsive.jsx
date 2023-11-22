import React, { useState } from 'react';
import CounterButton from '../CounterButton/CounterButton';
import { Flex,Box, Text } from '@chakra-ui/react';
import './ContadorResponsive.css'

const ContadorResponsive = () => {

  const [count, setCount] = useState(0) 

  function add(){
    setCount(count + 1)
  }


  function rest(){
    setCount(count - 1)
  }

  function reset(){
    setCount(0)
  }

  
  console.log(count);
  return (
    <div>
      <Flex className='container'
      bgGradient="linear(to-r, teal.300, blue.500)" 
      minH='200'
      minW='200' 
      display='flex' margin='10px'  
      justifyContent='center' 
      alignItems='center' 
      flexDirection='column'
      border="1px solid white"
      borderRadius="md"     
      p={4}>

        <Flex color='white' 
          marginBottom='15px' 
          display='flex' alignItems='center' justifyContent='space-between' >
            <Box mr='1' maxW='xxl'
            borderWidth='1px'
            borderRadius='lg'
            overflow='hidden'
            p="4" 
            bg="green.500" 
            color="white">
            <CounterButton text='RESTAR 1' onClick={rest}/>
          </Box>
          <Box 
            alignItems='center'
            borderWidth='1px'
            borderRadius='lg'
            p="4" 
            bg="blue.500" 
            color="white"
            >
            <Text as='p'
              w='100%'
              display='flex' 
              margin='10px' 
              fontSize='6xl'>{count}
            </Text>
          </Box>
            <Box ml='1' 
            maxW='xxl' 
            borderWidth='1px' 
            borderRadius='lg' 
            overflow='hidden' 
            p="4" bg="teal.500" color="white">
            <CounterButton text='SUMAR 1' onClick={add}/>
          </Box>
        </Flex>
        <Box p="4" bg="red.500" color="white">
          <CounterButton text={'REINICIAR'} onClick={reset}/>
        </Box>
      </Flex>
    </div>
  )
}

export default ContadorResponsive