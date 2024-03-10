import template from './template';
import { useState } from 'react';
import type { ComponentProps } from 'react';
import { ImageSourcePropType } from 'react-native';

const ComparisonSlider = (
  props: ComponentProps<{ imageBefore: ImageSourcePropType; imageAfter: ImageSourcePropType }>,
) => {
  const [sliderValue, setSliderValue] = useState(0);
  const { imageBefore, imageAfter } = props;
  const imageBeforeSrc = require('../../../assets/glacierBefore.png');
  const imageAfterSrc = require('../../../assets/glacierAfter.png');

  return template({ sliderValue, setSliderValue, imageBeforeSrc, imageAfterSrc, imageBefore, imageAfter });
};

export default ComparisonSlider;
