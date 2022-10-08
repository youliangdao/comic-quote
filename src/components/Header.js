import { SunIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, HStack, IconButton, Spacer, Text, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <HStack mx={10}>
        <Center>
          <Text fontSize='3xl'>Comic Quote</Text>
        </Center>
        <Spacer />
        <IconButton
          mb={10}
          aria-label="DarkMode Switch"
          icon={colorMode === 'light' ? <FaMoon /> : <SunIcon />}
          onClick={toggleColorMode}
          />
      </HStack>
  )
}

export default Header
