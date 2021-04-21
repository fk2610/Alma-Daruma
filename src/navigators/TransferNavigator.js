import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import Transfers from '../containers/Transfers';

export default createStackNavigator(
  {
    Transfers,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);
