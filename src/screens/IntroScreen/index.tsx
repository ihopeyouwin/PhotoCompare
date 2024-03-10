import { ScrollView, Text } from 'react-native';
import { ReactJsx } from '../../types';
import styles from './styles';
import React from 'react';
import { ApplicationText } from '../../constants';

const IntroScreen = (): ReactJsx => {
  const {
    greeting: { title, text, bullets },
  } = ApplicationText;
  return (
    <ScrollView style={styles.root} contentContainerStyle={styles.textContainer} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.bullets}>{bullets}</Text>
    </ScrollView>
  );
};

export default IntroScreen;
