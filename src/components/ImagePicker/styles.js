import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  emptyImage: {
    borderColor: colors.borderPicker,
    borderWidth: 1,
    minWidth: '50%',
    minHeight: 160,
    alignSelf: 'center',
    marginVertical: 12,
    justifyContent: 'center',
  },
  emptyImageText: {
    textAlign: 'center',
  },
  image: {
    width: '80%',
    minHeight: 200,
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
});
export default styles;
