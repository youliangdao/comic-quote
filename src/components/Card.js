import { SearchIcon } from '@chakra-ui/icons';
import { Center, Container, Flex, Input, InputGroup, InputLeftElement, useColorMode, useColorModeValue} from '@chakra-ui/react';
import React from 'react'
import { useRef, useState } from "react";
import CardGallery from './CardGallery';
import animeApi from "./api/anime";

const Card = () => {
  const inputRef = useRef();
  const [fetchData, setFetchData] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    animeApi.getAll(`filter_title=${encodeURIComponent(inputRef.current.value)}`)
    .then(works => setFetchData(works))
  }
  return (
    <Container maxW='container.lg' >
      <Center>
        <form onSubmit={submitHandler}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon />}
            />
            <Input
              placeholder='検索したいアニメを入力'
              variant='outline'
              bg={useColorModeValue('white', 'gray.600')}
              size='md'
              maxW='md'
              ref={inputRef}
              borderRadius='99999999'
            />
          </InputGroup>
        </form>
      </Center>
      <CardGallery fetchData={fetchData}/>
    </Container>
  )
}

export default Card
