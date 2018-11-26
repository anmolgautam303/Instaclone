import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';
import { connect } from 'react-redux';
import { auth } from './services/Firebase';
import { StackLoggedOut } from './stacks/StackLoggedOut';
import { StackLoggedIn } from './stacks/StackLoggedIn';
import { setSessionAction, clearSessionAction } from './actions';

class Loading extends Component {
  componentWillMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.user ? <StackLoggedIn /> : <StackLoggedOut />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.reducerSession,
  };
};

const mapDistpatchToProps = (dispatch) => {
  return {
    checkAuth: () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          dispatch(setSessionAction(user));
        } else {
          dispatch(clearSessionAction());
        }
      });
    },
  };
};

export default connect(mapStateToProps, mapDistpatchToProps)(Loading);
