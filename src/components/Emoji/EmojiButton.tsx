import { useRecoilState, useRecoilValue } from 'recoil';

import { Button } from '@chakra-ui/react';

import { emojiIconState, emojiPickerState } from '../../atoms/emoji';

export const EmojiButton = () => {
  const emoji = useRecoilValue(emojiIconState);
  const [emojiPicker, toggleEmojiPicker] = useRecoilState(emojiPickerState);

  return (
    <Button
      fontSize={64}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="dark-lg"
      h="10rem"
      w="10rem"
      rounded="xl"
      className="ignore-onclickoutside"
      onClick={() => {
        toggleEmojiPicker(!emojiPicker);
      }}
    >
      {emoji}
    </Button>
  );
};
