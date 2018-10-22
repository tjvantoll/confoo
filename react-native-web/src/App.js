import React, { Component } from "react";
import { AsyncStorage, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.saved = [];
  }

  componentDidMount() {
    fetch("https://rawgit.com/tjvantoll/ShinyDex/master/assets/151.json")
      .then((response) => response.json())
      .then(async (responseJson) => {
        this.saved = await AsyncStorage.getItem("saved");
        this.saved = this.saved ? JSON.parse(this.saved) : [];

        let results = responseJson.results;
        let data = [];
        results.forEach((item) => {
          item.selected = this.saved.indexOf(item.id) != -1;
          data.push(item);
        })

        this.setState({ dataSource: data });
      })
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => this._renderListItem(item)}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }

  _renderListItem(item) {
    return (
      <TouchableWithoutFeedback
        onPress={() => this._toggleSelected(item)}>
        <View style={{backgroundColor: item.selected === true ? '#C0C0C0' : 'white'}}>
          <View style={ styles.row }>
            <Image
              style={{width: 80, height: 80}}
              source={{uri: item.image}}></Image>
            <Text style={styles.text}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _toggleSelected(item) {
    let dataSource = [...this.state.dataSource];
    let index = dataSource.indexOf(item);
    dataSource[index].selected = !dataSource[index].selected;
    this.setState({ dataSource });

    if (item.selected) {
      this.saved.push(item.id);
    } else {
      this.saved.splice(this.saved.indexOf(item.id), 1);
    }
    AsyncStorage.setItem("saved", JSON.stringify(this.saved));
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#C0C0C0"
  }, 
  text: {
    fontSize: 15,
    paddingLeft: 10
  }
});

export default App;