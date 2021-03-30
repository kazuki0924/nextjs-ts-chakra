import React from 'react';
import { HStack, Text } from '@chakra-ui/react';

export default function Logo<T>(props: T) {
  return (
    <HStack spacing="0px" {...props}>
      <Text fontSize="3rem" fontWeight="bold">
        📚
      </Text>
      <Text fontSize="2rem" fontWeight="bold">
        wyr
      </Text>
    </HStack>
  );
}
