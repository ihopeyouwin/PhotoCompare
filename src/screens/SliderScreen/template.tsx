import React from 'react';
import { ScrollView } from 'react-native';
import styles from './styles';
import { ReactJsx } from '../../types';
import { firstImageActions, secondImageActions } from '../../constants';

import { ImagePicker, ComparisonSlider } from '../../components';

const template = (props): ReactJsx => {
  const { onButtonPress, imageBefore, imageAfter } = props;

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      <ComparisonSlider imageBefore={imageBefore} imageAfter={imageAfter} />
      <ImagePicker imageSrc={imageBefore} actions={firstImageActions} onPress={onButtonPress} />
      <ImagePicker imageSrc={imageAfter} actions={secondImageActions} onPress={onButtonPress} />
    </ScrollView>
  );
};

export default template;
