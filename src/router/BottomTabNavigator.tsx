import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ReactJsx } from '../types';
import { IntroScreen, SliderScreen } from '../screens';
import { colors } from '../constants';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (): ReactJsx => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'black',
      }}
    >
      <Tab.Screen
        name='IntroScreen'
        component={IntroScreen}
        options={{
          title: 'Intro',
          headerStyle: styles.headerStyle,
        }}
      />
      <Tab.Screen
        name='Slider'
        options={{
          title: 'Slider',
          headerStyle: styles.headerStyle,
        }}
        component={SliderScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});

export default BottomTabNavigator;
