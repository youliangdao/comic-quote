import {
  Text,
  Heading,
  Stack,
  Center,
} from '@chakra-ui/react'

const QuoteCard = ({quote, cardColor}) => {
  return (
    <Center py={6} id='target-component'>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={cardColor}
        boxShadow={'2xl'}
        padding={4}>
        {/* <Flex flex={1} bg="blue.200">
          <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
            }
          />
        </Flex> */}
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}>
          <Heading fontSize={'2xl'} fontFamily={'body'} mb={16}>
            {quote}
          </Heading>
          <Text fontWeight={600} color={'gray.500'} size="sm">
            『スラムダンク』
          </Text>
          {/* <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
            Actress, musician, songwriter and artist. PM for work inquires or
            <Link href={'#'} color={'blue.400'}>
              #tag
            </Link>
            me in your posts
          </Text> */}
          {/* <Stack align={'center'} justify={'center'} direction={'row'} mt={6}> */}
            {/* <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #ComicQuote
            </Badge> */}
            {/* <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #photography
            </Badge> */}
            {/* <Badge
              px={2}
              py={1}
              bg={useColorModeValue('gray.50', 'gray.800')}
              fontWeight={'400'}>
              #music
            </Badge> */}
          {/* </Stack> */}
        </Stack>
      </Stack>
    </Center>
  );
}

export default QuoteCard;
