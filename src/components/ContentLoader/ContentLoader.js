import React from 'react';
import Loader from 'react-content-loader/native';
import { PropTypes } from 'prop-types';
import { View, UIManager, LayoutAnimation } from 'react-native';

import platform from '../../../native-base-theme/variables/platform';
import styles from './styles';
import { isIOS } from '../../utils';

class ContentLoader extends React.Component {
  constructor(props) {
    super(props);
    this.isIOS = isIOS();
    if (!this.isIOS) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUnmount() {
    const { useAnimation, animationType } = this.props;
    if (useAnimation) {
      LayoutAnimation.configureNext(animationType);
    }
  }

  render() {
    const {
      children,
      width,
      height,
      ...rest
    } = this.props;
    return (
      <View
        style={
          [
            { height },
            styles.viewContainer,
          ]
        }
      >
        <Loader
          speed={2}
          backgroundColor={platform.contentLoaderBackgroundColor}
          foregroundColor={platform.contentLoaderForengroundColor}
          {...rest}
        >
          {children}
        </Loader>
      </View>
    );
  }
}

ContentLoader.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  useAnimation: PropTypes.bool,
  animationType: PropTypes.oneOf([
    LayoutAnimation.Presets.easeInEaseOut,
    LayoutAnimation.Presets.linear,
    LayoutAnimation.Presets.spring,
  ]),
};

ContentLoader.defaultProps = {
  width: platform.fourHundredScale,
  height: platform.oneHundredSixtyScale,
  useAnimation: true,
  animationType: LayoutAnimation.Presets.easeInEaseOut,
};

export default ContentLoader;
