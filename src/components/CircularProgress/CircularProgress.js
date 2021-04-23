import React from 'react';
import {
  Text,
  View,
} from 'native-base';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import PropTypes from 'prop-types';

import styles from './styles';
import platform from '../../../native-base-theme/variables/platform';

class CircularProgress extends React.PureComponent {
  render() {
    const {
      percentage,
      title,
      customStyle,
    } = this.props;
    return (
      <AnimatedCircularProgress
        size={platform.oneHundredFifty}
        width={platform.fifteenScale}
        fill={percentage}
        rotation={0}
        style={customStyle}
        tintColor={platform.brandPrimary}
        backgroundColor={platform.backgroundCircularProgressColor}
      >
        {
          () => (
            <Text
              accessible={false}
              accessibilityElementsHidden
              importantForAccessibility="no"
              style={styles.innerTextOnCircularProgress}
            >
              {title}
            </Text>
          )
        }
      </AnimatedCircularProgress>
    );
  }
}

CircularProgress.propTypes = {
  percentage: PropTypes.number,
  title: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  customStyle: View.propTypes.style,
};

CircularProgress.defaultProps = {
  percentage: 100,
  title: 0,
  customStyle: styles.circularProgressView,
};

export default CircularProgress;
