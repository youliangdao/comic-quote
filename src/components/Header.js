import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Heading,
  Image,
  HStack,
} from '@chakra-ui/react';
import { BsChatQuoteFill } from "react-icons/bs";
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import logoLight from "../images/logo2.png";
import logoDark from "../images/logo3.png";

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
            <Heading margin='0 auto'>
              <Flex alignItems={'center'}>
                {colorMode === 'light' ?
                  <img
                    src={logoLight}
                    width='400'
                  /> :
                  <img
                    src={logoDark}
                    width='400'
                  />
                }
                <BsChatQuoteFill />
              </Flex>
            </Heading>
              <Button onClick={toggleColorMode} position={'absolute'} right={5}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
        </Flex>
      </Box>
    </>
  );
}

export default Header
