import { StyleSheet, Dimensions } from 'react-native';

const fullWidth = Dimensions.get('window').width - 24;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagesContainer: {
    position: 'relative',
    width: fullWidth,
    minHeight: 400,
    marginHorizontal: 12,
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  topImage: {
    zIndex: 1,
  },
  bottomImage: {
    zIndex: 0,
  },
  slider: {
    width: '90%',
    height: 40,
  },
});
export default styles;
