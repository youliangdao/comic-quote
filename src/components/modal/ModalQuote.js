import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  HStack,
  Heading,
  VStack,
  Textarea,
  RadioGroup,
  Radio,
  Stack,
  useColorMode,
  Link,
  useToast,
  Text
} from '@chakra-ui/react'
import html2canvas from 'html2canvas';
import { FaTwitter } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import QuoteCard from "./QuoteCard";

const ModalQuote = ({isOpen, onClose, quote, setQuote, cardColor, setCardColor}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();
  const getScreenShot = () => {
    const target = document.getElementById('target-component');
    html2canvas(target).then(canvas => {
      canvas.toBlob(blob => {
        navigator.clipboard.write([
            new window.ClipboardItem({
              [blob.type]: blob
            })
          ]
        )
      })
    })
    toast({
      title: 'コピーしました！',
      // description: "We've created your account for you.",
      status: 'success',
      position: 'top',
      duration: 9000,
      isClosable: true,
    })
  }
  return (
      <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader margin='0 auto' mb='10'>好きな名言を投稿</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <VStack
                spacing={8}
                align='stretch'
              >
                <HStack spacing={5}>
                  <Image
                    boxSize='100px'
                    src='https://source.unsplash.com/random'
                  />
                  <Heading size='sm'>スラムダンク</Heading>
                </HStack>
                <Box>
                  <Heading size='sm' mb='3'>投稿する名言</Heading>
                  <Textarea
                    placeholder='セリフを入力してください'
                    value={quote}
                    onChange={e => setQuote(e.target.value)}
                  />
                </Box>
                <Box>
                  <Heading size='sm' mb='3'>カラー選択</Heading>
                  <RadioGroup>
                    <Stack direction='row'>
                      {colorMode == 'light' ?
                        <Radio
                          value='white'
                          checked={cardColor === 'white'}
                          onChange={e => setCardColor(e.target.value)}
                        >白</Radio> :
                        <Radio
                          value='gray.900'
                          checked={cardColor === 'gray.900'}
                          onChange={e => setCardColor(e.target.value)}
                        >黒</Radio>
                      }
                      <Radio
                        value='yellow.200'
                        checked={cardColor === 'yellow.200'}
                        onChange={e => setCardColor(e.target.value)}
                      >黄</Radio>
                      <Radio
                        value='green.200'
                        checked={cardColor === 'green.200'}
                        onChange={e => setCardColor(e.target.value)}
                      >緑</Radio>
                      <Radio
                        value='blue.200'
                        checked={cardColor === 'blue.200'}
                        onChange={e => setCardColor(e.target.value)}
                      >青</Radio>
                    </Stack>
                  </RadioGroup>
                  <QuoteCard quote={quote} cardColor={cardColor}/>
                </Box>
                  <Stack
                    width={'100%'}
                    mt={'2rem'}
                    direction={'row'}
                    padding={2}
                    justifyContent={'space-between'}
                    alignItems={'center'}>
                    <Button
                      flex={1}
                      fontSize={'sm'}
                      rounded={'full'}
                      onClick={getScreenShot}
                    >
                      <HStack>
                        <FiCopy />
                        <Text>
                          カードをコピーする
                        </Text>
                      </HStack>
                    </Button>
                    <Button
                      flex={1}
                      target='_blank'
                      as='a'
                      href={`https://twitter.com/share?url=''&hashtags=ComicQuote`}
                      colorScheme='twitter'
                      leftIcon={<FaTwitter />}
                      width='100%'
                      fontSize={'sm'}
                      rounded={'full'}
                      bg={'blue.400'}
                      color={'white'}
                      boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                      }
                      _hover={{
                        bg: 'blue.500',
                      }}
                      _focus={{
                        bg: 'blue.500',
                      }}>
                      Twitterでシェア
                    </Button>
                  </Stack>
              </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}

export default ModalQuote;