import { StyleSheet } from 'react-native';
import platform from '../../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: platform.fifteenScale,
  },
  cardHeader: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: platform.twoScale,
  },
  cardBody: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  amountMoney: {
    fontWeight: 'bold',
    fontSize: platform.fontSizeH3,
  },
  alias: {
    fontWeight: 'bold',
    fontSize: platform.noteFontSize,
  },
  earnCardBody: {
    marginLeft: platform.twelveScale,
    marginTop: platform.sevenScale,
  },
  clockIcon: {
    fontSize: platform.noteFontSize,
  },
  badge: {
    marginLeft: platform.tenScale,
    flexDirection: 'row',
    alignItems: 'center',
  },
  earnRate: {
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconArrow: {
    color: platform.inverseTextColor,
    fontSize: platform.noteFontSize,
  },
  footerCard: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  footerText: {
    color: platform.brandPrimary,
  },
});

export default styles;
