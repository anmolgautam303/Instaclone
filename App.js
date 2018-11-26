import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import Loading from './src/Loading';
import Store from './src/store';
import "./src/utils/ReactotronConfig";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <Loading />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
