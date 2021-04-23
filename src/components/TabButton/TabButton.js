import React from 'react';
import { PropTypes } from 'prop-types';
import {
  Button,
  Icon,
} from 'native-base';

import styles from './styles';

class TabButton extends React.PureComponent {
  render() {
    const {
      tab: {
        icon,
        iconType,
        accessibilityLabel,
        accessibilityHint,
      },
      active,
      disabled,
      onPress,
      ...rest
    } = this.props;

    return (
      <Button
        vertical
        active={active}
        accessibilityHint={accessibilityHint}
        accessibilityRole="tab"
        disabled={disabled}
        style={[
          styles.button,
          disabled && styles.disabledTab,
          active && styles.activeButton,
        ]}
        accessibilityLabel={accessibilityLabel}
        accessibilityState={{
          selected: active,
          disabled,
        }}
        onPress={disabled ? undefined : onPress}
        transparent
        {...rest}
      >
        <Icon
          name={icon}
          type={iconType}
          style={styles}
        />
      </Button>
    );
  }
}

TabButton.propTypes = {
  active: PropTypes.bool,
  tab: PropTypes.shape({
    index: PropTypes.number.isRequired,
    icon: PropTypes.string,
    accessibilityLabel: PropTypes.string.isRequired,
    accessibilityHint: PropTypes.string,
    iconType: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

TabButton.defaultProps = {
  active: true,
  disabled: false,
  onPress: undefined,
};

export default TabButton;
