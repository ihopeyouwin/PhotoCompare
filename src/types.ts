import React from 'react';
import { CameraOptions, ImageLibraryOptions } from 'react-native-image-picker';

type NestedTextObject = {
  [key: string]: TextValue;
};
type TextValue = string | NestedTextObject;
export type AppText = {
  [key: string]: TextValue;
};

export type ReactJsx = React.JSX.Element;

export type Colors = {
  [key: string]: string;
};

export type Action = {
  title: string;
  actionType: 'capture' | 'library';
  imageType: 'before' | 'after';
  options: CameraOptions | ImageLibraryOptions;
};
