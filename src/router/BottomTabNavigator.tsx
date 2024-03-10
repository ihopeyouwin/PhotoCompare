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
          headerTitleAlign: 'center',
        }}
      />
      <Tab.Screen
        name='Slider'
        options={{
          title: 'Slider',
          headerStyle: styles.headerStyle,
          headerTitleAlign: 'center',
        }}
        component={SliderScreen}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: colors.borderCommon,
  },
});

export default BottomTabNavigator;
