import { createStackNavigator } from 'react-navigation';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';


const StackLoggedOut = createStackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    },
  },
});


export { StackLoggedOut };
