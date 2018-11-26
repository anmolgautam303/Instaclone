import { createStackNavigator } from 'react-navigation';
import Add from '../screens/Add';

const StackAdd = createStackNavigator({
  Add: {
    screen: Add,
    navigationOptions: {
      header: null,
    },
  },
});

export { StackAdd };
