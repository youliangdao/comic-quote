import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Card />
    </ChakraProvider>
  );
}

export default App;
