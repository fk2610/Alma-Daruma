import React from 'react';
import {
  View,
  Modal,
} from 'react-native';
import { Spinner } from 'native-base';
import { PropTypes } from 'prop-types';
import styles from './styles';

class Loader extends React.PureComponent {
  render() {
    const { loading } = this.props;

    return (
      <Modal
        transparent
        animationType="none"
        visible={loading}
        onRequestClose={() => null}
      >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorWrapper}>
            <Spinner color="white" />
          </View>
        </View>
      </Modal>
    );
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  loading: false,
};

export default Loader;
