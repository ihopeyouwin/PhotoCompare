import template from './template';
import { useState } from 'react';

const ComparisonSlider = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const imageBeforeSrc = require('../../../assets/glacierBefore.png');
  const imageAfterSrc = require('../../../assets/glacierAfter.png.png');
  return template({ sliderValue, setSliderValue, imageBeforeSrc, imageAfterSrc });
};

export default ComparisonSlider;
