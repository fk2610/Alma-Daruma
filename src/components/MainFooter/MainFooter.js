import React from 'react';
import { Keyboard } from 'react-native';
import { PropTypes } from 'prop-types';

import RemovableView from '../RemovableView';
import FooterTabs from '../FooterTabs';
import { isAndroid } from '../../utils';

class MainFooter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showFooter: true,
    };
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShow.bind(this));
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHide.bind(this));
    this.isAndroid = isAndroid();
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  onTabPress = (route) => {
    this.navigate(route.name);
  }

  navigate = (route, params) => {
    const { navigation } = this.props;
    return navigation.navigate(route, params);
  }

  shoudBeDisabled = () => {
    const {
      navigation: {
        state: {
          routes: navigationRoutes,
        },
      },
    } = this.props;

    let shouldBeDisables = false;
    navigationRoutes.map((route) => {
      if (route.index >= 2) {
        shouldBeDisables = true;
      }
      return route;
    });
    return shouldBeDisables;
  }

  keyboardDidShow() {
    this.setState({ showFooter: false });
  }

  keyboardDidHide() {
    this.setState({ showFooter: true });
  }

  render() {
    const { showFooter } = this.state;
    const {
      navigation: {
        state: {
          index,
        },
      },
      routes,
      disabled,
    } = this.props;
    return (
      <RemovableView
        hidden={this.isAndroid && !showFooter}
      >
        <FooterTabs
          disabled={disabled}
          activeIndex={index}
          tabs={routes}
          onTabPress={this.onTabPress}
        />
      </RemovableView>
    );
  }
}

MainFooter.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
    }),
  ).isRequired,
  disabled: PropTypes.bool,
};

MainFooter.defaultProps = {
  disabled: false,
};

export default MainFooter;
