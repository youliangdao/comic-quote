import { SearchIcon } from '@chakra-ui/icons';
import { Center, Container, Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import React from 'react'
import { useRef } from "react";
import CardGallery from './CardGallery';

const Card = () => {
  const inputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value)
  }
  return (
    <Container maxW='container.lg'>
      <Center>
        <form onSubmit={submitHandler}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<SearchIcon />}
            />
            <Input
              placeholder='検索したい漫画を入力'
              variant='filled'
              size='md'
              maxW='md'
              ref={inputRef}
              borderRadius='99999999'
            />
          </InputGroup>
        </form>
      </Center>
      <CardGallery />
    </Container>
  )
}

export default Card
