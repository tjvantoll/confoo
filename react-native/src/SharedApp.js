import React, { Component } from "react";
import { AsyncStorage, FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

class SharedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <SafeAreaView>
        <Text>Hi</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

});

export default SharedApp;