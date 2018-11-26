import { createStackNavigator } from 'react-navigation';
// import { TabFollow } from '../screens/TabFollow';
import Follow from '../screens/Follow';

const StackFollow = createStackNavigator({
  TabFollow: {
    screen: Follow,
    navigationOptions: {
      header: null,
    },
  },
});

export { StackFollow };
