import { StyleSheet } from 'react-native';
import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  leftStyle: {
    flex: 0,
  },
  inverseLeftIcon: {
    color: platform.brandPrimary,
  },
  rightStyle: {
    flex: 0,
    justifyContent: 'center',
  },
  bodyStyle: {
    flex: 3,
    alignItems: 'center',
    flexDirection: 'row',
  },
  titleStyle: {
    flex: 1,
    marginLeft: platform.fiveScale,
    textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'normal',
    fontSize: platform.titleFontSize,
    color: platform.brandPrimary,
  },
  bold: {
    fontWeight: 'bold',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    elevation: 5,
  },
  imageLogo: {
    maxWidth: platform.oneHundredScale,
    maxHeight: platform.fiftyScale,
  },
});

export default styles;
