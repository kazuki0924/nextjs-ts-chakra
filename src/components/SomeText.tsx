import { useColorMode } from '@chakra-ui/color-mode';
import { Box, Heading } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import { POSTS_URL } from '../common/const';

import HelperImage from './HelperImage';

const SomeText = () => {
  const { colorMode } = useColorMode();
  const { status, data, error, isFetching } = useQuery('posts', async () => {
    const { data } = await axios.get(POSTS_URL);
    return data;
  });

  return (
    <>
      <Heading as="h2" fontSize="3xl">
        Hello
      </Heading>

      <Box
        backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.500'}
        padding={4}
        borderRadius={4}
      >
        <Box d="flex" alignItems="center" fontSize="sm">
          This is a
          <HelperImage src="/nextjs-black-logo.svg" label="NextJS" />
          app with
          <HelperImage
            src="/chakra-ui-logomark-colored.svg"
            label="Chakra UI"
          />
          and
          <HelperImage src="/ts-logo-512.svg" label="TypeScript" />
          setup.
        </Box>
        {data?.map(({ text, id }: { text: string; id: number }) => (
          <Button mr="4" mb="4" colorScheme="twitter" key={id}>
            {text}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default SomeText;
