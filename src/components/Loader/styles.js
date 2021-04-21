import { StyleSheet } from 'react-native';
import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000080',
  },
  activityIndicatorWrapper: {
    height: platform.oneHundredScale,
    width: platform.oneHundredScale,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
