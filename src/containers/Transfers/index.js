import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ScreenTitle from '../../components/ScreenTitle';

import platform from '../../../native-base-theme/variables/platform';

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = (state) => ({
});

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    marginTop: platform.tenScale,
    marginBottom: platform.twentyScale,
  },
  header: {
    height: platform.tenScale,
  },
  remidersContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

class TransfersContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigate = (route, params) => {
    const {
      navigation: {
        navigate,
      },
    } = this.props;
    return navigate(route, params);
  }

  render() {
    return (
      <Container>
        <Header transparent style={styles.header} />
        <Content>
          <ScreenTitle
            bold
            type="H1"
            customStyle={styles.title}
          >
            Bienvenido a Daruma!
          </ScreenTitle>
        </Content>
      </Container>
    );
  }
}

TransfersContainer.propTypes = {
};

TransfersContainer.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(TransfersContainer);
