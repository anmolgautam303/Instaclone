import React, { Component } from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity } from 'react-native';
// import Video from 'react-native-video';
import { Asset, Audio, Font, Video } from 'expo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const { width } = Dimensions.get('window');

export default class VideoView extends Component {
  state = {
    rate: 1,
    volume: 1,
    muted: true,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    skin: 'custom',
    ignoreSilentSwitch: null,
    isBuffering: false,
    imageHeight: 0
  }

  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
  }

  componentWillMount() {
    if (this.props.type === 'image') {
      Image.getSize(this.props.source, (w, h) => {
        this.setState({ imageHeight: Math.floor(h * (width / w)) })
      })
    }
  }

  onLoad(data) {
    this.setState({ duration: data.duration });
  }

  onProgress(data) {
    this.setState({ currentTime: data.currentTime });
  }

  onBuffer({ isBuffering }: { isBuffering: boolean }) {
    this.setState({ isBuffering });
  }

  render() {
    if (this.props.type === 'image') {
      return (
        <View>
          <Image
            source={{ uri: this.props.source }}
            style={{ width, height: this.state.imageHeight }}
            resizeMode={'contain'}
          />
        </View>
      )
    }

    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            muted: !this.state.muted
           })
        }}
        activeOpacity={0.8}
        style={styles.container}
      >
        <Video
          source={{ uri: this.props.source }}
          style={styles.container}
          rate={this.state.rate}
          volume={this.state.volume}
          isMuted={this.state.muted}
          shouldPlay
          isLooping
        />
      <View style={styles.cameraIconContainer}>
        <Ionicons name="ios-videocam" size={24} color="white" style={styles.cameraIcon} />
      </View>
      <View style={styles.volumeIconContainer}>
        <Ionicons name={this.state.muted? "ios-volume-off" : "ios-volume-high"} size={24} color="white" style={styles.volumeIcon} />
      </View>

      </TouchableOpacity>
    )
  }
}
