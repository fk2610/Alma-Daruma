import { StyleSheet } from 'react-native';

import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  footer: {
    borderTopColor: platform.footerBorderColor,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderWidth: 1,
    elevation: 1,
    shadowRadius: 2,
    borderBottomColor: platform.footerDefaultBg,
  },
});

export default styles;
