import {
  Box,
  SimpleGrid,
  useColorModeValue,
  Heading,
  Text,
  Center,
  Stack,
  Image,
} from '@chakra-ui/react';
import React from 'react';

const IMAGE = 'https://m.media-amazon.com/images/I/411csr6Nn0L.jpg';

const arr = [
  {
    image: 'https://m.media-amazon.com/images/I/411csr6Nn0L.jpg',
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/41jnU0V+cBL._SX379_BO1,204,203,200_.jpg',
  },
  {
    image:
      'https://images-na.ssl-images-amazon.com/images/I/518hujD6CxL._SX258_BO1,204,203,200_.jpg',
  },
];

export default function BookCard() {
  return (
    <>
      <Center py={12}>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {arr.map(({ image }: { image: string }) => (
          <Box
            key={image}
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
                Title
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
      </Center>
      </>
  );
}
