import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { ReactJsx } from '../../types';

const template = (): ReactJsx => {
  return (
    <View style={styles.root}>
      <Text>this is main screen</Text>
      <Text>this is main screen</Text>
      <Text>this is main screen</Text>
      <Text>this is main screen</Text>
      <Text>this is main screen</Text>
      <Text>this is main screen</Text>
    </View>
  );
};

export default template;
