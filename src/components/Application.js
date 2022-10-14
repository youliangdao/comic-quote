import React from 'react'
import {
  Box,
  Grid,
  useColorModeValue,
} from '@chakra-ui/react';
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";


const Application = () => {
  return (
    <Box background={useColorModeValue('gray.100', 'gray.600')}>
      <Grid minH='100vh' templateRows='auto 1fr auto' bg={useColorModeValue('cyan.50', 'gray.700')}>
        <Header/>
        <Card />
        <Footer />
      </Grid>
    </Box>
  )
}

export default Application
