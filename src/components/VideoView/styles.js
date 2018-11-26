import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: width
  },
  cameraIconContainer: {
    position: 'absolute',
    right: 10,
    top: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 40,
    width: 40,
    borderRadius: 20
  },
  cameraIcon: {
    backgroundColor: 'transparent',
    lineHeight: 40,
    marginLeft: 10
  },
  volumeIconContainer: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 40,
    width: 40,
    borderRadius: 20
  },
  volumeIcon: {
    backgroundColor: 'transparent',
    lineHeight: 40, 
    marginLeft: 10
  },
});

export default styles;
