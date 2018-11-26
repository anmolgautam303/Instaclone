import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { Field, reduxForm } from 'redux-form';

const fieldName = (props) => {

  return (
    <View style={styles.textInputContainer}>
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
      {props.meta.touched && props.meta.error &&
        <Text style={styles.error}>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};
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

  return errors;
};

const SignInForm = (props) => {
  return (
    <View>
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

      <Button
        block
        success
        style={styles.signInButtonStyle}
        onPress={props.handleSubmit(props.signin)}
      >
        <Text style={styles.signInText}>Sign in</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginBottom: 30,
  },
  error: {
    color: '#e74c3c',
  },
  signInText: {
    color: 'white',
  },
  signInButtonStyle: {
    marginVertical: 30,
  },
  textInput: {
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});


export default reduxForm({
  form: 'SignInForm',
  validate,
})(SignInForm);
