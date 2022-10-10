import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Application from './components/Application';

function App() {
  return (
      <ChakraProvider theme={theme} >
        <Application />
      </ChakraProvider>
  );
}

export default App;
