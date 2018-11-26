import { createStackNavigator } from 'react-navigation';
import Home from '../screens/Home';

const StackHome = createStackNavigator({
  Home: {
    screen: Home,
  }
});

export { StackHome };
