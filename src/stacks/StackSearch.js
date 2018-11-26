import { createStackNavigator } from 'react-navigation';
import Search from '../screens/Search';

const StackSearch = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      header: null,
    },
  },
});

export { StackSearch };
