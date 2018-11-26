import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import VideoView from '../../components/VideoView';
import styles from './styles';
import data from './data';

class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'InstaClone',
    };
  };

  _keyExtractor = (item, index) => index.toString();

  iconPressed(text) {
    Alert.alert(
      text,
      null,
      [
        {text: 'OK'},
      ],
      { cancelable: false }
    )
  }

  renderIcon(icon, text, styles) {
    return (
      <Ionicons
        name={icon}
        size={34}
        color="black"
        style={styles}
        onPress={() => this.iconPressed(text)}
      />
    );
  }

  renderItem(item) {
    return (
      <React.Fragment>
        <View style={styles.header}>
          <Image
            style={styles.userImage}
            source={{ uri: item.avatarUrl }}
          />
          <Text style={styles.userName}>{item.username}</Text>
          <Ionicons name="ios-more" size={30} color="black" style={styles.moreIcon} />
        </View>
        <VideoView type={item.type} source={item.source} />
        <View style={styles.leftSideIcons}>
          {this.renderIcon("ios-heart", 'liked ♥', styles.heartIcon)}
          {this.renderIcon("ios-text", 'comment pressed', styles.textIcon)}
          {this.renderIcon("ios-send", 'share pressed', styles.sendIcon)}
          <View style={styles.container} />
          {this.renderIcon("ios-bookmark", 'bookmark pressed', styles.bookmarkIcon)}
        </View>
        <View style={styles.timeTextContainer}>
          <Text style={styles.timeText}>{`${item.time} MINUTES AGO`}</Text>
        </View>
      </React.Fragment>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        style={styles.container}
        data={data}
        renderItem={({ item }) => this.renderItem(item)}
      />
    );
  }
}

export default Home;
