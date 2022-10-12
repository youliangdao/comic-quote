import {
  Grid,
  GridItem,
  Image,
  useDisclosure,
  useColorMode,
} from '@chakra-ui/react'
import React, {useState} from 'react'
import ModalQuote from "./modal/ModalQuote";

const CardGallery = ({fetchData}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [quote, setQuote] = useState('');
  const [cardColor, setCardColor] = useState(colorMode === 'light' ? 'white' : 'gray.900');
  const [title, setTitle] = useState('')

  const clickHandler = work => {
    setTitle(work.title)
    setQuote('');
    setCardColor(colorMode === 'light' ? 'white' : 'gray.900');
    onOpen();
  }
  return (
    <>
      <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={10}>
        {fetchData.map(work => {
          return (
            <GridItem  w='100%' onClick={() => clickHandler(work)} key={work.id} cursor='pointer'>
              {work.title}
              {/* <Image
                src={item.volumeInfo.imageLinks.thumbnail}
              /> */}
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
      />
    </>
  )
}



export default CardGallery
