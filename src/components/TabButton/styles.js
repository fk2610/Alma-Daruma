import { StyleSheet } from 'react-native';
import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  disabledTab: {
    backgroundColor: platform.footerDefaultBg,
  },
  button: {
    borderTopWidth: 0,
    borderTopColor: '#c3c3c3',
    paddingHorizontal: 0,
    borderRadius: 0,
    borderRightColor: platform.brandPrimary,
    borderRightWidth: 0.2,
    height: platform.footerHeight,
  },
  activeButton: {
    borderTopColor: platform.brandPrimary,
    borderTopWidth: 3,
    borderRadius: 0,
  },
});

export default styles;
