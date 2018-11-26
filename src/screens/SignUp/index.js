import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { connect } from 'react-redux';
import SignUpForm from '../../components/forms/SignUpForm';
import { registerAction } from '../../actions';
import styles from './styles';

class SignUp extends Component {
  register = (values) => {
    this.props.dispatchRegister(values);
  }

  render() {

    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sign up</Text>
        <SignUpForm register={this.register} />

        <Button
          block
          warning
          style={styles.backButtonStyle}
          onPress={() => { navigation.goBack(); }}
        >
          <Text style={styles.backText}>Back</Text>
        </Button>
      </View>
    );
  }
}

// Mapea los parametros del STORE que se inyectaran en el componente
const mapStateToProps = state => ({
  // numero: state.reducerTest,
});

// Mapea las acciones que ejecutara el componente en el STORE
const mapDistpatchToProps = dispatch => ({
  dispatchRegister: (data) => {
    dispatch(registerAction(data));
  },
});

// Conecta los mapeos
export default connect(mapStateToProps, mapDistpatchToProps)(SignUp);
