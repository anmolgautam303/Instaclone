import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { ImagePicker, Permissions } from 'expo';
import styles from './styles';

class Add extends Component {
  async _takePhoto() {
    const {
      status: cameraPerm
    } = await Permissions.askAsync(Permissions.CAMERA);

    const {
      status: cameraRollPerm
    } = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (cameraPerm === 'granted' && cameraRollPerm === 'granted') {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      // await this._setImage(pickerResult.uri)
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Open camera"
          onPress={this._takePhoto}
        />
      </View>
    );
  }
}

export default Add;
