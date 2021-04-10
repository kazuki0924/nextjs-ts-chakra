import {atom} from "recoil";

export const emojiIconState = atom({
  key: 'emojiIconState',
  default: '🦏',
});

export const emojiPickerState = atom({
  key: 'emojiPickerState',
  default: false,
});
