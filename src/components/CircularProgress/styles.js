import { StyleSheet } from 'react-native';
import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  circularProgressView: {
    marginStart: 0,
  },
  innerTextOnCircularProgress: {
    fontFamily: platform.titleFontfamily,
    fontSize: platform.fontSizeBase,
    color: platform.brandPrimary,
    paddingBottom: platform.fiveScale,
    alignSelf: 'center',
  },
});

export default styles;
