import { motion } from 'framer-motion';

import { Box } from '@chakra-ui/layout';
import { Button, SimpleGrid } from '@chakra-ui/react';

export default function EmojiTest() {
  const a1 = 'something';
  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <SimpleGrid columns={[1, null, 5]} spacing="40px">
          {['ðĨ', 'ðĪ', 'ð', 'ð', 'ðĶī'].map((emoji, i) => (
            <motion.nav
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                mx={4}
                my={4}
                height="10rem"
                width="10rem"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                padding={4}
                fontSize={64}
                boxShadow="dark-lg"
                p="6"
                rounded="xl"
                bg="white"
              >
                {emoji}
              </Button>
            </motion.nav>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
}
