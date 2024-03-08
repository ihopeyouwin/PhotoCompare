import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { ReactJsx } from '../types';
import { IntroScreen, SliderScreen } from '../screens';

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
        }}
      />
      <Tab.Screen
        name='Slider'
        options={{
          title: 'Slider',
        }}
        component={SliderScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
