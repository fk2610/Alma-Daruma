import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';

import Agenda from '../containers/Agenda';

export default createStackNavigator(
  {
    Agenda,
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
    },
  },
);
