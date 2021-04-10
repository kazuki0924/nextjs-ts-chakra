import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';

import { AddIcon } from '@chakra-ui/icons';
import {
  Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay,
  FormControl, FormErrorMessage, FormLabel, Input, useDisclosure, useToast, VStack,
} from '@chakra-ui/react';

import { API_URL } from '../../common/const';
import { EmojiButton } from '../Emoji/EmojiButton';
import { EmojiPicker } from '../Emoji/EmojiPicker';

const createBook = async (book: {
  title: string;
  author: string;
  published_at: string;
}) => (await axios.post(API_URL + '/book', book)).data;

const BookDrawer = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, error, isSuccess, mutate } = useMutation(
    createBook,
    {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    }
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { handleSubmit, errors, register, formState } = useForm();
  const toast = useToast();

  const onSubmit = (values: {
    title: string;
    author: string;
    published_at: string;
  }) => {
    mutate(values);
    onClose();
    isSuccess
      ? toast({
          title: 'Book added.',
          description: "You've aded book to your list.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      : toast({
          title: 'Failed to add book to the list.',
          description: 'failed',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
  };

  return (
    <>
      <Button
        variant={'solid'}
        colorScheme={'teal'}
        onClick={onOpen}
        leftIcon={<AddIcon />}
      >
        Add
      </Button>
      <Drawer size="md" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>What you read?</DrawerHeader>
          <DrawerBody>
            <Box mb={2}>
              {isLoading ? (
                'Adding book...'
              ) : (
                <>
                  {isError ? (
                    <Box>
                      An error occurred:{' '}
                      {(error as { message: string }).message}
                    </Box>
                  ) : null}
                </>
              )}
            </Box>
            <VStack>
              <EmojiButton />
              <Box mb={16}>
                <EmojiPicker />
              </Box>
            </VStack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mt={8} isInvalid={errors.name}>
                <FormLabel>The book is known as</FormLabel>
                <Input
                  name="aka"
                  placeholder="That O'Reilly's JavaScript book"
                  ref={register}
                  autoComplete="off"
                  mb={8}
                  w="100%"
                />
                {/* <FormLabel htmlFor="author">Book author</FormLabel>
                  <Input
                    name="author"
                    placeholder="author"
                    autoComplete="off"
                    ref={register}
                    size="lg"
                    mb={8}
                  />
                  <FormLabel htmlFor="published_at">Published At</FormLabel>
                  <Input
                    name="published_at"
                    placeholder="published_at"
                    autoComplete="off"
                    ref={register}
                    mb={8}
                  /> */}
                <FormErrorMessage>
                  {errors.name && errors.name.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                mt={4}
                colorScheme="teal"
                isLoading={formState.isSubmitting}
                type="submit"
              >
                Submit
              </Button>
            </form>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default BookDrawer;
