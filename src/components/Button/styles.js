import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.button,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '45%'
  },
  buttonPressed: {
    backgroundColor: colors.buttonPressed,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
