import {
  Grid,
  GridItem,
  Image,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import ModalQuote from "./modal/ModalQuote";

const CardGallery = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [quote, setQuote] = useState('');
  const [cardColor, setCardColor] = useState(colorMode === 'light' ? 'white' : 'gray.900');
  const clickHandler = () => {
    setQuote('');
    setCardColor(colorMode === 'light' ? 'white' : 'gray.900');
    onOpen();
  }
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={10}>
        <GridItem  w='100%' onClick={clickHandler}>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%' onClick={clickHandler}>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
      </Grid>
      <ModalQuote
        isOpen={isOpen}
        onClose={onClose}
        quote={quote}
        setQuote={setQuote}
        cardColor={cardColor}
        setCardColor={setCardColor}
      />
    </>
  )
}



export default CardGallery
