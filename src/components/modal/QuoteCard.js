import {
  Text,
  Heading,
  Stack,
  Center,
} from '@chakra-ui/react'

const QuoteCard = ({quote, cardColor, title}) => {
  return (
    <Center py={6}>
      <Stack
        id='target-component'
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '476px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={cardColor}
        boxShadow={'2xl'}
        padding={4}>
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
            {`『${title}』`}
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
}

export default QuoteCard;
