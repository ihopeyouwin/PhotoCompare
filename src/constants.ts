import { Action, AppText, Colors } from './types';

export const ApplicationText: AppText = {
  greeting: {
    title: 'Greetings!',
    text: `Dear sirs and madams\nThis is my basic implementation of your task, during implementation of this task I've utilized:`,
    bullets:
      '- react-native community slider\n- basic react navigation\n- react-native picker and related permissions\n- divided code into separate small pieces according to common sense',
  },
  emptyImagePlaceholder: 'No image\nselected',
};

export const colors: Colors = {
  white: '#FFFFFF',
  black: '#040517',
  borderCommon: 'rgba(173,168,168,0.66)',
  borderPicker: '#b03636',
  button: '#ec785e',
  buttonPressed: 'rgba(236,120,94,0.53)',
};

export const firstImageActions: Action[] = [
  {
    title: 'Select 1st Image',
    actionType: 'library',
    imageType: 'before',
    options: {
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    },
  },
  {
    title: 'Take 1st Image',
    actionType: 'capture',
    imageType: 'before',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    },
  },
];

export const secondImageActions: Action[] = [
  {
    title: 'Select 2nd Image',
    actionType: 'library',
    imageType: 'after',
    options: {
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    },
  },
  {
    title: 'Take 2nd Image',
    actionType: 'capture',
    imageType: 'after',
    options: {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    },
  },
];
