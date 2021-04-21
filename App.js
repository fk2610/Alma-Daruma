import React from 'react';
import { Root, StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import store from './src/stores';
import AppNavigator from './src/navigators';
import Loader from './src/components/Loader';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';

const roboto = require('native-base/Fonts/Roboto.ttf');
const robotoMedium = require('native-base/Fonts/Roboto_medium.ttf');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
    };
    SplashScreen.preventAutoHideAsync(); // Instruct SplashScreen not to hide yet
  }

  loadResourcesAsync = () => Font.loadAsync({
    Roboto: roboto,
    Roboto_medium: robotoMedium,
    ...MaterialCommunityIcons.font,
  });

  handleLoadingError = (error) => console.warn(error);

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  loadAssetsAsync = async () => this.loadResourcesAsync();

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          startAsync={this.loadAssetsAsync}
          onError={this.handleLoadingError}
          onFinish={this.handleFinishLoading}
          autoHideSplash={false}
        />
      );
    }

    return (
      <Root>
        <StyleProvider style={getTheme(platform)}>
          <Provider store={store}>
            <Loader />
            <AppNavigator />
          </Provider>
        </StyleProvider>
      </Root>
    );
  }
}
