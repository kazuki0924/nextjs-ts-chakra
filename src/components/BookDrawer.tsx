import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { API_URL } from '../common/const';
import EmojiPicker from './EmojiPicker';

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
    isSuccess ? toast({
      title: 'Book added.',
      description: "You've aded book to your list.",
      status: 'success',
      duration: 1000,
      isClosable: true,
    }) : null;
  };

  return (
    <>
      <Button
        variant={'solid'}
        colorScheme={'teal'}
        mx={4}
        onClick={onOpen}
        leftIcon={<AddIcon />}
      >
        Action
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Add What To Read</DrawerHeader>
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
            <EmojiPicker />
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl isInvalid={errors.name}>
                <FormLabel htmlFor="book_title">Book title</FormLabel>
                <Input
                  name="title"
                  placeholder="title"
                  ref={register}
                  autoComplete="off"
                  mb={8}
                />
                <FormLabel htmlFor="author">Book author</FormLabel>
                <Input
                  name="author"
                  placeholder="author"
                  autoComplete="off"
                  ref={register}
                  mb={8}
                />
                <FormLabel htmlFor="published_at">Published At</FormLabel>
                <Input
                  name="published_at"
                  placeholder="published_at"
                  autoComplete="off"
                  ref={register}
                  mb={8}
                />
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
