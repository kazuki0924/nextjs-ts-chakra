import { Box } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/react';
import { BaseEmoji, Picker } from 'emoji-mart';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import useOnclickOutside from 'react-cool-onclickoutside';

export default function EmojiPicker() {
  const [chosenEmoji, setChosenEmoji] = useState('🦏');
  const [pickerToggle, setPickerToggle] = useState(false);

  const ref = useOnclickOutside(() => {
    setPickerToggle(false);
  });

  return (
    <>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box className="ignore-onclickoutside">
          <motion.nav whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
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
              onClick={() => {
                setPickerToggle(!pickerToggle);
              }}
            >
              {chosenEmoji}
            </Button>
          </motion.nav>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Box
          ref={ref}
          pos="absolute"
          display="flex"
          alignItems="50%"
          justifyContent="center"
          ml={30}
          zIndex={4}
        >
          <motion.nav>
            {pickerToggle ? (
              <Picker
                set="apple"
                emojiSize={24}
                emojiTooltip={true}
                onSelect={({ native }: BaseEmoji) => {
                  setChosenEmoji(native);
                  setPickerToggle(!pickerToggle);
                }}
              />
            ) : null}
          </motion.nav>
        </Box>
      </Box>
    </>
  );
}
