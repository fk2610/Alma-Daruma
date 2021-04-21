import React from 'react';
import { PropTypes } from 'prop-types';
import {
  H2,
  H3,
  H1,
  Text,
} from 'native-base';

import styles from './styles';

class ScreenTitle extends React.PureComponent {
  renderH1 = (children, customStyle, bold) => (
    <H1 style={[styles.text, customStyle, bold && styles.bold]}>
      {children}
    </H1>
  )

  renderH2 = (children, customStyle, bold) => (
    <H2 style={[styles.text, customStyle, bold && styles.bold]}>
      {children}
    </H2>
  )

  renderH3 = (children, customStyle, bold) => (
    <H3 style={[styles.text, customStyle, bold && styles.bold]}>
      {children}
    </H3>
  )

  render() {
    const {
      children,
      customStyle,
      type,
      bold,
    } = this.props;
    if (type === 'H1') {
      return (this.renderH1(children, customStyle, bold));
    } if (type === 'H3') {
      return (this.renderH3(children, customStyle, bold));
    }
    return (this.renderH2(children, customStyle, bold));
  }
}

ScreenTitle.propTypes = {
  type: PropTypes.string,
  children: PropTypes.string.isRequired,
  bold: PropTypes.bool,
  customStyle: Text.propTypes.style,
};

ScreenTitle.defaultProps = {
  customStyle: {},
  type: 'H2',
  bold: false,
};

export default ScreenTitle;
