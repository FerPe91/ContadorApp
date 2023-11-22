import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Heading, Image, Flex } from '@chakra-ui/react';
import ContadorResponsive from './Components/ContadorResponsive/ContadorResponsive'


function App() {
  return (
    <ChakraProvider>
      <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minW="200px"   
      height='100%'  
      m="0 auto"     
      p="20px"   
      bgGradient="linear(to-r, teal.300, blue.500)">
        
        <Flex display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'>
          <Image src='contadorApp\src\assets\img\logo.png' alt='logo AP' />
          <Heading mt='5'>CONTADOR</Heading>
        </Flex>
        <ContadorResponsive/>

      </Box>
    </ChakraProvider>
  )}

export default App
