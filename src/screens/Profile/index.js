import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { auth } from '../../services/Firebase';
import styles from './styles';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          block
          style={styles.LogOutButtonStyle}
          onPress={() => { auth.signOut(); }}
        >
          <Text style={styles.text}>Log out</Text>
        </Button>
      </View>
    );
  }
}

export default Profile;
