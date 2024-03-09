import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/router';
import { colors } from './src/constants';

function App(): React.JSX.Element {
  const { black, white } = colors;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? white : black,
  };

  return (
    <SafeAreaProvider>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
