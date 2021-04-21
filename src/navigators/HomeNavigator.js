/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import PropTypes from 'prop-types';

import MainFooter from '../components/MainFooter';

import Home from './StartNavigator';
import Transfer from './TransferNavigator';
import Agenda from './AgendaNavigator';
import Profile from '../containers/Profile';

const routes = [
  {
    index: 0,
    name: 'Home',
    label: 'Inicio',
    accessibilityLabel: 'Home',
    icon: 'creditcard',
    iconType: 'AntDesign',
    showOnFooter: true,
  },
  {
    index: 1,
    name: 'Transfer',
    label: 'Transferencias',
    accessibilityLabel: 'Transferencias',
    icon: 'bank-transfer',
    iconType: 'MaterialCommunityIcons',
    showOnFooter: true,
  },
  {
    index: 2,
    name: 'Agenda',
    label: 'Agenda',
    accessibilityLabel: 'Agenda',
    icon: 'users',
    iconType: 'Feather',
    showOnFooter: true,
  },
  {
    index: 3,
    name: 'Profile',
    label: 'Perfil',
    accessibilityLabel: 'Profile',
    icon: 'user',
    iconType: 'AntDesign',
    showOnFooter: true,
  },
];

const Navigator = createBottomTabNavigator(
  {
    Home,
    Transfer,
    Agenda,
    Profile,
  },
  {
    animationEnabled: true,
    tabBarComponent: ({ screenProps, ...props }) => (
      <MainFooter
        routes={routes}
        navigation={props.navigation}
      />
    ),
  },
);

class HomeNavigator extends React.Component {
  static router = Navigator.router;

  render() {
    const { navigation } = this.props;
    return (
      <Navigator
        navigation={navigation}
      />
    );
  }
}
HomeNavigator.propTypes = {
  params: PropTypes.shape({}),
};

HomeNavigator.defaultProps = {
  params: null,
};

export default HomeNavigator;
