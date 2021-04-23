import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
  Container,
  Text,
} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Rect, Circle } from 'react-content-loader/native';

import ScreenTitle from '../../components/ScreenTitle';
import ActionHeader from '../../components/ActionHeader';
import ContentLoader from '../../components/ContentLoader';
import { onAppReady } from '../../stores/actions';
import { getMainData } from '../../stores/actions/cashFlow';
import CircularProgress from '../../components/CircularProgress';
import CashItem from '../../components/CashItem';

import platform from '../../../native-base-theme/variables/platform';

const mapDispatchToProps = (dispatch) => ({
  onAppReadyAction: () => dispatch(onAppReady()),
  getFullData: () => dispatch(getMainData()),
});

const mapStateToProps = (state) => {
  const { cashFlowReducer } = state;
  return {
    cashFlow: cashFlowReducer.cashFlow,
    transactions: cashFlowReducer.transactions,
    isLoadingCashFlow: cashFlowReducer.isLoadingCashFlow,
  };
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    marginTop: platform.tenScale,
    marginBottom: platform.twentyScale,
    borderBottomColor: platform.brandLight,
    borderBottomWidth: 1,
    paddingHorizontal: platform.twelveScale,
    paddingBottom: platform.tenScale,
  },
  subtitle: {
    color: platform.brandPrimary,
    fontSize: platform.fontSizeH3,
  },
  header: {
    height: platform.tenScale,
  },
  content: {
    flexGrow: 1,
    padding: platform.tenScale,
  },
  emptyText: {
    paddingHorizontal: platform.thirtyScale,
    paddingTop: platform.tenScale,
    fontStyle: 'italic',
  },
  titleContainer: {
    alignItems: 'center',
  },
  circle: {
    marginBottom: platform.twentyScale,
  },
  footerSeparator: {
    marginBottom: platform.fourtyScale,
  },
});

class HomeContainer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshingData: false,
    };
  }

  componentDidMount() {
    const { onAppReadyAction } = this.props;
    onAppReadyAction();
    this.loadHomeData();
  }

  loadHomeData = () => {
    const { getFullData } = this.props;
    getFullData();
  }

  navigate = (route, params) => {
    const {
      navigation: {
        navigate,
      },
    } = this.props;
    return navigate(route, params);
  }

  renderFooter = () => <View style={styles.footerSeparator} />

  renderHeader = () => {
    const { isLoadingCashFlow, cashFlow } = this.props;
    return (
      <View style={styles.titleContainer}>
        <ScreenTitle
          bold
          type="H3"
          customStyle={styles.title}
        >
          Resumen de
          <Text style={[styles.title, styles.subtitle]}>
            {' todas tus cuentas'}
          </Text>
        </ScreenTitle>
        {!isLoadingCashFlow && cashFlow && (
          <CircularProgress
            percentage={100}
            title={`${cashFlow.username}\n      $${cashFlow.currentBalance}`}
            customStyle={styles.circle}
          />
        )}
      </View>
    );
  };

  renderEmptyComponent = () => (
    <Text style={styles.emptyText}>
      No tienes movimiento en la cuenta.
    </Text>
  );

  renderContentLoader = () => (
    <ContentLoader
      height={platform.threeHundredFifty}
      useAnimation={false}
    >
      <Circle
        cx="50%"
        cy="20%"
        r={platform.seventyScale}
      />
      <Rect
        x="10"
        y="52%"
        rx="3"
        ry="3"
        width="95%"
        height={platform.seventyScale}
      />
      <Rect
        x="10"
        y="74%"
        rx="3"
        ry="3"
        width="95%"
        height={platform.seventyScale}
      />
    </ContentLoader>
  )

  renderItem = ({ item }) => (<CashItem item={item} />)

  keyExtractor = (transaction) => transaction.id

  refreshData = () => {
    this.setState({ refreshingData: true }, this.loadHomeData);
    setTimeout(() => {
      this.setState({ refreshingData: false });
    }, 1000);
  }

  render() {
    const {
      transactions,
      isLoadingCashFlow,
    } = this.props;
    const { refreshingData } = this.state;
    const transactionsData = isLoadingCashFlow ? [] : transactions;
    return (
      <Container>
        <ActionHeader
          showLogo
        />
        <FlatList
          data={transactionsData}
          ListHeaderComponent={this.renderHeader}
          ListEmptyComponent={isLoadingCashFlow
            ? this.renderContentLoader : this.renderEmptyComponent}
          renderItem={this.renderItem}
          style={styles.content}
          keyExtractor={this.keyExtractor}
          onRefresh={this.refreshData}
          refreshing={refreshingData}
          ListFooterComponent={this.renderFooter}
        />
      </Container>
    );
  }
}

HomeContainer.propTypes = {
  onAppReadyAction: PropTypes.func.isRequired,
  cashFlow: PropTypes.shape({
    username: PropTypes.string,
    currentBalance: PropTypes.number,
  }),
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      userPaid: PropTypes.string,
      alias: PropTypes.string,
      amount: PropTypes.number,
      interestEarn: PropTypes.number,
      rateEarn: PropTypes.number,
    }),
  ),
  getFullData: PropTypes.func.isRequired,
  isLoadingCashFlow: PropTypes.bool.isRequired,
};

HomeContainer.defaultProps = {
  cashFlow: null,
  transactions: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
