import React from 'react';
import type { ComponentProps } from 'react';

interface NestedTranslations {
  [key: string]: TranslationValue;
}

type TranslationValue = string | NestedTranslations;

export type Translations = {
  [key: string]: TranslationValue;
};

export type ReactJsx = React.JSX.Element;
export type Colors = {
  [key: string]: string;
};
