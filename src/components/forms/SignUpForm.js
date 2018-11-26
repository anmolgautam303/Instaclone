import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'native-base';
import { auth } from '../../services/Firebase';

const fieldName = (props) => {
  return (
    <View style={styles.textInputContainer} >
      <TextInput
        style={styles.textInput}
        placeholder={props.placeholder}
        onChangeText={props.input.onChange}
        value={props.input.value}
        autoCapitalize="none"
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmPassword')}
        onBlur={props.input.onBlur}
      />
      {props.meta.touched && props.meta.error
        && <Text style={styles.error}>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'required';
  } else if (values.username.length < 5) {
    errors.username = 'This field should have 5 length at least';
  } else if (values.username.length > 10) {
    errors.username = 'This field only should have 10 characters';
  }

  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email';
  }

  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 5) {
    errors.password = 'You need 5 characters at least';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'required';
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = 'The confirmation should be same the password';
  }

  return errors;
};

const SignUpForm = (props) => {
  return (
    <View>
      <Field
        name="username"
        component={fieldName}
        placeholder="Username"
      />
      <Field
        name="email"
        component={fieldName}
        placeholder="Email"
      />
      <Field
        name="password"
        component={fieldName}
        placeholder="Password"
      />
      <Field
        name="confirmPassword"
        component={fieldName}
        placeholder="Confirm Password"
      />

      <Button
        block
        success
        style={styles.registerButtonStyle}
        onPress={props.handleSubmit(props.register)}
      >
        <Text style={styles.registerText}>Register</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 30,
  },
  error: {
    color: '#e74c3c',
  },
  textInput: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  registerButtonStyle: {
    marginVertical: 30,
  },
  registerText: {
    color: 'white',
  },
});


export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
