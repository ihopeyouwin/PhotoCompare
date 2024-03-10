import React, { useEffect, useState } from 'react';
import { StatusBar, useColorScheme, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/router';
import { colors } from './src/constants';
import { checkMultiple, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const cameraPermission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
const galleryPermission = Platform.OS === 'ios' ? PERMISSIONS.IOS.PHOTO_LIBRARY : PERMISSIONS.ANDROID.READ_MEDIA_VIDEO;

function App(): React.JSX.Element {
  const { black, white } = colors;
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? white : black,
  };

  useEffect(() => {
    checkMultiple([cameraPermission, galleryPermission]).then((status) => {
      switch (status) {
        case RESULTS.BLOCKED: {
          //open modal?
          break;
        }
        case RESULTS.DENIED: {
          //request(cameraPermission)
          //request(galleryPermission)
          break;
        }
        default:
          break;
      }
    });
  }, []);

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
