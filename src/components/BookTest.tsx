import { Box, Heading } from '@chakra-ui/layout';
import {
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { API_URL } from '../common/const';
import { Book } from '../types/book';

const fetchBooks = async () => (await axios.get(API_URL + '/books')).data;

const image = 'https://m.media-amazon.com/images/I/411csr6Nn0L.jpg';

export default function BookTest() {
  const { isLoading, isError, data, error } = useQuery<Book[], Error>(
    'books',
    fetchBooks
  );

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  if (isError) {
    return <Box>Error: {error?.message}</Box>;
  }

  return (
    <SimpleGrid columns={[1, null, 3]} spacing="20px" mx="32" mb={16}>
      {data?.map(({ aka }: Book, i: number) => (
        <Box
          key={i}
          role={'group'}
          p={6}
          mr={['auto', 'auto', '12']}
          // maxW={'330px'}
          maxW={'330px'}
          minW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          mb={16}
        >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${image})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}
          >
            <Image
              rounded={'3xl'}
              height={230}
              width={282}
              // border="2.5px black solid"
              boxShadow="dark-lg"
              // objectFit={'cover'}
              objectFit={'cover'}
              objectPosition="50% 0"
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
            >
              Book
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {aka}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                Last read at: 2021-01-01
              </Text>
            </Stack>
          </Stack>
        </Box>
      ))}
    </SimpleGrid>
  );
}
