import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 60,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  userImage: {
    width: 36,
    height: 36,
    margin: 12,
    borderRadius: 18,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray'
  },
  userName: {
    fontWeight: 'bold',
    height: 60,
    lineHeight: 60,
    flex: 1
  },
  moreIcon: {
    lineHeight: 60,
    marginRight: 15,
  },
  leftSideIcons: {
    height: 54,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  heartIcon: {
    marginTop: 12,
    marginLeft: 15
  },
  textIcon: {
    marginTop: 12,
    marginLeft: 20,
  },
  sendIcon: {
    marginTop: 12,
    marginLeft: 20
  },
  bookmarkIcon: {
    marginTop: 12,
    marginRight: 15,
  },
  timeTextContainer: {
    marginBottom: 20,
    paddingLeft: 15
  },
  timeText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5
  },
});

export default styles;
