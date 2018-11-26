import React, { Component } from 'react';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import GridView from 'react-native-super-grid';
import styles from './styles';
import items from './items';

const rowHeight = 40;

class Search extends Component {
  state = {
    data: items
  }

  async textChange(text) {
    let filteredData = await items.filter(item => item.name.startsWith(text));
    this.setState({
      data: filteredData
    });
  }

_keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
          showLoading={false}
          platform="ios"
          cancelButtonTitle="Cancel"
          placeholder='Search'
          onChangeText={(text) => this.textChange(text)}
          onClear={(text) => this.textChange(text)}
        />

        <GridView
          itemDimension={130}
          items={this.state.data}
          style={styles.gridView}
          renderItem={item => (
            <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.age}</Text>
            </View>
          )}
        />

      </SafeAreaView>
    );
  }
}

export default Search;
