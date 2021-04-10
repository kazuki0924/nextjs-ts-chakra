import {
  FaBookReader, FaClone, FaCog, FaEdit, FaEllipsisV, FaExternalLinkAlt, FaFlag, FaHistory,
  FaRegDizzy, FaTrashAlt,
} from 'react-icons/fa';
import { useQuery } from 'react-query';

import { Box, Heading } from '@chakra-ui/layout';
import {
  Container, IconButton, Image, SimpleGrid, Stack, Text, useColorModeValue,
} from '@chakra-ui/react';

import { fetchBooks } from '../../api/book.api';
import { Book } from '../../types/book';

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
    <SimpleGrid columns={[1, 1, 2]} mb={16} mx="auto" maxW="800px" zIndex={-1}>
      {data?.map(({ aka }: Book, i: number) => (
        <Container maxW="xl" centerContent>
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
            zIndex={-1}
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
                // textTransform={'uppercase'}
              >
                X days ago
              </Text>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {aka}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <IconButton
                  colorScheme="blue"
                  aria-label="label"
                  icon={<FaBookReader />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaTrashAlt />}
                />
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaClone />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaCog />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaEdit />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaExternalLinkAlt />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaEllipsisV />}
                />
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaFlag />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaHistory />}
                />
                <IconButton
                  colorScheme="gray"
                  aria-label="label"
                  icon={<FaRegDizzy />}
                />
              </Stack>
            </Stack>
          </Box>
        </Container>
      ))}
    </SimpleGrid>
  );
}
