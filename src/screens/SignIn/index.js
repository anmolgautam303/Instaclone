import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import styles from './styles';

import SignInForm from '../../components/forms/SignInForm';
import { loginAction } from '../../actions';


class SignIn extends Component {
  signin = (values) => {
    this.props.login(values);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign in</Text>
        <SignInForm signin={this.signin} />

        <Button
          block
          info
          style={styles.signUpButtonStyle}
          onPress={() => { navigation.navigate('SignUp'); }}
        >
          <Text style={styles.signUpText}>Sign up</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDistpatchToProps = dispatch => ({
  login: (data) => {
    dispatch(loginAction(data));
  },
});

export default connect(mapStateToProps, mapDistpatchToProps)(SignIn);
