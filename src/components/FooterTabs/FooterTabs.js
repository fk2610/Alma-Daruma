import React from 'react';
import {
  Footer,
  FooterTab,
} from 'native-base';
import { PropTypes } from 'prop-types';

import Tab from './Tab';
import styles from './styles';

class FooterTabs extends React.PureComponent {
  renderTab = (tab) => {
    const { activeIndex, onTabPress, disabled } = this.props;
    const {
      name,
    } = tab;
    return (
      <Tab
        key={name}
        activeIndex={disabled ? -1 : activeIndex}
        tab={tab}
        onTabPress={onTabPress}
        isDisabled={disabled}
      />
    );
  }

  renderTabs = () => {
    const { tabs } = this.props;
    return tabs.map((tab) => {
      const { showOnFooter } = tab;
      if (showOnFooter) {
        return this.renderTab(tab);
      }
      return null;
    });
  }

  render() {
    return (
      <Footer
        style={styles.footer}
      >
        <FooterTab>
          {this.renderTabs()}
        </FooterTab>
      </Footer>
    );
  }
}

FooterTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
    }),
  ).isRequired,
  activeIndex: PropTypes.number,
  onTabPress: PropTypes.func,
  disabled: PropTypes.bool,
};

FooterTabs.defaultProps = {
  activeIndex: undefined,
  onTabPress: () => null,
  disabled: false,
};

export default FooterTabs;
