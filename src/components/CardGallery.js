import { Box, Grid, GridItem, Image } from '@chakra-ui/react'
import React from 'react'

const CardGallery = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={6} mt={10}>
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
  )
}

export default CardGallery
