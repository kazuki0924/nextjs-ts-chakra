import { RiMoonFill, RiSunLine } from 'react-icons/ri';

import { IconButton } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode';

export const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="theme toggle"
      icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
      onClick={toggleColorMode}
    />
  );
};
