import React from 'react';
import { PropTypes } from 'prop-types';

import TabButton from '../../TabButton';

class Tab extends React.PureComponent {
  onTabPress = () => {
    const { onTabPress, tab } = this.props;
    return onTabPress(tab);
  }

  render() {
    const {
      isDisabled,
      activeIndex,
      tab,
    } = this.props;
    const {
      index,
    } = tab;
    return (
      <TabButton
        tab={tab}
        disabled={isDisabled}
        active={activeIndex === index}
        key={index}
        onPress={this.onTabPress}
      />
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.shape({
    index: PropTypes.number.isRequired,
  }).isRequired,
  activeIndex: PropTypes.number,
  onTabPress: PropTypes.func,
  isDisabled: PropTypes.bool,
};

Tab.defaultProps = {
  activeIndex: undefined,
  onTabPress: () => null,
  isDisabled: false,
};

export default Tab;
