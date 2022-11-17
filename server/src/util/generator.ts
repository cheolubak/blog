import { customAlphabet } from 'nanoid';

export const randomIdGenerator = (): string => {
  return customAlphabet(
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    10,
  )();
};
