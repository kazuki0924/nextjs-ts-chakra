import NextLink from 'next/link';

import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

import { Logo } from '../Logo';

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Box pb={10} py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <NextLink href={'/'}>
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Logo />
            </Link>
          </NextLink>
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          Clearly I didn't copy and pasted this
        </Text>
      </Box>
    </Box>
  );
};
