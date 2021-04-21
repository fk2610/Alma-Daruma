import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

class RemovableView extends React.PureComponent {
  render() {
    const { children, hidden } = this.props;
    if (hidden) {
      return <View />;
    }
    return (
      <View {...this.props}>
        {children}
      </View>
    );
  }
}

RemovableView.propTypes = {
  children: PropTypes.node.isRequired,
  hidden: PropTypes.bool,
};

RemovableView.defaultProps = {
  hidden: false,
};

export default RemovableView;
