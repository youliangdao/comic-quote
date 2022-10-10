import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';


const  Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box
        bg={useColorModeValue('gray.100', 'gray.700')}
        px={4}
        position='sticky'
        top={0}
        zIndex={"sticky"}
        mb={10}
        borderBottom='solid'
        borderBottomColor={useColorModeValue('blackAlpha.200', 'gray.600')}
        borderBottomWidth={2}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Heading margin='0 auto'> ComicQuote</Heading>
              <Button onClick={toggleColorMode} position={'absolute'} right={5}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Header
