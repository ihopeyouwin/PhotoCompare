import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  imageLeft: {
    top: 0,
    left: 0,
    height: 300,
    resizeMode: 'contain',
  },
  imageRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 300,
    resizeMode: 'contain',
  },
  slider: {
    height: 40,
  },
  imagesContainer: {
    position: 'relative',
    height: 300,
  },
  overlayContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 300,
    overflow: 'hidden',
  },
});
export default styles;
