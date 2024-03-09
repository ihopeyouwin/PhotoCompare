import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { ReactJsx } from '../../types';
import ComparisonSlider from '../../components/ComparisonSlider';

const template = (): ReactJsx => {
  return (
    <View style={styles.root}>
      <ComparisonSlider />
    </View>
  );
};

export default template;
