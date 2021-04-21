import { StyleSheet } from 'react-native';

import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  text: {
    color: platform.titleFontColor,
    textAlign: 'center',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default styles;
