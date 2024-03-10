import React from 'react';
import { View, Image, ImageSourcePropType, Dimensions } from 'react-native';
import styles from './styles';
import { ReactJsx } from '../../types';
import Slider from '@react-native-community/slider';

type Props = {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  imageBeforeSrc: ImageSourcePropType;
  imageAfterSrc: ImageSourcePropType;
  imageBefore: ImageSourcePropType;
  imageAfter: ImageSourcePropType;
};

const template = (props: Props): ReactJsx => {
  const { sliderValue, setSliderValue, imageBeforeSrc, imageAfterSrc, imageBefore, imageAfter } = props;

  return (
    <View style={styles.root}>
      <View style={styles.imagesContainer}>
        <Image
          source={imageBefore ? { uri: imageBefore } : imageBeforeSrc}
          style={[styles.image, styles.bottomImage]}
        />
        <Image
          source={imageAfter ? { uri: imageAfter } : imageAfterSrc}
          style={[styles.image, styles.topImage, { opacity: 1 - sliderValue }]}
        />
      </View>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={sliderValue}
        onValueChange={setSliderValue}
      />
    </View>
  );
};

export default template;
