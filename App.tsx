import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/router';
import { colors } from './src/constants';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
