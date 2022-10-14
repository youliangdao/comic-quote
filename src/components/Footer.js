import {
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Footer() {
  return (
        <Text p={6} fontSize={'sm'} textAlign={'center'} position='sticky' top={0} zIndex={"sticky"} bg={useColorModeValue('cyan.50', 'gray.700')}>
          © 2022 ComicQuote
        </Text>
  );
}
