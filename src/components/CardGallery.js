import {
  Grid,
  GridItem,
  Image,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react'
import React from 'react'
import ModalQuote from "./modal/Modal";

const CardGallery = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={10}>
        <GridItem  w='100%' onClick={onOpen}>
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
        <GridItem  w='100%'>
          <Image
            src='https://source.unsplash.com/random'
          />
        </GridItem>
      </Grid>
      <ModalQuote isOpen={isOpen} onClose={onClose} />
    </>
  )
}



export default CardGallery
