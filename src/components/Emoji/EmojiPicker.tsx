import { BaseEmoji, Picker } from 'emoji-mart';
import useOnclickOutside from 'react-cool-onclickoutside';
import { useRecoilState } from 'recoil';

import { Box } from '@chakra-ui/react';

import { emojiIconState, emojiPickerState } from '../../atoms/emoji';

export const EmojiPicker = () => {
  const [_, setEmoji] = useRecoilState(emojiIconState);
  const [isEmojiPickerSelected, toggleEmojiPicker] = useRecoilState(
    emojiPickerState
  );

  const ref = useOnclickOutside(() => {
    toggleEmojiPicker(false);
  });

  return isEmojiPickerSelected ? (
    <Box
      ref={ref}
      maxW={'330px'}
      minW={'330px'}
      w={'full'}
      boxShadow={'2xl'}
      rounded={'lg'}
      zIndex={10}
    >
      <Picker
        set="apple"
        emojiTooltip={true}
        style={{
          position: 'relative',
        }}
        onSelect={({ native }: BaseEmoji) => {
          setEmoji(native);
          toggleEmojiPicker(!isEmojiPickerSelected);
        }}
      />
    </Box>
  ) : null;
};
