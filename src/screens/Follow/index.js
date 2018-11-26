import React, { Component } from 'react';
import { SafeAreaView, View, Text, Button, Dimensions } from 'react-native';
import {
  TabView,
  TabBar,
  SceneMap
} from 'react-native-tab-view';
import styles from './styles';

const { width, height } = Dimensions.get('window');
const initialLayout = {
  height: 0,
  width: width,
};

const FirstRoute = () => (
  <View style={styles.screen} >
    <Text>Following</Text>
  </View>
);

const SecondRoute = () => (
  <View style={styles.screen} >
    <Text>You</Text>
  </View>
);

class Follow extends Component {
  state = {
    index: 1,
    routes: [
      { key: 'following', title: 'Following' },
      { key: 'you', title: 'You' },
    ],
  };

  _handleIndexChange = index =>
    this.setState({
      index,
    });

  _renderTabBar = props => (
    <TabBar
      {...props}
      scrollEnabled={false}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      labelStyle={styles.label}
    />
  );

  _renderScene = SceneMap({
    following: FirstRoute,
    you: SecondRoute,
  });

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <TabView
          style={[styles.container, this.props.style]}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          onIndexChange={this._handleIndexChange}
          initialLayout={initialLayout}
        />
      </SafeAreaView>
    );
  }
}

export default Follow;
