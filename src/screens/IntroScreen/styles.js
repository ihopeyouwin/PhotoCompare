import { StyleSheet } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 8,
  },
  textContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    lineHeight: 26,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 24,
  },
  text: {
    textAlign: 'justify',
    lineHeight: 20,
    fontSize: 18,
  },
  bullets: {
    textAlign: 'left',
    lineHeight: 20,
    fontSize: 18,
  },
});

export default styles;
