import { createBottomTabNavigator } from 'react-navigation';
import { StackHome } from './StackHome';
import { StackSearch } from './StackSearch';
import { StackFollow } from './StackFollow';
import { StackAdd } from './StackAdd';
import { StackProfile } from './StackProfile';
import tabBarIcon from '../utils/tabBarIcon';

const StackLoggedIn = createBottomTabNavigator({
  Home: {
    screen: StackHome,
    navigationOptions: {
      tabBarIcon: tabBarIcon('ios-home'),
      tabBarOptions:{
        showLabel: false,
      }
    },
  },
  Search: {
    screen: StackSearch,
    navigationOptions: {
      tabBarIcon: tabBarIcon('ios-search'),
      tabBarOptions:{
        showLabel: false
      }
    },
  },
  Add: {
    screen: StackAdd,
    navigationOptions: {
      tabBarIcon: tabBarIcon('ios-add-circle'),
      tabBarOptions:{
        showLabel: false
      }
    },
  },
  Follow: {
    screen: StackFollow,
    navigationOptions: {
      tabBarIcon: tabBarIcon('ios-heart'),
      tabBarOptions:{
        showLabel: false
      }
    },
  },
  Profile: {
    screen: StackProfile,
    navigationOptions: {
      tabBarIcon: tabBarIcon('ios-person'),
      tabBarOptions:{
        showLabel: false
      }
    },
  },
}, {
  tabBarPosition: 'bottom',
  headerMode: 'screen',
});
export { StackLoggedIn };
