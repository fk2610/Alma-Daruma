/**
 * Returns navigation options with tabBarVisible equals true
 * if the tab navigation should be visible.
 * Otherwise returns it with equals false.
 * @param {*} navigation
 * @param {*} index
 */
export default function manageTabNavigatorVisibility({ navigation }, index) {
  const tabBarVisible = navigation.state.index < index;
  return {
    tabBarVisible,
  };
}
