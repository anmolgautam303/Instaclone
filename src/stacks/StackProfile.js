import { createStackNavigator } from 'react-navigation';
import Profile from '../screens/Profile';

const StackProfile = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null,
    },
  },
});

export { StackProfile };
