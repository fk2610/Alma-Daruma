import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import AuthLoading from '../containers/AuthLoading';
import Home from './HomeNavigator';
// import Login from '../containers/Login';

const appNavigator = createSwitchNavigator(
  {
    // AuthLoading and Login it's in progress
    // AuthLoading,
    // Login,
    Home,
  },
  {
    initialRouteName: 'Home',
  },
);
const appContainer = createAppContainer(appNavigator);
export default appContainer;
