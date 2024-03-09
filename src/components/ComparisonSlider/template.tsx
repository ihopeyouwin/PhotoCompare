import React, { useState } from 'react';
import { View, Image, ImageSourcePropType, StyleSheet, Dimensions } from 'react-native';
import styles from './styles';
import { ReactJsx } from '../../types';
import Slider from '@react-native-community/slider';

type Props = {
  sliderValue: number;
  setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  imageBeforeSrc: ImageSourcePropType;
  imageAfterSrc: ImageSourcePropType;
};

const template = (props: Props): ReactJsx => {
  const { sliderValue, setSliderValue, imageBeforeSrc, imageAfterSrc } = props;
  const fullWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.imagesContainer}>
        <Image style={[styles.imageLeft, { width: fullWidth }]} source={imageBeforeSrc} />
        <View style={[styles.overlayContainer, { width: fullWidth * (1 - sliderValue) }]}>
          <Image source={imageAfterSrc} style={[styles.imageRight, { width: fullWidth }]} />
        </View>
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
