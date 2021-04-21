import { StyleSheet } from 'react-native';
import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  disabledTab: {
    backgroundColor: platform.footerDefaultBg,
  },
  button: {
    borderTopWidth: 0.2,
    borderTopColor: '#c3c3c3',
    paddingHorizontal: 0,
    borderRadius: 0,
  },
  activeButton: {
    borderTopColor: platform.tabBarActiveTextColor,
    borderTopWidth: 2,
    borderRadius: 0,
  },
});

export default styles;
