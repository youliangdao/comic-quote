import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import React, { lazy, Suspense } from 'react'
import { useRef, useState } from "react";
import CardGallery from './CardGallery';
import comicApi from "./api/comic";

const Card = () => {
  const inputRef = useRef();
  const [fetchData, setFetchData] = useState([]);
  const [itemCount, setItemCount] = useState(0);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const [buttonFlag, setButtonFlag] = useState(false)
  const LazyComponentCardGallery = lazy(() => import('./CardGallery'));

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      comicApi.getAll(`keyword=${encodeURIComponent(inputRef.current.value)}`)
      .then(({items, count, page, pageCount}) => {
        setButtonFlag(false)
        setFetchData(items);
        setItemCount(count);
        setPage(page);
        setPageCount(pageCount);
        if (page !== pageCount) {
          setButtonFlag(true)
        }
      })
    } else {
      setFetchData([]);
      setButtonFlag(false)
    }
  }
  const showMore = () => {
    if (page < pageCount) {
      setPage(prev => prev++ )
      comicApi.getAll(`keyword=${encodeURIComponent(inputRef.current.value)}&page=${page+1}`)
      .then(({items, count, page, pageCount}) => {
        setFetchData(prev => {
          return [...prev, ...items]
        });
        setItemCount(count);
        setPage(page);
        setPageCount(pageCount);
      })
      if (page + 1 === pageCount) {
        setButtonFlag(false)
      }
    }

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
              placeholder='検索したい漫画を入力'
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
      {buttonFlag ?
        <Center mb={10}>
          <Button colorScheme={'teal'} onClick={showMore}>もっと見る</Button>
        </Center> :
        <Center mb={10}>
          <Text fontWeight='bold'>検索結果は以上です</Text>
        </Center>
      }
    </Container>
  )
}

export default Card
