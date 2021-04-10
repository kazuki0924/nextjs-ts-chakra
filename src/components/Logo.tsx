import { Box, HStack, Text } from '@chakra-ui/react';

export const Logo = <T extends {}>(props: T) => {
  return (
    <Box {...props}>
      <HStack spacing="0px">
        <Text fontSize="3rem">📚</Text>
        <Text fontSize="2rem" fontWeight="bold">
          wyr
        </Text>
      </HStack>
    </Box>
  );
};
