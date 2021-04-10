import {
  FaBaby, FaChartBar, FaEllipsisV, FaFilter, FaFolder, FaInfo, FaPoo, FaSmile, FaSortNumericDown,
  FaTags, FaTasks, FaToggleOn, FaTrashRestore, FaUserAlt,
} from 'react-icons/fa';

import {
  Box, Button, Container, Flex, Heading, HStack, IconButton, Link, Menu, MenuButton, MenuList,
  Stack, useColorModeValue,
} from '@chakra-ui/react';

import BookDrawer from '../Book/BookDrawer';
import { Logo } from '../Logo';
import { ThemeToggle } from '../ThemeToggle';

export const NavBar = () => {
  return (
    <Box>
      <Flex
        pos="fixed"
        top="0"
        w={'full'}
        minH={'60px'}
        boxShadow={'sm'}
        zIndex="999"
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(26, 32, 44, 0.8)'
          ),
        }}
      >
        <Container
          as={Flex}
          maxW={'7xl'}
          align={'center'}
          style={{ textDecoration: 'none' }}
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'center', md: 'start' }}
          >
            <Link
              href={'/'}
              textDecoration="none"
              _hover={{ textDecoration: 'none' }}
              passHref
            >
              <Stack
                as={'a'}
                direction={'row'}
                alignItems={'center'}
                spacing={{ base: 2, sm: 4 }}
              >
                <Heading
                  as={'h1'}
                  fontSize={'xl'}
                  display={{ base: 'none', md: 'block' }}
                >
                  <Logo />
                </Heading>
              </Stack>
            </Link>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            spacing={8}
            flex={{ base: 1, md: 'auto' }}
            justify={'center'}
          >
            <HStack spacing="0.5rem">
              <Menu closeOnSelect={false}>
                <MenuButton as={Button} colorScheme="gray">
                  <FaFilter />
                </MenuButton>
                <MenuList>
                  <IconButton
                    colorScheme="gray"
                    aria-label="label"
                    icon={<FaPoo />}
                  />
                  <IconButton
                    colorScheme="gray"
                    aria-label="label"
                    icon={<FaTags />}
                  />
                  <IconButton
                    colorScheme="gray"
                    aria-label="label"
                    icon={<FaFolder />}
                  />
                  <IconButton
                    colorScheme="gray"
                    aria-label="label"
                    icon={<FaSortNumericDown />}
                  />
                </MenuList>
              </Menu>

              <IconButton
                colorScheme="gray"
                aria-label="label"
                icon={<FaInfo />}
              />
              <IconButton
                colorScheme="gray"
                aria-label="label"
                icon={<FaChartBar />}
              />
              <IconButton
                colorScheme="gray"
                aria-label="label"
                icon={<FaTasks />}
              />
              <IconButton
                colorScheme="gray"
                aria-label="label"
                icon={<FaTrashRestore />}
              />

              <Menu closeOnSelect={false}>
                <MenuButton as={Button} colorScheme="gray">
                  <FaEllipsisV />
                </MenuButton>
                <MenuList>
                  <Button>
                    <Stack spacing={0}>
                      <FaSmile />
                      <FaToggleOn />
                    </Stack>
                  </Button>
                  <Button>
                    <Stack spacing={0}>
                      <FaBaby />
                      <FaToggleOn />
                    </Stack>
                  </Button>
                </MenuList>
              </Menu>
              <ThemeToggle />
              <IconButton
                colorScheme="gray"
                aria-label="label"
                icon={<FaUserAlt />}
              />
            </HStack>
          </Stack>

          <Stack
            direction={'row'}
            align={'center'}
            spacing={8}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}
          >
            <BookDrawer />
          </Stack>
        </Container>
      </Flex>
    </Box>
  );
};
