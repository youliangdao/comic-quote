import {
  Grid,
  GridItem,
  Image,
  useDisclosure,
  useColorMode,
  Text,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import { v4 as uuidv4 } from "uuid";
import ModalQuote from "./modal/ModalQuote";
import NotFound from "../images/image-not-found.png";

const CardGallery = ({fetchData}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [quote, setQuote] = useState('');
  const [cardColor, setCardColor] = useState(colorMode === 'light' ? 'white' : 'gray.900');
  const [title, setTitle] = useState('')
  const [smallImageUrl, setSmallImageUrl] = useState('')

  const clickHandler = item => {
    setTitle(item.title)
    setSmallImageUrl(item.smallImageUrl);
    setQuote('');
    setCardColor(colorMode === 'light' ? 'white' : 'gray.900');
    onOpen();
  }
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={4} mt={10}>
        {fetchData.map(item => {
          return (
            <GridItem  w='300' h='100%' onClick={() => clickHandler(item.Item)} key={`${item.Item.isbn}>${item.Item.title} ${uuidv4()} by${item.Item.author}`} cursor='pointer' my={6}>
              <Image
                boxSize='xs'
                objectFit='contain'
                src={item.Item.mediumImageUrl}
              />
              <Text textAlign='center' fontWeight='bold'>{item.Item.title}</Text>
            </GridItem>
          )
        })}
        {/* <GridItem  w='100%' onClick={clickHandler} cursor='pointer'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem> */}
      </Grid>
      <ModalQuote
        isOpen={isOpen}
        onClose={onClose}
        quote={quote}
        setQuote={setQuote}
        cardColor={cardColor}
        setCardColor={setCardColor}
        title={title}
        imageUrl = {smallImageUrl}
      />
    </>
  )
}



export default CardGallery
